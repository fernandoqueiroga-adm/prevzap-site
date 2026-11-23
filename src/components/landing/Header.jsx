import { Link } from "react-router-dom";
import { LogoIcon, Wordmark } from "./Logo";
import { CtaButton } from "./CtaButton";

export function Header() {
    return (
        <header
            data-testid="header-navbar"
            className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md"
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    data-testid="header-brand-logo"
                    className="flex items-center gap-2.5 leading-none"
                >
                    <LogoIcon className="h-10 w-10 shrink-0 sm:h-12 sm:w-12" />
                    <span className="leading-tight">
                        <Wordmark className="text-xl sm:text-2xl" />
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                            Zuim Advocacia Previdenciária
                        </span>
                    </span>
                </Link>
                <CtaButton
                    size="sm"
                    testId="header-whatsapp-cta-button"
                    source="header"
                    className="shrink-0"
                >
                    Falar no WhatsApp
                </CtaButton>
            </div>
        </header>
    );
}
