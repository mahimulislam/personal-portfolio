import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  const skills = ["React.js", "Node.js", "Python", "AWS", "TypeScript", "Docker", "Odoo", "Next.js"];
  
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Mahimul_Islam_Resume.pdf';
    link.download = 'Mahimul_Islam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Southbury, CT</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Mahimul Islam
                </span>
              </h1>
              
              <p className="text-2xl text-muted-foreground font-medium">
                Full Stack Engineer
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an experienced Full Stack Engineer with{" "}
                <span className="text-primary font-semibold">5+ years of expertise</span> in 
                building scalable, secure, and efficient web applications across healthcare, 
                e-commerce, and manufacturing industries. Currently the sole software engineer 
                at Maeknit Inc, developing custom ERP solutions and AI-powered tools.
              </p>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleResumeDownload}
                size="lg"
                className="gradient-primary shadow-elegant hover:shadow-lg transition-all duration-200 group"
              >
                <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  asChild
                >
                  <a
                    href="https://github.com/mahimulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/mahimulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  asChild
                >
                  <a
                    href="mailto:mahimulislam@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 shadow-elegant glow max-w-md w-full animate-float">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                    <img
                      src="/images/mahimul.jpg"
                      alt="Mahimul Islam - Full Stack Engineer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-lg">✨</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Mahimul Islam</h3>
                  <p className="text-muted-foreground">Full Stack Engineer</p>
                  <div className="flex justify-center">
                    <Badge className="gradient-primary">Available for opportunities</Badge>
                  </div>
                </div>

                <div className="pt-4 text-left space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
                    <span>Currently Full Stack Engineer at Maeknit Inc</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    <span>M.S. in Computer Science at Georgia Tech (3.7 GPA)</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    <span>Specialized in healthcare & e-commerce platforms</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "20+", label: "Certifications" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl lg:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-200">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;