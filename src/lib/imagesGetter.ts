import { readdirSync } from "fs";

export const getProjectImages = (projectId: number): string[] => {
  const images: string[] = [];
  try {
    const files = readdirSync(`./public/images/projects/${projectId}`);
    console.log(
      `Found ${files.length} files for project ${projectId}: ${files.join("|")}`,
    );
  } catch {
    return images;
  }

  return images;
};
