import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, LogOut, ChevronDown, Menu, X as XIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from '../lib/auth';
import AuthModal from './AuthModal';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  async function handleSignOut() {
    await signOut();
    setShowUserMenu(false);
  }

  const displayName = user?.user_metadata?.name || user?.email?.split('@')[0] || '사용자';
  const avatarInitial = displayName[0]?.toUpperCase();

  const navLinks = [
    { to: '/map', label: '집 찾기' },
    { to: '/community', label: '모임' },
    { to: '/insight', label: '현황' },
    { to: '/news', label: '소식' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src="/images/ezipnet_logo.png" alt="ezipnet logo" style={{ height: '52px', width: 'auto' }} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className={`nav-link ${isActive(link.to)}`}>{link.label}</Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="navbar-right">
            {user ? (
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 btn btn-ghost"
                  style={{ padding: '4px 8px', borderRadius: 'var(--radius-full)' }}
                >
                  <div className="navbar-avatar">{avatarInitial}</div>
                  <span className="navbar-username">{displayName}</span>
                  <ChevronDown size={14} />
                </button>
                {showUserMenu && (
                  <div className="user-dropdown">
                    <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>로그인 중</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{displayName}</p>
                    </div>
                    <button onClick={handleSignOut} className="user-dropdown-item">
                      <LogOut size={14} /> 로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setShowAuthModal(true)}
                style={{ padding: '8px 20px', fontWeight: 600, fontSize: '0.875rem' }}
              >
                로그인
              </button>
            )}

            {/* Mobile Hamburger */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴"
            >
              {mobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-nav-link ${isActive(link.to)}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-menu-divider" />
            {user ? (
              <button onClick={() => { handleSignOut(); setMobileMenuOpen(false); }} className="mobile-nav-link" style={{ color: 'var(--color-primary)' }}>
                로그아웃
              </button>
            ) : (
              <button
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '8px' }}
                onClick={() => { setShowAuthModal(true); setMobileMenuOpen(false); }}
              >
                로그인 / 회원가입
              </button>
            )}
          </div>
        )}
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}
