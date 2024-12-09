import './i18n';
import { ComponentClass, FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary, { ErrorBoundaryProps } from 'ErrorBoundary';
import AppGenericError from 'library-ui/AppGenericError/AppGenericError';

export interface AppProvidersProps {
  children: ReactElement;
}

// Export the component that merge all the providers
const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  // List of all the app providers
  const providers: { provider: unknown, props?: Record<string, any> }[] = [
    { provider: BrowserRouter },
    { provider: ErrorBoundary, props: { fallback: AppGenericError } as ErrorBoundaryProps },
  ];

  return providers.reduceRight((accumulator, item) => {
    const AppProvider = item.provider as ComponentClass;
    return <AppProvider {...item.props}>{accumulator}</AppProvider>;
  }, children);
};

export default AppProviders;
