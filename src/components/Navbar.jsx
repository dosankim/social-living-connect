import { Link, useLocation } from 'react-router-dom';
import { Search, User } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <img src=\"/images/ezipnet_logo.png\" alt="ezipnet logo" style={{ height: '64px', width: 'auto' }} />
          </Link>
        </div>
        <div className="nav-links flex justify-center gap-8">
          <Link to="/map" className={`nav-link ${isActive('/map')}`}>집 찾기</Link>
          <Link to="/community" className={`nav-link ${isActive('/community')}`}>모임</Link>
          <Link to="/insight" className={`nav-link ${isActive('/insight')}`}>현황</Link>
          <Link to="/news" className={`nav-link ${isActive('/news')}`}>소식</Link>
        </div>
        <div className="flex items-center gap-4 justify-end">
          <button className="btn btn-ghost" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="btn btn-outline" style={{ padding: '8px', borderRadius: '50%' }} aria-label="My Page">
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
