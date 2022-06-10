import styled from 'styled-components';
import { theme } from '../../constants/Theme';

const {
  colors: {
    primaryColor,
    secondaryColor,
    accentColor,
    activeColor,
    backgroundColor,
  },
  fonts: { mainFont },
  fontSizing: { mainFontSize, preTitleFontSize, titleFontSize },
  media: { tablet, desktop },
  spacing,
} = theme;

export const BookRed = styled.p`
  width: ${spacing(54)};
  font-family: ${mainFont};

  @media screen and (min-width: ${desktop}) {
    width: ${spacing(90)};
    margin-right: 0;
  } ;
`;

export const ListRed = styled.ul`
  @media screen and (min-width: ${tablet}) {
    display: flex;
    list-style: none;
    font-size: ${mainFontSize};
  } ;
`;

export const Author = styled.p`
  @media screen and (min-width: ${tablet}) {
    width: ${spacing(35)};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${spacing(68)};
  } ;
`;

export const Year = styled.p`
  @media screen and (min-width: ${tablet}) {
    width: ${spacing(72)};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${spacing(24)};
  } ;
`;

export const Pages = styled.p`
  @media screen and (min-width: ${tablet}) {
    width: ${spacing(15)};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${spacing(37)};
  } ;
`;

export const Rating = styled.div``;
