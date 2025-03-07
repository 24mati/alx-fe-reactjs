import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import PostsComponent from './PostsComponent';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // Cache for 10 minutes
    },
  },
});

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowPosts(!showPosts)}>
        Toggle Posts Component
      </button>
      {showPosts && <PostsComponent />}
    </QueryClientProvider>
  );
}

export default App;