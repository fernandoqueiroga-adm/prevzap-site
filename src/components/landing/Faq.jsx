import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        testId: "faq-item-1",
        question:
            "O atendimento on-line é seguro e tem a mesma validade do presencial?",
        answer:
            "Sim. Hoje, tanto os requerimentos administrativos no Meu INSS quanto os processos na Justiça Federal são 100% eletrônicos. Você recebe orientação completa sem precisar sair de casa.",
    },
    {
        testId: "faq-item-2",
        question: "Quais documentos iniciais são necessários para a análise?",
        answer:
            "Para uma avaliação inicial, geralmente utilizamos documento de identificação (RG/CPF), comprovante de residência, extrato previdenciário (CNIS) e, conforme o caso, laudos médicos ou a carta de decisão do INSS.",
    },
    {
        testId: "faq-item-3",
        question: "O escritório atende clientes fora de Belo Horizonte?",
        answer:
            "Sim. Nossa estrutura digital permite atender segurados em todo o Brasil com a mesma agilidade e segurança.",
    },
];

export function Faq() {
    return (
        <section
            data-testid="faq-accordion-section"
            className="bg-[#F8FAFC] py-16 sm:py-24"
        >
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <p className="font-logo text-xs font-semibold uppercase tracking-[0.22em] text-wa sm:text-sm">
                        Tire Suas Dúvidas
                    </p>
                    <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-5xl">
                        Perguntas Frequentes
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-10 rounded-2xl border border-slate-200 bg-white px-5 py-2 sm:px-8"
                >
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map(({ testId, question, answer }) => (
                            <AccordionItem
                                key={testId}
                                value={testId}
                                data-testid={testId}
                                className="border-slate-200"
                            >
                                <AccordionTrigger className="py-5 text-left text-base font-semibold text-charcoal hover:no-underline sm:text-lg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-wa">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
