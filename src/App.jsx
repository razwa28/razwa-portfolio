
import { useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Mail,
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
    color: 'from-violet-500/20 to-fuchsia-400/5',
    repo: '',
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

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-zinc-400">{description}</p>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  
const [theme, setTheme] = useState('dark')

const toggleTheme = () => {
  setTheme((currentTheme) =>
    currentTheme === 'dark' ? 'light' : 'dark'
  )
}

  const navigation = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
  <div
    className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      theme === 'dark'
        ? 'dark-mode bg-[#080910] text-zinc-100'
        : 'light-mode bg-slate-50 text-zinc-900'
    }`}
  >
      {/* Background futuristik */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-80 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:52px_52px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080910]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-300">
              <Code2 size={21} />
            </span>
            <span className="font-bold tracking-tight">
              razwa<span className="text-violet-400">.dev</span>
            </span>
          </a>

          
<button
  type="button"
  onClick={toggleTheme}
  aria-label={
    theme === 'dark'
      ? 'Aktifkan Light Mode'
      : 'Aktifkan Dark Mode'
  }
  title={
    theme === 'dark'
      ? 'Aktifkan Light Mode'
      : 'Aktifkan Dark Mode'
  }
  className="rounded-full border border-white/15 p-2.5 text-violet-300 transition hover:bg-violet-500/10"
>
  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
</button>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-violet-400/40 px-5 py-2.5 text-sm text-violet-200 transition hover:bg-violet-500/10"
            >
              Let's talk <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-zinc-300 hover:text-violet-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-24"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Welcome to my portfolio
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-violet-300">
              Hello, I'm {profile.nickname}
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Building digital
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text pb-2 text-transparent">
                experiences.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Saya {profile.name}, seorang mahasiswa dan {profile.role} yang
              senang membangun website modern, responsif, dan nyaman digunakan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-400"
              >
                Explore Projects
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-zinc-200 transition hover:border-white/40 hover:bg-white/[0.04]"
              >
                Contact Me <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5 text-zinc-400">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
                <Github size={21} />
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition hover:text-white">
                <Instagram size={21} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
                <Linkedin size={21} />
              </a>
              <span className="h-px w-12 bg-white/15" />
              <span className="text-xs tracking-wide">LET'S BUILD SOMETHING</span>
            </div>
          </div>

          {/* Kartu profil seperti code editor */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-fuchsia-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#10111b]/95 p-6 shadow-2xl sm:p-8">
              <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-auto font-mono text-xs text-zinc-500">
                  developer.jsx
                </span>
              </div>

              <div className="py-8 font-mono text-sm leading-8">
                <p className="text-violet-300">const developer = {'{'}</p>
                <p className="pl-5 text-zinc-400">
                  name: <span className="text-emerald-300">'Razwa'</span>,
                </p>
                <p className="pl-5 text-zinc-400">
                  role: <span className="text-emerald-300">'Developer'</span>,
                </p>
                <p className="pl-5 text-zinc-400">
                  passion: <span className="text-emerald-300">'Creating'</span>,
                </p>
                <p className="pl-5 text-zinc-400">
                  learning: <span className="text-amber-300">true</span>,
                </p>
                <p className="text-violet-300">{'}'}</p>
                <p className="mt-5 text-zinc-500">
                  // turning ideas into reality_
                  <span className="ml-1 inline-block h-4 w-1 animate-pulse bg-violet-400 align-middle" />
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <Code2 className="mb-3 text-blue-400" size={23} />
                  <p className="font-semibold">Clean Code</p>
                  <p className="mt-1 text-xs text-zinc-500">Built with purpose</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <Sparkles className="mb-3 text-violet-400" size={23} />
                  <p className="font-semibold">Creative UI</p>
                  <p className="mt-1 text-xs text-zinc-500">Designed with care</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-500 transition hover:text-white lg:flex"
          >
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <SectionTitle
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
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.04]"
                >
                  <item.icon className="mb-5 text-violet-400" size={27} />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
            <SectionTitle
              eyebrow="02 / Tech stack"
              title="Tools I work with."
              description="Teknologi yang saya pelajari dan gunakan untuk mengembangkan aplikasi web."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#10111b]/70 p-5 transition hover:border-blue-400/30"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-violet-300">
                    {index % 2 === 0 ? <Code2 size={22} /> : <Terminal size={22} />}
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{skill.name}</h3>
                    <p className="mt-1 text-xs text-violet-300">{skill.category}</p>
                    <p className="mt-2 text-sm text-zinc-500">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28">
            <SectionTitle
              eyebrow="03 / Selected work"
              title="Projects I've explored."
              description="Contoh proyek akademik dan latihan. Sesuaikan deskripsi serta tautan berdasarkan proyek asli yang pernah kamu kerjakan."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-[#10111b]/70 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
                >
                  <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.13),transparent_65%)]" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-black/20 shadow-2xl backdrop-blur">
                      <project.icon size={35} className="text-violet-200" />
                    </div>
                    <span className="absolute left-5 top-5 font-mono text-sm text-zinc-400">
                      /{project.number}
                    </span>
                    <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300">
                      {project.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-7 text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-400">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4 border-t border-white/[0.08] pt-5 text-sm">
                      {project.repo ? (
                        <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 hover:text-white">
                          <Github size={16} /> Source Code
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-zinc-600">
                          <Github size={16} /> Repository belum diisi
                        </span>
                      )}

                      {project.demo ? (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 text-violet-300 hover:text-violet-200">
                          Live Demo <ExternalLink size={15} />
                        </a>
                      ) : (
                        <span className="ml-auto text-xs text-zinc-600">Demo belum diisi</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 lg:py-28">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              04 / Contact
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              Have an idea?
              <span className="mt-2 block bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Let's build it.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl leading-8 text-zinc-400">
              Terbuka untuk berdiskusi, belajar bersama, dan berkolaborasi dalam proyek menarik.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-violet-200"
            >
              <Mail size={19} /> Say Hello <ArrowUpRight size={18} />
            </a>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white">
                <Github size={17} /> GitHub
              </a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white">
                <Instagram size={17} /> Instagram
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-violet-400/40 hover:text-white">
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-7 text-center text-xs text-zinc-500 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {profile.nickname}. Built with React & Tailwind CSS.</p>
          <a href="#home" className="transition hover:text-violet-300">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
