import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Menu,
  X,
  Star,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import Image from "next/image";

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      quote:
        "This tool has revolutionized our social media strategy. It's a game-changer!",
      author: "Jane Doe",
      position: "Marketing Director",
      company: "Tech Innovators Inc.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      social: { icon: Twitter, link: "#" },
    },
    {
      quote:
        "We've seen a 200% increase in engagement since using this platform. Highly recommended!",
      author: "John Smith",
      position: "Social Media Manager",
      company: "Global Marketing Solutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      social: { icon: Linkedin, link: "#" },
    },
    {
      quote:
        "The analytics provided are invaluable. It's like having a social media expert on the team.",
      author: "Emily Johnson",
      position: "CEO",
      company: "StartUp Ventures",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      social: { icon: Twitter, link: "#" },
    },
    {
      quote:
        "SocialPro has streamlined our workflow and improved our content quality significantly.",
      author: "Michael Brown",
      position: "Content Strategist",
      company: "Creative Minds Agency",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      social: { icon: Linkedin, link: "#" },
    },
    {
      quote:
        "The ease of use and powerful features make this tool a must-have for any social media team.",
      author: "Sarah Lee",
      position: "Digital Marketing Lead",
      company: "E-commerce Giants",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      social: { icon: Twitter, link: "#" },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="text-2xl font-bold text-blue-600">
                SocialPro
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Resources
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      SocialPro
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Features
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Pricing
                      </span>
                    </a>
                    <a
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Resources
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Start free trial
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  Simplify your social media management
                </h1>
                <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                  Plan, collaborate, and publish your content effortlessly.
                  Analyze performance and grow your audience across all social
                  networks.
                </p>
                <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Watch demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img
                  className="w-full rounded-lg shadow-xl"
                  src="./src/assets/hero.webp"
                  alt="Dashboard preview"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Features
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to succeed on social media
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: "Content Planning",
                    description:
                      "Plan and schedule your content across multiple platforms with our intuitive calendar interface.",
                  },
                  {
                    name: "Analytics & Reporting",
                    description:
                      "Get detailed insights into your social media performance with our comprehensive analytics tools.",
                  },
                  {
                    name: "Team Collaboration",
                    description:
                      "Work seamlessly with your team, assign tasks, and manage approvals all in one place.",
                  },
                  {
                    name: "Multi-Platform Support",
                    description:
                      "Manage all your social media accounts from a single dashboard, saving time and effort.",
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <CheckCircle
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Testimonials section in bento box format */}
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by businesses worldwide
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Hear from our satisfied customers about how SocialPro has
                transformed their social media management.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-lg ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4">"{testimonial.quote}"</p>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <a
                      href={testimonial.social.link}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <testimonial.social.icon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How-to guide section */}
        <div className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Get Started
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                How to use SocialPro
              </p>
            </div>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    step: 1,
                    title: "Connect your accounts",
                    description:
                      "Link your social media profiles to SocialPro in just a few clicks.",
                  },
                  {
                    step: 2,
                    title: "Plan your content",
                    description:
                      "Use our calendar to schedule posts across all your connected platforms.",
                  },
                  {
                    step: 3,
                    title: "Analyze and improve",
                    description:
                      "Track your performance and adjust your strategy based on detailed analytics.",
                  },
                ].map((item) => (
                  <div key={item.step} className="pt-6">
                    <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                            <p className="text-white font-semibold">
                              {item.step}
                            </p>
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Start your free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Product
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {["Features", "Pricing", "Integrations", "API"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-base text-gray-300 hover:text-white"
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Support
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {["Help Center", "Guides", "API Status", "Contact Us"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="text-base text-gray-300 hover:text-white"
                          >
                            {item}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {["About", "Blog", "Careers", "Press"].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-base text-gray-300 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {[
                      "Privacy",
                      "Terms",
                      "Cookie Policy",
                      "Trademark Policy",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-base text-gray-300 hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-300">
                Get the latest news and articles to your inbox every month.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <a href="#" className="text-2xl font-bold text-white">
                  SocialPro
                </a>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Threads</span>
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.9 6.3c-.9-2.6-3-4.7-5.6-5.6-1.3-.4-2.7-.4-4 0-2.6.9-4.7 3-5.6 5.6-.4 1.3-.4 2.7 0 4 .9 2.6 3 4.7 5.6 5.6 1.3.4 2.7.4 4 0 2.6-.9 4.7-3 5.6-5.6.4-1.3.4-2.7 0-4zM12 15.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-sm text-white">
              <p>
                Copyright ©2024 SocialPro |{" "}
                <a href="#" className="hover:underline">
                  Privacy
                </a>{" "}
                |{" "}
                <a href="#" className="hover:underline">
                  Terms
                </a>{" "}
                |{" "}
                <a href="#" className="hover:underline">
                  Security
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
