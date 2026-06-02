"use client";

import React, { useState } from "react";

const manufacturingSteps = [
    {
        id: "ingot",
        stepNum: "01",
        title: "Ingot Crystallization",
        subtitle: "Monocrystalline Growth",
        desc: "Advanced Czochralski (CZ) pullers melt polysilicon to grow single-crystal monocrystalline ingots. The process occurs under strictly controlled vacuum conditions, ensuring near-zero defects and consistent molecular integrity.",
        specs: [
            { label: "Operating Temperature", value: "1,420°C" },
            { label: "Pulling Velocity", value: "0.8-2.5 mm/min" },
            { label: "Argon Flow Rate", value: "80-120 L/min" },
            { label: "Target Diameter", value: "M10 / G12" },
            { label: "Production Yield", value: "> 92%" },
            { label: "Carbon Concentration", value: "< 5.0×10¹⁵/cm³" }
        ],
        equipment: "Czochralski (CZ) Crystal Pulling System",
        blueprintTitle: "Czochralski Furnace Schematic",
        color: "#f97316" // Vibrant Orange
    },
    {
        id: "wafer",
        stepNum: "02",
        title: "Precision Wafer Slicing",
        subtitle: "Diamond Wire Technology",
        desc: "Diamond wire cutting systems slice silicon ingots into ultra-thin wafers with high precision. This technology minimizes kerf loss and surface damage, optimizing material utilization and lowering production costs.",
        specs: [
            { label: "Wire Diameter", value: "35 μm - 47 μm" },
            { label: "Wafer Thickness", value: "< 130 μm" },
            { label: "Kerf Loss", value: "< 12 μm" },
            { label: "Web Velocity", value: "24 - 30 m/s" },
            { label: "Thickness Variance", value: "< 3 μm" },
            { label: "Slicing Cycle Time", value: "1.5 hours" }
        ],
        equipment: "High-Speed Diamond Wire Saw",
        blueprintTitle: "Wafer Slicing Mechanism",
        color: "#3b82f6" // Vibrant Blue
    },
    {
        id: "cell",
        stepNum: "03",
        title: "Solar Cell Processing",
        subtitle: "Diffusion & Passivation",
        desc: "Silicon wafers undergo chemical texturing, phosphorus diffusion, and thin-film passivation to form active photovoltaic cells. Advanced topologies like TOPCon are employed to maximize photoelectric conversion efficiency.",
        specs: [
            { label: "Target Efficiency", value: "25.5% - 26.5%" },
            { label: "Surface Morphology", value: "Random Pyramids" },
            { label: "Junction Depth", value: "0.3 - 0.5 μm" },
            { label: "Passivation Layer", value: "Al₂O₃ / SiNx" },
            { label: "Finger Width", value: "15 - 18 μm" },
            { label: "Busbar Configuration", value: "16BB - 18BB" }
        ],
        equipment: "PECVD Passivation Tube Furnaces",
        blueprintTitle: "TOPCon Cell Architecture",
        color: "#10b981" // Vibrant Green
    }
];

