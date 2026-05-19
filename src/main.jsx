import React from "react";
import { createRoot } from "react-dom/client";
import {
  Calculator,
  Fish,
  Waves,
  FlaskConical,
  Droplets,
  Leaf,
  Bug,
  Egg,
  Sparkles,
  Mail,
  Ruler,
  ShieldCheck,
  HeartPulse,
  Wand2,
  ThermometerSnowflake,
} from "lucide-react";
import "./index.css";

const calculators = [
  "Tank Volume",
  "Substrate Depth",
  "Water Weight",
  "Water Change",
  "Heater Size",
  "PVC Tunnel Planner",
];

const creatures = [
  "Axolotls",
  "Fire Eels",
  "Shrimp",
  "Puffers",
  "Planted Tanks",
  "Oddball Fish",
];

const guides = [
  {
    title: "Tank Cycling Guides",
    desc: "Fishless cycling, beginner cycling, shrimp cycling, axolotl cycling, and water parameter tracking.",
    icon: FlaskConical,
  },
  {
    title: "Pest Problem Guides",
    desc: "Planaria, hydra, detritus worms, algae outbreaks, bacterial blooms, and shrimp-safe treatment notes.",
    icon: Bug,
  },
  {
    title: "Axolotl Care Tools",
    desc: "Temperature safety, feeding schedules, morph profiles, fungus tracking, and healing photo journals.",
    icon: HeartPulse,
  },
  {
    title: "Aquascape Planning",
    desc: "Plan hides, caves, PVC tunnels, substrate zones, driftwood layouts, and planted tank structure.",
    icon: Leaf,
  },
];

