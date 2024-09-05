import Image from 'next/image';
import Link from 'next/link';
interface FooterLink {
  name: string;
  href: string;
  icon?: string; // Optional icon for the link
  isBeta?: boolean; // Optional flag to indicate if the link is for a beta feature
}

interface FooterCategory {
  categoryTitle: string;
  logo?: string; // Optional logo for the category
  links: FooterLink[]; // Array of links in each category
}

const footerData:FooterCategory[] = [
  {
    categoryTitle: "monday.com",
    logo: "/images/monday-logo.png",
    links: [
      { name: "Pricing", href: "/pricing" },
      { name: "Contact us", href: "/help" },
      { name: "Templates", href: "/templates" },
      { name: "SMB", href: "/smb" },
      { name: "Enterprise", href: "/enterprise" },
      { name: "Nonprofits", href: "/nonprofits" },
      { name: "App marketplace", href: "/marketplace" },
      { name: "24/7 support", href: "/helpcenter/contact-support" },
    ],
  },
  {
    categoryTitle: "Features",
    links: [
      { name: "Docs", href: "/workdocs" },
      { name: "Integrations", href: "/integrations" },
      { name: "Automations", href: "/features/automations" },
      { name: "AI", href: "/w/ai" },
      { name: "Dashboards", href: "/features/dashboards" },
      { name: "Kanban", href: "/features/kanban" },
      { name: "Gantt", href: "/features/gantt" },
    ],
  },
  {
    categoryTitle: "monday products",
    links: [
      {
        name: "monday work management",
        href: "/work-management",
        icon: "/images/Footer_wm_logo.png",
      },
      {
        name: "monday CRM",
        href: "/crm",
        icon: "/images/crm_icon_footer.avif",
      },
      {
        name: "monday dev",
        href: "/dev",
        icon: "/images/dev_new_mobile_footer_logo.avif",
      },
      {
        name: "monday service",
        href: "/w/service",
        icon: "/images/Service-logo-footer.avif",
        isBeta: true,
      },
      {
        name: "WorkCanvas",
        href: "//workcanvas.com",
        icon: "/images/workcanvas_icon_footer.png",
      },
      {
        name: "WorkForms",
        href: "//workforms.com",
        icon: "/images/workforms_icon_footer.avif",
      },
    ],
  },

  {
    categoryTitle: "Use cases",
    links: [
      { name: "Marketing", href: "/work-management/marketing" },
      { name: "Project management", href: "/work-management/pmo" },
      { name: "Sales", href: "/crm" },
      { name: "Developers", href: "/dev" },
      { name: "HR", href: "/use-cases/hr-management-software" },
      { name: "IT", href: "/w/service" },
      { name: "Operations", href: "/operations" },
      { name: "Construction", href: "/construction" },
    ],
  },
  {
    categoryTitle: "Company",
    links: [
      { name: "About us", href: "/p/about/" },
      { name: "Careers - We're hiring!", href: "/careers" },
      { name: "Press", href: "/p/news/" },
      { name: "Customer stories", href: "/customers" },
      { name: "Become a partner", href: "/w/partnership" },
      { name: "Sustainability & ESG", href: "/p/esg/" },
      { name: "Affiliates", href: "/affiliate-program" },
      { name: "Resources", href: "/resources" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full flex relative p-5">
      <nav className="p-0 w-full" aria-label="Footer">
        <div className="flex gap-3 justify-between">
          {footerData.map((category, index) => (
            <div className="" key={index}>
              <div className="flex flex-col gap-4">
                <div className="">
                  {category.logo ? (
                    <div className="logo-wrapper">
                      <Link href="/" >
                        <Image
                          alt={`${category.categoryTitle} logo`}
                          className="footer-logo-image"
                          src={category.logo}
                          width={150}
                          height={40}
                        />
                      </Link>
                    </div>
                  ) : (
                    <div className="text-xl">{category.categoryTitle}</div>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {category.links.map((link, i) => (
                    <div className="link" key={i}>
                      <Link href={link.href} className="hover:text-custom-500 flex gap-3">
                        {link.icon && (
                          <Image
                            alt={`${link.name} icon`}
                            src={link.icon}
                            width={20}
                            height={20}
                          />
                        )}
                        {link.name}
                        {link.isBeta && (
                          <span className="beta-tag text-red-500">{" "} Beta</span>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Footer;
