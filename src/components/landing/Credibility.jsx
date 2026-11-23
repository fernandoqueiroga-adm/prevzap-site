import { motion } from "framer-motion";
import { BadgeCheck, Landmark } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function Credibility() {
    return (
        <section
            data-testid="credibility-lawyer-section"
            className="bg-white py-16 sm:py-24"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="relative order-2 lg:order-1"
                >
                    <div
                        aria-hidden="true"
                        className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-forest/15"
                    />
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10">
                        <img
                            src="https://images.unsplash.com/photo-1642522029686-5485ea7e6042?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxsYXd5ZXIlMjBvZmZpY2UlMjBkZXNrJTIwZG9jdW1lbnR8ZW58MHx8fHwxNzk1NDYwNTM3fDA&ixlib=rb-4.1.0&q=85"
                            alt="Análise técnica de documentos previdenciários em mesa de trabalho"
                            className="aspect-[4/3] w-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent"
                        />
                    </div>
                    <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/10 sm:right-8">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest text-white">
                            <Landmark className="h-5 w-5" />
                        </span>
                        <div className="leading-tight">
                            <p
                                data-testid="lawyer-oab-registration-badge"
                                className="text-sm font-bold text-charcoal"
                            >
                                OAB/MG 122.985
                            </p>
                            <p className="text-xs font-medium text-slate-500">
                                Desde 2009 no Direito Previdenciário
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="order-1 lg:order-2"
                >
                    <p className="font-logo text-xs font-semibold uppercase tracking-[0.22em] text-wa sm:text-sm">
                        Credibilidade e Autoridade
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl">
                        Experiência e Transparência no Direito Previdenciário
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                        O PREV ZAP é a plataforma de atendimento digital da Zuim
                        Advocacia Previdenciária, conduzida pelo advogado
                        Fernando César Zuim Queiroga (OAB/MG 122.985). Com
                        atuação dedicada ao Direito Previdenciário desde 2009,
                        unimos o rigor técnico da advocacia tradicional à
                        praticidade do atendimento on-line, garantindo contato
                        direto com o advogado responsável em todas as etapas.
                    </p>
                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-forest">
                        <BadgeCheck className="h-5 w-5 shrink-0 text-wa" />
                        Advogado responsável presente em todas as etapas
                    </div>
                    <div className="mt-8">
                        <CtaButton
                            size="md"
                            testId="credibility-whatsapp-cta-button"
                            source="credibilidade"
                        >
                            Iniciar Atendimento no WhatsApp
                        </CtaButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
