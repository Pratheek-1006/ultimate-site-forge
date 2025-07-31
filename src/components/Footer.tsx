import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pepper-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-spice rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SIH</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">SOUTH INDIAN HUT</h3>
                <p className="text-sm text-turmeric-yellow">Authentic Vegetarian Cuisine</p>
              </div>
            </div>
            <p className="text-gray-300">
              Bringing authentic Tamil flavors to Delhi since 2008. 
              Every dish is prepared with love and traditional recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-turmeric-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-turmeric-yellow transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-300 hover:text-turmeric-yellow transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-turmeric-yellow transition-colors">About Us</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-turmeric-yellow transition-colors">Location</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-turmeric-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-turmeric-yellow">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-spice-red" />
                <span className="text-gray-300">+91 9717828201</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-spice-red" />
                <span className="text-gray-300">southindianhut@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-spice-red mt-1" />
                <span className="text-gray-300">
                  GG-1/143A, Main Market<br />
                  PVR Road, Vikas Puri<br />
                  New Delhi - 110018
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Features */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-turmeric-yellow">Opening Hours</h4>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-spice-red" />
              <div>
                <p className="text-gray-300">Monday - Sunday</p>
                <p className="text-turmeric-yellow font-semibold">8:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">✅ 100% Vegetarian</p>
              <p className="text-sm text-gray-300">🚚 Home Delivery</p>
              <p className="text-sm text-gray-300">🌱 Fresh Daily</p>
              <p className="text-sm text-gray-300">🏆 15+ Years Experience</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 South Indian Hut. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm mt-2 md:mt-0">
              Made with ❤️ for authentic South Indian food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;