import Profile from '../../../assets/Profile.png';
import { Container, RestaurantItem, Title, UnfavoriteButton } from './FavoriteRestaurant.style';

type Restaurant = {
  restaurant_id: number;
  phone_number: string;
  restaurant_name: string;
  address: string;
  thumbnail: string; // 섬네일 이미지 경로를 위한 필드
};

const DUMMY_RESTAURANTS: Restaurant[] = [
  // ... 더미 데이터 8개 (여기서는 2개만 예시로)
  {
    restaurant_id: 1,
    phone_number: '010-1234-5678',
    restaurant_name: 'Restaurant A',
    address: '123 Main St, City A',
    thumbnail: Profile,
  },
  {
    restaurant_id: 2,
    phone_number: '010-8765-4321',
    restaurant_name: 'Restaurant B',
    address: '456 Elm St, City B',
    thumbnail: Profile,
  },
  {
    restaurant_id: 3,
    phone_number: '010-8765-4321',
    restaurant_name: 'Restaurant B',
    address: '456 Elm St, City B',
    thumbnail: Profile,
  },
  {
    restaurant_id: 4,
    phone_number: '010-8765-4321',
    restaurant_name: 'Restaurant B',
    address: '456 Elm St, City B',
    thumbnail: Profile,
  },
  {
    restaurant_id: 5,
    phone_number: '010-8765-4321',
    restaurant_name: 'Restaurant B',
    address: '456 Elm St, City B',
    thumbnail: Profile,
  },
  {
    restaurant_id: 6,
    phone_number: '010-8765-4321',
    restaurant_name: 'Restaurant B',
    address: '456 Elm St, City B',
    thumbnail: Profile,
  },
  {
    restaurant_id: 7,
    phone_number: '010-8765-4321',
    restaurant_name: 'Restaurant B',
    address: '456 Elm St, City B',
    thumbnail: Profile,
  },
  {
    restaurant_id: 8,
    phone_number: '010-8765-4321',
    restaurant_name: 'Restaurant B',
    address: '456 Elm St, City B',
    thumbnail: Profile,
  },
];

const FavoriteRestaurants: React.FC = () => {
  return (
    <Container>
      <Title>즐겨찾기 식당</Title>
      {DUMMY_RESTAURANTS.map((restaurant) => (
        <RestaurantItem key={restaurant.restaurant_id}>
          <img src={restaurant.thumbnail} alt={restaurant.restaurant_name} />
          <div>
            <h4>{restaurant.restaurant_name}</h4>
            <span>{restaurant.address}</span>
          </div>
          <UnfavoriteButton>즐겨찾기 취소</UnfavoriteButton>
        </RestaurantItem>
      ))}
    </Container>
  );
};

export default FavoriteRestaurants;
