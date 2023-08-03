import React from 'react';
import loading from '../../assets/lottie/loading.json';
import Lottie from 'react-lottie';
import styled from '@emotion/styled';
import { EColors } from '../../styles';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container>
      <Lottie options={defaultOptions} height={30} width={30} />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${EColors.black};
`;
