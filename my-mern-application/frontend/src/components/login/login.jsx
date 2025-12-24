import React from "react";

export const Login = () => {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center  bg-gradient">
      <div className="card shadow-lg border-0" style={{ width: "600px" }}>
        {/* Header */}
        <div className="card-header text-center bg-info text-white py-3">
          <h3 className="mb-0 text-dark">Welcome Back</h3>
          <small className="text-secondary">Login to your account</small>
        </div>

        {/* Body */}
        <div className="card-body p-4">
          <form>
            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label text-dark fw-semibold"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control border-primary"
                id="email"
                placeholder="Enter email"
              />
              <div className="form-text text-muted">
                We'll never share your email with anyone else.
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label text-dark fw-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control border-primary"
                id="password"
                placeholder="Enter password"
              />
            </div>

            {/* Checkbox */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input border-primary"
                id="rememberMe"
              />
              <label
                className="form-check-label text-dark"
                htmlFor="rememberMe"
              >
                Remember me
              </label>
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-success w-100 fw-bold">
              Login
            </button>

            {/* Extra */}
            <p className="text-center mt-3 mb-0">
              <small className="text-muted">
                Don't have an account?{" "}
                <a href="/register" className="text-primary fw-semibold">
                  Register
                </a>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
