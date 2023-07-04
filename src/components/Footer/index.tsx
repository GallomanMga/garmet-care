import { t } from "i18next";
import { ClickAnimation } from "../LottieAnimation/ClickAnimation";
import { Container } from "./styles";

export function Footer() {
    return(
        <>
        <Container
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
        >
            <ClickAnimation />
            {t('Clique no Modelo')}
        </Container>
        </>
        
    )
}

// <img src={imgLogo1} alt="" />