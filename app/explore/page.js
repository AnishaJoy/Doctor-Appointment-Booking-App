export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        How Our Doctor Appointment System Works 🩺
      </h1>

      {/* Intro */}
      <p className="max-w-3xl text-center text-gray-700 text-lg leading-relaxed mb-10">
        Our platform makes booking doctor appointments simple, fast, and
        reliable. From finding the right specialist to managing your bookings,
        we’ve streamlined the entire process for your convenience.
      </p>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            1️⃣ Browse Specializations
          </h2>
          <p className="text-gray-600">
            On the landing page, explore a variety of doctor specializations.
            Click on a category to view a list of doctors offering that service.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-green-500">
          <h2 className="text-xl font-semibold text-green-600 mb-2">
            2️⃣ Choose & Book
          </h2>
          <p className="text-gray-600">
            Select a doctor from the category list or directly from the landing
            page. View their details, available times, and book your
            appointment in just a few clicks. (Login required)
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border-t-4 border-purple-500">
          <h2 className="text-xl font-semibold text-purple-600 mb-2">
            3️⃣ Manage Your Appointments
          </h2>
          <p className="text-gray-600">
            Once booked, you’ll receive a confirmation email. You can also view
            and manage your upcoming appointments from the “My Booking” page —
            including the ability to cancel if needed.
          </p>
        </div>
      </div>

      {/* Closing Note */}
      <p className="mt-12 text-gray-500 text-center max-w-2xl">
        We’re here to make healthcare access easier for you — anytime, anywhere.
        Start exploring and book your next appointment with confidence!
      </p>
    </div>
  );
}
