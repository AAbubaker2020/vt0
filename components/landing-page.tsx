'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MenuIcon, XIcon, BookOpenIcon, UsersIcon, BeakerIcon, GlobeIcon, ShareIcon, CodeIcon, DatabaseIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-50 to-indigo-100 text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <BeakerIcon className="h-6 w-6 text-teal-600" />
            <span className="font-bold text-xl text-teal-600">VirtuTissue</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Features</Link>
            <Link href="#models" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Models</Link>
            <Link href="#discuss" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Discuss</Link>
            <Link href="#resources" className="text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors">Resources</Link>
          </nav>
          <Button className="hidden md:inline-flex bg-teal-600 text-white hover:bg-teal-700">Sign Up</Button>
          <Button className="md:hidden" variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link href="#features" className="text-2xl font-medium text-slate-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#models" className="text-2xl font-medium text-slate-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Models</Link>
            <Link href="#discuss" className="text-2xl font-medium text-slate-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Discuss</Link>
            <Link href="#resources" className="text-2xl font-medium text-slate-700 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700" onClick={() => setIsMenuOpen(false)}>Sign Up</Button>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        <section className="py-20 text-center bg-gradient-to-b from-cyan-100 to-indigo-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl mb-6">
              Revolutionize Tissue Research with Virtual Simulations
            </h1>
            <p className="max-w-2xl text-lg text-indigo-700 mx-auto mb-8">
              Join a global community of researchers advancing tissue modeling through collaborative virtual simulations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-white border-teal-300" />
              <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700">Sign Up for Free</Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Interactive Knowledge Graph</h2>
            <div className="aspect-video bg-gradient-to-br from-cyan-100 to-indigo-200 rounded-lg shadow-lg flex items-center justify-center max-w-4xl mx-auto">
              <Image src="/pic.jpg?height=400&width=653" width={653} height={400} alt="Interactive Knowledge Graph" className="rounded-lg" />
            </div>
            <p className="text-center text-indigo-700 mt-4 max-w-2xl mx-auto">Explore connections between virtual tissue models, research papers, and datasets.</p>
          </div>
        </section>

        <section id="features" className="py-20 bg-gradient-to-b from-cyan-50 to-indigo-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-teal-500">
                <CardHeader>
                  <CardTitle className="text-teal-700 flex items-center justify-center"><ShareIcon className="h-6 w-6 mr-2" /> Global Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">Connect with researchers worldwide to share insights and advance tissue modeling collectively.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-indigo-500">
                <CardHeader>
                  <CardTitle className="text-indigo-700 flex items-center justify-center"><CodeIcon className="h-6 w-6 mr-2" /> Model Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">Share and explore virtual tissue model code, fostering open exchange and innovation.</p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-t-4 border-cyan-500">
                <CardHeader>
                  <CardTitle className="text-cyan-700 flex items-center justify-center"><DatabaseIcon className="h-6 w-6 mr-2" /> Dataset Repository</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">Access and contribute to a growing repository of tissue-related datasets and research findings.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="models" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Explore Core Models</h2>
            <Tabs defaultValue="compucell3d" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-indigo-100 text-indigo-700">
                <TabsTrigger value="compucell3d" className="data-[state=active]:bg-indigo-700 data-[state=active]:text-white">CompuCell3D</TabsTrigger>
                <TabsTrigger value="physicell" className="data-[state=active]:bg-indigo-700 data-[state=active]:text-white">PhysiCell</TabsTrigger>
              </TabsList>
              <TabsContent value="compucell3d">
                <Card className="bg-white shadow-md border-l-4 border-teal-500">
                  <CardHeader>
                    <CardTitle className="text-teal-700 text-center">CompuCell3D</CardTitle>
                    <CardDescription className="text-center">Multi-scale modeling environment for 3D tissue simulations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-center">CompuCell3D enables complex simulations of tissues, organs, and organisms, integrating cellular behaviors with molecular dynamics.</p>
                    <div className="flex justify-center">
                      <Button variant="outline" className="text-teal-700 border-teal-700 hover:bg-teal-50">Explore CompuCell3D</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="physicell">
                <Card className="bg-white shadow-md border-l-4 border-indigo-500">
                  <CardHeader>
                    <CardTitle className="text-indigo-700 text-center">PhysiCell</CardTitle>
                    <CardDescription className="text-center">Open source physics-based cell simulator for 3D multicellular systems</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 text-center">PhysiCell provides a flexible framework for simulating large systems of cells with an emphasis on the physical interactions between cells and their microenvironment.</p>
                    <div className="flex justify-center">
                      <Button variant="outline" className="text-indigo-700 border-indigo-700 hover:bg-indigo-50">Explore PhysiCell</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="discuss" className="py-20 bg-gradient-to-b from-cyan-100 to-indigo-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Join the Discussion</h2>
            <Card className="max-w-3xl mx-auto bg-white shadow-lg border-t-4 border-cyan-600">
              <CardHeader>
                <CardTitle className="text-cyan-700 text-center">Global Research Forum</CardTitle>
                <CardDescription className="text-center">Collaborate, share insights, and advance tissue modeling collectively</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <UsersIcon className="mt-1 h-5 w-5 text-cyan-700 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Active Community</h3>
                      <p className="text-sm text-slate-600">Engage with researchers from around the world</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <BookOpenIcon className="mt-1 h-5 w-5 text-cyan-700 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Knowledge Sharing</h3>
                      <p className="text-sm text-slate-600">Access and contribute to a growing knowledge base</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <GlobeIcon className="mt-1 h-5 w-5 text-cyan-700 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Global Perspectives</h3>
                      <p className="text-sm text-slate-600">Gain insights from diverse research backgrounds</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button className="w-full sm:w-auto bg-cyan-600 text-white hover:bg-cyan-700">Join the Discussion</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="resources" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Essential Resources</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-teal-500">
                <CardHeader>
                  <CardTitle className="text-teal-700 text-center">Getting Started Guide</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">Learn the basics of virtual tissue simulation and how to contribute to model advancement.</p>
                  <Button variant="outline" className="text-teal-700 border-teal-700 hover:bg-teal-50">Read Guide</Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-indigo-500">
                <CardHeader>
                  <CardTitle className="text-indigo-700 text-center">Research Papers</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">Access a curated collection of influential papers in the field of tissue modeling.</p>
                  <Button variant="outline" className="text-indigo-700 border-indigo-700 hover:bg-indigo-50">Browse Papers</Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-cyan-500">
                <CardHeader>
                  <CardTitle className="text-cyan-700 text-center">Video Tutorials</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">Watch step-by-step tutorials on using various virtual tissue simulation tools.</p>
                  <Button variant="outline" className="text-cyan-700 border-cyan-700 hover:bg-cyan-50">Watch Tutorials</Button>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-teal-600">
                <CardHeader>
                  <CardTitle className="text-teal-800 text-center">API Documentation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 mb-4">Explore detailed documentation for integrating and extending simulation models.</p>
                  <Button variant="outline" className="text-teal-800 border-teal-800 hover:bg-teal-50">View Docs</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-cyan-300">About</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Team</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-300">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Tutorials</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-300">Community</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Forum</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Events</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Contribute</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-300">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-cyan-100 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-indigo-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BeakerIcon className="h-6 w-6 text-cyan-400 mr-2" />
              <span className="font-bold text-xl">VirtuTissue</span>
            </div>
            <p className="text-sm text-cyan-300">
              © 2023 VirtuTissue. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}