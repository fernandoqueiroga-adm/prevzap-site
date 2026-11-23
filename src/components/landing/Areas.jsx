import { motion } from "framer-motion";
import { CalendarClock, HandHeart, HeartPulse, FileSearch } from "lucide-react";
import { CtaButton } from "./CtaButton";

const areas = [
    {
        testId: "area-card-aposentadorias",
        icon: CalendarClock,
        title: "Aposentadorias",
        text: "Planejamento previdenciário, análise de tempo de contribuição (CNIS), concessão de aposentadoria por idade, por tempo de contribuição, especial ou da pessoa com deficiência.",
    },
    {
        testId: "area-card-bpc-loas",
        icon: HandHeart,
        title: "BPC / LOAS",
        text: "Orientação e requerimento de benefício assistencial para idosos acima de 65 anos ou pessoas com deficiência (incluindo TEA/autismo) de baixa renda.",
    },
    {
        testId: "area-card-incapacidade",
        icon: HeartPulse,
        title: "Benefícios por Incapacidade",
        text: "Acompanhamento em pedidos e restabelecimentos de auxílio por incapacidade temporária (auxílio-doença), aposentadoria por incapacidade permanente e auxílio-acidente.",
    },
    {
        testId: "area-card-revisoes",
        icon: FileSearch,
        title: "Revisões e Recursos",
        text: "Análise técnica de benefícios indeferidos pelo INSS, verificação de erros de cálculo na renda mensal e recursos administrativos ou judiciais.",
    },
];

export function Areas() {
    return (
        <section
            data-testid="areas-section"
            className="bg-white py-16 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl"
                >
                    <p className="font-logo text-xs font-semibold uppercase tracking-[0.22em] text-wa sm:text-sm">
                        Áreas de Atuação
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-5xl">
                        Como Podemos Ajudar Você
                    </h2>
                </motion.div>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:mt-12">
                    {areas.map(
                        (
                            { testId, icon: Icon, title, text },
                            index,
                        ) => (
                            <motion.article
                                key={testId}
                                data-testid={testId}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/10"
                            >
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-forest">
                                    <Icon className="h-6 w-6" />
                                </span>
                                <h3 className="mt-5 font-serif text-xl font-bold text-charcoal">
                                    {title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                    {text}
                                </p>
                            </motion.article>
                        ),
                    )}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-12 text-center sm:mt-14"
                >
                    <CtaButton
                        size="md"
                        testId="areas-whatsapp-cta-button"
                    >
                        Tirar Dúvida pelo WhatsApp
                    </CtaButton>
                </motion.div>
            </div>
        </section>
    );
}
