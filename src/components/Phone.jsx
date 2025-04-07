import React, { useState } from "react";
import { Phone, Check as CheckIcon } from "lucide-react";

function Phone() {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    class: "",
    stream: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
  };

  const handlePhoneClick = () => {
    if (!formData.phoneNumber) {
      alert("Please enter a valid phone number.");
      return;
    }

    const formattedNumber = `tel:+91${formData.phoneNumber}`;
    window.location.href = formattedNumber;
  };

  return (
    <div className="min-h-[800px] bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!showForm ? (
          <div className="w-full h-80 bg-black rounded-lg shadow-xl overflow-hidden relative">
            <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Unlock Your JEE/NEET Success
              </h3>
              <p className="text-gray-200 text-lg font-medium mb-6">
                Learn proven strategies from top rankers
              </p>
              <button
                className="bg-gray-100 text-black rounded-full px-8 py-3 shadow-lg mb-6 font-bold transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
                onClick={() => setShowForm(true)}
              >
                Book Your FREE Demo Session
              </button>
              <div
                className="flex items-center gap-2 bg-gray-100 bg-opacity-90 rounded-full px-6 py-3 cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 text-black" />
                <span className="text-black font-bold">Call +91XXXXXXXXXX</span>
              </div>
            </div>
          </div>
        ) : formSubmitted ? (
          <div className="w-full h-80 bg-black rounded-lg shadow-xl overflow-hidden relative">
            <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">
              <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <CheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Thank you for booking your free demo session!
              </h3>
              <p className="text-gray-200 text-md font-medium mb-6">
                Our team will get in touch with you soon.
              </p>
              <div className="flex gap-3">
                <button
                  className="bg-gray-700 text-white rounded-full px-6 py-2 font-medium"
                  onClick={() => {
                    setFormSubmitted(false);
                    setShowForm(false);
                  }}
                >
                  Back to Home
                </button>
                <button
                  className="bg-green-500 text-white rounded-full px-6 py-2 font-bold shadow-lg flex items-center gap-2"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-80 bg-black rounded-lg shadow-xl overflow-hidden relative">
            <div className="flex flex-col items-center justify-center h-full px-6 py-4">
              <h3 className="text-xl font-bold text-white mb-4">
                Book Your Free Demo Session
              </h3>
              <form onSubmit={handleSubmit} className="w-full max-w-sm">
                <div className="mb-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div className="mb-2">
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  >
                    <option value="">Select Class</option>
                    <option value="11">Class 11</option>
                    <option value="12">Class 12</option>
                    <option value="Dropper">Dropper</option>
                  </select>
                </div>
                <div className="flex justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="bg-gray-700 text-white rounded-full px-4 py-2 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 text-white rounded-full px-6 py-2 font-bold shadow-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Phone;