import { ComponentClass, FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../i18n';
import AppGenericError from 'library-ui/AppGenericError/AppGenericError';
import ErrorBoundary, { ErrorBoundaryProps } from 'providers/ErrorBoundary';
import ToastProvider from 'providers/ToastProvider';

export interface AppProvidersProps {
  children: ReactElement;
}

// Export the component that merge all the providers
const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  // List of all the app providers
  const providers: { provider: unknown, props?: Record<string, any> }[] = [
    { provider: BrowserRouter },
    { provider: ErrorBoundary, props: { fallback: AppGenericError } as ErrorBoundaryProps },
    { provider: ToastProvider },
  ];

  return providers.reduceRight((accumulator, item) => {
    const AppProvider = item.provider as ComponentClass;
    return <AppProvider {...item.props}>{accumulator}</AppProvider>;
  }, children);
};

export default AppProviders;
