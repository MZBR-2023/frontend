import { lazy } from 'react';

export const MapPage = lazy(
  () => import(/* webpackChunkName: "MapPage" */ '@/pages/MapPage/MapPage'),
);

export const IntroPage = lazy(
  () => import(/* webpackChunkName: "IntroPage" */ '@/pages/IntroPage/IntroPage'),
);
export const ReviewEditClip = lazy(
  () =>
    import(
      /* webpackChunkName: "ReviewEditClip" */ '@/pages/ReviewPage/ReviewEditClip/ReviewEditClip'
    ),
);

export const Hashtag = lazy(
  () =>
    import(
      /* webpackChunkName: "ReviewHashtag" */ '@/pages/ReviewPage/ReviewHashTag/ReviewHashtag'
    ),
);
export const ReviewTitle = lazy(
  () => import(/* webpackChunkName: "ReviewTitle" */ '@/pages/ReviewPage/ReviewTitle/ReviewTitle'),
);
export const UpLoad = lazy(
  () =>
    import(/* webpackChunkName: "ReviewUpLoad" */ '@/pages/ReviewPage/ReviewUpload/ReviewUpLoad'),
);
export const ReviewUploading = lazy(
  () =>
    import(
      /* webpackChunkName: "ReviewUploading" */ '@/pages/ReviewPage/ReviewUploading/ReviewUploading'
    ),
);
export const VideoPreview = lazy(
  () =>
    import(/* webpackChunkName: "VideoPreview" */ '@/pages/ReviewPage/VideoPreview/VideoPreview'),
);
export const VideoText = lazy(
  () => import(/* webpackChunkName: "VideoText" */ '@/pages/ReviewPage/VideoText/VideoText'),
);
export const ShortFormPage = lazy(
  () => import(/* webpackChunkName: "ShortFormPage" */ '@/pages/ShortFormPage/ShortFormPage'),
);
export const SignupPage = lazy(
  () => import(/* webpackChunkName: "SignupPage" */ '@/pages/SignupPage/SignupPage'),
);
export const StoreShrotFormPage = lazy(
  () =>
    import(
      /* webpackChunkName: "StoreShrotFormPage" */ '@/pages/StoreShrotFormPage/StoreShrotFormPage'
    ),
);
export const UserVideoPage = lazy(
  () => import(/* webpackChunkName: "UserVideoPage" */ '@/pages/UserVideoPage/UserVideoPage'),
);
