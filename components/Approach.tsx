'use client';

import {
  FaUserTie,
  FaCogs,
  FaLightbulb,
  FaClock,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaThumbsUp,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Approachs() {
  const sections = [
    {
      icon: <FaUserTie className="text-[#FFD369] text-2xl" />,
      title: 'Expertise',
      description:
        'With concentrated and focused strategies for individual Outsourcing functions, Konnect has built an extremely strong resource pool and a huge database of information and knowledge that we apply to deliver solutions that fulfill the customers requirements, within their budget.',
    },
    {
      icon: <FaChartLine className="text-[#FFD369] text-2xl" />,
      title: 'Business Experience',
      description:
        'Konnect has the Top brass of executives with over two decades of experience across domains. We handle complex projects and provide long-term full-cycle services in Finance, Accounting, IT, and BPO.',
    },
    {
      icon: <FaUsers className="text-[#FFD369] text-2xl" />,
      title: 'Vertical and Domain Expertise',
      description:
        'Konnect’s experience spans multiple industries from financial analysis to medical billing, allowing deep understanding and customized service.',
    },
    {
      icon: <FaCogs className="text-[#FFD369] text-2xl" />,
      title: 'Technology Competence',
      description:
        'We use tools like QuickBooks, Sage, MYOB, and customize solutions across desktop, web, and mobile platforms through Konnect Technologies.',
    },
    {
      icon: <FaHandshake className="text-[#FFD369] text-2xl" />,
      title: 'Client Centric',
      description:
        'From requirement gathering to delivery, Konnect’s functional experts ensure a consultative, personalized approach for each client.',
    },
    {
      icon: <FaLightbulb className="text-[#FFD369] text-2xl" />,
      title: 'Value Creation',
      description:
        'We analyze, refine, and improve your systems/processes to deliver measurable business value and implement strategic changes.',
    },
    {
      icon: <FaClock className="text-[#FFD369] text-2xl" />,
      title: 'Just In Time Approach',
      description:
        'We honor time. Our strong internal delivery processes and project management ensure timely execution.',
    },
    {
      icon: <FaUserTie className="text-[#FFD369] text-2xl" />,
      title: 'Consultative Approach',
      description:
        'Within 72 hours, we analyze client systems virtually or onsite and create improvement strategies with our core consulting team.',
    },
    {
      icon: <FaCogs className="text-[#FFD369] text-2xl" />,
      title: 'Process Oriented',
      description:
        'We follow global best practices like Agile and RUP methodologies ensuring cost-effective and quality delivery.',
    },
    {
      icon: <FaThumbsUp className="text-[#FFD369] text-2xl" />,
      title: 'Qualitative & Competitive',
      description:
        'Konnect offers globally competitive pricing without compromising on quality, aiming to be a standout outsourcing partner.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20" style={{ backgroundColor: '#EEEEEE', color: '#222831' }}>
      <div className="max-w-7xl mx-auto mb-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#222831' }}>
              Konnect Delivery Model
            </h2>
            <p className="text-lg mb-10 leading-relaxed">
              Our Unique Approach to Delivering the Best.
              <br />
              <br />
              The Konnect strategy is built on a universal process of business analysis, charting of accounts, processing, quality assurance, reporting, and analytics. Using this six-step rule, we create a pattern of routine towards holistic business and financial solutions.
              <br />
              <br />
              Various forms of delivery models are employed based on the customer requirements.
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#222831' }}>
              Konnect Approach
            </h2>
            <p className="text-lg leading-relaxed">
              Our unique delivery methods allow us to work with our customers closely, beginning with Pilot to final Milestone of the project. Most of our projects are on Time and Material, where time tracking becomes very important.
              <br />
              <br />
              We use advanced automation & tracking systems to ensure that processing is seamless and on time.
            </p>
          </div>

          {/* YouTube Video Section */}
          <div className="w-full flex flex-col gap-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg shadow-md"
                src="https://www.youtube.com/embed/ZVznzY7EjuY"
                title="YouTube video"
                allowFullScreen
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 sm:h-80 rounded-lg shadow-md"
                src="https://www.youtube.com/embed/ZVznzY7EjuY"
                title="YouTube video 2"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            style={{ backgroundColor: '#393E46' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
          >
            <div className="flex items-center mb-3 gap-4">
              {section.icon}
              <h3 className="text-xl font-semibold" style={{ color: '#FFD369' }}>
                {section.title}
              </h3>
            </div>
            <p className="text-base" style={{ color: '#EEEEEE' }}>
              {section.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
