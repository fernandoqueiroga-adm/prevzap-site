import { LogoFull } from "./Logo";

export function Footer() {
    return (
        <footer
            data-testid="footer-legal-section"
            className="bg-ink text-slate-300"
        >
            <div className="mx-auto max-w-6xl px-4 pb-28 pt-12 text-center sm:px-6 sm:pt-16 lg:px-8">
                <div className="mb-6 flex justify-center">
                    <LogoFull className="h-24 w-24 sm:h-28 sm:w-28" />
                </div>
                <p
                    data-testid="footer-oab-identification"
                    className="text-sm font-semibold text-white sm:text-base"
                >
                    PREV ZAP — Zuim Advocacia Previdenciária | Fernando César
                    Zuim Queiroga — OAB/MG 122.985
                </p>
                <div
                    aria-hidden="true"
                    className="mx-auto my-6 h-px w-24 bg-white/15"
                />
                <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    Domicílio Fiscal: Rua Calcedônia, 20, Prado, Belo
                    Horizonte/MG • WhatsApp: (31) 99673-3149 •
                    www.prevzapadvocacia.com.br
                </p>
                <p
                    data-testid="footer-provimento-notice"
                    className="mx-auto mt-8 max-w-3xl text-xs leading-normal text-slate-500"
                >
                    Aviso Legal: Este site tem caráter estritamente
                    informativo, em conformidade com o Provimento 205/2021 da
                    Ordem dos Advogados do Brasil (OAB). As informações aqui
                    disponibilizadas não constituem promessa ou garantia de
                    resultado.
                </p>
            </div>
        </footer>
    );
}
