import Image from 'next/image';
import { getProjects } from '@/lib/firebase/repositories/projects';
import { Badge } from '@/lib/shadcn/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/shadcn/ui/table';
import { techIcons } from '@/lib/shadcn/variable';
import AdminShell from '../components/AdminShell';
import NewProjectButton from './components/NewProjectButton';
import ProjectRowActions from './components/ProjectRowActions';

export default async function AdminProjects() {
  const projects = await getProjects();

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <NewProjectButton />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Tech</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.title}</TableCell>
              <TableCell>
                <div className="flex gap-1">
                  {project.techUsed.map((tech) => {
                    const icon = techIcons.find((item) => item.name === tech);
                    if (!icon) return null;
                    return (
                      <Image
                        key={tech}
                        src={icon.icon}
                        alt={tech}
                        width={18}
                        height={18}
                        className="size-4"
                      />
                    );
                  })}
                </div>
              </TableCell>
              <TableCell>
                {project.hidden ? (
                  <Badge variant="secondary">Hidden</Badge>
                ) : (
                  <Badge>Visible</Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                <ProjectRowActions project={project} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AdminShell>
  );
}
