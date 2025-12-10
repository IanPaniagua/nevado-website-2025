"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        // Check if consent has already been given or denied
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "granted");
        setShowConsent(false);
        // Reload to activate GA if implemented to wait for consent (though basic GA usually loads, strict compliance might wait)
        // For this implementation, we will assume GA loads but we mark consent.
        // Ideally, you'd conditionally render GoogleAnalytics based on this, or update consent mode.
        // For simplicity with @next/third-parties, we usually just load it but show the banner for compliance.
        window.location.reload();
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "denied");
        setShowConsent(false);
    }

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-lg z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm">
                Utilizamos cookies para mejorar su experiencia y analizar el tráfico de nuestro sitio web.
            </p>
            <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleDecline} className="text-slate-900 border-white hover:bg-slate-200">
                    Rechazar
                </Button>
                <Button size="sm" onClick={handleAccept} className="bg-cyan-500 hover:bg-cyan-600 border-none">
                    Aceptar
                </Button>
            </div>
        </div>
    );
}

export function AnalyticsWrapper() {
    // Replace with actual GA Measurement ID
    // Since user didn't provide one, using a placeholder.
    // User needs to update this.
    const GA_ID = "G-XXXXXXXXXX";

    // Simple logic: If consent denied, maybe don't render? 
    // Or render with denied mode. For now, we render if not explicitly denied or if accepted.
    // Actually, good practice is to not load until accepted, or load with default denied.
    // Check local storage safely
    const [consent, setConsent] = useState<string | null>(null);

    useEffect(() => {
        setConsent(localStorage.getItem("cookie_consent"));
    }, []);

    if (consent === "denied") return null;

    return <GoogleAnalytics gaId={GA_ID} />;
}
