import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BodyBase, BodyBottom, BodyLeft, BodyRight, Footer, Header } from './components';
import { HomePage } from './pages';

const App = () => {
  return (
    <div className='bg-gray-200'>
      <Router>
        <Header />
        <div className='flex w-full max-w-7xl overflow-hidden mx-auto'>
          <BodyLeft />
          <div className='sm:p-4 p-2'>
            <BodyBase />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/match/:id' element={<HomePage />} />
            </Routes>
            <BodyBottom />
          </div>
          <BodyRight />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
