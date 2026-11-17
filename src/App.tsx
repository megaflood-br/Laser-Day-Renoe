import {useState} from 'react';
import {Navbar} from './components/Navbar';
import {HeroSection} from './components/HeroSection';
import {HowItWorksSection} from './components/HowItWorksSection';
import {ProfitSimulator} from './components/ProfitSimulator';
import {TechnologySection} from './components/TechnologySection';
import {LaserScienceAndTrainingSection} from './components/LaserScienceAndTrainingSection';
import {CoverageAndFaqSection} from './components/CoverageAndFaqSection';
import {ConversionFormSection} from './components/ConversionFormSection';
import {MobileStickyBar} from './components/MobileStickyBar';
import {buildWhatsAppUrl, COVERED_CITIES, WHATSAPP_DISPLAY} from './data/laserDayData';

export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>(COVERED_CITIES[0].name);
  const [simulatedClients, setSimulatedClients] = useState<number>(18);
  const [simulatedTicket, setSimulatedTicket] = useState<number>(200);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141418] pb-16 md:pb-0">
      <Navbar onReserveClick={() => scrollToSection('agendar')} />

      <main>
        <HeroSection
          onReserveClick={() => scrollToSection('agendar')}
          onSimulateClick={() => scrollToSection('simulador')}
        />

        <HowItWorksSection />

        <ProfitSimulator
          clients={simulatedClients}
          avgTicket={simulatedTicket}
          onClientsChange={setSimulatedClients}
          onAvgTicketChange={setSimulatedTicket}
          onUseSimulation={() => scrollToSection('agendar')}
        />

        <TechnologySection />

        <LaserScienceAndTrainingSection onReserveClick={() => scrollToSection('agendar')} />

        <CoverageAndFaqSection
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          onProceedToBooking={() => scrollToSection('agendar')}
        />

        <ConversionFormSection
          selectedCity={selectedCity}
          onSelectCity={setSelectedCity}
          simulatedClients={simulatedClients}
          simulatedTicket={simulatedTicket}
        />
      </main>

      <footer className="border-t border-white/10 bg-[#0D0D0F] py-10 text-sm text-[#A1A1AA]">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="font-display text-xl font-bold text-white">
              LASER <span className="italic text-[#DDB758]">Day</span>{' '}
              <span className="font-sans text-sm font-medium text-[#D4D4D8]">
                by Sandy Alexandrino
              </span>
            </p>
            <p className="mt-1 text-xs text-[#A1A1AA]">
              Bragança Paulista <span aria-hidden="true">·</span> Perdões{' '}
              <span aria-hidden="true">·</span> Jarinu <span aria-hidden="true">·</span> Piracaia{' '}
              <span aria-hidden="true">·</span> Mairiporã <span aria-hidden="true">·</span> Terra Preta
            </p>
          </div>

          <div className="flex flex-col gap-1 md:text-right">
            <a
              href={buildWhatsAppUrl('Olá! Gostaria de saber mais sobre o LASER Day by Sandy Alexandrino.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#DDB758] tabular-nums"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <p className="text-xs text-[#A1A1AA]">
              Equipamento Acrus — HTM Tecnologia de Resultado
            </p>
          </div>
        </div>
      </footer>

      <MobileStickyBar selectedCity={selectedCity} />
    </div>
  );
}
