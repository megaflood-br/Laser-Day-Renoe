import {useState} from 'react';
import {Menu, X} from 'lucide-react';

interface NavbarProps {
  onReserveClick: () => void;
}

const NAV_LINKS = [
  {href: '#como-funciona', label: 'Como Funciona'},
  {href: '#simulador', label: 'Simular Lucro'},
  {href: '#ciencia-vendas', label: 'Ciclo & Vendas'},
  {href: '#cidades', label: 'Cidades'},
];

export function Navbar({onReserveClick}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#141418]/10 bg-[#FAF8F5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#topo"
          className="font-display text-lg font-bold tracking-tight text-[#0D0D0F] whitespace-nowrap shrink-0 sm:text-xl lg:text-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A5A0F]"
        >
          LASER <span className="italic font-semibold text-[#7A5A0F]">Day</span>{' '}
          <span className="font-sans text-xs font-medium tracking-normal text-[#3F3F46] sm:text-sm">
            by Sandy Alexandrino
          </span>
        </a>

        {/* Zone 2: 4 single-line nav links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-5 text-sm font-medium text-[#3F3F46] lg:gap-7"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-2 transition-colors duration-150 hover:text-[#0D0D0F] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7A5A0F]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onReserveClick}
            className="hidden sm:inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#0D0D0F] px-5 py-2.5 text-sm font-semibold text-[#FAF8F5] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#232329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A5A0F] cursor-pointer"
          >
            Reservar Data
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#141418]/15 text-[#0D0D0F] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A5A0F] cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Menu móvel"
          className="border-t border-[#141418]/10 bg-[#FAF8F5] px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#141418] hover:bg-[#F2ECE1]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onReserveClick();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#0D0D0F] px-5 py-3 text-sm font-semibold text-[#FAF8F5] cursor-pointer"
            >
              Reservar Data para Minha Clínica
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
