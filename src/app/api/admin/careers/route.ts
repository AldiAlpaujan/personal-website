import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/firebase/auth-server';
import { createCareer, getCareers } from '@/lib/firebase/repositories/careers';
import { careerInputSchema } from '@/lib/firebase/repositories/schemas';

export async function GET() {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ data: await getCareers() }, { status: 200 });
  } catch (error) {
    console.error('GET careers error:', error);
    return NextResponse.json({ error: 'Failed to load careers' }, { status: 500 });
  }
}

export async function POST(req: Request) {
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

    return NextResponse.json({ data: await createCareer(parsed.data) }, { status: 201 });
  } catch (error) {
    console.error('POST career error:', error);
    return NextResponse.json({ error: 'Failed to create career' }, { status: 500 });
  }
}
