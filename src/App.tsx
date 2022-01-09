import React, { Suspense } from 'react';
import Navbar from './app/components/Navbar';
import GlobalStyle from './app/styles/globalStyles';
const Dashboard = React.lazy(()=> import('./views/dasahboard'));

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyle/>
      <Suspense fallback={<p>Loading</p>}>
        <Dashboard />
      </Suspense>
    </>
  );
}

export default App;
