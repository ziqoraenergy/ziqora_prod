"use client";

import React from "react";
import Image from "next/image";

const SiliconTechRoadmap = () => {
    const pillars = [
        {
            title: "High-Efficiency Solar Cells",
            desc: "Implementing production lines for advanced cell architectures like TOPCon and HJT, maximizing photoelectric conversion yields.",
            icon: "fa-solar-panel",
            color: "#3b82f6" // Blue
        },
        {
            title: "Advanced Wafer Manufacturing",
            desc: "Utilizing precise diamond-wire slicing technologies to achieve thinner, flat wafers with minimal kerf loss and degradation.",
            icon: "fa-layer-group",
            color: "#10b981" // Green
        },
        {
            title: "AI-Based Quality Inspection",
            desc: "Integrating computer vision networks at critical junctures to continuously monitor and flag micro-defects in real-time.",
            icon: "fa-robot",
            color: "#8b5cf6" // Purple
        },
        {
            title: "Smart Manufacturing Systems",
            desc: "Deploying Automated Guided Vehicles (AGVs) and robotic handling to safely transport delicate silicon components.",
            icon: "fa-network-wired",
            color: "#f59e0b" // Amber
        },
        {
            title: "Industry 4.0 Integration",
            desc: "Establishing a fully connected cleanroom environment with comprehensive sensor telemetry for environmental control.",
            icon: "fa-chart-line",
            color: "#06b6d4" // Cyan
        },
        {
            title: "Digital Traceability",
            desc: "Maintaining rigorous serial databases that log processing parameters for comprehensive batch-level transparency.",
            icon: "fa-database",
            color: "#f43f5e" // Rose
        }
    ];

    const roadmapSteps = [
        {
            step: "01",
            title: "Infrastructure Foundation",
            desc: "Establishing automated wafer and monocrystalline cell lines.",
            icon: "fa-building",
            image: "roadmap_infrastructure_1780428214598.png"
        },
        {
            step: "02",
            title: "Capacity Scaling",
            desc: "Achieving a stabilized 5 GW throughput rate across product lines.",
            icon: "fa-chart-line",
            image: "roadmap_capacity_1780428229337.png"
        },
        {
            step: "03",
            title: "System Automation",
            desc: "Integrating AGV logistics and comprehensive sensor telemetry.",
            icon: "fa-robot",
            image: "roadmap_automation_1780428244263.png"
        },
        {
            step: "04",
            title: "Advanced Deployment",
            desc: "Scaling TOPCon and Heterojunction (HJT) configurations.",
            icon: "fa-solar-panel",
            image: "roadmap_advanced_1780428257227.png"
        },
        {
            step: "05",
            title: "Ecosystem Integration",
            desc: "Finalizing a fully optimized domestic component value chain.",
            icon: "fa-network-wired",
            image: "roadmap_ecosystem_1780428271408.png"
        }
    ];

    return (
        <>
            {/* INNOVATION PILLARS SECTION */}
            <section style={{ padding: "100px 0", backgroundColor: "#ffffff", borderTop: "1px solid #f1f5f9" }}>
                <div className="container">
                    <div className="row mb-5 pb-2">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay=".1s">
                            <span style={{ color: "#3b82f6", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "14px", display: "block", marginBottom: "12px" }}>
                                INNOVATION PILLARS
                            </span>
                            <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px", color: "#0f172a", letterSpacing: "-0.5px" }}>
                                Future Technologies
                            </h2>
                            <p style={{ color: "#475569", fontSize: "18px", maxWidth: "800px", lineHeight: "1.7" }}>
                                Advanced technologies Ziqora plans to integrate into future production lines to maintain global competitiveness.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {pillars.map((pillar, index) => (
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + (index * 0.1)}s`} key={index}>
                                <div style={{ 
                                    padding: "30px 25px", 
                                    borderRadius: "12px", 
                                    background: "#f8fafc", 
                                    height: "100%", 
                                    border: "1px solid #e2e8f0",
                                    borderTop: `4px solid ${pillar.color}`,
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                }}
                                className="corporate-card"
                                >
                                    <div style={{ 
                                        width: "45px", 
                                        height: "45px", 
                                        borderRadius: "10px", 
                                        background: `${pillar.color}15`, 
                                        color: pillar.color, 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center", 
                                        fontSize: "20px", 
                                        marginBottom: "20px",
                                    }}>
                                        <i className={`fa-solid ${pillar.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#0f172a", marginBottom: "12px" }}>{pillar.title}</h4>
                                    <p style={{ color: "#475569", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROADMAP SECTION - VERTICAL TIMELINE WITH VIBRANT IMAGES */}
            <section style={{ padding: "120px 0", backgroundColor: "#f8fafc", position: "relative" }}>
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center mb-5 pb-4 wow fadeInUp" data-wow-delay=".1s">
                                <span style={{ color: "#3b82f6", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "14px", display: "block", marginBottom: "12px" }}>
                                    ROADMAP
                                </span>
                                <h2 style={{ fontSize: "40px", fontWeight: "800", color: "#0a1931", marginBottom: "20px", letterSpacing: "-0.5px" }}>
                                    Innovation Roadmap
                                </h2>
                                <p style={{ color: "#64748b", fontSize: "17px", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
                                    Our step-by-step technological vision for establishing a world-class manufacturing ecosystem.
                                </p>
                            </div>

                            <div style={{ position: "relative", marginTop: "30px" }}>
                                {/* Connecting Vertical Line for Timeline */}
                                <div className="d-none d-md-block" style={{ position: "absolute", left: "50%", top: "40px", bottom: "40px", width: "4px", background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(59, 130, 246, 0.1) 100%)", transform: "translateX(-50%)", borderRadius: "2px" }}></div>

                                {roadmapSteps.map((step, index) => {
                                    const isLeft = index % 2 === 0;
                                    const color = "#3b82f6";
                                    
                                    return (
                                        <div key={index} className="row align-items-center mb-5 position-relative wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`} style={{ zIndex: 2 }}>
                                            {isLeft ? (
                                                // Left aligned text, Right aligned image
                                                <>
                                                    <div className="col-md-5 text-md-end text-center mb-4 mb-md-0 pe-md-5">
                                                        <div style={{ background: "#ffffff", padding: "35px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden", border: "1px solid rgba(226, 232, 240, 0.8)", transition: "all 0.3s ease" }}
                                                            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 15px 50px rgba(59, 130, 246, 0.08)`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                                            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
                                                        >
                                                            <span style={{ position: "absolute", top: "-10px", right: "20px", color: "#f1f5f9", fontWeight: "900", fontSize: "100px", opacity: 0.8, lineHeight: 1, zIndex: 0, userSelect: "none" }}>{step.step}</span>
                                                            <div style={{ position: "relative", zIndex: 1 }}>
                                                                <h4 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1931", marginBottom: "15px" }}>{step.title}</h4>
                                                                <p style={{ color: "#475569", lineHeight: "1.7", margin: 0, fontSize: "15px" }}>{step.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                                                        <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: color, boxShadow: `0 0 0 8px rgba(255, 255, 255, 0.8), 0 0 20px rgba(59, 130, 246, 0.2)`, border: `2px solid ${color}`, zIndex: 3 }}>
                                                            <i className={`fa-solid ${step.icon}`} style={{ fontSize: "24px" }}></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
                                                        <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
                                                            <Image src={`/images/ziqora/${step.image}`} alt={step.title} fill style={{ objectFit: "cover" }} />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                // Left aligned image, Right aligned text
                                                <>
                                                    <div className="col-md-5 d-none d-md-flex align-items-center justify-content-center">
                                                        <div style={{ position: "relative", width: "100%", height: "250px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
                                                            <Image src={`/images/ziqora/${step.image}`} alt={step.title} fill style={{ objectFit: "cover" }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center align-items-center mb-4 mb-md-0">
                                                        <div style={{ width: "70px", height: "70px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: color, boxShadow: `0 0 0 8px rgba(255, 255, 255, 0.8), 0 0 20px rgba(59, 130, 246, 0.2)`, border: `2px solid ${color}`, zIndex: 3 }}>
                                                            <i className={`fa-solid ${step.icon}`} style={{ fontSize: "24px" }}></i>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5 text-md-start text-center ps-md-5">
                                                        <div style={{ background: "#ffffff", padding: "35px", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)", position: "relative", overflow: "hidden", border: "1px solid rgba(226, 232, 240, 0.8)", transition: "all 0.3s ease" }}
                                                            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 15px 50px rgba(59, 130, 246, 0.08)`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                                                            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}
                                                        >
                                                            <span style={{ position: "absolute", top: "-10px", left: "20px", color: "#f1f5f9", fontWeight: "900", fontSize: "100px", opacity: 0.8, lineHeight: 1, zIndex: 0, userSelect: "none" }}>{step.step}</span>
                                                            <div style={{ position: "relative", zIndex: 1 }}>
                                                                <h4 style={{ fontSize: "22px", fontWeight: "800", color: "#0a1931", marginBottom: "15px" }}>{step.title}</h4>
                                                                <p style={{ color: "#475569", lineHeight: "1.7", margin: 0, fontSize: "15px" }}>{step.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .corporate-card:hover {
                    background: #ffffff !important;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.04);
                    transform: translateY(-4px);
                }
            `}</style>
        </>
    );
};

export default SiliconTechRoadmap;
