import {  Download, Github, Linkedin, Mail, Phone, Star } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-2">John Doe</h1>
          <p className="text-xl text-gray-600 mb-6">Full Stack Developer</p>
          <div className="flex justify-center space-x-4 text-gray-600">
            <a href="mailto:john.doe@example.com" className="flex items-center hover:text-gray-900">
              <Mail className="w-4 h-4 mr-1" />
              <span className="text-sm">Email</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center hover:text-gray-900">
              <Phone className="w-4 h-4 mr-1" />
              <span className="text-sm">Phone</span>
            </a>
            <a href="https://linkedin.com/in/johndoe" className="flex items-center hover:text-gray-900">
              <Linkedin className="w-4 h-4 mr-1" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/johndoe" className="flex items-center hover:text-gray-900">
              <Github className="w-4 h-4 mr-1" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4 pb-2 border-b">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Senior Developer</h3>
              <p className="text-gray-600 mb-2">Tech Solutions Inc. | 2020 - Present</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Led development of cloud-based SaaS platform</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented CI/CD pipelines, improving deployment efficiency by 40%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Full Stack Developer</h3>
              <p className="text-gray-600 mb-2">WebCraft Studios | 2017 - 2019</p>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Developed and maintained multiple client websites</li>
                <li>Integrated third-party APIs and payment gateways</li>
                <li>Optimized database queries, reducing load times by 30%</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4 pb-2 border-b">Open Source Projects</h2>
          <div className="space-y-6">
            <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
              <CardHeader>
                <CardTitle>
                  <a href="https://github.com/johndoe/awesome-project" className="hover:underline">
                    Awesome Project
                  </a>
                </CardTitle>
                <CardDescription>
                  A cutting-edge web framework for building scalable applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>1,000+</span>
                  </Badge>
                  <a href="https://github.com/johndoe/awesome-project" className="text-sm text-gray-600 hover:underline">
                    View on GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-primary/5 hover:bg-primary/10 transition-colors">
              <CardHeader>
                <CardTitle>
                  <a href="https://github.com/johndoe/cool-library" className="hover:underline">
                    Cool Library
                  </a>
                </CardTitle>
                <CardDescription>
                  A utility library for simplifying common programming tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>10,000+ weekly</span>
                  </Badge>
                  <a href="https://github.com/johndoe/cool-library" className="text-sm text-gray-600 hover:underline">
                    View on GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

