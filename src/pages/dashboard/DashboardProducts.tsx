import { useState } from "react";
import { Plus, Search, Edit, Trash2, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

interface ProductVariant {
  id: string;
  size?: string;
  color?: string;
  price: number;
  originalPrice?: number;
  stock: number;
  sku?: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  images: string[];
  hasVariants: boolean;
  basePrice?: number;
  baseStock?: number;
  variants: ProductVariant[];
}

const initialProducts: Product[] = [
  { 
    id: 1, 
    name: "Wireless Headphones", 
    category: "Electronics", 
    description: "Premium wireless headphones with noise cancellation", 
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop"],
    hasVariants: false,
    basePrice: 129,
    baseStock: 45,
    variants: []
  },
  { 
    id: 2, 
    name: "Smart Watch Pro", 
    category: "Electronics", 
    description: "Advanced smartwatch with health tracking", 
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"],
    hasVariants: true,
    variants: [
      { id: "v1", size: "40mm", color: "Black", price: 299, stock: 15, sku: "SWP-40-BLK" },
      { id: "v2", size: "40mm", color: "Silver", price: 299, stock: 12, sku: "SWP-40-SLV" },
      { id: "v3", size: "44mm", color: "Black", price: 349, stock: 8, sku: "SWP-44-BLK" },
      { id: "v4", size: "44mm", color: "Silver", price: 349, originalPrice: 399, stock: 5, sku: "SWP-44-SLV" },
    ]
  },
  { 
    id: 3, 
    name: "Leather Backpack", 
    category: "Accessories", 
    description: "Genuine leather backpack for everyday use", 
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop"],
    hasVariants: true,
    variants: [
      { id: "v5", color: "Brown", price: 89, stock: 30, sku: "LBP-BRN" },
      { id: "v6", color: "Black", price: 89, stock: 25, sku: "LBP-BLK" },
      { id: "v7", color: "Tan", price: 99, originalPrice: 119, stock: 12, sku: "LBP-TAN" },
    ]
  },
  { 
    id: 4, 
    name: "Running Shoes", 
    category: "Footwear", 
    description: "Lightweight running shoes for athletes", 
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop"],
    hasVariants: true,
    variants: [
      { id: "v8", size: "US 8", color: "Red", price: 159, stock: 10, sku: "RS-8-RED" },
      { id: "v9", size: "US 9", color: "Red", price: 159, stock: 15, sku: "RS-9-RED" },
      { id: "v10", size: "US 10", color: "Red", price: 159, stock: 8, sku: "RS-10-RED" },
      { id: "v11", size: "US 8", color: "Black", price: 149, stock: 20, sku: "RS-8-BLK" },
      { id: "v12", size: "US 9", color: "Black", price: 149, stock: 18, sku: "RS-9-BLK" },
      { id: "v13", size: "US 10", color: "Black", price: 149, stock: 12, sku: "RS-10-BLK" },
    ]
  },
];

const categories = ["Electronics", "Accessories", "Footwear", "Clothing", "Home & Garden", "Sports"];
const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL", "US 6", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12", "36mm", "40mm", "44mm", "One Size"];
const colorOptions = ["Black", "White", "Red", "Blue", "Green", "Yellow", "Brown", "Tan", "Silver", "Gold", "Navy", "Gray", "Pink", "Purple", "Orange"];

