import { Container, Flag } from './styles'

interface LanguageSelectorProps {
    activeLanguage: string;
    languages: string[];
    onLanguageChange: (language: string) => void;
  }

export function LanguageSelector({ activeLanguage, languages, onLanguageChange }: LanguageSelectorProps) {
    return (
      <Container>
        {languages.map((language) => (
          <Flag
            key={language}
            active={language === activeLanguage}
            onClick={() => onLanguageChange(language)}
          >
            {language}
          </Flag>
        ))}
      </Container>
    );
  }
  
  
  
 