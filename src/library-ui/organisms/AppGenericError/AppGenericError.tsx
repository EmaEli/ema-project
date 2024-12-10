import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Actions, Button } from './AppGenericError.styled';

const AppGenericError: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container>
      <h1>{t('error.title', 'Something went wrong')}</h1>
      <p>{t('error.message', 'We encountered an unexpected error. Please try again later.')}</p>
      <Actions>
        <Button onClick={() => window.location.reload()}>
          {t('error.reload', 'Reload Page')}
        </Button>
        <Button onClick={() => navigate('/')}>
          {t('error.home', 'Go to Homepage')}
        </Button>
      </Actions>
    </Container>
  );
};

export default AppGenericError;