const DashboardProducts = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [expandedProducts, setExpandedProducts] = useState<Set<number>>(new Set());
  
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    images: [""],
    hasVariants: false,
    basePrice: "",
    baseStock: "",
    variants: [] as ProductVariant[],
  });

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getProductPrice = (product: Product) => {
    if (product.hasVariants && product.variants.length > 0) {
      const prices = product.variants.map(v => v.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      return minPrice === maxPrice ? `$${minPrice}` : `$${minPrice} - $${maxPrice}`;
    }
    return `$${product.basePrice || 0}`;
  };

  const getTotalStock = (product: Product) => {
    if (product.hasVariants && product.variants.length > 0) {
      return product.variants.reduce((sum, v) => sum + v.stock, 0);
    }
    return product.baseStock || 0;
  };

  const toggleExpanded = (productId: number) => {
    setExpandedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const openAddDialog = () => {
    setEditingProduct(null);
    setFormData({ 
      name: "", 
      category: "", 
      description: "", 
      images: [""],
      hasVariants: false,
      basePrice: "",
      baseStock: "",
      variants: [],
    });
    setIsDialogOpen(true);
  };

  const openEditDialog = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      images: product.images.length > 0 ? product.images : [""],
      hasVariants: product.hasVariants,
      basePrice: product.basePrice?.toString() || "",
      baseStock: product.baseStock?.toString() || "",
      variants: [...product.variants],
    });
    setIsDialogOpen(true);
  };

  const handleImageChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map((img, i) => (i === index ? value : img)),
    }));
  };

  const addImageField = () => {
    setFormData(prev => ({ ...prev, images: [...prev.images, ""] }));
  };

  const removeImageField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const addVariant = () => {
    const newVariant: ProductVariant = {
      id: `v-${Date.now()}`,
      size: "",
      color: "",
      price: 0,
      stock: 0,
      sku: "",
    };
    setFormData(prev => ({
      ...prev,
      variants: [...prev.variants, newVariant],
    }));
  };

  const updateVariant = (index: number, field: keyof ProductVariant, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.map((v, i) => 
        i === index ? { ...v, [field]: value } : v
      ),
    }));
  };

  const removeVariant = (index: number) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.category) {
      toast({
        title: "Error",
        description: "Please fill in product name and category.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.hasVariants && (!formData.basePrice || !formData.baseStock)) {
      toast({
        title: "Error",
        description: "Please fill in price and stock for products without variants.",
        variant: "destructive",
      });
      return;
    }

    if (formData.hasVariants && formData.variants.length === 0) {
      toast({
        title: "Error",
        description: "Please add at least one variant.",
        variant: "destructive",
      });
      return;
    }

    const validImages = formData.images.filter(img => img.trim() !== "");

    if (editingProduct) {
      setProducts(prev =>
        prev.map(p =>
          p.id === editingProduct.id
            ? {
                ...p,
                name: formData.name,
                category: formData.category,
                description: formData.description,
                images: validImages,
                hasVariants: formData.hasVariants,
                basePrice: formData.hasVariants ? undefined : parseFloat(formData.basePrice),
                baseStock: formData.hasVariants ? undefined : parseInt(formData.baseStock),
                variants: formData.hasVariants ? formData.variants : [],
              }
            : p
        )
      );
      toast({ title: "Product Updated", description: "Product has been updated successfully." });
    } else {
      const newProduct: Product = {
        id: Date.now(),
        name: formData.name,
        category: formData.category,
        description: formData.description,
        images: validImages,
        hasVariants: formData.hasVariants,
        basePrice: formData.hasVariants ? undefined : parseFloat(formData.basePrice),
        baseStock: formData.hasVariants ? undefined : parseInt(formData.baseStock),
        variants: formData.hasVariants ? formData.variants : [],
      };
      setProducts(prev => [...prev, newProduct]);
      toast({ title: "Product Added", description: "New product has been added successfully." });
    }

    setIsDialogOpen(false);
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    toast({ title: "Product Deleted", description: "Product has been removed." });
  };

  return (
    <DashboardLayout title="Products">
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-2xl">Manage Products</CardTitle>
          <Button className="gap-2 w-full sm:w-auto" onClick={openAddDialog}>
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          {/* Search */}
          <div className="relative mb-4 sm:mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Products List */}
          <div className="space-y-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border border-border rounded-lg overflow-hidden">
                {/* Product Row */}
                <div className="flex items-center gap-3 p-3 sm:p-4 bg-card">
                  <img 
                    src={product.images[0] || "https://via.placeholder.com/100"} 
                    alt={product.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-foreground truncate">{product.name}</h3>
                      {product.hasVariants && (
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {product.variants.length} variants
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span>{product.category}</span>
                      <span className="font-medium text-foreground">{getProductPrice(product)}</span>
                      <span className={getTotalStock(product) > 20 ? "text-green-600" : getTotalStock(product) > 0 ? "text-yellow-600" : "text-red-600"}>
                        {getTotalStock(product)} in stock
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                    {product.hasVariants && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => toggleExpanded(product.id)}
                      >
                        {expandedProducts.has(product.id) ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEditDialog(product)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deleteProduct(product.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Variants Expansion */}
                {product.hasVariants && expandedProducts.has(product.id) && (
                  <div className="border-t border-border bg-muted/30">
                    <div className="p-3 sm:p-4">
                      <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">Variants</div>
                      <div className="hidden sm:block overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-muted-foreground">
                              <th className="pb-2 pr-4 font-medium">Size</th>
                              <th className="pb-2 pr-4 font-medium">Color</th>
                              <th className="pb-2 pr-4 font-medium">SKU</th>
                              <th className="pb-2 pr-4 font-medium">Price</th>
                              <th className="pb-2 font-medium">Stock</th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.variants.map((variant) => (
                              <tr key={variant.id} className="border-t border-border/50">
                                <td className="py-2 pr-4">{variant.size || "-"}</td>
                                <td className="py-2 pr-4">
                                  {variant.color ? (
                                    <div className="flex items-center gap-2">
                                      <div 
                                        className="w-4 h-4 rounded-full border border-border" 
                                        style={{ backgroundColor: variant.color.toLowerCase() }}
                                      />
                                      {variant.color}
                                    </div>
                                  ) : "-"}
                                </td>
                                <td className="py-2 pr-4 text-muted-foreground">{variant.sku || "-"}</td>
                                <td className="py-2 pr-4 font-medium">
                                  ${variant.price}
                                  {variant.originalPrice && (
                                    <span className="ml-2 text-muted-foreground line-through text-xs">${variant.originalPrice}</span>
                                  )}
                                </td>
                                <td className={`py-2 ${variant.stock > 10 ? "text-green-600" : variant.stock > 0 ? "text-yellow-600" : "text-red-600"}`}>
                                  {variant.stock}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {/* Mobile Variants View */}
                      <div className="sm:hidden space-y-2">
                        {product.variants.map((variant) => (
                          <div key={variant.id} className="bg-background p-2 rounded border border-border/50 text-sm">
                            <div className="flex items-center justify-between mb-1">
                              <div className="flex items-center gap-2">
                                {variant.color && (
                                  <div 
                                    className="w-3 h-3 rounded-full border border-border" 
                                    style={{ backgroundColor: variant.color.toLowerCase() }}
                                  />
                                )}
                                <span>{[variant.size, variant.color].filter(Boolean).join(" / ") || "Default"}</span>
                              </div>
                              <span className="font-medium">${variant.price}</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>{variant.sku || "No SKU"}</span>
                              <span className={variant.stock > 10 ? "text-green-600" : variant.stock > 0 ? "text-yellow-600" : "text-red-600"}>
                                {variant.stock} in stock
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No products found.
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            {/* Basic Info */}
            <div className="space-y-4">
              <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Basic Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Wireless Headphones"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your product..."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows={3}
                />
              </div>

              {/* Images */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Product Images</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addImageField} className="gap-1">
                    <Plus className="w-3 h-3" />
                    Add Image
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.images.map((image, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder="https://example.com/image.jpg"
                        value={image}
                        onChange={(e) => handleImageChange(index, e.target.value)}
                      />
                      {formData.images.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="shrink-0 text-destructive hover:bg-destructive/10"
                          onClick={() => removeImageField(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                {formData.images.filter(img => img.trim() !== "").length > 0 && (
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {formData.images.filter(img => img.trim() !== "").map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Preview ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-lg border border-border"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Variants Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="hasVariants" className="text-base">Enable Variants</Label>
                <p className="text-sm text-muted-foreground">
                  Add different sizes, colors with individual prices and stock
                </p>
              </div>
              <Switch
                id="hasVariants"
                checked={formData.hasVariants}
                onCheckedChange={(checked) => setFormData(prev => ({ 
                  ...prev, 
                  hasVariants: checked,
                  variants: checked ? prev.variants : [],
                }))}
              />
            </div>

            {/* Simple Price/Stock or Variants */}
            {!formData.hasVariants ? (
              <div className="space-y-4">
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Pricing & Stock</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="basePrice">Price ($) *</Label>
                    <Input
                      id="basePrice"
                      type="number"
                      min="0"
                      step="0.01"
                      placeholder="99.99"
                      value={formData.basePrice}
                      onChange={(e) => setFormData(prev => ({ ...prev, basePrice: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="baseStock">Stock Quantity *</Label>
                    <Input
                      id="baseStock"
                      type="number"
                      min="0"
                      placeholder="100"
                      value={formData.baseStock}
                      onChange={(e) => setFormData(prev => ({ ...prev, baseStock: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Product Variants</h3>
                  <Button type="button" variant="outline" size="sm" onClick={addVariant} className="gap-1">
                    <Plus className="w-3 h-3" />
                    Add Variant
                  </Button>
                </div>

                {formData.variants.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground border border-dashed border-border rounded-lg">
                    <p>No variants added yet.</p>
                    <p className="text-sm">Click "Add Variant" to create size/color combinations.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {formData.variants.map((variant, index) => (
                      <div key={variant.id} className="border border-border rounded-lg p-3 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Variant {index + 1}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="h-7 text-destructive hover:bg-destructive/10"
                            onClick={() => removeVariant(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          <div className="space-y-1">
                            <Label className="text-xs">Size</Label>
                            <Select
                              value={variant.size || ""}
                              onValueChange={(value) => updateVariant(index, "size", value)}
                            >
                              <SelectTrigger className="h-9">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="">None</SelectItem>
                                {sizeOptions.map((size) => (
                                  <SelectItem key={size} value={size}>{size}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Color</Label>
                            <Select
                              value={variant.color || ""}
                              onValueChange={(value) => updateVariant(index, "color", value)}
                            >
                              <SelectTrigger className="h-9">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="">None</SelectItem>
                                {colorOptions.map((color) => (
                                  <SelectItem key={color} value={color}>
                                    <div className="flex items-center gap-2">
                                      <div 
                                        className="w-3 h-3 rounded-full border" 
                                        style={{ backgroundColor: color.toLowerCase() }}
                                      />
                                      {color}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">SKU</Label>
                            <Input
                              className="h-9"
                              placeholder="SKU-001"
                              value={variant.sku || ""}
                              onChange={(e) => updateVariant(index, "sku", e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Price ($) *</Label>
                            <Input
                              className="h-9"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="99.99"
                              value={variant.price || ""}
                              onChange={(e) => updateVariant(index, "price", parseFloat(e.target.value) || 0)}
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Original Price</Label>
                            <Input
                              className="h-9"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="129.99"
                              value={variant.originalPrice || ""}
                              onChange={(e) => updateVariant(index, "originalPrice", parseFloat(e.target.value) || undefined)}
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Stock *</Label>
                            <Input
                              className="h-9"
                              type="number"
                              min="0"
                              placeholder="50"
                              value={variant.stock || ""}
                              onChange={(e) => updateVariant(index, "stock", parseInt(e.target.value) || 0)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>
              {editingProduct ? "Update Product" : "Add Product"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default DashboardProducts;
