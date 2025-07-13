"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ExternalLink, Menu, Code, Database, Globe, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Firebase",
    "Git",
    "Tailwind CSS",
    "flutter",
    "html",
    "css",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plateforme de commerce électronique full-stack avec intégration de paiement, gestion d'inventaire et tableau de bord d'administration.",
      tech: ["html", "css", "firebase", "javascript", "cloudinary"],
      github: "https://github.com/theb2ahir/ecommerce-Linda-Shop.git",
      live: "https://linda-shop-2835e.web.app/",
      image: "/ecommerce.png?height=200&width=300",
    },
    {
      title: "Site de tourisme pour desireux de visiter le togo",
      description: "Site de tourisme pour desireux de visiter le togo , avec des informations sur les sites touristiques, les restaurants, les attractions et une partie avec toutes les informations importants a savoir sur le togo . Sans oublier la possibiliter de reserver un hotel et organiser ou adherer a un groupe de decouverte d'une region ou d'un site.",
      tech: ["html", "css", "firebase", "javascript"],
      github: "https://github.com/theb2ahir/tourisme-togo.git",
      live: "https://tourisme-togo-6d746.web.app/",
      image: "/tourismetogo.png?height=200&width=300",
    },
    {
      title: "Site pour proposer ses services de dev",
      description: "Site pour proposer ses services de dev, avec des informations sur du developpeur et une partie avec les services proposés clickable avec formulaire de commande et de reception automatique sur telegram.",
      tech: ["html", "javascript", "css", "firebase"],
      github: "https://github.com/theb2ahir/my-site.git",
      live: "https://my-site-5f4e0.web.app/",
      image: "/mysite.png?height=200&width=300",
    },
    {
      title: "Site pour vente et locations de biens immobiliers , terrains , voitures et oeuvres d'art",
      description: "Site pour vente et locations de biens immobiliers , terrains , voitures et oeuvres d'art, avec des informations sur les biens immobiliers, les terrains, les voitures et les oeuvres d'art. Sans oublier la possibiliter de supprimer ou modifier un produit coter admin , de reserver un produit , de l'ajouter au favoris et  avec lien vers les reseaux",
      tech: ["html", "javascript", "css", "firebase"],
      github: "https://github.com/theb2ahir/tiroirs-de-l-afrique.git",
      live: "https://tiroirs-d-afrique.web.app/",
      image: "/tiroisafrique.png?height=200&width=300",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Baahir Boukari
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-primary transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-primary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    A propos
                  </button>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Competences
                  </button>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Projets
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-left hover:text-primary transition-colors"
                  >
                    Contactes
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/baahir.jpg?height=200&width=200"
              alt="Baahir"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-primary/20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bonjour, je suis <span className="text-primary">Baahir</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Développeur Full-Stack et mobile passionné de créer des solutions innovantes et de les rendre évolutives grâce à du code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")}>
              Voir mes projets
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Contactez-moi
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="https://github.com/theb2ahir" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:baahirboukari4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">A propos de moi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Je suis un passionné de développement Full-Stack et mobile avec des annees d'expérience dans la création de sites web et d'application mobile. J'aime transformer des problèmes complexes en solutions simples, intuitives et attractives.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Lorsque je ne code pas, vous pouvez me trouver explorant de nouvelles technologies, contribuer à des projets open-source ou partager ma connaissance avec la communauté du développement.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Clean Code</span>
                </div>
                <div> 
                  <Smartphone className="h-5 w-5 text-primary" />
                  <span>Application mobile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Web Development</span>
                </div>

              </div>
            </div>
            <div className="relative">
              <Image
                src="/bestworking.jpg?height=400&width=400"
                alt="Baahir working"
                width={700}
                height={700}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Competences & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes Projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}s
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Repo Github
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.live}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        consulter le site
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contactez-moi</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Je suis disponible pour toutes vos questions et pour discuter de vos projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:baahirboukari4@gmail.com">
                <Mail className="h-5 w-5 mr-2" />
                Envoyer un Email
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://wa.me/22892349698" target="_blank">
                Discutons sur whatsapp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Baahir. portfolio creer par baahir boukari avec Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
