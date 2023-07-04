import { Header } from "../../components/Header";
import { TagButton } from "../../components/TagButton";
import { Alert, Container, Span, Topics, TopicsWrapper } from "./styles";
import { t } from "i18next";

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
import { GarmetCare } from "../../components/GarmetCare";
import { FooterPages } from "../../components/FooterPages";

import imgLogo from '../../assets/LogotCiaBroto.svg'
import ScrollToTop from "react-scroll-to-top";

export function Kids(){
    return (
        <>
        <Header variant="tertiary" to="/"/>
            <Container>
                <TopicsWrapper>
                    <Topics
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                        >{t("Lavar separadamente")}</Topics>
                        <Topics
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                        >{t("Armazenar longe do alcance da luz")}</Topics>
                        <Topics
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                        >{t("Evite misturar com peças claras")}</Topics>
                        <Topics
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                        >{t("Lavar imediatamente após o uso com água abundante")}</Topics>
                        <Topics
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                        >{t("Evitar expor em superfícies pontiagudas ou ásperas")}
                        </Topics>
                </TopicsWrapper>

                <Span
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
                > 
                    {t("ENTENDA A SUA ETIQUETA")}
                </Span>

                
                <TagButton variant="tertiary" title={t('Lavagem')}/>
                    <GarmetCare icon={imgLavagemNormal} title={t("Modo de lavagem normal em máquina doméstica")} />
                    <GarmetCare icon={imgLavagemSuave} title={t("Modo de lavagem suave em máquina doméstica")} />
                    <GarmetCare icon={imgLavagemMuitoSuave} title={t("Modo de lavagem muito suave em máquina doméstica")} />
                    <Alert>{t("Atenção sempre a temperatura máxima de lavagem indicada na peça")}</Alert>
                    <GarmetCare icon={imgLavarComMaos} title={t("Lavar exclusivamente à mão, temperatura máxima de lavagem 40°C ")} />
                    <GarmetCare icon={imgNaoLavarComAgua} title={t("Não lavar com água")} />
               
                <TagButton variant="tertiary" title={t("ALVEJAMENTO")}/>
                    <GarmetCare icon={imgPermiteQualquerTipoAlvejante} title={t("Permite o uso de qualquer tipo de alvejante, mesmo os clorados")} />
                    <GarmetCare icon={imgNaoPermiteUsoNenhumAlvejante} title={t("Não permite o uso de alvejante clorado")} />
                    <GarmetCare icon={imgNaoPermiteUsoAlvejante} title={t("Não permite o uso de nenhum tipo de alvejante")} />

                <TagButton variant="tertiary" title={t("PASSADORIA")}/>
                    <GarmetCare icon={imgLavagem200} title={t("Passar em temperatura máxima de 200°C")} />
                    <GarmetCare icon={imgLavagem150} title={t("Passar em temperatura máxima de 150°C")} />
                    <GarmetCare icon={imgLavagem110} title={t("Passar em temperatura máxima de 110°C")} />
                    <GarmetCare icon={imgLavagemNferro} title={t("Não passar ferro")} />

                <TagButton variant="tertiary" title={t("SECAGEM")}/>
                    <GarmetCare icon={imgSecarMaquinaEmTemperaturaNormal} title={t("Secar à máquina em temperatura normal")} />
                    <GarmetCare icon={imgSecarMaquinaEmTemperaturaBaixa} title={t("Secar à máquina em temperatura baixa")} />
                    <GarmetCare icon={imgNSecarEmMaquina} title={t("Não secar à máquina")} />
                    <GarmetCare icon={imgSecarEmVaral} title={t("Secar em varal")} />
                    <GarmetCare icon={imgSecarPenduradoSemEscorrer} title={t("Secar pendurado sem escorrer")} />
                    <GarmetCare icon={imgSecarEstendidoHorizontal} title={t("Secar estendido horizontalmente")} />
                    <GarmetCare icon={imgSecarSombra} title={t("Secar à sombra")} />

                <TagButton variant="tertiary" title={t("LIMPEZA PROFISSIONAL")}/>
                    <GarmetCare icon={imgLimpezaProfissional25}  title={t("As letras dentro do circulo indicam o tipo de limpeza profissional (seca ou úmida) e de solvente adequado a cada peça")} />
                    <GarmetCare icon={imgLimpezaProfissional24} title={t("As letras abaixo do círculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave")} />
                    <GarmetCare icon={imgLimpezaProfissional23} title={t("As letras abaixo do círculo (ou a falta dela), indica o processo de limpeza profissional: normal, suave ou muito suave")} />
                    <GarmetCare icon={imgLPNlavarSeco} title={t("Não lavar à seco")} />
            </Container>

            <FooterPages 
                variant="tertiary"
                icon={imgLogo}
            />

            <ScrollToTop 
                smooth 
                top={300} 
                color="#534EE1'"
                style = {{ opacity: 0.5 }}
            /> 
        </>
    )
}