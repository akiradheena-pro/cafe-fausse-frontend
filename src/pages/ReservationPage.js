import React, { useState } from 'react';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call your backend
    alert('Reservation form submitted! (Backend integration pending)');
    setFormData({ time: '', guests: 2, name: '', email: '', phone: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-8">Make a Reservation</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-amber-100">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Date & Time</label>
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
        >
          Reserve Table
        </button>
      </form>
    </div>
  );
};

export default ReservationPage;