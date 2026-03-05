import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Calendar, Clock, MapPin, Users, Share2, Heart,
    CheckCircle2, ChevronLeft, Info, ArrowUpRight
} from 'lucide-react';
import './CommunityDetail.css';

export default function CommunityDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <div className="community-detail-page">
            {/* Top Navigation for Mobile */}
            <div className="community-top-nav">
                <button className="icon-btn-nav" onClick={() => navigate(-1)}>
                    <ChevronLeft size={24} />
                </button>
                <div className="nav-actions flex gap-4">
                    <button className="icon-btn-nav">
                        <Share2 size={24} />
                    </button>
                    <button className="icon-btn-nav" onClick={toggleFavorite}>
                        <Heart size={24} fill={isFavorite ? "#ff4757" : "none"} color={isFavorite ? "#ff4757" : "currentColor"} />
                    </button>
                </div>
            </div>

            {/* Banner Image */}
            <div className="event-banner-wrapper">
                <img
                    src="/images/event_banner_craft.png"
                    alt="Event Banner"
                    className="event-banner"
                />
            </div>

            <div className="container detail-layout">
                {/* Main Content */}
                <div className="detail-main">

                    {/* Header Section */}
                    <div className="community-header">
                        <div className="event-badges">
                            <span className="badge badge-orange badge-lg">원데이클래스</span>
                            <span className="badge badge-green badge-lg"><CheckCircle2 size={16} /> 입주자 인증 할인</span>
                        </div>
                        <h1 className="text-h1 community-title">봄맞이 아늑한 공간, 라탄 공예 원데이 클래스</h1>
                        <p className="community-desc text-secondary">
                            성산동 청년 공유주택에서 진행되는 라탄 공예 클래스입니다.<br />
                            나만의 작은 소품을 직접 만들어보며, 이웃들과 따뜻한 차 한 잔을 나누는 시간을 가져보세요. 초보자도 쉽게 따라할 수 있습니다.
                        </p>
                    </div>

                    {/* Host Profile Section */}
                    <div className="host-profile-section">
                        <h3 className="section-title text-h3">호스트 소개</h3>
                        <div className="host-card">
                            <div className="host-avatars-group">
                                <div className="host-avatar bg-primary">SS</div>
                                <div className="host-avatar bg-secondary">IB</div>
                            </div>
                            <div className="host-details">
                                <h4 className="text-h4 host-name">서울소셜스탠다드 & 아이부키</h4>
                                <p className="text-body text-secondary host-bio">청년 주거와 소셜 네트워크를 연결하는 전문가 그룹입니다.</p>
                                <div className="host-stats flex gap-2">
                                    <span className="badge badge-gray">진행 모임 24회</span>
                                    <span className="badge badge-gray">평점 4.9 <span className="text-warning">★</span></span>
                                </div>
                            </div>
                            <button className="follow-btn">
                                팔로우
                            </button>
                        </div>
                    </div>

                    {/* Event Schedule & Location */}
                    <div className="info-section">
                        <h3 className="section-title text-h3">진행 정보</h3>
                        <div className="info-grid-modern">
                            <div className="info-item-modern">
                                <div className="info-icon-wrapper"><Calendar size={24} className="text-secondary" /></div>
                                <div className="info-text">
                                    <div className="text-sm text-secondary info-label">일정</div>
                                    <div className="text-body font-bold text-primary-dark">3월 15일 (토) 14:00</div>
                                </div>
                            </div>
                            <div className="info-item-modern">
                                <div className="info-icon-wrapper"><Clock size={24} className="text-secondary" /></div>
                                <div className="info-text">
                                    <div className="text-sm text-secondary info-label">소요 시간</div>
                                    <div className="text-body font-bold text-primary-dark">약 2시간</div>
                                </div>
                            </div>
                            <div className="info-item-modern">
                                <div className="info-icon-wrapper"><Users size={24} className="text-secondary" /></div>
                                <div className="info-text">
                                    <div className="text-sm text-secondary info-label">모집 인원</div>
                                    <div className="text-body font-bold text-primary-dark">최대 12명 <span className="text-primary text-sm font-normal ml-1">(현재 8명 신청)</span></div>
                                </div>
                            </div>
                            <div className="info-item-modern cursor-pointer hover-bg-gray" onClick={() => navigate('/map')}>
                                <div className="info-icon-wrapper"><MapPin size={24} className="text-secondary" /></div>
                                <div className="info-text">
                                    <div className="text-sm text-secondary info-label">모이는 장소</div>
                                    <div className="text-body font-bold text-primary-dark flex items-center gap-2">
                                        성산동 청년 공유주택 라운지 <ArrowUpRight size={18} className="text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rich Content: What to expect */}
                    <div className="content-section">
                        <h3 className="section-title text-h3">어떤 활동을 하나요?</h3>

                        <div className="agenda-item">
                            <h4 className="text-h4 text-primary agenda-title">1. 인사 및 네트워킹 (20분)</h4>
                            <p className="text-body text-secondary agenda-desc">
                                처음 만나는 다양한 이웃들과 가볍게 인사를 나눕니다.
                                전문 호스트의 진행 아래 어색하지 않게 아이스브레이킹을 진행하며 따뜻한 차가 제공됩니다.
                            </p>
                        </div>

                        <div className="agenda-item">
                            <h4 className="text-h4 text-primary agenda-title">2. 라탄 공예 기초 배우기 (40분)</h4>
                            <p className="text-body text-secondary agenda-desc">
                                라탄 엮기의 기본 기법을 배우고 연습합니다. 강사님이 1:1로 코칭해 드리기 때문에
                                손재주가 없는 분들도 충분히 쉽게 따라오실 수 있습니다.
                            </p>
                        </div>

                        <div className="agenda-item">
                            <h4 className="text-h4 text-primary agenda-title">3. 나만의 코스터 완성 (60분)</h4>
                            <p className="text-body text-secondary agenda-desc">
                                배운 기법을 바탕으로 나만의 컵코스터 2개를 완성합니다.
                                각자의 개성이 담긴 결과물을 공유하고 서로의 작품을 감상하며 마무리합니다.
                            </p>
                        </div>
                    </div>

                    {/* Participants List */}
                    <div className="participants-section">
                        <div className="participants-header">
                            <h3 className="section-title text-h3">함께할 멤버들 <span className="text-primary title-count">8</span></h3>
                            <button className="view-all-btn">전체보기</button>
                        </div>

                        <div className="participants-grid">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <div key={num} className="participant-item">
                                    <div className="participant-avatar">
                                        <img src={`https://i.pravatar.cc/150?img=${num * 4 + 10}`} alt={`Member ${num}`} />
                                    </div>
                                    <span className="participant-name">참*자</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sticky Sidebar */}
                <div className="detail-sidebar">
                    <div className="apply-box">
                        <div className="sidebar-header">
                            <h3 className="text-h3 sidebar-title">클래스 참가 신청</h3>
                            <p className="text-body text-secondary">일정과 장소를 다시 한 번 확인해주세요.</p>
                        </div>

                        <div className="pricing-info">
                            <div className="price-row flex justify-between items-center">
                                <span className="text-body text-secondary">일반 참가비</span>
                                <span className="price-original">35,000원</span>
                            </div>
                            <div className="discount-box">
                                <div className="discount-badge-wrapper">
                                    <span className="badge badge-orange"><CheckCircle2 size={16} /> 입주민 할인가</span>
                                </div>
                                <span className="price-discount text-h2 text-primary">15,000원</span>
                            </div>
                        </div>

                        <div className="info-notice">
                            <Info size={20} className="info-notice-icon" />
                            <p className="text-sm text-secondary">
                                사회주택 입주민으로 회원가입/인증된 계정은 결제 단계에서 자동으로 할인가가 적용됩니다.
                            </p>
                        </div>

                        <button className="btn btn-primary apply-btn">
                            지금 신청하기
                        </button>

                        <div className="action-buttons-flex">
                            <button className="action-btn">
                                <Heart size={20} fill={isFavorite ? "#ff4757" : "none"} color={isFavorite ? "#ff4757" : "currentColor"} /> 찜
                            </button>
                            <button className="action-btn">
                                <Share2 size={20} /> 공유
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Sticky Bottom Bar */}
            <div className="mobile-action-bar-wrapper">
                <div className="mobile-action-bar">
                    <div className="mobile-bar-inner">
                        <div className="mobile-price-col">
                            <span className="mobile-original-price">35,000원</span>
                            <span className="mobile-discount-price">15,000<span className="unit">원</span></span>
                        </div>
                        <button className="btn btn-primary mobile-apply-btn">
                            참가 신청하기
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}
