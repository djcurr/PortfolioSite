// experience.model.ts
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[][];
  githubUrl?: string;
  liveUrl?: string; // Optional property since not all projects may have a live URL
}
