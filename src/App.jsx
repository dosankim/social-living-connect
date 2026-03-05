import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MapSearch from './pages/MapSearch';
import CommunityList from './pages/CommunityList';
import CommunityDetail from './pages/CommunityDetail';
import Insight from './pages/Insight';
import News from './pages/News';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="page-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapSearch />} />
          <Route path="/community" element={<CommunityList />} />
          <Route path="/community/:id" element={<CommunityDetail />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
