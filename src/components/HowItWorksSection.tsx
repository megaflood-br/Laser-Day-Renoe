import {PARTNERSHIP_STEPS} from '../data/laserDayData';

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="border-t border-[#141418]/10 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
            Fluxo da Parceria
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0D0D0F] sm:text-4xl">
            Como funciona o Laser Day no seu espaço
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#52525B]">
            Um modelo enxuto pensado para clínicas de estética, salões de beleza e studios que desejam ampliar o faturamento sem burocracia técnica.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PARTNERSHIP_STEPS.map((step) => (
            <article
              key={step.number}
              className="flex flex-col justify-between rounded-2xl border border-[#141418]/12 bg-[#FAF8F5] p-6 sm:p-7"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#141418]/10 pb-4">
                  <span className="font-display text-4xl font-bold italic text-[#7A5A0F] tabular-nums">
                    {step.number}.
                  </span>
                  <span className="text-xs font-medium text-[#52525B]">{step.detail}</span>
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-[#0D0D0F]">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#3F3F46]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
