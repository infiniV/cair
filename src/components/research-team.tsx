"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  // ChevronLeft,
  // ChevronRight,
  Github,
  Linkedin,
  User,
} from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Researcher {
  name: string;
  role: string;
  focus: string;
  description: string;
  github: string | null;
  linkedin: string | null;
  image: string | null;
}
const researchers: Researcher[] = [
  {
    name: "Ebrahim Shahid Arshad",
    role: "Computer Science student",
    focus: "Mathematical computer science, customer churn algorithms",
    description:
      "Ebrahim is a talented Computer Science student specializing in mathematical computer science. His current research focuses on developing innovative algorithms for customer churn prediction, combining advanced mathematical concepts with practical applications in data science.",
    github: "https://github.com/ebrahim",
    linkedin: "https://linkedin.com/in/ebrahim",
    image: null,
  },
  {
    name: "Wahab Sami",
    role: "Undergraduate student",
    focus: "Malaria prediction model using AI",
    description:
      "Wahab is an undergraduate student working on cutting-edge AI applications in healthcare. His project on malaria prediction using AI aims to develop early detection systems that could significantly impact public health in affected regions.",
    github: "https://github.com/wahab",
    linkedin: null,
    image: null,
  },
  {
    name: "Raahim Arbaz",
    role: "Undergraduate student",
    focus: "AI research on global disease burden",
    description:
      "Raahim is passionate about using AI to address global health challenges. His research on the global disease burden leverages machine learning and data science techniques to analyze patterns and predict disease outbreaks across different populations.",
    github: "https://github.com/raahim",
    linkedin: "https://linkedin.com/in/raahim",
    image: "https://ai.bnu.edu.pk/assets/img/itrcteam/Raahim.jpg",
  },
  {
    name: "Amna Mazhar",
    role: "AI researcher",
    focus: "Predicting deforestation causes and prevention methods",
    description:
      "Amna's research combines environmental science with AI to tackle deforestation. She's developing predictive models to identify potential causes of deforestation and proposing AI-driven solutions for forest conservation and sustainable land use.",
    github: null,
    linkedin: "https://linkedin.com/in/amna",
    image: "https://ai.bnu.edu.pk/assets/img/itrcteam/Amna.jpg",
  },
  {
    name: "Amber",
    role: "Computer Science student",
    focus: "Analyzing deforestation trends using Earth Observation data",
    description:
      "Amber specializes in processing and analyzing Earth Observation data to study deforestation trends. Her work involves using machine learning algorithms to interpret satellite imagery and predict areas at risk of deforestation.",
    github: "https://github.com/amber",
    linkedin: null,
    image: "https://ai.bnu.edu.pk/assets/img/itrcteam/Amber.png",
  },
  {
    name: "Rusham",
    role: "Third-year Computer Science student",
    focus: "AI research on flood-affected areas in Punjab and Sindh",
    description:
      "Rusham is applying AI techniques to disaster management, specifically focusing on flood-affected areas in Punjab and Sindh. His research aims to improve early warning systems and assist in post-flood recovery efforts through data-driven insights.",
    github: "https://github.com/rusham",
    linkedin: "https://linkedin.com/in/rusham",
    image: "https://ai.bnu.edu.pk/assets/img/itrcteam/Rusham.jpeg",
  },
];

export default function ResearchTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = researchers.length - 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <section
      id="researcher"
      className="py-12 bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-50">
          Our Research Team
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `${-currentIndex * 33.33}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {researchers.map((researcher, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <ResearcherCard researcher={researcher} />
                </div>
              ))}
            </motion.div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-50 bg-neutral-900/50 backdrop-blur-sm"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-50 bg-neutral-900/50 backdrop-blur-sm"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function ResearcherCard({ researcher }: { researcher: Researcher }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300 cursor-pointer h-full flex flex-col shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          <CardHeader className="flex flex-col items-center space-y-4 p-6">
            <div className="w-24 h-24 relative overflow-hidden rounded-full border-4 border-neutral-600">
              {researcher.image ? (
                <Image
                  src={researcher.image}
                  alt={researcher.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                  <User className="h-12 w-12 text-neutral-400" />
                </div>
              )}
            </div>
            <div className="text-center">
              <CardTitle className="text-lg font-semibold text-neutral-50">
                {researcher.name}
              </CardTitle>
              <CardDescription className="text-sm text-neutral-400 mt-1">
                {researcher.role}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
            <p className="text-sm text-neutral-300 line-clamp-3 flex-grow">
              {researcher.focus}
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              {researcher.github && (
                <a
                  href={researcher.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="bg-transparent text-neutral-400 hover:text-neutral-50"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
              )}
              {researcher.linkedin && (
                <a
                  href={researcher.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="bg-transparent text-neutral-400 hover:text-neutral-50"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 text-neutral-50 p-0 overflow-hidden max-w-3xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-6 bg-neutral-800">
            {researcher.image ? (
              <Image
                src={researcher.image}
                alt={researcher.name}
                width={300}
                height={300}
                className="rounded-lg object-cover w-full h-auto"
              />
            ) : (
              <div className="w-full h-64 bg-neutral-700 flex items-center justify-center rounded-lg">
                <User className="h-16 w-16 text-neutral-400" />
              </div>
            )}
          </div>
          <div className="md:w-2/3 p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {researcher.name}
              </DialogTitle>
              <p className="text-md text-neutral-400 mt-1">{researcher.role}</p>
            </DialogHeader>
            <p className="mt-4 text-sm text-neutral-300">
              {researcher.description}
            </p>
            <div className="mt-6 flex space-x-3">
              {researcher.github && (
                <a
                  href={researcher.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent text-neutral-400 hover:text-neutral-900"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </a>
              )}
              {researcher.linkedin && (
                <a
                  href={researcher.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent text-neutral-400 hover:text-neutral-900"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
