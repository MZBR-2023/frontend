import styled from 'styled-components';

import { Button } from '@/components/common/Button/Button';
import { Flex } from '@/components/common/Flex/Flex';

export const SearchMapWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const SearchInputContainer = styled(Flex)`
  position: fixed;
  top: 9rem;
  width: 35rem;
  justify-content: space-around;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  gap: 1rem;
`;

export const HashTagInputContainer = styled(SearchInputContainer)`
  width: 35rem;
`;

export const SearchChangeButton = styled.span`
  font-size: 1rem;
  font-weight: bold;
  width: 5rem;
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.background};
`;

export const SearchCurrentPosition = styled(Button)`
  position: fixed;
  box-shadow: 0px -5px 5px rgba(0, 0, 0, 0.1);
  bottom: 7.5rem;
  width: 16rem;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;
