import styled from 'styled-components';

import { Button } from '@/components/common/Button/Button';
import { Flex } from '@/components/common/Flex/Flex';

export const SearchMapWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  /* height: calc(100% - 7rem); */
  flex-direction: column;
`;

export const SearchInputContainer = styled(Flex)`
  position: fixed;
  top: 9rem;
  width: 30rem;
  justify-content: space-around;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  gap: 1rem;
`;

export const HashTagInputContainer = styled(SearchInputContainer)`
  width: 30rem;
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
  border-radius: 8px;
`;

export const SearchCurrentPosition = styled(Button)`
  padding: 1rem;
  position: fixed;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  bottom: 5rem;
  width: 20rem;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
`;

export const FloatingButton = styled(Flex)`
  position: absolute;
  bottom: 5rem;
  right: 2.5rem;
  flex-direction: column;
  border-radius: 50%;
  background-color: white;
  padding: 1rem;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
`;
