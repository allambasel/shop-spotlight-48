import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>
            
            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using StoreHub, you agree to be bound by these Terms and Conditions. 
                  If you disagree with any part of these terms, you may not access our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Use of Service</h2>
                <p className="text-muted-foreground mb-4">When using our platform, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information when creating an account</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the platform only for lawful purposes</li>
                  <li>Not engage in any activity that could harm the platform or other users</li>
                  <li>Not attempt to access unauthorized areas of the platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  To access certain features, you may need to create an account. You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Maintaining the confidentiality of your account information</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  We reserve the right to suspend or terminate accounts that violate these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Store Partners</h2>
                <p className="text-muted-foreground mb-4">
                  StoreHub serves as a platform connecting customers with independent store partners. 
                  Please note:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Each store is independently operated and responsible for their products and services</li>
                  <li>Transactions are between you and the respective store</li>
                  <li>Store partners have their own terms, conditions, and policies</li>
                  <li>We are not responsible for products, services, or content provided by stores</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Purchases and Payments</h2>
                <p className="text-muted-foreground mb-4">When making purchases through our platform:</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>All prices are displayed in the applicable currency and may vary by store</li>
                  <li>You agree to pay all charges at the prices listed at checkout</li>
                  <li>Payment processing is handled by secure third-party providers</li>
                  <li>Refunds and returns are subject to individual store policies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on StoreHub, including but not limited to logos, designs, text, graphics, 
                  and software, is protected by intellectual property laws. You may not copy, modify, 
                  distribute, or reproduce any content without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. User Content</h2>
                <p className="text-muted-foreground mb-4">
                  When you submit content (reviews, comments, etc.) to our platform:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You grant us a non-exclusive, royalty-free license to use, display, and distribute your content</li>
                  <li>You confirm that your content does not violate any third-party rights</li>
                  <li>You agree not to post content that is offensive, misleading, or illegal</li>
                  <li>We reserve the right to remove any content at our discretion</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, StoreHub shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to 
                  loss of profits, data, or other intangible losses, arising from your use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground">
                  The platform is provided "as is" and "as available" without warranties of any kind. 
                  We do not guarantee that the platform will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground">
                  You agree to indemnify and hold harmless StoreHub, its officers, directors, employees, 
                  and agents from any claims, damages, losses, or expenses arising from your violation 
                  of these terms or your use of the platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground">
                  These terms shall be governed by and construed in accordance with the laws of the 
                  State of New York, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of the platform after changes constitutes 
                  acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg text-muted-foreground">
                  <p><strong>Email:</strong> legal@storehub.com</p>
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

export default TermsConditions;
