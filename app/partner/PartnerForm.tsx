"use client";

import { useState } from "react";

interface PartnerFormProps {
    headline: string;
    microcopy?: string;
    buttonText: string;
    compact?: boolean;
}

export default function PartnerForm({ headline, microcopy, buttonText, compact = false }: PartnerFormProps) {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, phone: phone || undefined, segment: "partner" }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage("Details received. We'll be in touch.");
                setEmail("");
                setPhone("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong.");
            }
        } catch {
            setStatus("error");
            setMessage("Failed. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <div className={compact ? "py-6" : "py-10"}>
                <p className="text-green-600 font-black uppercase tracking-wider text-lg">{message}</p>
            </div>
        );
    }

    return (
        <div>
            {headline && (
                <h3 className={`font-black uppercase leading-tight mb-4 ${compact ? "text-xl" : "text-2xl md:text-3xl"}`}>
                    {headline}
                </h3>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    required
                    placeholder="EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-muted border-2 border-transparent focus:border-foreground outline-none transition-all placeholder:text-secondary/50 font-medium uppercase"
                />
                <input
                    type="tel"
                    placeholder="PHONE NUMBER (OPTIONAL)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={status === "loading"}
                    className="w-full px-4 py-3 bg-muted border-2 border-transparent focus:border-foreground outline-none transition-all placeholder:text-secondary/50 font-medium uppercase"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 px-6 bg-brand-blue text-white font-black uppercase tracking-wider hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {status === "loading" ? "SENDING..." : buttonText}
                </button>
                {microcopy && (
                    <p className="text-xs text-secondary/60 text-center">{microcopy}</p>
                )}
                {message && status === "error" && (
                    <p className="text-sm font-bold text-center uppercase text-red-600">{message}</p>
                )}
            </form>
        </div>
    );
}
