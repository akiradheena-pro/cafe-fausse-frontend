import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Spinner (for button) ---
const ButtonSpinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-white mx-auto"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
);

// --- Navbar ---
const Navbar = () => (
  <nav className="bg-amber-900 text-amber-50 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-serif font-bold">Café Fausse</Link>
      <div className="space-x-6">
        {['/', '/menu', '/reservations', '/about', '/gallery'].map((path) => (
          <Link
            key={path}
            to={path}
            className="hover:text-amber-200 transition"
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

// --- Home Page ---
const HomePage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-serif text-center mb-6">Welcome to Café Fausse</h1>
    <p className="text-lg text-center max-w-2xl mx-auto">
      An elegant fine-dining experience in the heart of Paris. Reserve your table or explore our seasonal menu.
    </p>
    <div className="mt-8 flex justify-center">
      <Link to="/reservations" className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded">
        Make a Reservation
      </Link>
    </div>
  </div>
);

// --- Menu Page ---
const MenuPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-serif mb-6 text-center">Our Seasonal Menu</h1>
    <div className="space-y-6 max-w-4xl mx-auto">
      {[
        { category: 'Starters', items: ['Truffle Arancini', 'Heirloom Tomato Tartare', 'Foie Gras Mousse'] },
        { category: 'Mains', items: ['Duck Confit', 'Wild Mushroom Risotto', 'Grilled Sea Bass'] },
        { category: 'Desserts', items: ['Chocolate Soufflé', 'Crème Brûlée', 'Seasonal Fruit Tart'] },
        { category: 'Drinks', items: ['French Wine Selection', 'Craft Cocktails', 'Artisanal Coffee'] }
      ].map((section) => (
        <div key={section.category} className="border-b pb-4">
          <h2 className="text-xl font-bold text-amber-900">{section.category}</h2>
          <ul className="mt-2 space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item}</span>
                <span className="text-amber-700">${18 + idx * 2}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// --- Reservation Page ---
const ReservationPage = () => {
  const [formData, setFormData] = useState({
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: ''
  });
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: 'info', text: 'Processing...' });

    try {
      const response = await fetch('http://localhost:8000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          time: new Date(formData.time).toISOString(),
          guests: parseInt(formData.guests),
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        })
      });
      const data = await response.json();
      setMessage({ type: 'success', text: `Reservation confirmed! Table #${data.tableNumber}` });
      setFormData({ time: '', guests: 2, name: '', email: '', phone: '' });
    } catch (error) {
      const msg = error.message || 'Failed to book. Try another time.';
      setMessage({ type: 'error', text: msg });
    }
  };

  const isLoading = message.type === 'info';

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-serif mb-6">Make a Reservation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Date & Time</label>
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block mb-1">Number of Guests</label>
          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            disabled={isLoading}
          />
        </div>
        <div>
          <label className="block mb-1">Phone (Optional)</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full flex items-center justify-center gap-2 py-2 rounded text-white transition ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-amber-700 hover:bg-amber-800'
          }`}
        >
          {isLoading ? <ButtonSpinner /> : 'Reserve Table'}
        </button>
        {message.text && message.type !== 'info' && (
          <div className={`mt-4 p-3 rounded ${
            message.type === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
};

// --- Newsletter Component ---
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: 'info', text: 'Processing...' });

    try {
      await fetch('http://localhost:8000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });
      setMessage({ type: 'success', text: 'Thank you for subscribing!' });
      setEmail('');
      setName('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Invalid email. Please try again.' });
    }
  };

  const isLoading = message.type === 'info';

  return (
    <div className="bg-amber-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl font-serif text-center mb-4">Join Our Newsletter</h2>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 p-2 rounded"
            required
            disabled={isLoading}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-2 rounded"
            required
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`px-4 flex items-center justify-center gap-2 rounded text-white transition ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-amber-700 hover:bg-amber-800'
            }`}
          >
            {isLoading ? <ButtonSpinner /> : 'Subscribe'}
          </button>
        </form>
        {message.text && message.type !== 'info' && (
          <div className={`mt-4 p-3 rounded text-center ${
            message.type === 'success'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

// --- About Page ---
const AboutPage = () => (
  <div className="container mx-auto px-4 py-8 max-w-3xl">
    <h1 className="text-3xl font-serif mb-6 text-center">About Us</h1>
    <p className="mb-4">
      Café Fausse was founded in 2020 by Chef Élodie Moreau and sommelier Julien Dubois.
      Our philosophy blends French culinary tradition with modern, sustainable practices.
    </p>
    <p>
      We source ingredients locally and change our menu seasonally to ensure freshness and creativity.
    </p>
    <div className="mt-6 p-4 bg-amber-50 rounded">
      <h2 className="font-bold text-amber-900">Awards</h2>
      <ul className="list-disc pl-5 mt-2">
        <li>Michelin Guide Recommended (2023, 2024)</li>
        <li>“Best New Restaurant” – City Eats Magazine</li>
      </ul>
    </div>
  </div>
);

// --- Gallery Page ---
const GalleryPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-serif mb-6 text-center">Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-square bg-amber-100 rounded flex items-center justify-center border border-amber-200 overflow-hidden">
          <img
            src={`/images/gallery${i}.jpg`}
            alt={`Restaurant Photo ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);

// --- Footer ---
const Footer = () => (
  <footer className="bg-amber-900 text-amber-100 py-6">
    <div className="container mx-auto px-4 text-center">
      <p>123 Gourmet Street, Paris, France</p>
      <p>📞 +33 1 23 45 67 89 | ✉️ info@cafe-fausse.com</p>
      <p className="mt-2">Open Tuesday–Sunday, 5PM–11PM</p>
    </div>
  </footer>
);

// --- Main App Structure ---
const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
