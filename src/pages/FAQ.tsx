import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Store, ShoppingBag, CreditCard, Truck, Shield, Users } from "lucide-react";

const faqCategories = [
  {
    title: "Getting Started",
    icon: HelpCircle,
    questions: [
      {
        question: "What is StoreHub?",
        answer: "StoreHub is a comprehensive platform that connects customers with the best online stores. We curate collections from verified merchants, making it easy for you to discover unique products, exclusive offers, and trusted sellers all in one place."
      },
      {
        question: "How do I create an account?",
        answer: "Creating an account is simple! Click on the 'Join as Store' button if you're a merchant, or simply browse our stores as a customer without needing an account. Store owners can register by providing their business details and going through our verification process."
      },
      {
        question: "Is StoreHub free to use for customers?",
        answer: "Yes! Browsing stores, viewing products, and discovering deals on StoreHub is completely free for customers. You only pay when you make a purchase from one of our partner stores."
      }
    ]
  },
  {
    title: "For Store Owners",
    icon: Store,
    questions: [
      {
        question: "How can I list my store on StoreHub?",
        answer: "To list your store, click 'Join as Store' and complete the registration form. You'll need to provide your business information, upload your store logo, and describe your products. Our team will review your application within 2-3 business days."
      },
      {
        question: "What are the fees for store owners?",
        answer: "We offer flexible pricing plans for store owners. Basic listing is free with limited features. Premium plans include enhanced visibility, promotional tools, and analytics. Contact our sales team for detailed pricing information."
      },
      {
        question: "How do I manage my store dashboard?",
        answer: "Once approved, you can access your dashboard by logging in with your credentials. From there, you can add products, update banners, manage branches, and view your store analytics. Our intuitive interface makes store management simple and efficient."
      },
      {
        question: "Can I have multiple store locations?",
        answer: "Absolutely! StoreHub supports multi-location businesses. You can add and manage multiple branches from your dashboard, each with its own address, hours, and contact information."
      }
    ]
  },
  {
    title: "Products & Shopping",
    icon: ShoppingBag,
    questions: [
      {
        question: "How do I find products on StoreHub?",
        answer: "You can browse products by exploring individual store pages, using our search function, or filtering by categories. Featured products and special offers are highlighted on our homepage for easy discovery."
      },
      {
        question: "Are all products verified?",
        answer: "We require all store partners to verify their business and product authenticity. However, we recommend reviewing store ratings and customer feedback before making purchases. StoreHub acts as a discovery platform, and transactions occur directly with individual stores."
      },
      {
        question: "Can I compare products from different stores?",
        answer: "Yes! You can browse multiple stores and compare similar products. Each product page displays detailed information including pricing, descriptions, and store details to help you make informed decisions."
      }
    ]
  },
  {
    title: "Payments & Transactions",
    icon: CreditCard,
    questions: [
      {
        question: "How do payments work on StoreHub?",
        answer: "Payments are processed directly through individual store partners. Each store may offer different payment methods including credit cards, digital wallets, and cash on delivery. Payment terms and methods are set by each store."
      },
      {
        question: "Is my payment information secure?",
        answer: "StoreHub doesn't process payments directly. When you make a purchase, you're transacting with the individual store. We recommend only purchasing from verified stores with secure payment options. Look for stores with good ratings and reviews."
      },
      {
        question: "What currencies are accepted?",
        answer: "Currency acceptance depends on individual store policies. Most stores display prices in their local currency. Check with specific stores for their accepted payment currencies and methods."
      }
    ]
  },
  {
    title: "Shipping & Delivery",
    icon: Truck,
    questions: [
      {
        question: "How does shipping work?",
        answer: "Shipping is handled directly by each store partner. Delivery options, timeframes, and costs vary by store and location. Check individual product pages and store policies for specific shipping information."
      },
      {
        question: "Can I track my orders?",
        answer: "Order tracking is provided by individual stores. Once you place an order, the store will provide tracking information according to their policies. Contact the store directly for order status updates."
      },
      {
        question: "What if my order doesn't arrive?",
        answer: "If you experience delivery issues, contact the store directly using their provided contact information. Each store has its own policies for handling delivery problems. StoreHub can help mediate disputes if needed."
      }
    ]
  },
  {
    title: "Trust & Safety",
    icon: Shield,
    questions: [
      {
        question: "How does StoreHub verify stores?",
        answer: "We have a thorough verification process for all store partners. This includes business documentation verification, product authenticity checks, and ongoing monitoring. Stores must meet our quality standards to remain on the platform."
      },
      {
        question: "What should I do if I encounter a problem with a store?",
        answer: "First, try to resolve the issue directly with the store using their contact information. If you're unable to reach a resolution, you can file a complaint through our Contact Us page, and our support team will assist in mediating the situation."
      },
      {
        question: "How do I report suspicious activity?",
        answer: "If you notice suspicious products, fake stores, or any concerning activity, please report it immediately through our Contact Us page. Provide as much detail as possible, and our trust & safety team will investigate promptly."
      }
    ]
  },
  {
    title: "Account & Support",
    icon: Users,
    questions: [
      {
        question: "How do I contact customer support?",
        answer: "You can reach our support team through the Contact Us page. We offer email support and typically respond within 24-48 hours. For urgent matters, check our social media channels for additional support options."
      },
      {
        question: "Can I delete my store account?",
        answer: "Yes, store owners can request account deletion by contacting our support team. Please note that deleting your account will remove all your store data, products, and history from the platform. This action cannot be undone."
      },
      {
        question: "How do I update my store information?",
        answer: "Log in to your store dashboard and navigate to the Profile section. From there, you can update your store name, description, logo, contact information, and other details. Changes are typically reflected immediately."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto mb-4 md:mb-6 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary-foreground/20">
              <HelpCircle className="h-7 w-7 md:h-8 md:w-8 text-primary-foreground" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3 md:mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Find answers to common questions about StoreHub, shopping, selling, and more.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-card rounded-xl border p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-primary/10">
                      <category.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <h2 className="text-lg md:text-xl font-semibold">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-b last:border-b-0"
                      >
                        <AccordionTrigger className="text-left text-sm md:text-base hover:no-underline hover:text-primary py-3 md:py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="max-w-4xl mx-auto mt-8 md:mt-12">
              <div className="bg-muted/50 rounded-xl p-6 md:p-8 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Can't find the answer you're looking for? Our support team is here to help.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
