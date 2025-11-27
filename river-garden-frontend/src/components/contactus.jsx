import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function RestaurantTestimonials() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    agreeToPrivacy: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.message || !formData.agreeToPrivacy) {
      alert('Please fill in all fields and agree to the privacy policy');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '', agreeToPrivacy: false });
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Contact Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div>
            <div className="space-y-12">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your name :
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your Phn.no :
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter message :
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="9"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none resize-none"
                  />
                  <button
                    onClick={handleSubmit}
                    className="absolute bottom-2 right-0 bg-orange-500 text-white p-2 rounded hover:bg-orange transition-colors"
                    aria-label="Send message"
                  >
                    <Send size={20} width={50} height={51}/>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="agreeToPrivacy"
                  checked={formData.agreeToPrivacy}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                />
                <label 
                  htmlFor="privacy" 
                  style={{
                    fontFamily: 'Lora',
                    fontWeight: 501,
                    fontStyle: 'medium',
                    fontSize: '20px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  
                  }}
                >
                  I agree to the processing of my personal data in <br></br>accordance with the privacy policy
                </label>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-10">Contact to us</h2>
            
            <p className="text-gray-600 mb-8">Contact us in a convenient way :</p>

            <div className="space-y-6">
              <div>
                <p className="text-gray-600 mb-1">Phone :</p>
                <a href="tel:+94778209237" className="text-lg text-gray-900 hover:text-orange-500 transition-colors">
                  +94 77 820 9237
                </a>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Email :</p>
                <a href="mailto:rivergarden@gmail.com" className="text-lg text-gray-900 hover:text-orange-500 transition-colors">
                  rivergarden@gmail.com
                </a>
              </div>

              <div>
                <p className="text-gray-600 mb-1">Schedule :</p>
                <p className="text-lg text-gray-900">9.00 - 20.00</p>
              </div>

              <button 
                onClick={() => alert('Connecting you with our team...')}
                className="bg-orange-500 text-white text-lg font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
                style={{
                  width: '501px',
                  height: '86px',
                  top: '1608px',
                  left: '835px',
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '40px',
                  borderBottomRightRadius: '40px',
                  borderBottomLeftRadius: '40px'
                }}
              >
                Connect with our team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}