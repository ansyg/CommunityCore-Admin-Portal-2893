import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-muted-foreground">
            Empowering communities through innovative digital solutions and seamless service delivery.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-muted-foreground hover:text-primary">Our Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </li>
            <li>
              <Link to="/faqs" className="text-muted-foreground hover:text-primary">FAQs</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/education" className="text-muted-foreground hover:text-primary">Education Services</Link>
            </li>
            <li>
              <Link to="/land-services" className="text-muted-foreground hover:text-primary">Land Services</Link>
            </li>
            <li>
              <Link to="/community" className="text-muted-foreground hover:text-primary">Community Programs</Link>
            </li>
            <li>
              <Link to="/business" className="text-muted-foreground hover:text-primary">Business Support</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">123 Community Ave, City, Country</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+1 234 567 890</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">contact@community.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Community Portal. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;