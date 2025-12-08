import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreCard from "@/components/StoreCard";
import { Button } from "@/components/ui/button";
import { stores } from "@/data/mockData";
import { ArrowRight, TrendingUp, Store, ShoppingBag, Rocket, BarChart3, Users, Globe, Megaphone, Shield, Laptop, Shirt, Home, Sparkles } from "lucide-react";

const categories = [
  { name: "Electronics", icon: Laptop, color: "from-blue-500 to-cyan-500" },
  { name: "Fashion", icon: Shirt, color: "from-pink-500 to-rose-500" },
  { name: "Home & Garden", icon: Home, color: "from-green-500 to-emerald-500" },
];

const Index = () => {
  const navigate = useNavigate();
  const featuredStores = stores.slice(0, 3);

  const benefits = [
    { icon: Globe, title: "Global Reach", description: "Reach customers worldwide with your online storefront" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Track your sales, views, and customer engagement" },
    { icon: Megaphone, title: "Promotional Tools", description: "Create banners, offers, and campaigns easily" },
    { icon: Users, title: "Customer Base", description: "Access our growing community of active shoppers" },
    { icon: Shield, title: "Secure Platform", description: "Enterprise-grade security for your business" },
    { icon: Rocket, title: "Quick Setup", description: "Get your store up and running in minutes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-12 md:py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Amazing Stores & Products
            </h1>
            <p className="mb-6 md:mb-8 text-base md:text-lg text-primary-foreground/90 lg:text-xl">
              Your gateway to the best online stores. Browse curated collections, exclusive offers,
              and unique products all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <Link to="/stores">
                  Explore All Stores <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-card py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
              <div className="rounded-lg bg-accent p-2 sm:p-3">
                <Store className="h-5 w-5 sm:h-8 sm:w-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stores.length}+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Stores</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
              <div className="rounded-lg bg-accent p-2 sm:p-3">
                <ShoppingBag className="h-5 w-5 sm:h-8 sm:w-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">1,000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Products Listed</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
              <div className="rounded-lg bg-accent p-2 sm:p-3">
                <TrendingUp className="h-5 w-5 sm:h-8 sm:w-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">4.7</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-10 text-center">
            <h2 className="mb-2 md:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold">Browse by Category</h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Find stores that match your interests
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => navigate(`/stores?category=${encodeURIComponent(category.name)}`)}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl p-6 md:p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="relative z-10 flex flex-col items-start gap-3 md:gap-4">
                  <div className="rounded-lg md:rounded-xl bg-white/20 p-2 md:p-3 backdrop-blur-sm">
                    <category.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{category.name}</h3>
                    <p className="mt-1 text-sm md:text-base text-white/80">
                      {stores.filter(s => s.category === category.name).length} stores
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stores Section */}
      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-6 md:mb-10 text-center">
            <h2 className="mb-2 md:mb-3 text-2xl md:text-3xl lg:text-4xl font-bold">Featured Stores</h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Hand-picked stores offering quality products and great service
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link to="/stores">
                View All Stores <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Join As Store Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-12 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.2),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent)]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs md:text-sm font-medium mb-3 md:mb-4">
              For Store Owners
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 md:mb-4">
              Grow Your Business With Us
            </h2>
            <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of successful stores and reach millions of customers. 
              Our platform provides everything you need to succeed online.
            </p>
          </div>

          <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-primary-foreground mb-1.5 md:mb-2">{benefit.title}</h3>
                <p className="text-sm md:text-base text-primary-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 py-5 md:py-6" asChild>
              <Link to="/join">
                Start Selling Today <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-primary-foreground/60 mt-3 md:mt-4 text-xs md:text-sm">
              Free to join • No monthly fees • Start in minutes
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">Ready to Start Shopping?</h2>
            <p className="mb-6 md:mb-8 text-sm md:text-lg text-muted-foreground">
              Browse through our curated collection of stores and find exactly what you're looking
              for.
            </p>
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link to="/stores">Browse All Stores</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
