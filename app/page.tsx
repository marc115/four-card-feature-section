import { Card } from "@/components/Card";

import iconSupervisor from '@/public/icon-supervisor.svg'
import iconTeamBuilder from '@/public/icon-team-builder.svg'
import iconKarma from '@/public/icon-karma.svg'
import iconCalculator from '@/public/icon-calculator.svg'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-very-light-gray p-2 gap-y-4 font-extralight text-very-dark-blue">

      <div className="text-center flex flex-col max-w-lg gap-y-2 my-5">
        <h1 className="text-3xl ">Reliable, efficient delivery</h1>
        <span className="font-bold text-3xl">Powered by Technology</span>
        <p>Our Artificial Intelligence powered tools use millions of project data points to
          ensure that your project is succesfull
        </p>
      </div>

      <div className="flex md:flex-row flex-col w-full gap-5 flex-grow items-center md:px-5">

        <Card
          bgColor="bg-cyan"
          title="Supervisor"
          description="Monitors activity to identify project roadblocks"
          icon={iconSupervisor}
        />

        <div className="flex flex-col gap-y-5 w-full">
          <Card
            bgColor="bg-red"
            title="Team Builder"
            description="Scans our talent network to create the optimal team for your project"
            icon={iconTeamBuilder}
          />

          <Card
            bgColor="bg-orange"
            title="Karma"
            description="Regularly evaluates our talent to ensure quality"
            icon={iconKarma}
          />

        </div>

        <Card
          bgColor="bg-blue"
          title="Calculator"
          description="Uses data from past projects to provide better delivery estimates"
          icon={iconCalculator}
        />

      </div>
    </main>
  );
}
