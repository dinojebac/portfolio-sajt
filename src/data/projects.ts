export type Project = {
  slug: string;
  index: string;
  title: string;
  client: string;
  type: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  built: string[];
  result: string;
  media:
    | { kind: "mock"; tone: "warm" | "cool" | "neutral" }
    | { kind: "image"; src: string; alt: string }
    | { kind: "video"; src: string; poster: string };
  link?: string;
};

export const projects: Project[] = [];
