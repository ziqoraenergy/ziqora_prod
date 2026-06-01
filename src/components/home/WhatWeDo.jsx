"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhatWeDo = () => {
    return (
        <section style={{ backgroundColor: "#ffffff", padding: "120px 0", minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                <div className="row align-items-center">
                    
                    {/* Left Content */}
                    <div className="col-lg-5 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay=".2s">
                        <span style={{ color: "#10b981", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", display: "inline-block", marginBottom: "20px" }}>
                            Our Mission & Vision
                        </span>
                        <h2 style={{ fontSize: "48px", fontWeight: "800", color: "#0a1931", marginBottom: "30px", lineHeight: "1.15", letterSpacing: "-1px" }}>
                            Manufacturing India’s Premium Silicon Wafers & Solar Cells
                        </h2>
                        
                        <p style={{ color: "#475569", fontSize: "17px", lineHeight: "1.9", marginBottom: "20px" }}>
                            At Ziqora, our goal is to eliminate dependency on foreign imports by establishing a state-of-the-art solar manufacturing hub right here in India.
                        </p>
                        
                        <p style={{ color: "#475569", fontSize: "17px", lineHeight: "1.9", marginBottom: "45px" }}>
                            We are proud to manufacture premium <strong style={{ color: "#10b981" }}>Made in India Silicon Wafers and Solar Cells</strong>. By refining high-purity imported polysilicon into ultra-thin, high-efficiency N-Type components, we are driving the global transition to sustainable energy while establishing India as a manufacturing powerhouse.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(16,185,129,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981", flexShrink: 0, marginTop: "2px" }}>
                                    <i className="fa-solid fa-industry" style={{ fontSize: "14px" }}></i>
                                </div>
                                <div>
                                    <h5 style={{ color: "#0a1931", fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>Local Production</h5>
                                    <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>Building India's domestic supply chain</p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "flex-start", gap: "15px" }}>
                                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0, marginTop: "2px" }}>
                                    <i className="fa-solid fa-leaf" style={{ fontSize: "14px" }}></i>
                                </div>
                                <div>
                                    <h5 style={{ color: "#0a1931", fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>Clean Energy</h5>
                                    <p style={{ color: "#64748b", fontSize: "15px", margin: 0 }}>Accelerating the global transition to net-zero</p>
                                </div>
                            </div>
                        </div>

                        <Link href="/about" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            backgroundColor: "#0a1931",
                            color: "#ffffff",
                            padding: "16px 32px",
                            borderRadius: "8px",
                            fontWeight: "600",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            boxShadow: "0 10px 20px rgba(10, 25, 49, 0.15)",
                            marginTop: "45px"
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#10b981"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#0a1931"; e.currentTarget.style.transform = "translateY(0)"; }}
                        >
                            Learn More About Us <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                    
                    {/* Right Image (Floating Transparent Effect) */}
                    <div className="col-lg-6 offset-lg-1 wow fadeInRight" data-wow-delay=".4s">
                        <div style={{ position: "relative", width: "100%", height: "600px", pointerEvents: "none" }}>
                            <Image 
                                src="/images/ziqora/wafers_cells_silicon_white.png" 
                                alt="Ziqora Raw Silicon, Wafers, and Solar Cells" 
                                fill 
                                style={{ 
                                    objectFit: "contain", 
                                    objectPosition: "center",
                                    mixBlendMode: "multiply",
                                    filter: "contrast(1.2) brightness(1.05)",
                                    transform: "scale(1.15)"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

