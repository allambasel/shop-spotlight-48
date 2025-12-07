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

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link to={`/store/${store.id}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {store.name}
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24 overflow-hidden rounded-2xl bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
                {hasDiscount && (
                  <Badge className="absolute right-4 top-4 bg-secondary text-lg">
                    -{discountPercent}%
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                    <Badge variant="destructive" className="text-lg">
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3">
                    {product.category}
                  </Badge>
                  <h1 className="mb-3 text-3xl font-bold md:text-4xl">{product.name}</h1>
                  <p className="text-lg text-muted-foreground">{product.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 flex items-baseline gap-3 border-y py-6">
                <span className="text-4xl font-bold text-primary">${product.price}</span>
                {hasDiscount && (
                  <>
                    <span className="text-2xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                    <Badge variant="secondary" className="text-base">
                      Save ${product.originalPrice! - product.price}
                    </Badge>
                  </>
                )}
              </div>

              {/* Store Info */}
              <Card className="mb-6">
                <CardContent className="flex items-center gap-4 p-4">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{store.name}</div>
                    <div className="text-sm text-muted-foreground">Verified Seller</div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/store/${store.id}`}>Visit Store</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="mb-8 flex gap-3">
                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={store.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Buy on Store
                  </a>
                </Button>
              </div>

              {/* Features */}
              <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
                    <div className="rounded-lg bg-accent p-2">
                      <Truck className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="text-sm font-medium">Free Shipping</div>
                    <div className="text-xs text-muted-foreground">On orders over $50</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
                    <div className="rounded-lg bg-accent p-2">
                      <Shield className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="text-sm font-medium">Secure Payment</div>
                    <div className="text-xs text-muted-foreground">100% protected</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
                    <div className="rounded-lg bg-accent p-2">
                      <Package className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="text-sm font-medium">Easy Returns</div>
                    <div className="text-xs text-muted-foreground">30-day guarantee</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold">Related Products</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
