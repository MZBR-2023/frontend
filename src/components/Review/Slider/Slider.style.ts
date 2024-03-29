import styled from 'styled-components';

import { Flex } from '@/components/common/Flex/Flex';

export const SlideWrapper = styled(Flex)`
  flex-direction: column;
  width: 100%;
`;

export const FilterPriceSlide = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: lightgray;
`;
interface InnerSliderProps {
  $rangeMinPercent: number;
  $rangeMaxPercent: number;
}

export const FilterPriceSlideInner = styled.div<InnerSliderProps>`
  position: absolute;
  left: ${(props) => props.$rangeMinPercent}%;
  right: ${(props) => props.$rangeMaxPercent}%;
  height: 40px;
  border-radius: 3px;
  background-color: #f99468;
`;

export const FilterPriceRangeWrap = styled.div`
  position: relative;
  width: 98%;
`;

export const FilterPriceRangeMin = styled.input`
  position: absolute;
  top: -40px;
  left: -5px;
  height: 40px;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  &::-webkit-slider-thumb {
    height: 40px;
    width: 10px;
    border-radius: 5px;
    background-color: gray;
    -webkit-appearance: none;
    pointer-events: auto;
  }
  pointer-events: none;
  cursor: grabbing;
`;

export const FilterPriceRangeMax = styled(FilterPriceRangeMin)`
  left: 5px;
`;

export const CurrentRange = styled(FilterPriceRangeMin)`
  &::-webkit-slider-thumb {
    height: 70px;
    width: 5px;
    border-radius: 5px;
    background-color: #f1500a;
    -webkit-appearance: none;
  }
  pointer-events: none;
  cursor: grabbing;

  &::-webkit-slider-thumb {
    pointer-events: auto;
  }
`;
