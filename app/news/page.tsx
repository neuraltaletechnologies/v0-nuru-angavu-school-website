import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

const newsArticles = [
  {
    title: "Excellent Performance in National Examinations",
    date: "January 15, 2025",
    author: "Mrs. Grace Mwangi",
    category: "Academics",
    excerpt:
      "Freedom and Victory Primary School celebrates outstanding results in the 2024 national examinations, with 85% of students achieving above average marks.",
    content:
      "We are thrilled to announce that our Class 6 students from 2024 achieved remarkable results in their national examinations. The dedication of our teachers, support from parents, and hard work of our students has paid off tremendously.",
  },
  {
    title: "New Computer Lab Officially Opened",
    date: "January 10, 2025",
    author: "Mr. David Ochieng",
    category: "Infrastructure",
    excerpt:
      "State-of-the-art computer laboratory now available for students, enhancing digital literacy and ICT skills development.",
    content:
      "Thanks to generous donations from parents and local businesses, we now have a modern computer lab with 30 workstations. This facility will greatly enhance our ICT curriculum and prepare students for the digital age.",
  },
  {
    title: "Inter-School Sports Tournament Victory",
    date: "December 18, 2024",
    author: "Mr. James Karanja",
    category: "Sports",
    excerpt:
      "Our school team brought home three trophies from the regional primary schools sports tournament held last weekend.",
    content:
      "Congratulations to our athletic teams who competed brilliantly at the regional tournament. We won gold in girls netball, silver in boys football, and bronze in athletics. Well done to all participants!",
  },
  {
    title: "Science Fair Showcases Student Innovation",
    date: "December 5, 2024",
    author: "Mrs. Sarah Kimani",
    category: "Academics",
    excerpt:
      "Students impressed judges and parents with creative science projects ranging from renewable energy to water purification systems.",
    content:
      "Our annual Science Fair was a tremendous success, with over 50 projects on display. Students demonstrated remarkable creativity and scientific thinking, tackling real-world problems with innovative solutions.",
  },
  {
    title: "Community Outreach Program Launched",
    date: "November 28, 2024",
    author: "Mrs. Elizabeth Wambui",
    category: "Community",
    excerpt:
      "Students and staff visit local children's home, bringing donations and spreading joy through music and drama performances.",
    content:
      "As part of our values education, students participated in a community outreach program. They donated books, school supplies, and performed for children at a local home, learning valuable lessons about compassion and giving back.",
  },
  {
    title: "Parent-Teacher Partnership Strengthened",
    date: "November 15, 2024",
    author: "Mr. David Ochieng",
    category: "Community",
    excerpt:
      "Record attendance at parent-teacher meetings shows strong commitment to student success and school development.",
    content:
      "We were delighted to see over 90% parent attendance at our recent meetings. This strong partnership between home and school is crucial for our students' success. Thank you to all parents for your continued support.",
  },
]

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Academics: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    Sports: "bg-green-500/10 text-green-700 dark:text-green-400",
    Infrastructure: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    Community: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  }
  return colors[category] || "bg-primary/10 text-primary"
}

export default function NewsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl text-balance">News & Blog</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay updated with the latest news, achievements, and stories from our school community
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12">
                <Badge className={getCategoryColor(newsArticles[0].category)} variant="secondary">
                  {newsArticles[0].category}
                </Badge>
                <CardTitle className="text-3xl md:text-4xl mt-4 mb-4">{newsArticles[0].title}</CardTitle>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{newsArticles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{newsArticles[0].author}</span>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{newsArticles[0].excerpt}</p>
                <p className="text-muted-foreground leading-relaxed">{newsArticles[0].content}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Recent Updates</h2>
              <p className="text-muted-foreground leading-relaxed">More news and stories from our school community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles.slice(1).map((article, idx) => (
                <Card key={idx} className="flex flex-col">
                  <CardHeader>
                    <Badge
                      className={getCategoryColor(article.category)}
                      variant="secondary"
                      style={{ width: "fit-content" }}
                    >
                      {article.category}
                    </Badge>
                    <CardTitle className="text-xl mt-2">{article.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground pt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3">
                    <p className="text-muted-foreground leading-relaxed">{article.excerpt}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="py-12 text-center space-y-6">
              <h2 className="font-bold text-3xl md:text-4xl text-balance">Stay Connected</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Want to receive our latest news and updates directly in your inbox? Contact us to subscribe to our
                monthly newsletter and never miss important announcements.
              </p>
              <Link href="/contact">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  Subscribe to Newsletter
                </button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
