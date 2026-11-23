export const GADS_ID = process.env.REACT_APP_GADS_ID || "";
export const GADS_LABEL = process.env.REACT_APP_GADS_LABEL || "";

let loaded = false;

export function initGtag() {
    if (!GADS_ID || loaded || typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.gtag =
        window.gtag ||
        function () {
            window.dataLayer.push(arguments);
        };
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GADS_ID)}`;
    document.head.appendChild(script);
    window.gtag("js", new Date());
    window.gtag("config", GADS_ID);
    loaded = true;
}

export function trackWhatsAppClick(source = "cta") {
    if (!GADS_ID) return;
    try {
        window.dataLayer = window.dataLayer || [];
        window.gtag =
            window.gtag ||
            function () {
                window.dataLayer.push(arguments);
            };
        if (GADS_LABEL) {
            window.gtag("event", "conversion", {
                send_to: `${GADS_ID}/${GADS_LABEL}`,
                event_category: "engagement",
                event_label: source,
            });
        } else {
            window.gtag("event", "generate_lead", {
                method: "WhatsApp",
                event_category: "engagement",
                event_label: source,
            });
        }
    } catch (e) {
        /* tracking nunca quebra o clique */
    }
}
