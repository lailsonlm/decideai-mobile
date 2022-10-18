import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  margin-top: 36px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  padding: 24px;
`

export const ViewGroup = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 12px;
`

export const ViewGroupDescription = styled.View`
  flex: 1;
  margin-left: 8px;
`

export const Count = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE['2XL']};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`