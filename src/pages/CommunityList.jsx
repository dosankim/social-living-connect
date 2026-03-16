import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Clock, Filter, Search, Plus, Users, MapPin } from 'lucide-react';
import './Home.css'; // Re-use event card styles
import './CommunityList.css';

const MOCK_EVENTS = [
    {
        id: 1,
        title: '봄맞이 루프탑 가드닝 클래스',
        date: '3월 15일 (토)',
        time: '14:00 - 16:00',
        host: '서울소셜스탠다드 x 아이부키',
        image: '/images/event_gardening.png',
        participants: 12,
        tags: ['원데이클래스', '공동개최']
    },
    {
        id: 2,
        title: '요가 & 명상 나이트',
        date: '3월 18일 (화)',
        time: '20:00 - 21:30',
        host: '만만한도심',
        image: '/images/event_yoga.png',
        participants: 8,
        tags: ['웰니스', '우리집']
    },
    {
        id: 3,
        title: '로컬 크리에이터 네트워킹 데이',
        date: '3월 22일 (토)',
        time: '18:00 - 21:00',
        host: '더함',
        image: '/images/event_networking.png',
        participants: 24,
        tags: ['네트워킹', '전체']
    }
];

const MOCK_GATHERINGS = [
    {
        id: 1,
        title: '슬렁슬렁 자유수영 모임(20~40)',
        description: '작고 활발하고 자유로운 모임을 추구하는 슬렁슬렁입니다 :) 시간 되는 사람끼리 센터 앞에서 만나 각자 자유수영하는 모임이에요.',
        image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500&auto=format&fit=crop&q=60',
        location: '구미동',
        memberCount: 82,
        postCount: 1341,
        scheduleCount: 482,
        tags: ['수영', '운동']
    },
    {
        id: 2,
        title: '동네 러닝크루 🏃‍♂️',
        description: '매주 토요일 아침 7시, 한강 러닝! 페이스 상관없이 누구나 환영합니다. 함께 뛰어요!',
        image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&auto=format&fit=crop&q=60',
        location: '성산동',
        memberCount: 45,
        postCount: 230,
        scheduleCount: 96,
        tags: ['러닝', '운동']
    },
    {
        id: 3,
        title: '보드게임 매니아 모임',
        description: '퇴근 후 가볍게 보드게임 한 판! 초보자도 환영, 게임은 준비되어 있습니다 🎲',
        image: 'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=500&auto=format&fit=crop&q=60',
        location: '역삼동',
        memberCount: 28,
        postCount: 89,
        scheduleCount: 34,
        tags: ['보드게임', '취미']
    }
];

export default function CommunityList() {
    const { user } = useAuth();
    const [filter, setFilter] = useState('전체');

    return (
        <div className="community-list-page">
            <div className="container" style={{ padding: '60px 24px' }}>
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-h1 font-bold mb-3">모임 전체보기</h1>
                        <p className="text-secondary text-body">우리 동네와 이웃 주택에서 열리는 다양한 커뮤니티 프로그램에 참여해보세요.</p>
                    </div>
                    <div className="flex gap-2">
                        {user && (
                            <Link to="/community/create" className="btn btn-primary p-2 flex items-center gap-2">
                                <Plus size={20} />
                                <span className="hidden sm:inline" style={{ fontWeight: 600 }}>모임 개설</span>
                            </Link>
                        )}
                        <button className="btn btn-outline p-2 bg-white"><Calendar size={20} /></button>
                        <button className="btn btn-outline p-2 bg-white"><Filter size={20} /></button>
                    </div>
                </div>

                <div className="filters-container mb-8">
                    <div className="tab-filters">
                        <button className={`tab-btn ${filter === '전체' ? 'active' : ''}`} onClick={() => setFilter('전체')}>전체 이벤트</button>
                        <button className={`tab-btn ${filter === '우리집' ? 'active' : ''}`} onClick={() => setFilter('우리집')}>우리집 모임</button>
                        <button className={`tab-btn ${filter === '공동개최' ? 'active' : ''}`} onClick={() => setFilter('공동개최')}>공동개최 프로젝트</button>
                        <button className={`tab-btn ${filter === '소모임' ? 'active' : ''}`} onClick={() => setFilter('소모임')}>소모임</button>
                    </div>
                </div>

                {/* 원데이 클래스 / 이벤트 목록 */}
                {filter !== '소모임' && (
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
                )}

                {/* 소모임 목록 */}
                {(filter === '전체' || filter === '소모임') && (
                    <>
                        {filter === '전체' && (
                            <div className="gathering-list-header">
                                <h2 className="text-h3 font-bold">소모임</h2>
                                <button className="text-btn text-sm text-secondary" onClick={() => setFilter('소모임')}>전체보기 →</button>
                            </div>
                        )}
                        <div className="gathering-grid">
                            {MOCK_GATHERINGS.map(g => (
                                <Link to={`/gathering/${g.id}`} key={g.id} className="gathering-card">
                                    <div className="gathering-card-image-wrapper">
                                        <img src={g.image} alt={g.title} className="gathering-card-image" />
                                    </div>
                                    <div className="gathering-card-body">
                                        <div className="gathering-card-tags">
                                            {g.tags.map(tag => (
                                                <span key={tag} className="badge badge-green badge-sm">{tag}</span>
                                            ))}
                                        </div>
                                        <h3 className="gathering-card-title">{g.title}</h3>
                                        <p className="gathering-card-desc">{g.description}</p>
                                        <div className="gathering-card-stats">
                                            <span className="gathering-stat"><MapPin size={14} /> {g.location}</span>
                                            <span className="gathering-stat"><Users size={14} /> 멤버 {g.memberCount}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