const ManufacturingEcosystem = () => {
    const [activeStep, setActiveStep] = useState(0);

    const activeColor = manufacturingSteps[activeStep].color;

    return (
        <section style={{ backgroundColor: "#f8fafc", padding: "120px 0", color: "#0f172a", position: "relative" }}>
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row mb-5 pb-2">
                    <div className="col-lg-8 wow fadeInUp" data-wow-delay=".1s">
                        <span style={{ color: "#10b981", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "14px", display: "block", marginBottom: "12px" }}>
                            Value Chain Operations
                        </span>
                        <h2 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "20px", color: "#0f172a", letterSpacing: "-0.5px" }}>
                            Manufacturing Ecosystem
                        </h2>
                        <p style={{ color: "#475569", fontSize: "18px", maxWidth: "800px", lineHeight: "1.7" }}>
                            A detailed, engineering-level overview of our core manufacturing processes, demonstrating our commitment to precision, efficiency, and scale.
                        </p>
                    </div>
                </div>

                <div className="row g-5">
                    {/* Left Column: Interactive Steps */}
                    <div className="col-lg-5 wow fadeInLeft" data-wow-delay=".2s">
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            {manufacturingSteps.map((step, idx) => {
                                const isActive = activeStep === idx;
                                return (
                                    <button
                                        key={step.id}
                                        onClick={() => setActiveStep(idx)}
                                        style={{
                                            textAlign: "left",
                                            padding: "20px 24px",
                                            background: isActive ? "#ffffff" : "transparent",
                                            border: "1px solid",
                                            borderColor: isActive ? "rgba(226, 232, 240, 0.8)" : "transparent",
                                            boxShadow: isActive ? "0 10px 25px rgba(0,0,0,0.03)" : "none",
                                            borderRadius: "12px",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "20px",
                                            width: "100%",
                                            outline: "none",
                                            position: "relative",
                                            overflow: "hidden"
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.5)";
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) e.currentTarget.style.background = "transparent";
                                        }}
                                    >
                                        {isActive && (
                                            <div style={{ position: "absolute", left: 0, top: 0, width: "4px", height: "100%", background: step.color }}></div>
                                        )}
                                        <div
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: "800",
                                                color: isActive ? step.color : "#94a3b8",
                                                transition: "color 0.3s ease",
                                                minWidth: "30px",
                                                opacity: isActive ? 1 : 0.6
                                            }}
                                        >
                                            {step.stepNum}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h4
                                                style={{
                                                    color: isActive ? "#0f172a" : "#475569",
                                                    fontWeight: "700",
                                                    fontSize: "17px",
                                                    margin: "0 0 4px 0",
                                                    transition: "color 0.3s ease"
                                                }}
                                            >
                                                {step.title}
                                            </h4>
                                            <span
                                                style={{
                                                    color: isActive ? step.color : "#94a3b8",
                                                    fontSize: "13px",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                {step.subtitle}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Step Description */}
                        <div
                            style={{
                                marginTop: "30px",
                                padding: "30px",
                                background: "#ffffff",
                                border: "1px solid #e2e8f0",
                                borderTop: `4px solid ${activeColor}`,
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.02)"
                            }}
                        >
                            <span style={{ fontSize: "12px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", color: activeColor, display: "block", marginBottom: "8px" }}>
                                Primary Equipment
                            </span>
                            <h4 style={{ color: "#0f172a", fontWeight: "700", fontSize: "19px", marginBottom: "15px" }}>
                                {manufacturingSteps[activeStep].equipment}
                            </h4>
                            <p style={{ color: "#475569", fontSize: "15px", lineHeight: "1.7", marginBottom: "0" }}>
                                {manufacturingSteps[activeStep].desc}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Engineering Schematic (Professional Light Theme) */}
                    <div className="col-lg-7 wow fadeInRight" data-wow-delay=".3s">
                        <div
                            style={{
                                background: "#ffffff",
                                border: "1px solid #e2e8f0",
                                borderRadius: "16px",
                                padding: "0",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.04)",
                                overflow: "hidden"
                            }}
                        >
                            {/* Blueprint Header */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "20px 30px",
                                    background: "#f1f5f9",
                                    borderBottom: "1px solid #e2e8f0"
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <i className="fa-solid fa-layer-group" style={{ color: activeColor }}></i>
                                    <div style={{ color: "#334155", fontWeight: "600", fontSize: "15px" }}>
                                        {manufacturingSteps[activeStep].blueprintTitle}
                                    </div>
                                </div>
                                <div style={{ fontSize: "12px", color: activeColor, fontWeight: "600", background: `${activeColor}15`, padding: "4px 12px", borderRadius: "20px" }}>
                                    Process Visualization
                                </div>
                            </div>

                            {/* SVG Container */}
                            <div
                                style={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "#ffffff",
                                    position: "relative",
                                    minHeight: "380px",
                                    padding: "20px"
                                }}
                            >
                                {/* Subtle Engineering Grid */}
                                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "linear-gradient(#f8fafc 1px, transparent 1px), linear-gradient(90deg, #f8fafc 1px, transparent 1px)", backgroundSize: "20px 20px", zIndex: 0 }}></div>

                                {activeStep === 0 && (
                                    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ position: "relative", zIndex: 1 }}>
                                        {/* Clean Professional SVG Elements */}
                                        <rect x="120" y="40" width="260" height="320" rx="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
                                        <rect x="130" y="50" width="240" height="300" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                                        
                                        <rect x="145" y="120" width="15" height="150" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                                        <rect x="340" y="120" width="15" height="150" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" />
                                        <text x="145" y="110" fill="#64748b" fontSize="10" fontFamily="sans-serif">Heater Element</text>

                                        <path d="M 175 220 V 280 Q 175 300 195 300 H 305 Q 325 300 325 280 V 220" fill="none" stroke="#64748b" strokeWidth="3" />
                                        
                                        {/* Colorful Molten Silicon Fill */}
                                        <path d="M 177 220 V 280 Q 177 298 195 298 H 305 Q 323 298 323 280 V 220 Z" fill="#fed7aa" />
                                        <ellipse cx="250" cy="220" rx="72" ry="15" fill="#f97316" />
                                        <ellipse cx="250" cy="220" rx="50" ry="10" fill="#fdba74" />
                                        <ellipse cx="250" cy="220" rx="30" ry="5" fill="#fff7ed" />
                                        
                                        <path d="M 220 220 L 222 215 V 100 L 220 95 H 280 L 278 100 V 215 L 280 220 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                                        <line x1="250" y1="95" x2="250" y2="45" stroke="#64748b" strokeWidth="2" />
                                        <rect x="240" y="30" width="20" height="15" fill="#475569" />
                                        
                                        <line x1="280" y1="150" x2="400" y2="150" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,2" />
                                        <circle cx="280" cy="150" r="4" fill="#64748b" />
                                        <text x="405" y="153" fill="#334155" fontSize="12" fontFamily="sans-serif" fontWeight="600">Silicon Ingot</text>
                                        
                                        <line x1="300" y1="220" x2="400" y2="185" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4,2" />
                                        <circle cx="300" cy="220" r="4" fill="#f97316" />
                                        <text x="405" y="188" fill="#f97316" fontSize="12" fontFamily="sans-serif" fontWeight="600">Melt Interface</text>
                                    </svg>
                                )}

                                {activeStep === 1 && (
                                    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ position: "relative", zIndex: 1 }}>
                                        <g transform="translate(100, 120)">
                                            <path d="M 0 0 H 300 Q 320 50 300 100 H 0 Q -20 50 0 0 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
                                            <ellipse cx="300" cy="50" rx="10" ry="50" fill="#cbd5e1" stroke="#94a3b8" />
                                            <ellipse cx="0" cy="50" rx="10" ry="50" fill="#e2e8f0" stroke="#cbd5e1" />
                                            
                                            <path d="M 60 0 Q 75 50 60 100" fill="none" stroke="#94a3b8" strokeWidth="1" />
                                            <path d="M 120 0 Q 135 50 120 100" fill="none" stroke="#94a3b8" strokeWidth="1" />
                                            <path d="M 180 0 Q 195 50 180 100" fill="none" stroke="#94a3b8" strokeWidth="1" />
                                            <path d="M 240 0 Q 255 50 240 100" fill="none" stroke="#94a3b8" strokeWidth="1" />
                                            
                                            <text x="150" y="-15" fill="#334155" fontSize="13" fontWeight="600" textAnchor="middle">Ingot Section</text>
                                        </g>
                                        
                                        <g stroke="#3b82f6" strokeWidth="2">
                                            <line x1="160" y1="80" x2="160" y2="260" />
                                            <line x1="180" y1="80" x2="180" y2="260" />
                                            <line x1="200" y1="80" x2="200" y2="260" />
                                            <line x1="220" y1="80" x2="220" y2="260" />
                                            <line x1="240" y1="80" x2="240" y2="260" />
                                        </g>

                                        <circle cx="120" cy="70" r="20" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
                                        <circle cx="120" cy="70" r="6" fill="#3b82f6" />
                                        <circle cx="380" cy="70" r="20" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3" />
                                        <circle cx="380" cy="70" r="6" fill="#3b82f6" />
                                        
                                        <line x1="220" y1="80" x2="130" y2="40" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,2" />
                                        <circle cx="220" cy="80" r="4" fill="#3b82f6" />
                                        <text x="120" y="35" fill="#3b82f6" fontSize="12" fontFamily="sans-serif" fontWeight="600" textAnchor="end">Diamond Wire Array</text>
                                    </svg>
                                )}

                                {activeStep === 2 && (
                                    <svg viewBox="0 0 500 400" width="100%" height="100%" style={{ position: "relative", zIndex: 1 }}>
                                        <path d="M 50 180 L 60 170 L 70 180 L 80 170 L 90 180 L 100 170 L 110 180 L 120 170 L 130 180 L 140 170 L 150 180 L 160 170 L 170 180 L 180 170 L 190 180 L 200 170 L 210 180 L 220 170 L 230 180 L 240 170 L 250 180 L 260 170 L 270 180 L 280 170 L 290 180 L 300 170 L 310 180 L 320 170 L 330 180 L 340 170 L 350 180 L 360 170 L 370 180 L 380 170 L 390 180 L 400 170 L 410 180 L 420 170 L 430 180 L 440 170 L 450 180" fill="none" stroke="#10b981" strokeWidth="3" />
                                        
                                        <rect x="50" y="188" width="400" height="90" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5" />
                                        <rect x="50" y="188" width="400" height="15" fill="#bfdbfe" opacity="0.6" />
                                        
                                        <rect x="50" y="278" width="400" height="8" fill="#10b981" opacity="0.8" />
                                        
                                        <rect x="100" y="150" width="12" height="25" fill="#f8fafc" stroke="#94a3b8" />
                                        <rect x="220" y="150" width="12" height="25" fill="#f8fafc" stroke="#94a3b8" />
                                        <rect x="340" y="150" width="12" height="25" fill="#f8fafc" stroke="#94a3b8" />
                                        
                                        <line x1="225" y1="150" x2="225" y2="80" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4,2" />
                                        <circle cx="225" cy="150" r="4" fill="#64748b" />
                                        <text x="225" y="70" fill="#334155" fontSize="12" fontFamily="sans-serif" fontWeight="600" textAnchor="middle">Silver Contacts</text>

                                        <line x1="300" y1="195" x2="400" y2="150" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,2" />
                                        <circle cx="300" cy="195" r="4" fill="#3b82f6" />
                                        <text x="405" y="153" fill="#3b82f6" fontSize="12" fontFamily="sans-serif" fontWeight="600">N-Type Emitter</text>

                                        <line x1="250" y1="240" x2="400" y2="240" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4,2" />
                                        <circle cx="250" cy="240" r="4" fill="#10b981" />
                                        <text x="405" y="243" fill="#10b981" fontSize="12" fontFamily="sans-serif" fontWeight="600">P-Type Silicon Base</text>
                                    </svg>
                                )}
                            </div>

                            {/* Data Grid Footer */}
                            <div
                                style={{
                                    borderTop: "1px solid #e2e8f0",
                                    padding: "24px 30px",
                                    background: "#f8fafc"
                                }}
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                                    {manufacturingSteps[activeStep].specs.map((spec, idx) => (
                                        <div key={idx}>
                                            <div style={{ color: "#64748b", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>{spec.label}</div>
                                            <div style={{ color: "#0f172a", fontSize: "15px", fontWeight: "700", marginTop: "4px" }}>{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingEcosystem;
