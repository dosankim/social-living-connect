import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MapSearch from './pages/MapSearch';
import CommunityList from './pages/CommunityList';
import CommunityDetail from './pages/CommunityDetail';
import PropertyDetail from './pages/PropertyDetail';
import Insight from './pages/Insight';
import EventCreate from './pages/EventCreate';
import News from './pages/News';
import GatheringDetail from './pages/GatheringDetail';

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
          <Route path="/gathering/:id" element={<GatheringDetail />} />
          <Route path="/community/create" element={<EventCreate />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
