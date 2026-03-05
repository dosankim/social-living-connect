import React from 'react';
import { ArrowRight, BookOpen, Download, MailPlus } from 'lucide-react';
import './News.css';

export default function News() {
    return (
        <div className="news-page pb-20">
            {/* Premium Header */}
            <div className="news-header-premium text-center">
                <div className="news-header-content">
                    <span className="news-header-badge">Ezipnet Magazine</span>
                    <h1 className="news-header-title">소셜 리빙 매거진</h1>
                    <p className="news-header-desc">
                        함께 살아가는 가치, 이웃들의 다채로운 삶의 이야기와<br />사회주택의 따끈따끈한 소식을 가장 먼저 전해드립니다.
                    </p>
                </div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '60px' }}>
                {/* Featured Resident Interview */}
                <section className="mb-24">
                    <div className="section-header flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-h2 font-bold flex items-center gap-3 mb-2">
                                <BookOpen size={32} className="text-primary" /> 입주자 스토리
                            </h2>
                            <p className="text-secondary text-body">이집넷을 통해 새로운 일상을 만난 사람들의 이야기</p>
                        </div>
                        <button className="btn btn-ghost text-primary text-sm font-bold flex items-center gap-1 hover:underline p-0">
                            더 읽어보기 <ArrowRight size={16} />
                        </button>
                    </div>

                    <div className="interview-premium-layout">
                        <div className="interview-img-wrapper">
                            <img
                                src={`/social-living-connect/images/news_interview_1.png`}
                                alt="이은지 입주자 인터뷰"
                                className="interview-img"
                            />
                            <div className="interview-img-overlay"></div>
                        </div>
                        <div className="interview-content-card shadow-lg">
                            <div className="interview-tag">인터뷰 • 코리빙 라이프</div>
                            <h3 className="interview-title">
                                "나만의 공간과 취향을<br />나누는 이웃이 생겼어요"
                            </h3>
                            <p className="interview-excerpt">
                                안암동 코리빙 하우스에 입주한 지 어느덧 1년이 된 프리랜서 디자이너 이은지님. 그녀는 매일 아침 공유 라운지에서 커피를 내리며 이웃들과 가벼운 인사를 나누는 일상이 가장 큰 행복이라고 말합니다. 혼자만의 작업실이 필요했던 그녀가 코리빙 하우스를 선택하게 된 이유를 들어봅니다.
                            </p>
                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
                                <div className="interview-author">
                                    <div className="font-bold text-sm">에디터 김이집</div>
                                    <div className="text-xs text-secondary mt-1">2026. 03. 15</div>
                                </div>
                                <button className="btn btn-primary btn-sm flex items-center gap-2 rounded-full px-6">
                                    인터뷰 전문 보기 <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter Archive */}
                <section className="mb-20">
                    <div className="section-header flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-h2 font-bold flex items-center gap-3 mb-2">
                                <MailPlus size={32} className="text-primary" /> 월간 뉴스레터 & 자료실
                            </h2>
                            <p className="text-secondary text-body">이집넷의 주요 소식과 운영사 리포트를 확인하세요</p>
                        </div>
                        <button className="btn btn-outline border-2 text-sm font-bold rounded-full">
                            뉴스레터 구독하기
                        </button>
                    </div>

                    <div className="newsletter-grid">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="newsletter-card-premium cursor-pointer">
                                <div className="newsletter-img-container">
                                    <img src={`/social-living-connect/images/news_newsletter_1.png`} alt="Newsletter Cover" className="newsletter-img" />
                                    <div className="newsletter-vol-badge">
                                        Vol. {24 - num}
                                    </div>
                                </div>
                                <div className="newsletter-info">
                                    <div className="text-xs font-bold text-primary mb-3">2026년 {4 - num}월호</div>
                                    <h4 className="text-lg font-bold mb-3 leading-snug hover-title">
                                        {num === 1 ? '봄맞이 커뮤니티 대축제 현장 스케치' : num === 2 ? '신규 오픈! 마포구 소셜 하우징 입주 안내' : '2025년 하반기 이집넷 우수 커뮤니티 시상'}
                                    </h4>
                                    <p className="text-sm text-secondary mb-6 line-clamp-2 leading-relaxed">
                                        {num === 1
                                            ? '따뜻한 봄날, 여러 운영사가 연합하여 개최한 루프탑 바베큐 파티와 플리마켓 현장을 사진으로 담았습니다. 참여해주신 모든 분들께 감사드립니다.'
                                            : num === 2
                                                ? '마포구 연남동에 새롭게 오픈한 예술인 특화 다세대 주택의 완공 소식과 1차 입주자 모집 공고를 안내해 드립니다.'
                                                : '지난 하반기 동안 가장 활발하게 교류하며 선한 영향력을 펼친 우수 소모임과 개인 활동가들을 소개합니다.'}
                                    </p>
                                    <button className="newsletter-download-btn">
                                        <Download size={16} /> PDF 다운로드
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
