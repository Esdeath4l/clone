"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
    { title: "Services" },
    { title: "Approach", path: "/approach" },
    { title: "Cases" },
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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 transition-all duration-600 ${sticky ? "top-0 shadow-md bg-white" : "top-[150px] bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-24 py-5 flex items-center justify-between">
        <ul className="hidden sm:flex flex-wrap gap-4 sm:gap-8 text-[#9CA3AF] font-medium relative">
          {navItems.map((item) => {
            const submenu = getSubmenu(item.title);
            if (submenu) {
              return (
                <li key={item.title} className="relative group cursor-pointer pb-2">
                  <div
                    onMouseEnter={() => {
                      setActive(item.title);
                      setHoveredMenu(item.title);
                    }}
                    onMouseLeave={() => {
                      setHoveredMenu(null);
                      setServicesHoverIndex(null);
                    }}
                  >
                    <span className={`hover:text-[#FFD369] ${active === item.title ? "text-[#FFD369]" : ""}`}>
                      {item.title}
                    </span>
                    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-1 -mb-2 transition-opacity duration-300 ${active === item.title && hoveredMenu === item.title ? "opacity-100" : "opacity-0"}`}>
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="w-1 h-1 bg-[#FFD369] rounded-full"></span>
                      ))}
                    </div>
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white text-[#5A5A5A] shadow-lg rounded-md z-50 transition-all duration-300 transform ${active === item.title && hoveredMenu === item.title ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-2"}`}>
                      <div className="relative h-1 w-full mb-2">
                        <span className="absolute top-0 left-1/2 w-0 h-[4px] bg-[#FFD369] rounded transition-all duration-700 origin-center transform -translate-x-1/2 group-hover:w-full group-hover:opacity-100"></span>
                      </div>
                      {item.title === "Services" ? (
                        submenu.map((service, idx) => (
                          <div
                            key={service.title || idx}
                            className="relative px-4 py-2 hover:bg-[#393E46] hover:text-[#FFD369] cursor-pointer text-sm flex justify-between items-center"
                            onMouseEnter={() => setServicesHoverIndex(idx)}
                            onMouseLeave={() => setServicesHoverIndex(null)}
                          >
                            <span>{service.title}</span>
                            <svg className="w-3 h-3 ml-2 fill-[#FFD369]" viewBox="0 0 6 10"><path d="M0 0 L6 5 L0 10 Z" /></svg>
                            {servicesHoverIndex === idx && (
                              <div className="absolute top-0 left-full ml-0 w-52 bg-white shadow-md rounded-md py-2 z-50">
                                {Array.isArray(service.items) && service.items.map((subItem) => (
                                  <button
                                    key={subItem.title}
                                    className="block w-full text-left px-4 py-2 text-sm text-[#222831] hover:bg-[#393E46] hover:text-[#FFD369] rounded"
                                    onClick={() => handleHomeClick(subItem.path)}
                                  >
                                    {subItem.title}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))
                      ) : (
                        submenu.map((subItem) => (
                          <div
                            key={subItem.title}
                            className="px-4 py-2 hover:bg-[#393E46] hover:text-[#FFD369] cursor-pointer text-sm"
                            onClick={() => handleHomeClick(subItem.path)}
                          >
                            {subItem.title}
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li
                key={item.title}
                onClick={() => {
                  setActive(item.title);
                  if (item.path) handleHomeClick(item.path);
                }}
                className="relative group cursor-pointer hover:text-[#FFD369] pb-2"
              >
                <span className={`${active === item.title ? "text-[#FFD369]" : ""}`}>
                  {item.title}
                </span>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-1 -mb-2 transition-opacity duration-300 ${active === item.title ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="w-1 h-1 bg-[#FFD369] rounded-full"></span>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#5A5A5A] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden px-6 mt-4">
            <button className="w-full bg-[#FFD369] text-white py-2 px-4 rounded text-sm">GET A QUOTE</button>
          </div>
        )}
      </div>

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
                        ? submenu.map((section, idx) => (
                            <li key={section.title || idx}>
                              <details className="group">
                                <summary className="flex items-center justify-between py-2 cursor-pointer text-[#FFD369] font-semibold text-sm">
                                  {section.title}
                                  <span className="ml-2 text-xs text-[#5A5A5A] group-open:rotate-180 transition-transform">&#9660;</span>
                                </summary>
                                <ul className="pl-4 mt-1 space-y-1">
                                  {section.items.map((subItem) => (
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
                        : submenu.map((subItem) => (
                            <li
                              key={subItem.title}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                handleHomeClick(subItem.path);
                              }}
                              className="text-[#5A5A5A] font-medium hover:text-[#FFD369]"
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
