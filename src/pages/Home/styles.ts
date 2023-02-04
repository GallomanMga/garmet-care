import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100Vh;
  padding: 3rem;
  background-color: ${props => props.theme.mainbackground};
`