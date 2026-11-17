import {ArrowRight} from 'lucide-react';
import {formatCurrencyBRL} from '../data/laserDayData';

interface ProfitSimulatorProps {
  clients: number;
  avgTicket: number;
  onClientsChange: (value: number) => void;
  onAvgTicketChange: (value: number) => void;
  onUseSimulation: () => void;
}

const PRESETS = [
  {label: 'Agenda Inicial (10)', clients: 10, ticket: 180},
  {label: 'Agenda Padrão (18)', clients: 18, ticket: 200},
  {label: 'Agenda Cheia (28)', clients: 28, ticket: 220},
];

export function ProfitSimulator({
  clients,
  avgTicket,
  onClientsChange,
  onAvgTicketChange,
  onUseSimulation,
}: ProfitSimulatorProps) {
  const grossRevenue = clients * avgTicket;
  const partnerProfit = Math.round(grossRevenue * 0.3);

  return (
    <section id="simulador" className="bg-[#0D0D0F] py-14 text-[#FAF8F5] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Controls Column */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#DDB758]">
              Simulador de Faturamento
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Calcule sua remuneração de 30% em um único dia
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-[#D4D4D8]">
              Ajuste a quantidade estimada de atendimentos e o ticket médio por sessão para visualizar quanto sua clínica ou salão lucra sem investir em máquina.
            </p>

            {/* Quick Presets */}
            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Cenários rápidos de agenda">
              {PRESETS.map((preset) => {
                const active = clients === preset.clients && avgTicket === preset.ticket;
                return (
                  <button
                    key={preset.label}
                    type="button"
                    onClick={() => {
                      onClientsChange(preset.clients);
                      onAvgTicketChange(preset.ticket);
                    }}
                    className={`min-h-[44px] rounded-lg px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDB758] ${
                      active
                        ? 'bg-[#DDB758] text-[#0D0D0F]'
                        : 'border border-white/15 bg-[#16161B] text-[#E4E4E7] hover:border-[#DDB758]/50'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Sliders */}
            <div className="mt-8 space-y-7">
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor="sim-clients" className="text-sm font-semibold text-white">
                    Clientes atendidas no dia
                  </label>
                  <span className="text-xl font-extrabold text-[#DDB758] tabular-nums">
                    {clients} clientes
                  </span>
                </div>
                <input
                  id="sim-clients"
                  type="range"
                  min={10}
                  max={35}
                  step={1}
                  value={clients}
                  onChange={(e) => onClientsChange(Number(e.target.value))}
                  className="laser-range mt-3 w-full"
                />
                <div className="mt-1.5 flex justify-between text-xs text-[#A1A1AA] tabular-nums">
                  <span>10 atendimentos (mínimo)</span>
                  <span>35 atendimentos</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor="sim-ticket" className="text-sm font-semibold text-white">
                    Ticket médio por cliente (sessão ou pacote do dia)
                  </label>
                  <span className="text-xl font-extrabold text-[#DDB758] tabular-nums">
                    {formatCurrencyBRL(avgTicket)}
                  </span>
                </div>
                <input
                  id="sim-ticket"
                  type="range"
                  min={120}
                  max={400}
                  step={10}
                  value={avgTicket}
                  onChange={(e) => onAvgTicketChange(Number(e.target.value))}
                  className="laser-range mt-3 w-full"
                />
                <div className="mt-1.5 flex justify-between text-xs text-[#A1A1AA] tabular-nums">
                  <span>R$ 120</span>
                  <span>R$ 400</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result Output Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#DDB758]/30 bg-[#16161B] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#DDB758]">
                Previsão da Sua Edição
              </p>

              <div className="mt-5 border-b border-white/10 pb-5">
                <p className="text-sm text-[#D4D4D8]">Sua remuneração líquida (30%)</p>
                <p className="mt-1 text-4xl font-extrabold tracking-tight text-[#DDB758] tabular-nums sm:text-5xl">
                  {formatCurrencyBRL(partnerProfit)}
                </p>
                <p className="mt-1.5 text-xs text-[#A1A1AA]">
                  Em 1 único dia de atendimento no seu espaço
                </p>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#D4D4D8]">Faturamento bruto estimado</dt>
                  <dd className="font-semibold text-white tabular-nums">
                    {formatCurrencyBRL(grossRevenue)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#D4D4D8]">Aluguel de máquina</dt>
                  <dd className="font-semibold text-[#86EFAC] tabular-nums">R$ 0 (Incluso)</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#D4D4D8]">Profissional aplicadora</dt>
                  <dd className="font-semibold text-[#86EFAC]">Inclusa</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={onUseSimulation}
                className="mt-7 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#DDB758] px-5 py-3.5 text-sm font-bold text-[#0D0D0F] transition-colors duration-150 hover:bg-[#E7C773] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DDB758] cursor-pointer"
              >
                <span>Quero Levar Essa Agenda ao Meu Espaço</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
