import styled, {css} from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type HeaderVariant = 'main' | 'primary' | 'secondary' | 'tertiary'

interface HeaderContainerProps {
    variant: HeaderVariant
}

const headerVariants = {
    main: defaultTheme.mainbackground,
    primary: defaultTheme.primary,
    secondary: defaultTheme.secondary,
    tertiary: defaultTheme.tertiary
}

export const Container = styled.header<HeaderContainerProps>`
    display: flex;
    
    align-items: center;
    justify-content: center;
    padding: 30px;
 
    ${props => {
    return css
    `background-color: ${headerVariants[props.variant]}
    `
  } };
   

    img {
        width: 200px;
        height: 150px;
        cursor: pointer;
    }

    

    
`