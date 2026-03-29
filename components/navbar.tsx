"use client"

import * as React from "react"
import Link from "next/link"
import { Code2, BookOpen, Users, Calendar, BookMarked, Heart, Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useRouter } from "next/navigation"

const programs = [
  { title: "Software Engineering", href: "/programs/software-engineering", icon: Code2, description: "Learn full-stack development and build scalable applications." },
  { title: "AI & Machine Learning", href: "/programs/ai-ml", icon: BookOpen, description: "Master AI and machine learning with real-world projects." },
  { title: "Cloud & DevOps", href: "/programs/cloud-devops", icon: Users, description: "Deploy and manage cloud infrastructure efficiently." },
  { title: "Data Science & Analytics", href: "/programs/data-science", icon: Users, description: "Analyze data and gain insights with advanced techniques." },
];

const resources = [
  { title: "Events & Hackathons", href: "/events", icon: Calendar, description: "Participate in events and coding challenges." },
  { title: "Blog & Success Stories", href: "/blog", icon: BookMarked, description: "Read inspiring tech stories and tutorials." },
  { title: "Get Involved", href: "/get-involved", icon: Heart, description: "Join our community and contribute to projects." },
];

export function Navbar() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isProgramsOpen, setIsProgramsOpen] = React.useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const togglePrograms = () => setIsProgramsOpen(!isProgramsOpen)
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen)

  const handleContactClick = () => {
    if (window.location.pathname !== "/") {
      router.push("/?contact=true")
    } else {
      document.querySelector("#contact-section")?.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="border-b bg-background text-foreground">
      <div className="flex h-16 items-center px-4 container mx-auto justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6" />
          <span className="font-bold">Nehemiah Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {programs.map(({ title, href, icon: Icon, description }) => (
  <ListItem key={title} title={title} href={href} icon={Icon} description={description} />
))}

                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resources.map(({ title, href, icon: Icon, description }) => (
  <ListItem key={title} title={title} href={href} icon={Icon} description={description} />
))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={handleContactClick} className={navigationMenuTriggerStyle()}>
                Contact
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/programs">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button & Mode Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ModeToggle />
          <button onClick={toggleMobileMenu}>{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t shadow-md absolute top-16 left-0 w-full z-50">
          <div className="flex flex-col space-y-2 p-4">
            {/* Programs Dropdown */}
            <button onClick={togglePrograms} className="flex justify-between items-center text-lg font-medium">
              Programs <ChevronDown className={`h-5 w-5 transition-transform ${isProgramsOpen ? "rotate-180" : ""}`} />
            </button>
            {isProgramsOpen && (
              <div className="ml-4 flex flex-col space-y-2">
                {programs.map(({ title, href }) => (
                  <Link key={title} href={href} onClick={() => setIsMobileMenuOpen(false)} className="text-base">
                    {title}
                  </Link>
                ))}
              </div>
            )}

            {/* Resources Dropdown */}
            <button onClick={toggleResources} className="flex justify-between items-center text-lg font-medium">
              Resources <ChevronDown className={`h-5 w-5 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} />
            </button>
            {isResourcesOpen && (
              <div className="ml-4 flex flex-col space-y-2">
                {resources.map(({ title, href }) => (
                  <Link key={title} href={href} onClick={() => setIsMobileMenuOpen(false)} className="text-base">
                    {title}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">
              About
            </Link>
            <button onClick={handleContactClick} className="text-lg font-medium">
              Contact
            </button>
            <Button asChild className="w-full">
              <Link href="/programs" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType; title: string; description?: string }
>(({ className, title, description, icon: Icon, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none hover:bg-accent hover:text-accent-foreground", className)} {...props}>
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <div>
            <div className="text-sm font-medium">{title}</div>
            <p className="text-xs text-muted-foreground">{description}</p> {/* Ensure description is visible */}
          </div>
        </div>
      </a>
    </NavigationMenuLink>
  </li>
));

ListItem.displayName = "ListItem"
