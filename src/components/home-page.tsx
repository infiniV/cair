"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Activity,
  ShoppingCart,
  MessageSquare,
  Leaf,
  CloudRain,
  TreePine,
  Trash2,
  Map,
  Building2,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ResearchTeam from "./research-team";
import { AboutUsComponent } from "./about-us";
import MinimalNavBar from "./navbar";

export function HomePageComponent() {
  return (
    <div className="min-h-screen w-screen bg-neutral-950 text-neutral-50">
      {/* Navbar */}
      <MinimalNavBar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="py-20 text-center bg-neutral-900"
      >
        <h1 className="text-4xl font-bold mb-4 text-neutral-50">
          Center for AI Research (CAIR)
        </h1>
        <p className="text-xl mb-8 text-neutral-200">
          Advancing AI to Address Global Challenges
        </p>
        <Button className="bg-neutral-800 text-neutral-50 hover:bg-neutral-700">
          Explore Our Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* About Us */}
      <AboutUsComponent />

      {/* Leads Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="py-16 bg-neutral-900"
        id="team"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-neutral-50">
            AI Leads
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-neutral-50">
                  Dr. Usman Nazir
                </CardTitle>
                <CardDescription className="text-neutral-300">
                  Assistant Professor, School of Computer and IT, BNU
                </CardDescription>
              </CardHeader>
              <CardContent className="text-neutral-200">
                <Image
                  src="https://ai.bnu.edu.pk/assets/img/itrcteam/UsmanNazir.jpg"
                  alt="Usman Nazir"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4 "
                />
                <p>
                  Specialization: Computer vision, remote sensing, deep
                  learning, socio-economic indicators from remote sensing data.
                </p>
                <p>
                  Notable Projects: Poverty mapping, climate crisis mitigation.
                </p>
                <p>
                  Education: Split-site Ph.D. in Computer Science (LUMS and
                  University of Leeds).
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://usmanweb.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="text-neutral-900 border-neutral-600 hover:bg-neutral-700 hover:text-neutral-50"
                  >
                    Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader>
                <CardTitle className="text-neutral-50">
                  Ms. Huda Sarfraz
                </CardTitle>
                <CardDescription className="text-neutral-300">
                  AI and NLP Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="text-neutral-200">
                <Image
                  src="https://ai.bnu.edu.pk/assets/img/itrcteam/huda_11zon.jpeg"
                  alt="Huda Sarfraz"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <p>
                  Nearly two decades of expertise in speech and natural language
                  processing.
                </p>
                <p>
                  Focus on machine learning, large language models, and
                  open-source AI initiatives.
                </p>
                <p>
                  Contributions: Mozilla Common Voice Project, speech technology
                  for local languages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Research Team */}
      <ResearchTeam />

      {/* Research Work */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="py-16 bg-neutral-900"
        id="projects"
      >
        <div className="container mx-auto px-4">
          <h2
            id="research"
            className="text-3xl font-bold mb-8 text-center text-neutral-50"
          >
            Research Work
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                title: "SocialSense",
                description:
                  "Large language model-based social media comments classification.",
                icon: <MessageSquare className="h-5 w-5 mr-2" />,
              },
              {
                title: "ShotSense",
                description: "AI-based cricket batting coach app.",
                icon: <Activity className="h-5 w-5 mr-2" />,
              },
              {
                title: "Wasail",
                description: "ML-based demand forecasting for grocery stores.",
                icon: <ShoppingCart className="h-5 w-5 mr-2" />,
              },
              {
                title: "EO & GBD",
                description:
                  "Combining Earth Observation data and GIS to analyze environmental factors impacting public health and assess the Global Burden of Disease.",
                icon: <Globe className="h-5 w-5 mr-2" />,
              },
              {
                title: "Urban Green Spaces",
                description:
                  "Investigating urban green spaces to enhance public health and well-being in major cities.",
                icon: <Leaf className="h-5 w-5 mr-2" />,
              },
              {
                title: "POIs (Affected Schools and Hospitals)",
                description:
                  "Improving infrastructure resilience by analyzing environmental impacts on educational and healthcare facilities.",
                icon: <Building2 className="h-5 w-5 mr-2" />,
              },
              {
                title: "Pollution Sources",
                description:
                  "Utilizing AI and satellite imagery to detect pollution sources, aiding in environmental protection.",
                icon: <CloudRain className="h-5 w-5 mr-2" />,
              },
              {
                title: "Trash Detection",
                description:
                  "Developing AI-powered solutions for urban trash management to keep our cities clean.",
                icon: <Trash2 className="h-5 w-5 mr-2" />,
              },
              {
                title: "Poverty Mapping",
                description:
                  "Using satellite data and socioeconomic indicators to map poverty levels and guide targeted interventions.",
                icon: <Map className="h-5 w-5 mr-2" />,
              },
              {
                title: "Deforestation Trends",
                description:
                  "Monitoring forest trends with remote sensing and AI to support conservation efforts.",
                icon: <TreePine className="h-5 w-5 mr-2" />,
              },
            ].map((project, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-neutral-50 hover:text-neutral-200">
                  <span className="flex items-center">
                    {project.icon}
                    {project.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  {project.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="py-16 bg-neutral-950"
        id="contact"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-neutral-50">
            Contact Us
          </h2>
          <Button
            onClick={() => (window.location.href = "mailto:contact@cair.edu")}
            size="lg"
            className="text-lg px-8 py-6 bg-neutral-800 text-neutral-50 hover:bg-neutral-700"
          >
            Send us an Email
          </Button>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="py-8 border-t border-neutral-800 bg-neutral-950"
      >
        <div className="container mx-auto px-4 text-center text-neutral-400">
          <p>&copy; 2024 Center for AI Research (CAIR). All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
}
