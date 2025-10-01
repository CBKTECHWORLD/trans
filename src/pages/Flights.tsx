import React, { useState } from "react";

const FlightService = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    passengers: "1",
    tripType: "oneWay",
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const GOOGLE_FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLScD7bBkKAqFb6xq51zxVa8N0FhbKItCSjDJwunIrFi_gCx0-Q/formResponse";

      // ✅ Replace entry IDs with your own (from step 1–4 above)
      const params = new URLSearchParams();
        params.append("entry.800965287", formData.from); // From
    params.append("entry.1900724075", formData.to);   // To
    params.append("entry.18006347", formData.departureDate); // Departure Date

    // Only append return date if round trip
    if (formData.tripType === "roundTrip" && formData.returnDate) {
      params.append("entry.1973087758", formData.returnDate); // Return Date
    }

    params.append("entry.1969904911", formData.passengers); // Passengers

    // Trip type — must match exactly the option in Google Form
    params.append(
      "entry.1348835616",
      formData.tripType === "oneWay" ? "One-way" : "Round-trip"
    );

    // Contact Info
    params.append("entry.1398784332", formData.name);  // Name
    params.append("entry.158070264", formData.email);  // Email
    params.append("entry.1076102951", formData.phone);  // Phone
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors", // Google Forms requires this
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // body: params.toString(),
          body: params,
      });

      setSubmitStatus("success");
      setFormData({
        from: "",
        to: "",
        departureDate: "",
        returnDate: "",
        passengers: "1",
        tripType: "oneWay",
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 text-black">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-indigo-900 mb-6 text-center">
          Flight Booking Service
        </h1>

        {/* Main Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-xl p-8"
        >
          {/* Trip Type */}
          <div className="flex gap-4 mb-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={formData.tripType === "oneWay"}
                onChange={handleInputChange}
                className="mr-2"
              />
              One Way
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="tripType"
                value="roundTrip"
                checked={formData.tripType === "roundTrip"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Round Trip
            </label>
          </div>

          {/* Flight Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="from"
              placeholder="From"
              value={formData.from}
              onChange={handleInputChange}
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="text"
              name="to"
              placeholder="To"
              value={formData.to}
              onChange={handleInputChange}
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split("T")[0]}
              required
              className="border p-3 rounded-lg"
            />
            {formData.tripType === "roundTrip" && (
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
                min={formData.departureDate || new Date().toISOString().split("T")[0]}
                className="border p-3 rounded-lg"
              />
            )}
          </div>

          {/* Passengers */}
          <div className="mt-6">
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className="border p-3 rounded-lg w-full"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Passenger" : "Passengers"}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Info */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="border p-3 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border p-3 rounded-lg"
            />
          </div>
          <div className="mt-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="border p-3 rounded-lg w-full"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg"
          >
            {isSubmitting ? "Submitting..." : "Get Quote"}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <p className="mt-4 text-green-600">
               Your request was submitted successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-red-600">
               There was an error submitting. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FlightService;
