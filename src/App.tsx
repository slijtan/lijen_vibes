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
          AI-powered experiments — designed, built, and shipped with
          nothing but an idea and a conversation.
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
              {/* Thumbnail — browser mockup */}
              <div className="bg-[#f7f7f7] px-7 pt-7 group-hover:bg-[#f3f3f3] transition-colors duration-300">
                <BrowserMockup icon={project.icon} />
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

function BrowserMockup({ icon }: { icon: string }) {
  return (
    <div className="bg-white rounded-t-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] overflow-hidden group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-300">
      {/* Browser chrome */}
      <div className="h-8 bg-[#fafafa] border-b border-[#eee] flex items-center px-3 gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#e0e0e0]" />
        <div className="flex-1 mx-4 h-4 bg-[#f0f0f0] rounded-md" />
      </div>
      {/* Content */}
      <div className="h-[200px] p-5 overflow-hidden">
        {icon === 'math' && <MathUI />}
        {icon === 'story' && <StoryUI />}
        {icon === 'animation' && <AnimationUI />}
      </div>
    </div>
  )
}

function MathUI() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      {/* Question */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] flex items-center justify-center text-[18px] font-bold text-[#888]">7</div>
        <span className="text-[#ccc] text-lg font-medium">&times;</span>
        <div className="w-12 h-12 rounded-lg bg-[#f5f5f5] flex items-center justify-center text-[18px] font-bold text-[#888]">8</div>
        <span className="text-[#ccc] text-lg font-medium">=</span>
        <div className="w-12 h-12 rounded-lg bg-[#111] flex items-center justify-center text-[16px] font-bold text-white">56</div>
      </div>
      {/* Answer grid */}
      <div className="flex gap-2">
        {[48, 54, 56, 63].map((n) => (
          <div
            key={n}
            className={`w-14 h-9 rounded-lg flex items-center justify-center text-[13px] font-semibold ${
              n === 56
                ? 'bg-[#111] text-white'
                : 'bg-[#f5f5f5] text-[#bbb]'
            }`}
          >
            {n}
          </div>
        ))}
      </div>
      {/* XP bar */}
      <div className="w-40 h-1.5 bg-[#f0f0f0] rounded-full mt-1">
        <div className="w-3/4 h-full bg-[#ddd] rounded-full" />
      </div>
    </div>
  )
}

function StoryUI() {
  return (
    <div className="flex flex-col h-full">
      {/* Chapter header */}
      <div className="mb-3">
        <div className="w-16 h-1.5 bg-[#e0e0e0] rounded-full mb-1.5" />
        <div className="w-24 h-2 bg-[#ddd] rounded-full" />
      </div>
      {/* Story text */}
      <div className="space-y-2 mb-auto">
        <div className="w-full h-[3px] bg-[#e5e5e5] rounded-full" />
        <div className="w-[90%] h-[3px] bg-[#e5e5e5] rounded-full" />
        <div className="w-[95%] h-[3px] bg-[#eaeaea] rounded-full" />
        <div className="w-[70%] h-[3px] bg-[#e5e5e5] rounded-full" />
        <div className="w-[85%] h-[3px] bg-[#eaeaea] rounded-full" />
        <div className="w-[60%] h-[3px] bg-[#e5e5e5] rounded-full" />
      </div>
      {/* Choice buttons */}
      <div className="flex gap-2 mt-3">
        <div className="flex-1 h-8 bg-[#111] rounded-lg flex items-center justify-center">
          <span className="text-[10px] font-semibold text-white tracking-wide">Enter the cave</span>
        </div>
        <div className="flex-1 h-8 bg-[#f0f0f0] rounded-lg flex items-center justify-center">
          <span className="text-[10px] font-semibold text-[#999] tracking-wide">Follow the river</span>
        </div>
      </div>
    </div>
  )
}

function AnimationUI() {
  return (
    <div className="flex flex-col h-full">
      {/* Preview area */}
      <div className="flex-1 bg-[#fafafa] rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
        <div className="w-14 h-14 bg-[#e8e8e8] rounded-xl" />
        <div className="absolute top-3 right-3 w-7 h-7 rounded-md bg-[#e0e0e0] flex items-center justify-center">
          <div className="w-3 h-3 rounded-full border-2 border-[#ccc]" />
        </div>
      </div>
      {/* Timeline */}
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`flex-1 h-9 rounded-md ${
              i === 3 ? 'bg-[#111]' : 'bg-[#ebebeb]'
            }`}
          />
        ))}
      </div>
      {/* Controls */}
      <div className="flex items-center justify-between mt-2">
        <div className="w-6 h-6 rounded-md bg-[#111] flex items-center justify-center">
          <div className="w-0 h-0 border-l-[4px] border-l-white border-y-[3px] border-y-transparent ml-0.5" />
        </div>
        <span className="text-[10px] font-mono text-[#bbb]">3 / 4</span>
      </div>
    </div>
  )
}

export default App
