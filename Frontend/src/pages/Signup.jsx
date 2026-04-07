import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();

  // BASIC INFO
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // OPTIONAL HEALTH INFO
  const [gender, setGender] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [allergy, setAllergy] = useState("");
  const [lactoseIntolerant, setLactoseIntolerant] = useState("");
  const [proteinIntake, setProteinIntake] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // PASSWORD VALIDATION
  const isStrongPassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!isStrongPassword(password)) {
      setError(
        "Password must be at least 8 characters and include letter, number & special character."
      );
      return;
    }

    try {
      await axios.post("https://snaeeats.onrender.com/api/auth/signup", {
        name,
        email,
        password,

        // OPTIONAL HEALTH DATA
        gender,
        height: {
          feet: heightFeet,
          inches: heightInches,
        },
        weight,
        diabetes,
        allergy,
        lactoseIntolerant,
        proteinIntake,
      });

      setSuccess("Signup successful! Redirecting to login...");
      setError("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-red-600 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Health details are optional but help us personalize your food
        </p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}

        <form onSubmit={handleSignup} className="space-y-4">

          {/* BASIC INFO */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="password"
            placeholder="Password (min 8 chars, special character)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-400"
            required
          />

          {/* OPTIONAL SECTION */}
          <div className="mt-6 border rounded-xl p-4 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Optional Health & Diet Profile
            </h3>

            <div className="space-y-3">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              {/* HEIGHT FEET & INCHES */}
              <div className="grid grid-cols-2 gap-3">
                <select
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(e.target.value)}
                  className="px-4 py-3 border rounded-lg"
                >
                  <option value="">Height (ft)</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i} value={i + 3}>
                      {i + 3} ft
                    </option>
                  ))}
                </select>

                <select
                  value={heightInches}
                  onChange={(e) => setHeightInches(e.target.value)}
                  className="px-4 py-3 border rounded-lg"
                >
                  <option value="">Inches</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i} value={i}>
                      {i} in
                    </option>
                  ))}
                </select>
              </div>

              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select
                value={diabetes}
                onChange={(e) => setDiabetes(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Diabetes</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <input
                type="text"
                placeholder="Allergy (e.g. peanuts, gluten)"
                value={allergy}
                onChange={(e) => setAllergy(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select
                value={lactoseIntolerant}
                onChange={(e) => setLactoseIntolerant(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Lactose Intolerance?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <select
                value={proteinIntake}
                onChange={(e) => setProteinIntake(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Daily Protein Intake (grams)</option>
                <option value="30">30 g</option>
                <option value="50">50 g</option>
                <option value="70">70 g</option>
                <option value="100">100 g</option>
                <option value="120">120 g</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 font-semibold">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
