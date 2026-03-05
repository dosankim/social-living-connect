import React, { useState, useEffect } from 'react';
import { Search, MapPin, CheckCircle2, Star, X, Info, Home, ArrowLeft, ChevronDown, Filter } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapSearch.css';

const createCustomIcon = (price, isActive) => {
    return new L.divIcon({
        className: 'clear-marker-bg',
        html: `<div class="custom-marker ${isActive ? 'active-marker' : ''}"><span class="marker-price">${price}</span></div>`,
        iconSize: ['auto', 'auto'],
        iconAnchor: [35, 30]
    });
};

const SEOUL_CENTER = [37.5665, 126.9780];

// UpdateMapCenter component to programmatically move the map
function UpdateMapCenter({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.flyTo(center, 14, { duration: 1.5 });
        }
    }, [center, map]);
    return null;
}

const MOCK_PROPERTIES = [
    {
        id: 1,
        title: '성산동 청년 공유주택',
        operator: '서울소셜스탠다드',
        deposit: '5,000만',
        rent: '45만',
        tags: ['청년', '역세권'],
        isNew: true,
        available: true,
        image: '/images/housing_exterior.png',
        lat: 37.5683,
        lng: 126.9068,
        description: '성산동에 위치한 프리미엄 청년 공유주택입니다. 깔끔한 개인 공간과 넓은 라운지, 공유 주방을 제공하여 쾌적한 주거 환경을 약속합니다. 도보 5분 거리에 지하철역이 있어 출퇴근 및 통학이 매우 편리하며, 정기적인 커뮤니티 네트워킹을 통해 좋은 이웃들과 교류할 수 있습니다.'
    },
    {
        id: 2,
        title: '안암동 코리빙 하우스',
        operator: '아이부키',
        deposit: '3,000만',
        rent: '50만',
        tags: ['대학생', '커뮤니티'],
        isNew: false,
        available: true,
        image: '/images/housing_interior_coliving.png',
        lat: 37.5863,
        lng: 127.0298,
        description: '고려대학교 인근에 위치한 대학생 특화 코리빙 하우스입니다. 스터디 카페 부럽지 않은 넓은 공용 공간에서 카공 및 과제를 하기에 안성맞춤입니다. 입주민을 위한 무인 택배함, 세무 서비스 등 다양한 혜택이 기다리고 있습니다.'
    },
    {
        id: 3,
        title: '연남동 예술인 다세대',
        operator: '만만한도심',
        deposit: '4,000만',
        rent: '40만',
        tags: ['예술인', '작업실'],
        isNew: true,
        available: false,
        image: '/images/housing_interior_studio.png',
        lat: 37.5641,
        lng: 126.9248,
        description: '연트럴파크 감성을 그대로 담은 예술인 전용 다세대 주택입니다. 1층에 입주민을 위한 영감 공유 라운지와 전시 공간이 마련되어 있습니다. 개별실은 작업에 집중할 수 있도록 방음에 특화되어 있으며, 넉넉한 수납공간을 제공합니다.'
    },
    {
        id: 4,
        title: '창전동 시니어 하우스',
        operator: '더함',
        deposit: '8,000만',
        rent: '30만',
        tags: ['고령자', '배리어프리'],
        isNew: false,
        available: true,
        image: '/images/housing_exterior.png',
        lat: 37.5516,
        lng: 126.9298,
        description: '어르신들이 편안하게 거주하실 수 있도록 설계된 배리어프리 시니어 하우스입니다. 미끄럼 방지 타일, 비상벨, 맞춤형 가구 등이 완비되어 있습니다. 주기적인 건강 관리 서비스와 여가 프로그램(원예, 다도 등)이 운영됩니다.'
    }
];

