import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Optional: Import DevTools
import App from './App';

const queryClient = new QueryClient(); // Create an instance of QueryClient

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Wrap the app with QueryClientProvider */}
      <App /> {/* Your app component */}
      <ReactQueryDevtools initialIsOpen={false} /> {/* Optional: React Query DevTools */}
    </QueryClientProvider>
  </React.StrictMode>
);
