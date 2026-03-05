import React, { useState } from 'react';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';
import { signIn, signUp } from '../lib/auth';
import { supabase } from '../lib/supabase';
import './AuthModal.css';

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
        <path d="M44.5 20H24v8.5h11.8A11.5 11.5 0 0 1 12.5 24 11.5 11.5 0 0 1 24 12.5c3.1 0 5.9 1.2 8 3.1l6-6A20 20 0 0 0 4 24a20 20 0 0 0 20 20c11 0 20-9 20-20 0-1.3-.1-2.7-.3-4H44.5z" fill="#FFC107" />
        <path d="M6.3 14.7l6.6 4.8A11.5 11.5 0 0 1 24 12.5c3.1 0 5.9 1.2 8 3.1l6-6A20 20 0 0 0 6.3 14.7z" fill="#FF3D00" />
        <path d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.3-5.1A11.5 11.5 0 0 1 12.7 28l-6.5 5A20 20 0 0 0 24 44z" fill="#4CAF50" />
        <path d="M44.5 20H24v8.5h11.8a11.6 11.6 0 0 1-4.3 5.4l6.3 5.1C41.6 35.6 44.5 30.2 44.5 24c0-1.3-.1-2.7-.3-4H44.5z" fill="#1565C0" />
    </svg>
);

const KakaoIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path fillRule="evenodd" clipRule="evenodd"
            d="M9 1.5C4.86 1.5 1.5 4.08 1.5 7.23c0 2.01 1.28 3.77 3.21 4.79l-.84 3.12 3.63-2.4A9.5 9.5 0 0 0 9 12.96c4.14 0 7.5-2.58 7.5-5.73S13.14 1.5 9 1.5z"
            fill="#3A1D1D" />
    </svg>
);

export default function AuthModal({ onClose }) {
    const [mode, setMode] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);
    const [socialLoading, setSocialLoading] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            if (mode === 'login') {
                await signIn(email, password);
                onClose();
            } else {
                await signUp(email, password, name);
                setSuccess('가입 확인 이메일을 보냈습니다. 이메일을 확인해주세요!');
            }
        } catch (err) {
            setError(err.message || '오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    }

    async function handleSocialLogin(provider) {
        setSocialLoading(provider);
        setError('');
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider,
                options: { redirectTo: window.location.origin },
            });
            if (error) throw error;
        } catch (err) {
            setError(err.message || `${provider} 로그인 중 오류가 발생했습니다.`);
            setSocialLoading(null);
        }
    }

    return (
        <div className="auth-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={e => e.stopPropagation()}>
                <button className="auth-close-btn" onClick={onClose}><X size={20} /></button>

                {/* Logo PNG */}
                <div className="auth-logo">
                    <img src="/images/ezipnet_logo_transparent.png" alt="이집넷" className="auth-logo-img" />
                </div>

                <h2 className="auth-title">{mode === 'login' ? '로그인' : '회원가입'}</h2>
                <p className="auth-subtitle">
                    {mode === 'login' ? '다시 만나서 반가워요!' : '사회주택 커뮤니티에 오신 것을 환영합니다'}
                </p>

                {/* Social Login Buttons */}
                <div className="social-btns">
                    <button
                        type="button"
                        className="social-btn social-btn-google"
                        onClick={() => handleSocialLogin('google')}
                        disabled={socialLoading === 'google'}
                    >
                        {socialLoading === 'google' ? <Loader2 size={16} className="animate-spin" /> : <GoogleIcon />}
                        <span>Google로 계속하기</span>
                    </button>
                    <button
                        type="button"
                        className="social-btn social-btn-kakao"
                        onClick={() => handleSocialLogin('kakao')}
                        disabled={socialLoading === 'kakao'}
                    >
                        {socialLoading === 'kakao' ? <Loader2 size={16} className="animate-spin" /> : <KakaoIcon />}
                        <span>카카오로 계속하기</span>
                    </button>
                </div>

                {/* Divider */}
                <div className="auth-divider">
                    <span>또는 이메일로 {mode === 'login' ? '로그인' : '회원가입'}</span>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="auth-form">
                    {mode === 'signup' && (
                        <div className="auth-field">
                            <label>이름</label>
                            <input type="text" placeholder="홍길동" value={name} onChange={e => setName(e.target.value)} required />
                        </div>
                    )}
                    <div className="auth-field">
                        <label>이메일</label>
                        <input type="email" placeholder="hello@ezipnet.com" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="auth-field">
                        <label>비밀번호</label>
                        <div className="auth-pw-wrapper">
                            <input
                                type={showPw ? 'text' : 'password'}
                                placeholder="6자리 이상 입력하세요"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required minLength={6}
                            />
                            <button type="button" className="auth-eye-btn" onClick={() => setShowPw(!showPw)}>
                                {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    {error && <p className="auth-error">{error}</p>}
                    {success && <p className="auth-success">{success}</p>}

                    <button type="submit" className="btn btn-primary auth-submit-btn" disabled={loading}>
                        {loading ? <Loader2 size={18} className="animate-spin" /> : (mode === 'login' ? '로그인' : '회원가입')}
                    </button>
                </form>

                <div className="auth-switch">
                    {mode === 'login'
                        ? <p>아직 계정이 없으신가요? <button onClick={() => setMode('signup')}>회원가입</button></p>
                        : <p>이미 계정이 있으신가요? <button onClick={() => setMode('login')}>로그인</button></p>
                    }
                </div>
            </div>
        </div>
    );
}
