import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-amber-900 text-amber-50 shadow-lg">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-serif font-bold tracking-tight">Café Fausse</Link>
      <div className="hidden md:flex space-x-6">
        {['/', '/menu', '/reservations', '/about', '/gallery'].map((path) => (
          <Link
            key={path}
            to={path}
            className="hover:text-amber-200 transition-colors duration-200 font-medium"
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button className="text-amber-50 hover:text-amber-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

const HomePage = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-900 mb-6">Welcome to Café Fausse</h1>
      <p className="text-lg text-gray-700 mb-8">
        An elegant fine-dining experience in the heart of Paris. 
        Reserve your table or explore our seasonal menu crafted with local ingredients.
      </p>
      <div className="mt-8">
        <Link 
          to="/reservations" 
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Make a Reservation
        </Link>
      </div>
    </div>
  </div>
);

const MenuPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">Our Seasonal Menu</h1>
    <div className="max-w-4xl mx-auto space-y-8">
      {[
        { category: 'Starters', items: ['Truffle Arancini', 'Heirloom Tomato Tartare', 'Foie Gras Mousse'] },
        { category: 'Mains', items: ['Duck Confit', 'Wild Mushroom Risotto', 'Grilled Sea Bass'] },
        { category: 'Desserts', items: ['Chocolate Soufflé', 'Crème Brûlée', 'Seasonal Fruit Tart'] },
        { category: 'Drinks', items: ['French Wine Selection', 'Craft Cocktails', 'Artisanal Coffee'] }
      ].map((section, idx) => (
        <div key={section.category} className="border-b border-amber-200 pb-6">
          <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4">{section.category}</h2>
          <div className="space-y-3">
            {section.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2">
                <span className="text-gray-800 font-medium">{item}</span>
                <span className="text-amber-700 font-semibold">${18 + i * 2}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

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

const AboutPage = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-8">About Us</h1>
    <div className="prose prose-amber max-w-none">
      <p className="text-gray-700 mb-6">
        Café Fausse was founded in 2020 by Chef Élodie Moreau and sommelier Julien Dubois.
        Our philosophy blends French culinary tradition with modern, sustainable practices.
      </p>
      <p className="text-gray-700 mb-8">
        We source ingredients locally and change our menu seasonally to ensure freshness and creativity.
        Our intimate 30-seat dining room offers an unforgettable experience in the heart of Paris.
      </p>
      <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
        <h2 className="font-bold text-amber-900 text-xl mb-3">Awards & Recognition</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Michelin Guide Recommended (2023, 2024)</li>
          <li>“Best New Restaurant” – City Eats Magazine</li>
          <li>Wine Spectator Award of Excellence</li>
        </ul>
      </div>
    </div>
  </div>
);

const GalleryPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-serif font-bold text-center text-amber-900 mb-12">Gallery</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-square bg-amber-100 rounded-xl flex items-center justify-center border-2 border-amber-200 overflow-hidden">
          <div className="text-center p-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-3" />
            <span className="text-amber-800 font-medium">Restaurant Photo {i}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Newsletter signup submitted! (Backend integration pending)');
    setEmail('');
    setName('');
  };

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
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
          <button 
            type="submit" 
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 rounded-lg whitespace-nowrap font-medium transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-amber-900 text-amber-100 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="mb-2">123 Gourmet Street, Paris, France</p>
      <p className="mb-2">📞 +33 1 23 45 67 89 | ✉️ info@cafe-fausse.com</p>
      <p className="text-amber-200">Open Tuesday–Sunday, 5PM–11PM</p>
    </div>
  </footer>
);

const AppContent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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