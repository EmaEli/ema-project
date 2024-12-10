import { FC, useState } from 'react';
import reactLogo from 'src/assets/react.svg';
import viteLogo from 'src/assets/vite.svg';
import { useTranslation } from 'react-i18next';
import { Button, GlobalStyle, HorizontalFlex, LayoutBackground, LayoutContainer, Space } from './library-ui';

const App: FC = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const [count, setCount] = useState(0);

  return (
    <LayoutBackground>
      <GlobalStyle />

      <LayoutContainer>
        <HorizontalFlex $gap={Space.V12}>
          <Button onClick={() => switchLanguage('en')}>{t('language.english')}</Button>
          <Button onClick={() => switchLanguage('it')}>{t('language.italian')}</Button>
          <Button onClick={() => switchLanguage('nl')}>{t('language.dutch')}</Button>
        </HorizontalFlex>

        {/* Logo e titolo */}
        <div>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={viteLogo}
              className="logo"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </div>
        <h1>{t('welcome')}</h1>

        <Button onClick={() => setCount((count) => count + 1)}>
          {t('item_count', { count })}
        </Button>
        <p>
          {t('edit')} <code>src/App.tsx</code> {t('and_save')}
        </p>

        {/* Footer */}
        <p className="read-the-docs">
          {t('read_docs')}
        </p>
      </LayoutContainer>
    </LayoutBackground>
  );
};

export default App;
