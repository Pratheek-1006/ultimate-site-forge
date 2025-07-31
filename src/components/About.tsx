import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Star, label: "Average Rating", value: "4.8" },
    { icon: Clock, label: "Daily Fresh Preparations", value: "100%" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Best South Indian food in Delhi! The masala dosa reminds me of my grandmother's cooking.",
      location: "Vikas Puri"
    },
    {
      name: "Rajesh Kumar", 
      rating: 5,
      comment: "Authentic taste and great service. The uttappam is absolutely delicious!",
      location: "Janakpuri"
    },
    {
      name: "Meera Patel",
      rating: 5,
      comment: "Finally found a place that serves real Tamil food. The sambar is perfect!",
      location: "Dwarka"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pepper-dark mb-4">
            About <span className="text-spice-red">South Indian Hut</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A family-owned restaurant bringing authentic Tamil flavors to Delhi since 2008
          </p>
        </div>

        {/* Founder Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-pepper-dark">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by <strong>Chef Raman Iyer</strong> from Chennai, South Indian Hut was born from a 
              passion to share authentic Tamil cuisine with Delhi. Having learned traditional recipes from 
              his mother and grandmother, Chef Raman ensures every dish maintains its original taste and quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We use only the finest ingredients - our rice is sourced from Tamil Nadu, spices are freshly 
              ground daily, and our chutneys are prepared using traditional stone grinding methods. 
              Every dosa is hand-made with love and served fresh from our kitchen.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">100% Vegetarian</Badge>
              <Badge variant="secondary" className="text-sm">No Artificial Colors</Badge>
              <Badge variant="secondary" className="text-sm">Fresh Daily</Badge>
              <Badge variant="secondary" className="text-sm">Traditional Recipes</Badge>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-spice rounded-3xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <h4 className="text-2xl font-bold">Chef Raman Iyer</h4>
                <p className="text-lg">Founder & Head Chef</p>
                <p className="text-sm mt-2">"Cooking is love made visible"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300">
                <CardContent className="pt-6">
                  <Icon className="w-12 h-12 text-spice-red mx-auto mb-4" />
                  <div className="text-3xl font-bold text-pepper-dark mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-pepper-dark text-center mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-turmeric-yellow fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-pepper-dark">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;