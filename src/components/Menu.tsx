import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Star } from "lucide-react";

// Import all food images
import masalaDosaImg from "@/assets/masala-dosa.jpg";
import paneerDosaImg from "@/assets/paneer-dosa.jpg";
import uttappamImg from "@/assets/uttappam.jpg";
import idliVadaImg from "@/assets/idli-vada.jpg";
import plainDosaImg from "@/assets/plain-dosa.jpg";
import chowmeinImg from "@/assets/chowmein.jpg";

const Menu = () => {
  const menuCategories = [
    {
      name: "Masala Dosa",
      items: [
        { name: "Classic Masala Dosa", price: "₹80", description: "Crispy dosa with spiced potato filling", image: masalaDosaImg, rating: 4.8 },
        { name: "Special Masala Dosa", price: "₹100", description: "Extra large with premium filling", image: masalaDosaImg, rating: 4.9 },
        { name: "Ghee Masala Dosa", price: "₹90", description: "Roasted in pure ghee", image: masalaDosaImg, rating: 4.7 },
      ]
    },
    {
      name: "Paneer Dosa",
      items: [
        { name: "Paneer Masala Dosa", price: "₹120", description: "Fresh paneer with authentic spices", image: paneerDosaImg, rating: 4.8 },
        { name: "Paneer Butter Dosa", price: "₹130", description: "Rich paneer in butter gravy", image: paneerDosaImg, rating: 4.9 },
        { name: "Paneer Tikka Dosa", price: "₹140", description: "Grilled paneer tikka filling", image: paneerDosaImg, rating: 4.8 },
      ]
    },
    {
      name: "Uttappam",
      items: [
        { name: "Onion Uttappam", price: "₹70", description: "Thick pancake with onions", image: uttappamImg, rating: 4.6 },
        { name: "Mixed Vegetable Uttappam", price: "₹85", description: "Loaded with fresh vegetables", image: uttappamImg, rating: 4.7 },
        { name: "Tomato Uttappam", price: "₹75", description: "Fresh tomatoes and herbs", image: uttappamImg, rating: 4.6 },
      ]
    },
    {
      name: "Idli Vada",
      items: [
        { name: "Idli Sambar (2 pcs)", price: "₹60", description: "Steamed rice cakes with sambar", image: idliVadaImg, rating: 4.8 },
        { name: "Vada Sambar (2 pcs)", price: "₹70", description: "Crispy lentil donuts", image: idliVadaImg, rating: 4.7 },
        { name: "Idli Vada Combo", price: "₹90", description: "Best of both worlds", image: idliVadaImg, rating: 4.9 },
      ]
    },
    {
      name: "Plain Dosa",
      items: [
        { name: "Plain Dosa", price: "₹60", description: "Classic crispy dosa", image: plainDosaImg, rating: 4.5 },
        { name: "Ghee Dosa", price: "₹70", description: "Roasted in pure ghee", image: plainDosaImg, rating: 4.6 },
        { name: "Paper Dosa", price: "₹85", description: "Extra thin and crispy", image: plainDosaImg, rating: 4.7 },
      ]
    },
    {
      name: "Chowmein Items",
      items: [
        { name: "Vegetable Chowmein", price: "₹90", description: "Hakka style noodles", image: chowmeinImg, rating: 4.4 },
        { name: "Paneer Chowmein", price: "₹110", description: "With fresh paneer chunks", image: chowmeinImg, rating: 4.5 },
        { name: "Schezwan Chowmein", price: "₹100", description: "Spicy Schezwan sauce", image: chowmeinImg, rating: 4.6 },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-coconut-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pepper-dark mb-4">
            Our <span className="text-spice-red">Authentic</span> Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the rich flavors of Tamil cuisine with our traditional recipes passed down through generations
          </p>
          <div className="mt-6">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              All prices in Indian Rupees (₹)
            </Badge>
          </div>
        </div>

        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-pepper-dark mb-8 text-center">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="overflow-hidden hover:shadow-warm transition-all duration-300 border-2 hover:border-turmeric-yellow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
                        <Star className="w-4 h-4 text-turmeric-yellow fill-current" />
                        <span className="text-sm font-semibold">{item.rating}</span>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-pepper-dark">{item.name}</CardTitle>
                        <span className="text-2xl font-bold text-spice-red">{item.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <Button variant="outline" className="w-full hover:bg-spice-red hover:text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="spice" size="lg" className="text-xl px-12 py-6">
            <Phone className="w-5 h-5 mr-3" />
            Call to Order: +91 9717828201
          </Button>
          <p className="text-muted-foreground mt-4">
            Free home delivery available in Vikas Puri area
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;