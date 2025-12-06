import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تضيف منطق ارسال البيانات (API أو EmailJS)
    console.log(formData);
    toast.success('Message sent successfully 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-24  text-white">
      <div className="max-w-3xl mx-auto px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-8 text-center">Contact Me</h1>
        <p className="text-gray-300 mb-12 text-center">
          Have a question or want to work together? Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Name */}
          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none transition"
          />

          {/* Email */}
          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none transition"
          />

          {/* Message */}
          <textarea 
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-purple-500 outline-none transition resize-none"
          />

          <button 
            type="submit"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}
