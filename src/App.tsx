import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/Home';

import 'assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
