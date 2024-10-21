import React from 'react';
import './about.css'; // Optional: for any custom CSS
import Navbar from '../../components/navbar/Navbar'; // Assuming you have a Navbar component

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            Welcome to our company! We are dedicated to providing the best service to our customers.
            Our team is passionate about what we do, and we are committed to excellence in everything.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="about-card bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to revolutionize the industry by offering unparalleled products and services.
              </p>
            </div>
            <div className="about-card bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We envision a future where our solutions enhance the lives of people and businesses across the world.
              </p>
            </div>
            <div className="about-card bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
              <p className="text-gray-600">
                Our talented and dedicated team is the backbone of our success. We are a diverse group of experts
                in our field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
