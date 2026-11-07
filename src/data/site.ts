export const site = {
  name: 'Hernández Abogados',
  legalName: 'Hernández Abogados S.L.P.',
  founded: 2001,
  city: 'Valencia',
  address: {
    street: 'Calle de la Paz, 23, 3.º',
    postalCode: '46003',
    city: 'Valencia',
    region: 'Comunidad Valenciana',
    country: 'España',
  },
  phone: '+34 963 21 40 18',
  phoneHref: '+34963214018',
  fax: '+34 963 21 40 19',
  email: 'despacho@hernandezabogados.es',
  hours: 'Lunes a viernes · 9:00–14:00 / 16:00–19:00',
  ica: 'Ilustre Colegio de Abogados de Valencia',
  icaNumbers: '8.421 y 8.422',
  linkedin: '#',
  maps: 'https://maps.google.com/?q=Calle+de+la+Paz+23+Valencia',
} as const;

export const nav = [
  { href: '#despacho', label: 'El despacho' },
  { href: '#areas', label: 'Áreas' },
  { href: '#casos', label: 'Casos' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#contacto', label: 'Contacto' },
] as const;

export const stats = [
  { value: '25', suffix: '', label: 'años de ejercicio' },
  { value: '2', suffix: '', label: 'socios fundadores' },
  { value: '5', suffix: '', label: 'áreas de práctica' },
  { value: '1.800', suffix: '+', label: 'asuntos atendidos' },
] as const;

export interface PracticeArea {
  id: string;
  title: string;
  brief: string;
  description: string;
  services: string[];
}

export const areas: PracticeArea[] = [
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    brief: 'Despidos, reclamaciones y negociación',
    description:
      'Defendemos a trabajadores y a empresas en conflictos individuales y colectivos. Analizamos el caso, medimos el riesgo real y elegimos la vía que mejor protege tus intereses: negociación, conciliación o juicio.',
    services: [
      'Despidos improcedentes, nulos y objetivos',
      'Reclamaciones de cantidad, horas y complementos',
      'Acoso laboral y vulneración de derechos',
      'Incapacidad, prestaciones y Seguridad Social',
      'Negociación colectiva y expedientes de regulación',
    ],
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    brief: 'Defensa en instrucción y juicio',
    description:
      'La defensa penal exige discreción, anticipación y una lectura precisa del expediente. Acompañamos al cliente desde la primera diligencia hasta la sentencia, coordinando peritos y prueba técnica cuando el caso lo requiere.',
    services: [
      'Delitos económicos y societarios',
      'Apropiación indebida, estafa y falsedad',
      'Delitos contra la seguridad vial',
      'Delitos contra las personas y el patrimonio',
      'Asistencia al detenido y en comparecencia',
    ],
  },
  {
    id: 'civil',
    title: 'Derecho Civil y Familia',
    brief: 'Familia, herencias y contratos',
    description:
      'Los asuntos civiles afectan a la vida entera de una persona. Trabajamos con un enfoque que prioriza el acuerdo cuando es posible y prepara el litigio cuando no lo es, sin alargar procesos que pueden resolverse antes.',
    services: [
      'Divorcios, separaciones y medidas matrimoniales',
      'Custodia, alimentos y régimen de visitas',
      'Herencias, particiones y testamentos',
      'Contratos, arrendamientos y comunidad de bienes',
      'Reclamaciones de daños y responsabilidad civil',
    ],
  },
  {
    id: 'mercantil',
    title: 'Derecho Mercantil',
    brief: 'Empresa, socios y contencioso',
    description:
      'Asesoramos a empresas familiares y a sociedades en crecimiento en las decisiones que comprometen su futuro: quién entra, quién sale, cómo se reparte el capital y cómo se resuelve un conflicto sin destruir el negocio.',
    services: [
      'Constitución de sociedades y pactos de socios',
      'Reclamación de deudas e incumplimientos',
      'Responsabilidad de administradores',
      'Reestructuraciones y salidas de socios',
      'Asesoría mercantil continuada',
    ],
  },
  {
    id: 'administrativo',
    title: 'Derecho Administrativo',
    brief: 'Urbanismo, licencias y sanciones',
    description:
      'Relacionarse con la Administración exige método y plazos. Revisamos expedientes, preparamos alegaciones y recursos, y defendemos al cliente frente a sanciones, licencias o decisiones urbanísticas que le afectan.',
    services: [
      'Urbanismo, planeamiento y licencias',
      'Sanciones administrativas y recursos',
      'Contratación pública y responsabilidad patrimonial',
      'Expropiaciones y valoraciones',
      'Medio ambiente y disciplina urbanística',
    ],
  },
];

export interface CaseStudy {
  area: string;
  year: string;
  title: string;
  description: string;
  result: string;
}

export const cases: CaseStudy[] = [
  {
    area: 'Laboral',
    year: '2024',
    title: 'Despido objetivo declarado improcedente',
    description:
      'Defensa de un director de operaciones tras una reestructuración en la que la empresa no acreditó las causas organizativas alegadas.',
    result: 'Indemnización de 78.400 € reconocida en sentencia firme.',
  },
  {
    area: 'Penal económico',
    year: '2023',
    title: 'Absolución tras dos años de instrucción',
    description:
      'Defensa de un administrador acusado de apropiación indebida. La acusación se apoyaba en documentación contable incompleta.',
    result: 'Sentencia absolutoria de la Audiencia Provincial por falta de prueba de cargo.',
  },
  {
    area: 'Mercantil',
    year: '2025',
    title: 'Salida ordenada de un socio sin llegar a juicio',
    description:
      'Negociación de un protocolo familiar y reestructuración de participaciones en una empresa de 32 empleados.',
    result: 'Acuerdo cerrado en 11 semanas, con continuidad del negocio y sin litigio.',
  },
  {
    area: 'Civil',
    year: '2022',
    title: 'Reparto de una herencia con cuatro herederos',
    description:
      'Partición de un patrimonio con tres inmuebles y una sociedad familiar, con posiciones inicialmente muy enfrentadas.',
    result: 'Acuerdo extrajudicial que evitó una partición judicial de más de dos años.',
  },
];

