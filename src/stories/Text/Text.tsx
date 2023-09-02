import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';
import { TFontSize } from '../../type';
import React from 'react';

interface ITextProps extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  variant?: TFontSize;
}

const Text = ({ children, variant = 'H1' }: ITextProps) => {
  switch (variant) {
    case 'H1':
      return <H1>{children}</H1>;
    case 'H2':
      return <H2>{children}</H2>;
    case 'H3':
      return <H3>{children}</H3>;
    case 'H3U':
      return <H3U>{children}</H3U>;
    case 'H4':
      return <H4>{children}</H4>;
    case 'H4U':
      return <H4U>{children}</H4U>;
    case 'H5':
      return <H5>{children}</H5>;
    case 'Body1':
      return <Body1>{children}</Body1>;
    case 'Body2':
      return <Body2>{children}</Body2>;
    case 'Body3':
      return <Body3>{children}</Body3>;
    case 'Caption':
      return <Caption>{children}</Caption>;
    default:
      return <p></p>;
  }
};

const H1 = styled.h1<ITextProps>`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

const H2 = styled.h2<ITextProps>`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`;

const H3 = styled.h3<ITextProps>`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

const H3U = styled.h3<ITextProps>`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-decoration-line: underline;
`;

const H4 = styled.h4<ITextProps>`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const H4U = styled.h4<ITextProps>`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-decoration-line: underline;
`;

const H5 = styled.h5<ITextProps>`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const Body1 = styled.p<ITextProps>`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

const Body2 = styled.p<ITextProps>`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const Body3 = styled.p<ITextProps>`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const Caption = styled.p<ITextProps>`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
`;

export default Text;
