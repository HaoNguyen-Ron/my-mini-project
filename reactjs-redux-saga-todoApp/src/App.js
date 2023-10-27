import React, { useEffect } from 'react';
import TodoPage from 'pages/todo';

import './App.css';

function App() { // = Home Page
  return (
    <>
      <div className='container my-5'>
        <TodoPage />
      </div>
    </>

  );
}

export default App;