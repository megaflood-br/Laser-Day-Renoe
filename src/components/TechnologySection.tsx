import {CORE_PILLARS} from '../data/laserDayData';

const OUTCOME_STRIP = [
  {title: 'Mais Praticidade', note: 'Montamos e operamos toda a estrutura técnica no seu espaço'},
  {title: 'Mais Clientes', note: 'Atrai novo público de depilação a laser para o seu salão ou clínica'},
  {title: 'Mais Lucro', note: '30% de remuneração direta sem custo de aquisição de máquina'},
];

export function TechnologySection() {
  return (
    <section id="tecnologia" className="bg-[#FAF8F5] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
              Diferenciais da Parceria
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0D0D0F] sm:text-4xl">
              Estrutura clínica completa sem imobilizar capital
            </h2>
          </div>
          <p className="text-sm font-semibold text-[#52525B]">
            Tecnologia HTM <span aria-hidden="true">·</span> Equipamento Acrus
          </p>
        </div>

        {/* Asymmetric 2-row Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
          {CORE_PILLARS.map((pillar, index) => {
            const isWide = index === 0 || index === 3;
            const spanClass = isWide ? 'md:col-span-7' : 'md:col-span-5';
            const surfaceClass = pillar.featured
              ? 'border-[#141418]/15 bg-white'
              : 'border-[#141418]/12 bg-[#F2ECE1]';

            return (
              <article
                key={pillar.id}
                className={`${spanClass} flex flex-col justify-between rounded-2xl border p-6 sm:p-8 ${surfaceClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="font-semibold text-[#7A5A0F] tabular-nums">
                      {pillar.number}. {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight text-[#0D0D0F] sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#3F3F46] sm:text-base">
                    {pillar.description}
                  </p>
                </div>

                <p className="mt-6 border-t border-[#141418]/10 pt-4 text-xs font-semibold text-[#0D0D0F]">
                  {pillar.highlight}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom Outcomes Strip */}
        <div className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-[#141418]/12 bg-white p-6 md:grid-cols-3 md:gap-8">
          {OUTCOME_STRIP.map((item) => (
            <div key={item.title} className="flex flex-col">
              <p className="text-base font-extrabold text-[#0D0D0F]">{item.title}</p>
              <p className="mt-1 text-sm text-[#52525B]">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
