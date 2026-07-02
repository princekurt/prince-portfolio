"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Map, ScrollText } from "lucide-react";
import { hciProject } from "@/data/hciProject";
import { scrollFadeUp, viewportOnce } from "@/lib/motion";
import Button from "@/components/ui/Button";

const fallbackSpotlight = [
  {
    label: "Welcome & Setup",
    src: "",
    alt: "SafePath welcome and setup screen",
  },
  {
    label: "Real Time Mapping",
    src: "",
    alt: "SafePath real time mapping screen",
  },
  {
    label: "Location Insights Panels",
    src: "",
    alt: "SafePath location insights panel",
  },
  {
    label: "Itinerary Panel",
    src: "",
    alt: "SafePath itinerary panel",
  },
  {
    label: "User Feedback Reports",
    src: "",
    alt: "SafePath user feedback reports screen",
  },
];

function PhoneFrame({ screen }) {
  return (
    <div className="mx-auto w-full max-w-[18rem] rounded-[2rem] border border-border bg-surface p-3 shadow-2xl">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.5rem] border border-border bg-background">
        <div className="absolute top-3 left-1/2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-surface-raised" />
        {screen.src ? (
          <Image
            src={screen.src}
            alt={screen.alt}
            fill
            sizes="288px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center">
            <p className="text-sm leading-relaxed text-muted">
              Add a screenshot for {screen.label} in data/hciProject.js.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ScreenshotGrid({ screenshots }) {
  if (!screenshots.length) {
    return (
      <div className="mt-8 rounded-lg border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
        Add SafePath screenshots to public/hci-project and list them in
        data/hciProject.js.
      </div>
    );
  }

  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {screenshots.map((screenshot) => (
        <li
          key={screenshot.src}
          className="overflow-hidden rounded-lg border border-border bg-surface transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-muted hover:bg-surface-raised hover:shadow-xl"
        >
          <div className="relative aspect-[4/3] w-full bg-background">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function HciProject() {
  const spotlightItems = hciProject.spotlight.length
    ? hciProject.spotlight
    : fallbackSpotlight;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = spotlightItems[activeIndex];

  return (
    <>
      <section
        id="hci-project"
        aria-labelledby="hci-project-heading"
        className="border-t border-border px-6 py-24 md:px-12 md:py-32 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scrollFadeUp}
            className="mb-4 text-sm font-medium tracking-wide text-accent uppercase"
          >
            {hciProject.course}
          </motion.p>

          <motion.div
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scrollFadeUp}
            className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start"
          >
            <div>
              <h2
                id="hci-project-heading"
                className="font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
              >
                {hciProject.title}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                {hciProject.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href={hciProject.apkUrl} target="_blank" rel="noreferrer">
                Install APK
                <Download size={16} aria-hidden="true" />
              </Button>
              <Button
                href={hciProject.paperUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                Research Paper
                <ScrollText size={16} aria-hidden="true" />
              </Button>
              <Button
                href={hciProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
              >
                Repository
                <ExternalLink size={16} aria-hidden="true" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scrollFadeUp}
            className="mt-16 grid gap-10 lg:grid-cols-[20rem_1fr] lg:items-center"
          >
            <PhoneFrame screen={activeScreen} />

            <div>
              <h3 className="text-sm font-medium tracking-wide text-muted uppercase">
                App Spotlight
              </h3>
              <div className="mt-6 grid gap-3">
                {spotlightItems.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={[
                        "flex items-start gap-4 rounded-lg border p-4 text-left transition-[background-color,border-color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "border-muted bg-surface-raised"
                          : "border-border bg-surface hover:-translate-y-0.5 hover:border-muted hover:bg-surface-raised",
                      ].join(" ")}
                    >
                      <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-sm font-medium text-accent">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block text-base font-medium text-foreground">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">
                          Click to preview this SafePath screen in the phone
                          frame.
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={0.15}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scrollFadeUp}
            className="mt-16"
          >
            <h3 className="flex items-center gap-2 text-sm font-medium tracking-wide text-muted uppercase">
              <Map size={16} aria-hidden="true" />
              More SafePath Screenshots
            </h3>
            <ScreenshotGrid screenshots={hciProject.screenshots} />
          </motion.div>
        </div>
      </section>

      <section
        id="ccis-award"
        aria-labelledby="ccis-award-heading"
        className="border-t border-border bg-surface px-6 py-24 md:px-12 md:py-32 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <motion.p
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scrollFadeUp}
            className="mb-4 text-sm font-medium tracking-wide text-accent uppercase"
          >
            Recognition
          </motion.p>

          <motion.h2
            id="ccis-award-heading"
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scrollFadeUp}
            className="font-heading text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            Award during CCIS Innovation 2026
          </motion.h2>

          {hciProject.awards.length > 0 ? (
            <motion.ul
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={scrollFadeUp}
              className="mt-12 grid gap-4 md:grid-cols-2"
            >
              {hciProject.awards.map((award) => (
                <li
                  key={award.src}
                  className="overflow-hidden rounded-lg border border-border bg-background transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-muted hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={award.src}
                      alt={award.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="border-t border-border p-5">
                    <h3 className="text-base font-medium text-foreground">
                      {award.title}
                    </h3>
                  </div>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={scrollFadeUp}
              className="mt-12 rounded-lg border border-border bg-background p-5 text-sm leading-relaxed text-muted"
            >
              Add the CCIS Innovation 2026 team photo and certificate image to
              public/hci-project, then list them in data/hciProject.js.
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
