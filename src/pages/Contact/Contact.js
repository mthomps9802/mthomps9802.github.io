import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this alert with email sending logic (e.g. EmailJS or backend integration)
    alert(`Thanks for reaching out, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24 pb-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>
      <p className="text-zinc-400 text-center max-w-xl mb-12">
        Have a question, opportunity, or just want to say hello? Drop a message below or email me directly at{' '}
        <span className="text-blue-500">markthompson_tla@yahoo.com</span>.
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-md bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-md bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-md bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
