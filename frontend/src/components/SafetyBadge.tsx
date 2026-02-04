import { Dot } from "lucide-react";
import { Domain, RiskLevel } from "../types";

interface SafetyBadgeProps {
    label: string;
    tone: "neutral" | "warning" | "danger" | "success";
}

function toneClasses(tone: SafetyBadgeProps["tone"]) {
    switch (tone) {
        case "danger":
            return "border-rose-500/50 bg-gradient-to-r from-rose-500/20 to-red-500/10 text-rose-300 shadow-lg shadow-rose-500/10 hover:shadow-rose-500/20 hover:border-rose-500/70";
        case "warning":
            return "border-amber-500/50 bg-gradient-to-r from-amber-500/20 to-orange-500/10 text-amber-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-500/70";
        case "success":
            return "border-emerald-500/50 bg-gradient-to-r from-emerald-500/20 to-green-500/10 text-emerald-300 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:border-emerald-500/70";
        default:
            return "border-slate-600/50 bg-gradient-to-r from-slate-600/20 to-slate-700/10 text-slate-400 shadow-lg shadow-slate-600/10 hover:shadow-slate-600/20 hover:border-slate-600/70";
    }
}

function toneColor(tone: SafetyBadgeProps["tone"]) {
    switch (tone) {
        case "danger":
            return "text-rose-400";
        case "warning":
            return "text-amber-400";
        case "success":
            return "text-emerald-400";
        default:
            return "text-slate-500";
    }
}

export function SafetyBadge({ label, tone }: SafetyBadgeProps) {
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 backdrop-blur hover:scale-105 cursor-default ${toneClasses(tone)}`}>
            <Dot className={`h-2 w-2 ${toneColor(tone)} animate-pulse`} fill="currentColor" />
            export function riskToTone(risk: RiskLevel) {
    if (risk === "high") return "danger";
            if (risk === "medium") return "warning";
            return "success";
}
