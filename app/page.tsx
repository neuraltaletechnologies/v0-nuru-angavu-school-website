import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, BookOpen, Award, GraduationCap, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="font-bold text-4xl md:text-6xl text-balance">Welcome to Nuru Angavu Primary School</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              Nurturing excellence and character in every child through quality education, holistic development, and a
              supportive learning environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-balance">Why Choose Nuru Angavu?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We provide a comprehensive education that prepares students for success in academics and life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Quality Education</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experienced teachers delivering engaging lessons aligned with national curriculum standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Holistic Development</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Focus on academic, social, emotional, and physical growth through diverse programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">Safe Environment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Secure, nurturing campus where every child feels valued, supported, and inspired to learn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-balance">Quick Access</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find everything you need in one place
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/calendar" className="group">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Calendar className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">School Calendar</h3>
                  <p className="text-sm text-muted-foreground">View important dates and term schedules</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/events" className="group">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Award className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Events</h3>
                  <p className="text-sm text-muted-foreground">Upcoming school events and activities</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/parents" className="group">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mx-auto group-hover:bg-primary/20 transition-colors">
                    <Users className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Parents Hub</h3>
                  <p className="text-sm text-muted-foreground">Resources and information for parents</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/news" className="group">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mx-auto group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">News & Blog</h3>
                  <p className="text-sm text-muted-foreground">Latest updates and announcements</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-12 text-center space-y-6">
              <h2 className="font-bold text-3xl md:text-4xl text-balance">Ready to Join Our Community?</h2>
              <p className="text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
                We welcome new students and families to become part of the Nuru Angavu family. Contact us today to learn
                more about enrollment.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
