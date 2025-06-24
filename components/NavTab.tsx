"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, HTMLMotionProps } from "framer-motion";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("Home");
  const [servicesHoverIndex, setServicesHoverIndex] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 96);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { title: "Home", path: "/home" },
    { title: "About Us" },
    { title: "Services", path: "/services" },
    { title: "Approach", path: "/approach" },
    { title: "Cases", path: "/cases" },
    { title: "Our Blog", path: "/ourblogs" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const aboutUsSubmenu = [
    { title: "About Us", path: "/about" },
    { title: "Why Konnect", path: "/about/why-konnect" },
    { title: "Careers", path: "/about/careers" },
    { title: "Corporate Events", path: "/about/corporate-events" },
  ];

  const servicesSubmenu = [
    {
      title: "Finance and Accounting",
      items: [
        { title: "Accounting", path: "/services/finance/accounting" },
        { title: "Bookkeeping Services", path: "/services/finance/bookkeeping" },
        { title: "Cash Flow Management", path: "/services/finance/cash-flow" },
        { title: "Financial Reporting", path: "/services/finance/financial-reporting" },
        { title: "Reconciliation Services", path: "/services/finance/reconciliation" },
        { title: "Taxation", path: "/services/finance/taxation" },
        { title: "M&A Advisory Services", path: "/services/finance/ma-advisory" },
      ],
    },
    {
      title: "Business Process and Outsourcing",
      items: [
        { title: "Customer Order Processing", path: "/services/bpo/order-processing" },
        { title: "Payroll Processing", path: "/services/bpo/payroll" },
      ],
    },
  ];

  const casesSubmenu = [
    { title: "Aqua sprout LLC", path: "/cases/aqua-sprout-llc" },
    { title: "Fisher Business Management", path: "/cases/fisher-business" },
    { title: "Golden Crown Panaderia", path: "/cases/golden-crown" },
    { title: "Mark Aron", path: "/cases/mark-aron" },
    { title: "coe & coe", path: "/cases/coe-and-coe" },
    { title: "Fair Pattern", path: "/cases/fair-pattern" },
    { title: "NYC", path: "/cases/nyc" },
    { title: "The Naked Dog Shop", path: "/cases/naked-dog-shop" },
  ];

  const handleHomeClick = (path: string) => {
    if (path === "/home" || path === "/") window.location.href = "/";
    else router.push(path);
  };

  const getSubmenu = (title: string) => {
    switch (title) {
      case "About Us": return aboutUsSubmenu;
      case "Services": return servicesSubmenu;
      case "Cases": return casesSubmenu;
      default: return null;
    }
  };

  return (
    <motion.nav
      {...{
        initial: { y: -50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
        className: `fixed left-0 right-0 z-50 transition-all duration-600 ${
          sticky ? "top-0 shadow-md bg-white" : "top-[150px] bg-transparent"
        }`,
      } as HTMLMotionProps<"nav">}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 py-5 flex items-center justify-between">
        <ul className="hidden sm:flex flex-wrap gap-4 sm:gap-8 text-[#9CA3AF] font-medium relative">
          {navItems.map((item) => {
            const submenu = getSubmenu(item.title);
            const hasMainPath = !!item.path;
            const isActive = active === item.title;

            return (
              <li
                key={item.title}
                className="relative group cursor-pointer pb-2"
                onMouseEnter={() => {
                  setHoveredMenu(item.title);
                  if (item.title === "Services") setServicesHoverIndex(null);
                }}
                onMouseLeave={() => {
                  setHoveredMenu(null);
                  setServicesHoverIndex(null);
                }}
                onClick={() => {
                  setActive(item.title);
                  if (hasMainPath) handleHomeClick(item.path!);
                }}
              >
                <span className={`hover:text-[#FFD369] ${isActive ? "text-[#FFD369]" : ""}`}>
                  {item.title}
                </span>
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white text-[#5A5A5A] shadow-lg rounded-md z-50 transition-all duration-300 transform ${
                  hoveredMenu === item.title ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-2"
                }`}>
                  {item.title === "Services" ? (
                    (submenu as any[]).map((service: any, idx: number) => (
                      <div
                        key={service.title}
                        className="relative px-4 py-2 hover:bg-[#393E46] hover:text-[#FFD369] cursor-pointer text-sm flex justify-between items-center"
                        onMouseEnter={() => setServicesHoverIndex(idx)}
                      >
                        <span>{service.title}</span>
                        <svg className="w-3 h-3 ml-2 fill-[#FFD369]" viewBox="0 0 6 10"><path d="M0 0 L6 5 L0 10 Z" /></svg>
                        {servicesHoverIndex === idx && (
                          <div className="absolute top-0 left-full ml-0 w-52 bg-white shadow-md rounded-md py-2 z-50">
                            {service.items.map((subItem: any) => (
                              <div
                                key={subItem.title}
                                role="button"
                                tabIndex={0}
                                className="px-4 py-2 text-sm text-[#222831] hover:bg-[#393E46] hover:text-[#FFD369] cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleHomeClick(subItem.path);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") handleHomeClick(subItem.path);
                                }}
                              >
                                {subItem.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    submenu?.map((subItem: any) => (
                      <div
                        key={subItem.title}
                        className="px-4 py-2 hover:bg-[#393E46] hover:text-[#FFD369] cursor-pointer text-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleHomeClick(subItem.path);
                        }}
                      >
                        {subItem.title}
                      </div>
                    ))
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#5A5A5A]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md px-6 py-4 absolute top-full left-0 w-full z-50 max-h-[70vh] overflow-y-auto">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const submenu = getSubmenu(item.title);
              return (
                <li key={item.title} className="text-[#5A5A5A] font-medium">
                  <div
                    onClick={() => {
                      if (item.path) {
                        handleHomeClick(item.path);
                        setIsMobileMenuOpen(false);
                      }
                    }}
                    className={`cursor-pointer ${submenu ? "font-semibold" : ""}`}
                  >
                    {item.title}
                  </div>
                  {submenu && (
                    <ul className="ml-4 mt-2 space-y-2 text-sm text-[#5A5A5A]">
                      {item.title === "Services"
                        ? (submenu as any[]).map((section: any, idx: number) => (
                            <li key={section.title || idx}>
                              <details className="group">
                                <summary className="flex items-center justify-between py-2 cursor-pointer text-[#FFD369] font-semibold text-sm">
                                  {section.title}
                                  <span className="ml-2 text-xs text-[#5A5A5A] group-open:rotate-180 transition-transform">&#9660;</span>
                                </summary>
                                <ul className="pl-4 mt-1 space-y-1">
                                  {section.items.map((subItem: any) => (
                                    <li
                                      key={subItem.title}
                                      onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        handleHomeClick(subItem.path);
                                      }}
                                      className="text-sm text-[#5A5A5A] hover:text-[#FFD369] cursor-pointer"
                                    >
                                      {subItem.title}
                                    </li>
                                  ))}
                                </ul>
                              </details>
                            </li>
                          ))
                        : submenu.map((subItem: any) => (
                            <li
                              key={subItem.title}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                handleHomeClick(subItem.path);
                              }}
                              className="text-[#5A5A5A] font-medium hover:text-[#FFD369] cursor-pointer"
                            >
                              {subItem.title}
                            </li>
                          ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
