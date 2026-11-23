import { useNavigate } from "react-router-dom";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./constants";
import { trackWhatsAppClick } from "@/lib/tracking";

const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3.5 text-sm sm:text-base",
    lg: "px-8 py-4 text-base sm:text-lg",
};

const variants = {
    solid:
        "bg-wa text-white hover:bg-wa-hover shadow-md hover:shadow-lg hover:shadow-emerald-900/20",
    outline:
        "border-2 border-forest text-forest bg-white hover:bg-forest hover:text-white",
};

export function CtaButton({
    children,
    testId,
    size = "lg",
    variant = "solid",
    className = "",
    source = "cta",
    redirect = true,
}) {
    const navigate = useNavigate();

    const handleClick = () => {
        trackWhatsAppClick(source);
        if (redirect) {
            window.setTimeout(() => navigate("/obrigado"), 350);
        }
    };

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            data-testid={testId}
            className={`inline-flex items-center justify-center gap-2.5 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/40 ${sizes[size]} ${variants[variant]} ${className}`}
        >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            <span>{children}</span>
        </a>
    );
}
