"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  Menu,
  Play,
  Send,
  ShoppingBag,
  Sparkles,
  Store,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { HeroScene } from "@/components/HeroScene";
import { Reveal } from "@/components/Reveal";
import { ScrollStory } from "@/components/ScrollStory";

const services = [
  {
    number: "01",
    icon: Sparkles,
    title: "AI Campaign Automation",
    body: "Turn briefs into coordinated campaigns that keep every channel moving.",
    color: "#315C72",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Lead & CRM Workflows",
    body: "Capture, qualify, route, and follow up without leads slipping through.",
    color: "#4FA3A5",
  },
  {
    number: "03",
    icon: Send,
    title: "Scheduling & Publishing",
    body: "Create a reliable content rhythm across teams, brands, and platforms.",
    color: "#6D5BD0",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analytics & Reports",
    body: "See what is working through useful reports, delivered automatically.",
    color: "#7BAE7F",
  },
];

const industries = [
  { name: "Real Estate", icon: Building2, color: "#315C72" },
  { name: "Healthcare", icon: HeartPulse, color: "#4FA3A5" },
  { name: "Education", icon: GraduationCap, color: "#6D5BD0" },
  { name: "Retail", icon: ShoppingBag, color: "#C08D5B" },
  { name: "Local Businesses", icon: Store, color: "#7BAE7F" },
];

