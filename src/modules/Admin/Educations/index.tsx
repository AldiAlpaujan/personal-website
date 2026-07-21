import dayjs from 'dayjs';
import { getEducations } from '@/lib/firebase/repositories/educations';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/shadcn/ui/table';
import AdminShell from '../components/AdminShell';
import EducationRowActions from './components/EducationRowActions';
import NewEducationButton from './components/NewEducationButton';

export default async function AdminEducations() {
  const educations = await getEducations();

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Educations</h1>
        <NewEducationButton />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>University</TableHead>
            <TableHead>Major</TableHead>
            <TableHead>End date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {educations.map((education) => (
            <TableRow key={education.id}>
              <TableCell className="font-medium">{education.univ}</TableCell>
              <TableCell>{education.major}</TableCell>
              <TableCell>{dayjs(education.endDate).format('MMM YYYY')}</TableCell>
              <TableCell className="text-right">
                <EducationRowActions education={education} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AdminShell>
  );
}
