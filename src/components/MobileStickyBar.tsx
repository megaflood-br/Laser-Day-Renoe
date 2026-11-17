import {MessageCircle} from 'lucide-react';
import {buildWhatsAppUrl} from '../data/laserDayData';

interface MobileStickyBarProps {
  selectedCity: string;
}

export function MobileStickyBar({selectedCity}: MobileStickyBarProps) {
  const quickMessage = `Olá! Tenho interesse em levar o LASER Day by Sandy Alexandrino para meu espaço em ${selectedCity}.`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#141418]/15 bg-[#FAF8F5]/95 px-4 py-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-extrabold text-[#0D0D0F] tabular-nums">
            30% de lucro <span aria-hidden="true">·</span> Zero custo
          </p>
          <p className="truncate text-[11px] text-[#52525B]">Acrus HTM no seu espaço</p>
        </div>

        <a
          href={buildWhatsAppUrl(quickMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-xl bg-[#15803D] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#166534] whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Agendar WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