export default function MapSearch() {
    const [activePropertyId, setActivePropertyId] = useState(null);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [mapCenter, setMapCenter] = useState(SEOUL_CENTER);

    const handlePropertyClick = (property) => {
        setSelectedProperty(property);
        setMapCenter([property.lat, property.lng]);
    };

    return (
        <div className="map-page">
            {/* Sidebar ListView */}
            <aside className="map-sidebar">
                <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
                    {/* List View */}
                    <div style={{ display: selectedProperty ? 'none' : 'flex', flexDirection: 'column', height: '100%' }}>
                        <div className="map-filters">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-h4 font-bold">지도에서 집 찾기</h2>
                                <span className="text-sm text-secondary">총 {MOCK_PROPERTIES.length}개</span>
                            </div>

                            <div className="filter-row">
                                <div className="filter-select-wrapper">
                                    <select className="filter-select">
                                        <option>보증금</option>
                                        <option>1천만 이하</option>
                                        <option>3천만 이하</option>
                                        <option>5천만 이하</option>
                                    </select>
                                    <ChevronDown className="filter-icon" size={14} />
                                </div>
                                <div className="filter-select-wrapper">
                                    <select className="filter-select">
                                        <option>월세</option>
                                        <option>30만 이하</option>
                                        <option>50만 이하</option>
                                    </select>
                                    <ChevronDown className="filter-icon" size={14} />
                                </div>
                                <div className="filter-select-wrapper">
                                    <select className="filter-select">
                                        <option>운영사</option>
                                        <option>서울소셜스탠다드</option>
                                        <option>아이부키</option>
                                        <option>만만한도심</option>
                                    </select>
                                    <ChevronDown className="filter-icon" size={14} />
                                </div>

                                <button className="btn btn-outline flex items-center gap-1 py-1 px-3 ml-auto hover:bg-gray-50 border-gray-300 ml-1" style={{ borderRadius: 'var(--radius-full)', fontSize: '0.875rem', height: '36px', borderColor: 'var(--color-border)' }}>
                                    <Filter size={14} /> 상세필터
                                </button>
                            </div>
                        </div>

                        <div className="housing-list">
                            {MOCK_PROPERTIES.map(property => (
                                <div
                                    key={property.id}
                                    className={`list-card ${activePropertyId === property.id ? 'active-card' : ''}`}
                                    onMouseEnter={() => {
                                        setActivePropertyId(property.id);
                                    }}
                                    onMouseLeave={() => setActivePropertyId(null)}
                                    onClick={() => handlePropertyClick(property)}
                                >
                                    <div style={{ position: 'relative' }}>
                                        <img src={property.image} alt={property.title} className="list-card-img" />
                                        {property.isNew && (
                                            <span className="badge badge-orange" style={{ position: 'absolute', top: 8, left: 8 }}>
                                                NEW
                                            </span>
                                        )}
                                    </div>
                                    <div className="list-card-content">
                                        <div className="text-xs text-secondary mb-1 flex items-center justify-between">
                                            <span>{property.operator}</span>
                                            {property.available && (
                                                <span className="text-primary flex items-center gap-1">
                                                    <CheckCircle2 size={12} /> 실시간 공실
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-body font-bold mb-1 text-primary hover:underline">{property.title}</h3>

                                        <div className="flex gap-1 mb-2 flex-wrap">
                                            {property.tags.map(tag => (
                                                <span key={tag} className="badge badge-gray" style={{ fontSize: '0.65rem' }}>{tag}</span>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex justify-between items-center bg-gray-50 p-2 rounded-md">
                                            <div className="text-xs text-secondary">보증금 / 월세</div>
                                            <div className="font-bold">{property.deposit} / {property.rent}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Detail Sidebar View Slide */}
                    {selectedProperty && (
                        <div className="property-sidebar-detail">
                            <div className="detail-header">
                                <button className="back-btn" onClick={() => setSelectedProperty(null)}>
                                    <ArrowLeft size={20} /> 리스트로 돌아가기
                                </button>
                            </div>

                            <div className="detail-image-wrapper">
                                <img src={selectedProperty.image} alt={selectedProperty.title} />
                                {selectedProperty.available && (
                                    <div className="detail-badge-status">
                                        <CheckCircle2 size={16} /> 실시간 공실 (입주 가능)
                                    </div>
                                )}
                            </div>

                            <div className="detail-content">
                                <div>
                                    <p className="text-sm text-secondary mb-1 flex items-center gap-1">
                                        <Home size={14} /> {selectedProperty.operator} 연동
                                    </p>
                                    <h2 className="text-h2 font-bold mb-3">{selectedProperty.title}</h2>
                                    <div className="flex gap-2">
                                        {selectedProperty.tags.map(tag => (
                                            <span key={tag} className="badge badge-gray" style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="detail-price-box">
                                    <div>
                                        <p className="text-sm text-secondary mb-1">보증금</p>
                                        <p className="text-h4 font-bold">{selectedProperty.deposit}</p>
                                    </div>
                                    <div style={{ width: '1px', height: '40px', background: 'var(--color-border)' }}></div>
                                    <div>
                                        <p className="text-sm text-secondary mb-1">월세</p>
                                        <p className="text-h4 font-bold text-primary">{selectedProperty.rent}</p>
                                    </div>
                                </div>

                                <div className="detail-section">
                                    <h4 className="text-h4 font-bold mb-3 flex items-center gap-2">
                                        <Info size={18} className="text-primary" /> 주택 상세 정보
                                    </h4>
                                    <p className="text-secondary leading-relaxed text-body">
                                        {selectedProperty.description}
                                    </p>
                                </div>

                                <div className="detail-actions">
                                    <button className="btn btn-primary w-full py-4 text-lg font-bold" style={{ borderRadius: 'var(--radius-md)' }}>
                                        바로 입주 신청하기
                                    </button>
                                    <p className="text-xs text-center text-secondary mt-3">
                                        * 신청 시 운영사에 실시간으로 정보가 전달되며, 간단한 인터뷰가 진행될 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </aside>

            {/* Map View */}
            <main className="map-container">
                <MapContainer center={SEOUL_CENTER} zoom={12} style={{ height: '100%', width: '100%', zIndex: 1 }}>
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    />
                    <UpdateMapCenter center={mapCenter} />

                    {MOCK_PROPERTIES.map(property => (
                        <Marker
                            key={property.id}
                            position={[property.lat, property.lng]}
                            icon={createCustomIcon(property.rent, activePropertyId === property.id)}
                            eventHandlers={{
                                mouseover: () => setActivePropertyId(property.id),
                                mouseout: () => setActivePropertyId(null),
                                click: () => handlePropertyClick(property)
                            }}
                        >
                        </Marker>
                    ))}
                </MapContainer>
            </main>


        </div>
    );
}
