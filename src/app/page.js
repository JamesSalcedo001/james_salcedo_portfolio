"use client";

import SiteHeader from "./components/SiteHeader";
import Section from "./components/Section";
import ProjectsGrid from "./components/ProjectsGrid";
import SkillsGrid from "./components/SkillsGrid";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <SiteHeader />

      <main>
        <Section
          id="top"
          title="Software Engineer"
          subtitle="I build full stack, practical web apps with Next.js, Rails, JavaScript and PostgreSQL"
        >
          <p className="text-sm text-neutral-700 leading-6">
            I focus on building clean, reusable systems and interfaces. I enjoy working with real-world features like payments, dashboards, and automation tools
          </p>
          <div className="mt-4">
            <Button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>View Projects</Button>
          </div>

        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected work"
        >
          <ProjectsGrid />
        </Section>


        <Section
          id="skills"
          title="Skills"
          subtitle="Technologies I use often"
        >
          <p className="mb-4 text-sm text-neutral-700">I prioritize clean fundamentals and practical tools that ship real products</p>
          <SkillsGrid />
        </Section>


        <Section
          id="contact"
          title="Contact"
          subtitle="Ways to reach me"
        >
          <div className="rounded-lg border p-6 text-neutral-600">
            Contact form coming soon!
          </div>
        </Section>
      </main>
    </div>
  );
}
