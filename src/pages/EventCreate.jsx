import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, X, ArrowLeft, Users, Building, Globe, MapPin, Tag, UsersRound } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import './EventCreate.css';

const BRANCHES = [
    { id: 'sungsan', name: '성산점', facilities: ['공유주방', '커뮤니티 라운지', '루프탑'] },
    { id: 'suyu', name: '수유점', facilities: ['코워킹 스페이스', '피트니스 센터', '미니 영화관'] },
    { id: 'yeoksam', name: '역삼점', facilities: ['프라이빗 오피스', '공용 라운지', '폰부스'] }
];

const OPERATORS = [
    { id: 'op1', name: 'Ezipnet 운영본부' },
    { id: 'op2', name: '로컬 메이커스' },
    { id: 'op3', name: '소셜 벤처 허브' }
];

export default function EventCreate() {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [previewImage, setPreviewImage] = useState(null);

    const [formData, setFormData] = useState({
        eventType: '원데이 클래스',
        title: '',
        date: '',
        time: '',
        locationId: '',
        customLocation: '',
        minParticipants: '',
        maxParticipants: '',
        description: '',
        targetAudience: '우리 지점 입주자만',
        regularPrice: '',
        operatorSubsidy: '',
        hasCoHost: false,
        coHostOperator: ''
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleEventTypeChange = (type) => {
        setFormData(prev => ({
            ...prev,
            eventType: type
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Event Data Submitted:', { ...formData, image: previewImage });
        alert('모임이 성공적으로 개설되었습니다!');
        navigate('/community');
    };

    const selectedBranch = useMemo(() => {
        return BRANCHES.find(b => b.id === formData.locationId);
    }, [formData.locationId]);

    const tenantFinalPrice = useMemo(() => {
        const regular = parseInt(formData.regularPrice) || 0;
        const subsidy = parseInt(formData.operatorSubsidy) || 0;
        return Math.max(0, regular - subsidy);
    }, [formData.regularPrice, formData.operatorSubsidy]);

    if (!user) {
        return (
            <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
                <h2 className="text-h3 font-bold mb-4">로그인이 필요합니다</h2>
                <p className="text-secondary mb-8">모임을 개설하려면 먼저 로그인해주세요.</p>
                <button className="btn btn-primary" onClick={() => navigate('/')}>홈으로 돌아가기</button>
            </div>
        );
    }

    return (
        <div className="event-create-page">
            <div className="event-create-header">
                <div className="container" style={{ position: 'relative' }}>
                    <button className="back-btn" onClick={() => navigate('/community')}>
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-h2 font-bold mb-2 text-center">모임 개설하기</h1>
                    <p className="text-secondary text-body text-center">이웃과 함께하는 모임을 만들어보세요.</p>
                </div>
            </div>

            <div className="container event-create-form-container">
                <form className="event-create-form" onSubmit={handleSubmit}>

                    {/* 이벤트 유형 선택 */}
                    <div className="form-section">
                        <h3 className="section-title">이벤트 유형</h3>
                        <div className="event-type-options">
                            <button
                                type="button"
                                className={`event-type-btn ${formData.eventType === '원데이 클래스' ? 'selected' : ''}`}
                                onClick={() => handleEventTypeChange('원데이 클래스')}
                            >
                                <Tag size={20} />
                                <span>원데이 클래스</span>
                            </button>
                            <button
                                type="button"
                                className={`event-type-btn ${formData.eventType === '입주자 소모임' ? 'selected' : ''}`}
                                onClick={() => handleEventTypeChange('입주자 소모임')}
                            >
                                <UsersRound size={20} />
                                <span>입주자 소모임</span>
                            </button>
                        </div>
                    </div>

                    {/* 이미지 업로드 */}
                    <div className="form-group image-upload-group">
                        <label className="form-label">모임 대표 이미지</label>
                        <div className="image-upload-area" onClick={() => document.getElementById('image-upload').click()}>
                            {previewImage ? (
                                <div className="preview-container">
                                    <img src={previewImage} alt="Preview" className="image-preview" />
                                    <button
                                        type="button"
                                        className="btn-remove-image"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setPreviewImage(null);
                                        }}
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ) : (
                                <div className="upload-placeholder">
                                    <Upload size={32} className="mb-2 text-secondary" />
                                    <p className="text-secondary">클릭하여 포스터 또는 공간 사진을 업로드하세요</p>
                                </div>
                            )}
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>

                    {/* 기본 정보 */}
                    <div className="form-section">
                        <h3 className="section-title">기본 정보</h3>
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">모임 이름 <span className="required">*</span></label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-input"
                                placeholder="예: 봄맞이 한강 러닝크루"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group flex-1">
                                <label htmlFor="date" className="form-label">날짜 <span className="required">*</span></label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    className="form-input"
                                    value={formData.date}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group flex-1">
                                <label htmlFor="time" className="form-label">시간 <span className="required">*</span></label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    className="form-input"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group flex-1">
                                <label htmlFor="locationId" className="form-label">장소 선택 <span className="required">*</span></label>
                                <select
                                    id="locationId"
                                    name="locationId"
                                    className="form-input"
                                    value={formData.locationId}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>지점을 선택해주세요</option>
                                    {BRANCHES.map(branch => (
                                        <option key={branch.id} value={branch.id}>{branch.name}</option>
                                    ))}
                                    <option value="custom">직접 입력 (기타 장소)</option>
                                </select>
                                
                                {formData.locationId === 'custom' && (
                                    <div style={{ marginTop: '12px' }}>
                                        <input
                                            type="text"
                                            name="customLocation"
                                            className="form-input"
                                            placeholder="상세 주소 및 장소명을 입력해주세요"
                                            value={formData.customLocation}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                )}

                                {selectedBranch && (
                                    <div className="branch-facilities">
                                        <p className="branch-facilities-title">
                                            <MapPin size={12} /> {selectedBranch.name} 특화 시설
                                        </p>
                                        <div className="facility-badges">
                                            {selectedBranch.facilities.map((facility, idx) => (
                                                <span key={idx} className="facility-badge">{facility}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 공동 호스트 설정 */}
                        <div className="form-row" style={{ marginTop: '24px' }}>
                            <div className="form-group flex-1">
                                <label className="form-label" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                                    <input
                                        type="checkbox"
                                        name="hasCoHost"
                                        checked={formData.hasCoHost}
                                        onChange={handleChange}
                                        style={{ marginRight: '8px', width: '18px', height: '18px', accentColor: 'var(--color-primary)' }}
                                    />
                                    공동 호스트(운영사)가 있나요?
                                </label>
                                <p className="text-sm text-secondary mt-1 ml-6">선택 시 다른 운영사와 함께 행사를 진행합니다.</p>
                                
                                {formData.hasCoHost && (
                                    <div style={{ marginTop: '16px', paddingLeft: '26px' }}>
                                        <label htmlFor="coHostOperator" className="form-label text-sm">참여 운영사 선택 <span className="required">*</span></label>
                                        <select
                                            id="coHostOperator"
                                            name="coHostOperator"
                                            className="form-input"
                                            value={formData.coHostOperator}
                                            onChange={handleChange}
                                            required={formData.hasCoHost}
                                        >
                                            <option value="" disabled>운영사를 선택해주세요</option>
                                            {OPERATORS.map(op => (
                                                <option key={op.id} value={op.id}>{op.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 대상 설정 */}
                    <div className="form-section">
                        <h3 className="section-title">참여자 대상 설정 <span className="required">*</span></h3>
                        <p className="text-secondary text-sm mb-4">누가 이 모임에 참여할 수 있는지 범위를 설정해주세요.</p>

                        <div className="target-options price-pricing-container">
                            <label className={`target-card ${formData.targetAudience === '우리 지점 입주자만' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="targetAudience"
                                    value="우리 지점 입주자만"
                                    checked={formData.targetAudience === '우리 지점 입주자만'}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                <div className="target-icon"><Building size={24} /></div>
                                <div className="target-info">
                                    <h4>우리 지점 입주자만</h4>
                                    <p>현재 지점의 입주자들만 참여 가능합니다.</p>
                                </div>
                                <div className="radio-indicator"></div>
                            </label>

                            <label className={`target-card ${formData.targetAudience === '전체 회원사 입주자까지' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="targetAudience"
                                    value="전체 회원사 입주자까지"
                                    checked={formData.targetAudience === '전체 회원사 입주자까지'}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                <div className="target-icon"><Users size={24} /></div>
                                <div className="target-info">
                                    <h4>전체 회원사 입주자까지</h4>
                                    <p>ezipnet 제휴사의 모든 입주자들이 참여 가능합니다.</p>
                                </div>
                                <div className="radio-indicator"></div>
                            </label>

                            <label className={`target-card ${formData.targetAudience === '외부인 포함' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="targetAudience"
                                    value="외부인 포함"
                                    checked={formData.targetAudience === '외부인 포함'}
                                    onChange={handleChange}
                                    className="sr-only"
                                />
                                <div className="target-icon"><Globe size={24} /></div>
                                <div className="target-info">
                                    <h4>외부인 포함 (전체 공개)</h4>
                                    <p>일반 사용자 등 누구나 참여 가능합니다.</p>
                                </div>
                                <div className="radio-indicator"></div>
                            </label>
                        </div>
                    </div>

                    {/* 가격 설정 (원데이 클래스인 경우에만 표시) */}
                    {formData.eventType === '원데이 클래스' && (
                        <div className="form-section">
                            <h3 className="section-title">가격 설정 및 모집 인원 <span className="required">*</span></h3>
                            <div className="price-pricing-container form-section-box">
                                <div className="form-row">
                                    <div className="form-group flex-1">
                                        <label htmlFor="regularPrice" className="form-label">정상가 (외부가)</label>
                                        <div className="input-with-icon">
                                            <input
                                                type="number"
                                                id="regularPrice"
                                                name="regularPrice"
                                                className="form-input"
                                                placeholder="예: 50000"
                                                min="0"
                                                value={formData.regularPrice}
                                                onChange={handleChange}
                                            />
                                            <span className="input-suffix">원</span>
                                        </div>
                                    </div>
                                    <div className="form-group flex-1">
                                        <label htmlFor="operatorSubsidy" className="form-label">운영사 지원금 (1인당)</label>
                                        <div className="input-with-icon">
                                            <input
                                                type="number"
                                                id="operatorSubsidy"
                                                name="operatorSubsidy"
                                                className="form-input"
                                                placeholder="예: 20000"
                                                min="0"
                                                value={formData.operatorSubsidy}
                                                onChange={handleChange}
                                            />
                                            <span className="input-suffix">원</span>
                                        </div>
                                        <p className="text-xs text-secondary mt-1">지점 운영사가 부담할 금액</p>
                                    </div>
                                </div>

                                <div className="final-price-box">
                                    <span className="final-price-label">입주자 최종가</span>
                                    <span className="final-price-value">
                                        {tenantFinalPrice > 0 ? `${tenantFinalPrice.toLocaleString()}원` : '무료'}
                                    </span>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group flex-1">
                                    <label htmlFor="minParticipants" className="form-label">최소 인원 <span className="required">*</span></label>
                                    <input
                                        type="number"
                                        id="minParticipants"
                                        name="minParticipants"
                                        className="form-input"
                                        placeholder="예: 4"
                                        min="1"
                                        value={formData.minParticipants}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group flex-1">
                                    <label htmlFor="maxParticipants" className="form-label">최대 인원 <span className="required">*</span></label>
                                    <input
                                        type="number"
                                        id="maxParticipants"
                                        name="maxParticipants"
                                        className="form-input"
                                        placeholder="예: 10"
                                        min="2"
                                        value={formData.maxParticipants}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 모집 인원 (입주자 소모임인 경우에만 독립적으로 표시) */}
                    {formData.eventType === '입주자 소모임' && (
                        <div className="form-section">
                            <h3 className="section-title">모집 인원 <span className="required">*</span></h3>
                            <div className="form-row">
                                <div className="form-group flex-1">
                                    <label htmlFor="minParticipants" className="form-label">최소 인원 <span className="required">*</span></label>
                                    <input
                                        type="number"
                                        id="minParticipants"
                                        name="minParticipants"
                                        className="form-input"
                                        placeholder="예: 4"
                                        min="1"
                                        value={formData.minParticipants}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group flex-1">
                                    <label htmlFor="maxParticipants" className="form-label">최대 인원 <span className="required">*</span></label>
                                    <input
                                        type="number"
                                        id="maxParticipants"
                                        name="maxParticipants"
                                        className="form-input"
                                        placeholder="예: 10"
                                        min="2"
                                        value={formData.maxParticipants}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 상세 내용 */}
                    <div className="form-section">
                        <h3 className="section-title">상세 설명 <span className="required">*</span></h3>
                        <div className="form-group">
                            <textarea
                                id="description"
                                name="description"
                                className="form-textarea"
                                placeholder="모임의 목적, 활동 내용, 준비물 등을 자세히 적어주시면 좋아요."
                                rows={6}
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-outline" onClick={() => navigate('/community')}>취소</button>
                        <button type="submit" className="btn btn-primary">개설 완료</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
