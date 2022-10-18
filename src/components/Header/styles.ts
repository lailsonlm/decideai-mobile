import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  flex-direction: row;
  padding: 24px;
  padding-top: 24px;
  `