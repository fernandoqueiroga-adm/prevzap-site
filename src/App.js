import { Component, useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";
import { initGtag } from "@/lib/tracking";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Areas } from "@/components/landing/Areas";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Credibility } from "@/components/landing/Credibility";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { Obrigado } from "@/components/landing/Obrigado";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-white px-6 text-center">
                    <p className="text-lg text-charcoal">
                        Não foi possível carregar a página. Por favor,
                        recarregue.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-charcoal antialiased">
            <Header />
            <main>
                <Hero />
                <Marquee />
                <Areas />
                <HowItWorks />
                <Credibility />
                <Faq />
            </main>
            <Footer />
        </div>
    );
}

function App() {
    useEffect(() => {
        initGtag();
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduced) return undefined;
        const lenis = new Lenis({ lerp: 0.11 });
        let rafId;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/obrigado" element={<Obrigado />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <FloatingWhatsApp />
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
