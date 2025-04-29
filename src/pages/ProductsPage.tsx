
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Product data
const products = [
  {
    id: "pass-1-3",
    name: "PASS 1+3",
    tagline: "Compact, Efficient, Reliable",
    description: "The perfect vehicle for urban mobility, offering exceptional performance with a compact footprint. Designed for narrow streets and busy urban environments.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    specs: {
      range: "120 km",
      topSpeed: "45 km/h",
      batteryCapacity: "6.5 kWh",
      chargingTime: "3.5 hours",
      motorPower: "4.5 kW",
      payload: "350 kg",
      seatingCapacity: "1 + 3",
      suspension: "Independent, Gas-charged",
      brakes: "Hydraulic disc brakes",
      safety: ["Regenerative braking", "Roll cage protection", "Seat belts", "LED lights"]
    }
  },
  {
    id: "pass-1-6",
    name: "PASS 1+6",
    tagline: "Spacious, Powerful, Enduring",
    description: "Our flagship model designed for maximum capacity and range. Ideal for routes with higher passenger loads and longer distances between charges.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    specs: {
      range: "150 km",
      topSpeed: "40 km/h",
      batteryCapacity: "8.2 kWh",
      chargingTime: "4 hours",
      motorPower: "5.5 kW",
      payload: "550 kg",
      seatingCapacity: "1 + 6",
      suspension: "Heavy-duty, Gas-charged",
      brakes: "Dual hydraulic disc brakes",
      safety: ["Regenerative braking", "Roll cage protection", "Seat belts", "LED lights", "Reverse camera"]
    }
  }
];

const ProductsPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Electric Vehicles</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover our range of premium electric three-wheelers designed for urban mobility with sustainability at their core.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products Overview */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Our Product Range" 
            subtitle="Explore our electric three-wheeler models, each designed to meet specific transportation needs." 
          />
        </AnimateOnScroll>
        
        <Tabs defaultValue="pass-1-3" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="pass-1-3">PASS 1+3</TabsTrigger>
            <TabsTrigger value="pass-1-6">PASS 1+6</TabsTrigger>
          </TabsList>
          
          {products.map(product => (
            <TabsContent key={product.id} value={product.id}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <AnimateOnScroll>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </AnimateOnScroll>
                <AnimateOnScroll>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                    <p className="text-xl text-vachan-orange mb-4">{product.tagline}</p>
                    <p className="mb-6 text-muted-foreground">{product.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="p-3 bg-secondary rounded-lg text-center">
                        <div className="font-bold text-lg">{product.specs.range}</div>
                        <div className="text-sm text-muted-foreground">Range per Charge</div>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg text-center">
                        <div className="font-bold text-lg">{product.specs.topSpeed}</div>
                        <div className="text-sm text-muted-foreground">Top Speed</div>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg text-center">
                        <div className="font-bold text-lg">{product.specs.batteryCapacity}</div>
                        <div className="text-sm text-muted-foreground">Battery Capacity</div>
                      </div>
                      <div className="p-3 bg-secondary rounded-lg text-center">
                        <div className="font-bold text-lg">{product.specs.motorPower}</div>
                        <div className="text-sm text-muted-foreground">Motor Power</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <Link to={`/products/${product.id}`}>
                        <Button size="lg">View Details</Button>
                      </Link>
                      <Link to="/enquire">
                        <Button variant="outline" size="lg">Request Quote</Button>
                      </Link>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Detailed Specifications */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionHeading 
              title="Detailed Specifications" 
              subtitle="Compare the technical specifications of our electric three-wheeler models." 
            />
          </AnimateOnScroll>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg shadow-md">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Specification</th>
                  <th className="text-center p-4">PASS 1+3</th>
                  <th className="text-center p-4">PASS 1+6</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Range</td>
                  <td className="text-center p-4">{products[0].specs.range}</td>
                  <td className="text-center p-4">{products[1].specs.range}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Top Speed</td>
                  <td className="text-center p-4">{products[0].specs.topSpeed}</td>
                  <td className="text-center p-4">{products[1].specs.topSpeed}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Battery Capacity</td>
                  <td className="text-center p-4">{products[0].specs.batteryCapacity}</td>
                  <td className="text-center p-4">{products[1].specs.batteryCapacity}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Charging Time</td>
                  <td className="text-center p-4">{products[0].specs.chargingTime}</td>
                  <td className="text-center p-4">{products[1].specs.chargingTime}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Motor Power</td>
                  <td className="text-center p-4">{products[0].specs.motorPower}</td>
                  <td className="text-center p-4">{products[1].specs.motorPower}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Payload Capacity</td>
                  <td className="text-center p-4">{products[0].specs.payload}</td>
                  <td className="text-center p-4">{products[1].specs.payload}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Seating Capacity</td>
                  <td className="text-center p-4">{products[0].specs.seatingCapacity}</td>
                  <td className="text-center p-4">{products[1].specs.seatingCapacity}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Suspension</td>
                  <td className="text-center p-4">{products[0].specs.suspension}</td>
                  <td className="text-center p-4">{products[1].specs.suspension}</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Brakes</td>
                  <td className="text-center p-4">{products[0].specs.brakes}</td>
                  <td className="text-center p-4">{products[1].specs.brakes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Key Features" 
            subtitle="Our vehicles are packed with features that enhance performance, safety, and comfort." 
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
              <h3 className="text-xl font-bold mb-3">Advanced Battery Technology</h3>
              <p className="text-muted-foreground">
                Lithium-ion battery packs with smart BMS, offering longer range, faster charging, and extended lifecycle.
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
              <h3 className="text-xl font-bold mb-3">Comprehensive Safety Features</h3>
              <p className="text-muted-foreground">
                From regenerative braking to structural reinforcements, our vehicles prioritize driver and passenger safety.
              </p>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-vachan-orange/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Connectivity</h3>
              <p className="text-muted-foreground">
                Built-in GPS tracking, mobile app integration, and remote diagnostics for enhanced fleet management.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Enquiry CTA */}
      <section className="bg-vachan-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">Ready to Make the Switch to Electric?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss your requirements or schedule a test drive at a location near you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/enquire">
                <Button size="lg" variant="outline" className="bg-white text-vachan-orange hover:bg-white/90 hover:text-vachan-orange border-white">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="bg-transparent border-white hover:bg-white/20">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
