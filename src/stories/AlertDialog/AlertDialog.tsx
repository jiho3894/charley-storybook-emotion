import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { BasicSize, Colors } from '../styles';
import React from 'react';

interface IAlertDialogProps {
  children: ReactElement[];
}

const AlertDialog = ({ children }: IAlertDialogProps) => {
  return (
    <DialogContainer>
      <DialogWrapper>
        <TopWrapper>
          {/* 본문 타이틀 H2 */}
          {children[0]}
          {/* 본문 내용 Body1*/}
          <ContentsWrapper>{children[1]}</ContentsWrapper>
        </TopWrapper>
        <BottomWrapper>
          {/* ButtonGroup */}
          {children[2]}
          {/* AssistiveText */}
          {children[3]}
        </BottomWrapper>
      </DialogWrapper>
    </DialogContainer>
  );
};

const DialogContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: ${BasicSize.Spacing_M};
  background: ${Colors.Opacity_Black100};
`;

const DialogWrapper = styled.div`
  display: flex;
  width: 100%;
  max-height: calc(100vh - 48px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: ${Colors.Opacity_White};
  border-radius: ${BasicSize.Radius_I};
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  padding: ${BasicSize.Spacing_S} ${BasicSize.Spacing_M} ${BasicSize.Spacing_XXS} ${BasicSize.Spacing_M};
  gap: ${BasicSize.Spacing_XS};
`;

const ContentsWrapper = styled.div`
  width: 100%;
  max-height: calc(100vh - 260px);
  overflow: scroll;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: ${BasicSize.Spacing_XS};
  padding: ${BasicSize.Spacing_S};
`;

export default AlertDialog;
