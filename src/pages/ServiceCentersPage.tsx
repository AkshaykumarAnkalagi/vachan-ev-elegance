
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Input } from "@/components/ui/input";
import ServiceCenterCard from "@/components/ServiceCenterCard";

// Mock service centers data
const serviceCenters = [
  {
    id: 1,
    name: "Vachan Motors Service Center - Bengaluru",
    address: "123 Tech Park, Electronic City, Bengaluru, Karnataka 560100",
    phone: "+91 98765 43210",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    mapUrl: "https://maps.google.com",
    city: "Bengaluru"
  },
  {
    id: 2,
    name: "Vachan Motors Service Center - Mumbai",
    address: "456 Industrial Area, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 98765 43211",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    mapUrl: "https://maps.google.com",
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Vachan Motors Service Center - Delhi",
    address: "789 Transport Nagar, Wazirpur, Delhi 110052",
    phone: "+91 98765 43212",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    mapUrl: "https://maps.google.com",
    city: "Delhi"
  },
  {
    id: 4,
    name: "Vachan Motors Service Center - Chennai",
    address: "234 Industrial Estate, Ambattur, Chennai, Tamil Nadu 600058",
    phone: "+91 98765 43213",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    mapUrl: "https://maps.google.com",
    city: "Chennai"
  },
  {
    id: 5,
    name: "Vachan Motors Service Center - Hyderabad",
    address: "567 Tech Hub, Gachibowli, Hyderabad, Telangana 500032",
    phone: "+91 98765 43214",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    mapUrl: "https://maps.google.com",
    city: "Hyderabad"
  },
  {
    id: 6,
    name: "Vachan Motors Service Center - Pune",
    address: "890 Auto Cluster, Pimpri, Pune, Maharashtra 411018",
    phone: "+91 98765 43215",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    mapUrl: "https://maps.google.com",
    city: "Pune"
  }
];

// Extract unique cities for the filter
const cities = [...new Set(serviceCenters.map(center => center.city))];

const ServiceCentersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  
  // Filter service centers based on search and city filter
  const filteredCenters = serviceCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         center.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCity = selectedCity ? center.city === selectedCity : true;
    
    return matchesSearch && matchesCity;
  });
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Service Centers</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Find Vachan Motors service centers near you for maintenance, repairs, and support.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      
      {/* Service Centers Map */}
      <section className="section-padding">
        <AnimateOnScroll>
          <SectionHeading 
            title="Find a Service Center" 
            subtitle="Locate our service centers across the country using the interactive map below." 
          />
        </AnimateOnScroll>
        
        <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.01693270939!2d77.6538244744922!3d12.97056958727175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16795c578dcf%3A0xeda9e5d46b522075!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704434110405!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Center Locations"
          ></iframe>
        </div>
        
        {/* Service Center Directory */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Service Center Directory</h2>
          
          {/* Search and Filter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <Input
                type="search"
                placeholder="Search by name or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCity(null)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCity === null
                    ? 'bg-vachan-orange text-white'
                    : 'bg-secondary text-foreground hover:bg-vachan-orange/10'
                }`}
              >
                All Cities
              </button>
              {cities.map(city => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCity === city
                      ? 'bg-vachan-orange text-white'
                      : 'bg-secondary text-foreground hover:bg-vachan-orange/10'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          
          {/* Service Center Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map(center => (
              <AnimateOnScroll key={center.id}>
                <ServiceCenterCard {...center} />
              </AnimateOnScroll>
            ))}
            
            {filteredCenters.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-muted-foreground">No service centers found matching your search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Future Expansion */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <AnimateOnScroll>
            <SectionHeading 
              title="Our Expansion Plans" 
              subtitle="We're continuously expanding our service network to better serve our customers." 
            />
          </AnimateOnScroll>
          
          <div className="bg-card rounded-lg p-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                <p className="mb-6 text-muted-foreground">
                  We're committed to providing excellent service coverage across India. Our goal is to have a service center within 50km of every major city by the end of 2025.
                </p>
                
                <h4 className="font-bold text-lg mb-2">Upcoming Locations:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-vachan-orange"></span>
                    <span>Ahmedabad, Gujarat</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-vachan-orange"></span>
                    <span>Jaipur, Rajasthan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-vachan-orange"></span>
                    <span>Lucknow, Uttar Pradesh</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-vachan-orange"></span>
                    <span>Kolkata, West Bengal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-vachan-orange"></span>
                    <span>Bhubaneswar, Odisha</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-4">Suggest a Location</h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  We value your input. If you'd like us to consider your city for our next service center, please let us know.
                </p>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your City" />
                  </div>
                  <button className="bg-vachan-orange hover:bg-vachan-orange/90 text-white px-4 py-2 rounded w-full">
                    Submit Suggestion
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCentersPage;
