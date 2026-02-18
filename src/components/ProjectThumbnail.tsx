import type { Project } from '../data/projects'

function MathIcon() {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Floating blocks */}
      <rect x="20" y="15" width="48" height="48" rx="12" fill="#e5e5e5" />
      <text x="44" y="47" textAnchor="middle" fill="#a3a3a3" fontSize="24" fontWeight="700" fontFamily="'Inter', sans-serif">3</text>

      <rect x="76" y="8" width="48" height="48" rx="12" fill="#d4d4d4" />
      <text x="100" y="40" textAnchor="middle" fill="#737373" fontSize="24" fontWeight="700" fontFamily="'Inter', sans-serif">7</text>

      <rect x="132" y="18" width="48" height="48" rx="12" fill="#e5e5e5" />
      <text x="156" y="50" textAnchor="middle" fill="#a3a3a3" fontSize="24" fontWeight="700" fontFamily="'Inter', sans-serif">9</text>

      {/* Bottom row */}
      <rect x="36" y="78" width="56" height="56" rx="14" fill="#262626" />
      <text x="64" y="114" textAnchor="middle" fill="white" fontSize="22" fontWeight="700" fontFamily="'Inter', sans-serif">42</text>

      <rect x="108" y="82" width="48" height="48" rx="12" fill="#d4d4d4" />
      <text x="132" y="113" textAnchor="middle" fill="#737373" fontSize="20" fontWeight="700" fontFamily="'Inter', sans-serif">&times;</text>
    </svg>
  )
}

function StoryIcon() {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Stacked pages behind */}
      <rect x="38" y="12" width="124" height="120" rx="8" fill="#ebebeb" />
      <rect x="32" y="18" width="136" height="120" rx="8" fill="#f0f0f0" />

      {/* Main card */}
      <rect x="26" y="24" width="148" height="120" rx="8" fill="white" stroke="#e5e5e5" strokeWidth="1" />

      {/* Title area */}
      <rect x="42" y="40" width="72" height="5" rx="2.5" fill="#d4d4d4" />
      <rect x="42" y="52" width="52" height="4" rx="2" fill="#e5e5e5" />

      {/* Paragraph lines */}
      <rect x="42" y="70" width="116" height="3" rx="1.5" fill="#ebebeb" />
      <rect x="42" y="80" width="100" height="3" rx="1.5" fill="#ebebeb" />
      <rect x="42" y="90" width="110" height="3" rx="1.5" fill="#ebebeb" />

      {/* Choice buttons */}
      <rect x="42" y="110" width="52" height="22" rx="6" fill="#262626" />
      <text x="68" y="125" textAnchor="middle" fill="white" fontSize="9" fontWeight="600" fontFamily="'Inter', sans-serif">Fight</text>

      <rect x="102" y="110" width="52" height="22" rx="6" fill="#f0f0f0" />
      <text x="128" y="125" textAnchor="middle" fill="#737373" fontSize="9" fontWeight="600" fontFamily="'Inter', sans-serif">Flee</text>
    </svg>
  )
}

function AnimationIcon() {
  return (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Timeline */}
      <rect x="20" y="130" width="160" height="3" rx="1.5" fill="#e5e5e5" />
      <rect x="20" y="130" width="120" height="3" rx="1.5" fill="#262626" />
      <circle cx="140" cy="131.5" r="6" fill="#262626" />

      {/* Frame 1 - ghost/faded */}
      <g opacity="0.3">
        <circle cx="50" cy="50" r="14" fill="#c4c4c4" />
        <rect x="40" y="66" width="20" height="30" rx="8" fill="#c4c4c4" />
        <rect x="36" y="94" width="10" height="18" rx="5" fill="#c4c4c4" transform="rotate(8 41 103)" />
        <rect x="54" y="94" width="10" height="18" rx="5" fill="#c4c4c4" transform="rotate(-8 59 103)" />
      </g>

      {/* Frame 2 - mid */}
      <g opacity="0.55">
        <circle cx="100" cy="44" r="14" fill="#a3a3a3" />
        <rect x="90" y="60" width="20" height="30" rx="8" fill="#a3a3a3" />
        <rect x="84" y="88" width="10" height="18" rx="5" fill="#a3a3a3" transform="rotate(-12 89 97)" />
        <rect x="106" y="88" width="10" height="18" rx="5" fill="#a3a3a3" transform="rotate(12 111 97)" />
      </g>

      {/* Frame 3 - active/jumping */}
      <g>
        <circle cx="150" cy="34" r="16" fill="#262626" />
        <rect x="139" y="52" width="22" height="32" rx="9" fill="#262626" />
        {/* Arms out */}
        <rect x="122" y="58" width="16" height="8" rx="4" fill="#262626" />
        <rect x="162" y="58" width="16" height="8" rx="4" fill="#262626" />
        {/* Legs spread */}
        <rect x="133" y="82" width="10" height="22" rx="5" fill="#262626" transform="rotate(-18 138 93)" />
        <rect x="157" y="82" width="10" height="22" rx="5" fill="#262626" transform="rotate(18 162 93)" />
      </g>

      {/* Motion arcs */}
      <path d="M70 55 Q85 30 100 44" stroke="#d4d4d4" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
      <path d="M120 44 Q135 20 150 34" stroke="#d4d4d4" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
    </svg>
  )
}

export default function ProjectThumbnail({ project }: { project: Project }) {
  switch (project.icon) {
    case 'math':
      return <MathIcon />
    case 'story':
      return <StoryIcon />
    case 'animation':
      return <AnimationIcon />
  }
}
