import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Calendar, Clock, MapPin, Users, Share2, Heart,
    CheckCircle2, ChevronLeft, Info, ArrowUpRight, MessageCircle
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
            {/* Top Navigation for Mobile (Absolute over banner) */}
            <div className="community-top-nav">
                <button className="icon-btn-nav" onClick={() => navigate(-1)}>
                    <ChevronLeft size={24} />
                </button>
                <div className="nav-actions">
                    <button className="icon-btn-nav">
                        <Share2 size={22} />
                    </button>
                    <button className="icon-btn-nav" onClick={toggleFavorite}>
                        <Heart size={22} fill={isFavorite ? "#ff4757" : "none"} color={isFavorite ? "#ff4757" : "currentColor"} />
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
                    <div className="detail-header pb-6 border-b border-[var(--color-border)] mb-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="badge badge-orange">원데이클래스</span>
                            <span className="badge badge-green"><CheckCircle2 size={12} /> 입주자 인증 할인</span>
                        </div>
                        <h1 className="text-h1 mb-4 leading-tight">봄맞이 아늑한 공간, 라탄 공예 원데이 클래스</h1>
                        <p className="text-body text-secondary mb-0 leading-relaxed">
                            성산동 청년 공유주택에서 진행되는 라탄 공예 클래스입니다.<br />
                            나만의 작은 소품을 직접 만들어보며, 이웃들과 따뜻한 차 한 잔을 나누는 시간을 가져보세요. 초보자도 쉽게 따라할 수 있습니다.
                        </p>
                    </div>

                    {/* Host Profile Section (Munto Style) */}
                    <div className="host-profile-section mb-10">
                        <h3 className="section-title text-h3 font-bold mb-4">호스트 소개</h3>
                        <div className="host-card">
                            <div className="host-avatars-group">
                                <div className="host-avatar bg-primary text-white">SS</div>
                                <div className="host-avatar bg-[#2D6A4F] text-white">IB</div>
                            </div>
                            <div className="host-details">
                                <h4 className="font-bold text-lg mb-1">서울소셜스탠다드 & 아이부키</h4>
                                <p className="text-sm text-secondary mb-2">청년 주거와 소셜 네트워크를 연결하는 전문가 그룹입니다.</p>
                                <div className="flex gap-2 text-xs">
                                    <span className="bg-gray-100 px-2 py-1 rounded">진행 모임 24회</span>
                                    <span className="bg-gray-100 px-2 py-1 rounded">평점 4.9 <span className="text-orange-500">★</span></span>
                                </div>
                            </div>
                            <button className="follow-btn text-primary bg-primary/10 px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/20 transition-colors">
                                팔로우
                            </button>
                        </div>
                    </div>

                    {/* Event Schedule & Location */}
                    <div className="info-section mb-10">
                        <h3 className="section-title text-h3 font-bold mb-4">진행 정보</h3>
                        <div className="info-grid-modern">
                            <div className="info-item-modern">
                                <div className="info-icon-wrapper bg-gray-50"><Calendar className="text-gray-600" size={20} /></div>
                                <div>
                                    <div className="text-sm text-secondary mb-1">일정</div>
                                    <div className="font-bold">3월 15일 (토) 14:00</div>
                                </div>
                            </div>
                            <div className="info-item-modern">
                                <div className="info-icon-wrapper bg-gray-50"><Clock className="text-gray-600" size={20} /></div>
                                <div>
                                    <div className="text-sm text-secondary mb-1">소요 시간</div>
                                    <div className="font-bold">약 2시간</div>
                                </div>
                            </div>
                            <div className="info-item-modern">
                                <div className="info-icon-wrapper bg-gray-50"><Users className="text-gray-600" size={20} /></div>
                                <div>
                                    <div className="text-sm text-secondary mb-1">모집 인원</div>
                                    <div className="font-bold">최대 12명 <span className="text-primary text-sm font-normal ml-1">(현재 8명 신청)</span></div>
                                </div>
                            </div>
                            <div className="info-item-modern cursor-pointer hover:bg-gray-50 rounded-xl p-2 -ml-2 transition-colors w-full" onClick={() => navigate('/map')}>
                                <div className="info-icon-wrapper bg-gray-50"><MapPin className="text-gray-600" size={20} /></div>
                                <div>
                                    <div className="text-sm text-secondary mb-1">모이는 장소</div>
                                    <div className="font-bold flex items-center gap-1">성산동 청년 공유주택 라운지 <ArrowUpRight size={14} className="text-primary" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rich Content: What to expect */}
                    <div className="content-section mb-10 pb-8 border-b border-[var(--color-border)]">
                        <h3 className="section-title text-h3 font-bold mb-6">어떤 활동을 하나요?</h3>

                        <div className="agenda-item mb-6">
                            <h4 className="font-bold text-lg mb-2 text-primary">1. 인사 및 네트워킹 (20분)</h4>
                            <p className="text-body text-secondary leading-relaxed">
                                처음 만나는 다양한 이웃들과 가볍게 인사를 나눕니다.
                                전문 호스트의 진행 아래 어색하지 않게 아이스브레이킹을 진행하며 따뜻한 차가 제공됩니다.
                            </p>
                        </div>

                        <div className="agenda-item mb-6">
                            <h4 className="font-bold text-lg mb-2 text-primary">2. 라탄 공예 기초 배우기 (40분)</h4>
                            <p className="text-body text-secondary leading-relaxed">
                                라탄 엮기의 기본 기법을 배우고 연습합니다. 강사님이 1:1로 코칭해 드리기 때문에
                                손재주가 없는 분들도 충분히 쉽게 따라오실 수 있습니다.
                            </p>
                        </div>

                        <div className="agenda-item">
                            <h4 className="font-bold text-lg mb-2 text-primary">3. 나만의 코스터 완성 (60분)</h4>
                            <p className="text-body text-secondary leading-relaxed">
                                배운 기법을 바탕으로 나만의 컵코스터 2개를 완성합니다.
                                각자의 개성이 담긴 결과물을 공유하고 서로의 작품을 감상하며 마무리합니다.
                            </p>
                        </div>
                    </div>

                    {/* Participants List */}
                    <div className="participants-section mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="section-title text-h3 font-bold mb-0">함께할 멤버들 <span className="text-primary ml-1">8</span></h3>
                            <button className="text-sm text-secondary hover:text-primary transition-colors cursor-pointer">전체보기</button>
                        </div>

                        <div className="participants-grid">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <div key={num} className="participant-item flex flex-col items-center gap-2">
                                    <div className="participant-avatar w-14 h-14 rounded-full overflow-hidden border-2 border-transparent hover:border-primary transition-all cursor-pointer">
                                        <img src={`https://i.pravatar.cc/150?img=${num * 4 + 10}`} alt={`Member ${num}`} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-xs text-secondary font-medium">참*자</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sticky Sidebar (Desktop Only, becomes bottom bar on mobile) */}
                <div className="detail-sidebar hidden md:block">
                    <div className="apply-box">
                        <div className="sidebar-header border-b border-[var(--color-border)] pb-5 mb-5">
                            <h3 className="font-bold text-lg mb-2">클래스 참가 신청</h3>
                            <p className="text-sm text-secondary">일정과 장소를 다시 한 번 확인해주세요.</p>
                        </div>

                        <div className="pricing-info mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-secondary font-medium">일반 참가비</span>
                                <span className="price-original">35,000원</span>
                            </div>
                            <div className="flex justify-between items-end mt-4 p-3 bg-red-50 rounded-xl">
                                <div>
                                    <span className="badge badge-orange mb-1"><CheckCircle2 size={12} /> 입주민 할인가</span>
                                </div>
                                <span className="price-discount text-3xl">15,000원</span>
                            </div>
                        </div>

                        <div className="info-notice bg-gray-50 flex gap-2 p-3 rounded-lg border border-[var(--color-border)] mb-6">
                            <Info size={18} className="text-secondary shrink-0 mt-0.5" />
                            <p className="text-xs text-secondary leading-relaxed">
                                사회주택 입주민으로 회원가입/인증된 계정은 결제 단계에서 자동으로 할인가가 적용됩니다.
                            </p>
                        </div>

                        <button className="btn btn-primary apply-btn w-full mb-3 text-lg py-4 shadow-[0_4px_14px_rgba(253,93,93,0.3)]">
                            지금 신청하기
                        </button>

                        <div className="action-buttons-flex flex gap-2">
                            <button className="btn btn-outline flex-1 flex justify-center py-3 text-secondary gap-2 hover:bg-gray-50">
                                <Heart size={18} fill={isFavorite ? "#ff4757" : "none"} color={isFavorite ? "#ff4757" : "currentColor"} /> 찜
                            </button>
                            <button className="btn btn-outline flex-1 flex justify-center py-3 text-secondary gap-2 hover:bg-gray-50">
                                <Share2 size={18} /> 공유
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Sticky Bottom Bar (Visible only on mobile) */}
            <div className="mobile-action-bar fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border)] p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 md:hidden block">
                <div className="flex items-center gap-4">
                    <div className="mobile-price-col flex flex-col justify-center">
                        <span className="text-xs text-primary font-bold line-through opacity-70">35,000원</span>
                        <span className="text-xl font-bold text-gray-900 leading-none">15,000<span className="text-sm font-normal">원</span></span>
                    </div>
                    <button className="btn btn-primary flex-1 py-3.5 text-base font-bold rounded-xl shadow-[0_4px_12px_rgba(253,93,93,0.3)]">
                        참가 신청하기
                    </button>
                </div>
            </div>

        </div>
    );
}
