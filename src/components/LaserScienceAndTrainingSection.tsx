import {useState} from 'react';
import {ArrowRight, GraduationCap} from 'lucide-react';
import {HAIR_CYCLE_PHASES} from '../data/laserDayData';

interface LaserScienceAndTrainingSectionProps {
  onReserveClick: () => void;
}

export function LaserScienceAndTrainingSection({
  onReserveClick,
}: LaserScienceAndTrainingSectionProps) {
  const [activePhaseId, setActivePhaseId] = useState<'anagena' | 'catagena' | 'telogena'>('anagena');

  const activePhase =
    HAIR_CYCLE_PHASES.find((phase) => phase.id === activePhaseId) ?? HAIR_CYCLE_PHASES[0];

  return (
    <section id="ciencia-vendas" className="border-t border-[#141418]/10 bg-[#FAF8F5] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
            Entendimento Clínico & Suporte Comercial
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0D0D0F] sm:text-4xl">
            Como funciona o laser, o ciclo do pelo e o seu treinamento de vendas
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#3F3F46]">
            Você não precisa dominar os termos técnicos para lucrar com depilação a laser — nossa equipe explica o protocolo e prepara você para vender com segurança.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: How Laser Works + Interactive Hair Cycle + Minimum Sessions */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#141418]/12 bg-white p-6 sm:p-8 lg:col-span-7">
            <div>
              <h3 className="text-lg font-bold text-[#0D0D0F] sm:text-xl">
                1. Como age a depilação a laser
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#3F3F46] sm:text-base">
                O laser emite um feixe de luz atraído pela melanina presente na haste do pelo. Essa energia se transforma em calor controlado diretamente na raiz do folículo, enfraquecendo o crescimento de novos fios sem agredir a pele ao redor.
              </p>

              {/* Interactive Hair Growth Cycle Explorer */}
              <div className="mt-7 border-t border-[#141418]/10 pt-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <h3 className="text-lg font-bold text-[#0D0D0F] sm:text-xl">
                    2. O ciclo do pelo em 3 fases
                  </h3>
                  <span className="text-xs font-medium text-[#52525B]">
                    Toque nas fases para entender
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="Fases do ciclo de crescimento do pelo"
                  className="mt-4 grid grid-cols-1 gap-2 rounded-xl bg-[#F2ECE1] p-1.5 sm:grid-cols-3"
                >
                  {HAIR_CYCLE_PHASES.map((phase) => {
                    const isSelected = phase.id === activePhaseId;
                    return (
                      <button
                        key={phase.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setActivePhaseId(phase.id)}
                        className={`min-h-[44px] rounded-lg px-3 py-2 text-left text-xs font-bold transition-colors duration-150 cursor-pointer sm:text-center ${
                          isSelected
                            ? 'bg-[#0D0D0F] text-white shadow-sm'
                            : 'text-[#3F3F46] hover:text-[#0D0D0F]'
                        }`}
                      >
                        <span className="tabular-nums">{phase.step}.</span>{' '}
                        {phase.id === 'anagena'
                          ? 'Anágena'
                          : phase.id === 'catagena'
                            ? 'Catágena'
                            : 'Telógena'}
                      </button>
                    );
                  })}
                </div>

                <div
                  role="tabpanel"
                  className="mt-4 rounded-xl border border-[#141418]/10 bg-[#FAF8F5] p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-base font-bold text-[#0D0D0F]">{activePhase.name}</p>
                    <span className="text-xs font-semibold text-[#7A5A0F]">{activePhase.tag}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#3F3F46]">
                    {activePhase.summary}
                  </p>
                  <p className="mt-3 border-t border-[#141418]/10 pt-3 text-sm font-medium text-[#0D0D0F]">
                    {activePhase.laserEffect}
                  </p>
                </div>
              </div>
            </div>

            {/* Minimum Sessions Summary Strip */}
            <div className="mt-7 grid grid-cols-1 gap-4 border-t border-[#141418]/10 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
                  Protocolo Recomendado
                </p>
                <p className="mt-1 text-2xl font-extrabold text-[#0D0D0F] tabular-nums">
                  6 a 10 sessões
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#52525B]">
                  Mínimo indicado para resultados consistentes, respeitando o intervalo de 30 a 45 dias entre sessões.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
                  Benefício para Seu Caixa
                </p>
                <p className="mt-1 text-2xl font-extrabold text-[#0D0D0F]">
                  Recorrência mensal
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#52525B]">
                  A mesma cliente retorna todos os meses para completar o ciclo, garantindo novas edições do Laser Day.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Included Sales Training Card */}
          <aside className="flex flex-col justify-between rounded-2xl border border-[#DDB758]/30 bg-[#0D0D0F] p-6 text-[#FAF8F5] sm:p-8 lg:col-span-5">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDB758]/35 bg-[#16161B] text-[#DDB758]">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#DDB758]">
                Suporte Comercial Completo
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
                Nós damos o treinamento para você vender
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D4D4D8] sm:text-base">
                Não se preocupe se você ou sua equipe nunca trabalharam com laser antes. Ao fechar a parceria, entregamos orientação comercial prática para preencher suas 10+ vagas com rapidez.
              </p>

              <ul className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm">
                <li>
                  <p className="font-bold text-white">01. Como explicar resultados sem promessas irreais</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#A1A1AA]">
                    Argumentos simples sobre o ciclo do pelo e as 6 a 10 sessões para gerar confiança imediata.
                  </p>
                </li>
                <li>
                  <p className="font-bold text-white">02. Script de convite para suas clientes atuais</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#A1A1AA]">
                    Abordagem pronta para WhatsApp e balcão para converter quem já frequenta sua clínica ou salão.
                  </p>
                </li>
                <li>
                  <p className="font-bold text-white">03. Montagem de pacotes e fidelização mensal</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[#A1A1AA]">
                    Estratégia para manter a agenda cheia todos os meses e ampliar sua receita recorrente de 30%.
                  </p>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onReserveClick}
              className="mt-8 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#DDB758] px-5 py-3.5 text-sm font-bold text-[#0D0D0F] transition-colors duration-150 hover:bg-[#E7C773] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDB758] cursor-pointer"
            >
              <span>Quero Parceria com Treinamento</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}
