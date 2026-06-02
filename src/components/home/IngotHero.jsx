"use client";

import Link from "next/link";
import React from "react";

const IngotHero = () => {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                padding: "100px 0",
                color: "#ffffff",
                overflow: "hidden",
            }}
        >
            {/* Professional Corporate Background Image */}
            <div 
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url('/images/ziqora/ingot_hero_bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                    transform: "scale(1.05)", // Static scale for a polished look
                }}
            ></div>
            
            {/* Clean, professional gradient overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.8) 100%)",
                    zIndex: 1,
                }}
            ></div>

            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row align-items-center">
                    <div className="col-lg-9 text-start">
                        <div className="wow fadeInUp" data-wow-delay=".1s" style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "25px" }}>
                            <span style={{ width: "40px", height: "2px", background: "#10b981" }}></span>
                            <span
                                style={{
                                    color: "#10b981",
                                    fontWeight: "600",
                                    textTransform: "uppercase",
                                    letterSpacing: "1.5px",
                                    fontSize: "14px",
                                }}
                            >
                                Technology
                            </span>
                        </div>
                        <h1
                            className="wow fadeInUp"
                            data-wow-delay=".3s"
                            style={{
                                fontWeight: "800",
                                color: "#ffffff",
                                fontSize: "calc(2.5rem + 2vw)",
                                lineHeight: 1.15,
                                marginBottom: "30px",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Ingot Manufacturing <br />
                            <span style={{ color: "#10b981", fontWeight: "300" }}>Innovations</span>
                        </h1>
                        <p
                            className="wow fadeInUp"
                            data-wow-delay=".5s"
                            style={{
                                fontSize: "19px",
                                color: "rgba(241, 245, 249, 0.9)",
                                lineHeight: "1.7",
                                maxWidth: "750px",
                                margin: "0 0 40px 0",
                                fontWeight: "400"
                            }}
                        >
                            Exploring advanced monocrystalline silicon growth, precision thermal control, and next-generation crystal engineering technologies.
                        </p>
                        <div className="wow fadeInUp" data-wow-delay=".7s" style={{ color: "rgba(203, 213, 225, 0.8)", fontSize: "15px", display: "flex", gap: "10px", alignItems: "center" }}>
                            <Link href="/" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "500" }}>Home</Link>
                            <span>/</span>
                            <span style={{ color: "#10b981", fontWeight: "500" }}>Technology</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IngotHero;
