'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function OurBlogComponent() {
  return (
    <>
      {/* Shared Styles */}
      {[
        {
          date: "NOVEMBER 09 2022",
          title: "Payroll In QBO",
          description: `As a company, you don’t just get to enjoy income coming in, you also have to deal with your expenses.
One of your main expenses will be paying people who are your employees or contractors.
QuickBooks Online gives you a way to handle your payroll, however it is currently included as an add-on, much like ...`,
          link: "/ourblogs/payrollblog"
        },
        {
          date: "October 29 2024",
          title: "12 Essential Steps Every CPA Should Take to Prepare for Tax Season",
          description: `Tax season may come just once a year, but preparing for it should be an ongoing process for CPAs. 
By planning ahead and keeping key considerations in mind, you can ensure a smoother, more efficient tax season when the time arrives. 
Taking time now to streamline your processes, improve client communication, and review the latest ...`,
          link: "/ourblogs/essentialsteps"
        },
        {
          date: "October 06 2024",
          title: "The Hidden Complexity of Tax Season – A Guide for CPAs and Seasoned Tax Professionals",
          description: `Tax season: a time synonymous with long hours, high pressure, and meticulous attention to detail. 
For tax accountants, CPAs, and business owners, it’s a critical period when the demands of clients and the intricacies of tax regulations converge, making the margin for error razor-thin. 
But is tax season just about survival, or can it be ...`,
          link: "/ourblogs/hiddencomplexity"
        }
      ].map((blog, index) => (
        <div key={index} className="bg-[#EEEEEE] min-h-screen flex items-center justify-center p-4">
          <div className="max-w-3xl w-full bg-[#27374D] rounded-lg shadow-lg overflow-hidden">
            {/* Top Bar */}
            <div className="w-full px-4 py-2 flex justify-between items-center text-sm text-[#F1F5F9] border-b border-[#394867]">
              <div className="flex items-center space-x-3 flex-wrap">
                <span>{blog.date}</span>
                <Link href="/admin" className="hover:underline font-medium hover:text-[#FFD369] transition">ADMIN</Link>
                <span className="text-[#FFD369]">|</span>
                <Link href="/finance" className="hover:underline font-medium hover:text-[#FFD369] transition">FINANCE</Link>
                <span className="text-[#FFD369]">|</span>
                <Link href="/hr" className="hover:underline font-medium hover:text-[#FFD369] transition">HR</Link>
              </div>
            </div>

            {/* Image Block */}
            <div className="relative">
              <Image
                src="/assets/payroll-image.jpg"
                alt="Payroll Image"
                width={800}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-white text-5xl font-bold tracking-wide">PAYROLL</h1>
              </div>
            </div>

            {/* Text Content */}
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4 text-[#FFD369]">{blog.title}</h1>
              <p className="text-[#F1F5F9] text-sm mb-6 whitespace-pre-line">{blog.description}</p>
              <Link href={blog.link}>
                <button className="bg-[#FFD369] text-[#1F2A40] font-semibold px-6 py-2 rounded-full hover:bg-[#e6bd50] transition">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
