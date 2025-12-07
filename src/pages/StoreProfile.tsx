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
      <section className="relative h-64 overflow-hidden">
        <img
          src={store.banner}
          alt={store.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4 pb-6">
            <Button variant="ghost" size="sm" asChild className="mb-4 text-white hover:text-white/90">
              <Link to="/stores">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stores
              </Link>
            </Button>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
              <img
                src={store.logo}
                alt={`${store.name} logo`}
                className="h-24 w-24 rounded-xl border-4 border-card object-cover shadow-xl"
              />
              <div className="flex-1 text-white">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-bold md:text-4xl">{store.name}</h1>
                  <Badge variant="secondary">{store.category}</Badge>
                </div>
                <p className="mb-3 max-w-2xl text-white/90">{store.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="font-semibold">{store.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Package className="h-4 w-4" />
                    <span>{store.productCount} products</span>
                  </div>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={store.url} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-6 lg:grid-cols-3">
            {/* Store Info Cards */}
            <div className="lg:col-span-3">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Opening Hours */}
                {store.openingHours && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Opening Hours</h3>
                      </div>
                      <div className="space-y-2">
                        {Object.entries(store.openingHours).map(([day, hours]) => (
                          <div key={day} className="flex justify-between text-sm">
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
                    <CardContent className="p-6">
                      <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
                      <div className="space-y-3">
                        {store.socialMedia.facebook && (
                          <a
                            href={store.socialMedia.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                          >
                            <Facebook className="h-5 w-5 text-[#1877F2]" />
                            <span className="text-sm">Follow us on Facebook</span>
                            <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                          </a>
                        )}
                        {store.socialMedia.instagram && (
                          <a
                            href={store.socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                          >
                            <Instagram className="h-5 w-5 text-[#E4405F]" />
                            <span className="text-sm">Follow us on Instagram</span>
                            <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
                          </a>
                        )}
                        {store.socialMedia.twitter && (
                          <a
                            href={store.socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
                          >
                            <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                            <span className="text-sm">Follow us on Twitter</span>
                            <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground" />
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
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Our Branches</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {storeBranches.map((branch) => (
                  <Card key={branch.id}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        {branch.name}
                      </CardTitle>
                      <CardDescription>{branch.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          {branch.phone}
                        </div>
                        {branch.email && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Mail className="h-4 w-4" />
                            {branch.email}
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Opening Hours</span>
                        </div>
                        <div className="grid gap-1 text-sm">
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
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold">Current Offers</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {storeOffers.map((offer) => (
                  <OfferBanner key={offer.id} offer={offer} />
                ))}
              </div>
            </div>
          )}

          {/* Products Section */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Products</h2>
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {productCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <ProductCard product={product} />
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-muted-foreground">
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
