export const WHATSAPP_NUMBER = '5511963567935';
export const WHATSAPP_DISPLAY = '(11) 96356-7935';
export const HERO_SESSION_IMAGE_SRC = '/src/assets/images/hero_laser_session_1794942327712.jpg';

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface PillarItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  featured?: boolean;
}

export interface CityInfo {
  name: string;
  status: string;
  note: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface HairCyclePhase {
  id: 'anagena' | 'catagena' | 'telogena';
  step: string;
  name: string;
  tag: string;
  summary: string;
  laserEffect: string;
}

export const PARTNERSHIP_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Você escolhe o dia e monta sua agenda',
    description:
      'Defina a melhor data para o seu espaço e agende a partir de 10 clientes entre suas clientes atuais ou novas interessadas.',
    detail: 'Mínimo de 10 clientes no dia',
  },
  {
    number: '02',
    title: 'Nós levamos a profissional e o Acrus HTM',
    description:
      'No dia combinado, nossa especialista chega ao seu endereço com o Acrus HTM e, caso seu espaço não tenha maca, nós levamos.',
    detail: 'Requer apenas tomada 220V no local',
  },
  {
    number: '03',
    title: 'Atendemos no seu espaço e você lucra 30%',
    description:
      'Suas clientes vivem uma experiência premium dentro do seu próprio salão ou clínica e você recebe 30% de remuneração.',
    detail: 'Mais clientes e faturamento imediato',
  },
];

export const CORE_PILLARS: PillarItem[] = [
  {
    id: 'acrus',
    number: '01',
    title: 'Tecnologia de Ponta Acrus HTM',
    subtitle: 'Resultados reais e seguros',
    description:
      'Equipamento de alta performance desenvolvido pela HTM — Tecnologia de Resultado. Resfriamento otimizado para maior conforto da cliente e segurança clínica em cada disparo.',
    highlight: 'Padrão HTM de qualidade clínica',
    featured: true,
  },
  {
    id: 'profissional',
    number: '02',
    title: 'Profissional Qualificada',
    subtitle: 'Experiência e responsabilidade',
    description:
      'Atendimento conduzido por especialista capacitada, com protocolo rigoroso de biossegurança e acolhimento que valoriza a reputação do seu espaço.',
    highlight: 'Equipe técnica dedicada no local',
  },
  {
    id: 'flexibilidade',
    number: '03',
    title: 'Flexibilidade no Atendimento',
    subtitle: 'Você escolhe o dia e a agenda',
    description:
      'Integre a depilação a laser ao seu calendário sem comprometer os atendimentos habituais da sua equipe. Adapte os horários ao fluxo do seu negócio.',
    highlight: 'Gestão simples e previsível',
  },
  {
    id: 'investimento',
    number: '04',
    title: 'Sem Investimento em Equipamento',
    subtitle: 'É só agendar e lucrar',
    description:
      'Elimine a necessidade de comprar aparelhos de alto custo ou arcar com revisões técnicas. Você oferece um serviço de alto ticket com investimento inicial zero.',
    highlight: '30% líquidos para o contratante',
    featured: true,
  },
];

export const COVERED_CITIES: CityInfo[] = [
  {
    name: 'Bragança Paulista',
    status: 'Rota ativa semanal',
    note: 'Atendimento direto para clínicas de estética, consultórios e salões de beleza.',
  },
  {
    name: 'Perdões',
    status: 'Rota ativa',
    note: 'Deslocamento sem custo adicional para agendas confirmadas no dia combinado.',
  },
  {
    name: 'Jarinu',
    status: 'Rota ativa',
    note: 'Leve depilação a laser Acrus HTM para suas clientes sem sair da cidade.',
  },
  {
    name: 'Piracaia',
    status: 'Rota ativa',
    note: 'Parceria flexível para espaços de estética, barbearias e studios.',
  },
  {
    name: 'Mairiporã',
    status: 'Rota ativa',
    note: 'Atendimento completo no seu espaço com equipamento e especialista.',
  },
  {
    name: 'Terra Preta',
    status: 'Rota ativa',
    note: 'Cobertura dedicada para ampliar o faturamento dos parceiros locais.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'custo-fixo',
    question: 'Preciso investir algum valor ou alugar o aparelho?',
    answer:
      'Não. Na parceria Laser Day by Sandy Alexandrino você não compra nem aluga equipamento. Você disponibiliza sua sala no dia combinado, organiza sua agenda e recebe 30% de remuneração sobre os atendimentos realizados.',
  },
  {
    id: 'equipamento',
    question: 'Qual é o equipamento utilizado nos atendimentos?',
    answer:
      'Utilizamos o Acrus da HTM (Tecnologia de Resultado), referência nacional em depilação a laser com segurança clínica, conforto térmico e alta satisfação das clientes desde as primeiras sessões.',
  },
  {
    id: 'estrutura',
    question: 'O que minha clínica ou salão precisa oferecer no dia?',
    answer:
      'É necessário ter uma sala privativa limpa e tomada 220V disponível para ligar o equipamento Acrus HTM. Caso o seu espaço não tenha maca, não se preocupe: nós levamos a maca junto com toda a estrutura de atendimento.',
  },
  {
    id: 'agenda',
    question: 'Qual o mínimo de clientes para abrir uma agenda de Laser Day?',
    answer:
      'Para criarmos e confirmarmos a agenda no seu espaço, é necessário o mínimo de 10 clientes no dia. Ao reservar sua data pelo WhatsApp, orientamos com dicas práticas de divulgação para você preencher os horários rapidamente.',
  },
];

export const HAIR_CYCLE_PHASES: HairCyclePhase[] = [
  {
    id: 'anagena',
    step: '01',
    name: 'Fase Anágena (Crescimento Ativo)',
    tag: 'Momento ideal de ação do laser',
    summary:
      'É a fase em que o pelo está conectado diretamente à raiz (papila dérmica) e possui maior concentração de melanina.',
    laserEffect:
      'A energia do Acrus HTM percorre o fio e cauteriza a estrutura germinativa com precisão, inibindo o novo crescimento.',
  },
  {
    id: 'catagena',
    step: '02',
    name: 'Fase Catágena (Transição)',
    tag: 'Desconexão gradual da raiz',
    summary:
      'O crescimento desacelera e o fio começa a se desprender do folículo, reduzindo o contato térmico com a raiz.',
    laserEffect:
      'Por não estar mais totalmente ligado ao bulbo, esse pelo não responde com máxima eficiência na sessão atual — sendo alcançado nos retornos seguintes.',
  },
  {
    id: 'telogena',
    step: '03',
    name: 'Fase Telógena (Repouso e Queda)',
    tag: 'Renovação de novo ciclo',
    summary:
      'O fio antigo se solta naturalmente enquanto o folículo descansa antes de iniciar um novo ciclo anágeno.',
    laserEffect:
      'Como os pelos não estão todos na mesma fase ao mesmo tempo, as sessões mensais garantem que cada grupo seja atingido na fase anágena.',
  },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatCurrencyBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  });
}
