
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowLeft } from "lucide-react";

// Product data
const products = [
  {
    id: "pass-1-3",
    name: "PASS 1+3",
    tagline: "Compact, Efficient, Reliable",
    description: "The perfect vehicle for urban mobility, offering exceptional performance with a compact footprint. Designed for narrow streets and busy urban environments.",
    longDescription: "The PASS 1+3 is our compact electric three-wheeler designed for efficient urban transportation. With seating for a driver and three passengers, it offers the perfect balance of capacity and maneuverability. Powered by a high-efficiency electric motor and advanced lithium-ion battery technology, the PASS 1+3 delivers impressive range and performance while producing zero emissions. Its robust construction and quality components ensure reliability and durability, making it the ideal choice for last-mile connectivity and urban taxi services.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    ],
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
      dimensions: "2.8 m × 1.3 m × 1.8 m",
      wheelbase: "2.1 m",
      groundClearance: "180 mm",
      tyreSize: "4.00-8, Tubeless",
      safety: ["Regenerative braking", "Roll cage protection", "Seat belts", "LED lights"]
    },
    features: [
      {
        name: "Smart Connectivity",
        description: "Built-in GPS tracking and mobile app integration for real-time monitoring and diagnostics."
      },
      {
        name: "Superior Comfort",
        description: "Ergonomic seating, enhanced suspension, and ample legroom for a smooth and comfortable ride."
      },
      {
        name: "Quick Charging",
        description: "Compatible with standard charging and fast charging options for minimal downtime."
      },
      {
        name: "Low Maintenance",
        description: "Fewer moving parts and robust components result in reduced maintenance requirements and costs."
      }
    ]
  },
  {
    id: "pass-1-6",
    name: "PASS 1+6",
    tagline: "Spacious, Powerful, Enduring",
    description: "Our flagship model designed for maximum capacity and range. Ideal for routes with higher passenger loads and longer distances between charges.",
    longDescription: "The PASS 1+6 is our premium electric three-wheeler designed for maximum passenger capacity and extended range. With seating for a driver and six passengers, it's perfect for shuttle services, school transportation, and high-density routes. The powerful electric motor and enlarged battery pack ensure that even with full capacity, the PASS 1+6 delivers reliable performance and impressive range. The reinforced chassis and suspension system are designed to handle the increased load while maintaining ride comfort and stability. Despite its larger capacity, the PASS 1+6 maintains zero emissions operation, contributing to cleaner and quieter urban environments.",
    images: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    ],
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
      dimensions: "3.2 m × 1.4 m × 1.9 m",
      wheelbase: "2.3 m",
      groundClearance: "190 mm",
      tyreSize: "4.50-10, Tubeless",
      safety: ["Regenerative braking", "Roll cage protection", "Seat belts", "LED lights", "Reverse camera"]
    },
    features: [
      {
        name: "Extended Range",
        description: "Larger battery capacity ensures longer operational hours and fewer charging stops."
      },
      {
        name: "Enhanced Capacity",
        description: "Spacious interior with comfortable seating for up to six passengers plus driver."
      },
      {
        name: "Advanced Safety",
        description: "Comprehensive safety features including reverse camera, proximity sensors, and reinforced frame."
      },
      {
        name: "Smart Fleet Management",
        description: "Advanced telematics system for real-time tracking, maintenance alerts, and performance analytics."
      }
    ]
  }
];

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  
  // Find the product based on the URL parameter
  const product = products.find(p => p.id === productId);
  
  // If product not found, show a message
  if (!product) {
    return (
      <div className="pt-24 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/products">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-24">
      {/* Product Hero */}
      <section className="section-padding">
        <Link to="/products" className="inline-flex items-center text-muted-foreground mb-8 hover:text-vachan-orange transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimateOnScroll>
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 p-2">
                {product.images.slice(0, 3).map((image, index) => (
                  <div key={index} className="rounded-md overflow-hidden aspect-w-4 aspect-h-3">
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll>
            <div>
              <span className="text-vachan-orange font-medium">Vachan Motors</span>
              <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{product.tagline}</p>
              
              <div className="prose max-w-none mb-8">
                <p>{product.longDescription}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <div className="font-bold text-lg">{product.specs.range}</div>
                  <div className="text-sm text-muted-foreground">Range per Charge</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <div className="font-bold text-lg">{product.specs.batteryCapacity}</div>
                  <div className="text-sm text-muted-foreground">Battery Capacity</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <div className="font-bold text-lg">{product.specs.motorPower}</div>
                  <div className="text-sm text-muted-foreground">Motor Power</div>
                </div>
                <div className="p-4 bg-secondary rounded-lg text-center">
                  <div className="font-bold text-lg">{product.specs.seatingCapacity}</div>
                  <div className="text-sm text-muted-foreground">Seating Capacity</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Link to="/enquire">
                  <Button size="lg">Request Quote</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">Contact Sales</Button>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Product Details Tabs */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <AnimateOnScroll>
            <Tabs defaultValue="specs" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specs" className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Range</span>
                    <p className="font-medium">{product.specs.range}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Top Speed</span>
                    <p className="font-medium">{product.specs.topSpeed}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Battery Capacity</span>
                    <p className="font-medium">{product.specs.batteryCapacity}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Charging Time</span>
                    <p className="font-medium">{product.specs.chargingTime}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Motor Power</span>
                    <p className="font-medium">{product.specs.motorPower}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Payload Capacity</span>
                    <p className="font-medium">{product.specs.payload}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Seating Capacity</span>
                    <p className="font-medium">{product.specs.seatingCapacity}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Suspension</span>
                    <p className="font-medium">{product.specs.suspension}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Brakes</span>
                    <p className="font-medium">{product.specs.brakes}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Dimensions (L×W×H)</span>
                    <p className="font-medium">{product.specs.dimensions}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Wheelbase</span>
                    <p className="font-medium">{product.specs.wheelbase}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Ground Clearance</span>
                    <p className="font-medium">{product.specs.groundClearance}</p>
                  </div>
                  <div className="border-b pb-2">
                    <span className="text-sm text-muted-foreground">Tyre Size</span>
                    <p className="font-medium">{product.specs.tyreSize}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-vachan-orange/10 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1">{feature.name}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="safety" className="bg-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Safety Features</h2>
                <p className="text-muted-foreground mb-6">
                  At Vachan Motors, safety is our priority. Our vehicles come with a comprehensive suite of safety features to protect drivers and passengers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {product.specs.safety.map((safety, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-vachan-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>{safety}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Enquiry CTA */}
      <section className="py-16 bg-vachan-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the {product.name}?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Contact us today to schedule a test drive or request a quote tailored to your specific requirements.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link to="/enquire">
                <Button size="lg" className="bg-white text-vachan-orange hover:bg-white/90">
                  Request a Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="section-padding">
        <AnimateOnScroll>
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Other Models</h2>
        </AnimateOnScroll>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {products
            .filter(p => p.id !== productId)
            .map((relatedProduct) => (
              <AnimateOnScroll key={relatedProduct.id}>
                <div className="bg-card rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-muted-foreground mb-4">{relatedProduct.description}</p>
                    <Link to={`/products/${relatedProduct.id}`}>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
