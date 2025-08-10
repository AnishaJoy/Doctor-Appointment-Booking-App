"use client"
import { useState } from "react";

export default function ContactUs() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Please wait...");
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "f9704085-e20d-409b-b66b-63ea634c8f90"); // Web3Forms access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResult("Form submitted successfully ✅");
        e.target.reset();
      } else {
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
    } finally {
      setLoading(false);
      setTimeout(() => setResult(""), 3000);
    }
  };

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
            <p className="text-gray-600">Rashbihari Avenue, Kolkata, India</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">✉ Email</h2>
            <p className="text-gray-600">welloraofficial2025@gmail.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6 max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-500">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            ></textarea>
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--button-primary-color)] text-white text-base py-2 rounded-lg cursor-pointer hover:transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {result && (
            <p className="mt-4 text-center text-sm text-gray-600">{result}</p>
          )}
        </div>
      </div>
    </div>
  );
}
