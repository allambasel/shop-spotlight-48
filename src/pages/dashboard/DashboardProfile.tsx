import { useState } from "react";
import { Camera, Plus, Trash2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const DashboardProfile = () => {
  const { toast } = useToast();
  const [profile, setProfile] = useState({
    storeName: "TechGadgets Store",
    ownerName: "John Smith",
    email: "john@techgadgets.com",
    phone: "+1 234 567 8900",
    description: "Your one-stop shop for the latest tech gadgets and accessories. We offer premium quality products at competitive prices.",
    address: "123 Tech Street, Silicon Valley, CA 94025",
    website: "https://techgadgets.com",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=150&fit=crop"
  });

  const [socialMedia, setSocialMedia] = useState([
    { platform: "facebook", url: "https://facebook.com/techgadgets" },
    { platform: "instagram", url: "https://instagram.com/techgadgets" },
    { platform: "twitter", url: "https://twitter.com/techgadgets" },
  ]);

  const [openingHours, setOpeningHours] = useState([
    { day: "Monday", open: "09:00", close: "18:00", closed: false },
    { day: "Tuesday", open: "09:00", close: "18:00", closed: false },
    { day: "Wednesday", open: "09:00", close: "18:00", closed: false },
    { day: "Thursday", open: "09:00", close: "18:00", closed: false },
    { day: "Friday", open: "09:00", close: "18:00", closed: false },
    { day: "Saturday", open: "10:00", close: "16:00", closed: false },
    { day: "Sunday", open: "", close: "", closed: true },
  ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSocialMediaChange = (index: number, field: string, value: string) => {
    setSocialMedia(prev => prev.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const addSocialMedia = () => {
    setSocialMedia(prev => [...prev, { platform: "facebook", url: "" }]);
  };

  const removeSocialMedia = (index: number) => {
    setSocialMedia(prev => prev.filter((_, i) => i !== index));
  };

  const handleOpeningHoursChange = (index: number, field: string, value: string | boolean) => {
    setOpeningHours(prev => prev.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your store profile has been saved successfully.",
    });
  };

  return (
    <DashboardLayout title="Store Profile">
      <div className="max-w-3xl">
        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Store Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img 
                    src={profile.logo}
                    alt="Store logo"
                    className="w-24 h-24 rounded-xl object-cover border-2 border-border"
                  />
                  <button 
                    type="button"
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Upload a logo for your store. Recommended size: 200x200px.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Store Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input
                    id="storeName"
                    name="storeName"
                    value={profile.storeName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerName">Owner Name</Label>
                  <Input
                    id="ownerName"
                    name="ownerName"
                    value={profile.ownerName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://yourstore.com"
                  value={profile.website}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Store Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Store Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={profile.description}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Social Media Links</CardTitle>
              <Button type="button" variant="outline" size="sm" onClick={addSocialMedia} className="gap-1">
                <Plus className="w-4 h-4" />
                Add Link
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialMedia.map((social, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Select
                    value={social.platform}
                    onValueChange={(value) => handleSocialMediaChange(index, "platform", value)}
                  >
                    <SelectTrigger className="w-36">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="tiktok">TikTok</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    className="flex-1"
                    placeholder="Enter profile URL"
                    value={social.url}
                    onChange={(e) => handleSocialMediaChange(index, "url", e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => removeSocialMedia(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              {socialMedia.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  No social media links added. Click "Add Link" to add one.
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {openingHours.map((hours, index) => (
                <div key={hours.day} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                  <div className="w-28 font-medium text-foreground">{hours.day}</div>
                  <div className="flex items-center gap-2 flex-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hours.closed}
                        onChange={(e) => handleOpeningHoursChange(index, "closed", e.target.checked)}
                        className="rounded border-border"
                      />
                      <span className="text-sm text-muted-foreground">Closed</span>
                    </label>
                  </div>
                  {!hours.closed && (
                    <div className="flex items-center gap-2">
                      <Input
                        type="time"
                        value={hours.open}
                        onChange={(e) => handleOpeningHoursChange(index, "open", e.target.value)}
                        className="w-32"
                      />
                      <span className="text-muted-foreground">to</span>
                      <Input
                        type="time"
                        value={hours.close}
                        onChange={(e) => handleOpeningHoursChange(index, "close", e.target.value)}
                        className="w-32"
                      />
                    </div>
                  )}
                  {hours.closed && (
                    <div className="text-muted-foreground italic">Closed</div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default DashboardProfile;