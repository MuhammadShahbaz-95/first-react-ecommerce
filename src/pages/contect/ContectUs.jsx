import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation to track the current route
import './Contect.css';
import Navbar from '../../components/navbar/Navbar';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Submit form or send to backend
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});

      // Redirect to home page after 3 seconds
      setTimeout(() => {
        navigate('/'); // Navigate to home page
      }, 3000); // 3000ms = 3 seconds
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <>
     <Navbar />
      <div className='bg-indigo-600 h-screen flex justify-center items-center'>
  <div className="contact-us-container">
      {/* Pass the current route */}
      <h2 className='text-3xl text-center mb-2 text-zinc-100 '>Contact Us</h2>
      {submitted ? (
        <p className="success-message">Thank you! Your message has been sent. Redirecting to home page...</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </div>
    </div>
  
    </>
  
  );
};

export default ContactUs;
