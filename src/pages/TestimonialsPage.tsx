
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock testimonials data
const testimonials = [
  // Fleet Owner Testimonials
  {
    type: "fleetOwner",
    quote: "We've added 10 Vachan vehicles to our fleet and seen a 30% reduction in operating costs compared to our traditional vehicles. The after-sales service is prompt and reliable.",
    name: "Rahul Sharma",
    role: "Fleet Owner, Bengaluru",
    rating: 5
  },
  {
    type: "fleetOwner",
    quote: "The range and reliability of Vachan's electric three-wheelers have transformed our logistics operations. We've reduced our carbon footprint while improving efficiency.",
    name: "Anjali Mehta",
    role: "Logistics Manager, Mumbai",
    rating: 5
  },
  {
    type: "fleetOwner",
    quote: "What impressed me most about Vachan vehicles is the minimal downtime. The battery life and the range have exceeded our expectations, and our drivers prefer these EVs now.",
    name: "Sameer Patel",
    role: "Transport Business Owner, Delhi",
    rating: 4
  },
  {
    type: "fleetOwner",
    quote: "Switching to Vachan Motors' electric vehicles for our delivery fleet has not only reduced our operating costs but also enhanced our brand image as an environmentally conscious company.",
    name: "Priya Singh",
    role: "Operations Director, Hyderabad",
    rating: 5
  },
  
  // Dealer Testimonials
  {
    type: "dealer",
    quote: "As a dealer, I've been impressed with not just the quality of Vachan's vehicles but their after-sales support and parts availability. My customers are consistently satisfied.",
    name: "Vikram Malhotra",
    role: "Dealer, Mumbai",
    rating: 5
  },
  {
    type: "dealer",
    quote: "The market response to Vachan Motors' products has been phenomenal. Their marketing support and sales training have helped me establish a successful dealership in just one year.",
    name: "Neha Kapoor",
    role: "Dealer, Chennai",
    rating: 4
  },
  {
    type: "dealer",
    quote: "Vachan Motors stands out for its dealer-friendly policies and transparent communication. The product quality and customer feedback have been consistently positive.",
    name: "Rajesh Kumar",
    role: "Dealer, Pune",
    rating: 5
  },
  {
    type: "dealer",
    quote: "I've represented multiple EV brands, but Vachan Motors' products have the lowest return rate and highest customer satisfaction. The company's growth trajectory is impressive.",
    name: "Alok Sharma",
    role: "Multi-brand Dealer, Delhi",
    rating: 4
  },
  
  // Customer Testimonials
  {
    type: "customer",
    quote: "Switching to a Vachan EV for my taxi service has been the best business decision I've made. Fuel savings alone have increased my monthly income by 25%.",
    name: "Mohan Lal",
    role: "Taxi Operator, Bengaluru",
    rating: 5
  },
  {
    type: "customer",
    quote: "The comfort and the smooth ride of my Vachan three-wheeler have improved passenger feedback. The zero emissions factor is a big plus for environmentally conscious customers.",
    name: "Suresh Kumar",
    role: "Auto Driver, Hyderabad",
    rating: 4
  },
  {
    type: "customer",
    quote: "I was skeptical about the range at first, but my Vachan EV easily completes my daily routes on a single charge. The savings on fuel and maintenance have been substantial.",
    name: "Abdul Karim",
    role: "Last-mile Delivery Partner, Mumbai",
    rating: 5
  },
  {
    type: "customer",
    quote: "The quick acceleration and nimble handling make my Vachan perfect for navigating busy city streets. I also appreciate the quiet operation that doesn't contribute to noise pollution.",
    name: "Lakshmi Rao",
    role: "Urban Mobility Provider, Chennai",
    rating: 5
  }
];

const TestimonialsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter testimonials based on active tab
  const filteredTestimonials = activeTab === "all"
    ? testimonials
    : testimonials.filter(item => item.type === activeTab);
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Stories</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover what fleet owners, dealers, and customers have to say about their experience with Vachan Motors.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Featured Testimonial */}
      <section className="section-padding">
        <div className="bg-gradient-to-r from-vachan-orange/20 to-vachan-orange/5 rounded-lg py-12 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimateOnScroll>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-vachan-orange opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-2xl font-space-grotesk mb-6">
                  "Vachan Motors has revolutionized our fleet operations. The vehicles are not just environmentally friendly but also economically advantageous, with lower operational costs and minimal maintenance requirements."
                </blockquote>
                <div className="flex items-center flex-col">
                  <p className="font-bold">Rajiv Mehta</p>
                  <p className="text-muted-foreground">CEO, GreenPath Logistics</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Testimonials Categories */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Success Stories" 
            subtitle="Read what our diverse customer base has to say about their experience with Vachan Motors." 
          />
        </AnimateOnScroll>
        
        <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 mb-8">
            <TabsTrigger value="all">All Stories</TabsTrigger>
            <TabsTrigger value="fleetOwner">Fleet Owners</TabsTrigger>
            <TabsTrigger value="dealer">Dealers</TabsTrigger>
            <TabsTrigger value="customer">Customers</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <AnimateOnScroll key={index}>
                  <TestimonialCard {...testimonial} />
                </AnimateOnScroll>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Video Testimonials */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionHeading 
              title="Video Testimonials" 
              subtitle="Watch video interviews with customers who have chosen Vachan Motors for their transportation needs." 
            />
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="w-full h-0 pb-[56.25%] relative bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-vachan-orange opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fleet Transformation Story</h3>
                  <p className="text-muted-foreground">
                    GreenPath Logistics shares how switching to Vachan EVs transformed their business.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="bg-card rounded-lg overflow-hidden shadow-md">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="w-full h-0 pb-[56.25%] relative bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-vachan-orange opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Dealer Success Story</h3>
                  <p className="text-muted-foreground">
                    Hear from our dealer partner about their journey with Vachan Motors.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Share Your Story */}
      <section className="section-padding">
        <div className="bg-card rounded-lg p-8 shadow-md">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Share Your Vachan Motors Story</h2>
              <p className="text-muted-foreground mb-8">
                We'd love to hear about your experience with our electric vehicles. Submit your testimonial below.
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="role" className="block text-sm font-medium">
                    Your Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    placeholder="e.g., Fleet Owner, Auto Driver"
                    required
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="testimonial" className="block text-sm font-medium">
                    Your Testimonial
                  </label>
                  <textarea
                    id="testimonial"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    placeholder="Tell us about your experience with Vachan Motors..."
                    required
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="bg-vachan-orange hover:bg-vachan-orange/90 text-white px-6 py-2 rounded-md"
                  >
                    Submit Your Story
                  </button>
                </div>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
