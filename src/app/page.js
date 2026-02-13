import SiteHeader from "./components/SiteHeader";
import Section from "./components/Section";

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

        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Selected work"
        >
          <div className="rounded-lg border p-6 text-sm text-neutral-600">
            Projects coming soon!
          </div>
        </Section>


        <Section
          id="skills"
          title="Skills"
          subtitle="Technologies I use often"
        >
          <div className="rounded-lg border p-6 text-sm text-neutral-600">
            Skills section coming soon!
          </div>
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
