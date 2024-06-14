/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/8k6BS42MfBc
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Comfortaa } from 'next/font/google'
import { Inter } from 'next/font/google'

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] font-inter">
      <header className="bg-white text-gray-900 py-4 px-6 md:px-12 flex items-center justify-between shadow-md">
        <Link className="flex items-center gap-2" href="#">
          <RocketIcon className="h-6 w-6 text-indigo-500" />
          <span className="text-lg font-semibold">Vercel Innovations</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:text-indigo-500" href="#">
            Home
          </Link>
          <Link className="hover:text-indigo-500" href="#">
            Services
          </Link>
          <Link className="hover:text-indigo-500" href="#">
            About
          </Link>
          <Link className="hover:text-indigo-500" href="#">
            Contact
          </Link>
        </nav>
        <Button className="hidden md:inline-flex">Get Started</Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6 text-gray-900" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <Link className="text-lg font-medium hover:text-indigo-500" href="#">
                Home
              </Link>
              <Link className="text-lg font-medium hover:text-indigo-500" href="#">
                Services
              </Link>
              <Link className="text-lg font-medium hover:text-indigo-500" href="#">
                About
              </Link>
              <Link className="text-lg font-medium hover:text-indigo-500" href="#">
                Contact
              </Link>
              <Button>Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main>
        <section className="bg-white text-gray-900 py-16 md:py-24 lg:py-32" id="hero">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Unlock Your Digital Potential</h1>
              <p className="text-gray-600 mb-8">
                Discover innovative solutions to transform your business and drive growth.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="hidden md:block relative">
              <img
                alt="Hero"
                className="rounded-lg w-full h-full object-cover bg-gradient-to-br from-indigo-500 to-pink-500"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 lg:py-32" id="services">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600">Discover how we can help your business thrive.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-indigo-500 mr-4" />
                  <h3 className="text-xl font-semibold">Consulting</h3>
                </div>
                <p className="text-gray-600">
                  Our team of experts will work with you to develop a customized strategy to achieve your business
                  goals.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <CodeIcon className="h-8 w-8 text-indigo-500 mr-4" />
                  <h3 className="text-xl font-semibold">Development</h3>
                </div>
                <p className="text-gray-600">
                  From web applications to mobile apps, our skilled developers will bring your ideas to life.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <InfoIcon className="h-8 w-8 text-indigo-500 mr-4" />
                  <h3 className="text-xl font-semibold">Analytics</h3>
                </div>
                <p className="text-gray-600">
                  Leverage data-driven insights to make informed decisions and drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-16 md:py-24 lg:py-32" id="about">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Us</h2>
                <p className="text-gray-600 mb-8">
                  Vercel Innovations is a leading technology company that specializes in delivering innovative solutions
                  to businesses of all sizes. Our team of experts is dedicated to helping our clients achieve their
                  goals and stay ahead of the competition.
                </p>
                <Button>Learn More</Button>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                      alt="John Doe"
                      className="rounded-full mb-4 bg-gradient-to-br from-indigo-500 to-pink-500"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                    <p className="text-gray-600 mb-4">CEO</p>
                    <p className="text-gray-600">
                      John is the visionary behind Vercel Innovations, leading the company to new heights with his
                      strategic thinking and innovative approach.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <img
                      alt="Jane Smith"
                      className="rounded-full mb-4 bg-gradient-to-br from-indigo-500 to-pink-500"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                    <p className="text-gray-600 mb-4">CTO</p>
                    <p className="text-gray-600">
                      Jane is the technical mastermind behind Vercel Innovations, leading the development team to create
                      cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 lg:py-32" id="contact">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600">Have a question or want to learn more? Contact us today.</p>
            </div>
            <form className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <Input id="name" placeholder="Enter your name" type="text" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-white text-gray-900 py-6 px-4 md:px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <RocketIcon className="h-6 w-6 text-indigo-500" />
            <span className="text-lg font-semibold">Vercel Innovations</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link className="hover:text-indigo-500" href="#">
              Privacy
            </Link>
            <Link className="hover:text-indigo-500" href="#">
              Terms
            </Link>
            <Link className="hover:text-indigo-500" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}
