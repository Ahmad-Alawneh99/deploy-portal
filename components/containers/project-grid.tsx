import { ProjectCard } from '../blocks/project-card';

export const ProjectGrid = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      { Array(10).fill(3).map((_, i) => <ProjectCard key={i} />) }
    </div>
  );
};
