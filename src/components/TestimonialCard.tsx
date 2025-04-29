
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({
  quote,
  name,
  role,
  image,
  rating = 5,
  className,
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 shadow-md",
      className
    )}>
      {/* Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "w-5 h-5",
              i < rating ? "text-vachan-orange" : "text-muted"
            )}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <blockquote className="mb-4 italic text-foreground">{quote}</blockquote>
      <div className="flex items-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mr-4">
            <span className="text-xl font-bold">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
