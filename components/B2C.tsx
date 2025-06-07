'use client';
import CountUp from 'react-countup';
const stats = [
    { label: 'BOOKKEEPING PROJECTS', value: 10000 },
    { label: 'TAX RETURNS', value: 75000 },
    { label: 'PEOPLE', value: 160 },
    { label: 'SATISFIED CUSTOMERS', value: 1000 },
    ];

const services = [
    {
        title: "Bookkeeping & Accounting Services",
        description: "Your daily transactional data managed",
        price: "starting at $12* per hour",
        image: "/assets/bookkeeping.jpg", 
    },
    {
        title: "Taxation Services",
        description: "State & Federal taxes",
        price: "starting at $250* per return",
        image: "/assets/taxation.jpg",
    },
    {
        title: "CFO Services",
        description: "For Analysis & Decision Support",
        price: "starting at $500 per month",
        image: "/assets/cfo.jpg",
    },
    {
        title: "Managed Services",
        description: "Payroll, Statutory Compliance’s , Company incorporation’s",
        price: "starting at $12.12 per hour",
        image: "/assets/managed.jpg",
    },
    ];

export default function B2C() {
    return (
        
        <section className="max-w-7xl mx-auto py-16 px-6">
        {/* Heading Line + Small Title:done */}
        <div className="mb-4">
            <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-pink-600"></div>
            <h6 className="uppercase text-sm tracking-widest text-pink-600 font-semibold">
                B2C Customers
            </h6>
            </div>
        </div>

        {/* Bold Main Title :done*/}
        <h2 className="text-5xl font-bold mb-12 pt-2">Served 1000+ customers in these areas…</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
            {services.map((service, index) => (
            <div
                key={index}
                className="flex justify-center">
                <div className="w-full max-w-[400px] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:transition-all duration-300 bg-white">
                <div className="relative">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-100 object-cover"
                />
                <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-4 py-2 text-sm rounded-full hover:bg-pink-700 transition">
                    Request for Quote
                </button>
                </div>
                <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-1">{service.description}</p>
                <p className="text-sm text-gray-700 font-medium">{service.price}</p>
                </div>
                </div>
        </div>
            ))}
        </div>
        {/* This section Uses client */}

        <section className="bg-white py-16 px-4">
        {/* Heading and Button in same row */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
            <h2 className="text-5xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
            And how did we <br className="md:hidden" /> reach here?
            </h2>

    <button className="relative group px-8 py-3 rounded-full border border-pink-600 bg-pink-600 overflow-hidden">
    {/* Background Wipe */}
    <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-720 ease-in-out"></span>

    {/* Button Text */}
    <span className="relative z-10 text-white group-hover:text-pink-600 transition-colors duration-400 font-medium">
        KNOW US
    </span>
    </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
            <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-black">
                <CountUp end={stat.value} duration={3} />
                <span className="text-pink-600">+</span>
                </h3>
                <p className="mt-2 text-sm md:text-base text-gray-700 font-medium uppercase">
                {stat.label}
                </p>
            </div>
            ))}
        </div>
        </section>
        
        </section>
    );
    }