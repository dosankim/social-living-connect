import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, ArrowRight, CheckCircle2, ShoppingBag, Users, BookOpen, HeartHandshake, Map, Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Home.css';

const MOCK_HOUSING = [
    {
        id: 1,
        title: '성산동 청년 공유주택',
        operator: '서울소셜스탠다드',
        deposit: '5,000만',
        rent: '45만',
        image: '/images/housing_exterior.png',
        tags: ['청년', '역세권']
    },
    {
        id: 2,
        title: '안암동 코리빙 하우스',
        operator: '아이부키',
        deposit: '3,000만',
        rent: '50만',
        image: '/images/housing_interior_coliving.png',
        tags: ['대학생', '커뮤니티']
    },
    {
        id: 3,
        title: '연남동 예술인 다세대',
        operator: '만만한도심',
        deposit: '4,000만',
        rent: '40만',
        image: '/images/housing_interior_studio.png',
        tags: ['예술인', '작업실']
    }
];

const MOCK_EVENTS = [
    {
        id: 1,
        title: '봄맞이 루프탑 가드닝 클래스',
        date: '3월 15일 (토)',
        time: '14:00 - 16:00',
        host: '서울소셜스탠다드 x 아이부키',
        image: '/images/event_gardening.png',
        participants: 12,
        tags: ['원데이클래스', '친목']
    },
    {
        id: 2,
        title: '요가 & 명상 나이트',
        date: '3월 18일 (화)',
        time: '20:00 - 21:30',
        host: '만만한도심',
        image: '/images/event_yoga.png',
        participants: 8,
        tags: ['웰니스', '소모임']
    },
    {
        id: 3,
        title: '로컬 크리에이터 네트워킹 데이',
        date: '3월 22일 (토)',
        time: '18:00 - 21:00',
        host: '더함',
        image: '/images/event_networking.png',
        participants: 24,
        tags: ['네트워킹', '정보공유']
    }
];

