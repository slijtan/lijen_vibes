import type { Project } from '../data/projects'
import ProjectThumbnail from './ProjectThumbnail'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {/* Thumbnail */}
      <div className="bg-[#f7f7f7] rounded-xl aspect-[4/3] flex items-center justify-center p-10 mb-5 overflow-hidden transition-colors duration-300 group-hover:bg-[#f0f0f0]">
        <ProjectThumbnail project={project} />
      </div>

      {/* Label */}
      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-neutral-400 mb-2">
        {project.tagline}
      </p>

      {/* Title */}
      <h2 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">
        {project.name}
      </h2>

      {/* Description */}
      <p className="text-[15px] text-neutral-400 leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Link */}
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-900 transition-all duration-200 group-hover:gap-2.5">
        View Project
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m0 0l-6-6m6 6l-6 6" />
        </svg>
      </span>
    </a>
  )
}
