export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-cyan-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Have questions, feedback, or need assistance? We’re here to help you!
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p className="text-gray-600">123 HealthCare Street, City, Country</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">✉ Email</h2>
            <p className="text-gray-600">support@doctorbooking.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-500">Send Us a Message</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[var(--button-primary-color)] text-white text-base py-2 rounded-lg cursor-pointer hover:transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

