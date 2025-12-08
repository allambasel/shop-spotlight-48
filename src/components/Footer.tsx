import { Store } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
          <div className="col-span-2">
            <Link to="/" className="mb-3 md:mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-gradient-hero p-1.5 md:p-2">
                <Store className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
              </div>
              <span className="text-base md:text-lg font-bold">StoreHub</span>
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground">
              Your gateway to the best online stores. Browse curated collections, exclusive offers,
              and unique products all in one place.
            </p>
          </div>

          <div>
            <h3 className="mb-3 md:mb-4 text-sm md:text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-muted-foreground transition-colors hover:text-foreground">
                  All Stores
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 md:mb-4 text-sm md:text-base font-semibold">Legal</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-muted-foreground transition-colors hover:text-foreground">
                  Store Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 border-t pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2025 StoreHub. Connecting you with the best online stores.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
