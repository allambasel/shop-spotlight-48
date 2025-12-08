import { useState } from "react";
import { Link } from "react-router-dom";
import { Store, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="rounded-lg bg-gradient-hero p-1.5 md:p-2">
              <Store className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
            </div>
            <span className="text-lg md:text-xl font-bold">StoreHub</span>
          </Link>

          <div className="hidden flex-1 max-w-xl lg:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search stores or products..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/stores">All Stores</Link>
            </Button>
            <Button asChild>
              <Link to="/join">Join as Store</Link>
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/stores"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  All Stores
                </Link>
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Join as Store
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 lg:hidden">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search stores or products..."
              className="pl-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
