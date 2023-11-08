import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { getNewAccessToken } from '../getNewAccessToken';

const BASE_URL = 'http://localhost:3000';

type User = {
  userId: number;
  accessToken: string;
  refreshToken: string;
};

type Comment = {
  id: number;
  content: string;
  userid: number;
};

const comments: Comment = {
  id: 1,
  content: 'sdasadsadsa',
  userid: 12,
};

type Video = {
  videoId: number;
  UUID: string;
};
const video: Video = {
  videoId: 1,
  UUID: 'SADS',
};

const [user, setUser] = useState<User>({
  userId: 1,
  accessToken: 'initial_access_token',
  refreshToken: 'initial_refresh_token',
});

const navigate = useNavigate();

useEffect(() => {
  const addComments = async () => {
    try {
      const response = await axios.post(
        BASE_URL + `/videos/${video.UUID}/comments`,
        { content: comments.content },
        {
          headers: { 'access-token': user.accessToken },
        },
      );
      if (response.data.success && response.data.data) {
        return response.data;
      } else if (response.data.error && response.data.error === 'JWT_TOKEN_EXPIRED_EXCEPTION') {
        const newAccessToken = await getNewAccessToken(user.refreshToken);
        if (newAccessToken) {
          setUser({ ...user, accessToken: newAccessToken });
          const newResponse = await axios.post(
            BASE_URL + `/videos/${video.UUID}/comments`,
            { content: comments.content },
            {
              headers: { 'access-token': user.accessToken },
            },
          );
          if (newResponse.data.success) {
            setUser({
              ...user,
            });
          } else {
            navigate('/error');
          }
        } else {
          navigate('/error');
        }
      }
    } catch (error) {
      navigate('/error');
    }
  };
  if (user) {
    addComments();
  }
}, [user, setUser, navigate]);
