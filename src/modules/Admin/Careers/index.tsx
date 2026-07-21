import dayjs from 'dayjs';
import { getCareers } from '@/lib/firebase/repositories/careers';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/shadcn/ui/table';
import AdminShell from '../components/AdminShell';
import CareerRowActions from './components/CareerRowActions';
import NewCareerButton from './components/NewCareerButton';

export default async function AdminCareers() {
  const careers = await getCareers();

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Careers</h1>
        <NewCareerButton />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Schema</TableHead>
            <TableHead>Period</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {careers.map((career) => (
            <TableRow key={career.id}>
              <TableCell className="font-medium">{career.title}</TableCell>
              <TableCell>{career.company}</TableCell>
              <TableCell>{career.workingSchema}</TableCell>
              <TableCell>
                {dayjs(career.startDate).format('MMM YYYY')} -{' '}
                {career.endDate ? dayjs(career.endDate).format('MMM YYYY') : 'Present'}
              </TableCell>
              <TableCell className="text-right">
                <CareerRowActions career={career} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AdminShell>
  );
}
