
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="rounded-lg bg-card p-6 shadow-md">
      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-vachan-orange/10 flex items-center justify-center shrink-0">
            <MapPin className="text-vachan-orange" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Address</h4>
            <p className="text-muted-foreground">123 Electric Avenue, Tech Park, Bengaluru, Karnataka 560001</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-vachan-orange/10 flex items-center justify-center shrink-0">
            <Phone className="text-vachan-orange" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <p>
              <a href="tel:+919876543210" className="text-muted-foreground hover:text-vachan-orange transition-colors">
                +91 9876 543 210
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-vachan-orange/10 flex items-center justify-center shrink-0">
            <Mail className="text-vachan-orange" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p>
              <a href="mailto:info@vachanmotors.com" className="text-muted-foreground hover:text-vachan-orange transition-colors">
                info@vachanmotors.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-vachan-orange/10 flex items-center justify-center shrink-0">
            <Clock className="text-vachan-orange" size={20} />
          </div>
          <div>
            <h4 className="font-medium mb-1">Business Hours</h4>
            <p className="text-muted-foreground">Monday to Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-vachan-orange/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-vachan-orange/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-vachan-orange/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-vachan-orange/10 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
