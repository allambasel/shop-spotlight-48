import { Link } from "react-router-dom";
import { Store as StoreType } from "@/types";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, ExternalLink, Package } from "lucide-react";
import { Button } from "./ui/button";

interface StoreCardProps {
  store: StoreType;
}

const StoreCard = ({ store }: StoreCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover">
      <div className="relative h-40 overflow-hidden">
        <img
          src={store.banner}
          alt={store.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <img
          src={store.logo}
          alt={`${store.name} logo`}
          className="absolute bottom-4 left-4 h-16 w-16 rounded-lg border-2 border-card object-cover shadow-lg"
        />
      </div>

      <CardContent className="p-5">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="mb-1 text-lg font-semibold line-clamp-1">{store.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{store.description}</p>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span className="font-medium">{store.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Package className="h-4 w-4" />
            <span>{store.productCount} products</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {store.category}
          </Badge>
        </div>

        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link to={`/store/${store.id}`}>View Store</Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href={store.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreCard;
