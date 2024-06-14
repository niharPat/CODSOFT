import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MountainIcon className="h-6 w-6" />
            <h1 className="text-xl font-bold">Nihar Patel</h1>
          </div>
          <p className="text-gray-500 hidden md:block">Full-stack Web Developer</p>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-500 mb-6">
                I am a passionate full-stack web developer with expertise in Node.js, Next.js, React, TypeScript, and
                JavaScript. I have a strong background in building scalable and efficient web applications, and I am
                always eager to learn new technologies and techniques.
              </p>
              <div className="flex items-center gap-4">
                <NetworkIcon className="h-6 w-6" />
                <FastForwardIcon className="h-6 w-6" />
                <CodepenIcon className="h-6 w-6" />
                <TypeIcon className="h-6 w-6" />
                <EclipseIcon className="h-6 w-6" />
                <GitGraphIcon className="h-6 w-6" />
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="rounded-full mb-4 bg-gradient-to-br from-black to-white flex items-center justify-center"
                style={{ width: '300px', height: '300px' }}
              >
              </div>
            </div>

          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <NetworkIcon className="h-8 w-8" />
                <span className="mt-2 text-sm">Node.js</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <FastForwardIcon className="h-8 w-8" />
                <span className="mt-2 text-sm">Next.js</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <CodepenIcon className="h-8 w-8" />
                <span className="mt-2 text-sm">React</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <TypeIcon className="h-8 w-8" />
                <span className="mt-2 text-sm">MongoDB</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <EclipseIcon className="h-8 w-8" />
                <span className="mt-2 text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-sm">
                <GitGraphIcon className="h-8 w-8" />
                <span className="mt-2 text-sm">Git</span>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <img
                  width="600"
                  height="225"
                  className="mb-4 bg-gradient-to-br from-white  to-black"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">ExpeseTracker</h3>
                  <p className="text-gray-500 mb-4">A web application built with Node.js, React, and MongoDB.</p>
                  <Link
                    href="https://github.com/niharPat/Expense-Tracker"
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  width="600"
                  height="225"
                  className=" mb-4 bg-gradient-to-br from-blue-400  to-green-500"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Project 2</h3>
                  <p className="text-gray-500 mb-4">A Node.js API built with Express and TypeScript.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <img
                  width="600"
                  height="225"
                  className="mb-4 bg-gradient-to-br from-indigo-400  to-pink-500"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Project 3</h3>
                  <p className="text-gray-500 mb-4">A React component library built with Storybook.</p>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Resume</h2>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </div>
        </section>
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-500 mb-4">niharp362004.ni@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-500 mb-4">+91 99999 99999</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-200 text-gray-900 py-4">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Nihar Patel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function CodepenIcon(props: any) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function DownloadIcon(props: any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function EclipseIcon(props: any) {
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
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  );
}

function FastForwardIcon(props: any) {
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
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function GitGraphIcon(props: any) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function NetworkIcon(props: any) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function TypeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="6" rx="9" ry="3"></ellipse>
      <path d="M3 6v12a9 3 0 0 0 18 0V6"></path>
    </svg>
  );
}



