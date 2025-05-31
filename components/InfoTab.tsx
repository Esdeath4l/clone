export default function InfoTab() {
  return (
    <div className="bg-white text-gray-800 text-sm py-6 flex justify-center border-b border-gray-200">
      <div className="max-w-7xl w-full px-24 flex justify-between items-center">
        {/*  Title:t0 be modified later  */}
        <div className="font-bold text-lg cursor-default select-none">
          Konnect Books
        </div>

      {/* time:done*/}
        <div className="flex space-x-8 items-end">
          <div className="flex flex-col justify-end">
            <span>US Working Time:</span>
            <span className="font-bold text-base">9am - 6pm</span>
          </div>
          <div className="flex flex-col justify-end">
            <span>ES Working Time:</span>
            <span className="font-bold text-base">10am - 7pm</span>
          </div>
          <div className="flex flex-col justify-end">
            <span>Contact:</span>
            <span className="font-bold text-base">contact@konnectbooks.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
