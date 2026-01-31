export interface PageBlock {
  type: string;
  data: Record<string, unknown>;
}

export interface PageData {
  title: string;
  blocks?: PageBlock[]; // Replaces content
  meta?: {
    description?: string;
    image?: string;
  };
  template: string;
  layout?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  mainMenu: NavItem[];
}

const mockSiteConfig: SiteConfig = {
  name: "Vexo Enterprise",
  description: "The fast headless CMS",
  mainMenu: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ],
};

const mockDb: Record<string, PageData> = {
  "/": {
    template: "Home",
    title: "Welcome to Vexo",
    layout: "default",
    meta: {
      description: "Welcome to Vexo Enterprise - The future of headless CMS.",
    },
    blocks: [
      {
        type: "Hero",
        data: {
          title: "Future of CMS",
          subtitle: "Built with Nuxt Layers",
        },
      },
      {
        type: "FeatureList",
        data: {
          items: ["Fast", "Modular", "Typed"],
        },
      },
    ],
  },
  "/about": {
    template: "Default",
    title: "About Us",
    layout: "default",
    meta: {
      description: "Learn more about Vexo and our mission to simplify content management.",
    },
    blocks: [
      {
        type: "Content",
        data: {
          html: "This is Vexo.",
        },
      },
    ],
  },
  "/contact": {
    template: "Default",
    title: "Contact Us",
    layout: "default",
    blocks: [
      {
        type: "Content",
        data: {
          html: "Get in touch with us at contact@vexo.com",
        },
      },
    ],
  },
  "/services": {
    template: "Default",
    title: "Our Services",
    layout: "default",
    blocks: [
      {
        type: "Content",
        data: {
          html: "We offer top-notch CMS solutions.",
        },
      },
    ],
  },
};

export const useVexo = () => {
  const getPage = (path: string): PageData | null => {
    const data = mockDb[path];
    if (!data) {
      return null;
    }
    return data;
  };

  const getSiteConfig = (): SiteConfig => {
    return mockSiteConfig;
  };

  return {
    getPage,
    getSiteConfig,
  };
};
