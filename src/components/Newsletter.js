import React, { useState } from 'react';
import apiClient from '../api/client';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await apiClient.post('/newsletter', { name, email });
      setSuccess(true);
      setEmail('');
      setName('');
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An unexpected error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-amber-50 py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-serif mb-4 text-green-700">Thank You for Subscribing!</h2>
          <p className="text-gray-700">You've been added to our newsletter. We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl font-serif text-center mb-6 text-amber-900">Join Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg whitespace-nowrap font-medium transition-colors duration-200 disabled:bg-amber-400"
            disabled={loading}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Newsletter;