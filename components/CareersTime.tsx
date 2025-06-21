'use client';

export default function CareersSection() {
  const positions = [
    {
      title: 'Position I - KCS-FAO - Accountant - International / Accountant / Accounting',
      description: `Accountant having experience of more than 2 years.
Finalization and monthly closing of accounts.
Understanding of International accounting standard will be an added advantage.
To handle day to day accounting of International Client.
Strong accounting background. Masters in accounting.
Minimum 1 year experience in tally or any other software.
Good communication and writing skills.`,
    },
    {
      title: 'Position II - KCS-FAO - Business Development Executive - International Sales',
    },
    {
      title: 'Position IV - KCS - Operations Manager',
    },
    {
      title: 'Position VI - KT - Business Consultant/ Business Analyst - HCM/Payroll',
    },
  ];

  return (
    <section className="bg-[#EEEEEE] py-20 px-4 sm:px-6 lg:px-20 text-[#222831]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left: Timeline Section */}
        <div className="lg:w-2/3 w-full">
          <h2 className="text-4xl font-bold text-[#222831] mb-10">Open Positions</h2>

          <div className="relative mt-4 pl-6">
            {positions.map((item, index) => (
              <div key={index} className="relative pb-12 last:pb-0">
                {/* Dot */}
                <div className="absolute left-0 top-1">
                  <div className="w-4 h-4 bg-[#FFD369] rounded-full border-4 border-white shadow-md" />
                </div>

                {/* Line */}
                {index !== positions.length - 1 && (
                  <div className="absolute left-[7px] top-5 h-full w-[2px] border-l-2 border-dotted border-[#FFD369] z-0" />
                )}

                {/* Content */}
                <div className="ml-6 space-y-2 relative z-10">
                  <p className="text-md font-semibold text-[#222831]">{item.title}</p>
                  {item.description && (
                    <p className="text-[#393E46] text-sm whitespace-pre-line">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Apply Form */}
        <div className="lg:w-1/3 w-full bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#222831] mb-4">
            Apply Here! We'll get back to you within 48 hours.
          </h3>
          <form className="space-y-4">
            {[
              { label: 'Position Applied', type: 'text' },
              { label: 'Your Name', type: 'text' },
              { label: 'Your Email', type: 'email' },
              { label: 'Contact Number', type: 'text' },
            ].map(({ label, type }, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium">{label}</label>
                <input type={type} className="w-full mt-1 px-4 py-2 border rounded focus:outline-[#FFD369]" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium">Resume Upload</label>
              <input type="file" className="mt-1" />
            </div>
            <div>
              <label className="block text-sm font-medium">Your Details</label>
              <textarea className="w-full mt-1 px-4 py-2 border rounded focus:outline-[#FFD369]" rows={3}></textarea>
            </div>
           <div>
  <label className="block text-sm font-medium">Captcha</label>
  <div className="mt-1 mb-2 px-4 py-2 bg-[#393E46] text-[#FFD369] font-bold tracking-widest rounded w-fit">
    X7K9P
  </div>
  <input type="text" placeholder="Enter Captcha Shown Above" className="w-full mt-1 px-4 py-2 border rounded focus:outline-[#FFD369]" />
</div>

            <button
              type="submit"
              className="w-full bg-[#FFD369] text-[#222831] font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
