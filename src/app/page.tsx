import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  HardHat,
  Building,
  Mountain,
  Shield,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              SkySigns Access
            </span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#services"
              className="text-gray-600 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="#safety" className="text-gray-600 hover:text-blue-600">
              Safety
            </Link>

            <Link href="#contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </nav>
          <Link href="tel:0027762657379">
            <Button className="hidden md:inline-flex">Get a Quote</Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Elevate Your Advertising with Expert Rope Access Solutions
              </h1>
              <p className="text-xl mb-4 text-gray-600">
                We specialize in safe and efficient installation of billboards
                and building advertising at any height.
              </p>
              <Link className="mt-4" href="tel:0027762657379">
                <Button size="lg" className="inline-flex items-center mt-4">
                  Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="https://znxlsrg7l6.ufs.sh/f/KiiHyHYhEMIznZl2ZELzVOsHuWeoK751xtX3kaZ0Rr4ylYcd"
                alt="Rope access technician installing a billboard"
                width={1920}
                height={1080}
                className="rounded-lg h-64 md:h-96 w-full shadow-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Billboard Installation",
                  icon: Building,
                  description:
                    "Expert installation of billboards on high-rise buildings and structures.",
                },
                {
                  title: "Building Wraps",
                  icon: HardHat,
                  description:
                    "Large-scale advertising wraps for buildings and construction sites.",
                },
                {
                  title: "Maintenance & Repairs",
                  icon: Shield,
                  description:
                    "Regular maintenance and swift repairs for existing installations.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section id="safety" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Safety First, Always
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {[
                  "Certified and experienced technicians",
                  "State-of-the-art safety equipment",
                  "Rigorous safety protocols and procedures",
                  "Regular safety training and updates",
                  "Compliance with all industry standards",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="relative h-64 md:h-96">
                <Image
                  src="https://znxlsrg7l6.ufs.sh/f/KiiHyHYhEMIzyWe3LIQRTnsWmtyXUHv6xBaSCruAVbNQP0oD"
                  alt="Safety equipment and technicians"
                  width={1920}
                  height={1080}
                  className="rounded-lg w-full h-64 md:h-96 object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/* <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Project ${index + 1}`}
                    alt={`Project ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold">Project {index + 1}</h3>
                      <p>Billboard installation for a major brand</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Elevate Your Advertising?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today for a free consultation and quote.
            </p>
            <Link href="tel:0027762657379">
              <Button
                size="lg"
                variant="secondary"
                className="inline-flex items-center"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">SkySigns Access</span>
            </Link>
            <p className="text-gray-400">
              Elevating your brand to new heights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#safety" className="text-gray-400 hover:text-white">
                  Safety
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>Name: Happiness</p>

              <p>Phone: +27 76 265 7379</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SkySigns Access Solutions. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
