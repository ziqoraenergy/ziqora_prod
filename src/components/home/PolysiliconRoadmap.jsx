"use client";

import React from "react";

const PolysiliconRoadmap = () => {
    const pillars = [
        {
            title: "Ultra-High Purity Silicon",
            desc: "Purification systems producing 11N solar-grade polysilicon for next-generation photovoltaics.",
            icon: "fa-certificate",
            color: "#10b981"
        },
        {
            title: "Chemical Distillation",
            desc: "Multi-stage distillation columns removing trace metallic and boron/phosphorus impurities.",
            icon: "fa-filter",
            color: "#3b82f6"
        },
        {
            title: "Closed-Loop Recovery",
            desc: "High-efficiency recovery units recycling hydrogen and chlorosilane gases.",
            icon: "fa-recycle",
            color: "#8b5cf6"
        },
        {
            title: "AI Process Optimization",
            desc: "Machine learning algorithms continuously monitoring deposition for maximum efficiency.",
            icon: "fa-brain",
            color: "#ec4899"
        },
        {
            title: "Smart Infrastructure",
            desc: "Automated material handling and robotic loading mechanisms for safe, precision operations.",
            icon: "fa-network-wired",
            color: "#f59e0b"
        },
        {
            title: "Industry 4.0 Integration",
            desc: "Fully connected environment monitoring variables, performance, and energy in real-time.",
            icon: "fa-satellite-dish",
            color: "#06b6d4"
        },
        {
            title: "Sustainable Production",
            desc: "Advanced energy recovery and emissions control to minimize environmental impact.",
            icon: "fa-leaf",
            color: "#10b981"
        },
        {
            title: "Digital Traceability",
            desc: "End-to-end batch tracking documenting every stage for complete transparency.",
            icon: "fa-qrcode",
            color: "#6366f1"
        }
    ];

    const roadmapSteps = [
        {
            step: "01",
            title: "Foundation",
            desc: "Establishing raw material refinement and chemical purification infrastructure in Odisha."
        },
        {
            step: "02",
            title: "Scale",
            desc: "Developing high-capacity polysilicon deposition facilities for domestic demand."
        },
        {
            step: "03",
            title: "Efficiency",
            desc: "Integrating gas recovery systems, energy optimization, and automated controls."
        },
        {
            step: "04",
            title: "Advanced Mfg",
            desc: "Deploying AI-driven reactor monitoring and next-generation purification."
        },
        {
            step: "05",
            title: "Ecosystem",
            desc: "Building a fully connected domestic value chain from polysilicon to modules."
        }
    ];

    return (
        <>
            {/* INNOVATION PILLARS SECTION - MODERN MASONRY/GRID VIBE */}
            <section style={{ padding: "120px 0", backgroundColor: "#ffffff", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "300px", background: "linear-gradient(180deg, #f8fafc 0%, rgba(255,255,255,0) 100%)" }}></div>
                
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="text-center mb-5 pb-3 wow fadeInUp" data-wow-delay=".1s">
                        <div style={{ display: "inline-block", padding: "8px 20px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "30px", color: "#10b981", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", marginBottom: "20px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                            Innovation Pillars
                        </div>
                        <h2 style={{ fontSize: "48px", fontWeight: "900", color: "#0f172a", marginBottom: "20px", letterSpacing: "-1px" }}>
                            Future Technologies
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
                            Advanced technologies Ziqora plans to integrate into future polysilicon manufacturing facilities to drive unparalleled quality and scale.
                        </p>
                    </div>

                    <div className="row g-4">
                        {pillars.map((pillar, index) => (
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + (index * 0.1)}s`} key={index}>
                                <div className="pillar-card" style={{ 
                                    padding: "35px 25px", 
                                    borderRadius: "24px", 
                                    background: "#ffffff", 
                                    height: "100%", 
                                    border: "1px solid #e2e8f0",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                    position: "relative",
                                    overflow: "hidden",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = `${pillar.color}40`;
                                    e.currentTarget.style.boxShadow = `0 20px 40px ${pillar.color}15`;
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.querySelector('.icon-box').style.background = pillar.color;
                                    e.currentTarget.querySelector('.icon-box').style.color = "#ffffff";
                                    e.currentTarget.querySelector('.icon-box').style.transform = "scale(1.1) rotate(5deg)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "#e2e8f0";
                                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.02)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.querySelector('.icon-box').style.background = `${pillar.color}15`;
                                    e.currentTarget.querySelector('.icon-box').style.color = pillar.color;
                                    e.currentTarget.querySelector('.icon-box').style.transform = "scale(1) rotate(0deg)";
                                }}
                                >
                                    <div className="icon-box" style={{ 
                                        width: "60px", 
                                        height: "60px", 
                                        borderRadius: "16px", 
                                        background: `${pillar.color}15`, 
                                        color: pillar.color, 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        fontSize: "24px", 
                                        marginBottom: "25px",
                                        transition: "all 0.3s ease"
                                    }}>
                                        <i className={`fa-solid ${pillar.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: "19px", fontWeight: "800", color: "#0f172a", marginBottom: "15px", lineHeight: "1.4" }}>{pillar.title}</h4>
                                    <p style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.7", margin: 0 }}>{pillar.desc}</p>
                                    
                                    {/* Subtle gradient line on hover */}
                                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", background: `linear-gradient(90deg, ${pillar.color}, transparent)`, opacity: 0.8 }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROADMAP SECTION - DYNAMIC TIMELINE */}
            <section style={{ padding: "140px 0", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden" }}>
                {/* Decorative Elements */}
                <div style={{ position: "absolute", top: "20%", left: "-5%", width: "300px", height: "300px", borderRadius: "50%", border: "1px dashed rgba(16,185,129,0.2)", animation: "spin 20s linear infinite" }}></div>
                <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: "400px", height: "400px", borderRadius: "50%", border: "1px dashed rgba(16,185,129,0.1)", animation: "spin 30s linear infinite reverse" }}></div>

                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay=".1s">
                        <div style={{ display: "inline-block", padding: "8px 20px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "30px", color: "#10b981", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", marginBottom: "20px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                            Implementation
                        </div>
                        <h2 style={{ fontSize: "48px", fontWeight: "900", color: "#0f172a", marginBottom: "20px", letterSpacing: "-1px" }}>
                            Innovation Roadmap
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "18px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
                            A phased technological vision for establishing a world-class manufacturing ecosystem.
                        </p>
                    </div>

                    <div className="row position-relative mt-5">
                        {/* Connecting Glow Line (Desktop) */}
                        <div className="d-none d-lg-block" style={{ position: "absolute", top: "50px", left: "10%", right: "10%", height: "4px", background: "linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 1), rgba(16, 185, 129, 0.3), transparent)", zIndex: 1, borderRadius: "2px" }}></div>

                        {roadmapSteps.map((step, index) => (
                            <div className="col-lg col-md-6 mb-5 mb-lg-0 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`} key={index}>
                                <div className="roadmap-item" style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 10px" }}>
                                    
                                    {/* Number Badge */}
                                    <div style={{ 
                                        width: "100px", 
                                        height: "100px", 
                                        borderRadius: "50%", 
                                        background: "#ffffff", 
                                        border: "3px solid #10b981", 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        margin: "0 auto 30px",
                                        boxShadow: "0 15px 35px rgba(16, 185, 129, 0.2), inset 0 0 0 5px rgba(16, 185, 129, 0.1)",
                                        color: "#0f172a",
                                        fontWeight: "900",
                                        fontSize: "24px",
                                        flexDirection: "column",
                                        transition: "all 0.3s ease",
                                        position: "relative"
                                    }}>
                                        <span style={{ color: "#10b981", fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "2px", fontWeight: "700" }}>Phase</span>
                                        {step.step}
                                        
                                        {/* Glow effect under badge */}
                                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", borderRadius: "50%", background: "#10b981", filter: "blur(20px)", opacity: 0.2, zIndex: -1 }}></div>
                                    </div>
                                    
                                    <div style={{ background: "#ffffff", padding: "25px 20px", borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)", border: "1px solid rgba(226, 232, 240, 0.6)" }}>
                                        <h4 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>{step.title}</h4>
                                        <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.7", margin: 0 }}>{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .roadmap-item:hover > div:first-child {
                    transform: scale(1.1);
                    boxShadow: 0 20px 40px rgba(16, 185, 129, 0.3), inset 0 0 0 5px rgba(16, 185, 129, 0.2);
                }
            `}</style>
        </>
    );
};

export default PolysiliconRoadmap;
