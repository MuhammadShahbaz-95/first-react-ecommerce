// import { useState, useEffect } from 'react';
// import '../../App.css';
import Carousel from "./carousel/Carousel";

// // Import images
// import image1 from './images/img1.png';
// import image2 from './images/img2.png';
// import image3 from  './images/img3.png';


// const Slider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
    
//     // Add images to the slides array
//     const slides = [
//         {
//             title: 'Welcome to Our Website',
//             text: 'Discover amazing products and services tailored just for you.',
//             image: image1 // First image
//         },
//         {
//             title: 'Innovative Solutions',
//             text: 'We provide cutting-edge solutions to meet your needs.',
//             image: image2 // Second image
//         },
//         {
//             title: 'Expert Team',
//             text: 'Our team of experts is ready to assist you with any challenge.',
//             image: image3 // Third image
//         }
//     ];

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     useEffect(() => {
//         const interval = setInterval(nextSlide, 15000);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="slider">
//             {slides.map((slide, index) => (
//                 <div key={index} className={`slide ${index === currentSlide ? 'current' : ''}`}>
//                     <div className="content">
//                         {/* Display image */}
//                         <img src={slide.image} alt={slide.title} className="slide-image" />
//                         <h1>{slide.title}</h1>
//                         <p>{slide.text}</p>
//                     </div>
//                 </div>
//             ))}
//             <div className="buttons">
//                 <button id="prev" onClick={prevSlide}>Previous</button>
//                 <button id="next" onClick={nextSlide}>Next</button>
//             </div>
//         </div>
//     );
// };

// const Section = ({ id, title, children }) => (
//     <section id={id} className="section">
//         <h2>{title}</h2>
//         {children}
//     </section>
// );

const AppComponent = () => {
    return (
        <div>
         <Carousel/>
            {/* <Slider /> */}
           
        </div>
    );
};

export default AppComponent;

