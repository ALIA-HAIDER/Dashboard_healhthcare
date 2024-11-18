// import React from 'react';

export default function DataSubmission() {
  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-md md:max-w-xl lg:max-w-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-3xl">Medical Dashboard Form</h2>
      <form className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Sex */}
        <div className="flex flex-col">
          <label htmlFor="sex" className="text-sm font-medium text-gray-700">Sex</label>
          <select
            id="sex"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select your sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label htmlFor="age" className="text-sm font-medium text-gray-700">Age</label>
          <select
            id="age"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select your age</option>
            {[...Array(100)].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>

        {/* Blood Group */}
        <div className="flex flex-col">
          <label htmlFor="blood-group" className="text-sm font-medium text-gray-700">Blood Group</label>
          <select
            id="blood-group"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* Weight */}
        <div className="flex flex-col">
          <label htmlFor="weight" className="text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            placeholder="Enter your weight"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
            min="1"
            step="0.1"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col">
          <label htmlFor="dob" className="text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            id="dob"
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
