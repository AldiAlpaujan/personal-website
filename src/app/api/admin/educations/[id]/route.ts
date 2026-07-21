import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/firebase/auth-server';
import {
  deleteEducation,
  getEducationById,
  updateEducation,
} from '@/lib/firebase/repositories/educations';
import { educationInputSchema } from '@/lib/firebase/repositories/schemas';

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const education = await getEducationById(id);
    if (!education) {
      return NextResponse.json({ error: 'Education not found' }, { status: 404 });
    }

    return NextResponse.json({ data: education }, { status: 200 });
  } catch (error) {
    console.error('GET education error:', error);
    return NextResponse.json({ error: 'Failed to load education' }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const parsed = educationInputSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { id } = await params;
    return NextResponse.json({ data: await updateEducation(id, parsed.data) }, { status: 200 });
  } catch (error) {
    console.error('PATCH education error:', error);
    return NextResponse.json({ error: 'Failed to update education' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await deleteEducation(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('DELETE education error:', error);
    return NextResponse.json({ error: 'Failed to delete education' }, { status: 500 });
  }
}
