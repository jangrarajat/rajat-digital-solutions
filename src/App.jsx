import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronRight, Star, Phone, Mail, MapPin, Check, Van, Zap, IndianRupee,
  ArrowRight, Globe, TrendingUp, Users, Award, ExternalLink,
  MessageCircle, Code, Database, Server, BookOpen,
  GraduationCap, Smartphone, Send, Briefcase, User
} from 'lucide-react';

export default function DigitalBusinessWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const projects = [
    { name: "Manoj Woodworks", image: "https://res.cloudinary.com/drrj8rl9n/image/upload/v1769249381/Screenshot_2026-01-24_153641_zv1tx1.png", webLink: "https://manoj-woodworks.vercel.app" },
    { name: "Rajat web developer", image: "https://res.cloudinary.com/drrj8rl9n/image/upload/v1769515416/Screenshot_2026-01-27_173317_akoyqb.png", webLink: "https://manoj-woodworks.vercel.app" },
    { name: "DHRUVA Astronomy Club", image: "https://res.cloudinary.com/drrj8rl9n/image/upload/v1769515882/Screenshot_2026-01-27_174048_ryw8l2.png", webLink: "https://dhruva-astronomy-club.vercel.app" }

  ]

  // Review Form State
  const [reviews, setReviews] = useState([
    { id: 1, name: "Rahul Sharma", business: "Sharma Medical Store", rating: 5, message: "बहुत अच्छी वेबसाइट बनाई। मोबाइल पर भी परफेक्ट दिखती है।", date: "2024-03-15" },
    { id: 2, name: "Priya Patel", business: "Priya Beauty Salon", rating: 4, message: "Good service. Google Maps listing helped get more customers.", date: "2024-03-10" },
    { id: 3, name: "Amit Kumar", business: "Amit Restaurant", rating: 5, message: "Website looks professional. WhatsApp button is very useful.", date: "2024-03-05" }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    business: '',
    rating: 5,
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Review Form Handler
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.business || !formData.message) {
      alert("कृपया सभी फील्ड भरें");
      return;
    }

    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', business: '', rating: 5, message: '' });
    alert("आपकी रिव्यू सबमिट हो गई है!");
  };

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Professional Website Development",
      description: "Custom, responsive websites that showcase your business and attract customers 24/7",
      features: ["Mobile-First Design", "Fast Loading", "SEO Optimized"]
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Google Maps Business Listing",
      description: "Get found by local customers searching for your services on Google Maps",
      features: ["Complete Setup", "Optimization", "Review Management"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Local SEO Setup",
      description: "Rank higher in local search results and attract more customers from your area",
      features: ["Keyword Research", "On-Page SEO", "Local Citations"]
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Call & WhatsApp Integration",
      description: "Make it easy for customers to reach you with one-click calling and messaging",
      features: ["Click-to-Call", "WhatsApp Button", "Contact Forms"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "2000",
      popular: false,
      features: [
        "Single Page Website",
        "Mobile Responsive Design",
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Month Support"
      ]
    },
    {
      name: "Professional",
      price: "4000+",
      popular: true,
      features: [
        "Multi-Page Website (5 pages)",
        "Google Maps Integration",
        "WhatsApp & Call Buttons",
        "Advanced SEO Setup",
        "Image Gallery",
        "3 Months Support",
        "Free Logo Design"
      ]
    },
    {
      name: "Premium",
      price: "10,000+",
      popular: false,
      features: [
        "Complete Business Website",
        "Google My Business Setup",
        "Premium SEO Package",
        "Social Media Integration",
        "Booking/Appointment System",
        "6 Months Support",
        "Free Branding Package",
        "Monthly Analytics Report"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Amit Sharma",
      business: "Sharma Electronics, Jaipur",
      rating: 5,
      text: "My shop's website brought 30+ new customers in just 2 months. Highly recommended!"
    },
    {
      name: "Dr. Priya Verma",
      business: "City Care Clinic",
      rating: 5,
      text: "Professional service and excellent support. Patients can now book appointments online easily."
    },
    {
      name: "Rahul Gupta",
      business: "FitZone Gym",
      rating: 5,
      text: "The website looks amazing and I get inquiries daily. Best investment for my business!"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Website Uptime" },
    { number: "2-5 Days", label: "Delivery Time" }
  ];

  const skills = {
    frontend: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design"
    ],
    backend: [
      "Node.js", "Express.js", "RESTful APIs", "Server-Side Logic"
    ],
    database: [
      "MongoDB", "Mongoose ODM", "JWT Authentication", "Cookie Management"
    ],
    tools: [
      "Git & GitHub", "VS Code", "Basic Linux Commands", "Cloudinary", "Postman"
    ]
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
      />
    ));
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br  to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Rajat-jangra
                </h1>
                <p className="text-xs text-gray-400 hidden sm:block">Rajat-website-developer</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br  to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'MyWorks', 'Services', 'Pricing', 'Reviews', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'MyWorks', 'Services', 'Pricing', 'Reviews', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ========== HERO SECTION - UPDATED FOR MOBILE ========== */}
      <section id="home" className="relative min-h-screen flex items-center md:p-10  justify-center pt-16 px-4 overflow-hidden">
        <div className="relative max-w-7xl mx-auto w-full md:mt-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

            {/* Text Column - Mobile First */}
            <div className="text-center lg:text-left lg:w-1/2">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-sm text-sm text-blue-400 font-medium">
                  Lets Transform Your Business Online
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Grow Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Business</span> With Professional Websites
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 uppercase">
                It's Time to Take Your <span className=' font-bold text-blue-400'>Business Online.🌐</span> Whether you run a <span >Local Shop, a Clinic , a gym , a club , a Salon, or Any business </span>,  I am here to help you scale up. Let's make your business visible to everyone in your city.
              </p>

              {/* CTA Buttons - Mobile Optimized */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#pricing"
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl font-bold text-lg transition-all"
                >
                  View Pricing Plans
                </a>
              </div>

              {/* Mobile Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: <Smartphone />, text: "Mobile Friendly" },
                  { icon: <Zap />, text: "Fast Loading" },
                  { icon: <IndianRupee />, text: "Affordable" },
                  { icon: <Van />, text: "2-5 Days" }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-gray-800/50 p-3 rounded-sm flex items-center gap-1 uppercase border border-gray-700 text-center">
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <p className="text-sm text-gray-300 mb-2">{feature.text}</p>
                  </div>
                ))}
              </div>

              {/* Contact Info - Mobile */}
              <div className="flex flex-row sm:flex-row gap-4 my-5 justify-center lg:justify-start">
                <a
                  href="tel:+917357167649"
                  className="flex items-center justify-center rounded-md border border-blue-500  w-fit h-fit p-3 lg:justify-start space-x-2  text-blue-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Call</span>
                </a>
                <a
                  href="https://wa.me/917357167649"
                  className="flex items-center justify-center rounded-md border border-green-500  w-fit h-fit p-3 lg:justify-start space-x-2  text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm sm:text-base">WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Photo Column - Mobile Bottom */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative">
                {/* Your Photo */}
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl mx-auto">
                  <img
                    src="/me.jpg"
                    alt="Rajat - Web Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://res.cloudinary.com/drrj8rl9n/image/upload/c_fill,ar_1:1,g_auto/v1769510165/IMG_3496_ogequx.jpg";
                    }}
                  />
                </div>

                {/* Mobile Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-900/50 rounded-xl">
                      <Smartphone className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <p className="font-bold">Mobile First</p>
                      <p className="text-xs text-gray-400">Perfect on phones</p>
                    </div>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute -top-4 -left-4 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-2xl">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400"></p>
                    <p className="text-xs text-gray-400 uppercase">Rajat jangra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-12 sm:py-16 bg-gray-900/50 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20  p-6 sm:p-8">
        <h3 className="text-3xl font-extrabold  mb-4 text-center ">Why Choose Us?</h3>
        <ul className="space-y-3 flex flex-col  items-start p-10 md:items-center gap-3">
          {[
            '2-5 Days Fast Delivery',
            'Affordable Pricing',
            '100% Satisfaction Guaranteed',
            'Free Support ',
            'Mobile Responsive Design'
          ].map((item, idx) => (
            <li key={idx} className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to establish and grow your business online
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="text-blue-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">{service.description}</p>
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm sm:text-base">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Simple <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Pricing</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. Choose the plan that fits your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-900 border rounded-xl p-6 sm:p-8 ${plan.popular
                  ? 'border-blue-500 shadow-xl shadow-blue-500/20 scale-105'
                  : 'border-gray-800'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gray-400 text-lg sm:text-xl">₹</span>
                    <span className="text-4xl sm:text-5xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">One-time payment</p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`block w-full py-3 sm:py-4 rounded-lg font-semibold text-center transition-all duration-300 ${plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                    : 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                    }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          {/* Referral Bonus */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">🎁 Referral Bonus</h3>
            <p className="text-base sm:text-lg text-gray-300">
              Refer another business and get <span className="text-blue-400 font-bold">1 YEAR FREE</span> website maintenance!
            </p>
          </div>
        </div>
      </section>

      {/* ========== PORTFOLIO SECTION ========== */}
      <section id="myworks" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Work</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Real projects for real businesses. See how we've helped local businesses grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-900 border border-gray-800  overflow-hidden hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="aspect-video  flex items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.name}</h3>

                  <a
                    href={item.webLink}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== REVIEWS SECTION (CAROUSEL) ========== */}
      <section id="reviews" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Client <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Reviews</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              See what our clients say about working with us
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-gray-800  p-6 sm:p-8 md:p-12">
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center mb-6 sm:mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm sm:text-base text-gray-400">{testimonials[currentTestimonial].business}</p>
              </div>

              {/* Dots */}
              <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'w-8 bg-blue-500' : 'bg-gray-600'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ADD REVIEW SECTION (NEW) ========== */}
      <section id="add-review" className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">



            {/* Review Guidelines & Recent Reviews */}
            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800  p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6">Review Guidelines</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Please use your real name and business name</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Be honest about your experience</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Your review helps other local businesses</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Reviews are displayed with business name for trust</p>
                  </li>
                </ul>
              </div>

              {/* Recent Reviews */}
              <div className="bg-gray-900 border border-gray-800  p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6">Recent Reviews</h3>
                <div className="space-y-6">
                  {reviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="border-b border-gray-800 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold">{review.name}</h4>
                          <p className="text-blue-300 text-sm">{review.business}</p>
                        </div>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-gray-400">"{review.message}"</p>
                      <p className="text-sm text-gray-500 mt-2">{review.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Review Form */}
            <div className="bg-gray-900 border border-gray-800  p-6 sm:p-8">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <MessageCircle className="text-blue-400" />
                Add Your Review
              </h2>

              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-3 font-medium flex items-center gap-2">
                      <User size={18} /> Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-3 font-medium flex items-center gap-2">
                      <Briefcase size={18} /> Business Name *
                    </label>
                    <input
                      type="text"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      placeholder="Your shop/business name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 font-medium">Rating</label>
                  <div className="flex gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="text-3xl hover:scale-110 transition-transform"
                      >
                        <Star
                          size={32}
                          className={star <= formData.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">{formData.rating} out of 5 stars</p>
                </div>

                <div>
                  <label className="block text-gray-300 mb-3 font-medium">Your Review *</label>
                  <textarea
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your experience with our service..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl text-lg flex items-center justify-center gap-3 transition-all duration-300"
                >
                  <Send size={20} />
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS & EDUCATION SECTION (NEW) ========== */}
      <section id="skills" className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Education
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              1+ Year Experience in Web Development | B.A. Graduate
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Code className="text-blue-400" /> Technical Skills
              </h3>

              <div className="space-y-8">
                {/* Frontend Skills */}
                <div className="bg-gray-800/50 border border-gray-700  p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-900/50 rounded-xl">
                      <Globe className="text-blue-400" size={24} />
                    </div>
                    <h4 className="text-xl font-bold">Frontend Development</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.frontend.map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="bg-gray-800/50 border border-gray-700  p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-900/50 rounded-xl">
                      <Server className="text-purple-400" size={24} />
                    </div>
                    <h4 className="text-xl font-bold">Backend Development</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.backend.map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database & Tools */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 border border-gray-700  p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="text-green-400" size={20} />
                      <h4 className="font-bold">Database & Auth</h4>
                    </div>
                    <ul className="space-y-2">
                      {skills.database.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700  p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="text-yellow-400" size={20} />
                      <h4 className="font-bold">Tools & Workflow</h4>
                    </div>
                    <ul className="space-y-2">
                      {skills.tools.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-400" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-purple-400" /> Education & Experience
              </h3>

              <div className="space-y-8">
                {/* Education */}
                <div className="bg-gray-800/50 border border-gray-700  p-8">
                  <h4 className="text-xl font-bold mb-6">Education</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-900/50 rounded-xl">
                        <BookOpen className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">Bachelor of Arts (B.A.)</h5>
                        <p className="text-gray-400">Raj Rishi Bharathari Matsya University, Behror, Alwar</p>
                        <p className="text-sm text-gray-500 mt-2">Graduated</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-900/50 rounded-xl">
                        <BookOpen className="text-green-400" size={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">12th Grade</h5>
                        <p className="text-gray-400">Senior Secondary Education</p>
                        <p className="text-sm text-gray-500 mt-2">Completed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/30  p-8">
                  <h4 className="text-xl font-bold mb-6">Experience</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-yellow-900/30 rounded-xl">
                        <Award className="text-yellow-400" size={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">1+ Year in Web Development</h5>
                        <p className="text-gray-300 mt-2">
                          Specialized in creating responsive websites for local businesses.
                          Helped 50+ businesses establish their online presence.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-900/50 ">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="text-green-400" />
                        <h6 className="font-bold">Expertise:</h6>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Full-stack web development with focus on mobile-first responsive design,
                        SEO optimization, and user-friendly interfaces for local businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Get <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Started</span></h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to grow your business online? Let's talk!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-xs sm:gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-sm p-6 sm:p-8 space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold">Contact Information</h3>

                <div className="space-y-4">
                  <a
                    href="tel:+917357167649"
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="font-semibold">+917357167649</p>
                    </div>
                  </a>

                  <a
                    href="mailto:rajatwebdeveloper49@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email Us</p>
                      <p className="font-semibold">rajatwebdeveloper49@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/917357167649"
                    className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">WhatsApp</p>
                      <p className="font-semibold">Chat with us</p>
                    </div>
                  </a>


                </div>
              </div>

              {/* Why Choose Us */}
            </div>
            {/* Contact Form */}
            {/* <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Send Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Business Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Tell us about your business..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div> */}

          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold uppercase">Rajat jangra</h3>
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Helping local businesses grow online with professional digital solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['Home', 'Services', 'Pricing', 'Portfolio', 'Reviews', 'Skills', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Website Development</li>
                <li>Google Maps Setup</li>
                <li>Local SEO</li>
                <li>WhatsApp Integration</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Behror , Kotputli, Rajasthan</li>
                <li>+91 7357167649</li>
                <li>rajatwebdeveloper49@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 <span className='text-blue-400 underline'> Rajat jangra.</span> All rights reserved. Built with ❤️ for local businesses.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}