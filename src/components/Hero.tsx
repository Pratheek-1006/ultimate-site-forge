import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-warm">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-pepper-dark leading-tight">
                Authentic
                <span className="text-spice-red block">South Indian</span>
                <span className="text-curry-orange">Flavors</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience the rich heritage of Tamil cuisine with our freshly prepared dosas, 
                uttappams, and traditional South Indian delicacies. Every dish tells a story of tradition.
              </p>
              <div className="text-pepper-dark font-medium">
                <p>🌿 100% Vegetarian | 🇮🇳 Authentic Tamil Recipes | 🏠 Family Restaurant</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="spice" size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Order by Phone: +91 9717828201
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Menu
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3 text-pepper-dark">
                <MapPin className="w-5 h-5 text-spice-red" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-muted-foreground">Vikas Puri, New Delhi</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-pepper-dark">
                <Clock className="w-5 h-5 text-spice-red" />
                <div>
                  <p className="font-semibold">Open Daily</p>
                  <p className="text-sm text-muted-foreground">8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-warm">
              <img
                src={heroImage}
                alt="Authentic South Indian Food at South Indian Hut"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Price Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-warm border-2 border-turmeric-yellow">
              <p className="text-2xl font-bold text-spice-red">Starting from</p>
              <p className="text-3xl font-bold text-pepper-dark">₹60</p>
              <p className="text-sm text-muted-foreground">Per Dish</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;