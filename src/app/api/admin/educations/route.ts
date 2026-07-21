import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/firebase/auth-server';
import { createEducation, getEducations } from '@/lib/firebase/repositories/educations';
import { educationInputSchema } from '@/lib/firebase/repositories/schemas';

export async function GET() {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ data: await getEducations() }, { status: 200 });
  } catch (error) {
    console.error('GET educations error:', error);
    return NextResponse.json({ error: 'Failed to load educations' }, { status: 500 });
  }
}

export async function POST(req: Request) {
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

    return NextResponse.json({ data: await createEducation(parsed.data) }, { status: 201 });
  } catch (error) {
    console.error('POST education error:', error);
    return NextResponse.json({ error: 'Failed to create education' }, { status: 500 });
  }
}
