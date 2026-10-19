
import { useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Menu,
  X,
  Terminal,
  Layers3,
  Sparkles,
  ExternalLink,
  Sun,
  Moon,
} from 'lucide-react'

const profile = {
  name: 'Muhammad Razwa Rizky Syakir',
  nickname: 'razwa',
  role: 'Frontend Developer',
  email: 'razwarizky13@gmail.com',
  github: 'https://github.com/razwa28',
  instagram: 'https://www.instagram.com/awzar.r/',
  linkedin: 'https://id.linkedin.com/in/razwa-rizky-82b71941a',
}

const skills = [
  { name: 'HTML & CSS', category: 'Frontend', description: 'Website structure and styling' },
  { name: 'JavaScript', category: 'Programming', description: 'Interactive web experiences' },
  { name: 'React', category: 'Frontend', description: 'Reusable UI components' },
  { name: 'Tailwind CSS', category: 'Styling', description: 'Modern responsive design' },
  { name: 'PHP & Laravel', category: 'Backend', description: 'Web application development' },
  { name: 'MySQL & PostgreSQL', category: 'Database', description: 'Database and SQL' },
]

const projects = [
  {
    number: '01',
    title: 'Kantin FIT',
    type: 'Web Application',
    description:
      'Aplikasi pengelolaan menu kantin dengan fitur CRUD, kategori, stok menu, dan pembatasan akses berdasarkan peran pengguna.',
    stack: ['Laravel', 'PHP', 'PostgreSQL'],
    icon: Layers3,
    color: 'from-blue-500/20 to-cyan-400/5',
    repo: '',
    demo: '',
  },
  {
    number: '02',
    title: 'Personal Portfolio',
    type: 'Frontend Development',
    description:
      'Website portofolio responsif untuk menampilkan profil, kemampuan, proyek, dan informasi kontak dalam desain futuristik.',
    stack: ['React', 'Tailwind CSS', 'Vite'],
    icon: Code2,
    color: 'from-blue-500/20 to-sky-400/5',
    repo: 'https://github.com/razwa28',
    demo: '',
  },
  {
    number: '03',
    title: 'Database Explorer',
    type: 'Database Project',
    description:
      'Proyek pembelajaran basis data yang mencakup desain tabel, relasi, query SQL, dan pengolahan data terstruktur.',
    stack: ['MySQL', 'SQL', 'DBeaver'],
    icon: Terminal,
    color: 'from-cyan-500/20 to-blue-400/5',
    repo: '',
    demo: '',
  },
]

function SectionTitle({ eyebrow, title, description, theme }) {
  const dark = theme === 'dark'

  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      <p
        className={`mt-4 leading-7 ${
          dark ? 'text-zinc-400' : 'text-slate-600'
        }`}
      >
        {description}
      </p>
    </div>
  )
}

