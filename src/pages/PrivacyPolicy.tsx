import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Welcome to StoreHub. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information when you create an account or make a purchase.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited, time spent, and actions taken.</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                  <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience and analyze platform usage.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use collected information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related notifications</li>
                  <li>Personalize your experience and recommend products</li>
                  <li>Communicate with you about updates, offers, and promotions</li>
                  <li>Analyze usage patterns to improve our platform</li>
                  <li>Detect and prevent fraud or unauthorized activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong>Partner Stores:</strong> To fulfill orders and provide customer service.</li>
                  <li><strong>Service Providers:</strong> Third parties who help us operate our platform (payment processors, hosting services, analytics).</li>
                  <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and safety.</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We do not sell your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your data, including encryption, 
                  secure servers, and regular security audits. However, no method of transmission over the 
                  internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Cookies Policy</h2>
                <p className="text-muted-foreground">
                  We use cookies to improve functionality, analyze traffic, and personalize content. 
                  You can manage cookie preferences through your browser settings. Disabling cookies 
                  may affect some features of our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground">
                  Our platform is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children. If you believe we have collected information 
                  from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground">
                  We may update this privacy policy from time to time. We will notify you of any 
                  significant changes by posting the new policy on this page and updating the 
                  "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this privacy policy or our data practices, 
                  please contact us at:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg text-muted-foreground">
                  <p><strong>Email:</strong> privacy@storehub.com</p>
                  <p><strong>Address:</strong> 123 Commerce Street, New York, NY 10001</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
