import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  User,
} from "lucide-react";
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
    name: "Wahab Sami",
    role: "Undergraduate student",
    focus: "Malaria prediction model using AI",
    description:
      "Wahab is an undergraduate student working on cutting-edge AI applications in healthcare. His project on malaria prediction using AI aims to develop early detection systems that could significantly impact public health in affected regions.",
    github: null,
    linkedin: "linkedin.com/in/wahab-sami",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFldIG8wq_rXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720090036726?e=1732752000&v=beta&t=01i0iyXPcBT6LT6eGnHG_Ye2PljOlTditcFglcoQkcY",
  },
  {
    name: "Ebrahim Shahid Arshad",
    role: "Computer Science student",
    focus: "Mathematical computer science, customer churn algorithms",
    description:
      "Ebrahim is a talented Computer Science student specializing in mathematical computer science. His current research focuses on developing innovative algorithms for customer churn prediction, combining advanced mathematical concepts with practical applications in data science.",
    github: null,
    linkedin: "https://linkedin.com/in/ebrahim",
    image: null,
  },
  {
    name: "Raahim Arbaz",
    role: "Undergraduate student",
    focus: "AI research on global disease burden",
    description:
      "Raahim is passionate about using AI to address global health challenges. His research on the global disease burden leverages machine learning and data science techniques to analyze patterns and predict disease outbreaks across different populations.",
    github: "github.com/infiniV ",
    linkedin: "linkedin.com/in/raahim-arbaz-7aa4a5327",
    image: "https://ai.bnu.edu.pk/assets/img/itrcteam/Raahim.jpg",
  },
  {
    name: "Rusham",
    role: "Third-year Computer Science student",
    focus: "AI research on flood-affected areas in Punjab and Sindh",
    description:
      "Rusham is applying AI techniques to disaster management, specifically focusing on flood-affected areas in Punjab and Sindh. His research aims to improve early warning systems and assist in post-flood recovery efforts through data-driven insights.",
    github: null,
    linkedin: "linkedin.com/in/rusham-elahi-38511a229",
    image: "https://ai.bnu.edu.pk/assets/img/itrcteam/Rusham.jpeg",
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
];

export default function ResearchTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= researchers.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, researchers.length - cardsPerView)
        : prevIndex - 1
    );
  };

  return (
    <section id="researcher" className="py-12 bg-neutral-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral-50">
          Our Research Team
        </h2>
        <div className="relative">
          <div className="overflow-hidden flex justify-center">
            <motion.div
              className="flex"
              initial={false}
              animate={{ x: `${-currentIndex * (100 / cardsPerView)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {researchers.map((researcher, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-3`}
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <ResearcherCard researcher={researcher} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="text-neutral-400 hover:text-neutral-50 bg-neutral-800 hover:bg-neutral-700"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-neutral-400 hover:text-neutral-50 bg-neutral-800 hover:bg-neutral-700"
            onClick={nextSlide}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
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
        <Card className="bg-neutral-800 border-neutral-700 hover:bg-neutral-750 transition-all duration-300 cursor-pointer h-full flex flex-col shadow-lg hover:shadow-md hover:shadow-white hover:scale-90 max-w-xs md:max-w-md mx-auto">
          <CardHeader className="flex flex-col items-center space-y-2 p-4">
            <div className="w-24 h-24 relative overflow-hidden">
              {researcher.image ? (
                <Image
                  src={researcher.image}
                  alt={researcher.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              ) : (
                <div className="w-full h-full bg-neutral-700 flex items-center justify-center rounded-lg">
                  <User className="h-8 w-8 text-neutral-400" />
                </div>
              )}
            </div>
            <div className="text-center">
              <CardTitle className="text-base font-semibold text-neutral-50">
                {researcher.name}
              </CardTitle>
              <CardDescription className="text-xs text-neutral-400 mt-1">
                {researcher.role}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-between text-center">
            <p className="text-xs text-neutral-300 line-clamp-3 flex-grow">
              {researcher.focus}
            </p>
            <div className="flex justify-center space-x-2 mt-2">
              {researcher.github && (
                <a
                  href={researcher.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="bg-transparent text-neutral-400 hover:text-neutral-50 transition-colors duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
              )}
              {researcher.linkedin && (
                <a
                  href={
                    researcher.linkedin?.startsWith("http")
                      ? researcher.linkedin
                      : `https://${researcher.linkedin}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="bg-transparent text-neutral-400 hover:text-neutral-50 transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-neutral-900 text-neutral-50 p-0 overflow-hidden max-w-[80vw]">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-6 bg-neutral-800">
            {researcher.image ? (
              <Image
                src={researcher.image}
                alt={researcher.name}
                width={300}
                height={200} // Adjust height for rectangle size
                className="rounded-md object-cover w-full h-auto max-h-[40vh]"
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
                    className="bg-transparent text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
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
                    className="bg-transparent text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
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
