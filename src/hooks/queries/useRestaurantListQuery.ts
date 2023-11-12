import { useQuery } from '@tanstack/react-query';

import { getRestaurantList } from '@/apis/restaurant/getRestaurantList';

import { RestaurantListRequest } from '@/types/restaurant';

export const useRestaurantListQuery = (paramData: RestaurantListRequest, placeType: string) => {
  const { data, isSuccess } = useQuery({
    queryKey: [
      'restaurantList',
      paramData.bottomlat,
      paramData.bottomlng,
      paramData.toplat,
      paramData.toplng,
    ],
    queryFn: () => getRestaurantList(paramData),
    enabled: placeType === 'POSITION',
  });
  return { restaurantListData: data!, isSuccess };
};
