import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/firebase/auth-server';
import { deleteCareer, getCareerById, updateCareer } from '@/lib/firebase/repositories/careers';
import { careerInputSchema } from '@/lib/firebase/repositories/schemas';

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const career = await getCareerById(id);
    if (!career) {
      return NextResponse.json({ error: 'Career not found' }, { status: 404 });
    }

    return NextResponse.json({ data: career }, { status: 200 });
  } catch (error) {
    console.error('GET career error:', error);
    return NextResponse.json({ error: 'Failed to load career' }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const parsed = careerInputSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const { id } = await params;
    return NextResponse.json({ data: await updateCareer(id, parsed.data) }, { status: 200 });
  } catch (error) {
    console.error('PATCH career error:', error);
    return NextResponse.json({ error: 'Failed to update career' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await deleteCareer(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('DELETE career error:', error);
    return NextResponse.json({ error: 'Failed to delete career' }, { status: 500 });
  }
}