function BubbleField() {
  const bubbles = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 17) % 100}%`,
    size: `${8 + (i % 5) * 7}px`,
    duration: `${9 + (i % 6) * 2}s`,
    delay: `${(i % 9) * -1.3}s`,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}

function Header() {
  return (
    <<header className="relative z-50 w-full border-b border-cyan-300/10 bg-slate-950/70 backdrop-blur-xl">
  <div className="mx-auto flex w-full justify-center px-4 py-6">
    
    <a
      href="#home"
      className="flex flex-col items-center justify-center text-center"
    >
      <img
        src="./finventory-logo.png"
        alt="Finventory logo"
        className="block w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] h-auto object-contain drop-shadow-[0_0_20px_rgba(34,211,238,.75)]"
      />

      <h1 className="mt-3 text-3xl sm:text-4xl font-black text-cyan-300 neon-text">
        Finventory
      </h1>

      <p className="mt-1 text-xs uppercase tracking-[.28em] text-cyan-100">
        Aquatic Ecosystem App
      </p>
    </a>

  </div>
</header>
  );
}

function AppPreview() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute inset-8 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="floaty relative rounded-[2.6rem] border border-cyan-300/25 bg-black p-3 shadow-[0_0_70px_rgba(34,211,238,.25)]">
        <div className="overflow-hidden rounded-[2.1rem] bg-[#03111f]">
          <div className="relative h-[620px] bg-[radial-gradient(circle_at_top,#155e75,#020617_45%,#000)] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-cyan-100">Welcome back</p>
                <h3 className="text-3xl font-black text-cyan-300 neon-text">Finventory</h3>
              </div>
              <Wand2 className="h-8 w-8 text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,.9)]" />
            </div>

            <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-black/35 p-5 shadow-aqua backdrop-blur">
              <p className="text-sm text-cyan-100">Main Tank</p>
              <h4 className="mt-1 text-2xl font-black text-white">Fire Eel Sanctuary</h4>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-cyan-50">
                <span className="rounded-2xl bg-cyan-300/10 p-3">125 gal</span>
                <span className="rounded-2xl bg-cyan-300/10 p-3">78°F</span>
                <span className="rounded-2xl bg-cyan-300/10 p-3">pH 7.2</span>
              </div>
              <div className="mt-5 h-3 rounded-full bg-cyan-950">
                <div className="h-3 w-[92%] rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.9)]" />
              </div>
              <div className="mt-3 flex justify-between text-xs">
                <span className="text-lime-300">All Systems Normal</span>
                <span className="text-cyan-100">Health 92%</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/5 p-4">
                <Calculator className="h-7 w-7 text-cyan-300" />
                <p className="mt-3 font-bold text-white">Calculators</p>
                <p className="text-xs text-slate-300">Volume + substrate</p>
              </div>
              <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/5 p-4">
                <Bug className="h-7 w-7 text-cyan-300" />
                <p className="mt-3 font-bold text-white">Pest Guides</p>
                <p className="text-xs text-slate-300">Planaria + hydra</p>
              </div>
              <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/5 p-4">
                <ThermometerSnowflake className="h-7 w-7 text-cyan-300" />
                <p className="mt-3 font-bold text-white">Axolotls</p>
                <p className="text-xs text-slate-300">Cold-water alerts</p>
              </div>
              <div className="rounded-3xl border border-cyan-300/15 bg-cyan-300/5 p-4">
                <Waves className="h-7 w-7 text-cyan-300" />
                <p className="mt-3 font-bold text-white">Cycling</p>
                <p className="text-xs text-slate-300">Track your cycle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-32">
      <BubbleField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,.22),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,.16),transparent_30%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-aqua">
            <Sparkles className="h-4 w-4" />
            Neon aquarium management is coming
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[.98] tracking-tight text-white sm:text-7xl">
            <span className="text-cyan-300 neon-text">Track every tank.</span>
            <br />
            Care for every creature.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Finventory is an aquatic ecosystem app for aquariums, axolotls, shrimp, eels, puffers,
            oddball fish, planted tanks, cycling guides, pest problems, and glowing habitat planning.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#beta"
              className="rounded-2xl bg-cyan-300 px-8 py-4 text-lg font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,.6)] transition hover:scale-105"
            >
              Join Beta
            </a>
            <a
              href="#calculators"
              className="rounded-2xl border border-cyan-300/35 bg-cyan-300/10 px-8 py-4 text-lg font-black text-cyan-100 transition hover:bg-cyan-300/20"
            >
              Explore Tools
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-cyan-100">
            <span>✓ Tank calculators</span>
            <span>✓ Cycling help</span>
            <span>✓ Planaria guides</span>
            <span>✓ Axolotl support</span>
          </div>
        </div>

        <AppPreview />
      </div>
    </section>
  );
}

function CalculatorHub() {
  return (
    <section id="calculators" className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[.35em] text-cyan-200">Free tools</p>
          <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">
            Aquarium calculators that don’t feel like spreadsheets.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            Start with the tools every keeper needs: gallons, substrate, water weight, water changes,
            heater sizing, and PVC tunnel planning for oddball habitats.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((item) => (
            <div key={item} className="glass-card rounded-3xl p-7 transition hover:-translate-y-1 hover:border-cyan-300/35">
              <Calculator className="h-10 w-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,.8)]" />
              <h3 className="mt-5 text-2xl font-black text-cyan-100">{item}</h3>
              <p className="mt-3 text-slate-300">
                Planned as a fast, visual, mobile-friendly calculator for aquarium setup decisions.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guides() {
  return (
    <section id="guides" className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-cyan-300/10 bg-cyan-300/5 p-6 shadow-aqua sm:p-10">
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-[.35em] text-cyan-200">Care guides</p>
            <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">
              Built for the moments when something goes wrong.
            </h2>
            <p className="mt-5 max-w-3xl text-lg text-slate-300">
              Cycling crashes, planaria in shrimp tanks, axolotl temperature stress, algae outbreaks —
              Finventory will help keepers understand what’s happening and what to do next.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {guides.map((g) => (
              <div key={g.title} className="rounded-3xl border border-cyan-300/10 bg-black/30 p-7">
                <g.icon className="h-10 w-10 text-cyan-300" />
                <h3 className="mt-5 text-2xl font-black text-cyan-100">{g.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatureSection() {
  return (
    <section id="creatures" className="relative px-5 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-black uppercase tracking-[.35em] text-cyan-200">Creature-focused</p>
        <h2 className="mt-3 text-4xl font-black text-white sm:text-6xl">
          More than a fish tracker.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
          Finventory is designed for real aquatic hobbyists with real setups — from planted shrimp tanks
          to axolotl habitats and hidden eel tunnel systems.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {creatures.map((c, i) => (
            <div key={c} className="glass-card rounded-3xl p-5">
              {i === 0 ? <Egg /> : i === 1 ? <Fish /> : i === 2 ? <Droplets /> : i === 3 ? <ShieldCheck /> : i === 4 ? <Leaf /> : <Waves />}
              <p className="mt-4 font-black text-cyan-100">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beta() {
  return (
    <section id="beta" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-300/15 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.16),rgba(2,8,23,.8)_45%)] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,.16)] sm:p-14">
        <Mail className="mx-auto h-12 w-12 text-cyan-300" />
        <h2 className="mt-5 text-4xl font-black text-white sm:text-6xl">Join the Finventory beta</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          Early testers will help shape calculators, cycling guides, pest guides, axolotl tracking,
          and the first mobile app experience.
        </p>

        <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            className="min-h-14 flex-1 rounded-2xl border border-cyan-300/20 bg-black/35 px-5 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
          />
          <button className="min-h-14 rounded-2xl bg-cyan-300 px-7 font-black text-slate-950 shadow-[0_0_30px_rgba(34,211,238,.55)] hover:bg-cyan-200">
            Get Early Access
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-400">
          Email connected later. For now, this is a frontend waitlist placeholder.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 px-5 py-10 text-center text-sm text-slate-400">
      <div className="mx-auto max-w-7xl">
        <p className="font-semibold text-cyan-100">Finventory.app</p>
        <p className="mt-2">
          Designed for aquariums, axolotls, eels, shrimp, planted tanks, oddballs, cycling guides, and aquatic care tools.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,#07598566,transparent_34%),linear-gradient(180deg,transparent,#020817)]" />
      <Header />
      <Hero />
      <CalculatorHub />
      <Guides />
      <CreatureSection />
      <Beta />
      <Footer />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
