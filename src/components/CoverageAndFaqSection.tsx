import {useState} from 'react';
import {ChevronDown, MapPin, ArrowRight} from 'lucide-react';
import {COVERED_CITIES, FAQ_ITEMS} from '../data/laserDayData';

interface CoverageAndFaqSectionProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  onProceedToBooking: () => void;
}

export function CoverageAndFaqSection({
  selectedCity,
  onSelectCity,
  onProceedToBooking,
}: CoverageAndFaqSectionProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);

  const activeCityData =
    COVERED_CITIES.find((c) => c.name === selectedCity) || {
      name: selectedCity,
      status: 'Consulta sob demanda',
      note: 'Informe sua cidade no formulário abaixo para verificarmos a disponibilidade de rota.',
    };

  return (
    <section id="cidades" className="border-t border-[#141418]/10 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Regional Coverage Block */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
              Área de Atendimento Exclusiva
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0D0D0F] sm:text-4xl">
              Cidades atendidas com rota dedicada
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#52525B]">
              Selecione sua cidade ao lado para confirmar cobertura e pré-preencher sua solicitação de data no WhatsApp.
            </p>

            {/* Selected City Feedback Box */}
            <div className="mt-6 rounded-2xl border border-[#141418]/15 bg-[#FAF8F5] p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D0D0F]">
                <MapPin className="h-4 w-4 shrink-0 text-[#7A5A0F]" aria-hidden="true" />
                <span>{activeCityData.name}</span>
                <span aria-hidden="true">·</span>
                <span className="text-xs font-semibold text-[#15803D]">{activeCityData.status}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#3F3F46]">{activeCityData.note}</p>
              <button
                type="button"
                onClick={onProceedToBooking}
                className="mt-4 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-[#0D0D0F] underline decoration-[#7A5A0F] underline-offset-4 hover:text-[#7A5A0F] cursor-pointer"
              >
                <span>Solicitar data em {activeCityData.name}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              role="radiogroup"
              aria-label="Selecionar cidade para atendimento"
            >
              {COVERED_CITIES.map((city) => {
                const isSelected = selectedCity === city.name;
                return (
                  <button
                    key={city.name}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => onSelectCity(city.name)}
                    className={`flex min-h-[68px] flex-col items-start justify-center rounded-xl border p-4 text-left transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A5A0F] ${
                      isSelected
                        ? 'border-[#0D0D0F] bg-[#0D0D0F] text-white'
                        : 'border-[#141418]/15 bg-[#FAF8F5] text-[#0D0D0F] hover:border-[#0D0D0F]/40'
                    }`}
                  >
                    <span className="text-base font-bold">{city.name}</span>
                    <span
                      className={`mt-0.5 text-xs ${
                        isSelected ? 'text-[#DDB758]' : 'text-[#52525B]'
                      }`}
                    >
                      {city.status}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => onSelectCity('Outra cidade da região')}
              className={`mt-3 flex min-h-[48px] w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                selectedCity === 'Outra cidade da região'
                  ? 'border-[#0D0D0F] bg-[#0D0D0F] text-white'
                  : 'border-[#141418]/15 bg-white text-[#3F3F46] hover:bg-[#FAF8F5]'
              }`}
            >
              <span>Minha clínica fica em outra cidade próxima</span>
              <span className="text-xs font-medium opacity-80">Consultar disponibilidade</span>
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-16 border-t border-[#141418]/10 pt-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7A5A0F]">
              Dúvidas Frequentes
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0D0D0F] sm:text-3xl">
              Respostas diretas para fechar sua parceria
            </h2>
          </div>

          <div className="mt-8 divide-y divide-[#141418]/12 rounded-2xl border border-[#141418]/12 bg-[#FAF8F5]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenFaqId(isOpen ? '' : item.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-[#0D0D0F] hover:bg-[#F2ECE1]/60 cursor-pointer sm:px-6"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#7A5A0F] transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      className="px-5 pb-5 text-sm leading-relaxed text-[#3F3F46] sm:px-6 sm:text-base"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
