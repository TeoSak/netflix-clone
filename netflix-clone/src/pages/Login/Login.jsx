import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import logo from "../../../assets/logo.png";
import netflix_spinner from "../../../assets/netflix_spinner.gif";
import { useNavigate } from "react-router-dom";
import { use } from "react";

export const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signState, setSignState] = useState("Sign In");
  const navigate = useNavigate();
  const alertShown = useRef(false);

  useEffect(() => {
    if (!alertShown.current) {
      alert("Use the following test credentials:\n\nEmail: example1@gmail.com\nPassword: 00000000");
      alertShown.current = true;
    }
  }, [])

  const handleToggle = () => {
    setSignState((prev) => (prev === "Sign In" ? "Sign Up" : "Sign In"));
  };

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    const url =
      signState === "Sign In"
        ? "https://netflix-clone-1-9tol.onrender.com/login"
        : "https://netflix-clone-1-9tol.onrender.com/signup";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:
          signState === "Sign In"
            ? JSON.stringify({ email, password })
            : JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error");

      if (data.token) localStorage.setItem("token", data.token);

      alert(data.message);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }

    setLoading(false);
  };

  return loading ? (
    <div className="loading-icon">
      <img src={netflix_spinner} alt="spinner" />
    </div>
  ) : (
    <div className="login-page">
      <div className="logo py-3 ps-3">
        <img src={logo} alt="netflix-logo" width={120} />
      </div>
      <div className="form-center d-flex justify-content-center align-items-center h-75">
        <div className="login-form">
          <h3 className="py-3">{signState}</h3>
          <div className="form-input d-flex justify-content-center align-items-center flex-column gap-3">
            {signState === "Sign Up" && (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <button className="button-3" onClick={user_auth} type="submit">
              {signState}
            </button>

            <div className="d-flex justify-content-between w-100">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="remember" />
                <label htmlFor="remember" className="form-check-label">
                  Remember Me
                </label>
              </div>
              <a href="#" className="text-white text-decoration-none">
                Need Help?
              </a>
            </div>
          </div>
          <div className="pt-4">
            {signState === "Sign In" ? (
              <p className="paragraph">
                New to Netflix? <span onClick={handleToggle}>Sign Up Now</span>
              </p>
            ) : (
              <p className="paragraph">
                Already have an account? <span onClick={handleToggle}>Sign In</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
