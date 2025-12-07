import { Offer } from "@/types";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Percent } from "lucide-react";

interface OfferBannerProps {
  offer: Offer;
}

const OfferBanner = ({ offer }: OfferBannerProps) => {
  const validDate = new Date(offer.validUntil).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card className="overflow-hidden border-2 border-secondary bg-gradient-to-r from-secondary/10 to-secondary/5">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Percent className="h-3 w-3" />
                {offer.discount}% OFF
              </Badge>
              <Badge variant="outline" className="gap-1 text-xs">
                <Calendar className="h-3 w-3" />
                Valid until {validDate}
              </Badge>
            </div>
            <h3 className="mb-1 text-xl font-bold">{offer.title}</h3>
            <p className="text-sm text-muted-foreground">{offer.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferBanner;
