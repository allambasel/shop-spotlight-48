import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Store, HelpCircle, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { icon: Home, label: "الصفحة الرئيسية", href: "/", description: "العودة للصفحة الرئيسية" },
    { icon: Store, label: "المتاجر", href: "/stores", description: "تصفح جميع المتاجر" },
    { icon: HelpCircle, label: "الأسئلة الشائعة", href: "/faq", description: "احصل على إجابات لأسئلتك" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4" dir="rtl">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/5 backdrop-blur-sm rounded-full p-8 border border-primary/20 animate-pulse">
              <Search className="w-16 h-16 md:w-24 md:h-24 text-primary/40" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            عذراً، الصفحة غير موجودة
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها أو لم تكن موجودة من الأساس.
          </p>
          <p className="text-sm text-muted-foreground/70">
            المسار المطلوب: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-5 h-5" />
              العودة للرئيسية
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link to="/stores">
              <Store className="w-5 h-5" />
              تصفح المتاجر
            </Link>
          </Button>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="group p-6 bg-card hover:bg-accent/50 border border-border rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{link.label}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>العودة للصفحة السابقة</span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
