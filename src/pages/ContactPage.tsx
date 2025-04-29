
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const ContactPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have questions or need assistance? Our team is here to help you with any inquiries about our electric vehicles.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Contact Details and Form */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Get in Touch" 
            subtitle="Reach out to us through any of our contact channels or send us a message directly." 
          />
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8">
          <AnimateOnScroll>
            <ContactInfo />
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Map Location */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Our Location" 
            subtitle="Visit our headquarters in Bengaluru or find a dealer near you." 
          />
        </AnimateOnScroll>
        
        <div className="bg-card rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.01693270939!2d77.6538244744922!3d12.97056958727175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16795c578dcf%3A0xeda9e5d46b522075!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704434110405!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vachan Motors Headquarters"
          ></iframe>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Find quick answers to common questions about our products and services." 
            />
          </AnimateOnScroll>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <AnimateOnScroll>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">What are the payment options available?</h3>
                  <p className="text-muted-foreground">
                    We offer various financing options including outright purchase, lease, and pay-per-use models. Our team can help you choose the best option based on your requirements.
                  </p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">How long does it take to charge the vehicle?</h3>
                  <p className="text-muted-foreground">
                    Our vehicles can be fully charged in 3.5-4 hours using a standard charging setup. We also offer fast charging options that can charge up to 80% in just 45 minutes.
                  </p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">What warranty is provided with the vehicles?</h3>
                  <p className="text-muted-foreground">
                    We offer a comprehensive 3-year warranty on the vehicle and a 5-year warranty on the battery pack. Extended warranty options are also available.
                  </p>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2">Are there government subsidies available?</h3>
                  <p className="text-muted-foreground">
                    Yes, our vehicles qualify for various government incentives under the FAME II scheme. Our team can guide you through the available subsidies in your state.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
