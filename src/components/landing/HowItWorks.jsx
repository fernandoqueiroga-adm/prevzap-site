import { motion } from "framer-motion";

const steps = [
    {
        testId: "step-item-1-contato",
        number: "1",
        title: "Primeiro Contato",
        text: "Você clica no botão do WhatsApp e relata brevemente a sua dúvida ou situação junto ao INSS.",
    },
    {
        testId: "step-item-2-analise",
        number: "2",
        title: "Análise Técnica",
        text: "Orientamos você sobre como enviar com segurança o extrato CNIS, cartas de indeferimento ou laudos médicos pelo celular.",
    },
    {
        testId: "step-item-3-parecer",
        number: "3",
        title: "Parecer Jurídico",
        text: "Apresentamos uma avaliação técnica clara sobre a viabilidade do seu caso e os próximos passos.",
    },
];

export function HowItWorks() {
    return (
        <section
            data-testid="how-it-works-section"
            className="bg-[#F8FAFC] py-16 sm:py-24"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="font-logo text-xs font-semibold uppercase tracking-[0.22em] text-wa sm:text-sm">
                        Como Funciona o Atendimento Digital
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-5xl">
                        Atendimento Ágil, Simples e 100% Digital
                    </h2>
                </motion.div>
                <ol className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 sm:mt-14">
                    {steps.map(({ testId, number, title, text }, index) => (
                        <motion.li
                            key={testId}
                            data-testid={testId}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.12,
                            }}
                            className="relative text-center md:text-left"
                        >
                            <div className="flex items-center justify-center gap-4 md:justify-start">
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest font-logo text-lg font-bold text-white">
                                    {number}
                                </span>
                                {index < steps.length - 1 && (
                                    <span
                                        aria-hidden="true"
                                        className="hidden h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent md:block"
                                    />
                                )}
                            </div>
                            <h3 className="mt-5 font-serif text-2xl font-bold text-charcoal">
                                {title}
                            </h3>
                            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-slate-600 md:mx-0 sm:text-base">
                                {text}
                            </p>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
