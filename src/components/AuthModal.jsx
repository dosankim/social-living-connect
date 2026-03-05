import React, { useState } from 'react';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';
import { signIn, signUp, signOut } from '../lib/auth';
import './AuthModal.css';

export default function AuthModal({ onClose }) {
    const [mode, setMode] = useState('login'); // 'login' | 'signup'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [loading, setLoading] = useState(false);
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

    return (
        <div className="auth-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={e => e.stopPropagation()}>
                {/* Close Button */}
                <button className="auth-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                {/* Logo */}
                <div className="auth-logo">
                    <span className="auth-logo-text">이<span style={{ color: 'var(--color-primary)' }}>집</span>넷</span>
                </div>

                <h2 className="auth-title">
                    {mode === 'login' ? '로그인' : '회원가입'}
                </h2>
                <p className="auth-subtitle">
                    {mode === 'login' ? '다시 만나서 반가워요!' : '사회주택 커뮤니티에 오신 것을 환영합니다'}
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    {mode === 'signup' && (
                        <div className="auth-field">
                            <label>이름</label>
                            <input
                                type="text"
                                placeholder="홍길동"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}

                    <div className="auth-field">
                        <label>이메일</label>
                        <input
                            type="email"
                            placeholder="hello@ezipnet.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="auth-field">
                        <label>비밀번호</label>
                        <div className="auth-pw-wrapper">
                            <input
                                type={showPw ? 'text' : 'password'}
                                placeholder="6자리 이상 입력하세요"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                minLength={6}
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
                    {mode === 'login' ? (
                        <p>아직 계정이 없으신가요? <button onClick={() => setMode('signup')}>회원가입</button></p>
                    ) : (
                        <p>이미 계정이 있으신가요? <button onClick={() => setMode('login')}>로그인</button></p>
                    )}
                </div>
            </div>
        </div>
    );
}
