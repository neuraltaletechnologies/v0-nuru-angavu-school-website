import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"

const upcomingEvents = [
  {
    title: "Parent-Teacher Meetings",
    date: "January 17, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "School Classrooms",
    category: "Academic",
    description:
      "Meet with your child's teacher to discuss progress, strengths, and areas for development. Please schedule your appointment in advance.",
  },
  {
    title: "Inter-House Sports Day",
    date: "February 14, 2025",
    time: "8:00 AM - 4:00 PM",
    location: "School Sports Field",
    category: "Sports",
    description:
      "Annual sports competition between school houses. Students will participate in athletics, relay races, and team sports.",
  },
  {
    title: "Science Fair",
    date: "March 21, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "School Hall",
    category: "Academic",
    description:
      "Students showcase their science projects and experiments. Parents and community members are welcome to attend.",
  },
  {
    title: "Music & Drama Festival",
    date: "June 13, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "School Auditorium",
    category: "Cultural",
    description: "Evening performance featuring student choir, instrumental music, dance, and drama presentations.",
  },
  {
    title: "Academic Day Celebration",
    date: "July 18, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "School Grounds",
    category: "Academic",
    description: "Recognition of academic achievement and talent displays. Awards ceremony for top performers.",
  },
  {
    title: "Annual Sports Tournament",
    date: "October 10, 2025",
    time: "8:00 AM - 5:00 PM",
    location: "School Sports Field",
    category: "Sports",
    description:
      "Inter-school sports tournament with neighboring primary schools. Multiple sports disciplines represented.",
  },
]

const pastEvents = [
  {
    title: "Opening Day Ceremony",
    date: "January 6, 2025",
    category: "School Event",
    description: "Welcomed students back for Term 1 with an inspiring assembly and goal-setting activities.",
  },
  {
    title: "School Board Meeting",
    date: "December 15, 2024",
    category: "Administrative",
    description: "Quarterly board meeting reviewing school performance and strategic plans.",
  },
  {
    title: "Graduation Ceremony 2024",
    date: "November 15, 2024",
    category: "Graduation",
    description: "Celebrated Class 6 students completing their primary education. Memorable ceremony with families.",
  },
]

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Academic: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    Sports: "bg-green-500/10 text-green-700 dark:text-green-400",
    Cultural: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    "School Event": "bg-orange-500/10 text-orange-700 dark:text-orange-400",
    Administrative: "bg-gray-500/10 text-gray-700 dark:text-gray-400",
    Graduation: "bg-red-500/10 text-red-700 dark:text-red-400",
  }
  return colors[category] || "bg-primary/10 text-primary"
}

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl text-balance">School Events</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay informed about upcoming activities, celebrations, and important school events
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Upcoming Events</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mark your calendar for these exciting upcoming events
              </p>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl">{event.title}</CardTitle>
                        <Badge className={getCategoryColor(event.category)} variant="secondary">
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Past Events</h2>
              <p className="text-muted-foreground leading-relaxed">Recent highlights from our school community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pastEvents.map((event, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge className={getCategoryColor(event.category)} variant="secondary">
                      {event.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
