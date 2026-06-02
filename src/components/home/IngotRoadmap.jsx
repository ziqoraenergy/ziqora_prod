"use client";

import React from "react";
import Image from "next/image";

const IngotRoadmap = () => {
    const pillars = [
        {
            title: "Large-Diameter Growth",
            desc: "Planning next-generation M10 and G12 monocrystalline ingot systems.",
            icon: "fa-arrows-left-right-to-line",
            color: "#3b82f6"
        },
        {
            title: "Advanced Thermal",
            desc: "Precision temperature control for uniform crystal formation.",
            icon: "fa-temperature-half",
            color: "#10b981"
        },
        {
            title: "Low-Oxygen Tech",
            desc: "Optimized furnace environments reducing oxygen contamination.",
            icon: "fa-wind",
            color: "#0ea5e9"
        },
        {
            title: "AI Monitoring",
            desc: "Intelligent systems analyzing growth parameters in real time.",
            icon: "fa-robot",
            color: "#8b5cf6"
        },
        {
            title: "Automated Handling",
            desc: "Robotic systems to safely transport fragile ingots.",
            icon: "fa-conveyor-belt",
            color: "#14b8a6"
        },
        {
            title: "Industry 4.0",
            desc: "Digitally connected factory monitoring production metrics.",
            icon: "fa-network-wired",
            color: "#f59e0b"
        },
        {
            title: "Predictive Analytics",
            desc: "Machine learning forecasting maintenance requirements.",
            icon: "fa-chart-pie",
            color: "#6366f1"
        },
        {
            title: "Digital Traceability",
            desc: "Batch-level tracking recording crystal growth history.",
            icon: "fa-fingerprint",
            color: "#ef4444"
        }
    ];

    const roadmapSteps = [
        {
            step: "01",
            title: "Foundation",
            desc: "Establishing advanced crystal growth facilities.",
            icon: "fa-building",
            image: "roadmap_infrastructure_1780428214598.png",
            align: "flex-start",
            mt: "0px"
        },
        {
            step: "02",
            title: "Scale",
            desc: "Expanding capacity for GW-scale manufacturing operations.",
            icon: "fa-chart-line",
            image: "roadmap_capacity_1780428229337.png",
            align: "center",
            mt: "40px"
        },
        {
            step: "03",
            title: "Automation",
            desc: "Integrating automated logistics and transport systems.",
            icon: "fa-robot",
            image: "roadmap_automation_1780428244263.png",
            align: "flex-end",
            mt: "40px"
        },
        {
            step: "04",
            title: "Adv. Crystal",
            desc: "Deploying AI-driven optimization technologies.",
            icon: "fa-microchip",
            image: "roadmap_advanced_1780428257227.png",
            align: "center",
            mt: "40px"
        },
        {
            step: "05",
            title: "Ecosystem",
            desc: "Building a seamless domestic solar value chain.",
            icon: "fa-network-wired",
            image: "roadmap_ecosystem_1780428271408.png",
            align: "flex-start",
            mt: "40px"
        }
    ];

    return (
        <>
            {/* CRAZY STAGGERED PILLARS SECTION - DARK THEME */}
            <section style={{ padding: "120px 0 160px", backgroundColor: "#0f172a", position: "relative", overflow: "hidden" }}>
                {/* Glowing Background Elements */}
                <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)", filter: "blur(60px)", borderRadius: "50%" }}></div>
                <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent)", filter: "blur(80px)", borderRadius: "50%" }}></div>

                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="text-center mb-5 pb-5 wow fadeInUp">
                        <span style={{ color: "#38bdf8", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", display: "inline-block", padding: "8px 20px", border: "1px solid rgba(56, 189, 248, 0.2)", borderRadius: "30px", marginBottom: "20px", background: "rgba(56, 189, 248, 0.05)" }}>
                            Innovation Pillars
                        </span>
                        <h2 style={{ fontSize: "55px", fontWeight: "900", color: "#ffffff", letterSpacing: "-1px", marginBottom: "20px" }}>
                            Future Technologies
                        </h2>
                        <p style={{ color: "#94a3b8", fontSize: "19px", maxWidth: "700px", margin: "0 auto" }}>
                            A radically different approach to future technologies, shattering the standard grid.
                        </p>
                    </div>

                    {/* Crazy Up and Down Layout (Dark Theme) */}
                    <div className="crazy-grid-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px", marginTop: "40px" }}>
                        {[
                            { title: "Large-Diameter Growth", desc: "Planning next-generation M10 and G12 monocrystalline ingot systems.", icon: "fa-arrows-left-right-to-line", color: "#3b82f6", offset: "0px" },
                            { title: "Advanced Thermal", desc: "Precision temperature control for uniform crystal formation.", icon: "fa-temperature-half", color: "#10b981", offset: "80px" },
                            { title: "Low-Oxygen Tech", desc: "Optimized furnace environments reducing oxygen contamination.", icon: "fa-wind", color: "#0ea5e9", offset: "-40px" },
                            { title: "AI Monitoring", desc: "Intelligent systems analyzing growth parameters in real time.", icon: "fa-robot", color: "#8b5cf6", offset: "120px" },
                            { title: "Automated Handling", desc: "Robotic systems to safely transport fragile ingots.", icon: "fa-conveyor-belt", color: "#14b8a6", offset: "20px" },
                            { title: "Industry 4.0", desc: "Digitally connected factory monitoring production metrics.", icon: "fa-network-wired", color: "#f59e0b", offset: "-80px" },
                            { title: "Predictive Analytics", desc: "Machine learning forecasting maintenance requirements.", icon: "fa-chart-pie", color: "#6366f1", offset: "60px" },
                            { title: "Digital Traceability", desc: "Batch-level tracking recording crystal growth history.", icon: "fa-fingerprint", color: "#ef4444", offset: "-20px" }
                        ].map((pillar, index) => (
                            <div 
                                key={index} 
                                className="crazy-card-wrapper wow fadeInUp" 
                                data-wow-delay={`${index * 0.1}s`}
                                style={{ 
                                    width: "calc(25% - 30px)", 
                                    minWidth: "250px", 
                                    marginTop: pillar.offset, // This is the crazy up/down staggered effect!
                                    position: "relative",
                                    zIndex: 8 - index
                                }}
                            >
                                <div className="crazy-card" style={{
                                    background: "rgba(30, 41, 59, 0.7)",
                                    backdropFilter: "blur(15px)",
                                    borderRight: `1px solid rgba(255,255,255,0.05)`,
                                    borderBottom: `1px solid rgba(255,255,255,0.05)`,
                                    borderLeft: `1px solid rgba(255,255,255,0.05)`,
                                    borderTop: `5px solid ${pillar.color}`,
                                    borderRadius: "30px",
                                    padding: "40px 30px",
                                    height: "320px",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                                    transform: index % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)" // Wild rotation!
                                }}>
                                    <div style={{ position: "absolute", top: "-20px", right: "-20px", fontSize: "120px", opacity: 0.05, color: pillar.color, transform: "rotate(-15deg)" }}>
                                        <i className={`fa-solid ${pillar.icon}`}></i>
                                    </div>

                                    <div style={{ 
                                        width: "65px", 
                                        height: "65px", 
                                        borderRadius: "20px", 
                                        background: `linear-gradient(135deg, ${pillar.color}30, transparent)`, 
                                        color: pillar.color, 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        fontSize: "28px", 
                                        marginBottom: "25px",
                                        border: `1px solid ${pillar.color}40`,
                                        boxShadow: `0 10px 20px ${pillar.color}20`
                                    }}>
                                        <i className={`fa-solid ${pillar.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: "21px", fontWeight: "800", color: "#ffffff", marginBottom: "15px", lineHeight: "1.2" }}>{pillar.title}</h4>
                                    <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SPACED-OUT ASYMMETRICAL ROADMAP - LIGHT THEME (Matches Silicon Tech) */}
            <section style={{ padding: "120px 0 150px", backgroundColor: "#f8fafc", position: "relative" }}>
                <div className="container">
                    <div className="text-center mb-5 pb-5 wow fadeInUp">
                        <span style={{ color: "#3b82f6", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", display: "inline-block", marginBottom: "12px" }}>
                            ROADMAP
                        </span>
                        <h2 style={{ fontSize: "44px", fontWeight: "900", color: "#0a1931", letterSpacing: "-1px" }}>
                            Innovation Roadmap
                        </h2>
                    </div>

                    <div style={{ position: "relative" }}>
                        {/* Wavy Timeline Background SVG - Blue variant */}
                        <svg viewBox="0 0 1000 2000" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} preserveAspectRatio="none">
                            <path d="M 100 0 Q 500 200 100 400 T 500 800 T 200 1200 T 800 1600 T 200 2000" fill="none" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="6" strokeDasharray="15, 15" />
                        </svg>

                        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            {roadmapSteps.map((step, index) => (
                                <div key={index} style={{ 
                                    display: "flex", 
                                    justifyContent: step.align, 
                                    width: "100%",
                                    marginTop: step.mt, 
                                    position: "relative",
                                    zIndex: index + 1
                                }} className="wow fadeInUp" data-wow-delay={`${0.1}s`}>
                                    <div className="roadmap-spaced-card" style={{
                                        width: "48%",
                                        minWidth: "340px",
                                        background: "#ffffff",
                                        borderRadius: "24px",
                                        padding: "15px",
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                                        border: "1px solid rgba(226, 232, 240, 0.8)",
                                        position: "relative",
                                        transition: "all 0.3s ease"
                                    }}>
                                        {/* Floating Badge Number - Blue variant */}
                                        <div style={{ position: "absolute", top: "-25px", left: index % 2 === 0 ? "-25px" : "auto", right: index % 2 !== 0 ? "-25px" : "auto", width: "70px", height: "70px", borderRadius: "50%", background: "#3b82f6", color: "#ffffff", fontSize: "28px", fontWeight: "900", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)", zIndex: 5, border: "5px solid #ffffff" }}>
                                            {step.step}
                                        </div>

                                        <div style={{ position: "relative", width: "100%", height: "260px", borderRadius: "16px", overflow: "hidden", marginBottom: "20px" }}>
                                            <Image src={`/images/ziqora/${step.image}`} alt={step.title} fill style={{ objectFit: "cover" }} />
                                        </div>

                                        <div style={{ padding: "0 15px 15px" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "12px" }}>
                                                <div style={{ width: "35px", height: "35px", borderRadius: "10px", background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px" }}>
                                                    <i className={`fa-solid ${step.icon}`}></i>
                                                </div>
                                                <h4 style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a", margin: 0 }}>{step.title}</h4>
                                            </div>
                                            <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FLOATING ADVANTAGES SECTION - LIGHT THEME */}
            <section style={{ padding: "100px 0 120px", backgroundColor: "#ffffff", position: "relative", overflow: "hidden", borderTop: "1px solid #f1f5f9" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 wow fadeInLeft">
                            <span style={{ color: "#3b82f6", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "14px", display: "block", marginBottom: "12px" }}>
                                TECHNICAL ADVANTAGES
                            </span>
                            <h2 style={{ fontSize: "42px", fontWeight: "900", color: "#0a1931", marginBottom: "20px", letterSpacing: "-1px", lineHeight: "1.2" }}>
                                Crystal Growth Excellence
                            </h2>
                            <p style={{ color: "#475569", fontSize: "18px", lineHeight: "1.7", marginBottom: "40px" }}>
                                Optimized monocrystalline growth technologies engineered to deliver next-level performance and structural integrity.
                            </p>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    "Higher crystal uniformity across the ingot structure",
                                    "Reduced dislocation density and micro-defects",
                                    "Improved wafer conversion efficiency",
                                    "Enhanced downstream cell performance"
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px", color: "#334155", fontSize: "16px", fontWeight: "600" }}>
                                        <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", flexShrink: 0 }}>
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-lg-7 mt-5 mt-lg-0 position-relative wow fadeInRight" data-wow-delay=".2s">
                            <div style={{ position: "relative", height: "550px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                {/* Central Image */}
                                <div style={{ position: "relative", width: "450px", height: "450px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 25px 50px rgba(0,0,0,0.15)", zIndex: 2, border: "12px solid #f8fafc" }}>
                                    <Image src="/images/ziqora/ingot_hero_bg.png" alt="Crystal Growth" fill style={{ objectFit: "cover" }} />
                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(15, 23, 42, 0.1), transparent)" }}></div>
                                </div>
                                
                                {/* Background Decorative Circle */}
                                <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "520px", height: "520px", borderRadius: "50%", border: "1px dashed #cbd5e1", zIndex: 1, animation: "spin 30s linear infinite" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <style jsx>{`
                .crazy-card:hover {
                    transform: translateY(-20px) rotate(0deg) scale(1.05) !important;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.1) !important;
                    border-color: rgba(59, 130, 246, 0.2) !important;
                    z-index: 100;
                }
                .roadmap-spaced-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.08) !important;
                }
                
                @keyframes spin {
                    0% { transform: translate(-50%, -50%) rotate(0deg); }
                    100% { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                @media (max-width: 991px) {
                    .crazy-card-wrapper {
                        width: calc(50% - 30px) !important;
                        margin-top: 20px !important;
                    }
                    .roadmap-spaced-card {
                        width: 100% !important;
                        margin-top: 30px !important;
                    }
                }
                @media (max-width: 767px) {
                    .crazy-card-wrapper {
                        width: 100% !important;
                    }
                }
            `}</style>
        </>
    );
};

export default IngotRoadmap;
