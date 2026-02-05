import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Georgia Institute of Technology",
      period: "Jan 2024 – Dec 2025",
      location: "Atlanta, GA",
      details: [
        "GPA: 3.7/4.0",
        "Specialization: Interactive Intelligence",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Ahsanullah University of Science & Technology",
      period: "Nov 2015 – Feb 2020",
      location: "Dhaka, Bangladesh",
      details: [
        "GPA: 3.43/4.0",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and academic excellence in computer science and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group"
            >
              <CardHeader className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">Graduated</Badge>
                    </div>

                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                      {edu.degree}
                    </CardTitle>

                    <p className="text-lg font-semibold text-muted-foreground">{edu.institution}</p>
                  </div>

                  <div className="space-y-2 lg:text-right">
                    <div className="flex items-center space-x-2 text-muted-foreground lg:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <p className="text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Highlights</h4>
                  <ul className="space-y-1 ml-7">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education
