"use client";

// import { useState } from "react";
import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
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

const researchers = [
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

export function ResearchTeamComponent() {
  return (
    <section className="py-8 bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-neutral-50">
          Research Team
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {researchers.map((researcher, index) => (
            <ResearcherCard key={index} researcher={researcher} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearcherCard({ researcher }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="bg-neutral-900 border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer">
          <CardHeader className="flex flex-row items-center space-x-4 p-4">
            <Avatar className="w-12 h-12 rounded-lg">
              <AvatarImage
                src={researcher.image || "/placeholder.svg?height=48&width=48"}
                alt={researcher.name}
              />
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base font-semibold text-neutral-50">
                {researcher.name}
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400">
                {researcher.role}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-xs text-neutral-300 line-clamp-2">
              {researcher.focus}
            </p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 text-neutral-50 p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4">
            <Image
              src={researcher.image || "/placeholder.svg?height=300&width=300"}
              alt={researcher.name}
              width={300}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                {researcher.name}
              </DialogTitle>
              <p className="text-sm text-neutral-400">{researcher.role}</p>
            </DialogHeader>
            <p className="mt-2 text-sm text-neutral-300">
              {researcher.description}
            </p>
            <div className="mt-4 flex space-x-2">
              {researcher.github && (
                <a
                  href={researcher.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-neutral-400 hover:text-neutral-50"
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
                    variant="ghost"
                    size="sm"
                    className="text-neutral-400 hover:text-neutral-50"
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
