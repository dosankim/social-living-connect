import React from 'react';
import { TrendingUp, Users, Home as HomeIcon, Award } from 'lucide-react';
import './Insight.css';
import { useCounter } from '../hooks/useCounter';
import { useInView } from '../hooks/useInView';

export default function Insight() {
    // KPI Counters
    const kpi1 = useCounter(1245, 2000);
    const kpi2 = useCounter(68, 2000);
    // Custom logic for float 4.8 (animate 0 to 48, then divide by 10)
    const kpi3Raw = useCounter(48, 2000);
    const kpi3 = (kpi3Raw / 10).toFixed(1);

    // Chart In-View Hooks
    const { ref: chartRef1, isInView: isChart1InView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: chartRef2, isInView: isChart2InView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <div className="insight-page">
            <div className="insight-hero">
                <div className="container">
                    <h1 className="text-h1 font-bold mb-4">소셜 임팩트 대시보드</h1>
                    <p className="text-body text-secondary max-w-2xl mx-auto">
                        사회주택이 만들어가는 긍정적인 사회적 가치와 주거 환경의 변화를 투명한 데이터로 확인하세요.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* KPI Section */}
                <div className="kpi-grid">
                    <div className="kpi-card">
                        <HomeIcon size={32} className="mx-auto text-secondary" style={{ marginBottom: '8px' }} />
                        <div className="kpi-label">누적 공급 호수</div>
                        <div className="kpi-value">{kpi1.toLocaleString()}</div>
                        <div className="kpi-desc">청년, 예술인, 신혼부부를 위한 공간</div>
                    </div>
                    <div className="kpi-card">
                        <TrendingUp size={32} className="mx-auto text-secondary" style={{ marginBottom: '8px' }} />
                        <div className="kpi-label">시세 대비 임대료</div>
                        <div className="kpi-value">{kpi2}<span style={{ fontSize: '1.5rem' }}>%</span></div>
                        <div className="kpi-desc">주변 시세보다 저렴한 안심 거주</div>
                    </div>
                    <div className="kpi-card">
                        <Users size={32} className="mx-auto text-secondary" style={{ marginBottom: '8px' }} />
                        <div className="kpi-label">커뮤니티 활성도</div>
                        <div className="kpi-value">{kpi3}<span style={{ fontSize: '1.5rem' }}>/5</span></div>
                        <div className="kpi-desc">월 평균 15회 이상의 소셜 다이닝 및 모임</div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="dashboard-section">
                    <div className="chart-card" ref={chartRef1}>
                        <h3 className="text-h4 font-bold mb-6 flex items-center gap-2">
                            <Award size={20} className="text-primary" /> 입주자 만족도 (카테고리별)
                        </h3>

                        <div className="bar-chart-row">
                            <div className="bar-header">
                                <span>주거 시설 (시설 및 유지보수)</span>
                                <span className="font-bold">92%</span>
                            </div>
                            <div className="bar-track">
                                <div className="bar-fill" style={{ width: isChart1InView ? '92%' : '0%', backgroundColor: 'var(--color-primary)' }}></div>
                            </div>
                        </div>

                        <div className="bar-chart-row">
                            <div className="bar-header">
                                <span>커뮤니티 프로그램 만족도</span>
                                <span className="font-bold">88%</span>
                            </div>
                            <div className="bar-track">
                                <div className="bar-fill" style={{ width: isChart1InView ? '88%' : '0%', backgroundColor: 'var(--color-primary)' }}></div>
                            </div>
                        </div>

                        <div className="bar-chart-row">
                            <div className="bar-header">
                                <span>접근성 및 인프라</span>
                                <span className="font-bold">85%</span>
                            </div>
                            <div className="bar-track">
                                <div className="bar-fill" style={{ width: isChart1InView ? '85%' : '0%', backgroundColor: 'var(--color-secondary)' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="chart-card" ref={chartRef2}>
                        <h3 className="text-h4 font-bold mb-6">세대별 입주 현황</h3>
                        <p className="text-sm text-secondary mb-8">다양한 세대와 계층이 어우러져 살아가는 공간을 지향합니다.</p>

                        <div className="v-bar-chart">
                            {/* 청년/대학생 45% */}
                            <div className="v-bar-col">
                                <span className="v-bar-percent" style={{ bottom: '45%', opacity: isChart2InView ? 1 : 0, transition: 'opacity 0.5s ease-in 1s' }}>45%</span>
                                <div className="v-bar-track-bottom" style={{ height: isChart2InView ? '45%' : '0%', backgroundColor: 'var(--color-primary)' }}></div>
                                <span className="v-bar-label">청년/대학생</span>
                            </div>

                            {/* 신혼부부 25% */}
                            <div className="v-bar-col">
                                <span className="v-bar-percent" style={{ bottom: '25%', opacity: isChart2InView ? 1 : 0, transition: 'opacity 0.5s ease-in 1s' }}>25%</span>
                                <div className="v-bar-track-bottom" style={{ height: isChart2InView ? '25%' : '0%', backgroundColor: 'var(--color-secondary)' }}></div>
                                <span className="v-bar-label">신혼부부</span>
                            </div>

                            {/* 시니어 15% */}
                            <div className="v-bar-col">
                                <span className="v-bar-percent" style={{ bottom: '15%', opacity: isChart2InView ? 1 : 0, transition: 'opacity 0.5s ease-in 1s' }}>15%</span>
                                <div className="v-bar-track-bottom" style={{ height: isChart2InView ? '15%' : '0%', backgroundColor: '#FCC419' }}></div>
                                <span className="v-bar-label">시니어</span>
                            </div>

                            {/* 예술인 15% */}
                            <div className="v-bar-col">
                                <span className="v-bar-percent" style={{ bottom: '15%', opacity: isChart2InView ? 1 : 0, transition: 'opacity 0.5s ease-in 1s' }}>15%</span>
                                <div className="v-bar-track-bottom" style={{ height: isChart2InView ? '15%' : '0%', backgroundColor: 'var(--color-text-tertiary)' }}></div>
                                <span className="v-bar-label">예술인</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Operators */}
                <div className="mb-8 border-t border-[var(--color-border)] pt-12">
                    <h2 className="text-h2 font-bold mb-2">파트너 운영사</h2>
                    <p className="text-secondary text-body mb-6">투명하고 안전하게 사회주택을 운영하는 멋진 파트너들을 소개합니다.</p>

                    <div className="operator-grid">
                        <div className="operator-card">
                            <div className="operator-logo">SS</div>
                            <div>
                                <div className="font-bold text-body">서울소셜스탠다드</div>
                                <div className="text-xs text-secondary mt-1">청년 맞춤형 코리빙</div>
                            </div>
                        </div>
                        <div className="operator-card">
                            <div className="operator-logo">IB</div>
                            <div>
                                <div className="font-bold text-body">아이부키</div>
                                <div className="text-xs text-secondary mt-1">맞춤형 공공주택 기획</div>
                            </div>
                        </div>
                        <div className="operator-card">
                            <div className="operator-logo">MM</div>
                            <div>
                                <div className="font-bold text-body">만만한도심</div>
                                <div className="text-xs text-secondary mt-1">도심 속 골목 상생</div>
                            </div>
                        </div>
                        <div className="operator-card">
                            <div className="operator-logo">MG</div>
                            <div>
                                <div className="font-bold text-body">마을과집협동조합</div>
                                <div className="text-xs text-secondary mt-1">지역 기반 커뮤니티 주택</div>
                            </div>
                        </div>
                        <div className="operator-card">
                            <div className="operator-logo">DH</div>
                            <div>
                                <div className="font-bold text-body">더함</div>
                                <div className="text-xs text-secondary mt-1">협동조합형 아파트</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
