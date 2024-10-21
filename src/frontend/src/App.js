import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import RegisterView from './RegisterView';
import LoginView from './LoginView';
import CreateCardView from './CreateCardView';
import MyCollectionView from './MyCollectionView';
import MyCollection2 from './MyCollection2';
import './styles.css';

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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
