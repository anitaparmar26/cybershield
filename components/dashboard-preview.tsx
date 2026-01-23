"use client"

import { Activity, AlertTriangle, Globe } from "lucide-react"

export default function DashboardPreview() {
  return (
    <div className="relative">
      {/* Glowing border container */}
      <div className="relative p-6 rounded-2xl glassmorphism glow-border overflow-hidden">
        {/* Dashboard grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(136, 192, 208)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Security Dashboard</h3>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs text-slate-400">Live</span>
            </div>
          </div>

          {/* Threat Status Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition">
              <p className="text-xs text-slate-400 mb-1">Active Threats</p>
              <p className="text-2xl font-bold text-primary">0</p>
            </div>
            <div className="p-3 rounded-lg bg-background/50 border border-accent/20 hover:border-accent/40 transition">
              <p className="text-xs text-slate-400 mb-1">Threats Blocked</p>
              <p className="text-2xl font-bold text-accent">2,847</p>
            </div>
          </div>

          {/* Chart Area */}
          <div className="h-32 rounded-lg bg-background/30 border border-slate-700/50 p-3 flex items-end gap-2 justify-center">
            {[40, 60, 45, 70, 55, 75, 50].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-sm opacity-70 hover:opacity-100 transition"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>

          {/* Activity List */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-slate-300">Recent Activity</p>
            <div className="space-y-2">
              {[
                { icon: AlertTriangle, label: "Suspicious login attempt blocked", color: "text-primary" },
                { icon: Globe, label: "DDoS attack prevented", color: "text-accent" },
                { icon: Activity, label: "System health: Optimal", color: "text-slate-400" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded bg-background/30 border border-slate-700/30"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
