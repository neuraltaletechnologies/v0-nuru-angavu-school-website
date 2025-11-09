import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

const terms = [
  {
    term: "Term 1, 2025",
    dates: "January 6 - April 11",
    events: [
      { date: "Jan 6", event: "First Day of Term 1" },
      { date: "Jan 17", event: "Parent-Teacher Meetings" },
      { date: "Feb 14", event: "Inter-House Sports Day" },
      { date: "Mar 7-8", event: "Mid-Term Break" },
      { date: "Mar 21", event: "Science Fair" },
      { date: "Apr 11", event: "Last Day of Term 1" },
    ],
  },
  {
    term: "Term 2, 2025",
    dates: "May 5 - August 1",
    events: [
      { date: "May 5", event: "First Day of Term 2" },
      { date: "May 16", event: "Parent-Teacher Meetings" },
      { date: "Jun 13", event: "Music & Drama Festival" },
      { date: "Jun 27-28", event: "Mid-Term Break" },
      { date: "Jul 18", event: "Academic Day Celebration" },
      { date: "Aug 1", event: "Last Day of Term 2" },
    ],
  },
  {
    term: "Term 3, 2025",
    dates: "September 1 - November 28",
    events: [
      { date: "Sep 1", event: "First Day of Term 3" },
      { date: "Sep 12", event: "Parent-Teacher Meetings" },
      { date: "Oct 10", event: "Annual Sports Tournament" },
      { date: "Oct 24-25", event: "Mid-Term Break" },
      { date: "Nov 14", event: "Graduation Ceremony - Class 6" },
      { date: "Nov 28", event: "Last Day of Term 3" },
    ],
  },
]

const holidays = [
  { date: "Jan 1", event: "New Year's Day" },
  { date: "Apr 18-21", event: "Easter Holiday" },
  { date: "May 1", event: "Labour Day" },
  { date: "Jun 1", event: "Madaraka Day" },
  { date: "Aug 12", event: "Eid al-Adha (tentative)" },
  { date: "Oct 10", event: "Huduma Day" },
  { date: "Oct 20", event: "Mashujaa Day" },
  { date: "Dec 12", event: "Jamhuri Day" },
  { date: "Dec 25", event: "Christmas Day" },
  { date: "Dec 26", event: "Boxing Day" },
]

export default function CalendarPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="font-bold text-4xl md:text-5xl text-balance">School Calendar 2025</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Important dates, term schedules, and school events for the academic year
            </p>
          </div>
        </div>
      </section>

      {/* Term Schedules */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-bold text-3xl md:text-4xl">Term Schedules</h2>
              <p className="text-muted-foreground leading-relaxed">Academic calendar for the 2025 school year</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {terms.map((term) => (
                <Card key={term.term}>
                  <CardHeader>
                    <CardTitle>{term.term}</CardTitle>
                    <p className="text-sm text-muted-foreground">{term.dates}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {term.events.map((event, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="font-medium text-sm text-primary min-w-[60px]">{event.date}</span>
                          <span className="text-sm text-muted-foreground">{event.event}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Public Holidays */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Public Holidays 2025</h2>
              <p className="text-muted-foreground leading-relaxed">
                School will be closed on the following public holidays
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {holidays.map((holiday, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <span className="font-medium text-sm text-primary min-w-[80px]">{holiday.date}</span>
                      <span className="text-sm text-muted-foreground">{holiday.event}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-bold text-3xl md:text-4xl">Daily Schedule</h2>
              <p className="text-muted-foreground leading-relaxed">Typical school day structure</p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex gap-4 pb-4 border-b">
                    <span className="font-medium text-primary min-w-[120px]">7:30 AM</span>
                    <span className="text-muted-foreground">School Opens / Morning Assembly</span>
                  </li>
                  <li className="flex gap-4 pb-4 border-b">
                    <span className="font-medium text-primary min-w-[120px]">8:00 AM</span>
                    <span className="text-muted-foreground">First Lesson Begins</span>
                  </li>
                  <li className="flex gap-4 pb-4 border-b">
                    <span className="font-medium text-primary min-w-[120px]">10:30 AM</span>
                    <span className="text-muted-foreground">Morning Break</span>
                  </li>
                  <li className="flex gap-4 pb-4 border-b">
                    <span className="font-medium text-primary min-w-[120px]">11:00 AM</span>
                    <span className="text-muted-foreground">Lessons Resume</span>
                  </li>
                  <li className="flex gap-4 pb-4 border-b">
                    <span className="font-medium text-primary min-w-[120px]">1:00 PM</span>
                    <span className="text-muted-foreground">Lunch Break</span>
                  </li>
                  <li className="flex gap-4 pb-4 border-b">
                    <span className="font-medium text-primary min-w-[120px]">2:00 PM</span>
                    <span className="text-muted-foreground">Afternoon Lessons</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-medium text-primary min-w-[120px]">3:30 PM</span>
                    <span className="text-muted-foreground">School Ends / Co-curricular Activities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
