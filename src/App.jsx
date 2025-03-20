import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Heading from './components/Heading/Heading';
import Home from './pages/Home';
import Country from './pages/Country';
import SearchCountry from './pages/SearchCountry';

export const App = () => {
  return (
    <>
      <Heading title="Country" bottom />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
      </Routes>
    </>
  );
};
