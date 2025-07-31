import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-soft z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-spice rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SIH</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-pepper-dark">SOUTH INDIAN HUT</h1>
              <p className="text-xs text-spice-red">Authentic Vegetarian Cuisine</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-pepper-dark hover:text-spice-red transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Order Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="order" size="lg" className="gap-2">
              <Phone className="w-4 h-4" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-pepper-dark" />
            ) : (
              <Menu className="w-6 h-6 text-pepper-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-pepper-dark hover:text-spice-red transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="order" className="mt-4 gap-2">
                <Phone className="w-4 h-4" />
                Order Now: +91 9717828201
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;