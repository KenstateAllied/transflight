import{ useState } from 'react';
import PropTypes from 'prop-types';



const PopupForm = ({ show , onClose }) => {
  const [name, setName] = useState('');
  const [reg, setReg] = useState('');
  const [field, setField] = useState('');
  const [location, setLocation] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [app, setApp] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, reg, field, location, tel, email, website, app }),
    });

    if (res.ok) {
      alert("✅ Submitted successfully ! Thank you for registering with us.");
      onClose();
    } else {
      alert("❌ Submission failed.");
      console.log(res);
      console.log("API BASE:", import.meta.env.VITE_API_BASE_URL);

    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("⚠️ Server error. Try again later.");
  }
};



  if (!show) return null;

  return (
    <div data-aos="fade-up" className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative px-6 py-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Kenyan Companies - prospective for Web Development
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Company Name, Company Reg Number, Field, Location, Tel, Email, Website and App
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

           <input
            type="number"
            placeholder="Company Reg Number"
            value={reg}
            onChange={(e) => setReg(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Company Field"
            value={field}
            onChange={(e) => setField(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Telephone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          
          <input
            type="text"
            placeholder="Does it have a Website?"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Does it have an App?"
            value={app}
            onChange={(e) => setApp(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

PopupForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default PopupForm;
