import { BookOpen, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Publications = () => {
  const publications = [
    {
      title: "Correcting LLM Errors: A Metacognitive Architecture for ToM Adaptation in AI Agents",
      venue: "ToM4AI Workshop at AAAI 2026",
      period: "Jan 2026 (In Press)",
      description:
        "Workshop paper presenting a metacognitive ToM adaptation framework that integrates KBAI and GenAI for self-revision in social AI agents.",
      highlights: [
        "Evaluation on real-world student feedback from a deployed AI social agent with a 75% successful adaptation rate across 20 cases.",
        "Framework bridges KBAI, knowledge graphs, and generative LLM models to localize and correct reasoning drift.",
      ],
    },
    {
      title: "A Metacognitive Architecture for Correcting LLM Errors in AI Agents",
      venue: "IAAI-26: Emerging Applications of AI",
      period: "Jan 2026 (In Press)",
      description:
        "Introduced a two-level metacognitive architecture that localizes LLM-induced errors during entity extraction, matchmaking, and response generation.",
      highlights: [
        "Developed a TMK-based self-model that lets the agent introspect on its pipeline and identify sources of misinterpretation or hallucination.",
        "Implemented an integrated KBAI–LLM approach combining symbolic reasoning (TMK, knowledge graph, solution library) with generative models (ChatGPT) for adaptation.",
      ],
    },
    {
      title: "Adaptable Social AI Agents",
      venue: "ToM4AI Workshop at AAAI 2025",
      period: "May 2025",
      description:
        "Workshop paper presenting episodic self-explanation capabilities for SAMI and how social AI agents adapt their behavior based on student interactions and feedback.",
      highlights: [
        "Published paper covering episodic self-explanation for deployed SAMI social AI agent.",
        "Demonstrated how the agent adapts behavior through interpretability signals to support OMSCS students.",
      ],
    },
    {
      title: "Hybrid Text Summarizer for Bangla Documents",
      venue: "International Journal of Computer Vision and Signal Processing (IJCVSP), Vol 10, No. 1",
      period: "Nov 2020",
      description:
        "Journal paper combining extractive and abstractive methods for Bangla text summarization, addressing the language’s structural challenges and improving summarization quality.",
      highlights: [
        "First Author.",
        "Topic: Natural Language Processing, Text Summarization & Machine Learning.",
      ],
    },
  ]

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
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <Badge variant="secondary">{pub.period}</Badge>
                    </div>

                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-200 leading-tight">
                      {pub.title}
                    </CardTitle>

                    <p className="text-base font-semibold text-muted-foreground">{pub.venue}</p>
                  </div>

                  <div className="space-y-2 lg:text-right">
                    <div className="flex items-center space-x-2 text-muted-foreground lg:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{pub.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{pub.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Highlights</h4>
                  <ul className="space-y-2">
                    {pub.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
