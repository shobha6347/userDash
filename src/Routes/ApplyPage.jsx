import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const ApplyNow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [yojanaTypes, setYojanaTypes] = useState([]);
  const [formData, setFormData] = useState({
    aadhar: "",
    surname: "",
    firstName: "",
    fatherName: "",
    beneficiaryType: "",
    category: "",
    subCategory: "",
    yojnaType: "",
    bankName: "",
    ifsc: "",
    accountNo: "",
    amountPaid: "",
    document1: null,
    document2: null,
    document3: null,
  });

  useEffect(() => {
    fetch("http://localhost:5000/getCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data.data || []))
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/getSubCategory")
      .then((res) => res.json())
      .then((data) => setSubCategories(data.data || []))
      .catch((err) => console.log(err));

    fetch("http://localhost:5000/getYojanaType")
      .then((res) => res.json())
      .then((data) => setYojanaTypes(data.data || []))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    fetch("http://localhost:5000/submitForm", {
      method: "POST",
      body: formDataObj,
    })
      .then((res) => res.json())
      .then((data) => console.log("Response:", data))
      .catch((err) => console.log("Form submission error:", err));
  };

  return (
    <div className="text-center p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-900 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg flex items-center justify-center"
      >
        <FaPlus className="text-2xl" />
        <span className="hidden md:inline-block ml-2">Apply Now</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center w-full h-full z-50  bg-opacity-0 p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-xl font-bold"
            >
              ✖
            </button>

            <h2 className="text-lg font-semibold text-blue-900 mb-4 text-center mt-5">
              Government Scheme Application Form
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleChange}
                  placeholder="Aadhaar Number"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Surname"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Father Name"
                  className="border p-2 rounded w-full"
                  required
                />

                <select
                  name="beneficiaryType"
                  value={formData.beneficiaryType}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                >
                  <option value="">Select Beneficiary Type</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                  <option value="General">General</option>
                </select>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((data) => (
                    <option key={data.category_id} value={data.category_id}>
                      {data.category_name}
                    </option>
                  ))}
                </select>

                <select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                >
                  <option value="">Select Subcategory</option>
                  {subCategories
                    .filter((data) => data.category_id == formData.category)
                    .map((data) => (
                      <option key={data.subcategory_id} value={data.subcategory_id}>
                        {data.sub_category_name}
                      </option>
                    ))}
                </select>

                <select
                  name="yojnaType"
                  value={formData.yojnaType}
                  onChange={handleChange}
                  className="border rounded p-2 w-full"
                  required
                >
                  <option value="">Select Yojana Type</option>
                  {yojanaTypes
                    .filter(
                      (data) =>
                        data.category_id == formData.category &&
                        data.subcategory_id == formData.subCategory
                    )
                    .map((data) => (
                      <option key={data.yojana_id} value={data.yojana_type}>
                        {data.yojana_type}
                      </option>
                    ))}
                </select>

                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  placeholder="Bank Name"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="ifsc"
                  value={formData.ifsc}
                  onChange={handleChange}
                  placeholder="IFSC Code"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                  placeholder="Account Number"
                  className="border p-2 rounded w-full"
                  required
                />
                <input
                  type="text"
                  name="amountPaid"
                  value={formData.amountPaid}
                  onChange={handleChange}
                  placeholder="Amount Paid"
                  className="border p-2 rounded w-full"
                  required
                />

                <input
                  type="file"
                  name="document1"
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
                <input
                  type="file"
                  name="document2"
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
                <input
                  type="file"
                  name="document3"
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 transition-all duration-300 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyNow;

