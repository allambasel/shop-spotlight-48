import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Stores from "./pages/Stores";
import StoreProfile from "./pages/StoreProfile";
import ProductDetails from "./pages/ProductDetails";
import JoinAsStore from "./pages/JoinAsStore";
import DashboardLogin from "./pages/DashboardLogin";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardProducts from "./pages/dashboard/DashboardProducts";
import DashboardBranches from "./pages/dashboard/DashboardBranches";
import DashboardBanners from "./pages/dashboard/DashboardBanners";
import DashboardProfile from "./pages/dashboard/DashboardProfile";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/store/:id" element={<StoreProfile />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/join" element={<JoinAsStore />} />
          <Route path="/login" element={<DashboardLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/products" element={<DashboardProducts />} />
          <Route path="/dashboard/branches" element={<DashboardBranches />} />
          <Route path="/dashboard/banners" element={<DashboardBanners />} />
          <Route path="/dashboard/profile" element={<DashboardProfile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
