import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {
    MapPin, Share2, Heart, ChevronLeft, Calendar,
    Maximize, Layers, Car, ShieldCheck, Phone,
    MessageSquare, CheckCircle2, Building, Info, ArrowUpRight
} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PropertyDetail.css';

// Mock data to match what was clicked from Home.jsx
const MOCK_HOUSING_DETAILS = {
    1: {
        id: 1,
        title: '성산동 청년 공유주택',
        operator: '서울소셜스탠다드',
        deposit: '5,000만',
        rent: '45만',
        maintenanceFee: '5만',
        images: [
            '/images/housing_exterior.png',
            '/images/housing_interior_coliving.png',
            '/images/housing_interior_studio.png',
            '/images/hero_modern_coliving.png'
        ],
        type: '공유주택 / 다세대',
        area: '전용 18.5㎡',
        floor: '3층 / 5층',
        moveInDate: '즉시 입주 가능',
        parking: '가능 (월 3만)',
        elevator: '있음',
        address: '서울시 마포구 성산동 123-45',
        description: `마포구 성산동에 위치한 프리미엄 청년 공유주택입니다.
개인 공간은 철저히 보호받으면서, 공용 라운지에서는 다양한 네트워킹과 커뮤니티 활동을 즐길 수 있습니다.

[기본 옵션]
- 시스템 에어컨, 드럼 세탁기, 빌트인 냉장고
- 인덕션, 전자레인지, 침대, 책상/의자, 옷장
- 개별 도어락, 초고속 인터넷 및 와이파이

[공용 시설]
- 루프탑 가든 (바베큐 가능)
- 코워킹 스페이스 (프린터, 커피머신 구비)
- 공용 세탁실 (건조기 포함)

전문 운영사인 '서울소셜스탠다드'가 체계적으로 관리하여 언제나 쾌적하고 안전한 주거 환경을 제공합니다.`,
        tags: ['청년', '역세권', '풀옵션', '루프탑', '안심보안']
    },
    2: {
        id: 2,
        title: '안암동 코리빙 하우스',
        operator: '아이부키',
        deposit: '3,000만',
        rent: '50만',
        maintenanceFee: '7만',
        images: [
            '/images/housing_interior_coliving.png',
            '/images/housing_exterior.png',
            '/images/housing_interior_studio.png'
        ],
        type: '코리빙 하우스',
        area: '전용 15.2㎡',
        floor: '2층 / 4층',
        moveInDate: '협의 가능',
        parking: '불가',
        elevator: '없음',
        address: '서울시 성북구 안암동5가 67-89',
        description: `고려대 인근 대학생, 사회초년생을 위한 코리빙 하우스입니다.
스터디 카페 부럽지 않은 넓은 공용 라운지가 특징입니다.`,
        tags: ['대학생', '커뮤니티', '스터디룸']
    },
    3: {
        id: 3,
        title: '연남동 예술인 다세대',
        operator: '만만한도심',
        deposit: '4,000만',
        rent: '40만',
        maintenanceFee: '0만',
        images: [
            '/images/housing_interior_studio.png',
            '/images/hero_modern_coliving.png'
        ],
        type: '다세대 주택',
        area: '전용 22.0㎡',
        floor: '지하 1층 / 3층',
        moveInDate: '즉시 입주 가능',
        parking: '거주자 우선 주차',
        elevator: '없음',
        address: '서울시 마포구 연남동 98-76',
        description: `작업실 겸 주거가 필요한 예술인들에게 최적화된 공간입니다.
방음 시설이 일부 갖춰져 있으며 층고가 높아 개방감이 뛰어납니다.`,
        tags: ['예술인', '작업실', '높은층고']
    }
};

