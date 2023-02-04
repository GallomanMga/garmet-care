import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container } from './styles'



export function Home(){

    return (
        <>
            <Header variant="main" to="/"/>
            
            <Container>
                <Button 
                    to="/Fitness"
                    title="FITNESS"
                    variant="primary"
                />
                <Button 
                    to="/Beach"
                    title="BEACH"
                    variant="secondary"
                />
                <Button 
                    to="/Kids"
                    //icon={imgLogo1}
                    title="KIDS"
                    variant="tertiary"
                />
               
                <Footer /> 
            </Container>
            
            
            
            

           
            
            
        </>
    )
}