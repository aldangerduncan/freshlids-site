"use client";

import { useState } from "react";
import PartnerForm from "./PartnerForm";

const MACHINE_COST = 9500;
const LEASE_COST = 850;
const HOST_COMMISSION = 0.20;

function fmt(n: number) {
    return n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });
}

type Tab = "purchase" | "lease" | "host";

export default function ROICalculator() {
    const [helmetsPerDay, setHelmetsPerDay] = useState(5);
    const [pricePerClean, setPricePerClean] = useState(15);
    const [operatingDays, setOperatingDays] = useState(26);
    const [consumableCost, setConsumableCost] = useState(2);
    const [activeTab, setActiveTab] = useState<Tab>("lease");

    const monthlyRevenue = helmetsPerDay * pricePerClean * operatingDays;
    const monthlyVariableCost = helmetsPerDay * consumableCost * operatingDays;
    const monthlyGrossProfit = monthlyRevenue - monthlyVariableCost;
    const annualGrossProfit = monthlyGrossProfit * 12;

    // Purchase
    const paybackMonths = monthlyGrossProfit > 0 ? Math.ceil(MACHINE_COST / monthlyGrossProfit) : null;
    const year1NetProfit = monthlyGrossProfit * 12 - MACHINE_COST;
    const year2Profit = monthlyGrossProfit * 12;

    // Lease
    const leaseMonthlyNet = monthlyGrossProfit - LEASE_COST;
    const leaseAnnualNet = leaseMonthlyNet * 12;
    const leaseCashflowPositive = leaseMonthlyNet > 0;

    // Host
    const hostMonthlyIncome = monthlyRevenue * HOST_COMMISSION;
    const hostAnnualIncome = hostMonthlyIncome * 12;

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                {/* ── Inputs ── */}
                <div className="space-y-6">

                    <div className="bg-background rounded-2xl p-6 shadow-sm">
                        <label className="block font-black uppercase text-sm tracking-widest mb-1">
                            Helmets Cleaned Per Day
                        </label>
                        <p className="text-secondary/60 text-xs mb-3">Average daily cleans at your location.</p>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min={1} max={50} value={helmetsPerDay}
                                onChange={e => setHelmetsPerDay(Number(e.target.value))}
                                className="flex-1 accent-brand-blue"
                            />
                            <input
                                type="number"
                                min={1} max={50} value={helmetsPerDay}
                                onChange={e => setHelmetsPerDay(Math.min(50, Math.max(1, Number(e.target.value))))}
                                className="w-16 px-2 py-1 border-2 border-gray-200 focus:border-brand-blue outline-none text-center font-black text-lg rounded"
                            />
                        </div>
                    </div>

                    <div className="bg-background rounded-2xl p-6 shadow-sm">
                        <label className="block font-black uppercase text-sm tracking-widest mb-1">
                            Price Per Clean
                        </label>
                        <p className="text-secondary/60 text-xs mb-3">Retail price charged per helmet clean.</p>
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-secondary">$</span>
                            <input
                                type="number"
                                min={5} max={40} value={pricePerClean}
                                onChange={e => setPricePerClean(Math.min(40, Math.max(5, Number(e.target.value))))}
                                className="flex-1 px-3 py-2 border-2 border-gray-200 focus:border-brand-blue outline-none font-black text-2xl rounded text-center"
                            />
                        </div>
                        <div className="flex justify-between text-xs text-secondary/50 mt-2">
                            <span>$5</span><span>$40</span>
                        </div>
                        <input
                            type="range"
                            min={5} max={40} value={pricePerClean}
                            onChange={e => setPricePerClean(Number(e.target.value))}
                            className="w-full mt-1 accent-brand-blue"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-background rounded-2xl p-6 shadow-sm">
                            <label className="block font-black uppercase text-sm tracking-widest mb-1">
                                Operating Days/Month
                            </label>
                            <p className="text-secondary/60 text-xs mb-3">Days per month the machine is available.</p>
                            <input
                                type="range"
                                min={1} max={31} value={operatingDays}
                                onChange={e => setOperatingDays(Number(e.target.value))}
                                className="w-full accent-brand-blue mb-2"
                            />
                            <div className="text-center font-black text-3xl">{operatingDays}</div>
                        </div>

                        <div className="bg-background rounded-2xl p-6 shadow-sm">
                            <label className="block font-black uppercase text-sm tracking-widest mb-1">
                                Consumable Cost/Clean
                            </label>
                            <p className="text-secondary/60 text-xs mb-3">Cleaning solution and consumables.</p>
                            <div className="flex items-center gap-1 mb-2">
                                <span className="font-bold text-secondary text-sm">$</span>
                                <input
                                    type="number"
                                    min={0} max={10} step={0.5} value={consumableCost}
                                    onChange={e => setConsumableCost(Math.min(10, Math.max(0, Number(e.target.value))))}
                                    className="flex-1 px-2 py-1 border-2 border-gray-200 focus:border-brand-blue outline-none font-black text-2xl rounded text-center"
                                />
                            </div>
                            <input
                                type="range"
                                min={0} max={10} step={0.5} value={consumableCost}
                                onChange={e => setConsumableCost(Number(e.target.value))}
                                className="w-full accent-brand-blue"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Output ── */}
                <div className="sticky top-8">

                    {/* Anchor number */}
                    <div className="bg-foreground text-background rounded-2xl p-8 mb-6">
                        <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">Estimated Monthly Gross Profit</p>
                        <div className="text-5xl md:text-6xl font-black text-brand-blue leading-none mb-2">
                            {fmt(monthlyGrossProfit)}
                        </div>
                        <p className="text-gray-400 text-sm">
                            Annual: <span className="text-white font-bold">{fmt(annualGrossProfit)}</span>
                            <span className="ml-3 text-gray-500">· Revenue: {fmt(monthlyRevenue)}/mo</span>
                        </p>
                    </div>

                    {/* Model tabs */}
                    <div className="bg-background rounded-2xl shadow-sm overflow-hidden">
                        <div className="grid grid-cols-3">
                            {(["purchase", "lease", "host"] as Tab[]).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-3 px-2 text-xs font-black uppercase tracking-widest transition-all relative ${
                                        activeTab === tab
                                            ? "bg-brand-blue text-white"
                                            : "bg-muted text-secondary hover:bg-gray-200"
                                    }`}
                                >
                                    {tab === "lease" ? "Lease ★" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        <div className="p-6">
                            {activeTab === "purchase" && (
                                <div className="space-y-4">
                                    <p className="text-secondary/60 text-sm">Full ownership. Maximum long-term return.</p>
                                    {paybackMonths === null ? (
                                        <p className="text-secondary font-bold">Increase daily usage to calculate payback.</p>
                                    ) : (
                                        <>
                                            <div>
                                                <p className="text-xs uppercase font-bold tracking-widest text-secondary/60 mb-1">Estimated Payback Period</p>
                                                <p className="text-4xl font-black">{paybackMonths} <span className="text-xl font-bold text-secondary">months</span></p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                                                <div>
                                                    <p className="text-xs uppercase font-bold tracking-widest text-secondary/60 mb-1">Year 1 Net Profit</p>
                                                    <p className={`text-2xl font-black ${year1NetProfit >= 0 ? "" : "text-red-500"}`}>{fmt(year1NetProfit)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase font-bold tracking-widest text-secondary/60 mb-1">Year 2+ Annual Profit</p>
                                                    <p className="text-2xl font-black">{fmt(year2Profit)}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {activeTab === "lease" && (
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <p className="text-secondary/60 text-sm">Fixed monthly lease. Cashflow positive from day one.</p>
                                        {leaseCashflowPositive && (
                                            <span className="flex-shrink-0 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-black uppercase rounded-full">
                                                ✓ Cashflow Positive
                                            </span>
                                        )}
                                    </div>
                                    {!leaseCashflowPositive && (
                                        <p className="text-secondary font-bold text-sm">Increase daily cleans to improve return.</p>
                                    )}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs uppercase font-bold tracking-widest text-secondary/60 mb-1">Monthly Net Profit</p>
                                            <p className={`text-3xl font-black ${leaseMonthlyNet >= 0 ? "text-brand-blue" : "text-red-500"}`}>{fmt(leaseMonthlyNet)}</p>
                                            <p className="text-xs text-secondary/50 mt-0.5">after lease cost</p>
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase font-bold tracking-widest text-secondary/60 mb-1">Annual Net Profit</p>
                                            <p className={`text-3xl font-black ${leaseAnnualNet >= 0 ? "" : "text-red-500"}`}>{fmt(leaseAnnualNet)}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "host" && (
                                <div className="space-y-4">
                                    <p className="text-secondary/60 text-sm">No capital, no maintenance. Revenue share model.</p>
                                    <div>
                                        <p className="text-xs uppercase font-bold tracking-widest text-secondary/60 mb-1">Estimated Annual Hosting Income</p>
                                        <p className="text-4xl font-black">{fmt(hostAnnualIncome)}</p>
                                        <p className="text-xs text-secondary/50 mt-0.5">{fmt(hostMonthlyIncome)}/month</p>
                                    </div>
                                    <ul className="space-y-1 pt-2 border-t border-gray-100">
                                        <li className="flex items-center gap-2 text-sm text-secondary">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
                                            No capital required
                                        </li>
                                        <li className="flex items-center gap-2 text-sm text-secondary">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
                                            No maintenance responsibility
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Conversion hook below calculator ── */}
            <div className="mt-12 pt-10 border-t border-gray-200">
                <div className="max-w-lg">
                    <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-3">
                        See What This Could Look Like In Your Location
                    </h3>
                    <p className="text-secondary mb-6 leading-relaxed">
                        Enter your details to receive a tailored projection based on your foot traffic and customer profile.
                    </p>
                    <PartnerForm
                        headline=""
                        buttonText="Get My Projection"
                        microcopy="No pressure. Just clear numbers and partnership details."
                        compact
                    />
                </div>
            </div>
        </div>
    );
}
