"use client";

import React from "react";

const manufacturingSteps = [
    {
        id: "ingot",
        stepNum: "01",
        title: "Polysilicon Charging",
        subtitle: "Feedstock Prep",
        desc: "Precision loading of 99.9999999% pure polysilicon chunks into the quartz crucible, meticulously arranged to optimize melting dynamics.",
        color: "#f97316", // Keeping step icon colors distinct
        icon: "fa-cubes",
        position: { top: "0%", left: "10%" }
    },
    {
        id: "wafer",
        stepNum: "02",
        title: "Crystal Growth",
        subtitle: "Ingot Pulling",
        desc: "Advanced Czochralski (CZ) process where a seed crystal is dipped into the molten silicon and pulled to form a massive single-crystal ingot.",
        color: "#3b82f6",
        icon: "fa-temperature-arrow-up",
        position: { top: "35%", left: "55%" }
    },
    {
        id: "cell",
        stepNum: "03",
        title: "Ingot Conditioning",
        subtitle: "Quality Validation",
        desc: "The cylindrical ingot undergoes precision cropping to remove seed/tail sections, followed by squaring to optimize the profile for maximum yield.",
        color: "#10b981",
        icon: "fa-microchip",
        position: { top: "70%", left: "15%" }
    }
];

const IngotEcosystem = () => {
    return (
        <section style={{ padding: "140px 0 180px", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden" }}>
            {/* Clean Light Background Slits */}
            <div style={{ position: "absolute", top: "-50%", left: "-20%", width: "150%", height: "200%", background: "linear-gradient(45deg, transparent 45%, rgba(59, 130, 246, 0.02) 48%, rgba(59, 130, 246, 0.04) 50%, rgba(59, 130, 246, 0.02) 52%, transparent 55%)", zIndex: 0, pointerEvents: "none", transform: "skewY(-15deg)" }}></div>
            
            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div className="text-center mb-5 pb-3 wow fadeInUp">
                    <span style={{ color: "#10b981", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "14px", display: "inline-block", marginBottom: "12px" }}>
                        VALUE CHAIN OPERATIONS
                    </span>
                    <h2 style={{ fontSize: "44px", fontWeight: "900", color: "#0f172a", marginBottom: "20px", letterSpacing: "-0.5px" }}>
                        Ingot Manufacturing Ecosystem
                    </h2>
                    <p style={{ color: "#475569", fontSize: "18px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
                        A dynamic, asymmetric visualization of our monocrystalline ingot operations, demonstrating engineering precision across the production flow.
                    </p>
                </div>

                {/* THE ASYMMETRIC ZIG-ZAG PATH - LIGHT THEME */}
                <div className="zig-zag-container" style={{ position: "relative", marginTop: "60px" }}>
                    
                    {/* Connection Line (SVG Curve) */}
                    <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", overflow: "visible" }}>
                        <path d="M 25% 10% C 70% 20%, 80% 40%, 65% 50% C 40% 60%, 20% 70%, 35% 90%" fill="none" stroke="rgba(226,232,240,0.8)" strokeWidth="15" strokeLinecap="round" />
                        <path d="M 25% 10% C 70% 20%, 80% 40%, 65% 50% C 40% 60%, 20% 70%, 35% 90%" fill="none" stroke="url(#glowPathLight)" strokeWidth="4" strokeLinecap="round" strokeDasharray="15, 15" className="animated-path" />
                        <defs>
                            <linearGradient id="glowPathLight" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#f97316" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {manufacturingSteps.map((step, index) => (
                        <div key={step.id} className="wow zoomIn" data-wow-delay={`${index * 0.2}s`} style={{
                            position: "absolute",
                            top: step.position.top,
                            left: step.position.left,
                            width: "45%",
                            minWidth: "350px",
                            zIndex: 10
                        }}>
                            <div className="asymmetric-card" style={{
                                background: "#ffffff",
                                border: `1px solid #e2e8f0`,
                                borderRadius: index % 2 === 0 ? "50px 10px 50px 10px" : "10px 50px 10px 50px", 
                                padding: "40px",
                                position: "relative",
                                boxShadow: `0 25px 50px rgba(0,0,0,0.05)`,
                                transition: "all 0.4s ease"
                            }}>
                                {/* Floating Number Background - Light variant */}
                                <div style={{ position: "absolute", bottom: "-10px", right: "20px", fontSize: "140px", fontWeight: "900", color: "#f1f5f9", zIndex: 0, lineHeight: 1 }}>
                                    {step.stepNum}
                                </div>

                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <div style={{ 
                                        width: "70px", 
                                        height: "70px", 
                                        borderRadius: index % 2 === 0 ? "20px 5px 20px 5px" : "5px 20px 5px 20px", 
                                        background: `${step.color}15`, 
                                        color: step.color,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "30px",
                                        marginBottom: "25px",
                                        transform: index % 2 === 0 ? "rotate(-5deg)" : "rotate(5deg)",
                                        border: `1px solid ${step.color}30`
                                    }}>
                                        <i className={`fa-solid ${step.icon}`}></i>
                                    </div>
                                    
                                    <h4 style={{ color: step.color, fontSize: "14px", fontWeight: "700", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                                        {step.subtitle}
                                    </h4>
                                    <h3 style={{ color: "#0f172a", fontSize: "28px", fontWeight: "800", marginBottom: "15px", lineHeight: "1.2" }}>
                                        {step.title}
                                    </h3>
                                    <p style={{ color: "#475569", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* THE ASYMMETRICAL CZ FURNACE HUD - LIGHT/BLUEPRINT THEME */}
                <div className="wow fadeInUp" data-wow-delay=".4s" style={{ marginTop: "120px", position: "relative" }}>
                    
                    {/* Floating Text Background - Light variant */}
                    <div style={{ position: "absolute", top: "-40px", left: "5%", fontSize: "100px", fontWeight: "900", color: "#e2e8f0", whiteSpace: "nowrap", pointerEvents: "none", zIndex: 0, opacity: 0.5 }}>
                        CZ-FURNACE
                    </div>

                    <div style={{ 
                        background: "#ffffff", 
                        border: "1px solid #e2e8f0", 
                        borderRadius: "30px", 
                        padding: "50px",
                        position: "relative",
                        zIndex: 1,
                        boxShadow: "0 30px 60px rgba(0,0,0,0.06)",
                    }}>
                        <div className="row align-items-center">
                            {/* Light Blueprint Side - Floating */}
                            <div className="col-lg-5 position-relative" style={{ minHeight: "450px" }}>
                                <div style={{ 
                                    position: "absolute", 
                                    top: "-60px",
                                    left: "-30px", 
                                    background: "#f1f5f9", 
                                    border: "2px solid #3b82f6", 
                                    borderRadius: "24px", 
                                    padding: "40px",
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                                    zIndex: 10
                                }} className="floating-blueprint-light">
                                    <div style={{ color: "#3b82f6", fontFamily: "monospace", fontSize: "12px", marginBottom: "30px", letterSpacing: "1px", fontWeight: "600" }}>
                                        SYSTEM.PRERENDER // SCHEMATIC
                                    </div>
                                    {/* The Furnace SVG - Adapted for light background */}
                                    <svg width="280" height="320" viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                                        <path d="M40,100 Q40,180 100,180 Q160,180 160,100" stroke="#94a3b8" strokeWidth="2" fill="#ffffff"/>
                                        <path d="M42,110 Q100,115 158,110 Q100,105 42,110 Z" fill="#f97316" opacity="0.9"/>
                                        <path d="M42,110 Q42,178 100,178 Q158,178 158,110" fill="url(#meltGradientLight)" opacity="0.8"/>
                                        <rect x="85" y="40" width="30" height="70" fill="url(#ingotGradientLight)" stroke="#64748b" strokeWidth="1"/>
                                        <rect x="98" y="20" width="4" height="20" fill="#64748b" />
                                        <line x1="100" y1="0" x2="100" y2="20" stroke="#64748b" strokeWidth="2" strokeDasharray="4 2"/>
                                        
                                        <g fontFamily="monospace" fontSize="9" fontWeight="700">
                                            <line x1="120" y1="60" x2="160" y2="60" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                                            <circle cx="115" cy="60" r="2" fill="#3b82f6" />
                                            <text x="165" y="63" fill="#3b82f6">MONOCRYSTAL</text>

                                            <line x1="130" y1="130" x2="170" y2="130" stroke="#ea580c" strokeWidth="1" strokeDasharray="2 2" />
                                            <circle cx="125" cy="130" r="2" fill="#ea580c" />
                                            <text x="175" y="133" fill="#ea580c">MOLTEN SILICON</text>
                                        </g>
                                        <defs>
                                            <linearGradient id="ingotGradientLight" x1="85" y1="40" x2="115" y2="40" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#cbd5e1" /><stop offset="0.5" stopColor="#ffffff" /><stop offset="1" stopColor="#94a3b8" />
                                            </linearGradient>
                                            <radialGradient id="meltGradientLight" cx="100" cy="140" r="60" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#f97316" /><stop offset="1" stopColor="#ea580c" stopOpacity="0" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            
                            {/* Data Side - Light theme */}
                            <div className="col-lg-7 ps-lg-5 text-end">
                                <h3 style={{ color: "#0f172a", fontSize: "38px", fontWeight: "900", marginBottom: "15px", letterSpacing: "-0.5px" }}>Czochralski Furnace</h3>
                                <p style={{ color: "#475569", fontSize: "17px", lineHeight: "1.7", marginBottom: "35px", marginLeft: "auto", maxWidth: "90%" }}>
                                    Transforming solar-grade polysilicon into high-purity monocrystalline ingots through precision-controlled thermal environments. Designed for M10/G12 diameters.
                                </p>
                                
                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end", gap: "15px" }}>
                                    {[
                                        { label: "Melt Temp", value: "~1,420°C", color: "#ef4444" },
                                        { label: "Pull Rate", value: "2.5 mm/min", color: "#f59e0b" },
                                        { label: "Purity", value: "99.9999999%", color: "#3b82f6" },
                                        { label: "Yield", value: "92%", color: "#10b981" }
                                    ].map((stat, idx) => (
                                        <div key={idx} style={{ 
                                            background: "#f8fafc", 
                                            padding: "20px 25px", 
                                            borderRadius: "16px", 
                                            border: `1px solid #e2e8f0`, 
                                            borderRight: `4px solid ${stat.color}`,
                                            minWidth: "160px",
                                            textAlign: "right",
                                            boxShadow: "0 5px 15px rgba(0,0,0,0.02)"
                                        }}>
                                            <div style={{ color: "#64748b", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "5px", fontWeight: "700" }}>{stat.label}</div>
                                            <div style={{ color: "#0f172a", fontSize: "22px", fontWeight: "800" }}>{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .zig-zag-container {
                    min-height: 1250px;
                }
                @keyframes dash {
                    to { stroke-dashoffset: -30; }
                }
                .animated-path {
                    animation: dash 1s linear infinite;
                }
                .asymmetric-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 35px 60px rgba(0,0,0,0.08) !important;
                }
                .floating-blueprint-light {
                    animation: float-light 6s ease-in-out infinite;
                }
                @keyframes float-light {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(1deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                
                @media (max-width: 991px) {
                    .zig-zag-container {
                        min-height: auto !important;
                    }
                    .asymmetric-card {
                        position: relative !important;
                        top: auto !important;
                        left: auto !important;
                        width: 100% !important;
                        margin-bottom: 40px;
                    }
                    .floating-blueprint-light {
                        position: relative !important;
                        top: 0 !important;
                        left: 0 !important;
                        margin-bottom: 40px;
                    }
                }
            `}</style>
        </section>
    );
};

export default IngotEcosystem;
