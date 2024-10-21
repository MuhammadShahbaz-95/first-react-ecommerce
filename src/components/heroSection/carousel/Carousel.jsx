import { useState, useEffect } from 'react';
import './Carousel.css' // Assuming the CSS file is Carousel.css
import Image1 from './images/img1.png';
import Image2 from './images/img2.png';
import Image3 from './images/img3.png';
import Image4 from './images/img4.png';
import Image6 from './images/img6.png';
import { useNavigate, Link } from 'react-router-dom';



const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Initial active slide index
    // const navigate = useNavigate(); // Initialize the navigate function

    // const handleNavigation = () => {
    //     console.log("Navigating to /allproducts");
    //     navigate('/allproducts'); // Navigate to the desired route
    //   };

    const items = [
        {
            title: 'Sleek Silver Earbuds',
            description: 'These premium earbuds offer a polished metallic finish with a modern ergonomic design. Perfect for style-conscious users who value both aesthetics and functionality. Experience superior sound quality with advanced noise cancellation..',
            imageUrl: Image1
        },
        {
            title: 'Bubbles earbud',
            description: 'These design with integrated touch controls for easy volume adjustments. The snug fit and vibrant color scheme make them stand out while delivering rich sound and comfort for long listening sessions.',
            imageUrl: Image2
        },
        {
            title: 'Futuristic Purple Earbuds ',
            description: 'These purple and white earbuds feature a futuristic design with integrated touch controls for easy volume adjustments. The snug fit and vibrant color scheme make them stand out while delivering rich sound and comfort for long listening sessions.',
            imageUrl: Image3
        },
        {
            title: 'High-Tech Copper Earbuds',
            description: 'Designed with cutting-edge technology, these black and copper earbuds are built for audio perfection. The compact design includes enhanced bass and a secure fit for high-performance users.',
            imageUrl: Image4
        },
        {
            title: 'Joi Burds Industrial Design ',
            description: 'The Joi Buds offers a sleek design and superb sound quality for both the urban look and the active lifestyle. With a soft rubber coating on the main housing and silicone plugs, high comfort is still presence after many hours of use.',
            imageUrl: Image6
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 9000); // Auto-slide every 7 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel bg-purple-300">
            <div className="list">
                {items.map((item, index) => (
                    <div key={index} className={`item ${index === currentIndex ? 'active' : ''}`}>
                        <div className="introduce">
                            <h2 className="title text-4xl text-red-500 font-serif font-bold mb-3">{item.title}</h2>
                            <h3 className="topic text-l text-black font-sans mb-1">{item.description}</h3>
                            <button className="seeMore text-blue-700 cursor-pointer">
                                <Link to="/allproducts">See More</Link>
                            </button>
                        </div>
                        <img src={item.imageUrl} alt={item.title} />
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" onClick={prevSlide}>Prev</button>
                <button id="next" onClick={nextSlide}>Next</button>
            </div>
        </div>
    );
};

export default Carousel;
