import { useEffect } from 'react';

import { axiosInstance } from '..';
import { ApiResponse, User } from '../../pages/MyPage/MyMain';
import { getNewAccessToken } from '../getNewAccessToken';

export const useUserProfile = (user: User, setUser: React.Dispatch<React.SetStateAction<User>>) => {
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get<ApiResponse<User>>(`/api/b/user`);

        if (response.data.success) {
          setUser({ ...user, ...response.data.data });
        } else if (response.data.error === 'JWT_TOKEN_EXPIRED_EXCEPTION') {
          const newAccessToken = await getNewAccessToken(user.refreshToken);
          if (newAccessToken) {
            setUser((prev) => ({ ...prev, accessToken: newAccessToken }));
          } else {
            console.error('Failed to refresh token');
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserProfile();
  }, [user, setUser]);

  return user;
};
