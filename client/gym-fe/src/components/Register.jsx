// === src/components/Hero.jsx ===
// (kept same as before)

// === src/components/About.jsx ===
// (kept same as before)

// === src/components/RegistrationForm.jsx ===
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    membershipType: 'Monthly'
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/registration', formData);
      setSuccess(res.data.message);
      setError('');
      setFormData({ fullName: '', email: '', phone: '', age: '', membershipType: 'Monthly' });
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
      setSuccess('');
    }
  };

  return (
    <section id="register" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10 text-center tracking-tight">Register for Membership</h2>

        {success && <div className="bg-green-600 p-3 rounded mb-6 text-center text-white font-semibold shadow">{success}</div>}
        {error && <div className="bg-red-600 p-3 rounded mb-6 text-center text-white font-semibold shadow">{error}</div>}

        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl shadow-2xl space-y-6 border border-gray-700">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon shadow"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon shadow"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon shadow"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon shadow"
          />

          <select
            name="membershipType"
            value={formData.membershipType}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-neon shadow"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
          </select>

          <button
            type="submit"
            className="w-full bg-neon text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90 transition text-lg"
          >
            Submit Registration
          </button>
        </form>

        <style>{`
          .bg-neon {
            background: linear-gradient(90deg, #39ff14, #0ff);
            box-shadow: 0 0 10px #39ff14, 0 0 30px #0ff;
          }
          .focus\:ring-neon:focus {
            box-shadow: 0 0 0 3px rgba(57, 255, 20, 0.4);
          }
        `}</style>
      </div>
    </section>
  );
};

export default RegistrationForm;
