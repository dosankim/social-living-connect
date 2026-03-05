import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/images/ezipnet_logo.png" alt="이집넷" style={{ height: '40px', width: 'auto' }} />
                        </Link>
                        <p className="footer-description text-secondary text-sm mt-3">
                            새로운 소셜 리빙 네트워크<br />
                            당신의 삶에 꼭 맞는 이웃과 공간을 연결합니다.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <div className="footer-link-col">
                            <h4 className="footer-link-title">서비스</h4>
                            <Link to="/map" className="footer-link">지도검색</Link>
                            <Link to="/community" className="footer-link">커뮤니티</Link>
                            <Link to="/insight" className="footer-link">인사이트</Link>
                            <Link to="/news" className="footer-link">뉴스</Link>
                        </div>
                        <div className="footer-link-col">
                            <h4 className="footer-link-title">고객센터</h4>
                            <Link to="#" className="footer-link">공지사항</Link>
                            <Link to="#" className="footer-link">자주 묻는 질문</Link>
                            <Link to="#" className="footer-link">카카오톡 문의</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom border-t border-[var(--color-border)] mt-8 pt-6">
                    <div className="company-info text-xs text-secondary leading-relaxed mb-4">
                        <span className="font-bold">주식회사 이집넷</span> | 대표 : 이영선<br />
                        사업자등록번호 : 123-45-67890 | 통신판매업신고 : 제2026-서울강남-0000호<br />
                        주소 : 서울특별시 강남구 테헤란로 123, 4층<br />
                        고객센터 : 1588-0000 (평일 10:00 ~ 18:00) | 이메일 : support@ezip.net
                    </div>

                    <div className="footer-legal flex justify-between items-center sm:flex-row flex-col gap-4">
                        <div className="flex gap-4 text-xs text-secondary">
                            <Link to="#" className="font-bold">이용약관</Link>
                            <Link to="#" className="font-bold text-primary">개인정보처리방침</Link>
                            <Link to="#">운영정책</Link>
                        </div>
                        <p className="copyright text-xs text-secondary">
                            © 2026 ezipnet Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
