export const PATH = {
  ROOT: '/',
  SIGNUP: '/signup',
  KAKAO_REDIRECT: '/kakao/code',
  SHORT_FORM: '/shorts',
  MAP: '/map',
  USER_VIDEO: (userId: string) => `/user/video/${userId}`,
  SHORT_FORM_STORE: (storeId: string) => `/shorts/store/${storeId}`,
  REVIEW: (storeId: string) => `/review/${storeId}`,
  REVIEW_HASHTAG: (storeId: string) => `/review/${storeId}/hashtag`,
  REVIEW_UPLOAD: (storeId: string) => `/review/${storeId}/upload`,
  REVIEW_EDIT_CLIP: (storeId: string) => `/review/${storeId}/clip`,
  VIDEO_PREVIEW: (storeId: string) => `/review/${storeId}/video-preview`,
  VIDEO_TEXT: (storeId: string) => `/review/${storeId}/video-text`,
  VIDEO_UPLOADING: (storeId: string) => `/review/${storeId}/server-uploading`,
};
