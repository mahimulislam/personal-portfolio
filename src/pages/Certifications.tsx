import { Award, Calendar, ExternalLink, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Certifications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const certifications = [
    {
      title: "English Proficiency Certificate",
      issuer: "Duolingo English Test",
      date: "Jan 2025",
      expires: "Jan 2027",
      category: "Language",
      status: "Active",
      link: "#",
    },
    {
      title: "GCP – Social and Behavioral Research Best Practices for Clinical Research",
      issuer: "CITI Program",
      date: "Jan 2025",
      expires: "Jan 2028",
      credentialId: "64539651",
      category: "Research",
      status: "Active",
      link: "#",
    },
    {
      title: "CITI Health Information Privacy and Security (HIPS) for Biomedical Research",
      issuer: "CITI Program",
      date: "Aug 2024",
      expires: "Aug 2027",
      credentialId: "64539649",
      category: "Healthcare",
      status: "Active",
      link: "#",
    },
    {
      title: "Verified International Academic Qualifications",
      issuer: "World Education Services",
      date: "May 2021",
      category: "Academic",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "CUU3ZUU9RRYF",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Build a Google Firebase Web Application",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "FTL9MBC5HLST",
      category: "Web Development",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Natural Language Processing with Classification and Vector Spaces",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "LXGFAMK4RXDT",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Natural Language Processing with Probabilistic Models",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "ABBDHBTMSHVN",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Sequence Models",
      issuer: "Coursera",
      date: "Jul 2020",
      credentialId: "6PW6F7G8WDZE",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "Coursera",
      date: "Jun 2020",
      credentialId: "F99UALKP6V97",
      category: "AI/ML",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      date: "Jun 2020",
      credentialId: "HVEAHSC25CDD",
      category: "Programming",
      status: "Permanent",
      link: "#",
    },
    {
      title: "Java (Basic)",
      issuer: "HackerRank",
      date: "Jul 2020",
      credentialId: "61ebacc8a3c0",
      category: "Programming",
      status: "Permanent",
      link: "#",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "AI/ML": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      "Programming": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Web Development": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "Healthcare": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      "Research": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
      "Language": "bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400",
      "Academic": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status: string) => {
    return status === "Active" 
      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  };

  const filteredCertifications = certifications.filter(cert =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development across various domains
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={searchTerm === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchTerm("")}
            >
              All ({certifications.length})
            </Button>
            {categories.map(category => {
              const count = certifications.filter(cert => cert.category === category).length;
              return (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchTerm(category)}
                  className="hover:bg-primary hover:text-primary-foreground"
                >
                  {category} ({count})
                </Button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredCertifications.map((cert, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <Badge className={getCategoryColor(cert.category)}>
                        {cert.category}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(cert.status)}>
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    asChild
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View certification"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-200 leading-tight">
                  {cert.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-semibold text-muted-foreground">{cert.issuer}</p>
                  
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Issued: {cert.date}</span>
                    {cert.expires && <span>| Expires: {cert.expires}</span>}
                  </div>
                  
                  {cert.credentialId && (
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Credential ID:</span> {cert.credentialId}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No certifications found matching your search.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <Award className="h-4 w-4" />
            <span className="font-medium">
              {certifications.length} professional certifications earned
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;