export default function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">사람과 집, 그리고<br />가치를 잇습니다</h1>
                        <p className="hero-subtitle mb-0">이집넷이 만드는 새로운 소셜 리빙 네트워크에 합류하세요.<br />당신의 삶에 꼭 맞는 이웃과 공간을 연결합니다.</p>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src=\"/images/hero_modern_coliving.png\" alt="Modern Co-living Space" className="hero-main-image" />
                    </div>
                </div>
            </section>

            {/* Campaign Sliding Banner */}
            <section className="campaign-banner-section">
                <div className="container" style={{ padding: '0 24px', position: 'relative', marginTop: '-40px', zIndex: 10 }}>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        className="campaign-slider"
                    >
                        <SwiperSlide>
                            <div className="campaign-slide" style={{ background: 'linear-gradient(to right, #FD5D5D, #FF8C42)' }}>
                                <div className="campaign-text">
                                    <span className="campaign-badge">오픈 기념 프로모션</span>
                                    <h3 className="text-h3 font-bold text-white mb-2">첫 달 임대료 50% 할인 혜택!</h3>
                                    <p className="text-white opacity-90">이집넷 신규 입주자라면 누구나 참여 가능합니다. (한정 수량)</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="campaign-slide" style={{ background: 'linear-gradient(to right, #2D6A4F, #52B788)' }}>
                                <div className="campaign-text">
                                    <span className="campaign-badge">커뮤니티 이벤트</span>
                                    <h3 className="text-h3 font-bold text-white mb-2">이번 주말, 루프탑 요가 어떠세요?</h3>
                                    <p className="text-white opacity-90">입주자 전용 원데이 클래스 선착순 모집 중</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="campaign-slide" style={{ background: 'linear-gradient(to right, #4361EE, #4CC9F0)' }}>
                                <div className="campaign-text">
                                    <span className="campaign-badge">이집넷 매거진</span>
                                    <h3 className="text-h3 font-bold text-white mb-2">성산동 청년 공유주택 탐방기</h3>
                                    <p className="text-white opacity-90">공용 라운지부터 개별 작업실까지, 랜선 집들이를 시작합니다.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            {/* House-as-a-Service Section */}
            <section className="haas-section">
                <div className="container" style={{ padding: '80px 24px 60px' }}>
                    <div className="text-center mb-12">
                        <span className="badge badge-orange mb-4 inline-block font-bold" style={{ background: 'white', border: '1px solid var(--color-primary)' }}>프리미엄 생활 지원</span>
                        <h2 className="text-h2 font-bold mb-6">House-as-a-Service</h2>
                        <p className="text-secondary text-body max-w-2xl mx-auto" style={{ lineHeight: '1.8', fontSize: '1.125rem' }}>
                            이집넷은 단순한 주거 공간 제공을 넘어, 입주자의 삶의 질을 높이고 이웃과 화합하는 혁신적인 주거 서비스를 완성합니다.
                        </p>
                    </div>

                    <div className="haas-grid">
                        <div className="haas-item">
                            <div className="haas-icon-wrapper"><ShoppingBag size={36} className="text-primary" /></div>
                            <h4 className="text-h4 font-bold mb-3">공동구매</h4>
                            <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>생필품 및 식자재<br />저렴하게 구매</p>
                        </div>
                        <div className="haas-item">
                            <div className="haas-icon-wrapper"><Users size={36} className="text-primary" /></div>
                            <h4 className="text-h4 font-bold mb-3">커뮤니티</h4>
                            <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>취향 기반 소모임<br />및 네트워킹</p>
                        </div>
                        <div className="haas-item">
                            <div className="haas-icon-wrapper"><BookOpen size={36} className="text-primary" /></div>
                            <h4 className="text-h4 font-bold mb-3">교육</h4>
                            <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>자기계발 및<br />원데이 클래스</p>
                        </div>
                        <div className="haas-item">
                            <div className="haas-icon-wrapper"><HeartHandshake size={36} className="text-primary" /></div>
                            <h4 className="text-h4 font-bold mb-3">돌봄</h4>
                            <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>반려동물 및 식물<br />케어 품앗이</p>
                        </div>
                        <div className="haas-item">
                            <div className="haas-icon-wrapper"><Map size={36} className="text-primary" /></div>
                            <h4 className="text-h4 font-bold mb-3">지역연계</h4>
                            <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>로컬 상권 할인<br />및 동네 탐방</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Housing */}
            <section className="container" style={{ padding: '60px 24px' }}>
                <div className="section-title">
                    <div>
                        <h2 className="text-h2 font-bold mb-2">실시간 입주 가능 주택</h2>
                        <p className="text-secondary text-body">시스템 연동으로 가장 정확한 실시간 공실 정보를 제공합니다.</p>
                    </div>
                    <Link to="/map" className="btn btn-ghost text-primary">
                        지도에서 전체보기 <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid-3">
                    {MOCK_HOUSING.map(house => (
                        <div key={house.id} className="card housing-card">
                            <div className="housing-image-container">
                                <div className="housing-badge badge badge-green">
                                    <CheckCircle2 size={14} /> 실시간 공실 확인
                                </div>
                                <img src={house.image} alt={house.title} className="housing-image" />
                            </div>
                            <div className="housing-content">
                                <div className="flex gap-2 mb-3">
                                    {house.tags.map(tag => (
                                        <span key={tag} className="badge badge-gray">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-h3 font-bold mb-1">{house.title}</h3>
                                <p className="text-sm text-secondary mb-4 flex items-center gap-1">
                                    <MapPin size={14} /> {house.operator} 운영
                                </p>
                                <div className="flex justify-between items-center border-t border-[var(--color-border)] pt-4 mt-2">
                                    <div className="text-sm text-secondary">보증금 / 월세</div>
                                    <div className="text-body font-bold text-primary">
                                        {house.deposit} / {house.rent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Community Events */}
            <section className="container" style={{ padding: '0 24px 80px' }}>
                <div className="section-title">
                    <div>
                        <h2 className="text-h2 font-bold mb-2">이웃과 함께하는 커뮤니티</h2>
                        <p className="text-secondary text-body">입주자 할인 혜택으로 즐거운 소셜 리빙을 경험하세요.</p>
                    </div>
                    <Link to="/community" className="btn btn-ghost text-primary">
                        모임 전체보기 <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid-3">
                    {MOCK_EVENTS.map(event => (
                        <Link to={`/community/${event.id}`} key={event.id} className="card event-card">
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="event-content">
                                <div className="flex gap-2 mb-3">
                                    {event.tags.map(tag => (
                                        <span key={tag} className="badge badge-orange">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-h4 font-bold mb-3 line-clamp-2">{event.title}</h3>

                                <div className="event-meta">
                                    <Calendar size={14} /> {event.date}
                                </div>
                                <div className="event-meta">
                                    <Clock size={14} /> {event.time}
                                </div>

                                <div className="mt-auto pt-4 border-t border-[var(--color-border)] flex justify-between items-center">
                                    <div className="text-xs text-secondary w-1/2">
                                        <span className="font-bold text-primary">Host.</span> {event.host}
                                    </div>
                                    <div className="event-avatars">
                                        <div className="avatar"><img src={`https://i.pravatar.cc/100?img=${event.id * 3 + 1}`} alt="user" /></div>
                                        <div className="avatar"><img src={`https://i.pravatar.cc/100?img=${event.id * 3 + 2}`} alt="user" /></div>
                                        <div className="avatar"><img src={`https://i.pravatar.cc/100?img=${event.id * 3 + 3}`} alt="user" /></div>
                                        <div className="avatar">+{event.participants - 3}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Resident Reviews (Infinite Marquee) */}
            <section className="reviews-section" style={{ padding: '80px 0', background: 'var(--color-surface)', overflow: 'hidden' }}>
                <div className="container text-center mb-10">
                    <h2 className="text-h2 font-bold mb-2">입주자 생생 후기</h2>
                    <p className="text-secondary text-body">이집넷을 통해 새로운 삶의 방식을 찾은 분들의 이야기</p>
                </div>

                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        {/* Repeat items twice for smooth infinite loop */}
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                <div className="review-card">
                                    <div className="flex items-center gap-1 mb-3 text-orange-500">
                                        <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                                    </div>
                                    <p className="review-text">"안암동 코리빙 하우스에서의 한 달, 제 삶이 긍정적으로 바뀌었어요. 퇴근 후 반겨주는 이웃이 있다는 게 이렇게 든든할 줄 몰랐습니다."</p>
                                    <div className="review-author mt-4 flex items-center gap-3">
                                        <div className="author-avatar bg-primary text-white">김</div>
                                        <div>
                                            <p className="font-bold text-sm">김*영 님</p>
                                            <p className="text-xs text-secondary">안암동 코리빙 하우스 입주 3개월차</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-card">
                                    <div className="flex items-center gap-1 mb-3 text-orange-500">
                                        <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                                    </div>
                                    <p className="review-text">"프리랜서라 하루종일 집에 있는데, 공용 라운지에서 작업하니 능률이 오릅니다. 필요한 구독 서비스나 공동구매 혜택도 쏠쏠해요!"</p>
                                    <div className="review-author mt-4 flex items-center gap-3">
                                        <div className="author-avatar" style={{ background: '#2D6A4F', color: 'white' }}>이</div>
                                        <div>
                                            <p className="font-bold text-sm">이*진 님</p>
                                            <p className="text-xs text-secondary">연남동 예술인 다세대 입주 1년차</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-card">
                                    <div className="flex items-center gap-1 mb-3 text-orange-500">
                                        <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                                    </div>
                                    <p className="review-text">"집주인과 직접 연락하지 않고, 이집넷 플랫폼을 통해 수리 요청이나 건의사항을 바로 해결할 수 있어서 무척 편리합니다."</p>
                                    <div className="review-author mt-4 flex items-center gap-3">
                                        <div className="author-avatar" style={{ background: '#4361EE', color: 'white' }}>박</div>
                                        <div>
                                            <p className="font-bold text-sm">박*서 님</p>
                                            <p className="text-xs text-secondary">성산동 청년 공유주택 입주 6개월차</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-card">
                                    <div className="flex items-center gap-1 mb-3 text-orange-500">
                                        <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                                    </div>
                                    <p className="review-text">"입주 전에는 낯선 사람들과 화장실을 공유하는 게 걱정이었지만, 체계적인 청소 서비스와 룰 덕분에 오히려 일반 원룸보다 쾌적해요."</p>
                                    <div className="review-author mt-4 flex items-center gap-3">
                                        <div className="author-avatar" style={{ background: '#7209B7', color: 'white' }}>최</div>
                                        <div>
                                            <p className="font-bold text-sm">최*민 님</p>
                                            <p className="text-xs text-secondary">안암동 코리빙 하우스 입주 2개월차</p>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Participant Reviews */}
            <section className="container" style={{ padding: '80px 24px' }}>
                <div className="section-title text-center block mb-12" style={{ display: 'block' }}>
                    <h2 className="text-h2 font-bold mb-2">커뮤니티 참가자 후기</h2>
                    <p className="text-secondary text-body">함께 배우고 나누는 즐거움, 프로그램 참가자들의 찐 후기를 만나보세요.</p>
                </div>

                <div className="community-reviews-grid">
                    <div className="community-review-item">
                        <img src=\"/images/event_yoga.png\" alt="Yoga Event" className="community-review-img" />
                        <div className="community-review-overlay">
                            <Quote size={24} className="mb-2 opacity-50 text-white" />
                            <p className="font-bold text-lg mb-1 text-white">루프탑 요가 & 명상 나이트</p>
                            <p className="text-sm opacity-90 mb-4 text-white">"밤하늘을 보며 하는 요가는 잊지 못할 힐링이었어요. 다음에도 꼭 참여할 거예요!" - 참*자 A</p>
                        </div>
                    </div>

                    <div className="community-review-item">
                        <img src=\"/images/event_networking.png\" alt="Networking Event" className="community-review-img" />
                        <div className="community-review-overlay" style={{ background: 'linear-gradient(to top, rgba(45,106,79,0.95), transparent)' }}>
                            <Quote size={24} className="mb-2 opacity-50 text-white" />
                            <p className="font-bold text-lg mb-1 text-white">지역 청년 네트워킹 데이</p>
                            <p className="text-sm opacity-90 mb-4 text-white">"비슷한 관심사를 가진 동네 친구들을 많이 사귈 수 있는 유익한 시간이었습니다." - 참*자 B</p>
                        </div>
                    </div>

                    <div className="community-review-item">
                        <img src=\"/images/event_gardening.png\" alt="Gardening Event" className="community-review-img" />
                        <div className="community-review-overlay" style={{ background: 'linear-gradient(to top, rgba(253,93,93,0.95), transparent)' }}>
                            <Quote size={24} className="mb-2 opacity-50 text-white" />
                            <p className="font-bold text-lg mb-1 text-white">봄맞이 가드닝 클래스</p>
                            <p className="text-sm opacity-90 mb-4 text-white">"직접 흙을 만지고 식물을 심어보니 마음이 정화되는 기분이에요. 강사님도 너무 친절하셨어요." - 참*자 C</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
