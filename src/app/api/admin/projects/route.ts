import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/firebase/auth-server';
import { createProject, getProjects } from '@/lib/firebase/repositories/projects';
import { projectInputSchema } from '@/lib/firebase/repositories/schemas';

export async function GET() {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.json({ data: await getProjects() }, { status: 200 });
  } catch (error) {
    console.error('GET projects error:', error);
    return NextResponse.json({ error: 'Failed to load projects' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const parsed = projectInputSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json({ data: await createProject(parsed.data) }, { status: 201 });
  } catch (error) {
    console.error('POST project error:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
