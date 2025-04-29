
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StatsCard from "@/components/StatsCard";

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vachan Motors</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Pioneering sustainable urban mobility with premium electric three-wheelers designed for the future.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="mb-4">
                  Founded in 2018, Vachan Motors was born from a vision to transform urban transportation by combining cutting-edge technology with sustainable practices. Our founders, with decades of experience in the automotive industry, recognized the need for efficient, eco-friendly transportation solutions in India's rapidly growing cities.
                </p>
                <p className="mb-4">
                  Starting with a small team of engineers and designers, we developed our first prototype in a modest workshop in Bengaluru. After rigorous testing and refinement, we launched our first commercial vehicle in 2019, marking the beginning of our journey to revolutionize last-mile connectivity.
                </p>
                <p>
                  Today, Vachan Motors stands as a leader in the electric three-wheeler segment, with a nationwide presence and a commitment to continued innovation and excellence.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Vachan Motors Factory" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimateOnScroll>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-vachan-orange">Our Mission</h3>
                <p className="text-lg">
                  To accelerate the transition to sustainable transportation by providing reliable, efficient, and affordable electric vehicles that reduce environmental impact without compromising on performance or comfort.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll>
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-vachan-orange">Our Vision</h3>
                <p className="text-lg">
                  To become the most trusted and preferred electric vehicle brand in India, leading the charge towards a cleaner, greener future of mobility while enhancing the economic opportunities for our partners and stakeholders.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Vachan Motors */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Why Choose Vachan Motors" 
            subtitle="Our commitment to excellence sets us apart in the electric vehicle industry." 
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimateOnScroll>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-vachan-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Superior Range</h3>
              <p className="text-muted-foreground">
                Our vehicles offer industry-leading range of up to 150km on a single charge, ensuring your operations continue without interruption throughout the day.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-vachan-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Built to Last</h3>
              <p className="text-muted-foreground">
                With robust construction, IP67-rated electrical components, and automotive-grade materials, our vehicles are designed to withstand the demands of daily commercial use.
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
              <h3 className="text-xl font-bold mb-3">Service Excellence</h3>
              <p className="text-muted-foreground">
                With service centers in 50+ cities and a dedicated support team, we ensure your fleet stays on the road with minimal downtime and maximum efficiency.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Factory & Team */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionHeading 
              title="Our Manufacturing Excellence" 
              subtitle="State-of-the-art facilities and a dedicated team committed to quality." 
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <AnimateOnScroll>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Factory Floor" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Assembly Line" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </AnimateOnScroll>
            <AnimateOnScroll>
              <img 
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                alt="Quality Control" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg">
                Our 50,000 sq. ft. manufacturing facility in Bengaluru is equipped with cutting-edge technology and automation to ensure precision and consistency in every vehicle we produce. With a capacity to produce 10,000 vehicles annually, we're well-positioned to meet the growing demand for sustainable transportation solutions.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Vachan Motors by Numbers" 
            subtitle="Our impact in the sustainable transportation ecosystem." 
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimateOnScroll>
            <StatsCard value="5+" label="Years of Innovation" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <StatsCard value="200+" label="Talented Team Members" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <StatsCard value="100+" label="Dealer Network" />
          </AnimateOnScroll>
          <AnimateOnScroll>
            <StatsCard value="30M+" label="CO₂ Reduction (kg)" />
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
