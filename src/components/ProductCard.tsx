
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  specs: {
    range: string;
    speed: string;
    battery: string;
  };
  slug: string;
  className?: string;
}

const ProductCard = ({
  name,
  image,
  description,
  specs,
  slug,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow",
      className
    )}>
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-space-grotesk text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center p-3 bg-secondary rounded-lg">
            <div className="text-lg font-bold mb-1">{specs.range}</div>
            <div className="text-xs text-muted-foreground">Range</div>
          </div>
          <div className="text-center p-3 bg-secondary rounded-lg">
            <div className="text-lg font-bold mb-1">{specs.speed}</div>
            <div className="text-xs text-muted-foreground">Speed</div>
          </div>
          <div className="text-center p-3 bg-secondary rounded-lg">
            <div className="text-lg font-bold mb-1">{specs.battery}</div>
            <div className="text-xs text-muted-foreground">Battery</div>
          </div>
        </div>
        
        <Link to={`/products/${slug}`}>
          <Button className="w-full gap-2 group">
            View Details
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