function InteractiveIDCard({ theme }) {
  const [flipped, setFlipped] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const drag = useRef({
    active: false,
    moved: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  })

  const dark = theme === 'dark'

  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return

    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    }

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (drag.current.active) {
      const dx = event.clientX - drag.current.startX
      const dy = event.clientY - drag.current.startY

      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        drag.current.moved = true
      }

      setPosition({
        x: drag.current.originX + dx,
        y: drag.current.originY + dy,
      })

      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    setRotation({
      x: -y * 10,
      y: x * 12,
    })
  }

  const handlePointerUp = () => {
    drag.current.active = false
  }

  const handleClick = () => {
    if (drag.current.moved) {
      drag.current.moved = false
      return
    }

    setFlipped((current) => !current)
  }

  const resetCard = () => {
    setPosition({ x: 0, y: 0 })
    setRotation({ x: 0, y: 0 })
  }

  const mutedText = dark ? 'text-zinc-400' : 'text-slate-600'
  const subtleText = dark ? 'text-zinc-500' : 'text-slate-500'
  const mainText = dark ? 'text-white' : 'text-slate-900'

  return (
    <div className="relative mx-auto w-full max-w-[360px] py-8">
      {/* Glow biru */}
      <div
        className={`pointer-events-none absolute inset-8 rounded-full blur-3xl ${
          dark ? 'bg-blue-600/20' : 'bg-blue-400/25'
        }`}
      />

      <div
        className="relative z-10 mx-auto w-full cursor-grab select-none active:cursor-grabbing"
        style={{
          perspective: '1200px',
          touchAction: 'none',
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onLostPointerCapture={handlePointerUp}
        onClick={handleClick}
      >
        <div
          className="relative w-full"
          style={{
            aspectRatio: '1.586',
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${
              rotation.y + (flipped ? 180 : 0)
            }deg)`,
            transition: drag.current.active
              ? 'none'
              : 'transform 500ms cubic-bezier(.2,.8,.2,1)',
          }}
        >
          {/* SISI DEPAN */}
          <div
            className={`absolute inset-0 overflow-hidden rounded-2xl border p-5 shadow-2xl transition-colors duration-300 sm:p-6 ${
              dark
                ? 'border-blue-300/30 bg-gradient-to-br from-[#101d35] via-[#0c1220] to-[#142b4d] shadow-blue-950/50'
                : 'border-blue-200 bg-gradient-to-br from-white via-blue-50 to-sky-100 shadow-blue-200/70'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div
              className={`pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full blur-2xl ${
                dark ? 'bg-blue-500/20' : 'bg-blue-300/35'
              }`}
            />

            <div
              className={`pointer-events-none absolute -bottom-16 -left-10 h-36 w-36 rounded-full blur-2xl ${
                dark ? 'bg-cyan-500/15' : 'bg-sky-300/40'
              }`}
            />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold tracking-[0.3em] text-blue-500 sm:text-[10px]">
                    DIGITAL IDENTITY
                  </p>

                  <p className={`mt-1 text-[8px] tracking-[0.2em] ${subtleText}`}>
                    PERSONAL PORTFOLIO
                  </p>
                </div>

                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-black ${
                    dark
                      ? 'border-blue-300/30 bg-blue-400/10 text-blue-200'
                      : 'border-blue-200 bg-white/80 text-blue-700'
                  }`}
                >
                  R.
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className={`flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border bg-gradient-to-br sm:h-[86px] sm:w-[86px] ${
                    dark
                      ? 'border-blue-300/40 from-blue-500/30 to-cyan-500/10'
                      : 'border-blue-200 from-blue-100 to-cyan-100'
                  }`}
                >
                  <span
                    className={`text-3xl font-black sm:text-4xl ${
                      dark ? 'text-white' : 'text-blue-700'
                    }`}
                  >
                    R
                  </span>
                </div>

                <div className="min-w-0">
                  <p className={`text-[8px] uppercase tracking-[0.2em] ${mutedText}`}>
                    Developer No. 001
                  </p>

                  <h3 className={`mt-2 text-base font-black leading-tight sm:text-lg ${mainText}`}>
                    Muhammad Razwa
                  </h3>

                  <h3 className={`text-base font-black leading-tight sm:text-lg ${mainText}`}>
                    Rizky Syakir
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold text-blue-500 sm:text-xs">
                    Frontend Developer
                  </p>
                </div>
              </div>

              <div
                className={`flex items-end justify-between border-t pt-3 ${
                  dark ? 'border-white/10' : 'border-blue-200'
                }`}
              >
                <div>
                  <p className={`text-[8px] tracking-widest ${subtleText}`}>
                    SPECIALIZATION
                  </p>

                  <p className={`mt-1 text-[10px] font-semibold ${mainText}`}>
                    React · UI/UX · Web
                  </p>
                </div>

                <span className="text-[9px] font-bold tracking-widest text-blue-500">
                  RZ — 2026
                </span>
              </div>
            </div>
          </div>

          {/* SISI BELAKANG */}
          <div
            className={`absolute inset-0 overflow-hidden rounded-2xl border p-5 shadow-2xl transition-colors duration-300 sm:p-6 ${
              dark
                ? 'border-blue-300/30 bg-gradient-to-br from-[#101d35] via-[#111827] to-[#142b4d]'
                : 'border-blue-200 bg-gradient-to-br from-white via-sky-50 to-blue-100'
            }`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-[9px] font-bold tracking-[0.3em] text-blue-500">
                  DEVELOPER PROFILE
                </p>

                <h3 className={`mt-3 text-lg font-black ${mainText}`}>
                  Let&apos;s build something.
                </h3>

                <p className={`mt-1 text-[10px] leading-relaxed ${mutedText}`}>
                  Mahasiswa dan web developer yang terus belajar menciptakan
                  pengalaman digital yang menarik.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => event.stopPropagation()}
                  aria-label="Instagram"
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-[10px] transition hover:border-pink-400/50 hover:bg-pink-500/10 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-zinc-200'
                      : 'border-slate-200 bg-white/70 text-slate-700'
                  }`}
                >
                  <Instagram size={17} />
                  Instagram
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => event.stopPropagation()}
                  aria-label="GitHub"
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-[10px] transition hover:border-blue-400/50 hover:bg-blue-500/10 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-zinc-200'
                      : 'border-slate-200 bg-white/70 text-slate-700'
                  }`}
                >
                  <Github size={17} />
                  GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={(event) => event.stopPropagation()}
                  aria-label="LinkedIn"
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-[10px] transition hover:border-blue-400/50 hover:bg-blue-500/10 ${
                    dark
                      ? 'border-white/10 bg-white/5 text-zinc-200'
                      : 'border-slate-200 bg-white/70 text-slate-700'
                  }`}
                >
                  <Linkedin size={17} />
                  LinkedIn
                </a>
              </div>

              <p
                className={`border-t pt-2 text-[9px] tracking-widest ${
                  dark ? 'border-white/10 text-zinc-500' : 'border-blue-200 text-slate-500'
                }`}
              >
                KEEP LEARNING · KEEP BUILDING
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol kartu */}
      <div className="relative z-10 mt-5 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setFlipped((current) => !current)}
          className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
            dark
              ? 'border-blue-400/30 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20'
              : 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100'
          }`}
        >
          {flipped ? 'Lihat Depan' : 'Balik Kartu'} ↻
        </button>

        <button
          type="button"
          onClick={resetCard}
          className={`rounded-full border px-4 py-2 text-xs transition ${
            dark
              ? 'border-white/10 text-zinc-300 hover:bg-white/5'
              : 'border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          Reset Posisi ↺
        </button>
      </div>

      <p className={`mt-3 text-center text-[10px] ${subtleText}`}>
        Geser kartu dengan mouse atau jari · Klik untuk membalik
      </p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  const dark = theme === 'dark'

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  const navigation = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
  ]

  const sectionBorder = dark ? 'border-white/[0.08]' : 'border-slate-200'
  const mutedText = dark ? 'text-zinc-400' : 'text-slate-600'
  const headingText = dark ? 'text-white' : 'text-slate-900'

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        dark
          ? 'bg-[#080c16] text-zinc-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* BACKGROUND GALAXY BIRU */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute -left-40 top-0 h-96 w-96 animate-pulse rounded-full blur-[120px] ${
            dark ? 'bg-blue-600/15' : 'bg-blue-400/15'
          }`}
        />

        <div
          className={`absolute -right-40 top-80 h-96 w-96 animate-pulse rounded-full blur-[120px] ${
            dark ? 'bg-cyan-600/10' : 'bg-sky-400/15'
          }`}
        />

        <div
          className={`absolute inset-0 ${
            dark
              ? 'bg-[linear-gradient(rgba(96,165,250,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.035)_1px,transparent_1px)]'
              : 'bg-[linear-gradient(rgba(37,99,235,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.045)_1px,transparent_1px)]'
          } bg-[size:52px_52px]`}
        />
      </div>

      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
          dark
            ? 'border-white/[0.08] bg-[#080c16]/85'
            : 'border-slate-200 bg-white/85'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                dark
                  ? 'border-blue-400/30 bg-blue-500/10 text-blue-300'
                  : 'border-blue-200 bg-blue-50 text-blue-700'
              }`}
            >
              <Code2 size={21} />
            </span>

            <span className="font-bold tracking-tight">
              razwa<span className="text-blue-500">.dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition ${
                  dark
                    ? 'text-zinc-400 hover:text-blue-300'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              className={`rounded-full border px-5 py-2.5 text-sm transition ${
                dark
                  ? 'border-blue-400/40 text-blue-300 hover:bg-blue-500/10'
                  : 'border-blue-200 text-blue-700 hover:bg-blue-50'
              }`}
            >
              Let&apos;s talk <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? 'Aktifkan Light Mode' : 'Aktifkan Dark Mode'}
              title={dark ? 'Aktifkan Light Mode' : 'Aktifkan Dark Mode'}
              className={`rounded-full border p-2.5 transition ${
                dark
                  ? 'border-blue-400/30 text-blue-300 hover:bg-blue-500/10'
                  : 'border-blue-200 text-blue-700 hover:bg-blue-50'
              }`}
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className={`rounded-lg border p-2 md:hidden ${
                dark
                  ? 'border-white/10 text-zinc-200'
                  : 'border-slate-200 text-slate-700'
              }`}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            className={`border-t px-5 py-4 md:hidden ${
              dark ? 'border-white/10' : 'border-slate-200'
            }`}
          >
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 transition ${
                  dark
                    ? 'text-zinc-300 hover:text-blue-300'
                    : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              className="block py-3 text-sm font-semibold text-blue-500"
            >
              Contact Me <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="home"
          className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-24"
        >
          <div>
            <div
              className={`mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
                dark
                  ? 'border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-700'
              }`}
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Welcome to my portfolio
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-blue-500">
              Hello, I&apos;m {profile.nickname}
            </p>

            <h1 className={`max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl ${headingText}`}>
              Building digital
              <span className="block bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400 bg-clip-text pb-2 text-transparent">
                experiences.
              </span>
            </h1>

            <p className={`mt-7 max-w-xl text-base leading-8 sm:text-lg ${mutedText}`}>
              Saya {profile.name}, seorang mahasiswa dan {profile.role} yang
              senang membangun website modern, responsif, dan nyaman digunakan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Explore Projects
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 font-semibold transition ${
                  dark
                    ? 'border-white/15 text-zinc-200 hover:border-blue-400/50 hover:bg-blue-500/5'
                    : 'border-slate-300 text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                Contact Me <ArrowUpRight size={17} />
              </a>
            </div>

            <div className={`mt-12 flex flex-wrap items-center gap-5 ${mutedText}`}>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:text-blue-500"
              >
                <Github size={21} />
              </a>

              <a
                href={profile.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition hover:text-blue-500"
              >
                <Instagram size={21} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-blue-500"
              >
                <Linkedin size={21} />
              </a>

              <span className={`h-px w-12 ${dark ? 'bg-white/15' : 'bg-slate-300'}`} />

              <span className="text-xs tracking-wide">
                LET&apos;S BUILD SOMETHING
              </span>
            </div>
          </div>

          {/* ID CARD */}
          <div className="relative mx-auto w-full max-w-md lg:-translate-y-10">
            <InteractiveIDCard theme={theme} />
          </div>

          <a
            href="#about"
            className={`absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs transition hover:text-blue-500 lg:flex ${
              dark ? 'text-zinc-500' : 'text-slate-500'
            }`}
          >
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className={`scroll-mt-24 border-t ${sectionBorder}`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <SectionTitle
              theme={theme}
              eyebrow="01 / About me"
              title="Curious mind. Creative builder."
              description="Saya senang mempelajari teknologi, memecahkan masalah, dan mengubah ide menjadi produk digital yang bermanfaat."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Code2,
                  title: 'Web Development',
                  text: 'Membangun antarmuka website dengan struktur yang rapi dan responsif.',
                },
                {
                  icon: Layers3,
                  title: 'Problem Solving',
                  text: 'Memahami kebutuhan, merancang solusi, dan mengembangkan fitur secara bertahap.',
                },
                {
                  icon: Sparkles,
                  title: 'Always Learning',
                  text: 'Terus bereksperimen dengan tools, teknologi, dan pendekatan baru.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 ${
                    dark
                      ? 'border-white/[0.08] bg-white/[0.025] hover:bg-blue-500/[0.04]'
                      : 'border-slate-200 bg-white shadow-sm hover:bg-blue-50/50'
                  }`}
                >
                  <item.icon className="mb-5 text-blue-500" size={27} />

                  <h3 className={`text-lg font-semibold ${headingText}`}>
                    {item.title}
                  </h3>

                  <p className={`mt-3 text-sm leading-7 ${mutedText}`}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className={`scroll-mt-24 border-t ${sectionBorder}`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
            <SectionTitle
              theme={theme}
              eyebrow="02 / Tech stack"
              title="Tools I work with."
              description="Teknologi yang saya pelajari dan gunakan untuk mengembangkan aplikasi web."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group flex items-start gap-4 rounded-2xl border p-5 transition hover:border-blue-400/40 ${
                    dark
                      ? 'border-white/[0.08] bg-[#101827]/70'
                      : 'border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/15 text-blue-500">
                    {index % 2 === 0 ? <Code2 size={22} /> : <Terminal size={22} />}
                  </span>

                  <div>
                    <h3 className={`font-semibold ${headingText}`}>
                      {skill.name}
                    </h3>

                    <p className="mt-1 text-xs text-blue-500">
                      {skill.category}
                    </p>

                    <p className={`mt-2 text-sm ${dark ? 'text-zinc-500' : 'text-slate-500'}`}>
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className={`scroll-mt-24 border-t ${sectionBorder}`}>
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <SectionTitle
              theme={theme}
              eyebrow="03 / Selected work"
              title="Projects I've explored."
              description="Contoh proyek akademik dan latihan. Sesuaikan deskripsi serta tautan berdasarkan proyek asli yang pernah kamu kerjakan."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className={`group overflow-hidden rounded-3xl border transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 ${
                    dark
                      ? 'border-white/[0.08] bg-[#101827]/70'
                      : 'border-slate-200 bg-white shadow-sm'
                  }`}
                >
                  <div
                    className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.13),transparent_65%)]" />

                    <div
                      className={`relative flex h-20 w-20 items-center justify-center rounded-3xl border shadow-2xl backdrop-blur ${
                        dark
                          ? 'border-white/15 bg-slate-950/30'
                          : 'border-blue-200 bg-white/60'
                      }`}
                    >
                      <project.icon size={35} className="text-blue-500" />
                    </div>

                    <span className={`absolute left-5 top-5 font-mono text-sm ${mutedText}`}>
                      /{project.number}
                    </span>

                    <span
                      className={`absolute right-5 top-5 rounded-full border px-3 py-1 text-xs ${
                        dark
                          ? 'border-white/10 bg-black/20 text-zinc-300'
                          : 'border-blue-100 bg-white/80 text-slate-600'
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold ${headingText}`}>
                      {project.title}
                    </h3>

                    <p className={`mt-3 min-h-20 text-sm leading-7 ${mutedText}`}>
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-3 py-1.5 text-xs ${
                            dark
                              ? 'border-white/[0.08] text-zinc-400'
                              : 'border-slate-200 text-slate-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`mt-6 flex flex-wrap gap-4 border-t pt-5 text-sm ${
                        dark ? 'border-white/[0.08]' : 'border-slate-200'
                      }`}
                    >
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 transition ${
                            dark
                              ? 'text-zinc-300 hover:text-blue-300'
                              : 'text-slate-600 hover:text-blue-600'
                          }`}
                        >
                          <Github size={16} /> Source Code
                        </a>
                      ) : (
                        <span className={`inline-flex items-center gap-2 ${dark ? 'text-zinc-600' : 'text-slate-400'}`}>
                          <Github size={16} /> Repository belum diisi
                        </span>
                      )}

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-2 text-blue-500 hover:text-blue-400"
                        >
                          Live Demo <ExternalLink size={15} />
                        </a>
                      ) : (
                        <span className={`ml-auto text-xs ${dark ? 'text-zinc-600' : 'text-slate-400'}`}>
                          Demo belum diisi
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={`relative z-10 border-t ${sectionBorder}`}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 text-center text-xs sm:flex-row sm:px-8">
          <p className={dark ? 'text-zinc-500' : 'text-slate-500'}>
            © {new Date().getFullYear()} {profile.nickname}. Built with React & Tailwind CSS.
          </p>

          <a
            href="#home"
            className={`transition hover:text-blue-500 ${
              dark ? 'text-zinc-400' : 'text-slate-600'
            }`}
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
