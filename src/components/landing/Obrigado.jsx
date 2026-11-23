import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LogoFull } from "./Logo";
import { CtaButton } from "./CtaButton";

export function Obrigado() {
    return (
        <main
            data-testid="obrigado-page"
            className="relative flex min-h-screen flex-col overflow-hidden bg-forest text-white"
        >
            <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
            <div className="relative flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <LogoFull className="h-24 w-24 drop-shadow-xl sm:h-28 sm:w-28" />
                    <p className="mt-4 font-logo text-xs font-semibold uppercase tracking-[0.24em] text-blue-100/80 sm:text-sm">
                        PREV ZAP · Zuim Advocacia Previdenciária
                    </p>
                </motion.div>
                <motion.svg
                    viewBox="0 0 64 64"
                    className="mt-10 h-16 w-16"
                    fill="none"
                    aria-hidden="true"
                >
                    <motion.circle
                        cx="32"
                        cy="32"
                        r="27"
                        stroke="#34D399"
                        strokeWidth="4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    />
                    <motion.path
                        d="M20 33 L28.5 41.5 L45 24"
                        stroke="#34D399"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.45, delay: 0.75 }}
                    />
                </motion.svg>
                <motion.h1
                    data-testid="obrigado-heading"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    className="mt-6 font-serif text-4xl font-bold sm:text-5xl"
                >
                    Obrigado pelo seu contato!
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-5 max-w-xl text-base leading-relaxed text-blue-50/85 sm:text-lg"
                >
                    Abrimos a sua conversa no WhatsApp em uma nova aba. Se ela
                    não abriu automaticamente, toque no botão abaixo para falar
                    diretamente com o escritório.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.85 }}
                    className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
                >
                    <CtaButton
                        size="lg"
                        testId="obrigado-whatsapp-button"
                        source="obrigado"
                        redirect={false}
                    >
                        Abrir o WhatsApp novamente
                    </CtaButton>
                    <Link
                        to="/"
                        data-testid="obrigado-back-button"
                        className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-forest"
                    >
                        Voltar para a página inicial
                    </Link>
                </motion.div>
            </div>
            <p className="relative px-6 pb-24 text-center text-xs text-blue-100/50">
                PREV ZAP — Zuim Advocacia Previdenciária | Fernando César Zuim
                Queiroga — OAB/MG 122.985
            </p>
        </main>
    );
}
