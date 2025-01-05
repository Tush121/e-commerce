import React from 'react';
import ProductList from './component/ProductList';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="App" style={{ marginTop: '-60px' }}>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;


