import { projects } from './data/projects'
import ArrowIcon from './components/ArrowIcon'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="max-w-[1080px] mx-auto px-10 pt-20 pb-16">
        <p
          className="text-[32px] md:text-[48px] font-bold tracking-[-0.04em] leading-[1.1] mb-1 bg-clip-text text-transparent w-fit"
          style={{ backgroundImage: 'linear-gradient(to right, #e63946, #f4845f, #f7b267, #f7d794, #43b89c, #2ec4b6, #0b9a8d)' }}
        >
          Lijen Vibes.
        </p>
        <h1 className="text-[32px] md:text-[48px] font-bold text-[#111] tracking-[-0.04em] leading-[1.1] mb-5">
          Apps built from vibes.
        </h1>
        <p className="text-[17px] text-[#999] leading-[1.7] max-w-[440px]">
          Fun projects that make learning an adventure — built for
          kids who'd rather play than study.
        </p>
      </div>

      {/* Projects grid */}
      <div className="max-w-[1080px] mx-auto px-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#e8e8e8] overflow-hidden hover:border-[#ddd] hover:shadow-[0_12px_48px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="bg-[#f7f7f7] group-hover:bg-[#f3f3f3] transition-colors duration-300 overflow-hidden h-[260px]">
                {({ math: '/blockmath-thumb.png', story: '/fableforge-thumb.png', animation: '/stopmagic-thumb.png', lineup: '/setlineup-thumb.svg' } as Record<string, string>)[project.icon] ? (
                  <img
                    src={({ math: '/blockmath-thumb.png', story: '/fableforge-thumb.png', animation: '/stopmagic-thumb.png', lineup: '/setlineup-thumb.svg' } as Record<string, string>)[project.icon]}
                    alt={project.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <span className="text-[#ccc] text-[14px] font-medium">Coming soon</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="bg-white px-7 pt-6 pb-7">
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#b0b0b0] mb-2.5">
                  {project.tagline}
                </p>
                <h2 className="text-[19px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
                  {project.name}
                </h2>
                <p className="text-[13.5px] text-[#999] leading-[1.7] mb-5">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#111] group-hover:gap-2.5 transition-all duration-200">
                  Launch App <ArrowIcon />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1080px] mx-auto px-10">
        <footer className="py-8 border-t border-[#f0f0f0] flex items-center justify-between">
          <span className="text-[12px] text-[#ccc]">&copy; 2025 Lijen Vibes</span>
          <span className="text-[12px] text-[#ccc]">Built with AI</span>
        </footer>
      </div>
    </div>
  )
}

export default App
