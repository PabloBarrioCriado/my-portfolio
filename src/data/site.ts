/**
 * Global site metadata and navigation.
 */
export const site = {
  name: 'Pablo Barrio Criado', // Puedes poner tus apellidos completos si prefieres
  tagline: 'Data Science & Prescriptive Analytics',
  description:
    'Data Science & Statistical Learning portfolio. Showcasing projects in Predictive Modeling, Survival Analysis, Machine Learning & Deep Learning.',
  
  email: 'pablobarrio.skl@gmail.com', 
  phone: '+34 722 83 81 01', 
  address: 'Spain', 
  
  //  URL de Vercel
  url: 'https://my-portfolio-pied-two-35.vercel.app/', 
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  // He quitado 'Services' para que no salga en el menú
  { label: 'Projects', href: '/blog' }, // Mantenemos la ruta /blog pero mostramos 'Projects'
  { label: 'Contact', href: '/contact' },
];