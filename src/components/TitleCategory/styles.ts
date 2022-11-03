import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  margin-left: 4px;
`