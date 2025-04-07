import React, { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Clock, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Cookies from 'js-cookie';

const OtpModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState("details");
  const [name, setName] = useState(() => Cookies.get('userName') || "");
  const [phoneNumber, setPhoneNumber] = useState(() => Cookies.get('userPhone') || "");
  const [className, setClassName] = useState(() => Cookies.get('userClass') || "");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timer, setTimer] = useState(120);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(() => Cookies.get('cookieConsent') === 'true');

  const inputRefs = useRef([]);
  const modalRef = useRef(null);

  const classOptions = [
    "CLASS 6", "CLASS 7", "CLASS 8", "CLASS 9", "CLASS 10", 
    "CLASS 11", "CLASS 12", "JEE", "NEET"
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 30 * 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval = null;
    if (step === "otp" && timer > 0 && !isVerified) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0) {
      setOtp(["", "", "", ""]);
      setGeneratedOtp("");
    }
    return () => clearInterval(interval);
  }, [step, timer, isVerified]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) closeModal();
    };
    if (isVisible) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible]);

  const saveUserDataToCookies = () => {
    if (cookieConsent) {
      Cookies.set('userName', name, { expires: 30 });
      Cookies.set('userPhone', phoneNumber, { expires: 30 });
      Cookies.set('userClass', className, { expires: 30 });
    }
  };

  const handleCookieConsent = () => {
    setCookieConsent(true);
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    saveUserDataToCookies();
  };

  const sendSmsOtp = async (phoneNumber) => {
    try {
      const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Generated OTP:", newOtp);
      setGeneratedOtp(newOtp);
      toast.success(`OTP sent to +91 ${phoneNumber}`, {
        duration: 5000,
        style: {
          background: "rgba(240, 248, 255, 0.95)",
          border: "1px solid rgba(0, 112, 243, 0.2)",
          color: "#000",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });
      return newOtp;
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.");
      return null;
    }
  };

  const closeModal = () => {
    setIsVisible(false);
    setStep("details");
    setOtp(["", "", "", ""]);
    setTimer(120);
    setIsVerified(false);
    setShowSuccessMessage(false);
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    if (!name || !phoneNumber || !className) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^[0-9]{10}$/.test(phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    setIsSubmitting(true);
    saveUserDataToCookies();
    sendSmsOtp(phoneNumber).then((newOtp) => {
      if (newOtp) {
        setStep("otp");
        setTimer(120);
      }
      setIsSubmitting(false);
    });
  };

  const handleOtpChange = (index, value) => {
    if (isVerified) return;
    if (value && !/^\d+$/.test(value)) return;

    const newOtp = [...otp];
    if (value.length > 1) {
      const pastedValue = value.slice(0, 4).split("");
      for (let i = 0; i < 4; i++) newOtp[i] = pastedValue[i] || "";
      setOtp(newOtp);
      const focusIndex = Math.min(newOtp.findIndex((val) => !val) - 1, 3);
      if (focusIndex >= 0) inputRefs.current[focusIndex]?.focus();
      if (!newOtp.includes("")) verifyOtp(newOtp.join(""));
      return;
    }

    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) inputRefs.current[index + 1]?.focus();
    if (!newOtp.includes("")) verifyOtp(newOtp.join(""));
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = (enteredOtp) => {
    if (!enteredOtp || enteredOtp.length !== 4) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      if (enteredOtp === generatedOtp) {
        setIsVerified(true);
        setShowSuccessMessage(true);
        setTimeout(closeModal, 3000);
      } else {
        toast.error("Invalid OTP. Please try again.");
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
      setIsSubmitting(false);
    }, 1000);
  };

  const resendOtp = () => {
    if (timer > 0 || isSubmitting) return;
    setIsSubmitting(true);
    setOtp(["", "", "", ""]);
    sendSmsOtp(phoneNumber).then((newOtp) => {
      if (newOtp) setTimer(120);
      setIsSubmitting(false);
      inputRefs.current[0]?.focus();
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md animate-fade-in p-4">
      <div
        ref={modalRef}
        className="w-full max-w-[360px] bg-black/50 opacity-90 backdrop-blur-lg shadow-lg rounded-2xl border border-gray-200/60 overflow-hidden transition-all duration-300 animate-bounce-in relative"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors z-10 p-2"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="px-4 py-6 sm:px-6">
          {showSuccessMessage ? (
            <div className="text-center py-6 animate-slide-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-blue-300">
                SUCCESS!
              </h2>
              <p className="text-sm text-gray-600">Thank you for verifying your details.</p>
            </div>
          ) : step === "details" ? (
            <>
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-blue-300">
                  Welcome
                </h2>
                <p className="text-sm text-white mt-1">Please enter your details to continue</p>
              </div>
              <form onSubmit={handleSubmitDetails} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-white mb-1">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-[95%] p-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-white mb-1">Phone Number</label>
                  <div className="flex">
                    <div className="flex items-center px-2.5 bg-gray-100 border border-r-0 border-gray-200 rounded-l-lg text-gray-600 text-sm">
                      +91
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      className="w-full p-2.5 text-sm border border-gray-200 rounded-r-lg bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="10-digit phone number"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="class" className="block text-xs font-medium text-white mb-1">Class/Grade</label>
                  <select
                    id="class"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    className="w-full p-2.5 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all appearance-none"
                    disabled={isSubmitting}
                    required
                  >
                    <option value="" disabled>Select your class</option>
                    {classOptions.map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>

                {!cookieConsent && (
                  <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg mx-4 mb-4 sm:mx-0 sm:mb-0">
                    <p className="text-center sm:text-left">We use cookies to enhance your experience and save your preferences.</p>
                    <div className="flex justify-center sm:justify-start mt-1">
                      <button
                        type="button"
                        onClick={handleCookieConsent}
                        className="text-blue-500 hover:text-blue-600 font-medium"
                      >
                        Accept Cookies
                      </button>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 via-blue-500 to-blue-300 text-white py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Continue <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mb-3">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <h2 className="text-lg font-semibold text-gray-200">Verify your phone</h2>
                <p className="text-xs text-gray-200 mt-1">
                  We've sent a 4-digit code to <span className="font-medium">+91 {phoneNumber}</span>
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex gap-2 justify-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength={index === 0 ? 4 : 1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className={`w-10 h-10 text-center text-lg border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all ${
                          isVerified ? "border-green-500 bg-green-50 text-green-700" : ""
                        } ${isSubmitting ? "opacity-50" : ""}`}
                        disabled={isVerified || isSubmitting}
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    {timer > 0 ? (
                      <div className="flex items-center text-xs text-gray-200">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>
                          Resend OTP in {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
                        </span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={resendOtp}
                        className="text-sm text-blue-500 hover:text-blue-600 font-medium"
                        disabled={isSubmitting}
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>
                {!isVerified && (
                  <button
                    type="button"
                    onClick={() => verifyOtp(otp.join(""))}
                    className={`w-full bg-gradient-to-r from-purple-600 via-blue-500 to-blue-300 text-white py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center text-sm font-medium ${
                      otp.includes("") || isSubmitting ? "opacity-50" : ""
                    }`}
                    disabled={otp.includes("") || isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verifying...
                      </span>
                    ) : (
                      "Verify OTP"
                    )}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpModal;