import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, BookOpen } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl text-balance">About Freedom and Victory Primary School</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building a foundation for lifelong learning and character development
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Freedom and Victory Primary School was established with a vision to provide quality education that transforms
                  lives and builds strong foundations for future success. Our name, which means "Light of Excellence,"
                  reflects our commitment to illuminating the path of learning for every child.
                </p>
                <p>
                  Over the years, we have grown into a respected institution known for academic excellence, character
                  development, and holistic education. We take pride in our dedicated staff, supportive parent
                  community, and the achievements of our students.
                </p>
                <p>
                  Our school is more than just a place of learning—it's a community where children develop confidence,
                  discover their talents, and build lasting friendships. We believe every child has unique potential,
                  and we're committed to helping them reach it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-2xl">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality, inclusive education that nurtures academic excellence, strong character, and
                  responsible citizenship. We empower every student to reach their full potential through innovative
                  teaching, supportive learning environments, and values-based education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-2xl">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading primary school recognized for excellence in education, character formation, and
                  holistic development. We envision a community of confident, compassionate learners who are prepared to
                  make positive contributions to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Our Core Values</h2>
              <p className="text-muted-foreground leading-relaxed">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-xl">Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Striving for the highest standards in all aspects of learning and development
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-xl">Integrity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Building honest, responsible citizens who uphold strong moral principles
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-xl">Respect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Valuing diversity, treating everyone with dignity and kindness
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-xl">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Embracing creative approaches to teaching and learning for better outcomes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-xl">Responsibility</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Encouraging accountability and active participation in the community
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-2">
                  <h3 className="font-semibold text-xl">Collaboration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Working together with families and community for student success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Academic Programs</h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive curriculum aligned with national standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Lower Primary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Foundation skills in literacy, numeracy, and social development (Classes 1-3)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Upper Primary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced learning across all subjects with exam preparation (Classes 4-6)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Co-Curricular</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sports, music, drama, clubs, and other activities for holistic development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
