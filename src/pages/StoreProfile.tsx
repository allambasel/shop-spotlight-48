import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import OfferBanner from "@/components/OfferBanner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { stores, products, offers, branches } from "@/data/mockData";
import { ExternalLink, Star, Package, ArrowLeft, Clock, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const StoreProfile = () => {
  const { id } = useParams();
  const store = stores.find((s) => s.id === id);
  const storeProducts = products.filter((p) => p.storeId === id);
  const storeOffers = offers.filter((o) => o.storeId === id);
  const storeBranches = branches.filter((b) => b.storeId === id);

  const [selectedCategory, setSelectedCategory] = useState("All");

  if (!store) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-4 text-3xl font-bold">Store Not Found</h1>
          <Button asChild>
            <Link to="/stores">Back to Stores</Link>
          </Button>
        </div>
      </div>
    );
  }

  const productCategories = ["All", ...Array.from(new Set(storeProducts.map((p) => p.category)))];
  const filteredProducts =
    selectedCategory === "All"
      ? storeProducts
      : storeProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Store Banner */}
      <section className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={store.banner}
          alt={store.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-4 md:pb-6">
            <Button variant="ghost" size="sm" asChild className="mb-2 md:mb-4 text-white hover:text-white/90">
              <Link to="/stores">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Back to Stores</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </Button>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
              <img
                src={store.logo}
                alt={`${store.name} logo`}
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-lg md:rounded-xl border-2 md:border-4 border-card object-cover shadow-xl"
              />
              <div className="flex-1 text-white">
                <div className="mb-1.5 md:mb-2 flex flex-wrap items-center gap-2 md:gap-3">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">{store.name}</h1>
                  <Badge variant="secondary" className="text-xs md:text-sm">{store.category}</Badge>
                </div>
                <p className="mb-2 md:mb-3 max-w-2xl text-xs sm:text-sm md:text-base text-white/90 line-clamp-2">{store.description}</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 md:h-4 md:w-4 fill-secondary text-secondary" />
                    <span className="font-semibold">{store.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Package className="h-3 w-3 md:h-4 md:w-4" />
                    <span>{store.productCount} products</span>
                  </div>
                  <Button variant="secondary" size="sm" asChild className="text-xs md:text-sm h-7 md:h-8">
                    <a href={store.url} target="_blank" rel="noopener noreferrer">
                      Visit <ExternalLink className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-12 grid gap-4 md:gap-6 lg:grid-cols-3">
            {/* Store Info Cards */}
            <div className="lg:col-span-3">
              <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
                {/* Opening Hours */}
                {store.openingHours && (
                  <Card>
                    <CardContent className="p-4 md:p-6">
                      <div className="mb-3 md:mb-4 flex items-center gap-2">
                        <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        <h3 className="text-base md:text-lg font-semibold">Opening Hours</h3>
                      </div>
                      <div className="space-y-1.5 md:space-y-2">
                        {Object.entries(store.openingHours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between text-xs md:text-sm">
                            <span className="capitalize text-muted-foreground">{day}</span>
                            <span className="font-medium">{hours}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Social Media */}
                {store.socialMedia && (
                  <Card>
                    <CardContent className="p-4 md:p-6">
                      <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">Connect With Us</h3>
                      <div className="space-y-2 md:space-y-3">
                        {store.socialMedia.facebook && (
                          <a
                            href={store.socialMedia.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 md:gap-3 rounded-lg p-2 md:p-3 transition-colors hover:bg-accent"
                          >
                            <Facebook className="h-4 w-4 md:h-5 md:w-5 text-[#1877F2]" />
                            <span className="text-xs md:text-sm">Follow us on Facebook</span>
                            <ExternalLink className="ml-auto h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                          </a>
                        )}
                        {store.socialMedia.instagram && (
                          <a
                            href={store.socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 md:gap-3 rounded-lg p-2 md:p-3 transition-colors hover:bg-accent"
                          >
                            <Instagram className="h-4 w-4 md:h-5 md:w-5 text-[#E4405F]" />
                            <span className="text-xs md:text-sm">Follow us on Instagram</span>
                            <ExternalLink className="ml-auto h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                          </a>
                        )}
                        {store.socialMedia.twitter && (
                          <a
                            href={store.socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 md:gap-3 rounded-lg p-2 md:p-3 transition-colors hover:bg-accent"
                          >
                            <Twitter className="h-4 w-4 md:h-5 md:w-5 text-[#1DA1F2]" />
                            <span className="text-xs md:text-sm">Follow us on Twitter</span>
                            <ExternalLink className="ml-auto h-3 w-3 md:h-4 md:w-4 text-muted-foreground" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Branches Section */}
          {storeBranches.length > 0 && (
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold">Our Branches</h2>
              <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
                {storeBranches.map((branch) => (
                  <Card key={branch.id}>
                    <CardHeader className="pb-2 md:pb-3 p-4 md:p-6">
                      <CardTitle className="text-base md:text-lg flex items-center gap-2">
                        <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        {branch.name}
                      </CardTitle>
                      <CardDescription className="text-xs md:text-sm">{branch.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
                      <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm">
                        <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                          <Phone className="h-3 w-3 md:h-4 md:w-4" />
                          {branch.phone}
                        </div>
                        {branch.email && (
                          <div className="flex items-center gap-1.5 md:gap-2 text-muted-foreground">
                            <Mail className="h-3 w-3 md:h-4 md:w-4" />
                            <span className="truncate max-w-[150px]">{branch.email}</span>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                          <Clock className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                          <span className="text-xs md:text-sm font-medium">Opening Hours</span>
                        </div>
                        <div className="grid gap-0.5 md:gap-1 text-xs md:text-sm">
                          {Object.entries(branch.openingHours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between">
                              <span className="capitalize text-muted-foreground">{day}</span>
                              <span>{hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Offers Section */}
          {storeOffers.length > 0 && (
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold">Current Offers</h2>
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {storeOffers.map((offer) => (
                  <OfferBanner key={offer.id} offer={offer} />
                ))}
              </div>
            </div>
          )}

          {/* Products Section */}
          <div>
            <div className="mb-4 md:mb-6 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold">Products</h2>
              <span className="text-xs md:text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>

            <div className="mb-4 md:mb-6 flex flex-wrap gap-2 overflow-x-auto pb-2">
              {productCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="shrink-0 text-xs md:text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-12 md:py-20 text-center">
                <p className="text-sm md:text-lg text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoreProfile;
