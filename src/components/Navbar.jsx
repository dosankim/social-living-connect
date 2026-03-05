import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, LogOut, ChevronDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { signOut } from '../lib/auth';
import AuthModal from './AuthModal';

export default function Navbar() {
  const location = useLocation();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  async function handleSignOut() {
    await signOut();
    setShowUserMenu(false);
  }

  const displayName = user?.user_metadata?.name || user?.email?.split('@')[0] || '사용자';
  const avatarInitial = displayName[0]?.toUpperCase();

  return (
    <>
      <nav className="navbar">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="/images/ezipnet_logo.png" alt="ezipnet logo" style={{ height: '64px', width: 'auto' }} />
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

            {user ? (
              /* Logged-in: Show avatar + dropdown */
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 btn btn-ghost"
                  style={{ padding: '4px 8px', borderRadius: 'var(--radius-full)' }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'var(--color-primary)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.9rem'
                  }}>
                    {avatarInitial}
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{displayName}</span>
                  <ChevronDown size={14} />
                </button>

                {showUserMenu && (
                  <div style={{
                    position: 'absolute', right: 0, top: 'calc(100% + 8px)',
                    background: 'white', borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                    boxShadow: 'var(--shadow-md)', minWidth: '160px', zIndex: 100,
                  }}>
                    <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>로그인 중</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{displayName}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2"
                      style={{
                        width: '100%', padding: '12px 16px', background: 'none',
                        border: 'none', cursor: 'pointer', fontSize: '0.875rem',
                        color: 'var(--color-text-secondary)', textAlign: 'left',
                      }}
                    >
                      <LogOut size={14} /> 로그아웃
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Not logged in: Show login button */
              <button
                className="btn btn-primary"
                onClick={() => setShowAuthModal(true)}
                style={{ padding: '8px 20px', fontWeight: 600, fontSize: '0.875rem' }}
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </nav>

      {showAuthModal && <AuthModal onClose={() => setShowAuthModal(false)} />}
    </>
  );
}
