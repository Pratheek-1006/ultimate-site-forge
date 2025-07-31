import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-coconut-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pepper-dark mb-4">
            Visit <span className="text-spice-red">Our Restaurant</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Vikas Puri, we're easily accessible and ready to serve you authentic South Indian cuisine
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-8">
            <Card className="border-2 border-turmeric-yellow shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-pepper-dark">
                  <MapPin className="w-6 h-6 text-spice-red" />
                  Restaurant Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-lg">
                  <p className="font-semibold text-pepper-dark">South Indian Hut</p>
                  <p className="text-muted-foreground">GG-1/143A, Main Market</p>
                  <p className="text-muted-foreground">PVR Road, Vikas Puri</p>
                  <p className="text-muted-foreground">New Delhi - 110018</p>
                </div>
                <Button variant="spice" className="w-full gap-2">
                  <Navigation className="w-4 h-4" />
                  Get Directions on Google Maps
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-pepper-dark">
                    <Phone className="w-5 h-5 text-spice-red" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-spice-red">+91 9717828201</p>
                  <p className="text-muted-foreground">Call for orders & reservations</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-pepper-dark">
                    <Clock className="w-5 h-5 text-spice-red" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span className="font-semibold">8:00 AM - 10:00 PM</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Open all days</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Landmarks */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg text-pepper-dark">Nearby Landmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2 minutes walk from Vikas Puri Metro Station</li>
                  <li>• Opposite to Punjab National Bank</li>
                  <li>• Near Vikas Puri Main Market</li>
                  <li>• Close to PVR Cinemas</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps Embed */}
          <div className="space-y-6">
            <Card className="overflow-hidden shadow-warm">
              <div className="h-96 bg-gradient-spice flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-lg mb-4">Find us easily in Vikas Puri</p>
                  <Button variant="secondary" size="lg">
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </Card>

            {/* Delivery Info */}
            <Card className="shadow-soft border-2 border-turmeric-yellow">
              <CardHeader>
                <CardTitle className="text-xl text-pepper-dark">Home Delivery Available</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We deliver fresh, hot food to your doorstep in the following areas:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span>• Vikas Puri</span>
                  <span>• Janakpuri</span>
                  <span>• Uttam Nagar</span>
                  <span>• Dwarka Sector 1-8</span>
                  <span>• Tilak Nagar</span>
                  <span>• Subhash Nagar</span>
                </div>
                <div className="bg-turmeric-yellow/10 p-4 rounded-lg">
                  <p className="font-semibold text-pepper-dark">Free Delivery on orders above ₹300</p>
                  <p className="text-sm text-muted-foreground">Delivery charges: ₹30 for orders below ₹300</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;