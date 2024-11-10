'use client'; // This tells Next.js that this component should be treated as a Client Component

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending your message...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Sorry, something went wrong. Please try again later.");
      }
    } catch (error) {
      setStatusMessage("An error occurred while sending the message.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-container w-full min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 ">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Contact Me</h1>
        <p className="text-lg md:text-xl text-gray-800 mt-4">Feel free to reach out to me. I'll get back to you as soon as possible!</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message"
            rows={6}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600'} rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {statusMessage && (
        <div className="mt-4 text-center text-lg font-semibold text-gray-700">
          {statusMessage}
        </div>
      )}
    </div>
  );
}
