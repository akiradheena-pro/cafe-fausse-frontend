import React, { useState, useEffect, useCallback } from 'react';
import apiClient from '../api/client';
import Availability from '../components/Availability';

// Helper to format date for input[type=datetime-local]
const toLocalDateTimeString = (isoDate) => {
  const date = new Date(isoDate);
  // Adjust for timezone offset
  const timezoneOffset = date.getTimezoneOffset() * 60000;
  const localDate = new Date(date.getTime() - timezoneOffset);
  return localDate.toISOString().slice(0, 16);
};

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: ''
  });

  const [availability, setAvailability] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const checkAvailability = useCallback(async (time) => {
    if (!time) {
      setAvailability(null);
      return;
    }
    try {
      // Convert local time from input to ISO 8601 format with timezone info for the API
      const isoTime = new Date(time).toISOString();
      const response = await apiClient.get('/reservations/availability', {
        params: { time: isoTime }
      });
      setAvailability(response.data);
    } catch (err) {
      console.error("Failed to check availability:", err);
      setAvailability(null);
    }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      checkAvailability(formData.time);
    }, 500); // Debounce API calls

    return () => {
      clearTimeout(handler);
    };
  }, [formData.time, checkAvailability]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (availability && availability.available < 1) {
      setSubmitError("Cannot book a fully booked time slot.");
      return;
    }

    setLoading(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const payload = {
        ...formData,
        time: new Date(formData.time).toISOString(), // Ensure time is in ISO format
        guests: parseInt(formData.guests, 10),
      };
      const response = await apiClient.post('/reservations', payload);
      setSubmitSuccess({
        table: response.data.tableNumber,
        slot: toLocalDateTimeString(response.data.slot),
      });
      // Clear form
      setFormData({ time: '', guests: 2, name: '', email: '', phone: '' });
      setAvailability(null);
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
      setSubmitError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
        <h1 className="text-3xl font-serif text-green-700 mb-4">Reservation Confirmed!</h1>
        <div className="bg-green-50 p-6 rounded-xl border border-green-200">
          <p className="text-lg text-gray-800">
            Your table is booked. We look forward to seeing you.
          </p>
          <p className="mt-4 text-xl font-semibold text-amber-900">
            Table Number: {submitSuccess.table}
          </p>
          <p className="text-gray-600">
            Time: {new Date(submitSuccess.slot).toLocaleString()}
          </p>
        </div>
      </div>
    );
  }

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

        <Availability data={availability} />

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
          disabled={loading || (availability && availability.available < 1)}
          className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-lg font-medium transition-colors duration-200 shadow-md disabled:bg-amber-400 disabled:cursor-not-allowed"
        >
          {loading ? 'Reserving...' : 'Reserve Table'}
        </button>
        {submitError && <p className="text-red-600 text-center mt-4">{submitError}</p>}
      </form>
    </div>
  );
};

export default ReservationPage;