export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  icon: 'math' | 'story' | 'animation' | 'lineup' | 'battle'
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
    name: 'Fable Forge',
    tagline: 'Interactive Fiction',
    description:
      'An AI dungeon master that weaves epic tales chapter by chapter. Every choice shapes the narrative — with combat, loot, and consequences that adapt to each young adventurer.',
    url: 'https://fableforge.fun',
    icon: 'story',
  },
  {
    id: 'stopmotion',
    name: 'Stop Magic',
    tagline: 'Animation Studio',
    description:
      'Turn everyday toys into animated films, frame by frame. AI-powered hand removal and an intuitive creator make stop motion accessible to anyone with a phone and an imagination.',
    url: 'https://stopmagic.fun',
    icon: 'animation',
  },
  {
    id: 'setlineup',
    name: 'Set Lineup',
    tagline: 'Coaching Tool',
    description:
      'A lineup builder for little league coaches that juggles player preferences, position rotations, and fair play — so every kid gets their shot and game day runs smooth.',
    url: 'https://setlineup.fun',
    icon: 'lineup',
  },
  {
    id: 'whowouldwin',
    name: 'Who Would Win?',
    tagline: 'Epic Battles',
    description:
      'Epic battles as big as your imagination. Pick any topic, get 16 AI-generated characters, and watch them clash in an illustrated tournament bracket — complete with stats, battle narratives, and a champion crowned at the end.',
    url: 'https://whowouldwin.fun',
    icon: 'battle',
  },
]
