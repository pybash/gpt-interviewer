"use client"
import { useState } from "react";

import { StartupCard } from "./components/StartupCard/StartupCard";
import { Button } from "@/components/ui/button";

const specializations = [
  {
    "value": "embedded",
    "label": "Embedded Systems Engineer"
  },
  {
    "value": "frontend",
    "label": "Frontend Development"
  },
  {
    "value": "backend",
    "label": "Backend Development"
  },
  {
    "value": "fullstack",
    "label": "Fullstack Development"
  },
  {
    "value": "devops",
    "label": "DevOps Engineer"
  },
  {
    "value": "agile",
    "label": "Agile Coach"
  },
  {
    "value": "ai",
    "label": "AI/ML Engineer"
  }
]

export default function Home() {
  const [special, setSpecial] = useState<string | undefined>();
  const [experience, setExperience] = useState<string | undefined>();
  const [specificAreas, setSpecificAreas] = useState<string | undefined>();
  const [additionalInfo, setAdditionalInfo] = useState<string | undefined>();
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <StartupCard
        specializations={specializations}
        onSpecializationChange={setSpecial}
        onExperienceChange={setExperience}
        onAdditionalInfoChange={setAdditionalInfo}
        hideCard={setIsHidden}
        isHidden={isHidden}
      />
      <div>
        <p>Hello {special}</p>
        <p>Experience: {experience}</p>
        <p>Additional Info: {additionalInfo}</p>
      </div>
    </div>
  );
}
