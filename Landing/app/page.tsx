"use client";

import Image from "next/image";
import Link from "next/link";
import { CircuitBoard, Github, Cpu, Wifi, Database, Zap, Download, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { GradientHeading } from "@/components/ui/gradient-heading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background gradient-bg relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <FadeIn direction="right" duration={0.7}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <GradientHeading as="h1" variant="primary" className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                    Nova34
                  </GradientHeading>
                  <p className="text-xl text-muted-foreground">
                    General Purpose Ultra Small Linux Board
                  </p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A powerful, compact, and versatile open-source hardware platform for your next IoT, embedded, or edge computing project.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link href="https://github.com/yourusername/nova34" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                      View on GitHub
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="group">
                    <Link href="https://nova34-docs.example.com" target="_blank" rel="noopener noreferrer">
                      Documentation
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" duration={0.7} delay={0.2}>
              <div className="flex items-center justify-center">
                <motion.div 
                  className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]"
                  animate={{ 
                    rotateZ: [0, 2, 0, -2, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    ease: "easeInOut", 
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Nova34 PCB"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-lg" />
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Features
                </div>
                <GradientHeading variant="secondary" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need in a tiny package
                </GradientHeading>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nova34 packs powerful features into an ultra-small form factor, making it perfect for a wide range of applications.
                </p>
              </div>
            </div>
          </FadeIn>
          
          <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <StaggerItem>
              <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Cpu className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Powerful Processor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Quad-core ARM processor with up to 1.5GHz clock speed for demanding applications.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Wifi className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Wireless Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built-in Wi-Fi 5 (802.11ac) and Bluetooth 5.0 for seamless connectivity.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Database className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Expandable Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    MicroSD card slot and eMMC options for flexible storage solutions.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CircuitBoard className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>GPIO Pins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    40-pin GPIO header compatible with popular accessories and HATs.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Zap className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Low Power Consumption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Efficient design with power-saving modes for battery-powered applications.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <Download className="h-6 w-6 mb-2 text-primary" />
                  <CardTitle>Open Source</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fully open-source hardware and software for maximum flexibility and community support.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerChildren>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </section>

      {/* Specifications Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <GradientHeading variant="accent" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Technical Specifications
                </GradientHeading>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Detailed specifications of the Nova34 board
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} className="mx-auto max-w-3xl mt-8">
            <Tabs defaultValue="hardware" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hardware">Hardware</TabsTrigger>
                <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
                <TabsTrigger value="power">Power</TabsTrigger>
              </TabsList>
              <TabsContent value="hardware" className="p-4 border rounded-lg mt-4 bg-background/60 backdrop-blur-sm">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Processor</span>
                    <span className="text-muted-foreground">Quad-core ARM Cortex-A53, 1.5GHz</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">RAM</span>
                    <span className="text-muted-foreground">1GB LPDDR4</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Storage</span>
                    <span className="text-muted-foreground">8GB eMMC, MicroSD slot</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">GPU</span>
                    <span className="text-muted-foreground">Mali-400 MP2</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Dimensions</span>
                    <span className="text-muted-foreground">65mm x 34mm x 10mm</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="connectivity" className="p-4 border rounded-lg mt-4 bg-background/60 backdrop-blur-sm">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Wi-Fi</span>
                    <span className="text-muted-foreground">802.11ac (Wi-Fi 5), dual-band</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Bluetooth</span>
                    <span className="text-muted-foreground">Bluetooth 5.0 BLE</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Ethernet</span>
                    <span className="text-muted-foreground">10/100 Mbps</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">USB</span>
                    <span className="text-muted-foreground">1x USB 3.0, 1x USB 2.0</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">GPIO</span>
                    <span className="text-muted-foreground">40-pin header</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="power" className="p-4 border rounded-lg mt-4 bg-background/60 backdrop-blur-sm">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-medium">Input Voltage</span>
                    <span className="text-muted-foreground">5V DC</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Power Connector</span>
                    <span className="text-muted-foreground">USB-C</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Power Consumption</span>
                    <span className="text-muted-foreground">1.5W - 3W typical</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Battery Support</span>
                    <span className="text-muted-foreground">Optional LiPo connector</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="font-medium">Power Modes</span>
                    <span className="text-muted-foreground">Active, Sleep, Deep Sleep</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <GradientHeading variant="primary" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What You Can Build
                </GradientHeading>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nova34 is versatile enough for a wide range of applications
                </p>
              </div>
            </div>
          </FadeIn>
          <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <StaggerItem>
              <Card className="card-hover border-none bg-background/60 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <CardTitle>IoT Devices</CardTitle>
                  <CardDescription>
                    Create smart home devices, sensors, and automation systems
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden group">
                    <Image
                      src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="IoT Devices"
                      width={400}
                      height={200}
                      className="rounded-b-lg object-cover h-[200px] w-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">Learn more about IoT applications</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover border-none bg-background/60 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <CardTitle>Edge Computing</CardTitle>
                  <CardDescription>
                    Process data locally for faster response times and privacy
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden group">
                    <Image
                      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Edge Computing"
                      width={400}
                      height={200}
                      className="rounded-b-lg object-cover h-[200px] w-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">Explore edge computing solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem>
              <Card className="card-hover border-none bg-background/60 backdrop-blur-sm overflow-hidden">
                <CardHeader>
                  <CardTitle>Robotics</CardTitle>
                  <CardDescription>
                    Power robots and autonomous systems with compact computing
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden group">
                    <Image
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                      alt="Robotics"
                      width={400}
                      height={200}
                      className="rounded-b-lg object-cover h-[200px] w-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">Discover robotics applications</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerChildren>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up" className="relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <GradientHeading variant="secondary" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Get Started?
                </GradientHeading>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our open-source community and start building with Nova34 today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="https://github.com/yourusername/nova34" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    View on GitHub
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="https://nova34-docs.example.com" target="_blank" rel="noopener noreferrer">
                    Read the Docs
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pulse" />
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-8 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-5 w-5" />
              <p className="text-sm text-muted-foreground">
                © 2025 Nova34. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="https://github.com/yourusername/nova34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link 
                href="https://nova34-docs.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}