'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState('Home');
  const [servicesHoverIndex, setServicesHoverIndex] = useState<number | null>(null);
  const [submenuHover, setSubmenuHover] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 96);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { title: 'Home', path: '/home' },
    { title: 'About Us' },
    { title: 'Services' },
    { title: 'Approach', path: '/home/approach' },
    { title: 'Cases' },
    { title: 'Our Blog', path: '/home/ourblogs' },
    { title: 'Contact Us', path: '/home/contact-us' },
  ];

  const aboutUsSubmenu = [
    { title: 'About Us', path: '/about' },
    { title: 'Why Konnect', path: '/why-konnect' },
    { title: 'Careers', path: '/careers' },
    { title: 'Corporate Events', path: '/corporate-events' },
  ];

  const servicesSubmenu = [
    {
      title: 'Finance and Accounting',
      items: [
        { title: 'Accounting', path: '/services/finance/accounting' },
        { title: 'Bookkeeping Services', path: '/services/finance/bookkeeping' },
        { title: 'Cash Flow Management', path: '/services/finance/cash-flow' },
        { title: 'Financial Reporting', path: '/services/finance/financial-reporting' },
        { title: 'Reconciliation Services', path: '/services/finance/reconciliation' },
        { title: 'Taxation', path: '/services/finance/taxation' },
        { title: 'M&A Advisory Services', path: '/services/finance/ma-advisory' },
      ],
    },
    {
      title: 'Business Process and Outsourcing',
      items: [
        { title: 'Customer Order Processing', path: '/services/bpo/order-processing' },
        { title: 'Payroll Processing', path: '/services/bpo/payroll' },
      ],
    },
  ];

  const casesSubmenu = [
    { title: 'Aqua sprout LLC', path: '/cases/aqua-sprout-llc' },
    { title: 'Fisher Business Management', path: '/cases/fisher-business' },
    { title: 'Golden Crown Panaderia', path: '/cases/golden-crown' },
    { title: 'Mark Aron', path: '/cases/mark-aron' },
    { title: 'coe & coe', path: '/cases/coe-and-coe' },
    { title: 'Fair Pattern', path: '/cases/fair-pattern' },
    { title: 'NYC', path: '/cases/nyc' },
    { title: 'The Naked Dog Shop', path: '/cases/naked-dog-shop' },
  ];

const handleNavigate = (path: string) => {
  if (path === '/home') {
    window.location.reload();
  } else {
    router.push(path);
  }
};


  const getSubmenu = (title: string) => {
    switch (title) {
      case 'About Us':
        return aboutUsSubmenu;
      case 'Services':
        return servicesSubmenu;
      case 'Cases':
        return casesSubmenu;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-600 ${
          sticky ? 'top-0 shadow-md bg-white' : 'top-[150px] bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-24 py-5 flex items-center justify-between">
          <ul className="flex space-x-8 text-gray-800 font-medium relative">
            {navItems.map((item) => {
              const submenu = getSubmenu(item.title);

              if (submenu) {
                return (
                  <li
                    key={item.title}
                    className="relative group cursor-pointer pb-2"
                    onMouseEnter={() => {
                      setActive(item.title);
                      setSubmenuHover(true);
                    }}
                    onMouseLeave={() => {
                      setSubmenuHover(false);
                      setServicesHoverIndex(null);
                    }}
                  >
                    <span className={`hover:text-pink-600 ${active === item.title ? 'text-pink-600' : ''}`}>
                      {item.title}
                    </span>
                    {/* Dots */}
                    <div
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-1 -mb-2 transition-opacity duration-300 ${
                        active === item.title && submenuHover ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="w-1 h-1 bg-pink-600 rounded-full"></span>
                      ))}
                    </div>

                    {/* Submenu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 shadow-lg rounded-md z-50 transition-all duration-300 transform ${
                        active === item.title && submenuHover
                          ? 'opacity-100 pointer-events-auto translate-y-0'
                          : 'opacity-0 pointer-events-none translate-y-2'
                      }`}
                      onMouseEnter={() => setSubmenuHover(true)}
                      onMouseLeave={() => {
                        setSubmenuHover(false);
                        setServicesHoverIndex(null);
                      }}
                    >
                      <div className="relative h-1 w-full mb-2">
                        <span className="absolute top-0 left-1/2 w-0 h-[4px] bg-pink-600 rounded transition-all duration-700 origin-center transform -translate-x-1/2 group-hover:w-full group-hover:opacity-100"></span>
                      </div>

                      {item.title === 'Services' ? (
                        submenu.map((service, idx) => (
                          <div
                            key={service.title}
                            className="relative px-4 py-2 hover:bg-pink-100 hover:text-pink-600 cursor-pointer text-sm flex justify-between items-center"
                            onMouseEnter={() => setServicesHoverIndex(idx)}
                            onMouseLeave={() => setServicesHoverIndex(null)}
                          >
                            <span>{service.title}</span>
                            <svg className="w-3 h-3 ml-2 fill-pink-600" viewBox="0 0 6 10">
                              <path d="M0 0 L6 5 L0 10 Z" />
                            </svg>

                            {servicesHoverIndex === idx && (
                              <div className="absolute top-0 left-full ml-0 w-52 bg-white shadow-md rounded-md py-2 z-50">
                                {service.items.map((subItem) => (
                                  <button
                                    key={subItem.title}
                                    className="block w-full text-left px-4 py-2 text-sm text-pink-600 hover:bg-pink-100 rounded"
                                    onClick={() => handleNavigate(subItem.path)}
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
                            className="px-4 py-2 hover:bg-pink-100 hover:text-pink-600 cursor-pointer text-sm"
                            onClick={() => handleNavigate(subItem.path)}
                          >
                            {subItem.title}
                          </div>
                        ))
                      )}
                    </div>
                  </li>
                );
              }

              return (
                <li
                  key={item.title}
                  onClick={() => {
                    setActive(item.title);
                    if (item.path) handleNavigate(item.path);
                  }}
                  className="relative group cursor-pointer hover:text-pink-600 pb-2"
                >
                  <span className={`${active === item.title ? 'text-pink-600' : ''}`}>
                    {item.title}
                  </span>
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-1 -mb-2 transition-opacity duration-300 ${
                      active === item.title ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="w-1 h-1 bg-pink-600 rounded-full"></span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>

          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded">
            GET A QUOTE
          </button>
        </div>
      </nav>

      <div className="relative z-10 flex items-center justify-start h-full px-56">
        <div className="max-w-lg w-full text-white text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to Konnect Books
          </h1>

          <h6 className="text-lg font-light mb-8 text-gray-200">
            from SMEs and CPAs
          </h6>

          <div className="flex justify-start gap-4">
            <button className="relative inline-block text-white font-semibold py-3 px-8 rounded overflow-hidden transition-all duration-500 bg-pink-600 hover:text-white group">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-y-0 left-1/2 w-0 group-hover:w-full bg-pink-700 transition-all duration-500 origin-center transform -translate-x-1/2 rounded"></span>
            </button>

            <button className="relative inline-block text-white font-semibold py-3 px-8 border-2 border-white rounded overflow-hidden group">
              <span className="relative z-10 group-hover:text-white transition-all duration-500">
                Learn More
              </span>
              <span className="absolute inset-0 w-0 group-hover:w-full bg-pink-600 transition-all duration-500 rounded"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
