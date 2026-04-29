import {
  ArrowRight,
  Building2,
  Factory,
  FolderKanban,
  HardHat,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link, Navigate, Route, Routes } from "react-router-dom"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import headerImage from "@/assets/fh2.jpg"
import logo from "@/assets/logoc.jpg"

import welding from "@/assets/services/welding.JPG"
import metalwork from "@/assets/services/metalwork.png"
import steel from "@/assets/services/steel.png"
import assembly from "@/assets/services/assembly.png"

const clientLogos = Object.entries(
  import.meta.glob("/src/assets/clients/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    name: path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "client",
    src: src as string,
  }))

function LandingPage() {
  const { t, i18n } = useTranslation()

  const features = [
    {
      icon: Sparkles,
      title: t("features.expertise.title"),
      text: t("features.expertise.text"),
    },
    {
      icon: ShieldCheck,
      title: t("features.quality.title"),
      text: t("features.quality.text"),
    },
    {
      icon: Factory,
      title: t("features.reliability.title"),
      text: t("features.reliability.text"),
    },
    {
      icon: HardHat,
      title: t("features.safety.title"),
      text: t("features.safety.text"),
    },
  ]

  const services = [
    { key: "welding", img: welding },
    { key: "metalwork", img: metalwork },
    { key: "steel", img: steel },
    { key: "assembly", img: assembly },
  ]

  const stats = [
    { icon: Sparkles, number: "10+", label: t("stats.experience") },
    { icon: FolderKanban, number: "100+", label: t("stats.projects") },
    { icon: Users, number: "50+", label: t("stats.clients") },
    { icon: ShieldCheck, number: "100%", label: t("stats.quality") },
  ]

  return (
    <main className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-[#1f1f1f]">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(130deg,#0a0a0a_20%,#111827_58%,#0a0a0a_95%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_56%,rgba(245,107,32,0.22),transparent_32%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,5,5,0.95)_0%,rgba(5,5,5,0.6)_52%,rgba(5,5,5,0.2)_100%)]" />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <header className="flex items-center justify-between">
            <div>
              <img className="w-[140px] pb-4 pt-7 sm:w-[220px]" src={logo} alt="" />
            </div>
            <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.18em] text-[#cccccc] md:flex">
              <a href="#home" className="text-primary">
                {t("nav.home")}
              </a>
              <a href="#about" className="hover:text-white">
                {t("nav.about")}
              </a>
              <a href="#services" className="hover:text-white">
                {t("nav.services")}
              </a>
              <a href="#projects" className="hover:text-white">
                {t("nav.projects")}
              </a>
              <a href="#contact" className="hover:text-white">
                {t("nav.contact")}
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => void i18n.changeLanguage("bs")}>
                BS
              </Button>
              <Button variant="outline" size="sm" onClick={() => void i18n.changeLanguage("en")}>
                EN
              </Button>
              <Button variant="outline" size="sm" onClick={() => void i18n.changeLanguage("de")}>
                DE
              </Button>
              <Button size="sm" className="hidden md:inline-flex">
                {t("nav.offer")}
              </Button>
            </div>
          </header>

          <div
            id="home"
            className="relative left-1/2 mt-8 w-screen -translate-x-1/2 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
          >
            <img
              src={welding}
              alt="Metal worker welding in workshop"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.72)_34%,rgba(0,0,0,0.42)_62%,rgba(0,0,0,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_62%,rgba(249,115,22,0.34),transparent_36%)]" />

            <div className="relative z-10 mx-auto flex min-h-[430px] w-full max-w-6xl items-center px-5 py-10 md:min-h-[520px] md:px-8">
              <div className="max-w-lg bg-black/62 p-5 md:p-7">
                <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight md:text-7xl">
                  {t("hero.titleTop")}
                  <br />
                  <span className="text-white">{t("hero.titleMiddle")}</span>
                  <br />
                  <span className="text-primary">{t("hero.titleBottom")}</span>
                </h1>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#c5c5c5]">
                  {t("hero.text")}
                </p>
                <Button className="mt-7 gap-2">
                  {t("hero.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1f1f1f] bg-[#070b12]">
        <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon

            return (
              <article
                key={item.label}
                className={`flex items-center gap-4 px-5 py-6 md:px-7 ${
                  index !== stats.length - 1 ? "lg:border-r lg:border-[#1f2933]" : ""
                }`}
              >
                <Icon className="h-10 w-10 text-primary" />
                <div>
                  <p className="text-5xl font-extrabold leading-none">{item.number}</p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.07em] text-[#c5c9d0]">
                    {item.label}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl border-b border-[#1f1f1f] px-5 py-12 md:px-8">
        <p className="section-label">{t("about.label")}</p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold leading-tight md:text-3xl">
          {t("about.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {t("about.text")}
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article key={feature.title} className="rounded-sm border border-[#232323] bg-[#0e0e0e] p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {feature.text}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl border-b border-[#1f1f1f] px-5 py-12 md:px-8">
        <p className="section-label">{t("projects.label")}</p>
        <div className="client-marquee mt-6 overflow-hidden rounded-sm border border-[#232323] bg-[#0d0d0d] py-6">
          <div className="client-marquee-track">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="mx-3 flex h-20 w-40 shrink-0 items-center justify-center px-4"
              >
                <img
                  src={client.src}
                  alt={`${client.name} logo`}
                  className="max-h-10 w-auto object-contain opacity-85 transition-opacity duration-300 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl border-b border-[#1f1f1f] px-0 py-12 md:px-0">
        <div className="px-5 md:px-8">
          <p className="section-label">{t("services.label")}</p>
        </div>
        <div className="mt-6 space-y-[1px] bg-[#2a2a2a]">
          {services.map((item) => (
            <Link
              key={item.key}
              to={`/${item.key}`}
              className="service-row group block"
            >
              <div className="service-bg-wrap">
                <img
                  src={item.img}
                  className="service-bg-image"
                  alt={t(`services.items.${item.key}.title`)}
                />
                <div className="service-image-overlay" />
              </div>

              {/* <div className="service-rail">
                <span className="service-rail-text">
                  {t(`services.items.${item.key}.title`)}
                </span>
              </div> */}

              <div className="service-content">
                <span className="mb-3 block h-[3px] w-10 bg-primary" />
                <h3 className="font-display text-4xl uppercase leading-none tracking-tight md:text-5xl">
                  {t(`services.items.${item.key}.title`)}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[#b7b7b7]">
                  {t(`services.items.${item.key}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer-pattern mx-auto w-full px-5 py-12 md:px-8 flex justify-center">
        <div className="max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <p className="font-display text-3xl uppercase tracking-wider text-primary">
                {t("brand")}
              </p>
              <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                {t("footer.copy")}
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary">
                {t("footer.quickLinks")}
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-[#d5d5d5]">
                <li>{t("nav.about")}</li>
                <li>{t("nav.services")}</li>
                <li>{t("nav.projects")}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary">
                {t("footer.contact")}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[#d5d5d5]">
                <li className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  +387 123 456
                </li>
                <br />
                <li className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  info@mtf-group.com
                </li>
                <br />
                <li className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {t("footer.address")}
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 border-t border-[#1f1f1f] pt-4 text-center text-xs text-[#6f6f6f]">
            Powered by <a href="https://ekdsolutions.com" target="_blank" className="text-primary">EKD Solutions</a> , 2026
          </p>

        </div>
      </footer>
    </main>
  )
}

function ServicePage({ serviceKey }: { serviceKey: "welding" | "metalwork" | "steel" | "assembly" }) {
  const { t, i18n } = useTranslation()

  return (
    <main className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-[#1f1f1f]">
        {/* <div className="absolute inset-0 -z-20 bg-[linear-gradient(130deg,#0a0a0a_20%,#111827_58%,#0a0a0a_95%)]" /> */}
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <header className="flex items-center justify-between py-6">
            <img className="w-[140px] sm:w-[220px]" src={logo} alt="" />
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => void i18n.changeLanguage("bs")}>
                BS
              </Button>
              <Button variant="outline" size="sm" onClick={() => void i18n.changeLanguage("en")}>
                EN
              </Button>
              <Button variant="outline" size="sm" onClick={() => void i18n.changeLanguage("de")}>
                DE
              </Button>
            </div>
          </header>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#1f1f1f]">
        <img src={headerImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.5)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h1 className="font-display text-5xl uppercase tracking-tight md:text-7xl">
            {t(`services.items.${serviceKey}.title`)}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-[#c7c7c7]">
          {t(`services.items.${serviceKey}.description`)}
        </p>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t(`services.items.${serviceKey}.longText`)}
        </p>
        <ul className="mt-6 space-y-2 text-base text-[#e1e1e1]">
          {[1, 2, 3].map((n) => (
            <li key={n}>{"\u2714"} {t(`services.items.${serviceKey}.bullets.${n - 1}`)}</li>
          ))}
        </ul>
        <Link to="/" className={cn(buttonVariants(), "mt-8 inline-flex")}>
          {t("services.backToHome")}
        </Link>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/welding" element={<ServicePage serviceKey="welding" />} />
      <Route path="/metalwork" element={<ServicePage serviceKey="metalwork" />} />
      <Route path="/steel" element={<ServicePage serviceKey="steel" />} />
      <Route path="/assembly" element={<ServicePage serviceKey="assembly" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
