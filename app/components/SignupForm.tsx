"use client";

import { useState } from "react";

interface SignupFormProps {
    segment: "vending" | "moto";
    title: string;
    description: string;
    variant?: "default" | "newsletter";
    ctaText?: string;
    showSubtext?: boolean;
}

export default function SignupForm({
    segment,
    title,
    description,
    variant = "default",
    ctaText,
    showSubtext = false
}: SignupFormProps) {
    const [email, setEmail] = useState("");
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
                body: JSON.stringify({ email, segment }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage("You're on the list.");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Error.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage("Failed.");
        }
    };

    return (
        <div className={`p-8 w-full max-w-md mx-auto ${variant === "newsletter" ? "bg-background" : "box-panel"}`}>
            <h3 className="text-2xl font-black mb-2 uppercase text-foreground">{title}</h3>
            <p className={`mb-6 font-medium ${variant === "newsletter" ? "text-foreground" : "text-secondary"}`}>{description}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor={`email-${segment}`} className="sr-only">Email</label>
                    <input
                        id={`email-${segment}`}
                        type="email"
                        required
                        placeholder="ENTER YOUR EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading" || status === "success"}
                        className="w-full px-4 py-3 bg-muted border-2 border-transparent focus:border-foreground outline-none transition-all placeholder:text-secondary/50 font-medium"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full py-4 px-6 bg-primary text-white font-black uppercase tracking-wider hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {status === "loading" ? "PROCESSING..." : status === "success" ? "CONFIRMED" : (ctaText || "NOTIFY ME")}
                </button>

                {message && (
                    <p className={`text-sm font-bold text-center uppercase ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                        {message}
                    </p>
                )}

                {showSubtext && (
                    <p className="text-xs text-secondary text-center mt-2">
                        No spam. One email per day. Unsubscribe anytime.
                    </p>
                )}
            </form>
        </div>
    );
}
