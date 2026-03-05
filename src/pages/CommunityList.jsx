import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Filter, Search } from 'lucide-react';
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

export default function CommunityList() {
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
                        <button className="btn btn-outline p-2 bg-white"><Calendar size={20} /></button>
                        <button className="btn btn-outline p-2 bg-white"><Filter size={20} /></button>
                    </div>
                </div>

                <div className="filters-container mb-8">
                    <div className="tab-filters">
                        <button className={`tab-btn ${filter === '전체' ? 'active' : ''}`} onClick={() => setFilter('전체')}>전체 이벤트</button>
                        <button className={`tab-btn ${filter === '우리집' ? 'active' : ''}`} onClick={() => setFilter('우리집')}>우리집 모임</button>
                        <button className={`tab-btn ${filter === '공동개최' ? 'active' : ''}`} onClick={() => setFilter('공동개최')}>공동개최 프로젝트</button>
                    </div>
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
            </div>
        </div>
    );
}
