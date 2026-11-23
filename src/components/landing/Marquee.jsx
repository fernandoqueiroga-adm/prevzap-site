const items = [
    "Aposentadorias",
    "BPC/LOAS",
    "Benefícios por Incapacidade",
    "Revisões e Recursos",
    "Atendimento 100% On-line em Todo o Brasil",
];

function Half({ hidden = false }) {
    return (
        <div
            aria-hidden={hidden || undefined}
            className="flex shrink-0 items-center"
        >
            {items.map((text) => (
                <span key={text} className="flex items-center">
                    <span className="whitespace-nowrap font-serif text-xl italic text-blue-50/90 sm:text-2xl">
                        {text}
                    </span>
                    <span
                        aria-hidden="true"
                        className="mx-7 h-1.5 w-1.5 rotate-45 bg-emerald-300/70 sm:mx-10"
                    />
                </span>
            ))}
        </div>
    );
}

export function Marquee() {
    return (
        <section
            data-testid="areas-marquee-band"
            className="overflow-hidden bg-forest py-5 sm:py-6"
            aria-label="Áreas de atuação"
        >
            <div className="animate-marquee flex w-max">
                <Half />
                <Half hidden />
            </div>
        </section>
    );
}
