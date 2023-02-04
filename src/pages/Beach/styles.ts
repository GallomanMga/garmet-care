import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    
    
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    padding: 2rem;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.mainText} ;
     
`
export const Span = styled(motion.span)`
    margin-top: 2rem;
    font-size: 1.5rem;
`

export const Topics = styled(motion.li)`
    font-size: 1rem;
`

export const TopicsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 82vw;
    align-items: center;
    justify-content: center;
    gap: 1rem;
 
`


export const Alert = styled.div`
    display: flex;
    border: 1px solid;
    border-color: ${props => props.theme.mainText};
    padding:1rem;
    margin: 0.5rem;
   font-family: ${props => props.theme.SuisseIntlBook};

    align-items: center;
    justify-content: center
`