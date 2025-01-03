import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import CreateCardView from './views/CreateCardView';
import MyCollection2 from './views/MyCollection2';
import InStock from './views/Instock';
import './css/styles.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<RegisterView />}/>
          <Route path="/login" element={<LoginView />} />
          <Route path="/create-card" element={<CreateCardView />} />
          <Route path="/private-collection" element={<MyCollection2 />} />
          <Route path="/instock" element={<InStock />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
