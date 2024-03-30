// experience.model.ts
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  skills: string[][];
  githubUrl?: string;
  liveUrl?: string; // Optional property since not all projects may have a live URL
}
