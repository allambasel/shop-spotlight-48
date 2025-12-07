import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreCard from "@/components/StoreCard";
import { stores } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, Check } from "lucide-react";

const categories = ["All", "Electronics", "Fashion", "Home & Garden"];

type SortOption = "name-asc" | "name-desc" | "rating-high" | "rating-low" | "products-high" | "products-low";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "rating-high", label: "Highest Rating" },
  { value: "rating-low", label: "Lowest Rating" },
  { value: "products-high", label: "Most Products" },
  { value: "products-low", label: "Least Products" },
];

const Stores = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl && categories.includes(categoryFromUrl) ? categoryFromUrl : "All"
  );
  const [sortBy, setSortBy] = useState<SortOption>("name-asc");

  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filteredAndSortedStores = useMemo(() => {
    let result = selectedCategory === "All"
      ? [...stores]
      : stores.filter((store) => store.category === selectedCategory);

    result.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "rating-high":
          return b.rating - a.rating;
        case "rating-low":
          return a.rating - b.rating;
        case "products-high":
          return b.productCount - a.productCount;
        case "products-low":
          return a.productCount - b.productCount;
        default:
          return 0;
      }
    });

    return result;
  }, [selectedCategory, sortBy]);

  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label || "Sort";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-3 text-4xl font-bold md:text-5xl">All Stores</h1>
          <p className="text-lg text-muted-foreground">
            Explore our collection of {stores.length} verified online stores
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  {currentSortLabel}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className="flex items-center justify-between"
                  >
                    {option.label}
                    {sortBy === option.value && <Check className="h-4 w-4 text-primary" />}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>

          {filteredAndSortedStores.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No stores found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stores;
