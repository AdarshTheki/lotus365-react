import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Sidebar } from './components';
import { Dashboard, HomePage } from './pages';

const App = () => {
  return (
    <div className='bg-gray-200'>
      <Router>
        <Header />
        <div className='flex w-full'>
          <Sidebar />
          <div className='flex-1 sm:p-5 py-4 px-2'>
            <Dashboard />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/match/:id' element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
