import { useState } from "react";

export default function Reviews() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    rating: 5,
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", form);
    alert("Thank you for your review!");
  };

  // Dummy reviews (backend se aayenge baad me)
  const reviews = [
    {
      name: "Amit Sharma",
      business: "Sharma Electronics",
      rating: 5,
      message:
        "Great service! My shop is now on Google and customers are finding us easily.",
    },
    {
      name: "Dr. Mehta",
      business: "Mehta Clinic",
      rating: 4,
      message:
        "Professional website and quick support whenever needed. Highly recommended.",
    },
  ];

  return (
    <div className="bg-primary text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Client Reviews
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          See what business owners say after going online with my digital
          solutions.
        </p>

        {/* Review Form */}
        <div className="bg-secondary p-8 rounded-xl shadow-lg mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-accent">
            Leave a Review
          </h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="p-3 rounded bg-black border border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleChange}
              className="p-3 rounded bg-black border border-gray-700"
            />
            <input
              type="text"
              name="business"
              placeholder="Business / Shop Name"
              required
              onChange={handleChange}
              className="p-3 rounded bg-black border border-gray-700 md:col-span-2"
            />

            <select
              name="rating"
              onChange={handleChange}
              className="p-3 rounded bg-black border border-gray-700 md:col-span-2"
            >
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>

            <textarea
              name="message"
              placeholder="Write your experience..."
              required
              rows="4"
              onChange={handleChange}
              className="p-3 rounded bg-black border border-gray-700 md:col-span-2"
            ></textarea>

            <button
              type="submit"
              className="bg-accent text-black font-semibold py-3 rounded hover:scale-105 transition md:col-span-2"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="grid md:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-accent">
                {review.name}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {review.business}
              </p>
              <p className="mb-2">
                {"⭐".repeat(review.rating)}
              </p>
              <p className="text-gray-300">{review.message}</p>
            </div>
          ))}
        </div>

        {/* Pagination UI (Backend se connect hoga) */}
        <div className="flex justify-center mt-12 gap-4">
          <button className="px-4 py-2 border border-gray-600 rounded">
            Previous
          </button>
          <button className="px-4 py-2 bg-accent text-black rounded">
            1
          </button>
          <button className="px-4 py-2 border border-gray-600 rounded">
            2
          </button>
          <button className="px-4 py-2 border border-gray-600 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
