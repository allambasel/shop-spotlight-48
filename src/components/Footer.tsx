import { Store } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-gradient-hero p-2">
                <Store className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">StoreHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your gateway to the best online stores. Browse curated collections, exclusive offers,
              and unique products all in one place.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Electronics</li>
              <li className="text-muted-foreground">Fashion</li>
              <li className="text-muted-foreground">Home & Garden</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 StoreHub. Connecting you with the best online stores.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
