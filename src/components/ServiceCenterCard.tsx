
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCenterCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  imageUrl?: string;
  mapUrl: string;
}

const ServiceCenterCard = ({
  name,
  address,
  phone,
  hours,
  imageUrl,
  mapUrl
}: ServiceCenterCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <div className="flex items-start gap-2 mb-3">
          <MapPin size={18} className="shrink-0 mt-1 text-vachan-orange" />
          <span className="text-muted-foreground">{address}</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <Phone size={18} className="text-vachan-orange" />
          <a href={`tel:${phone}`} className="text-foreground hover:text-vachan-orange transition-colors">
            {phone}
          </a>
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-medium">Operating Hours:</p>
          <p className="text-sm text-muted-foreground">{hours}</p>
        </div>
        
        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="w-full">
            View on Map
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ServiceCenterCard;
