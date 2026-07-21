import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/firebase/auth-server';
import { deleteProject, getProjectById, updateProject } from '@/lib/firebase/repositories/projects';
import { projectInputSchema } from '@/lib/firebase/repositories/schemas';

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const project = await getProjectById(id);
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ data: project }, { status: 200 });
  } catch (error) {
    console.error('GET project error:', error);
    return NextResponse.json({ error: 'Failed to load project' }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: Params) {
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

    const { id } = await params;
    return NextResponse.json({ data: await updateProject(id, parsed.data) }, { status: 200 });
  } catch (error) {
    console.error('PATCH project error:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: Params) {
  try {
    if (!(await getAdminSession())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    await deleteProject(id);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('DELETE project error:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
