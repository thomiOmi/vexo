export interface PageData {
  title: string;
  content?: string;
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
  },
  "/about": {
    template: "Default",
    title: "About Us",
    content: "This is Vexo.",
    layout: "default",
  },
  "/contact": {
    template: "Default",
    title: "Contact Us",
    content: "Get in touch with us at contact@vexo.com",
    layout: "default",
  },
};

export const useVexo = () => {
  const getPage = (path: string): PageData => {
    const data = mockDb[path];
    if (!data) {
      throw createError({
        status: 404,
        statusText: "Page Not Found",
      });
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
