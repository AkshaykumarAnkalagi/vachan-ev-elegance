
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface EnquiryFormProps {
  type: "customer" | "dealer";
}

// Define separate interfaces for each form type
interface CustomerFormData {
  name: string;
  phone: string;
  email: string;
  model: string;
  city: string;
  message: string;
}

interface DealerFormData {
  businessName: string;
  contactPersonName: string;
  phone: string;
  email: string;
  cityOfInterest: string;
  fleetVolume: string;
  message: string;
}

const EnquiryForm = ({ type }: EnquiryFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const customerFormData: CustomerFormData = {
    name: "",
    phone: "",
    email: "",
    model: "",
    city: "",
    message: "",
  };

  const dealerFormData: DealerFormData = {
    businessName: "",
    contactPersonName: "",
    phone: "",
    email: "",
    cityOfInterest: "",
    fleetVolume: "",
    message: "",
  };

  // Use the proper type based on the form type
  const [formData, setFormData] = useState<CustomerFormData | DealerFormData>(
    type === "customer" ? customerFormData : dealerFormData
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Enquiry Submitted!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData(type === "customer" ? customerFormData : dealerFormData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-card p-6 md:p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">
        {type === "customer" ? "Customer Enquiry" : "Dealer Enquiry"}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {type === "customer" ? (
          // Customer Form
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={(formData as CustomerFormData).name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <Input
                  id="city"
                  name="city"
                  value={(formData as CustomerFormData).city}
                  onChange={handleChange}
                  placeholder="Bengaluru"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium mb-2">
                Select Model
              </label>
              <RadioGroup 
                defaultValue={(formData as CustomerFormData).model} 
                onValueChange={(value) => handleSelectChange("model", value)}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="PASS 1+3" id="model-1-3" />
                  <Label htmlFor="model-1-3">PASS 1+3</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="PASS 1+6" id="model-1-6" />
                  <Label htmlFor="model-1-6">PASS 1+6</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your requirements..."
                rows={4}
              />
            </div>
          </>
        ) : (
          // Dealer Form
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="businessName" className="block text-sm font-medium">
                  Business Name
                </label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={(formData as DealerFormData).businessName}
                  onChange={handleChange}
                  placeholder="ABC Motors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contactPersonName" className="block text-sm font-medium">
                  Contact Person Name
                </label>
                <Input
                  id="contactPersonName"
                  name="contactPersonName"
                  value={(formData as DealerFormData).contactPersonName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="cityOfInterest" className="block text-sm font-medium">
                  City of Interest
                </label>
                <Input
                  id="cityOfInterest"
                  name="cityOfInterest"
                  value={(formData as DealerFormData).cityOfInterest}
                  onChange={handleChange}
                  placeholder="Bengaluru"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="fleetVolume" className="block text-sm font-medium">
                  Expected Fleet Volume
                </label>
                <Select 
                  onValueChange={(value) => handleSelectChange("fleetVolume", value)}
                  defaultValue={(formData as DealerFormData).fleetVolume}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select volume" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5 vehicles</SelectItem>
                    <SelectItem value="6-20">6-20 vehicles</SelectItem>
                    <SelectItem value="21-50">21-50 vehicles</SelectItem>
                    <SelectItem value="51+">More than 50 vehicles</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your business and requirements..."
                rows={4}
              />
            </div>
          </>
        )}
        
        <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </Button>
      </form>
    </div>
  );
};

export default EnquiryForm;
