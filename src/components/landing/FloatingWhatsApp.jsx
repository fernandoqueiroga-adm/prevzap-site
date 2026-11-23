import { WhatsAppIcon } from "./WhatsAppIcon";
import { WHATSAPP_URL } from "./constants";
import { trackWhatsAppClick } from "@/lib/tracking";

export function FloatingWhatsApp() {
    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("floating")}
            aria-label="Conversar no WhatsApp"
            title="Conversar no WhatsApp"
            data-testid="floating-whatsapp-action-button"
            className="animate-wa-pulse fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-xl shadow-emerald-900/30 transition-colors duration-200 hover:bg-wa-hover sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        >
            <WhatsAppIcon className="h-7 w-7" />
        </a>
    );
}
