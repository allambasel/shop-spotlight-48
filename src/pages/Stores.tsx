import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreCard from "@/components/StoreCard";
import { stores } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const categories = ["All", "Electronics", "Fashion", "Home & Garden"];

const Stores = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStores =
    selectedCategory === "All"
      ? stores
      : stores.filter((store) => store.category === selectedCategory);

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
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>

          {filteredStores.length === 0 && (
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