export default function PropertyDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    // Default to item 1 if not found
    const property = MOCK_HOUSING_DETAILS[id] || MOCK_HOUSING_DETAILS[1];

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <div className="property-detail-page pb-24">
            {/* Top Navigation */}
            <div className="property-top-nav">
                <button className="icon-btn" onClick={() => navigate(-1)}>
                    <ChevronLeft size={24} />
                </button>
                <div className="nav-actions">
                    <button className="icon-btn">
                        <Share2 size={22} />
                    </button>
                    <button className="icon-btn" onClick={toggleFavorite}>
                        <Heart size={22} fill={isFavorite ? "#ff4757" : "none"} color={isFavorite ? "#ff4757" : "currentColor"} />
                    </button>
                </div>
            </div>

            {/* Image Gallery Slider */}
            <section className="property-gallery">
                <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ type: 'fraction' }}
                    navigation={true}
                    className="property-slider"
                >
                    {property.images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide-image-wrapper">
                                <img src={img} alt={`${property.title} view ${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Main Info */}
            <section className="property-section pb-2 border-b-section">
                <div className="container">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="badge badge-green"><CheckCircle2 size={12} /> 실시간 확인</span>
                        <span className="text-sm text-secondary">{property.type}</span>
                    </div>

                    <h1 className="text-h2 font-bold mb-4">
                        월세 <span className="text-primary">{property.deposit} / {property.rent}</span>
                    </h1>

                    <div className="property-title-row flex justify-between items-start mb-6">
                        <h2 className="text-h3 font-medium">{property.title}</h2>
                    </div>

                    <div className="property-tags flex flex-wrap gap-2 mb-6">
                        {property.tags.map(tag => (
                            <span key={tag} className="property-tag">#{tag}</span>
                        ))}
                    </div>

                    <div className="info-grid overflow-hidden rounded-xl border border-[var(--color-border)] mb-4">
                        <div className="info-row flex border-b border-[var(--color-border)]">
                            <div className="info-col flex-1 p-3 border-r border-[var(--color-border)]">
                                <div className="text-xs text-secondary mb-1 flex items-center gap-1"><Maximize size={14} /> 전용면적</div>
                                <div className="font-medium">{property.area}</div>
                            </div>
                            <div className="info-col flex-1 p-3">
                                <div className="text-xs text-secondary mb-1 flex items-center gap-1"><Layers size={14} /> 해당/총층</div>
                                <div className="font-medium">{property.floor}</div>
                            </div>
                        </div>
                        <div className="info-row flex border-b border-[var(--color-border)]">
                            <div className="info-col flex-1 p-3 border-r border-[var(--color-border)]">
                                <div className="text-xs text-secondary mb-1 flex items-center gap-1"><Car size={14} /> 주차가능여부</div>
                                <div className="font-medium">{property.parking}</div>
                            </div>
                            <div className="info-col flex-1 p-3">
                                <div className="text-xs text-secondary mb-1 flex items-center gap-1"><Building size={14} /> 엘리베이터</div>
                                <div className="font-medium">{property.elevator}</div>
                            </div>
                        </div>
                        <div className="info-row flex bg-[var(--color-surface)]">
                            <div className="info-col w-full p-3">
                                <div className="text-xs text-secondary mb-1 flex items-center gap-1"><Calendar size={14} /> 입주가능일</div>
                                <div className="font-medium text-primary">{property.moveInDate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Box */}
            <section className="property-section border-b-section">
                <div className="container">
                    <div className="operator-card p-4 rounded-xl border border-[var(--color-border)] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="operator-logo w-12 h-12 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm">
                                <ShieldCheck className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-base mb-1">{property.operator}</h3>
                                <p className="text-sm text-secondary flex items-center gap-1">
                                    <CheckCircle2 size={12} className="text-green-500" />
                                    인증된 소셜 리빙 운영사
                                </p>
                            </div>
                        </div>
                        <button className="text-primary bg-primary/10 hover:bg-primary/20 p-2 rounded-lg transition-colors">
                            <Info size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="property-section border-b-section">
                <div className="container">
                    <h3 className="text-h3 font-bold mb-4">상세 설명</h3>
                    <div className="description-content text-body text-[var(--color-text)] whitespace-pre-wrap leading-relaxed">
                        {property.description}
                    </div>
                </div>
            </section>

            {/* Location (Map Placeholder) */}
            <section className="property-section border-b-section">
                <div className="container">
                    <h3 className="text-h3 font-bold mb-4">위치</h3>
                    <div className="flex items-start gap-2 mb-4">
                        <MapPin className="text-secondary shrink-0 mt-0.5" size={18} />
                        <div>
                            <p className="font-medium">{property.address}</p>
                            <p className="text-sm text-secondary">주변 편의시설을 확인해보세요</p>
                        </div>
                    </div>
                    <div className="property-map-placeholder rounded-xl bg-gray-100 h-[200px] flex flex-col items-center justify-center border border-[var(--color-border)] overflow-hidden relative cursor-pointer hover:opacity-90 transition-opacity">
                        <img src="/images/hero_modern_coliving.png" alt="map context" className="absolute inset-0 w-full h-full object-cover opacity-20 filter blur-[2px]" />
                        <MapPin size={32} className="text-primary mb-2 relative z-10" />
                        <span className="font-bold relative z-10 text-gray-800 flex items-center gap-1">지도에서 보기 <ArrowUpRight size={16} /></span>
                    </div>
                </div>
            </section>

            {/* Sticky Bottom Action Bar */}
            <div className="property-action-bar fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border)] p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 flex items-center gap-3">
                <button className="action-btn flex-1 bg-white border border-primary text-primary font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/5 transition-colors">
                    <MessageSquare size={18} /> 문의하기
                </button>
                <button className="action-btn flex-1 bg-primary text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_4px_12px_rgba(253,93,93,0.3)]">
                    <Phone size={18} fill="currentColor" /> 전화 상담
                </button>
            </div>
        </div>
    );
}
