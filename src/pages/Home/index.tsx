import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Container, LanguageSelector, Flag } from './styles'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'



export function Home(){
    const { t, 
        i18n:{ changeLanguage, language } 
    } = useTranslation()

    const [ currentLanguage, setCurrentLanguage ] = useState(language)


    const availableLanguages = [
        { code: 'pt', flag: '🇧🇷' },
        { code: 'en', flag: '🇺🇸' }
      ]
    
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt'
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return (
        <>
            <Header variant="main" to="/"/>

            <LanguageSelector>
                {availableLanguages.map(lang => (
                <Flag
                    key={lang.code}
                    onClick={() => handleChangeLanguage()}
                    active={lang.code === currentLanguage}
                >
                    {lang.flag}
                </Flag>
                ))}
            </LanguageSelector>
        

            <Container>

                <Button 
                    to="/Fitness"
                    title="Fitness"
                    variant="primary"
                />
                <Button 
                    to="/Beach"
                    title="Beach"
                    variant="secondary"
                />
                <Button 
                    to="/Kids"
                    //icon={imgLogo1}
                    title="Kids"
                    variant="tertiary"
                />
               
                <Footer /> 
            </Container>
            
            
            
            

           
            
            
        </>
    )
}