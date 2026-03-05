import React from 'react';
import { Calendar, Clock, MapPin, Users, Share2, Heart, CheckCircle2 } from 'lucide-react';
import './CommunityDetail.css';

export default function CommunityDetail() {
    return (
        <div className="community-detail-page">
            {/* Banner Image */}
            <img
                src="/images/event_banner_craft.png\"
                alt="Event Banner"
                className="event-banner"
            />

            <div className="container detail-layout">
                {/* Main Content */}
                <div className="detail-main">
                    <div className="flex gap-2 mb-4">
                        <span className="badge badge-orange">원데이클래스</span>
                        <span className="badge badge-green">입주자 인증 할인</span>
                    </div>
                    <h1 className="text-h1 mb-4">봄맞이 아늑한 공간, 라탄 공예 원데이 클래스</h1>
                    <p className="text-body text-secondary mb-8">
                        성산동 청년 공유주택에서 진행되는 라탄 공예 클래스입니다. 나만의 작은 소품을 직접 만들어보며,
                        이웃들과 따뜻한 차 한 잔을 나누는 시간을 가져보세요. 초보자도 쉽게 따라할 수 있습니다.
                    </p>

                    <div className="host-section">
                        <div className="flex -space-x-4">
                            <div className="host-logo z-20">SS</div>
                            <div className="host-logo z-10" style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}>IB</div>
                        </div>
                        <div className="host-info">
                            <div className="text-sm text-secondary font-bold">Co-hosted by</div>
                            <div className="text-h4">서울소셜스탠다드 & 아이부키</div>
                        </div>
                    </div>

                    <h3 className="text-h3 border-b border-[var(--color-border)] pb-4 mb-6">진행 정보</h3>

                    <div className="info-item">
                        <Calendar className="info-icon" />
                        <div>
                            <div className="info-text-title">일시</div>
                            <div className="text-body">2026년 3월 15일 (토)</div>
                        </div>
                    </div>
                    <div className="info-item">
                        <Clock className="info-icon" />
                        <div>
                            <div className="info-text-title">시간</div>
                            <div className="text-body">14:00 - 16:00 (2시간 소요)</div>
                        </div>
                    </div>
                    <div className="info-item">
                        <MapPin className="info-icon" />
                        <div>
                            <div className="info-text-title">장소</div>
                            <div className="text-body">성산동 청년 공유주택 1층 커뮤니티 라운지<br /><span className="text-sm text-secondary">마포구 성미산로 123</span></div>
                        </div>
                    </div>
                    <div className="info-item">
                        <Users className="info-icon" />
                        <div>
                            <div className="info-text-title">모집 인원</div>
                            <div className="text-body">최대 12명 (현재 8명 신청)</div>
                        </div>
                    </div>

                </div>

                {/* Sticky Sidebar */}
                <div className="detail-sidebar">
                    <div className="apply-box">
                        <div className="flex justify-between items-start mb-6 border-b border-[var(--color-border)] pb-6">
                            <div>
                                <div className="text-sm font-bold text-secondary mb-1">일반 참가비</div>
                                <div className="price-original">35,000원</div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-bold text-primary mb-1 flex items-center gap-1 justify-end">
                                    <CheckCircle2 size={14} /> 입주민 특별 할인가
                                </div>
                                <div className="price-discount">15,000원</div>
                            </div>
                        </div>

                        <p className="text-sm text-secondary mb-4">
                            * 사회주택 입주민으로 인증된 계정은 자동으로 할인가가 적용됩니다.
                        </p>

                        <button className="btn btn-primary apply-btn">
                            클래스 신청하기
                        </button>
                        <div className="flex justify-between mt-4">
                            <button className="btn btn-ghost w-[48%] flex justify-center border border-[var(--color-border)]">
                                <Heart size={20} /> 찜하기
                            </button>
                            <button className="btn btn-ghost w-[48%] flex justify-center border border-[var(--color-border)]">
                                <Share2 size={20} /> 공유하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
