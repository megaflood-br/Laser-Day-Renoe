import {useState, type FormEvent} from 'react';
import {Check, Copy, ExternalLink, MessageCircle} from 'lucide-react';
import {
  buildWhatsAppUrl,
  COVERED_CITIES,
  formatCurrencyBRL,
  WHATSAPP_DISPLAY,
} from '../data/laserDayData';

interface ConversionFormSectionProps {
  selectedCity: string;
  onSelectCity: (city: string) => void;
  simulatedClients: number;
  simulatedTicket: number;
}

export function ConversionFormSection({
  selectedCity,
  onSelectCity,
  simulatedClients,
  simulatedTicket,
}: ConversionFormSectionProps) {
  const [ownerName, setOwnerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState('Próximas 2 semanas');
  const [has220v, setHas220v] = useState<'Sim, temos tomada 220V' | 'Preciso confirmar 220V'>('Sim, temos tomada 220V');
  const [needsMaca, setNeedsMaca] = useState<'Já temos maca no espaço' | 'Preciso que levem a maca'>('Já temos maca no espaço');
  const [formError, setFormError] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const estimatedPartnerProfit = formatCurrencyBRL(
    Math.round(simulatedClients * simulatedTicket * 0.3),
  );

  const composeMessage = () => {
    const cleanOwner = ownerName.trim();
    const cleanBusiness = businessName.trim();
    return [
      `Olá! Gostaria de agendar um *LASER Day by Sandy Alexandrino* no meu espaço.`,
      ``,
      `• Responsável: ${cleanOwner}`,
      `• Clínica / Salão: ${cleanBusiness}`,
      `• Cidade: ${selectedCity}`,
      `• Previsão de agenda: ~${simulatedClients} clientes (mín. 10 · estimativa de 30%: ${estimatedPartnerProfit})`,
      `• Tomada 220V: ${has220v}`,
      `• Maca: ${needsMaca}`,
      `• Preferência de data: ${preferredPeriod}`,
      ``,
      `Podemos verificar as datas disponíveis?`,
    ].join('\n');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (ownerName.trim().length < 2) {
      setFormError('Informe seu nome para personalizarmos o atendimento.');
      return;
    }

    if (businessName.trim().length < 2) {
      setFormError('Informe o nome da sua clínica, studio ou salão.');
      return;
    }

    setFormError('');
    const message = composeMessage();
    setSubmittedMessage(message);

    // Direct WhatsApp redirect URL (also exposed as explicit button below)
    const waUrl = buildWhatsAppUrl(message);
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const handleCopy = async () => {
    if (!submittedMessage) return;
    try {
      await navigator.clipboard.writeText(submittedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="agendar" className="bg-[#0D0D0F] py-14 text-[#FAF8F5] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Persuasion Summary */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#DDB758]">
              Solicitar Data Disponível
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
              Garanta o próximo Laser Day na sua cidade
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#D4D4D8]">
              Preencha seus dados básicos para gerar seu atendimento prioritário no WhatsApp{' '}
              <strong className="font-semibold text-white tabular-nums">{WHATSAPP_DISPLAY}</strong> com a equipe da Sandy Alexandrino.
            </p>

            <dl className="mt-8 space-y-3.5 border-t border-white/10 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-[#A1A1AA]">Cidade selecionada</dt>
                <dd className="font-semibold text-white">{selectedCity}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#A1A1AA]">Agenda mínima</dt>
                <dd className="font-semibold text-white tabular-nums">10 clientes no dia</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#A1A1AA]">Estrutura elétrica</dt>
                <dd className="font-semibold text-white tabular-nums">Tomada 220V no local</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#A1A1AA]">Maca de atendimento</dt>
                <dd className="font-semibold text-[#DDB758]">Levamos se você não tiver</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#A1A1AA]">Remuneração contratante</dt>
                <dd className="font-semibold text-[#DDB758] tabular-nums">30% do movimento</dd>
              </div>
            </dl>
          </div>

          {/* Lead Capture & WhatsApp Handoff Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/15 bg-[#16161B] p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="lead-owner" className="block text-sm font-semibold text-white">
                    Seu nome
                  </label>
                  <input
                    id="lead-owner"
                    type="text"
                    required
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Ex: Camila Ferreira"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/20 bg-[#0D0D0F] px-4 py-3 text-base text-white placeholder:text-[#71717A] focus:border-[#DDB758] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="lead-business" className="block text-sm font-semibold text-white">
                    Nome da clínica ou salão
                  </label>
                  <input
                    id="lead-business"
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ex: Studio Beleza & Estética"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/20 bg-[#0D0D0F] px-4 py-3 text-base text-white placeholder:text-[#71717A] focus:border-[#DDB758] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="lead-city" className="block text-sm font-semibold text-white">
                    Cidade do espaço
                  </label>
                  <select
                    id="lead-city"
                    value={selectedCity}
                    onChange={(e) => onSelectCity(e.target.value)}
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/20 bg-[#0D0D0F] px-4 py-3 text-base text-white focus:border-[#DDB758] focus:outline-none"
                  >
                    {COVERED_CITIES.map((city) => (
                      <option key={city.name} value={city.name}>
                        {city.name}
                      </option>
                    ))}
                    <option value="Outra cidade da região">Outra cidade da região</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lead-period" className="block text-sm font-semibold text-white">
                    Quando deseja realizar?
                  </label>
                  <select
                    id="lead-period"
                    value={preferredPeriod}
                    onChange={(e) => setPreferredPeriod(e.target.value)}
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/20 bg-[#0D0D0F] px-4 py-3 text-base text-white focus:border-[#DDB758] focus:outline-none"
                  >
                    <option value="Esta semana">Esta semana</option>
                    <option value="Próximas 2 semanas">Próximas 2 semanas</option>
                    <option value="Próximo mês">Próximo mês</option>
                    <option value="Quero entender datas disponíveis">
                      Quero consultar datas disponíveis
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lead-220v" className="block text-sm font-semibold text-white">
                    Tomada 220V disponível no local?
                  </label>
                  <select
                    id="lead-220v"
                    value={has220v}
                    onChange={(e) =>
                      setHas220v(
                        e.target.value as 'Sim, temos tomada 220V' | 'Preciso confirmar 220V',
                      )
                    }
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/20 bg-[#0D0D0F] px-4 py-3 text-base text-white focus:border-[#DDB758] focus:outline-none"
                  >
                    <option value="Sim, temos tomada 220V">Sim, temos tomada 220V</option>
                    <option value="Preciso confirmar 220V">Preciso verificar a voltagem</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lead-maca" className="block text-sm font-semibold text-white">
                    Maca para atendimento
                  </label>
                  <select
                    id="lead-maca"
                    value={needsMaca}
                    onChange={(e) =>
                      setNeedsMaca(
                        e.target.value as
                          | 'Já temos maca no espaço'
                          | 'Preciso que levem a maca',
                      )
                    }
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-white/20 bg-[#0D0D0F] px-4 py-3 text-base text-white focus:border-[#DDB758] focus:outline-none"
                  >
                    <option value="Já temos maca no espaço">Já temos maca no espaço</option>
                    <option value="Preciso que levem a maca">
                      Não temos maca (precisamos que levem)
                    </option>
                  </select>
                </div>
              </div>

              {formError && (
                <p role="alert" className="mt-4 text-sm font-medium text-[#FCA5A5]">
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="mt-6 flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#15803D] px-6 py-4 text-base font-bold text-white transition-colors duration-150 hover:bg-[#166534] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22C55E] cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Enviar Solicitação no WhatsApp</span>
              </button>

              <p className="mt-3 text-center text-xs text-[#A1A1AA]">
                Sem compromisso financeiro antecipado <span aria-hidden="true">·</span> Atendimento direto no {WHATSAPP_DISPLAY}
              </p>

              {/* Confirmation & fallback action card */}
              {submittedMessage && (
                <div className="mt-6 rounded-xl border border-[#22C55E]/40 bg-[#0D0D0F] p-5">
                  <p className="text-sm font-bold text-[#86EFAC]">
                    Solicitação pronta para envio no WhatsApp
                  </p>
                  <p className="mt-1 text-xs text-[#D4D4D8]">
                    Caso a conversa não tenha aberto automaticamente, use os botões abaixo:
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildWhatsAppUrl(submittedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#15803D] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#166534]"
                    >
                      <span>Abrir WhatsApp Agora</span>
                      <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-[#86EFAC]" aria-hidden="true" />
                          <span>Mensagem Copiada</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" aria-hidden="true" />
                          <span>Copiar Mensagem</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
