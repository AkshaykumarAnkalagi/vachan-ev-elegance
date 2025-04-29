
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-foreground pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-space-grotesk text-2xl font-bold">
                VACHAN<span className="text-vachan-orange">MOTORS</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Premium electric three-wheelers for sustainable urban mobility solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-vachan-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-vachan-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-vachan-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-vachan-orange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-space-grotesk text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-vachan-orange transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-vachan-orange transition-colors">Products</Link></li>
              <li><Link to="/service-centers" className="hover:text-vachan-orange transition-colors">Service Centers</Link></li>
              <li><Link to="/testimonials" className="hover:text-vachan-orange transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-vachan-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-space-grotesk text-lg font-bold mb-4">Enquiries</h3>
            <ul className="space-y-2">
              <li><Link to="/enquire" className="hover:text-vachan-orange transition-colors">Customer Enquiry</Link></li>
              <li><Link to="/enquire?type=dealer" className="hover:text-vachan-orange transition-colors">Dealer Enquiry</Link></li>
              <li><Link to="/contact" className="hover:text-vachan-orange transition-colors">Support</Link></li>
              <li><a href="tel:+919876543210" className="hover:text-vachan-orange transition-colors">Call Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-space-grotesk text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>123 Electric Avenue, Tech Park, Bengaluru, Karnataka 560001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+919876543210" className="hover:text-vachan-orange transition-colors">+91 9876 543 210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:info@vachanmotors.com" className="hover:text-vachan-orange transition-colors">info@vachanmotors.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border py-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Vachan Motors Pvt. Ltd. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-vachan-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-vachan-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-vachan-orange transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
