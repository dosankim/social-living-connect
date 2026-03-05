import React, { useState, useEffect } from 'react';
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

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Default to item 1 if not found
    const property = MOCK_HOUSING_DETAILS[id] || MOCK_HOUSING_DETAILS[1];

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <div className="property-detail-page">
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
            <section className="property-section border-b-section">
                <div className="property-badge-row flex items-center gap-2">
                    <span className="badge badge-green"><CheckCircle2 size={14} /> 실시간 확인</span>
                    <span className="text-sm text-secondary">{property.type}</span>
                </div>

                <h1 className="text-h1 property-price-title">
                    월세 <span className="text-primary">{property.deposit} / {property.rent}</span>
                </h1>

                <div className="property-title-row">
                    <h2 className="text-h3 font-medium">{property.title}</h2>
                </div>

                <div className="property-tags">
                    {property.tags.map(tag => (
                        <span key={tag} className="property-tag">#{tag}</span>
                    ))}
                </div>

                <div className="info-grid">
                    <div className="info-row">
                        <div className="info-col border-r">
                            <div className="info-label"><Maximize size={16} /> 전용면적</div>
                            <div className="info-value">{property.area}</div>
                        </div>
                        <div className="info-col">
                            <div className="info-label"><Layers size={16} /> 해당/총층</div>
                            <div className="info-value">{property.floor}</div>
                        </div>
                    </div>
                    <div className="info-row">
                        <div className="info-col border-r">
                            <div className="info-label"><Car size={16} /> 주차가능</div>
                            <div className="info-value">{property.parking}</div>
                        </div>
                        <div className="info-col">
                            <div className="info-label"><Building size={16} /> 승강기</div>
                            <div className="info-value">{property.elevator}</div>
                        </div>
                    </div>
                    <div className="info-row">
                        <div className="info-col">
                            <div className="info-label"><Calendar size={16} /> 입주가능일</div>
                            <div className="info-value text-primary font-bold">{property.moveInDate}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Info Box */}
            <section className="property-section border-b-section">
                <div className="operator-card">
                    <div className="operator-info">
                        <div className="operator-logo">
                            <ShieldCheck className="text-primary" size={26} />
                        </div>
                        <div>
                            <h3 className="operator-name">{property.operator}</h3>
                            <p className="operator-badge">
                                <CheckCircle2 size={14} color="#20C997" />
                                인증된 소셜 리빙 운영사
                            </p>
                        </div>
                    </div>
                    <button className="operator-action">
                        <Info size={24} />
                    </button>
                </div>
            </section>

            {/* Description */}
            <section className="property-section border-b-section">
                <h3 className="text-h3 font-bold section-heading">상세 설명</h3>
                <div className="description-content">
                    {property.description}
                </div>
            </section>

            {/* Location (Map Placeholder) */}
            <section className="property-section border-b-section">
                <h3 className="text-h3 font-bold section-heading">위치</h3>
                <div className="location-row">
                    <MapPin className="text-secondary" size={20} style={{ marginTop: '2px' }} />
                    <div>
                        <p className="location-address">{property.address}</p>
                        <p className="location-desc">주변 편의시설을 확인해보세요</p>
                    </div>
                </div>
                <div className="property-map-placeholder">
                    <img src="/images/hero_modern_coliving.png" alt="map context" />
                    <div className="map-overlay-content">
                        <MapPin size={36} className="text-primary" />
                        <span className="map-link-text">지도에서 보기 <ArrowUpRight size={18} /></span>
                    </div>
                </div>
            </section>

            {/* Sticky Bottom Action Bar */}
            <div className="property-action-bar">
                <button className="action-btn action-btn-outline">
                    <MessageSquare size={20} /> 문의하기
                </button>
                <button className="action-btn action-btn-primary">
                    <Phone size={20} fill="currentColor" /> 전화 상담
                </button>
            </div>
        </div>
    );
}
