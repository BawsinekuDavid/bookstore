import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: '', password: '' };

    // Basic validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Perform login logic here, for example, making an API call
      // Simulating API call for demonstration purposes
      const mockApiResponse = { success: true, message: 'Login successful' };

      if (mockApiResponse.success) {
        navigate('/home');
      } else {
        setLoginError('Invalid email or password');
      }
    }
  };

  return (
    <section className="vh-100 d-flex align-items-center justify-content-center bg-image">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <form onSubmit={handleSubmit} className="text-center">
              <h2 className="mb-4">Login</h2>
              {loginError && <div className="alert alert-danger">{loginError}</div>}
              <div className="form-outline mb-4">
                <input 
                  type="email" 
                  id="form3Example3" 
                  className={`form-control form-control-lg text-black ${errors.email ? 'is-invalid' : ''}`} 
                  placeholder="Enter a valid email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-outline mb-3">
                <input 
                  type="password" 
                  id="form3Example4" 
                  className={`form-control form-control-lg text-black ${errors.password ? 'is-invalid' : ''}`} 
                  placeholder="Enter password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className="d-flex justify-content-center mb-3">
                <button type="button" className="btn btn-link text-body">Forgot password?</button>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">
                  Login
                </button>
              </div>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <button type="button" className="btn btn-link link-danger">Register</button></p>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container text-center">
          <div className="d-flex justify-content-between">
            <div>© 2020. All rights reserved.</div>
            <div>
              <button type="button" className="btn btn-link text-white me-4"><i className="fab fa-facebook-f"></i></button>
              <button type="button" className="btn btn-link text-white me-4"><i className="fab fa-twitter"></i></button>
              <button type="button" className="btn btn-link text-white me-4"><i className="fab fa-google"></i></button>
              <button type="button" className="btn btn-link text-white"><i className="fab fa-linkedin-in"></i></button>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default LoginPage;
