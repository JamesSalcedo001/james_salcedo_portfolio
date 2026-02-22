"use client";

import SiteHeader from "./components/SiteHeader";
import Section from "./components/Section";
import ProjectsGrid from "./components/ProjectsGrid";
import SkillsGrid from "./components/SkillsGrid";
import Button from "./components/Button";
import { useState } from "react";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [triedSubmit, setTriedSubmit] = useState(false);
  const [clickedName, setClickedName] = useState(false);
  const [clickedMessage, setClickedMessage] = useState(false);

  const isValid = name.trim().length > 0 && message.trim().length > 0;
  const nameError = clickedName && name.trim().length === 0;
  const messageError = clickedMessage && message.trim().length === 0;

  function handleSubmit(e) {
    e.preventDefault();
    setTriedSubmit(true);
    setClickedMessage(true);
    setClickedName(true);

    if (!isValid) return;

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 2000);

    setName("");
    setMessage("");
    setTriedSubmit(false);
  }

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
          <div className="mt-6">
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
          <form className="rounded-lg border p-6 mt-2" onSubmit={handleSubmit}>
            {sent && (
              <h3 className="rounded-md mb-4 p-3 text-sm text-emerald-700 bg-emerald-50">Message sent!</h3>
            )}
            <Input
              label="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              onBlur={() => setClickedName(true)}
            />

            {nameError && (
              <p className="mt-2 text-xs text-red-600">Name is required</p>
            )}
            
            <p className="mt-2 text-xs text-neutral-500">
              Preview: {name || "(empty)"}
            </p>

            <div className="mt-4">
              <TextArea
                label="Message"
                id="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={() => setClickedMessage(true)}
              />

              {messageError && (
                <p className="text-xs mt-2 text-red-600">Message is required</p>
              )}

              <p className="mt-2 text-xs text-neutral-500">
                Preview {message || "(empty)"}
              </p>

              <div className="mt-4">
                <Button type="submit" disabled={!isValid}>Send Message</Button>
              </div>


            </div>
          </form>


        </Section>
      </main>
    </div>
  );
}
