
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BriefcaseIcon, FileTextIcon, ArrowRightIcon } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
                Find Your Perfect <span className="text-black">Internship</span>
              </h1>
              <p className="text-lg mb-8 text-gray-700">
                Discover opportunities that match your skills and career goals. 
                Build a professional CV that stands out from the crowd.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/internships">
                    <BriefcaseIcon className="h-5 w-5" />
                    Search Internships
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to="/cv-builder">
                    <FileTextIcon className="h-5 w-5" />
                    Build Your CV
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Everything you need to land your dream internship
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Internship Search Tool</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Find opportunities matching your skills and interests with powerful filters. 
                    Track your applications and get personalized recommendations.
                  </p>
                  <Button asChild variant="outline" className="mt-2 self-start gap-1">
                    <Link to="/internships">
                      Explore Internships
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <FileTextIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Intelligent CV Builder</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    Create professional CVs with our easy-to-use templates. Get guidance 
                    on content and export your CV in different formats.
                  </p>
                  <Button asChild variant="outline" className="mt-2 self-start gap-1">
                    <Link to="/cv-builder">
                      Build Your CV
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">1,000+</p>
                <p className="text-gray-600">Internship Listings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">50+</p>
                <p className="text-gray-600">Industry Sectors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">5,000+</p>
                <p className="text-gray-600">Students Placed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-gray-600">Free to Use</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to start your internship journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create an account to save your favorite internships, track your applications, 
              and build a professional CV that gets you noticed.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/internships">
                <BriefcaseIcon className="h-5 w-5" />
                Get Started
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 internatree. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
