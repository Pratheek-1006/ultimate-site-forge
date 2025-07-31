import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your feedback. We'll get back to you soon!",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-pepper-dark mb-4">
            Get in <span className="text-spice-red">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or want to share your experience? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-warm border-2 border-turmeric-yellow">
              <CardHeader>
                <CardTitle className="text-2xl text-pepper-dark">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-spice-red rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pepper-dark">Phone (Order & Inquiries)</p>
                    <p className="text-xl text-spice-red font-bold">+91 9717828201</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-curry-orange rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-pepper-dark">Email</p>
                    <p className="text-lg text-muted-foreground">southindianhut@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-turmeric-yellow rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-pepper-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-pepper-dark">WhatsApp</p>
                    <p className="text-lg text-muted-foreground">+91 9717828201</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Order */}
            <Card className="bg-gradient-spice text-white shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl">Quick Order</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">
                  For fastest service, call us directly. Our team will take your order and 
                  provide accurate delivery time and cost.
                </p>
                <Button variant="secondary" size="lg" className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now: +91 9717828201
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-xl text-pepper-dark">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="font-medium">Monday - Sunday</span>
                    <span className="text-spice-red font-semibold">8:00 AM - 10:00 PM</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We're open all days of the week including festivals and holidays
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-warm">
            <CardHeader>
              <CardTitle className="text-2xl text-pepper-dark">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your experience, suggestions, or any questions you have..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="spice" size="lg" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;