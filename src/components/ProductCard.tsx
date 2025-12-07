import { Product } from "@/types";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-hover">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {hasDiscount && (
          <Badge className="absolute right-2 top-2 bg-secondary">-{discountPercent}%</Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60">
            <Badge variant="destructive">Out of Stock</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <Badge variant="outline" className="mb-2 text-xs">
          {product.category}
        </Badge>
        <h3 className="mb-2 font-semibold line-clamp-2">{product.name}</h3>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{product.description}</p>

        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-primary">${product.price}</span>
          {hasDiscount && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
