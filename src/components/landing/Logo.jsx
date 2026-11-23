export function LogoIcon({ className = "h-10 w-10" }) {
    return (
        <img
            src="/logo-icon.png"
            alt=""
            aria-hidden="true"
            className={`${className} object-contain`}
        />
    );
}

export function LogoFull({ className = "h-24 w-24" }) {
    return (
        <img
            src="/logo.png"
            alt="PrevZap — Advocacia Previdenciária"
            className={`${className} object-contain`}
        />
    );
}

export function Wordmark({ dark = true, className = "text-lg sm:text-2xl" }) {
    return (
        <span className={`font-brand font-bold tracking-tight ${className}`}>
            <span className={dark ? "text-[#004080]" : "text-white"}>
                Prev
            </span>
            <span className="text-[#25D366]">Zap</span>
        </span>
    );
}
