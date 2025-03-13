import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, MapPin } from "lucide-react"

export default function SpeakingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12">Speaking</h1>

          <div className="grid gap-8">
            <div className="group border rounded-lg overflow-hidden bg-card">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Conference 1"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2">Modern Frontend Architecture</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <time dateTime="2023-09-15" className="mr-4">
                      September 15, 2023
                    </time>
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>ReactConf, San Francisco</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    A deep dive into modern frontend architecture patterns, focusing on component design, state
                    management, and performance optimization techniques.
                  </p>
                  <Link
                    href="#"
                    className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                  >
                    View slides
                  </Link>
                </div>
              </div>
            </div>

            <div className="group border rounded-lg overflow-hidden bg-card">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Conference 2"
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2">Building for Scale: Lessons Learned</h2>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CalendarIcon className="mr-1 h-4 w-4" />
                    <time dateTime="2023-06-10" className="mr-4">
                      June 10, 2023
                    </time>
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>TechSummit, Berlin</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Sharing practical insights from scaling applications to handle millions of users. Topics include
                    database optimization, caching strategies, and infrastructure design.
                  </p>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    >
                      View slides
                    </Link>
                    <Link
                      href="#"
                      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                    >
                      Watch recording
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

