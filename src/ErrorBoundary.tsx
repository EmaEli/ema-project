import { Component, FC, PropsWithChildren } from 'react';

export interface ErrorBoundaryProps extends PropsWithChildren {
  fallback: FC;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

// ErrorBoundary class to catch JavaScript errors in React components.
// Currently there isn't a functional implementation of the ErrorBoundary in React.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // Lifecycle method to update state when an error is encountered
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  // Lifecycle method to log errors or perform additional actions
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo); // Log error details to the console
  }

  render() {
    return this.state.hasError
      ? <this.props.fallback />
      : this.props.children;
  }
}

export default ErrorBoundary;
