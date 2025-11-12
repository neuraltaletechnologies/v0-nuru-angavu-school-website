import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

const staffMembers = [
  {
    name: "Mrs. Grace Mwangi",
    position: "Head Teacher",
    department: "Administration",
    email: "g.mwangi@nuruangavu.ac.ke",
    bio: "Over 20 years of experience in primary education, dedicated to fostering excellence and character in every student.",
  },
  {
    name: "Mr. David Ochieng",
    position: "Deputy Head Teacher",
    department: "Administration",
    email: "d.ochieng@nuruangavu.ac.ke",
    bio: "Experienced educator with a passion for curriculum development and student welfare.",
  },
  {
    name: "Mrs. Sarah Kimani",
    position: "Class 6 Teacher",
    department: "Upper Primary",
    email: "s.kimani@nuruangavu.ac.ke",
    bio: "Mathematics and Science specialist committed to helping students achieve their best in examinations.",
  },
  {
    name: "Mr. John Wanjiru",
    position: "Class 5 Teacher",
    department: "Upper Primary",
    email: "j.wanjiru@nuruangavu.ac.ke",
    bio: "English and Kiswahili teacher focused on developing strong language and communication skills.",
  },
  {
    name: "Miss Catherine Akinyi",
    position: "Class 4 Teacher",
    department: "Upper Primary",
    email: "c.akinyi@nuruangavu.ac.ke",
    bio: "Creative educator with expertise in project-based learning and student engagement.",
  },
  {
    name: "Mrs. Mary Njeri",
    position: "Class 3 Teacher",
    department: "Lower Primary",
    email: "m.njeri@nuruangavu.ac.ke",
    bio: "Nurturing teacher specializing in early childhood education and foundational literacy.",
  },
  {
    name: "Mr. Peter Mutua",
    position: "Class 2 Teacher",
    department: "Lower Primary",
    email: "p.mutua@nuruangavu.ac.ke",
    bio: "Patient and caring educator who creates a positive learning environment for young learners.",
  },
  {
    name: "Miss Rose Atieno",
    position: "Class 1 Teacher",
    department: "Lower Primary",
    email: "r.atieno@nuruangavu.ac.ke",
    bio: "Experienced in early childhood education with a focus on play-based learning and social skills.",
  },
  {
    name: "Mr. James Karanja",
    position: "Sports & Physical Education",
    department: "Co-Curricular",
    email: "j.karanja@nuruangavu.ac.ke",
    bio: "Professional sports coach dedicated to developing athletic skills and teamwork.",
  },
  {
    name: "Mrs. Elizabeth Wambui",
    position: "Music & Drama Teacher",
    department: "Co-Curricular",
    email: "e.wambui@nuruangavu.ac.ke",
    bio: "Creative arts specialist fostering talent and confidence through music and performance.",
  },
  {
    name: "Miss Ann Chebet",
    position: "Library & ICT",
    department: "Support Staff",
    email: "a.chebet@nuruangavu.ac.ke",
    bio: "Technology enthusiast helping students develop digital literacy and research skills.",
  },
  {
    name: "Mr. Samuel Omondi",
    position: "School Counselor",
    department: "Support Staff",
    email: "s.omondi@nuruangavu.ac.ke",
    bio: "Qualified counselor providing guidance and support for student wellbeing and development.",
  },
]

export default function StaffPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl text-balance">Our Dedicated Staff</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet the passionate educators and professionals committed to your child's success
            </p>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staffMembers.map((staff) => (
              <Card key={staff.email}>
                <CardContent className="pt-6 space-y-4">
                  {/* Avatar Placeholder */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <span className="font-bold text-2xl text-primary">
                      {staff.name.split(" ")[0][0]}
                      {staff.name.split(" ")[1][0]}
                    </span>
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="font-semibold text-xl">{staff.name}</h3>
                    <p className="font-medium text-primary">{staff.position}</p>
                    <p className="text-sm text-muted-foreground">{staff.department}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed text-center">{staff.bio}</p>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${staff.email}`} className="hover:text-foreground transition-colors">
                      {staff.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="py-12 text-center space-y-6">
              <h2 className="font-bold text-3xl md:text-4xl text-balance">Join Our Team</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We're always looking for passionate educators who share our commitment to excellence. If you're
                interested in joining the Freedom and Victory family, please send your CV and cover letter to
                careers@nuruangavu.ac.ke
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
