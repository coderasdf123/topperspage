import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ color = 'black', size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.486 2 2 6.486 2 12c0 1.957.572 3.778 1.561 5.322L2 22l4.901-1.434C8.378 21.428 10.132 22 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-1.68 0-3.29-.47-4.67-1.34l-.33-.21-2.901.851.874-2.818-.216-.336A8.048 8.048 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm3.383-5.691c-.184-.092-1.091-.538-1.26-.598-.169-.061-.292-.092-.415.092-.123.184-.476.598-.584.723-.107.123-.215.138-.399.046-.184-.092-.779-.287-1.484-.916-.547-.486-.916-1.091-1.023-1.275-.108-.185-.011-.285.082-.376.084-.084.185-.215.277-.322.092-.107.123-.184.184-.307.062-.123.031-.23-.015-.322-.046-.092-.415-1.038-.569-1.423-.153-.384-.307-.338-.415-.345a.92.92 0 0 0-.338.031c-.107.031-.399.154-.611.369-.215.215-.815.793-.815 1.934s.835 2.25.951 2.403c.123.154 1.646 2.519 4.099 3.426.574.22 1.022.352 1.372.452.577.154 1.101.132 1.515.08.462-.054 1.091-.446 1.246-.876.154-.43.154-.8.108-.876-.046-.077-.169-.123-.353-.215z"/>
    </svg>
  );
};

const FloatingContactButtons = () => {
  const [currentSection, setCurrentSection] = useState('1');

  // Define section-wise colors
  const sections = {
    '1': { bgColor: 'black', textColor: 'white' },
    '2': { bgColor: 'white', textColor: 'black' },
    '3': { bgColor: '#FAFAFA', textColor: 'black' },
    '4': { bgColor: 'black', textColor: 'white' },
    '5': { bgColor: 'black', textColor: 'white' },
    '6': { bgColor: 'black', textColor: 'white' },
    '7': { bgColor: 'white', textColor: 'black' },
    '8': { bgColor: 'black', textColor: 'white' },
    '9': { bgColor: 'white', textColor: 'black' },
    '10': { bgColor: 'white', textColor: 'black' },
    '11': { bgColor: 'black', textColor: 'white' },
    '12': { bgColor: '#090909', textColor: 'white' },
    '13': { bgColor: 'white', textColor: 'black' },
    '14': { bgColor: 'white', textColor: 'black' },
  };

  // Function to detect the current section in viewport
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('[data-section]');

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setCurrentSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run on page load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get colors dynamically
  const { bgColor, textColor } = sections[currentSection] || sections['1'];

  // Button background should be opposite to section background
  const buttonBgColor = textColor;
  // Icon color should be opposite to button background
  const iconColor = buttonBgColor === 'black' || buttonBgColor === '#090909' ? 'white' : 'black';

  return (
    <div className="fixed bottom-20 right-5 flex flex-col gap-2 z-50">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: buttonBgColor }}
      >
        <img src='./w_logo.png' className='h-8' />
      </a>
      
      {/* Phone Call Button */}
      <a 
        href="tel:1234567890" 
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: buttonBgColor, color: iconColor }}
      >
        <Phone size={30} color={iconColor} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
