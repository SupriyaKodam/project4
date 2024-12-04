import React, { useState } from 'react';

const InsuranceQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-lg">
      <div className="bg-blue-100 text-blue-900 p-3 text-center rounded-t-md">
        <p className="font-bold">Exclusive up to 15% Discount on online purchase.</p>
      </div>
      <form className="space-y-4 p-4" onSubmit={handleSubmit}>
        <h2 className="text-lg font-semibold text-center">
          Get Health Insurance Quote in <span className="text-blue-600">2 Steps</span>
        </h2>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
            required
          />
          {!formData.name && <p className="text-red-600 text-sm">This field is required</p>}
        </div>
        <div>
          <label className="block text-gray-700">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Mobile Number"
            required
          />
          {!formData.mobile && <p className="text-red-600 text-sm">This field is required</p>}
        </div>
        <div>
          <label className="block text-gray-700">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="Pincode"
            required
          />
          {!formData.pincode && <p className="text-red-600 text-sm">This field is required</p>}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Get Quote
          </button>
        </div>
        <p className="text-xs text-gray-600 text-center">
          I consent to be contacted by Star Health Insurance for health insurance product inquiries,
          overriding my NCPR/DND registration.
        </p>
      </form>
    </div>
  );
};

export default InsuranceQuoteForm;