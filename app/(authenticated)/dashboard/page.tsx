import { ButtonLink } from '@/components/blocks/button-link';
import { ProjectGrid } from '@/components/containers/project-grid';
import { PlusIcon } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6 pt-0 flex flex-col">
      <ButtonLink href="/new" size="lg" className="flex gap-2 items-center justify-center self-end mb-6">
        <span>Add Project</span>
        <PlusIcon />
      </ButtonLink>
      <ProjectGrid />
    </div>
  );
}
