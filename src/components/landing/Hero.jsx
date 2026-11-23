import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Lock, Globe } from "lucide-react";
import { CtaButton } from "./CtaButton";

const trustSignals = [
    { icon: ShieldCheck, label: "Atendimento direto com o advogado" },
    { icon: Lock, label: "Sigilo profissional" },
    { icon: Globe, label: "Atuação em todo o Brasil" },
];

export function Hero() {
    const { scrollY } = useScroll();
    const imgY = useTransform(scrollY, [0, 700], [0, 64]);

    return (
        <section
            data-testid="hero-section"
            className="relative overflow-hidden bg-[#F8FAFC] pb-20 pt-24 sm:pb-28 sm:pt-32 lg:pt-40"
        >
            <div className="bg-hero-grid absolute inset-0" aria-hidden="true" />
            <div className="bg-hero-fade absolute inset-0" aria-hidden="true" />
            <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
                <div className="lg:col-span-7">
                    <p
                        data-testid="hero-trust-badge"
                        className="fade-up inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-forest sm:text-sm"
                    >
                        <ShieldCheck className="h-4 w-4 shrink-0 text-wa" />
                        <span>
                            Atendimento 100% On-line em Todo o Brasil •
                            Experiência desde 2009
                        </span>
                    </p>
                    <h1
                        data-testid="hero-main-heading"
                        aria-label="Precisa de Orientação Jurídica sobre o INSS? Analise o Seu Benefício com Segurança."
                        className="mt-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-charcoal sm:text-5xl lg:text-[3.35rem]"
                    >
                        <span className="hero-mask" aria-hidden="true">
                            <span
                                className="hero-line"
                                style={{ animationDelay: "0.05s" }}
                            >
                                Precisa de Orientação
                            </span>
                        </span>
                        <span className="hero-mask" aria-hidden="true">
                            <span
                                className="hero-line"
                                style={{ animationDelay: "0.16s" }}
                            >
                                Jurídica sobre o{" "}
                                <span className="text-forest">INSS</span>?
                            </span>
                        </span>
                        <span className="hero-mask" aria-hidden="true">
                            <span
                                className="hero-line"
                                style={{ animationDelay: "0.27s" }}
                            >
                                Analise o Seu Benefício
                            </span>
                        </span>
                        <span className="hero-mask" aria-hidden="true">
                            <span
                                className="hero-line"
                                style={{ animationDelay: "0.38s" }}
                            >
                                com Segurança.
                            </span>
                        </span>
                    </h1>
                    <p
                        data-testid="hero-subtitle-description"
                        className="fade-up mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
                        style={{ animationDelay: "0.5s" }}
                    >
                        Atuação especializada em aposentadorias, BPC/LOAS,
                        benefícios por incapacidade e revisões previdenciárias,
                        com atendimento direto e humanizado pelo WhatsApp.
                    </p>
                    <div className="fade-up mt-8" style={{ animationDelay: "0.62s" }}>
                        <CtaButton
                            size="lg"
                            testId="hero-primary-cta-button"
                            source="hero"
                            className="shadow-lg shadow-emerald-600/30"
                        >
                            Falar com o Advogado Agora
                        </CtaButton>
                    </div>
                    <ul
                        className="fade-up mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6"
                        style={{ animationDelay: "0.74s" }}
                    >
                        {trustSignals.map(({ icon: Icon, label }) => (
                            <li
                                key={label}
                                className="flex items-center gap-2 text-sm font-medium text-slate-500"
                            >
                                <Icon className="h-4 w-4 shrink-0 text-wa" />
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:col-span-5">
                    <motion.div
                        style={{ y: imgY }}
                        className="relative mx-auto max-w-md lg:max-w-none"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute -right-4 -top-4 h-full w-full rounded-2xl border-2 border-forest/15"
                        />
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-900/10">
                            <img
                                src="https://images.pexels.com/photos/27086971/pexels-photo-27086971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="Pessoa utilizando o atendimento digital pelo celular com tranquilidade"
                                className="aspect-[4/3.4] w-full object-cover"
                                loading="eager"
                                decoding="async"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent"
                            />
                        </div>
                        <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/10 sm:left-6">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest text-white">
                                <ShieldCheck className="h-5 w-5" />
                            </span>
                            <div className="leading-tight">
                                <p className="text-sm font-bold text-charcoal">
                                    Advocacia Previdenciária
                                </p>
                                <p className="text-xs font-medium text-slate-500">
                                    Experiência desde 2009
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
