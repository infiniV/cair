"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Microscope,
  Brain,
  ChartBar,
  Cog,
  Scale,
  Globe,
  Zap,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";

const researchAreas = [
  {
    icon: Microscope,
    title: "Geo-AI",
    description: "Geospatial analysis and environmental monitoring using AI",
  },
  {
    icon: Brain,
    title: "Vision-AI",
    description:
      "Developing computer vision techniques and image processing algorithms",
  },
  {
    icon: ChartBar,
    title: "Predict-AI",
    description:
      "Creating predictive models to analyze and forecast behaviors and trends",
  },
  {
    icon: Cog,
    title: "ML-Efficiency",
    description: "Designing efficient machine learning algorithms",
  },
  {
    icon: Scale,
    title: "AI-Policy",
    description: "Ensuring ethical AI deployment and societal benefits",
  },
];

const achievements = [
  { icon: Globe, title: "International Collaborations", count: "10+" },
  { icon: Zap, title: "Research Projects", count: "25+" },
  { icon: Users, title: "Team Members", count: "30+" },
  { icon: Award, title: "Awards & Recognitions", count: "15+" },
];

export function AboutUsComponent() {
  return (
    <section className="py-8 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-neutral-50">
            About CAIR
          </h2>

          <Card className="bg-neutral-900 border-neutral-800 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-neutral-50 flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-yellow-500" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-200">
              <p>
                The Center for AI Research (CAIR) at BNU is a leading graduate
                research lab focused on advancing AI through collaborative
                research. Under the leadership of Dr. Usman, Ms. Aruj, and Ms.
                Huda, CAIR addresses critical global challenges through
                innovative AI solutions.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="research" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 bg-neutral-800">
              <TabsTrigger
                value="research"
                className="text-neutral-200 data-[state=active]:bg-neutral-700 data-[state=active]:text-neutral-50"
              >
                Research Areas
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="text-neutral-200 data-[state=active]:bg-neutral-700 data-[state=active]:text-neutral-50"
              >
                Achievements
              </TabsTrigger>
            </TabsList>
            <TabsContent value="research">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {researchAreas.map((area, index) => (
                  <Card
                    key={index}
                    className="bg-neutral-800 border-neutral-700"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg text-neutral-50 flex items-center">
                        {React.createElement(area.icon, {
                          className: "mr-2 h-5 w-5",
                        })}
                        {area.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-neutral-300">
                        {area.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="achievements">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-neutral-800 border-neutral-700"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {React.createElement(achievement.icon, {
                        className: "h-12 w-12 mb-4 text-blue-500",
                      })}
                      <CardTitle className="text-2xl font-bold text-neutral-50 mb-2">
                        {achievement.count}
                      </CardTitle>
                      <CardDescription className="text-center text-neutral-300">
                        {achievement.title}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-2xl text-neutral-50">
                Our Approach
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex items-start ">
                  <Badge variant="outline" className="mr-2 mt-1 text-white">
                    1
                  </Badge>
                  <span className="text-neutral-200">
                    Collaborative Research: We foster partnerships with leading
                    institutions worldwide.
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 text-white">
                    2
                  </Badge>
                  <span className="text-neutral-200">
                    Interdisciplinary Focus: Our team combines expertise from
                    various fields to tackle complex AI challenges.
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 text-white">
                    3
                  </Badge>
                  <span className="text-neutral-200">
                    Ethical AI: We prioritize responsible AI development,
                    considering societal impacts in our research.
                  </span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 text-white">
                    4
                  </Badge>
                  <span className="text-neutral-200">
                    Innovation-Driven: Our goal is to push the boundaries of AI
                    technology and its applications.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
