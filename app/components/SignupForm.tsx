"use client";

import { useState } from "react";

interface SignupFormProps {
    segment: "vending" | "moto";
    title: string;
    description: string;
}

export default function SignupForm({ segment, title, description }: SignupFormProps) {
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
                setMessage("Check your inbox! You're in.");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage("Failed to submit. Please try again.");
        }
    };

    return (
        <div className="glass-panel p-8 rounded-2xl w-full max-w-md mx-auto">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-secondary mb-6">{description}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor={`email-${segment}`} className="sr-only">Email</label>
                    <input
                        id={`email-${segment}`}
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "loading" || status === "success"}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full py-3 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {status === "loading" ? "Joining..." : status === "success" ? "Subscribed!" : "Sign Up"}
                </button>

                {message && (
                    <p className={`text-sm text-center ${status === "success" ? "text-green-500" : "text-red-500"}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
