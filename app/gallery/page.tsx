import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const galleryCategories = [
  {
    name: "Academic Activities",
    images: [
      {
        title: "Science Fair 2024",
        description: "Students presenting their innovative projects",
        category: "Academics",
      },
      {
        title: "Reading Program",
        description: "Students enjoying library time",
        category: "Academics",
      },
      {
        title: "Math Competition",
        description: "Students competing in mathematics challenge",
        category: "Academics",
      },
      {
        title: "Computer Lab",
        description: "ICT lessons in our new computer lab",
        category: "Academics",
      },
    ],
  },
  {
    name: "Sports & Athletics",
    images: [
      {
        title: "Sports Day 2024",
        description: "Annual inter-house sports competition",
        category: "Sports",
      },
      {
        title: "Football Team",
        description: "School football team in action",
        category: "Sports",
      },
      {
        title: "Athletics Training",
        description: "Students training for regional tournament",
        category: "Sports",
      },
      {
        title: "Netball Championship",
        description: "Girls netball team celebrating victory",
        category: "Sports",
      },
    ],
  },
  {
    name: "Cultural Events",
    images: [
      {
        title: "Music Festival",
        description: "School choir performing at annual concert",
        category: "Culture",
      },
      {
        title: "Drama Performance",
        description: "Students presenting a cultural play",
        category: "Culture",
      },
      {
        title: "Traditional Dance",
        description: "Cultural day celebrations",
        category: "Culture",
      },
      {
        title: "Art Exhibition",
        description: "Student artwork on display",
        category: "Culture",
      },
    ],
  },
  {
    name: "School Life",
    images: [
      {
        title: "Morning Assembly",
        description: "Students gathering for daily assembly",
        category: "School Life",
      },
      {
        title: "Lunch Break",
        description: "Students enjoying their lunch together",
        category: "School Life",
      },
      {
        title: "Library Time",
        description: "Students reading in the school library",
        category: "School Life",
      },
      {
        title: "Graduation Day",
        description: "Class 6 students graduating",
        category: "School Life",
      },
    ],
  },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl text-balance">School Gallery</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore moments from our vibrant school community through photos of events, activities, and daily life
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryCategories.map((category, categoryIdx) => (
        <section key={categoryIdx} className={categoryIdx % 2 === 0 ? "py-16 md:py-24" : "py-16 md:py-24 bg-muted/40"}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="font-bold text-3xl md:text-4xl">{category.name}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.images.map((image, idx) => (
                  <Card key={idx} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 via-primary/5 to-background relative overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=400&width=400&query=${encodeURIComponent(image.title)}`}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="pt-4 pb-4 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-base leading-tight">{image.title}</h3>
                        <Badge variant="secondary" className="text-xs flex-shrink-0">
                          {image.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{image.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="py-12 text-center space-y-6">
              <h2 className="font-bold text-3xl md:text-4xl text-balance">Share Your Photos</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Have photos from school events you'd like to share? We'd love to feature them in our gallery. Send your
                photos to gallery@nuruangavu.ac.ke
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
