import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100Vh;
  padding: 3rem;
  background-color: ${props => props.theme.mainbackground};
`
export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.mainbackground};
`;

export const Flag = styled.div<{ active: boolean }>`
  font-size: 24px;
  margin-right: 8px;
  cursor: pointer;
  opacity: ${props => (props.active ? '1' : '0.2')};

  &:last-child {
    margin-right: 0;
  }
`;

