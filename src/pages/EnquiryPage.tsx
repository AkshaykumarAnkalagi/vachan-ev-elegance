
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EnquiryForm from "@/components/EnquiryForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EnquiryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<"customer" | "dealer">("customer");
  
  useEffect(() => {
    // Check if there's a type parameter in the URL
    const typeParam = searchParams.get("type");
    if (typeParam === "dealer") {
      setActiveTab("dealer");
    }
  }, [searchParams]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value as "customer" | "dealer");
    if (value === "dealer") {
      setSearchParams({ type: "dealer" });
    } else {
      setSearchParams({});
    }
  };
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Enquire Now</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Interested in our electric vehicles? Fill out the form below and our team will get back to you shortly.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Enquiry Forms */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <Tabs 
            defaultValue={activeTab} 
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="customer">Customer Enquiry</TabsTrigger>
              <TabsTrigger value="dealer">Dealer Enquiry</TabsTrigger>
            </TabsList>
            
            <TabsContent value="customer">
              <AnimateOnScroll>
                <EnquiryForm type="customer" />
              </AnimateOnScroll>
            </TabsContent>
            
            <TabsContent value="dealer">
              <AnimateOnScroll>
                <EnquiryForm type="dealer" />
              </AnimateOnScroll>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionHeading 
              title="Why Choose Vachan Motors" 
              subtitle="Experience the benefits of partnering with a leader in sustainable transportation." 
            />
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-vachan-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Each vehicle undergoes rigorous testing and quality checks before delivery, ensuring reliability and durability.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-vachan-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cost Efficiency</h3>
                <p className="text-muted-foreground">
                  Lower operational and maintenance costs translate to higher profits for owners and fleet operators.
                </p>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-vachan-orange/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  Our nationwide service network ensures prompt assistance and minimal downtime for your fleet.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
      
      {/* Testimonials Preview */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Customer Success Stories" 
            subtitle="Hear from those who have already made the switch to Vachan Motors." 
          />
        </AnimateOnScroll>
        
        <div className="bg-card p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll>
              <div>
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vachan-orange opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-lg mb-4">
                  "Vachan Motors has revolutionized our fleet operations. The vehicles are not just environmentally friendly but also economically advantageous."
                </blockquote>
                <div>
                  <p className="font-bold">Rajiv Mehta</p>
                  <p className="text-sm text-muted-foreground">CEO, GreenPath Logistics</p>
                </div>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll>
              <div>
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-vachan-orange opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="text-lg mb-4">
                  "As a dealer, the market response to Vachan's products has been phenomenal. Their support has helped me establish a successful dealership."
                </blockquote>
                <div>
                  <p className="font-bold">Neha Kapoor</p>
                  <p className="text-sm text-muted-foreground">Dealer, Chennai</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnquiryPage;
