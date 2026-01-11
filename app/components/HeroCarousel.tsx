"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        desktop: "/assets/hero/hero-1-desktop.webp",
        mobile: "/assets/hero/hero-1-mobile.webp",
        headline: "Deep Clean",
        subtext: "Targets sweat, odour, and bacteria in existing linings.",
    },
    {
        id: 2,
        desktop: "/assets/hero/hero-2-desktop.webp",
        mobile: "/assets/hero/hero-2-mobile.webp",
        headline: "Fast Turnaround",
        subtext: "Minutes, not hours.",
    },
    {
        id: 3,
        desktop: "/assets/hero/hero-3-desktop.webp",
        mobile: "/assets/hero/hero-3-mobile.webp",
        headline: "Public Access",
        subtext: "Designed for high-traffic venues. No specialist staff needed.",
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-rotation
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-background">
            {/* Thin horizontal color bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand-blue z-30" />

            {/* Logo - always visible */}
            <div className="absolute top-8 left-6 md:left-8 z-30">
                <div className="relative w-28 h-10 md:w-40 md:h-16">
                    <Image
                        src="/assets/logo.png"
                        alt="FreshLids"
                        fill
                        className="object-contain dark:invert"
                        priority
                    />
                </div>
            </div>

            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    aria-hidden={index !== currentSlide}
                >
                    {/* Hero Image - Responsive Art Direction */}
                    <div className="relative w-full h-full">
                        <picture>
                            {/* Mobile Image (< 768px) */}
                            <source
                                media="(max-width: 768px)"
                                srcSet={slide.mobile}
                                type="image/webp"
                            />
                            {/* Desktop Image (>= 768px) */}
                            <source
                                media="(min-width: 769px)"
                                srcSet={slide.desktop}
                                type="image/webp"
                            />
                            {/* Fallback Image */}
                            <img
                                src={slide.desktop}
                                alt={slide.headline}
                                className="w-full h-full object-cover"
                                loading={index === 0 ? "eager" : "lazy"}
                                decoding={index === 0 ? "sync" : "async"}
                            />
                        </picture>

                        {/* Subtle dark gradient for text contrast */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 md:to-black/40" />
                    </div>

                    {/* Slide Content */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="text-center px-4 max-w-4xl pt-20 md:pt-0">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-2xl">
                                {slide.headline}
                            </h1>
                            <p className="text-lg md:text-2xl lg:text-3xl text-white font-medium max-w-2xl mx-auto drop-shadow-lg">
                                {slide.subtext}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
