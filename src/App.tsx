import {
  ArrowRight,
  Building2,
  Factory,
  HardHat,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import headerImage from "@/assets/fh2.jpg"
import logo from "@/assets/logo.jpg"

import welding from "@/assets/welding.jpg"
import locks from "@/assets/locks.jpg"
import metal from "@/assets/metal.jpg"
import montage from "@/assets/montage.jpg"

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

function App() {
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
    {
      key: "welding",
      img: welding
    },
    {
      key: "metalwork",
      img: locks
    },
    {
      key: "steel",
      img: metal
    },
    {
      key: "assembly",
      img: montage
    }
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
              <img className="w-[140px] sm:w-[220px] pt-7 pb-4" src={logo} alt="" />
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
              src={headerImage}
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

            {/* <div className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-2 rounded bg-black/60 px-3 py-2 text-xs uppercase tracking-[0.2em] text-primary">
              <Hammer className="h-3.5 w-3.5" />
              {t("hero.badge")}
            </div> */}
          </div>
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

      <section id="services" className="mx-auto max-w-6xl border-b border-[#1f1f1f] px-5 py-12 md:px-8">
        <p className="section-label">{t("services.label")}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article key={item.key} className="group overflow-hidden rounded-sm border border-[#232323] bg-[#111111]">
              {/* <div className="h-32 bg-[linear-gradient(135deg,#111827,#1f2937_50%,#374151)] transition-transform duration-500 group-hover:scale-105" /> */}
              <img src={item.img} className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105" alt="" />
              <div className="border-t border-[#242424] p-4">
                <h3 className="font-display text-xl uppercase tracking-tight">
                  {t(`services.items.${item.key}.title`)}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t(`services.items.${item.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>



      <footer id="contact" className="mx-auto max-w-6xl px-5 py-12 md:px-8">
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
      </footer>
    </main>
  )
}

export default App
