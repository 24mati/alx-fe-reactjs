import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import React Query
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'; // Import DevTools
import App from './App';

const queryClient = new QueryClient(); // Create a new QueryClient instance

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Provide QueryClient to your app */}
      <App />
      <ReactQueryDevtools initialIsOpen={false} /> {/* Optional: React Query DevTools */}
    </QueryClientProvider>
  </React.StrictMode>
);
