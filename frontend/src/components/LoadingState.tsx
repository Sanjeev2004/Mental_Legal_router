export function LoadingState() {
    return (
        <div className="flex items-center gap-4 rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 backdrop-blur p-4 animate-in fade-in duration-300">
            <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                    <div
                        key={i}
                        className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-indigo-400 to-violet-400 shadow-lg shadow-indigo-500/50"
                        style={{
                            animation: `pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                            animationDelay: `${i * 0.3}s`
                        }}
                    />
                ))}
            </div>
            <span className="text-xs font-medium text-indigo-300">Analyzing query...</span>
        </div>
    );
}
