import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { CloudCog } from "lucide-react";

const ApplyNow = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [yojanaTypes, setYojanaTypes] = useState([]);
  const [yojanaYears, setYojanaYears] = useState([]);
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [documentFiles, setDocumentFiles] = useState({});
  const [documentPreviews, setDocumentPreviews] = useState({});

  useEffect(() => {
    console.log("Yojana Types:", yojanaTypes);
  }, [yojanaTypes]);

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
    mobileNumber: "",
    chooseYear: "",
  });
  console.log("Form Data:", formData);
  useEffect(() => {
    fetch("http://localhost:5000/getCategory")
      .then((res) => res.json())
      .then((data) => setCategories(data.data || []));

    fetch("http://localhost:5000/getSubCategory")
      .then((res) => res.json())
      .then((data) => setSubCategories(data.data || []));

    fetch("http://localhost:5000/getYojanaType")
      .then((res) => res.json())
      .then((data) => setYojanaTypes(data.data || []));

    fetch("http://localhost:5000/getYojanaYears")
      .then((res) => res.json())
      .then((data) => setYojanaYears(data.data || []));
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleDocSelect = (e, docKey) => {
    if (e.target.checked) {
      setSelectedDocs([...selectedDocs, docKey]);
    } else {
      setSelectedDocs(selectedDocs.filter((item) => item !== docKey));
      const updatedFiles = { ...documentFiles };
      delete updatedFiles[docKey];
      setDocumentFiles(updatedFiles);
    }
  };

  const handleFileChange = (e, docKey) => {
    if (e.target.files[0]) {
      setDocumentFiles({ ...documentFiles, [docKey]: e.target.files[0] });
    }
  };

  // Cleanup preview URLs when component unmounts or files change
  useEffect(() => {
    return () => {
      Object.values(documentPreviews).forEach(url => {
        URL.revokeObjectURL(url);
      });
    };
  }, [documentPreviews]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Required fields validation
    const requiredFields = ["aadhar", "surname", "firstName", "fatherName", "mobileNumber"];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      alert(t("pleaseFillRequiredFields"));
      return;
    }

    try {
      const formDataToSend = new FormData();

      // Append form data fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value) {
          formDataToSend.append(key, value);
        }
      });

      // Append document files if present
      Object.entries(documentFiles).forEach(([docKey, file]) => {
        if (file) {
          formDataToSend.append(docKey, file);
        }
      });

      console.log("Final FormData to Send:", Object.fromEntries(formDataToSend.entries()));

      // Send form data to the server
      const response = await fetch("http://localhost:5000/submitApplication", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit application");
      }

      const result = await response.json();

      if (result.success) {
        alert(t("application Submitted Successfully"));
        setIsOpen(false);

        // Reset form
        setFormData({
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
          mobileNumber: "",
          chooseYear: "",
        });
        setSelectedDocs([]);
        setDocumentFiles({});
      } else {
        alert(t("applicationSubmissionFailed"));
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert(error.message || t("applicationSubmissionError"));
    }
  };

  return (
    <div className="text-center p-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-900 hover:bg-orange-600 transition-all duration-300 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg flex items-center justify-center"
      >
        <FaPlus className="text-2xl" />
        <span className="hidden md:inline-block ml-2">{t("applyNow")}</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center w-full h-full z-50 bg-opacity-70 backdrop-blur-lg p-4">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-5xl relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-xl font-bold"
            >
              ✖
            </button>

            <h2 className="text-lg font-semibold text-blue-900 mb-4 text-center mt-5">
              {t("applicationFormTitle")}
            </h2>

            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "aadhar", label: "Aadhar Number" },
                  { name: "surname", label: "Surname" },
                  { name: "firstName", label: "First Name" },
                  { name: "fatherName", label: "Father's Name" },
                  { name: "bankName", label: "Bank Name" },
                  { name: "ifsc", label: "IFSC Code" },
                  { name: "accountNo", label: "Account Number" },
                  { name: "amountPaid", label: "Amount Paid" },
                ].map(({ name, label }) => (
                  <div key={name} className="text-left">
                    <label htmlFor={name} className="block font-medium mb-1">
                      {label}
                    </label>
                    <input
                      id={name}
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      placeholder={t(name)}
                      className="border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 p-2 rounded w-full transition-colors duration-300"
                      required
                    />
                  </div>
                ))}
                <div className="text-left">

                  <label htmlFor="">{t("mobileNumber")}</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder={t("mobileNumber")}
                    className="border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 p-2 rounded w-full transition-colors duration-300"
                    required
                  />
                </div>
                <div className="text-left">

                  <label htmlFor="">{t("selectYear")}</label>
                  <select
                    name="chooseYear"
                    value={formData.chooseYear}
                    onChange={handleChange}
                    className="border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 p-2 rounded w-full transition-colors duration-300"
                    required
                  >
                    <option value="">{t("selectYear")}</option>
                    {yojanaYears.map((year) => (
                      <option key={year.id} value={year.id}>
                        {year.year}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-left">

                  <label htmlFor="">{t("selectBeneficiaryType")}</label>
                  <select
                    name="beneficiaryType"
                    value={formData.beneficiaryType}
                    onChange={handleChange}
                    className="border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 p-2 rounded w-full transition-colors duration-300"
                    required
                  >
                    <option value="">{t("selectBeneficiaryType")}</option>
                    <option value="SC">{t("beneficiaryTypes.SC")}</option>
                    <option value="ST">{t("beneficiaryTypes.ST")}</option>
                    <option value="OBC">{t("beneficiaryTypes.OBC")}</option>
                    <option value="General">{t("beneficiaryTypes.General")}</option>
                  </select>
                </div>

                <div className="text-left">

                  <label htmlFor="">{t("selectCategory")}</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 p-2 rounded w-full transition-colors duration-300"
                    required
                  >
                    <option value="">{t("selectCategory")}</option>
                    {categories.map((data) => (
                      <option key={data.category_id} value={data.category_id}>
                        {data.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-left">

                  <label htmlFor="">{t("selectSubcategory")}</label>
                  <select
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                    className="border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 p-2 rounded w-full transition-colors duration-300"
                    required
                  >
                    <option value="">{t("selectSubcategory")}</option>
                    {subCategories
                      .filter((data) => data.category_id == formData.category)
                      .map((data) => (
                        <option key={data.sub_category_id} value={data.sub_category_id}>
                          {data.sub_category_name}
                        </option>
                      ))}
                  </select></div>
                <div className="text-left">

                  <label htmlFor="">{t("selectYojanaType")}</label>
                  <select
                    name="yojnaType"
                    value={formData.yojnaType}
                    onChange={handleChange}
                    className="border-2 border-gray-300 hover:border-blue-500 focus:border-blue-500 p-2 rounded w-full transition-colors duration-300"
                    required
                  >
                    <option value="">{t("selectYojanaType")}</option>
                    {yojanaTypes
                      .filter(
                        (data) =>
                          data.category_id == formData.category &&
                          data.sub_category_id == formData.subCategory
                      )
                      .map((data) => (
                        <option key={data.yojana_type_id} value={data.yojana_type}>
                          {data.yojana_type}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 text-left">
                <p className="font-semibold">{t("uploadDocuments")}:</p>
                {["aadharCard", "bankPassbook", "casteCertificate", "incomeCertificate"].map(
                  (docKey) => (
                    <div key={docKey} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={docKey}
                        checked={selectedDocs.includes(docKey)}
                        onChange={(e) => handleDocSelect(e, docKey)}
                        className="mr-2"
                      />
                      <label htmlFor={docKey} className="mr-2">
                        {t(docKey)}
                      </label>
                      {selectedDocs.includes(docKey) && (
                        <input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileChange(e, docKey)}
                          className="ml-4"
                          required
                        />
                      )}
                    </div>
                  )
                )}
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold"
                >
                  {t("submit")}
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




