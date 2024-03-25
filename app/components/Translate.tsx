import React, { useState } from 'react';
import countries from './countries';
import translate from 'google-translate-api';

interface TranslateProps {
  children: React.ReactNode;
}

const Translate: React.FC<TranslateProps> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  const handleLanguageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    await translatePage(language);
  };

  const translatePage = async (language: string) => {
    try {
      const translatedText = await translate(children.toString(), { to: language });
      console.log(`Page translated to ${language}:`, translatedText.text);
      // Here you can update the state or replace the content of the page with translatedText.text
    } catch (error) {
      console.error('Translation failed:', error);
    }
  };

  return (
    <div>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select Language</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <div>{children}</div>
    </div>
  );
};

export default Translate;
