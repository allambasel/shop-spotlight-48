import { useState } from "react";
import { Plus, Edit, Trash2, Eye, EyeOff, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

interface Banner {
  id: number;
  title: string;
  image: string;
  link: string;
  active: boolean;
  clicks: number;
}

const initialBanners: Banner[] = [
  { 
    id: 1, 
    title: "Summer Sale - Up to 50% Off", 
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&h=150&fit=crop",
    link: "/offers/summer-sale",
    active: true,
    clicks: 1234
  },
  { 
    id: 2, 
    title: "New Arrivals Collection", 
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=150&fit=crop",
    link: "/new-arrivals",
    active: true,
    clicks: 856
  },
  { 
    id: 3, 
    title: "Free Shipping Weekend", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=150&fit=crop",
    link: "/free-shipping",
    active: false,
    clicks: 432
  },
];

const DashboardBanners = () => {
  const { toast } = useToast();
  const [banners, setBanners] = useState<Banner[]>(initialBanners);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    link: "",
  });

  const toggleBanner = (id: number) => {
    setBanners(prev => 
      prev.map(banner => 
        banner.id === id ? { ...banner, active: !banner.active } : banner
      )
    );
  };

  const openAddDialog = () => {
    setEditingBanner(null);
    setFormData({ title: "", image: "", link: "" });
    setIsDialogOpen(true);
  };

  const openEditDialog = (banner: Banner) => {
    setEditingBanner(banner);
    setFormData({ title: banner.title, image: banner.image, link: banner.link });
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.image) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (editingBanner) {
      setBanners(prev =>
        prev.map(b =>
          b.id === editingBanner.id
            ? { ...b, title: formData.title, image: formData.image, link: formData.link }
            : b
        )
      );
      toast({ title: "Banner Updated", description: "Banner has been updated successfully." });
    } else {
      const newBanner: Banner = {
        id: Date.now(),
        title: formData.title,
        image: formData.image,
        link: formData.link,
        active: true,
        clicks: 0,
      };
      setBanners(prev => [...prev, newBanner]);
      toast({ title: "Banner Added", description: "New banner has been added successfully." });
    }

    setIsDialogOpen(false);
    setFormData({ title: "", image: "", link: "" });
  };

  const deleteBanner = (id: number) => {
    setBanners(prev => prev.filter(b => b.id !== id));
    toast({ title: "Banner Deleted", description: "Banner has been removed." });
  };

  return (
    <DashboardLayout title="Banners">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Promotional Banners</CardTitle>
          <Button className="gap-2" onClick={openAddDialog}>
            <Plus className="w-4 h-4" />
            Add Banner
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {banners.map((banner) => (
              <div 
                key={banner.id}
                className="flex flex-col md:flex-row gap-4 p-4 border border-border rounded-lg"
              >
                <img 
                  src={banner.image}
                  alt={banner.title}
                  className="w-full md:w-64 h-32 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{banner.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        {banner.active ? (
                          <Eye className="w-4 h-4 text-green-500" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                        )}
                        {banner.active ? "Active" : "Inactive"}
                      </span>
                      <span>{banner.clicks.toLocaleString()} clicks</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <Switch 
                        checked={banner.active}
                        onCheckedChange={() => toggleBanner(banner.id)}
                      />
                      <span className="text-sm text-muted-foreground">
                        {banner.active ? "Visible" : "Hidden"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-1" onClick={() => openEditDialog(banner)}>
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-1 text-destructive border-destructive/50 hover:bg-destructive/10"
                        onClick={() => deleteBanner(banner.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {banners.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No banners yet. Click "Add Banner" to create one.
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingBanner ? "Edit Banner" : "Add New Banner"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Banner Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Summer Sale - 50% Off"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Image URL *</Label>
              <Input
                id="image"
                placeholder="https://example.com/banner.jpg"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
              />
              {formData.image && (
                <img 
                  src={formData.image} 
                  alt="Preview" 
                  className="w-full h-32 object-cover rounded-lg mt-2"
                />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="link">Link URL (optional)</Label>
              <Input
                id="link"
                placeholder="/offers/summer-sale"
                value={formData.link}
                onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>
              {editingBanner ? "Update Banner" : "Add Banner"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default DashboardBanners;