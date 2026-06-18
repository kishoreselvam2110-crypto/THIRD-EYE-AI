"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const features = [
  {
    icon: "👁️",
    title: "AI Vision",
    description: "Real-time object detection using your camera powered by TensorFlow COCO-SSD model.",
    href: "/vision",
    gradient: "from-violet-500 to-purple-700",
    badge: "Live",
  },
  {
    icon: "🗺️",
    title: "Hazard Map",
    description: "Interactive map with geofencing alerts for nearby hazards and danger zones.",
    href: "/geofence",
    gradient: "from-cyan-500 to-blue-700",
    badge: "Alert",
  },
  {
    icon: "🔊",
    title: "Sound Detection",
    description: "Ambient sound monitoring that listens and alerts you of unusual noise levels.",
    href: "#",
    gradient: "from-amber-500 to-orange-700",
    badge: "Beta",
  },
  {
    icon: "🛡️",
    title: "Safety Shield",
    description: "Comprehensive safety scoring system combining all sensor data in real-time.",
    href: "#",
    gradient: "from-emerald-500 to-green-700",
    badge: "Soon",
  },
];

const stats = [
  { label: "Objects Detected", value: "12.4K", icon: "🎯" },
  { label: "Hazards Mapped", value: "38", icon: "⚠️" },
  { label: "Alerts Sent", value: "156", icon: "🔔" },
  { label: "Uptime", value: "99.9%", icon: "⚡" },
];

export default function Home() {
  const [time, setTime] = useState("");
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #0a0f1a 100%)", fontFamily: "'Inter', 'Segoe UI', sans-serif", color: "#fff" }}>
      {/* Ambient blobs */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      {/* Navbar */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.2rem 2.5rem", borderBottom: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", background: "rgba(10,10,20,0.6)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "1.6rem" }}>👁️</span>
          <span style={{ fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.05em", background: "linear-gradient(90deg,#a78bfa,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>THIRD EYE AI</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Link href="/vision" style={{ padding: "0.45rem 1.1rem", borderRadius: "999px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.4)", color: "#c4b5fd", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500, transition: "all 0.2s" }}>Vision</Link>
          <Link href="/geofence" style={{ padding: "0.45rem 1.1rem", borderRadius: "999px", background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.35)", color: "#67e8f9", textDecoration: "none", fontSize: "0.85rem", fontWeight: 500 }}>Hazard Map</Link>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: pulse ? "#4ade80" : "#22c55e", display: "inline-block", boxShadow: pulse ? "0 0 8px #4ade80" : "none", transition: "all 0.5s" }} />
          <span style={{ fontSize: "0.8rem", color: "#a3a3a3", fontFamily: "monospace" }}>{time}</span>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 5, textAlign: "center", padding: "5rem 2rem 3rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "999px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#c4b5fd" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa", display: "inline-block" }} />
          AI-Powered Assistive Safety System
        </div>
        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1.2rem", letterSpacing: "-0.03em" }}>
          Your <span style={{ background: "linear-gradient(90deg, #a78bfa, #38bdf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Third Eye</span><br />for a Safer World
        </h1>
        <p style={{ maxWidth: "560px", margin: "0 auto 2.5rem", fontSize: "1.1rem", lineHeight: 1.7, color: "#a3a3a3" }}>
          Real-time AI vision, hazard detection, and proximity alerts — helping visually impaired individuals and safety-conscious users navigate the world confidently.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/vision" style={{ padding: "0.85rem 2rem", borderRadius: "999px", background: "linear-gradient(135deg, #7c3aed, #2563eb)", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "1rem", boxShadow: "0 0 30px rgba(124,58,237,0.4)", transition: "transform 0.2s" }}>
            🚀 Launch Vision
          </Link>
          <Link href="/geofence" style={{ padding: "0.85rem 2rem", borderRadius: "999px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "1rem", transition: "all 0.2s" }}>
            🗺️ View Hazard Map
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section style={{ position: "relative", zIndex: 5, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", maxWidth: "900px", margin: "0 auto 4rem", padding: "0 2rem" }}>
        {stats.map((s) => (
          <div key={s.label} style={{ padding: "1.5rem 1rem", borderRadius: "16px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center", backdropFilter: "blur(10px)" }}>
            <div style={{ fontSize: "1.8rem", marginBottom: "0.4rem" }}>{s.icon}</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 700, background: "linear-gradient(90deg,#a78bfa,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.value}</div>
            <div style={{ fontSize: "0.78rem", color: "#737373", marginTop: "0.2rem" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature Cards */}
      <section style={{ position: "relative", zIndex: 5, maxWidth: "1000px", margin: "0 auto 5rem", padding: "0 2rem" }}>
        <h2 style={{ textAlign: "center", fontSize: "1.6rem", fontWeight: 700, marginBottom: "2.5rem", color: "#e5e5e5" }}>Core Capabilities</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {features.map((f) => (
            <Link key={f.title} href={f.href} style={{ textDecoration: "none", display: "block", borderRadius: "20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", padding: "1.75rem 1.5rem", transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s", cursor: f.href === "#" ? "default" : "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"; }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `linear-gradient(135deg, var(--tw-gradient-stops))`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", background: `linear-gradient(135deg, ${f.gradient.replace("from-", "").replace("to-", "").split(" ").join(", ")})` }}>{f.icon}</div>
                <span style={{ padding: "0.2rem 0.6rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 600, background: "rgba(255,255,255,0.08)", color: "#a3a3a3", border: "1px solid rgba(255,255,255,0.1)" }}>{f.badge}</span>
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f5f5f5", marginBottom: "0.5rem" }}>{f.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#737373", lineHeight: 1.6 }}>{f.description}</p>
              {f.href !== "#" && (
                <div style={{ marginTop: "1.2rem", fontSize: "0.82rem", color: "#a78bfa", display: "flex", alignItems: "center", gap: "0.3rem" }}>Open →</div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 5, textAlign: "center", padding: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)", color: "#525252", fontSize: "0.8rem" }}>
        Built with ❤️ by <span style={{ color: "#a78bfa" }}>Kishore</span> · THIRD EYE AI © 2026
      </footer>
    </div>
  );
}
