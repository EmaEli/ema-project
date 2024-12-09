import { FC, useState } from 'react';
import reactLogo from 'src/assets/react.svg';
import viteLogo from 'src/assets/vite.svg';
import { useTranslation } from 'react-i18next';
import './App.css';

const App: FC = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('it')}>Italiano</button>
      <button onClick={() => switchLanguage('nl')}>Dutch</button>

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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('item_count', { count })}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
