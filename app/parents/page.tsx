import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, BookOpen, Users, DollarSign, Phone, Download } from "lucide-react"

const resources = [
  {
    title: "School Handbook",
    description: "Complete guide to school policies, procedures, and expectations",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Term Fee Schedule",
    description: "Current fee structure and payment information",
    icon: DollarSign,
    link: "#",
  },
  {
    title: "Uniform Guidelines",
    description: "Official school uniform requirements and suppliers",
    icon: FileText,
    link: "#",
  },
  {
    title: "Parent Association",
    description: "Information about joining and participating in the PTA",
    icon: Users,
    link: "#",
  },
]

const faqs = [
  {
    question: "What are the school hours?",
    answer:
      "School operates from 7:30 AM to 3:30 PM, Monday through Friday. Morning assembly begins at 7:45 AM, and lessons start at 8:00 AM.",
  },
  {
    question: "How do I enroll my child?",
    answer:
      "Visit our Contact page to schedule a school visit or contact our admissions office. Required documents include birth certificate, immunization records, and previous school reports (if applicable).",
  },
  {
    question: "What is the student-teacher ratio?",
    answer:
      "We maintain a maximum ratio of 30:1 to ensure personalized attention and quality education for every student.",
  },
  {
    question: "Are meals provided at school?",
    answer:
      "Students bring their own lunch or can purchase meals from our school canteen. We provide a supervised lunch break from 1:00 PM to 2:00 PM.",
  },
  {
    question: "How can I communicate with teachers?",
    answer:
      "Parents can reach teachers via email, phone during office hours, or schedule in-person meetings. We also hold regular parent-teacher conferences each term.",
  },
  {
    question: "What support is available for struggling students?",
    answer:
      "We offer remedial classes, peer tutoring, and one-on-one support sessions. Our school counselor is also available to address learning challenges.",
  },
  {
    question: "Does the school offer transportation?",
    answer:
      "While we don't provide school buses, we can recommend reliable local transport services used by other families.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "We offer sports (football, netball, athletics), music, drama, art, science club, and various other activities that run after school hours.",
  },
]

export default function ParentsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="font-bold text-4xl md:text-5xl text-balance">Parents Hub</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Essential resources, information, and support for parents and guardians
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Quick Access Resources</h2>
              <p className="text-muted-foreground leading-relaxed">Download important documents and information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <CardTitle className="text-xl">{resource.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <Link href={resource.link}>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Important Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Term Dates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <p className="font-medium">Term 1: Jan 6 - Apr 11</p>
                    <p className="text-muted-foreground">Mid-term: Mar 7-8</p>
                  </div>
                  <div>
                    <p className="font-medium">Term 2: May 5 - Aug 1</p>
                    <p className="text-muted-foreground">Mid-term: Jun 27-28</p>
                  </div>
                  <div>
                    <p className="font-medium">Term 3: Sep 1 - Nov 28</p>
                    <p className="text-muted-foreground">Mid-term: Oct 24-25</p>
                  </div>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/calendar">View Full Calendar</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Main Office</p>
                      <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Admissions</p>
                      <p className="text-muted-foreground">admissions@nuruangavu.ac.ke</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Emergency</p>
                      <p className="text-muted-foreground">+254 XXX XXX XXX</p>
                    </div>
                  </div>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/contact">Full Contact Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Frequently Asked Questions</h2>
              <p className="text-muted-foreground leading-relaxed">Find answers to common questions from parents</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="py-12 text-center space-y-6">
              <h2 className="font-bold text-3xl md:text-4xl text-balance">Get Involved</h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Join our Parent-Teacher Association and help shape the future of our school. We welcome volunteers for
                events, fundraising, and various school activities.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact PTA</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
