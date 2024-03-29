import { HttpResponse, http } from 'msw';

const restaurantDummy1 = {
  stores: [
    {
      storeId: '1',
      storeName: '털보네', // 식당 이름
      latitude: 37.5099054, // 식당 위도
      longitude: 127.0317466, // 식당 경도
      address: '서울특별시 강남구 테헤란로 112', // 식당 주소
      star_count: 4.73, // 별점
    },
    {
      storeId: '2',
      storeName: '김치찌개', // 식당 이름
      latitude: 37.5196054, // 식당 위도
      longitude: 127.0217466, // 식당 경도
      address: '서울특별시 강남구 테헤란로 123', // 식당 주소
      star_count: 4.13, // 별점
    },
  ],
};
const restaurantDummy2 = {
  stores: [
    {
      storeId: '3',
      storeName: '털보네', // 식당 이름
      latitude: 37.5199054, // 식당 위도
      longitude: 127.0317466, // 식당 경도
      address: '서울특별시 강남구 테헤란로 112', // 식당 주소
      star_count: 4.73, // 별점
    },
    {
      storeId: '4',
      storeName: '김치찌개', // 식당 이름
      latitude: 37.5126054, // 식당 위도
      longitude: 127.0217466, // 식당 경도
      address: '서울특별시 강남구 테헤란로 123', // 식당 주소
      star_count: 4.13, // 별점
    },
  ],
};
const restaurantDummy3 = {
  stores: [
    {
      storeId: '5',
      storeName: '털보네', // 식당 이름
      latitude: 37.5129054, // 식당 위도
      longitude: 127.0317466, // 식당 경도
      address: '서울특별시 강남구 테헤란로 112', // 식당 주소
      star_count: 4.73, // 별점
    },
    {
      storeId: '6',
      storeName: '김치찌개', // 식당 이름
      latitude: 37.5126054, // 식당 위도
      longitude: 127.0237466, // 식당 경도
      address: '서울특별시 강남구 테헤란로 123', // 식당 주소
      star_count: 4.13, // 별점
    },
  ],
};

export const restaurantHandler = [
  http.get('/api/b/restaurants', () => {
    return HttpResponse.json(restaurantDummy1);
  }),
  http.get('/api/b/restaurants/search', () => {
    return HttpResponse.json(restaurantDummy2);
  }),
  http.get('/api/b/restaurants/search/hashtag', () => {
    return HttpResponse.json(restaurantDummy3);
  }),
];
