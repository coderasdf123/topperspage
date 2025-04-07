import { useState, useEffect, useRef } from "react";

const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [arrowBgColor, setArrowBgColor] = useState("bg-black/90");
  const [arrowTextColor, setArrowTextColor] = useState("text-white");
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navContainerRef = useRef(null);

  const navItems = [
    { id: 1, label: "IITLife", href: "#section-1" },
    { id: 2, label: "Inspiration", href: "#section-2" },
    { id: 3, label: "PeerInsights", href: "#section-3" },
    { id: 4, label: "Strategies", href: "#section-4" },
    { id: 5, label: "Transform", href: "#section-5" },
    { id: 6, label: "Stress", href: "#section-6" },
    { id: 7, label: "LifeStyle", href: "#section-7" },
    { id: 8, label: "Revision", href: "#section-8" },
    { id: 9, label: "SuccessStories", href: "#section-9" },
    { id: 10, label: "MasterClass", href: "#section-10" },
    { id: 11, label: "TopperSecrets", href: "#section-11" },
    { id: 12, label: "Unlock", href: "#section-12" },
    { id: 13, label: "Timeline", href: "#section-13" },
    { id: 14, label: "Skills", href: "#section-14" },
  ];
  const firstRowItems = navItems;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px 0px 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      if (isNavigating && !isMobile) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const activeItem = navItems.find((item) => item.href === `#${sectionId}`);
          if (activeItem) {
            setActiveSection(activeItem.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isNavigating, isMobile, navItems]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      const firstSection = document.getElementById(navItems[0].href.slice(1));
      if (firstSection) {
        const firstSectionTop = firstSection.getBoundingClientRect().top + scrollY;
        setShowBackToTop(scrollY > firstSectionTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href, label) => {
    setActiveSection(label);
    setIsNavigating(true);

    const section = document.querySelector(href);
    if (section) {
      // Adjusted navbar height based on screen size
      const navbarHeight = isMobile ? 63 : 120;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);

      // Reset navigation state after scrolling completes
      setTimeout(() => {
        setIsNavigating(false);
      }, 1500);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/90 shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-16">
            <div className="flex-shrink-0">
              <a href="/" onClick={handleLogoClick}>
                <img
                  src="/logo.png"
                  alt="NNIIT Logo"
                  className="h-8 sm:h-10 w-auto cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={`fixed top-8 sm:top-16 w-full z-40 transition-all duration-300 bg-black/90 shadow-md overflow-x-auto scrollbar-hide sm:overflow-visible`}
      >
        <div className="max-w-5xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex items-center h-8 sm:h-16 relative">
            <div
              ref={navContainerRef}
              className="flex w-full whitespace-nowrap sm:whitespace-normal sm:justify-center relative"
            >
              <div className="sm:static sm:flex sm:items-center sm:justify-center sm:space-x-4">
                {firstRowItems.map((item) => (
                  <div key={item.id} className="inline-block sm:relative px-1">
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.label);
                      }}
                      className={`px-2 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        activeSection === item.label 
                          ? "text-white font-bold" 
                          : "text-gray-200 hover:text-gray-400"
                      }`}
                      style={{ textDecoration: "none" }}
                    >
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className={`fixed bottom-4 right-4 z-50 p-3 ${arrowBgColor} ${arrowTextColor} rounded-full shadow-lg transition-all hover:opacity-80`}
          aria-label="Back to Top"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default StickyNavbar;