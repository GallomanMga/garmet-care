import { Container, Content, Icon, WrapperContainer } from "./style";

interface GarmetCareProps {
    icon?: string;
    title?: string;
}


export function GarmetCare({ icon, title}: GarmetCareProps ){
    return(
        <WrapperContainer>
        <Container>
            
             <Icon src={icon} alt="" />
             
         
             <Content
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
             >
                {title}
             </Content>
        </Container>  
        </WrapperContainer>
        
       
    )
}