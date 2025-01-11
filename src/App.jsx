import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div>
      <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;

