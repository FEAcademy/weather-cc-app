import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

export const queryClient = new QueryClient();

const App = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageContainer>
        <Footer />
      </QueryClientProvider>
    </Router>
  );
};

export default App;
