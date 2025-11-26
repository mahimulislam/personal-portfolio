import { BookOpen, Calendar, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Publications = () => {
  const publications = [
    {
      title: "A Metacognitive Architecture for Correcting LLM Errors in AI Agents",
      venue: "IAAI-26: Emerging Applications of AI",
      year: "2026",
      status: "In Press",
      type: "Conference Paper",
      authors: "Mahimul Islam, et al.",
      description:
        "Introduced a two-level metacognitive architecture that localizes LLM-induced errors during entity extraction, matchmaking, and response generation. Developed a TMK-based self-model enabling the agent to introspect on its own pipeline and identify the source of misinterpretation or hallucination errors. Implemented an integrated KBAI–LLM approach combining symbolic reasoning (TMK, knowledge graph, solution library) with generative models (ChatGPT) for adaptation.",
      highlights: [
        "Two-level metacognitive architecture",
        "TMK-based self-model for introspection",
        "Integrated KBAI-LLM approach",
        "Error localization in LLM pipelines",
      ],
      keywords: ["AI Agents", "Metacognition", "LLM", "Knowledge-Based AI"],
    },
    {
      title: "Correcting LLM Errors: A Metacognitive Architecture for ToM Adaptation in AI Agents",
      venue: "ToM4AI Workshop at AAAI 2026",
      year: "Nov 2025",
      status: "Published",
      type: "Workshop Paper",
      authors: "Mahimul Islam, et al.",
      description:
        "Published workshop paper presenting a metacognitive ToM adaptation framework that integrates KBAI and GenAI for self-revision in social AI agents. Evaluated on real-world student feedback from a deployed AI social agent, achieving a 75% successful adaptation rate across 20 cases.",
      highlights: [
        "Metacognitive ToM adaptation framework",
        "75% successful adaptation rate",
        "Real-world student feedback evaluation",
        "KBAI and GenAI integration",
      ],
      keywords: ["Theory of Mind", "AI Agents", "Metacognition", "Social AI"],
    },
    {
      title: "Adaptable Social AI Agents",
      venue: "ToM4AI Workshop at AAAI 2025",
      year: "May 2025",
      status: "Published",
      type: "Workshop Paper",
      authors: "Mahimul Islam, et al.",
      description:
        "Workshop paper presenting episodic self-explanation capabilities for SAMI. Demonstrated how social AI agents can adapt their behavior based on student interactions and feedback.",
      highlights: [
        "Episodic self-explanation capabilities",
        "Social AI agent adaptation",
        "Student interaction analysis",
        "Deployed in OMSCS program",
      ],
      keywords: ["Social AI", "Adaptable Agents", "Self-Explanation", "Education"],
    },
    {
      title: "Hybrid Text Summarizer for Bangla Documents",
      venue: "International Journal of Computer Vision and Signal Processing (IJCVSP)",
      year: "Nov 2020",
      status: "Published",
      type: "Journal Article",
      authors: "Mahimul Islam (First Author), et al.",
      volume: "Vol 10, No. 1",
      description:
        "Developed a hybrid text summarization approach combining extractive and abstractive methods specifically designed for Bangla language documents. The research addresses unique challenges in Bangla NLP and demonstrates improved summarization quality over existing methods.",
      highlights: [
        "First author publication",
        "Novel hybrid approach",
        "Bangla language processing",
        "Improved summarization quality",
      ],
      keywords: ["NLP", "Text Summarization", "Machine Learning", "Bangla"],
    },
  ]

  const getStatusColor = (status: string) => {
    const colors = {
      Published: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "In Press": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Under Review": "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    }
    return colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  const getTypeColor = (type: string) => {
    const colors = {
      "Conference Paper": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      "Workshop Paper": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400",
      "Journal Article": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Publications</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research contributions in AI, NLP, and social agents with real-world impact
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-[1.01] group"
            >
              <CardHeader className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 flex-wrap gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <Badge className={getTypeColor(pub.type)}>{pub.type}</Badge>
                      <Badge variant="outline" className={getStatusColor(pub.status)}>
                        {pub.status}
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-200 leading-tight">
                      {pub.title}
                    </CardTitle>

                    <div className="space-y-1">
                      <p className="text-base font-semibold text-muted-foreground">{pub.venue}</p>
                      {pub.volume && <p className="text-sm text-muted-foreground">{pub.volume}</p>}
                    </div>
                  </div>

                  <div className="space-y-2 lg:text-right">
                    <div className="flex items-center space-x-2 text-muted-foreground lg:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{pub.year}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground lg:justify-end">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{pub.authors}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{pub.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Contributions</h4>
                  <ul className="space-y-2">
                    {pub.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((keyword) => (
                      <Badge
                        key={keyword}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span className="font-medium">{publications.length} publications in AI, NLP, and social agents</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Research focus: Metacognitive architectures, social AI agents, and natural language processing
          </p>
        </div>
      </div>
    </section>
  )
}

export default Publications
