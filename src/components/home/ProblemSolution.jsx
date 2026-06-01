"use client";
import React from "react";

const ProblemSolution = () => {
    return (
        <section style={{ backgroundColor: "#0f172a", padding: "120px 0", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", width: "100%" }}>
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                
                <div className="text-center mb-5 pb-3 wow fadeInUp" data-wow-delay=".1s">
                    <h2 style={{ color: "#ffffff", fontWeight: "800", fontSize: "40px", letterSpacing: "-0.5px" }}>
                        The Industry Challenge & Our Solution
                    </h2>
                </div>

                <div className="row g-0 align-items-stretch" style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}>
                    
                    {/* The Problem */}
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)", padding: "60px", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
                            <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(239, 68, 68, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                                <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: "24px" }}></i>
                            </div>
                            <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff", margin: 0 }}>The Challenge</h3>
                        </div>
                        <p style={{ color: "#94a3b8", fontSize: "18px", lineHeight: "1.8", margin: 0 }}>
                            The global renewable energy supply chain is highly fragmented and heavily reliant on a few international sources. For India to achieve its ambitious clean energy goals, the industry cannot afford the instability of relying on foreign imports for critical foundational components like silicon wafers and solar cells.
                        </p>
                    </div>

                    {/* The Solution */}
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay=".4s" style={{ background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)", padding: "60px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "30px" }}>
                            <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "rgba(16, 185, 129, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                                <i className="fa-solid fa-lightbulb" style={{ fontSize: "24px" }}></i>
                            </div>
                            <h3 style={{ fontSize: "32px", fontWeight: "800", color: "#ffffff", margin: 0 }}>The Ziqora Solution</h3>
                        </div>
                        <p style={{ color: "#a7f3d0", fontSize: "18px", lineHeight: "1.8", margin: 0 }}>
                            We are building the foundation of India's energy independence. By domesticating the most complex and critical steps of solar manufacturing, we provide Indian developers and module makers with a rock-solid, local supply chain that guarantees both premium tier-1 quality and absolute reliability.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
