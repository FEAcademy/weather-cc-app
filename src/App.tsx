import { Footer } from 'components/Footer';
import { HomePage } from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

import 'assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem provident officiis. Consequuntur, dolorem amet saepe at ratione id ipsam, mollitia tempore optio praesentium aspernatur aperiam quod dolore modi deserunt.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem provident officiis. Consequuntur, dolorem amet saepe at ratione id ipsam, mollitia tempore optio praesentium aspernatur aperiam quod dolore modi deserunt.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem provident officiis. Consequuntur, dolorem amet saepe at ratione id ipsam, mollitia tempore optio praesentium aspernatur aperiam quod dolore modi deserunt.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem provident officiis. Consequuntur, dolorem amet saepe at ratione id ipsam, mollitia tempore optio praesentium aspernatur aperiam quod dolore modi deserunt.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem provident officiis. Consequuntur, dolorem amet saepe at ratione id ipsam, mollitia tempore optio praesentium aspernatur aperiam quod dolore modi deserunt.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem provident officiis. Consequuntur, dolorem amet saepe at ratione id ipsam, mollitia tempore optio praesentium aspernatur aperiam quod dolore modi deserunt.</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium autem provident officiis. Consequuntur, dolorem amet saepe at ratione id ipsam, mollitia tempore optio praesentium aspernatur aperiam quod dolore modi deserunt.</div>
      <Footer />
    </Router>
  );
};

export default App;
