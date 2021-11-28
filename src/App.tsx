import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import BottomNavigation from './components/bottomNavigation/BottomNavigation';
import Header from './components/header/Header';
import Films from './pages/Films/Films';
import Search from './pages/Search/Search';
import Trending from './pages/Trending/Trending';
import TvSerials from './pages/TVSerials/TvSerials';
import { setCredits } from './reducers/creditReducer';
import { setIsFetching, setTotalPages, setTrendingItems } from './reducers/trendingItemsReducer';


export const ApiKEY = "608329abc630183c887c6609a400ceab"

export type ActionsType =
  ReturnType<typeof setTrendingItems> |
  ReturnType<typeof setIsFetching> |
  ReturnType<typeof setTotalPages> |
  ReturnType<typeof setCredits>




function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/tvSerials" element={<TvSerials />} />
            <Route path="/films" element={<Films />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Trending />} />
          </Routes>
          <BottomNavigation />
        </div>
      </div>
    </div >
  );
}

export default App;
