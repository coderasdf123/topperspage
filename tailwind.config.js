/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#404040",
          "200": "#3b3b3b",
          "300": "#3a3a3a",
        },
        darkgray: {
          "100": "#a3a3a3",
          "200": "#999",
        },
        gray: {
          "100": "#fafafa",
          "200": "#8e8e8e",
          "300": "#262626",
          "400": "#222",
          "500": "#1e1e1e",
          "600": "#090909",
          "700": "#060606",
          "800": "rgba(255, 255, 255, 0.1)",
        },
        whitesmoke: {
          "100": "#f6f6f6",
          "200": "#f5f5f5",
          "300": "#f5f4f3",
        },
        goldenrod: "#e5be32",
        dimgray: {
          "100": "#737373",
          "200": "#595959",
          "300": "#525252",
        },
        gainsboro: {
          "100": "#e7e7e7",
          "200": "#e5e5e5",
        },
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",

        roboto: "Roboto",
        "ibm-plex-sans": "'IBM Plex Sans'",
        inherit: "inherit",
        "source-serif-pro": "'Source Serif Pro'",
      },
      borderRadius: {
        mini: "15px",
        "35xl": "54px",
        "16xl": "35px",
        "29xl": "48px",
        xl: "20px",
        "8xs": "5px",
        "3xs": "10px",
      },
      animation: {
        'slow-spin': 'spin 60s linear infinite',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
    fontSize: {
      sm: "14px",
      lg: "18px",
      base: "16px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "36xl": "55px",
      "14xl": "33px",
      "25xl": "44px",
      
      xs: "12px",
      "3xs": "10px",
      xl: "20px",
      "mid-9": "17.9px",
      smi: "13px",
      "10xl-3": "29.3px",
      "4xl": "23px",
      "11xl": "30px",
      "5xl": "24px",
      "smi-6": "12.6px",
      "sm-3": "13.3px",
      "27xl": "46px",
      "9xl": "28px",
      "18xl": "37px",
      "10xl-9": "29.9px",
      "smi-8": "12.8px",
      "smi-9": "12.9px",
      "2xs": "11px",
      "xs-8": "11.8px",
      "sm-8": "13.8px",
      "9xl-8": "28.8px",
      "10xl-6": "29.6px",
      "xs-6": "11.6px",
      mid: "17px",
      "xs-4": "11.4px",
      "smi-3": "12.3px",
      "smi-4": "12.4px",
      "xs-5": "11.5px",
      "10xl-5": "29.5px",
      "10xl-8": "29.8px",
      "31xl-3": "50.3px",
      "21xl": "40px",
      "33xl": "52px",
      "12xl": "31px",
      "23xl": "42px",
      "31xl-9": "50.9px",
      "22xl": "41px",
      inherit: "inherit",
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      go: ['Go', 'sans-serif'],
      'sf-pro': ['SF Pro', 'sans-serif'],  // Add SF Pro font family
      'sf-pro-black-italic': ['SF Pro Black Italic', 'sans-serif'],
        'sf-pro-bold': ['SF Pro Bold', 'sans-serif'],
        'sf-pro-heavy-italic': ['SF Pro Heavy Italic', 'sans-serif'],
        'sf-pro-light-italic': ['SF Pro Light Italic', 'sans-serif'],
        'sf-pro-medium': ['SF Pro Medium', 'sans-serif'],
        'sf-pro-regular': ['SF Pro Regular', 'sans-serif'],
        'sf-pro-semi-bold-italic': ['SF Pro SemiBold Italic', 'sans-serif'],
        'sf-pro-thin-italic': ['SF Pro Thin Italic', 'sans-serif'],
        'sf-pro-ultralight-italic': ['SF Pro UltraLight Italic', 'sans-serif'],
        constane: ['"Constane"', 'sans-serif'],
        golos: ['Golos Text', 'sans-serif'],
        qwitcher: ['Qwitcher Grypen', 'serif'],
        corinthia: ['Corinthia', 'serif'],
      },
    
    screens: {
      'xs': '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
      animation: {
        'pulse-custom': 'pulse-custom 1.5s infinite',
      },
      keyframes: {
        'pulse-custom': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.7',
          },
        },
      },
  
  plugins: [],
};

