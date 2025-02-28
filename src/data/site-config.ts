export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Marcelo Santos | @marcelsud',
    description: 'Staff/Principal Engineer | Construindo Soluções Escaláveis, Distribuídas e Orientadas a Eventos',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'Marcelo Santos | @marcelsud | Staff+ Software Engineer'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Sobre mim',
            href: '/about'
        },
        {
            text: 'Contato',
            href: '/contact'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/marcelsud/'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Terms of Service',
            href: '/terms'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download Theme',
            href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Minha página no LinkedIn',
            href: 'https://www.linkedin.com/in/marcelsud',
            icon: 'linkedin'
        },
        {
            text: 'Me siga no X',
            href: 'https://twitter.com/marcelsud',
            icon: 'x-twitter'
        }
    ],
    hero: {
        title: 'Olá, Mundo!',
        text: `
            Meu nome é Marcelo Santos. 
            Sou um engenheiro de software com mais de 20 anos de experiência.
            Atualmente, atuo como Sr Staff Engineer no Will Bank, onde trabalho
            com a construção de soluções escaláveis, distribuídas e orientadas a eventos.
        `,
        avatar: {
            src: '/profile-pic.png',
            alt: 'Marcelo Santos'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    },
    subscribe: {
        title: 'Subscribe to Ovidius Newsletter',
        text: 'One update per week. All the latest news directly in your inbox.',
        formUrl: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0'
    },
    postsPerPage: 5
};

export default siteConfig;
