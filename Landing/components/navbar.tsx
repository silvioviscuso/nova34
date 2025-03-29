"use client"

import * as React from "react"
import Link from "next/link"
import { CircuitBoard, Github, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  <CircuitBoard className="h-5 w-5" />
                  <span>Nova34</span>
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-4 px-7">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-muted-foreground hover:text-foreground transition-colors",
                    pathname === "/" && "text-foreground"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="https://nova34-docs.example.com"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </Link>
                <Link
                  href="https://github.com/yourusername/nova34"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2 font-bold group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <CircuitBoard className="h-5 w-5 transition-transform group-hover:scale-110" />
            </motion.div>
            <span className="hidden md:inline-block gradient-text gradient-primary">Nova34</span>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md hover:bg-muted/70 transition-colors"
                        href="/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CircuitBoard className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Nova34 Documentation
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Comprehensive guides, tutorials, and technical specifications for the Nova34 Linux board.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/docs/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Getting Started</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Quick setup guide for your Nova34 board
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/docs/hardware"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Hardware Specs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Detailed hardware specifications and pinouts
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://github.com/yourusername/nova34" legacyBehavior passHref>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild variant="outline" size="icon" className="hidden md:flex group">
            <Link 
              href="https://github.com/yourusername/nova34"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              </motion.div>
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}