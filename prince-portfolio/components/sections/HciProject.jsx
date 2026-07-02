"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { hciProject } from "@/data/hciProject";
import { scrollFadeUp, viewportOnce } from "@/lib/motion";
import Button from "@/components/ui/Button";

export default function HciProject() {
  return (
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
          Final Project
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
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {hciProject.description}
            </p>
          </div>

          {hciProject.prototypeUrl ? (
            <Button href={hciProject.prototypeUrl} target="_blank" rel="noreferrer">
              View prototype
              <ExternalLink size={16} aria-hidden="true" />
            </Button>
          ) : null}
        </motion.div>

        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={scrollFadeUp}
          className="mt-12"
        >
          <h3 className="text-sm font-medium tracking-wide text-muted uppercase">
            Final Prototype Screens
          </h3>

          {hciProject.screenshots.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hciProject.screenshots.map((screenshot) => (
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
          ) : (
            <div className="mt-8 rounded-lg border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
              Add final prototype screenshots to public/hci-project and list
              them in data/hciProject.js.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
