"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Users, Facebook, Linkedin, Instagram } from "lucide-react";
import { ReactTyped } from "react-typed";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
              }}
              className="lg:w-1/2 space-y-6"
            >
              <motion.h1 variants={fadeInUp} className="text-4xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m <span className="text-yellow-400">Josh Cheetham</span>
              </motion.h1>
              <motion.div variants={fadeInUp}>
                <ReactTyped
                  strings={[
                    "Business Coach.",
                    "Network Marketing Expert.",
                    "Your Partner in Success.",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                  className="text-2xl font-semibold text-blue-300"
                />
              </motion.div>
              <motion.p variants={fadeInUp} className="text-lg leading-relaxed mt-4 text-gray-300">
                I specialize in helping entrepreneurs and business professionals
                build thriving networks and achieve financial independence. With
                my proven strategies, I can help you take your business to the
                next level.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex gap-4">
                <a
                  href="https://www.facebook.com/joshcheetham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/joshcheetham/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-lg hover:bg-blue-800 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/joshcheetham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg hover:from-purple-700 hover:to-pink-700 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="group bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                  asChild
                >
                  <Link href="/work-with-me">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
                  asChild
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 flex justify-center"
            >
              <Image
                src="/josh-cheetham.jpg"
                alt="Josh Cheetham Professional Portrait"
                width={500}
                height={500}
                className="rounded-full shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-800">
        <div className="container mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-300">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            With over a decade of experience in coaching and network marketing,
            I&apos;ve guided countless individuals to discover their full potential.
            My mission is to empower others to achieve success through personal
            branding, strategic leadership, and sustainable growth strategies.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div
              variants={fadeInUp}
              className="relative group h-32"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative bg-gray-800 p-8 rounded-lg border border-blue-300/10">
                <Sparkles className="h-12 w-12 text-blue-300 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-blue-100">10+ Years of Experience</h3>
                <p className="text-gray-300">
                  A seasoned professional in network marketing and business coaching.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative group h-32"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative bg-gray-800 p-8 rounded-lg border border-blue-300/10">
                <Target className="h-12 w-12 text-blue-300 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-blue-100">Leadership Excellence</h3>
                <p className="text-gray-300">
                  Mentored individuals and teams to develop leadership skills and build successful businesses.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="relative group h-32"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative bg-gray-800 p-8 rounded-lg border border-blue-300/10">
                <Users className="h-12 w-12 text-blue-300 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-blue-100">Results-Driven Strategies</h3>
                <p className="text-gray-300">
                  Proven techniques to achieve financial growth and personal success.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-100">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step towards unprecedented growth and success.
              Let&apos;s work together to achieve your business goals.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
              asChild
            >
              <Link href="/work-with-me">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

