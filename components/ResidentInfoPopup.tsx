"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ResidentInfoPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("popup-dismissed", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={dismiss} />
      <div className="relative bg-background rounded-2xl shadow-xl border border-border max-w-md w-full p-8 text-center">
        <button onClick={dismiss} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-xl leading-none">✕</button>
        <div className="text-4xl mb-3">📋</div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">Resident Information</h2>
        <p className="text-muted-foreground text-sm mb-6">
          All residents are requested to fill in their information form. It helps us maintain proper records and ensures your safety.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/information"
            onClick={dismiss}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Fill Information Form →
          </Link>
          <button onClick={dismiss} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            I'll do it later
          </button>
        </div>
      </div>
    </div>
  );
}
