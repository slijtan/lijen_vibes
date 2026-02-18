export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  icon: 'math' | 'story' | 'animation'
}

export const projects: Project[] = [
  {
    id: 'blockmath',
    name: 'Block Math',
    tagline: 'Gamified Learning',
    description:
      'A gamified math adventure where kids master multiplication through play. Earn XP, collect AI-generated characters, and level up — turning practice into a quest worth grinding.',
    url: 'https://blockmath.fun',
    icon: 'math',
  },
  {
    id: 'fableforge',
    name: 'FableForge',
    tagline: 'Interactive Fiction',
    description:
      'An AI dungeon master that weaves epic tales chapter by chapter. Every choice shapes the narrative — with combat, loot, and consequences that adapt to each young adventurer.',
    url: 'https://fableforge.fun',
    icon: 'story',
  },
  {
    id: 'stopmotion',
    name: 'Stop Motion Magic',
    tagline: 'Animation Studio',
    description:
      'Turn everyday toys into animated films, frame by frame. AI-powered hand removal and an intuitive creator make stop motion accessible to anyone with a phone and an imagination.',
    url: 'https://stopmagic.fun',
    icon: 'animation',
  },
]
