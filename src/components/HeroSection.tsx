import {useState} from 'react';
import {ArrowRight, Calculator, Sparkles} from 'lucide-react';
import {HERO_SESSION_IMAGE_SRC} from '../data/laserDayData';

interface HeroSectionProps {
  onReserveClick: () => void;
  onSimulateClick: () => void;
}

const PROOF_METRICS = [
  {
    value: '30%',
    label: 'Remuneração direta para o contratante',
  },
  {
    value: 'R$ 0',
    label: 'Investimento inicial em equipamento',
  },
  {
    value: 'Acrus HTM',
    label: 'Tecnologia clínica segura e reconhecida',
  },
  {
    value: '6 Cidades',
    label: 'Bragança Paulista, região e Grande SP',
  },
];

export function HeroSection({onReserveClick, onSimulateClick}: HeroSectionProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="topo" className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#7A5A0F]">
              Parceria para Clínicas e Salões <span aria-hidden="true">·</span> Sandy Alexandrino
            </p>

            <h1 className="mt-4 text-[clamp(2.15rem,4.5vw,3.65rem)] font-extrabold leading-[1.08] tracking-tight text-[#0D0D0F]">
              Sua clínica ou salão com laser,{' '}
              <span className="font-display italic font-bold text-[#7A5A0F]">
                sem complicação.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#3F3F46] sm:text-lg">
              Você cria sua agenda, nós levamos a profissional qualificada e o equipamento{' '}
              <strong className="font-semibold text-[#0D0D0F]">Acrus HTM</strong>, e atendemos no seu espaço, no dia combinado.
            </p>

            {/* Primary Offer Highlight Card - clean hairline border, zero thick left stripe */}
            <div className="mt-6 flex flex-col gap-3 rounded-xl border border-[#141418]/12 bg-[#F2ECE1] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
                  Modelo de Parceria Direta
                </p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight text-[#0D0D0F] tabular-nums sm:text-3xl">
                  30% de remuneração{' '}
                  <span className="text-base font-semibold text-[#3F3F46]">para o contratante</span>
                </p>
              </div>
              <p className="text-sm font-medium text-[#3F3F46] sm:max-w-[190px] sm:text-right">
                Mais resultados, mais clientes e mais lucro sem comprar máquina.
              </p>
            </div>

            {/* Single Primary CTA + Clear Secondary Anchor */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onReserveClick}
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-[#15803D] px-6 py-3.5 text-base font-bold text-white shadow-sm transition-colors duration-150 hover:bg-[#166534] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D] whitespace-nowrap cursor-pointer"
              >
                <span>Agendar Laser Day no WhatsApp</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onSimulateClick}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-[#141418]/20 bg-white px-5 py-3.5 text-sm font-semibold text-[#0D0D0F] transition-colors duration-150 hover:bg-[#F2ECE1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A5A0F] whitespace-nowrap cursor-pointer"
              >
                <Calculator className="h-4 w-4 shrink-0 text-[#7A5A0F]" aria-hidden="true" />
                <span>Simular Meu Ganho</span>
              </button>
            </div>

            <p className="mt-4 text-xs font-medium text-[#52525B]">
              Agenda mínima de 10 clientes <span aria-hidden="true">·</span> Requer tomada 220V{' '}
              <span aria-hidden="true">·</span> Levamos a maca se você não tiver
            </p>
          </div>

          {/* Right Showcase Column - Editorial photo of specialist + laser equipment */}
          <div className="flex flex-col lg:col-span-5">
            <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#141418]/15 bg-[#0D0D0F]">
              {!imageFailed ? (
                <div className="relative aspect-[3/4] w-full flex-1 overflow-hidden bg-[#16161B] lg:aspect-auto lg:min-h-[480px]">
                  <img
                    src={HERO_SESSION_IMAGE_SRC}
                    alt="Especialista realizando sessão de depilação a laser com equipamento Acrus HTM em ambiente clínico"
                    referrerPolicy="no-referrer"
                    onError={() => setImageFailed(true)}
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/60 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#DDB758]">
                      Equipamento Acrus HTM + Especialista
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#F4F4F5]">
                      Estrutura completa levada até a sua clínica ou salão no dia agendado.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-[400px] flex-1 flex-col items-center justify-center bg-[#16161B] p-8 text-center">
                  <Sparkles className="h-10 w-10 text-[#DDB758]" aria-hidden="true" />
                  <p className="mt-4 font-display text-2xl font-bold text-white">
                    LASER Day by Sandy Alexandrino
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-[#D4D4D8]">
                    Equipamento Acrus HTM e profissional qualificada no seu espaço com 30% de remuneração.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-width 4-column KPI strip below hero split */}
        <div className="mt-10 grid grid-cols-2 gap-3 border-t border-[#141418]/10 pt-8 sm:gap-4 lg:mt-14 lg:grid-cols-4">
          {PROOF_METRICS.map((item) => (
            <div
              key={item.value}
              className="rounded-xl border border-[#141418]/10 bg-white p-4 sm:p-5"
            >
              <p className="text-xl font-extrabold tracking-tight text-[#0D0D0F] tabular-nums sm:text-2xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-[#52525B] sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
