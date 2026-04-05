export interface Dataset {
  id: string;
  name: string;
  description: string;
  tags: string[];
  difficulty: "standard" | "advanced";
  icon: string;
  imageSrc?: string;
  trainSize: number;
  testSize: number;
}
