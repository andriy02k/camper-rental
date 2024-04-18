import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Header = lazy(() => import('./Header/Header'));
const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
};

export default App;
