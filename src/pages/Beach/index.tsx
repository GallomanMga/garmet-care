import { GarmetCare } from "../../components/GarmetCare";
import { Header } from "../../components/Header";
import { TagButton } from "../../components/TagButton";
import { Alert, Container, Span, Topics, TopicsWrapper } from "./styles";
import {motion } from 'framer-motion'


import imgLavagem150 from  '../../assets/150C.svg'
import imgLavagem110 from  '../../assets/110C.svg'
import imgLavagem200 from  '../../assets/200C.svg'
import imgLavagemNferro from  '../../assets/Naopassaroferro.svg'


import imgLPNlavarSeco from  '../../assets/Naolavaroseco.svg'
import imgSecarEmVaral from '../../assets/SecarEmVaral.svg'
import imgNSecarEmMaquina from '../../assets/NaoSecarMaquina.svg'
import imgLavagemNormal from '../../assets/LavagemNormal.svg'
import imgLavagemSuave from '../../assets/LavagemSuave.svg'
import imgLavagemMuitoSuave from '../../assets/LavagemMuitoSuave.svg'
import imgLavarComMaos from '../../assets/LavarComMaos.svg'
import imgNaoLavarComAgua from '../../assets/NaoLavarComAgua.svg'

import imgSecarSombra from '../../assets/SecarSombra.svg'
import imgSecarEstendidoHorizontal from '../../assets/SecarEstendidoHorizontal.svg'
import imgSecarPenduradoSemEscorrer from '../../assets/SecarPenduradoSemEscorrer.svg'
import imgSecarMaquinaEmTemperaturaBaixa from '../../assets/SecarMaquinaEmTemperaturaBaixa.svg'
import imgSecarMaquinaEmTemperaturaNormal from '../../assets/SecarMaquinaTemperaturaNormal.svg'

import imgNaoPermiteUsoAlvejante from   '../../assets/NaoPermiteUsoAlvejante.svg'
import imgNaoPermiteUsoNenhumAlvejante from '../../assets/NaoPermiteUsoNenhumAlvejante.svg'
import imgPermiteQualquerTipoAlvejante from '../../assets/PermiteQualquerTipoAlvejante.svg'

import imgLimpezaProfissional23 from '../../assets/LimpezaProfissional23.svg'
import imgLimpezaProfissional24 from '../../assets/LimpezaProfissional24.svg'
import imgLimpezaProfissional25 from '../../assets/LimpezaProfissional251.svg'

import imgLogo from '../../assets/LogoNewBeach.svg'
import { FooterPages } from "../../components/FooterPages";
import ScrollToTop from "react-scroll-to-top";


export function Beach(){
    return (
         <>
        <Header variant="secondary" to="/" />
            <Container>
                <TopicsWrapper>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Lavar separadamente</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Armazenar longe do alcance da luz</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Evite misturar com pe??as claras</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >lavar imediatamente ap??s o uso com ??gua abundante</Topics>
                    <Topics
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                    >Evitar expor em superf??cies pontiagudas ou ??speras
                    </Topics>
                </TopicsWrapper>

                <Span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                > ENTENDA A SUA ETIQUETA </Span>
            
            
                <TagButton variant="secondary" title="LAVAGEM"/>
                    <GarmetCare icon={imgLavagemNormal} title="Modo de lavagem normal em m??quina dom??stica" />
                    <GarmetCare icon={imgLavagemSuave} title="Modo de lavagem suave em m??quina dom??stica" />
                    <GarmetCare icon={imgLavagemMuitoSuave} title="Modo de lavagem muito suave em m??quina dom??stica" />
                    <Alert>Aten????o sempre a temperatura m??xima de lavagem indicada na pe??a</Alert>
                    <GarmetCare icon={imgLavarComMaos} title="Lavar exclusivamente ?? m??o, temperatura m??xima de lavagem 40??C " />
                    <GarmetCare icon={imgNaoLavarComAgua} title="N??o lavar com ??gua" />
               
                <TagButton variant="secondary" title="ALVEJAMENTO"/>
                    <GarmetCare icon={imgPermiteQualquerTipoAlvejante} title="Permite o uso de qualquer tipo de alvejante, mesmo os clorados" />
                    <GarmetCare icon={imgNaoPermiteUsoNenhumAlvejante} title="N??o permite o uso de alvejante clorado" />
                    <GarmetCare icon={imgNaoPermiteUsoAlvejante} title="N??o permite o uso de nenhum tipo de alvejante" />

                <TagButton variant="secondary" title="PASSADORIA"/>
                    <GarmetCare icon={imgLavagem200} title="Passar em temperatura m??xima de 200??C" />
                    <GarmetCare icon={imgLavagem150} title="Passar em temperatura m??xima de 150??C" />
                    <GarmetCare icon={imgLavagem110} title="Passar em temperatura m??xima de 110??C" />
                    <GarmetCare icon={imgLavagemNferro} title="N??o passar ferro" />

                <TagButton variant="secondary" title="SECAGEM"/>
                    <GarmetCare icon={imgSecarMaquinaEmTemperaturaNormal} title="Secar ?? m??quina em temperatura normal" />
                    <GarmetCare icon={imgSecarMaquinaEmTemperaturaBaixa} title="Secar ?? m??quina em temperatura baixa" />
                    <GarmetCare icon={imgNSecarEmMaquina} title="N??o secar ?? m??quina" />
                    <GarmetCare icon={imgSecarEmVaral} title="Secar em varal" />
                    <GarmetCare icon={imgSecarPenduradoSemEscorrer} title="Secar pendurado sem escorrer" />
                    <GarmetCare icon={imgSecarEstendidoHorizontal} title="Secar estendido horizontalmente" />
                    <GarmetCare icon={imgSecarSombra} title="Secar ?? sombra" />

                <TagButton variant="secondary" title="LIMPEZA PROFISSIONAL"/>
                    <GarmetCare icon={imgLimpezaProfissional25}  title="As letras dentro do circulo indicam o tipo de limpeza profissional (seca ou ??mida) e de solvente adequado a cada pe??a" />
                    <GarmetCare icon={imgLimpezaProfissional24} title="As letras abaixo do c??rculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave"/>
                    <GarmetCare icon={imgLimpezaProfissional23} title="As letras abaixo do c??rculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave" />
                    <GarmetCare icon={imgLPNlavarSeco} title="N??o lavar ?? seco" />
            
             
            </Container>

            <FooterPages 
                variant="secondary"
                icon={imgLogo}
            />

            <ScrollToTop 
                smooth 
                top={300} 
                color="#00D6B0"
                style = {{ opacity: 0.5 }}
            /> 
        </>
    )
}