
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsCard from "@/components/StatsCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "PASS 1+3",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Compact electric three-wheeler designed for urban mobility with comfort for 3 passengers.",
    specs: {
      range: "120 km",
      speed: "45 km/h",
      battery: "6.5 kWh"
    },
    slug: "pass-1-3"
  },
  {
    name: "PASS 1+6",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    description: "Spacious electric three-wheeler with extended range and seating capacity for 6 passengers.",
    specs: {
      range: "150 km",
      speed: "40 km/h",
      battery: "8.2 kWh"
    },
    slug: "pass-1-6"
  }
];

const testimonials = [
  {
    quote: "We've added 10 Vachan vehicles to our fleet and seen a 30% reduction in operating costs compared to our traditional vehicles.",
    name: "Rahul Sharma",
    role: "Fleet Owner, Bengaluru",
    rating: 5
  },
  {
    quote: "As a dealer, I've been impressed with not just the quality of Vachan's vehicles but their after-sales support and parts availability.",
    name: "Priya Malhotra",
    role: "Dealer, Mumbai",
    rating: 5
  },
  {
    quote: "The battery life and the range of these EVs have exceeded our expectations. Our drivers prefer Vachan vehicles now.",
    name: "Sameer Patel",
    role: "Transport Business Owner",
    rating: 4
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary to-background pt-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Sustainable Mobility, <span className="text-vachan-orange">Premium Experience</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg animate-fade-in-delay-1">
              Introducing Vachan Motors' electric three-wheelers, combining elegant design with sustainable performance for the future of urban transportation.
            </p>
            <div className="space-x-4 animate-fade-in-delay-2">
              <Link to="/products">
                <Button size="lg" className="gap-2 group">
                  Explore Products 
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/enquire?type=dealer">
                <Button variant="outline" size="lg">
                  Become a Dealer
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
              alt="Vachan Electric Vehicle" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Our Premium Products" 
            subtitle="Explore our range of electric three-wheelers designed for efficiency, performance, and comfort." 
          />
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <AnimateOnScroll key={product.slug} animation={`animate-fade-in-delay-${index}`}>
              <ProductCard {...product} />
            </AnimateOnScroll>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline" size="lg" className="gap-2 group">
              View All Products
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Dealer CTA */}
      <section className="bg-vachan-orange text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Vachan Motors Dealer
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join our network of successful dealers and be part of the sustainable transportation revolution. Exclusive territories available.
            </p>
            <Link to="/enquire?type=dealer">
              <Button size="lg" variant="outline" className="bg-white text-vachan-orange hover:bg-white/90 hover:text-vachan-orange border-white">
                Apply Now
              </Button>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Company Metrics */}
      <section className="section-padding bg-secondary/50">
        <AnimateOnScroll>
          <SectionHeading 
            title="Our Impact" 
            subtitle="Driving the future of sustainable transportation with impressive numbers." 
          />
        </AnimateOnScroll>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimateOnScroll>
            <StatsCard value="10,000+" label="Vehicles on Road" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <StatsCard value="50+" label="Cities Covered" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <StatsCard value="5M+" label="Kilometers Driven" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <StatsCard value="30%" label="Lower Operating Cost" />
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="What Our Customers Say" 
            subtitle="Hear from fleet owners, drivers, and dealers who have partnered with us." 
          />
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index}>
              <TestimonialCard {...testimonial} />
            </AnimateOnScroll>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/testimonials">
            <Button variant="outline" size="lg">
              Read More Testimonials
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="bg-vachan-orange/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Have Questions? We're Here to Help
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Speak with our experts about your sustainable transportation needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button>
                  Contact Us
                </Button>
              </Link>
              <Link to="/enquire">
                <Button variant="outline">
                  Product Enquiry
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Index;
