"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const PolysiliconEcosystem = () => {
    const ecosystemSteps = [
        {
            num: "01",
            title: "Raw Material Processing",
            subtitle: "Metallurgical Silicon Refinement",
            icon: "fa-gem",
            color: "from-blue-500 to-cyan-400"
        },
        {
            num: "02",
            title: "Chemical Purification",
            subtitle: "Trichlorosilane (TCS) Synthesis & Distillation",
            icon: "fa-flask",
            color: "from-emerald-500 to-teal-400"
        },
        {
            num: "03",
            title: "Polysilicon Deposition",
            subtitle: "Ultra-Pure Silicon Growth",
            icon: "fa-atom",
            color: "from-indigo-500 to-purple-400"
        }
    ];

    const parameters = [
        { label: "Reactor Temp", value: "~1,100°C", icon: "fa-temperature-high" },
        { label: "Silicon Purity", value: "11N Solar Grade", icon: "fa-certificate" },
        { label: "TCS Conversion", value: "95%", icon: "fa-bolt" },
        { label: "Hydrogen Recovery", value: "98%", icon: "fa-recycle" },
        { label: "Energy Efficiency", value: "Closed-Loop System", icon: "fa-leaf" },
        { label: "Annual Throughput", value: "GW-Level Scale", icon: "fa-industry" },
    ];

    return (
        <>
            {/* VALUE CHAIN SECTION - PREMIUM LIGHT THEME */}
            <section style={{ padding: "120px 0", backgroundColor: "#f8fafc", position: "relative", overflow: "hidden" }}>
                {/* Animated Background Gradients */}
                <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)", animation: "pulse 8s infinite alternate" }}></div>
                <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)", animation: "pulse 10s infinite alternate-reverse" }}></div>
                
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".1s">
                        <div style={{ display: "inline-block", padding: "8px 20px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "30px", color: "#10b981", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", marginBottom: "20px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                            Value Chain
                        </div>
                        <h2 style={{ fontSize: "48px", fontWeight: "900", color: "#0f172a", marginBottom: "20px", letterSpacing: "-1px" }}>
                            Polysilicon Ecosystem
                        </h2>
                        <p style={{ color: "#64748b", fontSize: "18px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.7" }}>
                            An interactive, engineering-level perspective of the core planned operations.
                        </p>
                    </div>

                    <div className="row justify-content-center mt-5">
                        {ecosystemSteps.map((step, index) => (
                            <div key={index} className="col-lg-4 col-md-6 mb-4 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`}>
                                <div 
                                    className="ecosystem-card"
                                    style={{ 
                                        background: "rgba(255, 255, 255, 0.8)", 
                                        backdropFilter: "blur(20px)",
                                        padding: "50px 40px", 
                                        borderRadius: "30px", 
                                        boxShadow: "0 20px 40px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.5)", 
                                        height: "100%",
                                        border: "1px solid rgba(226, 232, 240, 0.8)",
                                        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                                        position: "relative",
                                        overflow: "hidden",
                                        zIndex: 1,
                                        cursor: "pointer"
                                    }}
                                    onMouseEnter={(e) => { 
                                        e.currentTarget.style.transform = "translateY(-15px) scale(1.02)"; 
                                        e.currentTarget.style.boxShadow = "0 30px 60px rgba(16, 185, 129, 0.15), inset 0 0 0 1px rgba(255,255,255,0.8)"; 
                                        e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.3)";
                                        e.currentTarget.querySelector('.icon-wrapper').style.transform = "scale(1.1) rotate(5deg)";
                                        e.currentTarget.querySelector('.bg-number').style.opacity = "0.8";
                                        e.currentTarget.querySelector('.bg-number').style.transform = "translate(-10px, 10px)";
                                    }}
                                    onMouseLeave={(e) => { 
                                        e.currentTarget.style.transform = "translateY(0) scale(1)"; 
                                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.04), inset 0 0 0 1px rgba(255,255,255,0.5)"; 
                                        e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.8)";
                                        e.currentTarget.querySelector('.icon-wrapper').style.transform = "scale(1) rotate(0deg)";
                                        e.currentTarget.querySelector('.bg-number').style.opacity = "0.3";
                                        e.currentTarget.querySelector('.bg-number').style.transform = "translate(0, 0)";
                                    }}
                                >
                                    <div className="bg-number" style={{ position: "absolute", top: "-10px", right: "-10px", fontSize: "140px", fontWeight: "900", color: "transparent", WebkitTextStroke: "2px rgba(241, 245, 249, 0.8)", zIndex: -1, opacity: 0.3, lineHeight: 1, transition: "all 0.5s ease" }}>
                                        {step.num}
                                    </div>
                                    <div className="icon-wrapper" style={{ width: "80px", height: "80px", borderRadius: "24px", background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px", color: "#10b981", fontSize: "32px", border: "1px solid rgba(16, 185, 129, 0.2)", transition: "all 0.4s ease", boxShadow: "0 10px 20px rgba(16, 185, 129, 0.1)" }}>
                                        <i className={`fa-solid ${step.icon}`}></i>
                                    </div>
                                    <h4 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", marginBottom: "12px", lineHeight: "1.3" }}>{step.title}</h4>
                                    <p style={{ color: "#64748b", margin: 0, fontSize: "16px", lineHeight: "1.6", fontWeight: "500" }}>{step.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EQUIPMENT / TECHNOLOGY SECTION - ULTRA PREMIUM DARK HUD */}
            <section style={{ backgroundColor: "#020617", padding: "140px 0", color: "#ffffff", position: "relative", overflow: "hidden" }}>
                {/* Cyberpunk Grid Background */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", zIndex: 0, transform: "perspective(500px) rotateX(60deg) scale(2) translateY(-100px)", transformOrigin: "top center", opacity: 0.5 }}></div>
                
                {/* Glowing Orbs */}
                <div style={{ position: "absolute", top: "20%", right: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }}></div>
                <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }}></div>

                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay=".2s">
                            <div style={{ display: "inline-flex", alignItems: "center", padding: "6px 16px", background: "rgba(16, 185, 129, 0.1)", borderRadius: "20px", border: "1px solid rgba(16, 185, 129, 0.2)", marginBottom: "20px" }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", marginRight: "10px", boxShadow: "0 0 10px #10b981", animation: "blink 2s infinite" }}></div>
                                <span style={{ color: "#10b981", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "12px" }}>Equipment / Technology</span>
                            </div>
                            
                            <h2 style={{ fontSize: "44px", fontWeight: "900", marginBottom: "25px", lineHeight: "1.1", color: "#f8fafc", textShadow: "0 0 40px rgba(255,255,255,0.1)" }}>
                                Siemens Process <span style={{ background: "linear-gradient(to right, #10b981, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CVD Reactor</span>
                            </h2>
                            <p style={{ color: "#94a3b8", fontSize: "18px", lineHeight: "1.8", marginBottom: "50px", fontWeight: "400" }}>
                                Envisioning next-generation Siemens reactors designed to convert purified trichlorosilane gas into ultra-high-purity polysilicon rods under controlled thermal and chemical conditions. The process enables solar-grade silicon purity exceeding 99.9999999%.
                            </p>

                            <div className="row g-4">
                                {parameters.map((param, idx) => (
                                    <div className="col-md-6" key={idx}>
                                        <div 
                                            className="tech-param-card"
                                            style={{ 
                                                background: "rgba(15, 23, 42, 0.6)", 
                                                backdropFilter: "blur(10px)",
                                                border: "1px solid rgba(51, 65, 85, 0.5)", 
                                                borderRadius: "16px", 
                                                padding: "24px", 
                                                height: "100%",
                                                transition: "all 0.3s ease",
                                                position: "relative",
                                                overflow: "hidden",
                                                cursor: "default"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = "rgba(30, 41, 59, 0.8)";
                                                e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.4)";
                                                e.currentTarget.style.transform = "translateY(-5px)";
                                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(16, 185, 129, 0.05)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "rgba(15, 23, 42, 0.6)";
                                                e.currentTarget.style.borderColor = "rgba(51, 65, 85, 0.5)";
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "none";
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                                                <i className={`fa-solid ${param.icon}`} style={{ color: "#64748b", fontSize: "14px", marginRight: "10px" }}></i>
                                                <div style={{ color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>{param.label}</div>
                                            </div>
                                            <div style={{ color: "#10b981", fontSize: "22px", fontWeight: "800", textShadow: "0 0 20px rgba(16, 185, 129, 0.4)" }}>{param.value}</div>
                                            
                                            {/* Decorative tech line */}
                                            <div style={{ position: "absolute", bottom: 0, left: 0, height: "2px", width: "30%", background: "linear-gradient(90deg, #10b981, transparent)" }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive PRERENDER Graphic - UPGRADED */}
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".4s">
                            <div style={{ 
                                background: "#0b1121", 
                                border: "1px solid rgba(16, 185, 129, 0.2)", 
                                borderRadius: "24px", 
                                padding: "40px", 
                                position: "relative",
                                boxShadow: "0 30px 60px rgba(0,0,0,0.6), inset 0 0 40px rgba(16, 185, 129, 0.05)",
                                overflow: "hidden"
                            }}>
                                {/* Scanning Laser Effect */}
                                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "2px", background: "rgba(16, 185, 129, 0.5)", boxShadow: "0 0 20px #10b981", zIndex: 10, animation: "scan 4s linear infinite" }}></div>

                                {/* HUD Overlays */}
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px", borderBottom: "1px dashed rgba(51, 65, 85, 0.8)", paddingBottom: "15px" }}>
                                    <div style={{ fontSize: "11px", color: "#10b981", fontFamily: "monospace", letterSpacing: "1px", display: "flex", alignItems: "center" }}>
                                        <i className="fa-solid fa-microchip" style={{ marginRight: "8px" }}></i>
                                        SYS.PRERENDER // CVD_REACTOR
                                    </div>
                                    <div style={{ fontSize: "11px", color: "#64748b", fontFamily: "monospace" }}>
                                        STATUS: <span style={{ color: "#10b981" }}>ACTIVE</span> // SCALE: 1:15
                                    </div>
                                </div>
                                
                                <div style={{ position: "relative", height: "420px", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                                    
                                    {/* Ambient Glow */}
                                    <div style={{ position: "absolute", width: "150px", height: "150px", background: "#f59e0b", filter: "blur(80px)", opacity: 0.3, animation: "pulse 3s infinite alternate" }}></div>

                                    {/* Abstract Reactor Representation */}
                                    <div style={{ width: "220px", height: "340px", border: "2px solid rgba(16, 185, 129, 0.3)", borderRadius: "110px 110px 15px 15px", position: "relative", display: "flex", justifyContent: "center", background: "rgba(15, 23, 42, 0.4)", backdropFilter: "blur(5px)", boxShadow: "inset 0 0 30px rgba(16, 185, 129, 0.1)" }}>
                                        
                                        {/* Internal Grid */}
                                        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "110px 110px 15px 15px", backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)", backgroundSize: "20px 20px", opacity: 0.3, zIndex: 0 }}></div>

                                        {/* Heating Electrodes & Rods (Glowing) */}
                                        <div style={{ width: "24px", height: "280px", background: "linear-gradient(to top, #ef4444 0%, #f59e0b 40%, #fef3c7 100%)", position: "absolute", bottom: "15px", left: "65px", borderRadius: "12px", boxShadow: "0 0 25px rgba(245, 158, 11, 0.8)", zIndex: 2 }}></div>
                                        <div style={{ width: "24px", height: "280px", background: "linear-gradient(to top, #ef4444 0%, #f59e0b 40%, #fef3c7 100%)", position: "absolute", bottom: "15px", right: "65px", borderRadius: "12px", boxShadow: "0 0 25px rgba(245, 158, 11, 0.8)", zIndex: 2 }}></div>
                                        
                                        {/* Connective bridge */}
                                        <div style={{ width: "90px", height: "24px", background: "#fef3c7", position: "absolute", top: "45px", borderRadius: "12px", boxShadow: "0 0 30px rgba(245, 158, 11, 1)", zIndex: 3 }}></div>
                                        
                                        {/* Base Plate */}
                                        <div style={{ width: "180px", height: "10px", background: "#334155", position: "absolute", bottom: "5px", borderRadius: "5px", zIndex: 1 }}></div>

                                        {/* Gas Flow Indicators - Animated */}
                                        <div style={{ position: "absolute", bottom: "-30px", color: "#38bdf8", fontSize: "13px", fontFamily: "monospace", fontWeight: "700", textShadow: "0 0 10px #38bdf8", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <i className="fa-solid fa-angles-up" style={{ animation: "floatUp 1.5s infinite" }}></i>
                                            <span style={{ marginTop: "5px" }}>TCS + H₂</span>
                                        </div>
                                        <div style={{ position: "absolute", top: "60%", right: "-80px", color: "#94a3b8", fontSize: "12px", fontFamily: "monospace", display: "flex", alignItems: "center" }}>
                                            EXHAUST
                                            <i className="fa-solid fa-arrow-right-long ms-2" style={{ color: "#ef4444" }}></i>
                                        </div>
                                    </div>
                                    
                                    {/* Advanced HUD Measurements */}
                                    <div style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "100%", pointerEvents: "none" }}>
                                        {/* Z-Axis markers */}
                                        <div style={{ position: "absolute", left: "10px", top: "80px", color: "#10b981", fontSize: "10px", fontFamily: "monospace", display: "flex", alignItems: "center" }}>
                                            z=400 <div style={{ width: "15px", height: "1px", background: "rgba(16, 185, 129, 0.5)", marginLeft: "5px" }}></div>
                                        </div>
                                        <div style={{ position: "absolute", left: "10px", top: "200px", color: "#10b981", fontSize: "10px", fontFamily: "monospace", display: "flex", alignItems: "center" }}>
                                            z=200 <div style={{ width: "15px", height: "1px", background: "rgba(16, 185, 129, 0.5)", marginLeft: "5px" }}></div>
                                        </div>
                                        <div style={{ position: "absolute", left: "10px", bottom: "50px", color: "#10b981", fontSize: "10px", fontFamily: "monospace", display: "flex", alignItems: "center" }}>
                                            z=000 <div style={{ width: "15px", height: "1px", background: "rgba(16, 185, 129, 0.5)", marginLeft: "5px" }}></div>
                                        </div>
                                        
                                        {/* Annotation Lines with glowing dots */}
                                        <div style={{ position: "absolute", right: "5%", top: "100px", fontSize: "11px", color: "#fcd34d", fontFamily: "monospace", display: "flex", alignItems: "center" }}>
                                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fcd34d", boxShadow: "0 0 10px #fcd34d" }}></div>
                                            <div style={{ width: "50px", height: "1px", background: "rgba(252, 211, 77, 0.6)", margin: "0 10px" }}></div>
                                            UHP POLYSILICON RODS
                                        </div>
                                        
                                        <div style={{ position: "absolute", right: "5%", top: "220px", fontSize: "11px", color: "#ef4444", fontFamily: "monospace", display: "flex", alignItems: "center" }}>
                                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 10px #ef4444", animation: "blink 1s infinite" }}></div>
                                            <div style={{ width: "30px", height: "1px", background: "rgba(239, 68, 68, 0.6)", margin: "0 10px" }}></div>
                                            DEPOSITION ZONE (1100°C)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.2); opacity: 0.8; }
                }
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                @keyframes floatUp {
                    0% { transform: translateY(5px); opacity: 0.5; }
                    50% { transform: translateY(-2px); opacity: 1; }
                    100% { transform: translateY(5px); opacity: 0.5; }
                }
            `}</style>
        </>
    );
};

export default PolysiliconEcosystem;
