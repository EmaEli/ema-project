import { ComponentClass, FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../i18n';
import ErrorBoundary, { ErrorBoundaryProps } from 'providers/ErrorBoundary';
import ToastProvider from 'providers/ToastProvider';
import { AppGenericError } from 'src/library-ui';

export interface AppProvidersProps {
  children: ReactElement;
}

// Export the component that merge all the providers
// List of all the app providers
const AppProviders: FC<AppProvidersProps> = ({ children }) => {
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
