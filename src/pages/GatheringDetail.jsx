import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    ChevronLeft, MoreVertical, Share2, Heart,
    Users, MapPin, Calendar, MessageSquare, Image as ImageIcon,
    CheckCircle2, Plus
} from 'lucide-react';
import './GatheringDetail.css';

export default function GatheringDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const [activeTab, setActiveTab] = useState('홈');
    const [isJoined, setIsJoined] = useState(false);
    
    // Example Mock Data based on the Daangn reference
    const gatheringData = {
        title: "슬렁슬렁 자유수영 모임(20~40)",
        location: "구미동",
        tags: ["멤버 82", "일정 482", "게시글 1341"],
        description: "작고 활발하고 자유로운 모임을 추구하는 슬렁슬렁입니다 :) 많은 규칙 없이 시간 되는 사람끼리 센터 앞에서 만나 인사 꾸벅 하고 각자 자유수영하는 모임을 추구해요.",
        members: Array.from({ length: 82 }).map((_, i) => `Member ${i + 1}`),
        posts: [
            {
                id: 1,
                author: "주지스님🪷",
                role: "모임장",
                avatar: "https://i.pravatar.cc/150?img=11",
                createdAt: "2시간 전",
                content: "안녕하세요. 간만에 인사 드립니다.! 한강 수영 대회 있길래 공유 드려봐요. 1.8 키로 왕복으로 다녀오는 대회고 오리발 등등 장비 착용 할 수 있는 거는 다 착용 할 수 있는 거 봐서 난이도가 엄청 높을 거 같진 않습니다:)\n\n~2025마무리~ 수영기록어플 쓰시는 분들 있나요? 일년 기록 모아보고 싶어서 게시글 올려봅니다! 다들 댓으로 기록 달아주세여!!",
                image: "https://images.unsplash.com/photo-1519315901367-f34f815b6719?w=500&auto=format&fit=crop&q=60",
                likes: 12,
                comments: 45
            },
            {
                id: 2,
                author: "에치",
                role: "멤버",
                avatar: "https://i.pravatar.cc/150?img=5",
                createdAt: "어제",
                content: "이번 주말 남부센터 아침수영 가실 분? 토요일 아침 8시 타임 생각하고 있습니다.",
                likes: 3,
                comments: 2
            }
        ]
    };

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="gathering-detail-page">
            {/* Transparent Top Navigation inside Banner */}
            <div className="gathering-top-nav">
                <button className="icon-btn-nav" onClick={() => navigate(-1)}>
                    <ChevronLeft size={24} color="#fff" />
                </button>
                <div className="nav-actions flex gap-4">
                    <button className="icon-btn-nav">
                        <Share2 size={24} color="#fff" />
                    </button>
                    <button className="icon-btn-nav">
                        <MoreVertical size={24} color="#fff" />
                    </button>
                </div>
            </div>

            {/* Banner Image / Hero Section */}
            <div className="gathering-banner-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=60"
                    alt="Gathering Cover"
                    className="gathering-banner"
                />
            </div>

            {/* Header Info */}
            <div className="gathering-header-box">
                <div className="badge badge-gray mb-2">동네 모임 · {gatheringData.location}</div>
                <h1 className="text-h1 gathering-title mb-2">{gatheringData.title}</h1>
                <div className="gathering-tags">
                    {gatheringData.tags.map(tag => (
                        <span key={tag} className="gathering-tag">{tag}</span>
                    ))}
                </div>
            </div>

            {/* Sticky Tabs */}
            <div className="gathering-tabs-container">
                <div className="gathering-tabs">
                    {['홈', '게시판', '사진첩', '일정'].map(tab => (
                        <button 
                            key={tab} 
                            className={`gathering-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="gathering-content-area">
                {/* 탭: 홈 */}
                {activeTab === '홈' && (
                    <div className="tab-pane-home">
                         <section className="gathering-section">
                            <h3 className="section-title">모임 소개</h3>
                            <p className="gathering-desc text-body text-secondary">
                                {gatheringData.description}
                            </p>
                        </section>
                        
                        <div className="section-divider"></div>

                        <section className="gathering-section">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="section-title mb-0">멤버 <span className="text-primary no-bold">{gatheringData.members.length}</span></h3>
                                <button className="text-btn text-sm text-secondary">전체보기</button>
                            </div>
                            <div className="members-preview-area">
                                <div className="members-avatars">
                                    {gatheringData.members.slice(0, 5).map((_, idx) => (
                                        <div key={idx} className="member-avatar-circle" style={{ zIndex: 5 - idx }}>
                                            <img src={`https://i.pravatar.cc/100?img=${idx + 10}`} alt="avatar" />
                                        </div>
                                    ))}
                                    <div className="member-avatar-more">+{gatheringData.members.length - 5}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* 탭: 게시판 */}
                {activeTab === '게시판' && (
                    <div className="tab-pane-board">
                        <div className="board-announcement">
                            <span className="badge badge-orange badge-sm mr-2">공지</span>
                            <span className="text-sm font-medium">수영 기록 어플 인증 공지글입니다. 필독 요망!</span>
                        </div>
                        
                        <div className="board-feed">
                            {gatheringData.posts.map(post => (
                                <div key={post.id} className="feed-card">
                                    <div className="feed-header">
                                        <img src={post.avatar} alt="author" className="feed-avatar" />
                                        <div className="feed-author-info">
                                            <div className="flex items-center gap-2">
                                                <span className="feed-author-name">{post.author}</span>
                                                {post.role === '모임장' && <span className="feed-badge-role">모임장</span>}
                                            </div>
                                            <span className="feed-time">{post.createdAt}</span>
                                        </div>
                                    </div>
                                    <div className="feed-body">
                                        <p className="feed-text">{post.content}</p>
                                        {post.image && (
                                            <img src={post.image} alt="post content" className="feed-content-image" />
                                        )}
                                    </div>
                                    <div className="feed-footer">
                                        <button className="feed-action-btn">
                                            <Heart size={18} /> 좋아요 {post.likes}
                                        </button>
                                        <button className="feed-action-btn">
                                            <MessageSquare size={18} /> 댓글 {post.comments}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 탭: 일정 (간단한 Placeholder) */}
                {activeTab === '일정' && (
                    <div className="tab-pane-schedule">
                         <div className="empty-state">
                             <Calendar size={48} className="text-gray-300 mb-4 mx-auto" strokeWidth={1.5} />
                             <p className="text-secondary text-center">등록된 일정이 없습니다.</p>
                         </div>
                    </div>
                )}
                
                {/* 탭: 사진첩 (간단한 Placeholder) */}
                {activeTab === '사진첩' && (
                    <div className="tab-pane-gallery">
                         <div className="empty-state">
                             <ImageIcon size={48} className="text-gray-300 mb-4 mx-auto" strokeWidth={1.5} />
                             <p className="text-secondary text-center">등록된 사진이 없습니다.</p>
                         </div>
                    </div>
                )}
            </div>

            {/* Mobile Fixed Action Bar */}
            <div className="mobile-action-bar-wrapper">
                <div className="gathering-action-bar">
                    <button className="btn-icon-square" onClick={toggleFavorite}>
                        <Heart size={24} fill={isFavorite ? "#ff4757" : "none"} color={isFavorite ? "#ff4757" : "#4b5563"} />
                    </button>
                    {activeTab === '게시판' ? (
                        <button className="btn btn-primary gathering-main-btn flex gap-2 items-center justify-center">
                            <Plus size={20} /> 글쓰기
                        </button>
                    ) : (
                        !isJoined ? (
                            <button 
                                className="btn btn-primary gathering-main-btn" 
                                onClick={() => {
                                    alert('가입 신청이 완료되었습니다!');
                                    setIsJoined(true);
                                }}
                            >
                                가입하기
                            </button>
                        ) : (
                            <button className="btn gathering-main-btn btn-joined" disabled>
                                가입됨
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
