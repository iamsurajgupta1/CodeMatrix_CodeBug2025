import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import {
  ArrowRight,
  Briefcase,
  Users,
  GraduationCap,
  DollarSign,
  Send,
  Play,
  Sun,
  Moon,
  Check,
  Star,
  Smile,
  Award,
} from "lucide-react";
import Footer from "../components/Footer";

const features = [
  {
    icon: Briefcase,
    title: "Find Your Dream Job",
    description: "Browse through thousands of internships and entry-level positions.",
    color: "purple",
  },
  {
    icon: Users,
    title: "Connect with Employers",
    description: "Direct interaction with top companies and startups.",
    color: "blue",
  },
  {
    icon: GraduationCap,
    title: "Learn & Grow",
    description: "Access courses and resources to enhance your skills.",
    color: "green",
  },
  {
    icon: DollarSign,
    title: "Earn While You Learn",
    description: "Find flexible side gigs that fit your schedule.",
    color: "yellow",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false); // Track if video is playing
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode state

  // Typewriter effect
  const [text] = useTypewriter({
    words: [
     " Showcase Your Skills and Get Hired Today!",
      "Build Your Portfolio, Grow Your Reputation, and Get Paid for What You Love.",
    "  Find Opportunities That Match Your Skills – Fast and Easy!",
      
      "Your Dream Job or Project is Just a Click Away.",

    ],
    loop: true,
    delaySpeed: 2000,
  });

  // Random selection of 4 features without replacement
  const [randomFeatures, setRandomFeatures] = useState([]);

  useEffect(() => {
    const shuffledFeatures = [...features].sort(() => Math.random() - 0.2);
    setRandomFeatures(shuffledFeatures.slice(0, 4)); // Select the first 4 shuffled features
  }, []);

  // Image slider logic
  const images = [
  "https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?ga=GA1.1.681336836.1731760829&semt=ais_hybrid",
  "https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?ga=GA1.1.681336836.1731760829&semt=ais_hybrid",
  "https://img.freepik.com/premium-vector/recruit-agent-analyzing-candidates_86047-104.jpg?ga=GA1.1.681336836.1731760829&semt=ais_hybrid",
  "https://img.freepik.com/premium-vector/vector-illustration-application-form-employment-people-select-resume-job_545399-1009.jpg?ga=GA1.1.681336836.1731760829&semt=ais_hybrid"


 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const handleVideoClick = () => {
    setIsVideoOpen(true); // Show the video when clicked
  };

  const handleVideoPause = () => {
    setIsVideoOpen(false); // Show the image again when the video is paused
  };

  // Carousel images
  const carouselImages = [
    "https://source.unsplash.com/random/400x300?nature",
    "https://source.unsplash.com/random/400x300?city",
    "https://source.unsplash.com/random/400x300?technology",
    "https://source.unsplash.com/random/400x300?business",
    "https://source.unsplash.com/random/400x300?education",
    "https://source.unsplash.com/random/400x300?work",
    "https://source.unsplash.com/random/400x300?office",
    "https://source.unsplash.com/random/400x300?students",
  ];

  const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselSlide((prev) => (prev + 1) % (carouselImages.length - 3));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#0A0B14]" : "bg-gray-100"}`}>
      {/* Navbar */}
      <nav className={`${isDarkMode ? "bg-[#1A1B26]" : "bg-white"} p-4 fixed w-full top-0 z-50 shadow-lg`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" className={`${isDarkMode ? "text-white" : "text-black"} text-xl font-bold`}>
            StudentHub
          </Link>
          <div className="space-x-6 flex items-center">
            {/* Navbar Links */}
            <Link to="/jobs" className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500`}>Bounties</Link>
            <Link to="/courses" className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500`}>Courses</Link>
            <Link to="/contact" className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500`}>Contact</Link>

            {/* Dropdown Menu for Features */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                to="#"
                className={`${isDarkMode ? "text-white" : "text-black"} hover:text-purple-500 cursor-pointer`}
              >
                Features
              </Link>
              {isDropdownOpen && (
                <div className={`absolute left-0 mt-2 w-48 ${isDarkMode ? "bg-[#1A1B26]" : "bg-white"} p-4 rounded-lg shadow-lg`}>
                  <ul>
                    <li className={`${isDarkMode ? "text-white" : "text-black"} mb-2 hover:text-purple-500`}>
                      <Link to="/ai-resume-builder">AI Resume Builder</Link>
                    </li>
                    <li className={`${isDarkMode ? "text-white" : "text-black"} mb-2 hover:text-purple-500`}>
                      <Link to="/ai-mock-interview">AI Mock Interview</Link>
                    </li>
                    <li className={`${isDarkMode ? "text-white" : "text-black"} mb-2 hover:text-purple-500`}>
                      <Link to="/courses">Courses</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${isDarkMode ? "bg-[#12131E]" : "bg-gray-200"}`}
            >
              {isDarkMode ? (
                <Sun className={`h-5 w-5 ${isDarkMode ? "text-white" : "text-black"}`} />
              ) : (
                <Moon className={`h-5 w-5 ${isDarkMode ? "text-white" : "text-black"}`} />
              )}
            </button>
          </div>
          <div>Sigin</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center px-6 md:px-12 lg:px-20 pt-24 bg-[#0A0B14]">
        {/* Image Slider (Left Side) */}
        <div className="absolute left-0 top-0 h-full w-1/3 overflow-hidden flex items-center justify-center">
          <div className="relative h-[400px] w-[400px] rounded-full overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out rounded-full ${
                  index === currentSlide ? "translate-x-0" : "translate-x-full"
                }`}
                onError={(e) => {
                  e.target.style.display = "none"; // Hide the image if it fails to load
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content (Right Side) */}
        <div className="relative z-20 max-w-2xl ml-auto">
          <h1 className={`text-7xl font-bold text-white mb-6`}>
            <span className="text-purple-500">{text}</span>
          </h1>
          <p className={`text-2xl text-gray-300 mb-8`}>
            Discover internships, courses, and part-time jobs tailored for students.
          </p>
          <div className="flex gap-4">
            <Link
              to="/jobs"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2"
            >
              Browse Jobs <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/courses"
              className={`bg-[#1A1B26] hover:bg-[#1F2937] text-white px-8 py-3 rounded-lg font-medium`}
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative py-12 bg-[#12131E]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* "Trusted By" Text */}
            <div className="absolute top-0 left-0 z-10 bg-purple-500 px-4 py-2 rounded-r-lg">
              <p className="text-white font-semibold">Trusted By 10,000+ Customers</p>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `translateX(-${currentCarouselSlide * 25}%)`,
                }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-1/4 flex-shrink-0 p-2">
                    <img
                      src={image}
                      alt={`Carousel Slide ${index}`}
                      className="w-full h-40 object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = "none"; // Hide the image if it fails to load
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`py-20 ${isDarkMode ? "bg-[#12131E]" : "bg-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"} mb-4`}>Key Features</h2>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Our platform provides everything you need to kickstart your career while managing your studies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${isDarkMode ? "bg-[#1A1B26]" : "bg-white"} p-8 rounded-lg hover:shadow-lg hover:-translate-y-2 transition-all duration-300 relative`}
              >
                <div
                  className={`absolute -top-12 -right-12 p-6 rounded-full bg-${feature.color}-500/20`}
                >
                  <feature.icon className={`h-16 w-16 text-${feature.color}-500`} />
                </div>
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"} mb-4`}>{feature.title}</h3>
                <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Video Section */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"} mb-4`}>
        Learn How It Works
      </h2>
      <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
        Watch our quick tutorial to learn how to make the most of our platform.
      </p>
    </div>

    {/* Embedded Video - No Controls, AutoPlay, Loop */}
    <div className="relative max-w-4xl mx-auto">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/DFmhX5h6Lig?autoplay=1&loop=1&playlist=DFmhX5h6Lig&mute=1&controls=0&modestbranding=1&showinfo=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Tutorial Video"
        className="rounded-xl"
      />
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className={`py-20 ${isDarkMode ? "bg-[#0A0B14]" : "bg-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"} mb-4`}>Why Choose Us?</h2>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              We provide the best opportunities and resources to help you succeed in your career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Check className={`h-16 w-16 mx-auto ${isDarkMode ? "text-purple-500" : "text-purple-600"}`} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"} mt-4`}>Verified Opportunities</h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Only the best and verified opportunities.</p>
            </div>
            <div className="text-center">
              <Star className={`h-16 w-16 mx-auto ${isDarkMode ? "text-yellow-500" : "text-yellow-600"}`} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"} mt-4`}>Top Employers</h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Connect with top companies and startups.</p>
            </div>
            <div className="text-center">
              <Smile className={`h-16 w-16 mx-auto ${isDarkMode ? "text-green-500" : "text-green-600"}`} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"} mt-4`}>Student-Friendly</h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Tailored for students' needs.</p>
            </div>
            <div className="text-center">
              <Award className={`h-16 w-16 mx-auto ${isDarkMode ? "text-blue-500" : "text-blue-600"}`} />
              <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-black"} mt-4`}>Award-Winning</h3>
              <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Recognized for excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-20 ${isDarkMode ? "bg-[#12131E]" : "bg-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-black"} mb-4`}>Subscribe to Our Newsletter</h2>
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Stay updated with the latest internships, courses, and job opportunities.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-96 px-4 py-3 rounded-l-lg focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-r-lg font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}