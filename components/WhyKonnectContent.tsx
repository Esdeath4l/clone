'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import {
  FaUserTie, FaCogs, FaLightbulb, FaClock,
  FaHandshake, FaChartLine, FaUsers, FaThumbsUp
} from 'react-icons/fa';

// Define types for better TypeScript safety
type Section = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

// Store component references, not JSX
const sections: Section[] = [
  { icon: FaUserTie, title: 'Expertise', description: 'With concentrated and focused strategies for individual Outsourcing functions, Konnect has built an extremely strong resource pool and a huge database of information and knowledge that we apply to deliver solutions that fulfill the customers requirements, within their budget.' },
  { icon: FaChartLine, title: 'Business Experience', description: 'Konnect has the Top brass of executives with over two decades of experience across domains. We handle complex projects and provide long-term full-cycle services in Finance, Accounting, IT, and BPO.' },
  { icon: FaUsers, title: 'Vertical and Domain Expertise', description: 'Konnect’s experience spans multiple industries from financial analysis to medical billing, allowing deep understanding and customized service.' },
  { icon: FaCogs, title: 'Technology Competence', description: 'We use tools like QuickBooks, Sage, MYOB, and customize solutions across desktop, web, and mobile platforms through Konnect Technologies.' },
  { icon: FaHandshake, title: 'Client Centric', description: 'From requirement gathering to delivery, Konnect’s functional experts ensure a consultative, personalized approach for each client.' },
  { icon: FaLightbulb, title: 'Value Creation', description: 'We analyze, refine, and improve your systems/processes to deliver measurable business value and implement strategic changes.' },
  { icon: FaClock, title: 'Just In Time Approach', description: 'We honor time. Our strong internal delivery processes and project management ensure timely execution.' },
  { icon: FaUserTie, title: 'Consultative Approach', description: 'Within 72 hours, we analyze client systems virtually or onsite and create improvement strategies with our core consulting team.' },
  { icon: FaCogs, title: 'Process Oriented', description: 'We follow global best practices like Agile and RUP methodologies ensuring cost-effective and quality delivery.' },
  { icon: FaThumbsUp, title: 'Qualitative & Competitive', description: 'Konnect offers globally competitive pricing without compromising on quality, aiming to be a standout outsourcing partner.' },
];

export default function WhyKonnectContent() {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-28 bg-[#EEEEEE] text-[#222831]">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          We are here to Create Value for your processes — We convert Businesses!
        </h2>
        <p className="text-lg text-[#393E46]">
          Konnect has passionate experts who consult with you to boost your sales, reduce overheads,
          and maximize resource potential — so you can focus on your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, index) => {
          const Icon = section.icon;

          return (
            <motion.div
              key={index}
              {...{
                className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.1, duration: 0.5 }
              } as HTMLMotionProps<'div'>}
            >
              <div className="flex items-center mb-3 gap-3">
                <Icon className="text-[#FFD369] text-2xl" />
                <h3 className="text-xl font-semibold text-[#222831]">{section.title}</h3>
              </div>
              <p className="text-[#393E46]">{section.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}