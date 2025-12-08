import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { stores, products } from "@/data/mockData";
import { ArrowLeft, ExternalLink, ShoppingCart, Heart, Share2, Package, Shield, Truck } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const store = product ? stores.find((s) => s.id === product.storeId) : null;
  const relatedProducts = product
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
    : [];

  if (!product || !store) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="mb-4 text-3xl font-bold">Product Not Found</h1>
          <Button asChild>
            <Link to="/stores">Back to Stores</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" asChild className="mb-4 md:mb-6">
            <Link to={`/store/${store.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Back to {store.name}</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </Button>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24 overflow-hidden rounded-xl md:rounded-2xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
                {hasDiscount && (
                  <Badge className="absolute right-2 top-2 md:right-4 md:top-4 bg-secondary text-sm md:text-lg">
                    -{discountPercent}%
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <Badge variant="destructive" className="text-sm md:text-lg">
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4 md:mb-6 flex items-start justify-between gap-2 md:gap-4">
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2 md:mb-3 text-xs md:text-sm">
                    {product.category}
                  </Badge>
                  <h1 className="mb-2 md:mb-3 text-2xl sm:text-3xl md:text-4xl font-bold">{product.name}</h1>
                  <p className="text-sm md:text-lg text-muted-foreground">{product.description}</p>
                </div>
                <div className="flex gap-1.5 md:gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                    <Heart className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                    <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 md:mb-8 flex flex-wrap items-baseline gap-2 md:gap-3 border-y py-4 md:py-6">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">${product.price}</span>
                {hasDiscount && (
                  <>
                    <span className="text-lg md:text-2xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="secondary" className="text-xs md:text-base">
                      Save ${product.originalPrice! - product.price}
                    </Badge>
                  </>
                )}
              </div>

              {/* Store Info */}
              <Card className="mb-4 md:mb-6">
                <CardContent className="flex items-center gap-3 md:gap-4 p-3 md:p-4">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm md:text-base truncate">{store.name}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Verified Seller</div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="text-xs md:text-sm shrink-0">
                    <Link to={`/store/${store.id}`}>Visit Store</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="mb-6 md:mb-8 flex flex-col sm:flex-row gap-2 md:gap-3">
                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button size="lg" variant="outline" asChild className="flex-1 sm:flex-none">
                  <a href={store.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Buy on Store
                  </a>
                </Button>
              </div>

              {/* Features */}
              <div className="grid gap-3 md:gap-4 grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4 text-center">
                    <div className="rounded-lg bg-accent p-1.5 md:p-2">
                      <Truck className="h-4 w-4 md:h-5 md:w-5 text-accent-foreground" />
                    </div>
                    <div className="text-xs md:text-sm font-medium">Free Shipping</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">On orders over $50</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4 text-center">
                    <div className="rounded-lg bg-accent p-1.5 md:p-2">
                      <Shield className="h-4 w-4 md:h-5 md:w-5 text-accent-foreground" />
                    </div>
                    <div className="text-xs md:text-sm font-medium">Secure</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">100% protected</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-1.5 md:gap-2 p-3 md:p-4 text-center">
                    <div className="rounded-lg bg-accent p-1.5 md:p-2">
                      <Package className="h-4 w-4 md:h-5 md:w-5 text-accent-foreground" />
                    </div>
                    <div className="text-xs md:text-sm font-medium">Easy Returns</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">30-day guarantee</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-10 md:mt-16">
              <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold">Related Products</h2>
              <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                    <ProductCard product={relatedProduct} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