export interface Lawyer {
  name: string;
  role: string;
  area: string;
  bio: string;
  credentials: string[];
  quote: string;
  image: 'alvaro' | 'javier';
}

export const lawyers: Lawyer[] = [
  {
    name: 'Álvaro Hernández Ferrer',
    role: 'Socio fundador',
    area: 'Laboral y Mercantil',
    bio: 'Licenciado en Derecho por la Universitat de València y máster en Derecho del Trabajo. Antes de fundar el despacho en 2001, trabajó ocho años en un bufete de ámbito nacional. Dirige el área laboral y la asesoría continuada de empresas.',
    credentials: [
      'Colegiado n.º 8.421 del ICAV',
      'Máster en Derecho del Trabajo',
      'Mediador civil y mercantil',
    ],
    quote: 'Un buen acuerdo empieza por saber exactamente dónde está tu posición.',
    image: 'alvaro',
  },
  {
    name: 'Javier Hernández Ferrer',
    role: 'Socio fundador',
    area: 'Penal y Civil',
    bio: 'Licenciado en Derecho por la Universitat de València y especialista en Derecho Penal Económico. Compatibiliza la defensa penal con el derecho de familia y las herencias. Formación continua en litigación oral y técnicas de negociación.',
    credentials: [
      'Colegiado n.º 8.422 del ICAV',
      'Especialista en Derecho Penal Económico',
      'Formación en litigación oral',
    ],
    quote: 'Escuchar es la primera herramienta del oficio. Lo demás viene después.',
    image: 'javier',
  },
];

export const steps = [
  {
    title: 'Primera conversación',
    text: 'Cuarenta y cinco minutos para escucharte, ordenar los hechos y decirte con claridad si tenemos algo que hacer. Sin coste y sin compromiso.',
  },
  {
    title: 'Diagnóstico y plan',
    text: 'Estudiamos la documentación y te entregamos por escrito las vías posibles, los plazos, los riesgos y el coste. Antes de actuar, sabes cuánto cuesta.',
  },
  {
    title: 'Estrategia y acción',
    text: 'Negociamos cuando conviene negociar y litigamos cuando conviene litigar. Tú decides con información; nosotros ejecutamos con oficio.',
  },
  {
    title: 'Seguimiento y cierre',
    text: 'Informamos de cada hito relevante, sin tecnicismos innecesarios. El asunto termina cuando queda cerrado, no cuando se dicta la sentencia.',
  },
] as const;

export const faqs = [
  {
    q: '¿Cuánto cuesta la primera consulta?',
    a: 'La primera conversación de 45 minutos es gratuita. Sirve para valorar el asunto y explicarte si podemos ayudarte. Si el caso requiere un estudio documental previo, te lo diremos antes de empezar y te indicaremos el coste.',
  },
  {
    q: '¿Cómo se calculan los honorarios?',
    a: 'Siempre por escrito y antes de actuar. Podemos trabajar con un honorario fijo por actuación, por horas o con una cuota mensual para empresas. No emitimos minutas sin presupuesto aceptado y no cobramos por gestiones que no hayamos acordado.',
  },
  {
    q: 'Ya tengo abogado. ¿Puedo cambiar?',
    a: 'Sí. La elección de abogado es libre y el cambio es más sencillo de lo que parece. Nos encargamos de solicitar el traslado del expediente y de coordinar la transición para que no se pierda ningún plazo.',
  },
  {
    q: '¿Cómo protegen mi confidencialidad?',
    a: 'El secreto profesional nos obliga desde la primera conversación, incluso si finalmente no trabajamos juntos. Custodiamos la documentación con acceso restringido y tratamos los datos conforme al RGPD y a la normativa del Colegio de Abogados.',
  },
  {
    q: '¿Atienden clientes de fuera de Valencia?',
    a: 'Sí. Atendemos por videollamada a clientes de toda España y nos desplazamos cuando el asunto lo requiere. Muchos procedimientos pueden seguirse íntegramente a distancia.',
  },
  {
    q: '¿Trabajan con empresas?',
    a: 'Sí, con empresas familiares y pymes de entre 5 y 200 empleados. Ofrecemos asesoría laboral y mercantil continuada, revisión de contratos y acompañamiento en decisiones societarias.',
  },
] as const;

export const channels = [
  { label: 'Dirección', value: 'Calle de la Paz, 23, 3.º · 46003 Valencia', href: site.maps, icon: 'pin' },
  { label: 'Teléfono', value: site.phone, href: `tel:${site.phoneHref}`, icon: 'phone' },
  { label: 'Fax', value: site.fax, href: undefined, icon: 'fax' },
  { label: 'Correo electrónico', value: site.email, href: `mailto:${site.email}`, icon: 'mail' },
  { label: 'Horario', value: site.hours, href: undefined, icon: 'clock' },
] as const;
