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
                  href="https://nova34-docs.vercel.app"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </Link>
                <Link
                  href="https://github.com/silvioviscuso/nova34"
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
                  <a href="https://nova34-docs.vercel.app/">Documentation</a>
       
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="https://github.com/silvioviscuso/nova34" legacyBehavior passHref>
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
              href="https://github.com/silvioviscuso/nova34"
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