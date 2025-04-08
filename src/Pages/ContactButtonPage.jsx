import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingLabelInput = ({ label, value, onChange, name, error }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`border p-2 w-full rounded focus:outline-none focus:ring-2 peer ${
          error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={name}
        className={`absolute left-2 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-sm ${
          error ? "peer-focus:text-red-600" : "peer-focus:text-blue-600"
        } bg-white px-1`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

const ApplyNow = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    aadhar: "",
    subCategory: "",
    year: "",
    yojnaType: "",
    yojnaName: "",
    taluka: "",
    gramPanchayat: "",
    village: "",
    bankName: "",
    ifsc: "",
    accountNo: "",
    amountPaid: "",
  });

  const [errors, setErrors] = useState({});

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => {
    setIsOpen(false);
    setErrors({}); // Close karne par errors hata do
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Error ko hatao jab user field fill kare
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Form Submitted Successfully!");
  };

  return (
    <>
      <div className="text-center">
        <button
          onClick={handleOpenModal}
          className="bg-[#162F56] hover:bg-orange-600 transition-all duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
        >
          Apply Now
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
            <div className="flex justify-between items-center bg-blue-900 text-white p-4 rounded-t-lg">
              <h2 className="text-lg font-semibold">Government Scheme Application Form</h2>
              <button onClick={handleCloseModal} className="text-white text-xl font-bold">
                &times;
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 p-4">
                <FloatingLabelInput label="Aadhar Number" value={formData.aadhar} onChange={handleChange} name="aadhar" error={errors.aadhar} />
                <FloatingLabelInput label="Sub Category" value={formData.subCategory} onChange={handleChange} name="subCategory" error={errors.subCategory} />
                <FloatingLabelInput label="Year" value={formData.year} onChange={handleChange} name="year" error={errors.year} />
                <FloatingLabelInput label="Yojna Type" value={formData.yojnaType} onChange={handleChange} name="yojnaType" error={errors.yojnaType} />
                <FloatingLabelInput label="Yojna Name" value={formData.yojnaName} onChange={handleChange} name="yojnaName" error={errors.yojnaName} />
                <FloatingLabelInput label="Taluka" value={formData.taluka} onChange={handleChange} name="taluka" error={errors.taluka} />
                <FloatingLabelInput label="Gram Panchayat" value={formData.gramPanchayat} onChange={handleChange} name="gramPanchayat" error={errors.gramPanchayat} />
                <FloatingLabelInput label="Village" value={formData.village} onChange={handleChange} name="village" error={errors.village} />
                <FloatingLabelInput label="Bank Name" value={formData.bankName} onChange={handleChange} name="bankName" error={errors.bankName} />
                <FloatingLabelInput label="IFSC Code" value={formData.ifsc} onChange={handleChange} name="ifsc" error={errors.ifsc} />
                <FloatingLabelInput label="Account No" value={formData.accountNo} onChange={handleChange} name="accountNo" error={errors.accountNo} />
                <FloatingLabelInput label="Amount Paid" value={formData.amountPaid} onChange={handleChange} name="amountPaid" error={errors.amountPaid} />
              </div>
              <div className="bg-gray-100 p-4 rounded-b-lg flex justify-end">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplyNow;