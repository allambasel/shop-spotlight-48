import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building strong relationships between stores and customers, creating a thriving marketplace community."
    },
    {
      icon: Target,
      title: "Quality Focus",
      description: "Every store on our platform is carefully vetted to ensure the highest quality products and customer service."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our priority. We're committed to providing exceptional support at every step."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We continuously strive to improve and innovate, setting new standards in the online marketplace industry."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/20 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About StoreHub</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to connect customers with the best online stores, 
              making shopping easier, more enjoyable, and more rewarding.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  StoreHub was founded with a simple idea: make it easier for customers to discover 
                  amazing online stores and for store owners to reach their ideal audience.
                </p>
                <p>
                  In a world of endless options, we noticed that many great stores struggled to get 
                  noticed while customers often missed out on unique products and experiences. 
                  We set out to bridge this gap.
                </p>
                <p>
                  Today, StoreHub hosts hundreds of curated stores across various categories, 
                  from fashion and electronics to home goods and specialty items. Each store 
                  is carefully selected to ensure quality and reliability.
                </p>
                <p>
                  We're more than just a marketplace – we're a community that celebrates 
                  entrepreneurship, creativity, and the joy of discovering something new.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="bg-card p-6 rounded-xl shadow-sm border text-center hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground mt-1">Partner Stores</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">50K+</p>
                <p className="text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">100K+</p>
                <p className="text-muted-foreground mt-1">Products Listed</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">4.8</p>
                <p className="text-muted-foreground mt-1">Average Rating</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