const plans = [
  {
    name: "Base",
    setup: "₹10,000",
    monthly: "₹5,000",
    description: "One focused automation to remove a clear operational bottleneck.",
    items: ["Process discovery", "1 core workflow", "30-day optimization"],
  },
  {
    name: "Growth",
    setup: "₹20,000",
    monthly: "₹10,000",
    description: "A connected system across your content, leads, and reporting.",
    items: ["Growth system design", "Up to 4 workflows", "CRM + reporting layer"],
    featured: true,
  },
  {
    name: "Premium",
    setup: "₹30,000",
    monthly: "₹15,000",
    description: "A custom intelligence layer built across your business.",
    items: ["Cross-team automation", "Custom AI agents", "Ongoing growth support"],
  },
];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="MMe AI home">
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-[#315C72] text-white shadow-[0_8px_22px_rgba(49,92,114,.2)]">
        <span className="font-[family-name:var(--font-display)] text-[13px] font-bold tracking-[-0.08em]">
          MM
        </span>
        <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-[#9AC49D]" />
      </span>
      <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.04em] text-[#18202F]">
        MMe <span className="font-medium text-[#4FA3A5]">AI</span>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  return (
    <main id="main-content">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="noise" />
      <motion.div
        className="fixed left-0 top-0 z-[80] h-[2px] bg-[#4FA3A5]"
        style={{ width: progressWidth }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-7">
        <nav
          className="glass mx-auto flex h-16 max-w-[1340px] items-center justify-between rounded-2xl px-4 sm:px-6"
          aria-label="Primary navigation"
        >
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              How it works
            </a>
            <a
              href="#solutions"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              Solutions
            </a>
            <a
              href="#industries"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              Industries
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              Plans
            </a>
          </div>
          <a
            href="#pilot"
            className="hidden items-center gap-2 rounded-xl bg-[#18202F] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#315C72] md:flex"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4F2] text-[#18202F] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="glass mx-auto mt-2 flex max-w-[1340px] flex-col rounded-2xl p-3 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              ["How it works", "#how-it-works"],
              ["Solutions", "#solutions"],
              ["Industries", "#industries"],
              ["Plans", "#pricing"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#667085] hover:bg-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#pilot"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-between rounded-xl bg-[#18202F] px-4 py-3 text-sm font-semibold text-white"
            >
              Book a Demo <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </header>

      <section
        id="top"
        aria-labelledby="hero-title"
        className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12"
      >
        <div className="absolute left-[5%] top-36 h-2 w-2 rounded-full bg-[#4FA3A5]/60" />
        <div className="absolute right-[8%] top-56 h-3 w-3 rounded-full bg-[#6D5BD0]/40" />
        <div className="absolute bottom-24 left-[18%] h-2.5 w-2.5 rounded-full bg-[#7BAE7F]/60" />
        <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1340px] items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-10">
            <motion.div
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D9E2E1] bg-white/55 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#315C72] backdrop-blur-sm"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7BAE7F] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7BAE7F]" />
              </span>
              Your intelligent growth layer
            </motion.div>
            <motion.h1
              id="hero-title"
              className="max-w-[760px] text-[clamp(3.15rem,7vw,7rem)] font-semibold leading-[0.92] text-[#18202F]"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              AI automation that moves{" "}
              <span className="relative inline-block text-[#315C72]">
                businesses
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full overflow-visible"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 8 C70 2 210 2 298 7"
                    fill="none"
                    stroke="#4FA3A5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.85 }}
                  />
                </svg>
              </span>{" "}
              forward.
            </motion.h1>
            <motion.p
              className="mt-8 max-w-[610px] text-lg leading-8 text-[#667085] sm:text-xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              MMe AI helps growing companies turn ideas into automated systems
              for content, leads, workflows, reporting, and growth.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              <a
                href="#pilot"
                className="group flex items-center justify-center gap-2.5 rounded-2xl bg-[#18202F] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(24,32,47,.18)] transition-all hover:-translate-y-1 hover:bg-[#315C72]"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#D9E2E1] bg-white/60 px-6 py-4 text-sm font-bold text-[#18202F] backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white"
              >
                <Play className="h-4 w-4 fill-[#4FA3A5] text-[#4FA3A5]" />
                Explore How It Works
              </a>
            </motion.div>
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#667085]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#7BAE7F]" /> Built around your
                business
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#7BAE7F]" /> Launch a pilot in
                weeks
              </span>
            </motion.div>
          </div>
          <HeroScene />
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#D9E2E1] bg-white/35 py-5">
        <div className="marquee-track flex w-max items-center">
          {[...Array(2)].flatMap((_, group) =>
            [
              "AUTOMATION",
              "INTELLIGENCE",
              "CONTENT SYSTEMS",
              "LEAD WORKFLOWS",
              "GROWTH SIGNALS",
            ].map((item) => (
              <div
                key={`${group}-${item}`}
                className="flex items-center whitespace-nowrap px-8 text-xs font-bold tracking-[0.2em] text-[#667085]"
              >
                {item}
                <span className="ml-16 h-1.5 w-1.5 rounded-full bg-[#4FA3A5]" />
              </div>
            )),
          )}
        </div>
      </div>

      <ScrollStory />

      <section
        id="solutions"
        aria-labelledby="solutions-title"
        className="relative overflow-hidden bg-[#F7F3EA] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1340px]">
          <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FA3A5]">
                What MMe AI does
              </span>
              <h2
                id="solutions-title"
                className="mt-4 max-w-2xl text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[0.98]"
              >
                Less busywork.
                <br />
                <span className="text-[#667085]">More forward motion.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#667085] sm:text-lg">
              We build the connective tissue between your ideas, tools, and
              customers—so your people can focus on judgment, creativity, and
              growth.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <motion.article
                    className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-[#D9E2E1] bg-white/62 p-6 shadow-[0_18px_60px_rgba(49,92,114,.06)] backdrop-blur-sm sm:p-7"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  >
                    <div
                      className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.08] transition-transform duration-500 group-hover:scale-125"
                      style={{ backgroundColor: service.color }}
                    />
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-xs font-bold text-[#667085]/60">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="mt-20 text-2xl font-semibold leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-6 text-[#667085]">
                      {service.body}
                    </p>
                    <div
                      className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: service.color }}
                    />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="industries"
        aria-labelledby="industries-title"
        className="relative overflow-hidden bg-[#F3F0FF] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6D5BD0]/[0.08]" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6D5BD0]/10" />
        <div className="relative mx-auto max-w-[1340px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6D5BD0]">
              Built for real businesses
            </span>
            <h2
              id="industries-title"
              className="mt-4 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[0.98]"
            >
              One intelligence layer.
              <br />
              <span className="text-[#667085]">Many industries.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
              Every business has different friction. MMe AI adapts the system to
              your customers, team, and operating reality.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.name} delay={index * 0.07}>
                  <motion.div
                    className={`group glass flex min-h-[180px] flex-col items-center justify-center rounded-[28px] p-5 text-center ${
                      index === 4 ? "col-span-2 md:col-span-1" : ""
                    }`}
                    whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }}
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: industry.color }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="mt-5 font-[family-name:var(--font-display)] text-[15px] font-bold text-[#18202F]">
                      {industry.name}
                    </span>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        aria-labelledby="pricing-title"
        className="bg-[#EEF4F2] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FA3A5]">
              Start at the right size
            </span>
            <h2
              id="pricing-title"
              className="mt-4 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-none"
            >
              A clear path from
              <br />
              <span className="text-[#315C72]">pilot to scale.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-center">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <article
                  className={`relative overflow-hidden rounded-[30px] border p-7 sm:p-9 ${
                    plan.featured
                      ? "min-h-[450px] border-[#315C72] bg-[#315C72] text-white shadow-[0_28px_80px_rgba(49,92,114,.22)] lg:-translate-y-4"
                      : "min-h-[410px] border-[#D9E2E1] bg-white/65 text-[#18202F]"
                  }`}
                >
                  {plan.featured && (
                    <>
                      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4FA3A5]/20 blur-2xl" />
                      <span className="absolute right-7 top-7 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                        Most popular
                      </span>
                    </>
                  )}
                  <div className="relative">
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.18em] ${
                        plan.featured ? "text-[#B9DAD6]" : "text-[#4FA3A5]"
                      }`}
                    >
                      {plan.name}
                    </span>
                    <h3 className="mt-7 text-3xl font-semibold">
                      {index === 0
                        ? "Solve one thing well."
                        : index === 1
                          ? "Connect the growth engine."
                          : "Transform how you operate."}
                    </h3>
                    <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-2">
                      <div>
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-[0.16em] ${
                            plan.featured ? "text-white/55" : "text-[#667085]"
                          }`}
                        >
                          Setup
                        </span>
                        <span className="mt-1 block text-2xl font-bold tracking-[-0.04em]">
                          {plan.setup}
                        </span>
                      </div>
                      <span
                        className={`pb-1 text-sm ${
                          plan.featured ? "text-white/45" : "text-[#667085]"
                        }`}
                      >
                        +
                      </span>
                      <div>
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-[0.16em] ${
                            plan.featured ? "text-white/55" : "text-[#667085]"
                          }`}
                        >
                          Monthly
                        </span>
                        <span className="mt-1 block text-2xl font-bold tracking-[-0.04em]">
                          {plan.monthly}
                          <span
                            className={`ml-1 text-xs font-medium tracking-normal ${
                              plan.featured ? "text-white/55" : "text-[#667085]"
                            }`}
                          >
                            /mo
                          </span>
                        </span>
                      </div>
                    </div>
                    <p
                      className={`mt-6 min-h-[72px] text-[15px] leading-6 ${
                        plan.featured ? "text-white/65" : "text-[#667085]"
                      }`}
                    >
                      {plan.description}
                    </p>
                    <div
                      className={`my-7 h-px ${
                        plan.featured ? "bg-white/15" : "bg-[#D9E2E1]"
                      }`}
                    />
                    <ul className="space-y-4">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              plan.featured
                                ? "bg-white/12 text-[#B9DAD6]"
                                : "bg-[#E6F0E7] text-[#6A9A6F]"
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#pilot"
                      className={`mt-9 flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-bold transition-transform hover:-translate-y-1 ${
                        plan.featured
                          ? "bg-white text-[#18202F]"
                          : "bg-[#EEF4F2] text-[#18202F]"
                      }`}
                    >
                      Start with a pilot <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#667085]">
            Custom automation scope may vary by business.
          </p>
        </div>
      </section>

      <section
        id="pilot"
        aria-labelledby="pilot-title"
        className="relative overflow-hidden bg-[#F7F3EA] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <Reveal className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[36px] bg-[#18202F] px-6 py-16 text-white shadow-[0_35px_90px_rgba(24,32,47,.2)] sm:px-12 sm:py-20 lg:px-20">
          <div className="absolute -right-24 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#4FA3A5]/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-[25rem] w-[25rem] rounded-full bg-[#6D5BD0]/20 blur-3xl" />
          <div className="soft-grid absolute inset-0 opacity-[0.08]" />
          <div className="relative grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9AC9C5]">
                Your next growth system starts here
              </span>
              <h2
                id="pilot-title"
                className="mt-5 max-w-4xl text-[clamp(2.7rem,6vw,6rem)] font-semibold leading-[0.95]"
              >
                Bring AI automation to your business.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Let&apos;s find one high-impact workflow and turn it into your
                first MMe AI growth system.
              </p>
            </div>
            <a
              href="mailto:hello@mmeai.com?subject=MMe%20AI%20Pilot"
              className="group flex min-w-[210px] items-center justify-between gap-6 rounded-2xl bg-[#F7F3EA] px-6 py-5 text-sm font-bold text-[#18202F] transition-all hover:-translate-y-1 hover:bg-white"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[#D9E2E1] bg-[#F7F3EA] px-5 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1340px] flex-col items-center justify-between gap-5 sm:flex-row">
          <Logo />
          <p className="text-center text-sm text-[#667085]">
            Intelligent systems for businesses ready to move forward.
          </p>
          <span className="text-xs text-[#667085]">
            © {new Date().getFullYear()} MMe AI
          </span>
        </div>
      </footer>
    </main>
  );
}
