import 'server-only';
import { DocumentSnapshot, FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { Project, ProjectInput } from '@/types/project';

const projectsCollection = () => adminDb.collection('projects');

function toProject(doc: DocumentSnapshot): Project {
  const data = doc.data()!;
  return {
    id: doc.id,
    image: data.image,
    title: data.title,
    description: data.description,
    techUsed: data.techUsed ?? [],
    link: data.link ?? null,
    hidden: data.hidden ?? false,
    order: data.order ?? 0,
    createdAt: data.createdAt?.toDate() ?? new Date(0),
    updatedAt: data.updatedAt?.toDate() ?? new Date(0),
  };
}

export async function getProjects(): Promise<Project[]> {
  const snapshot = await projectsCollection().orderBy('order', 'asc').get();
  return snapshot.docs.map(toProject);
}

export async function getVisibleProjects(): Promise<Project[]> {
  return (await getProjects()).filter((project) => !project.hidden);
}

export async function getProjectById(id: string): Promise<Project | null> {
  const doc = await projectsCollection().doc(id).get();
  return doc.exists ? toProject(doc) : null;
}

export async function createProject(data: ProjectInput): Promise<Project> {
  const ref = await projectsCollection().add({
    ...data,
    link: data.link ?? null,
    hidden: data.hidden ?? false,
    order: data.order ?? Date.now(),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
  return (await getProjectById(ref.id))!;
}

export async function updateProject(id: string, data: ProjectInput): Promise<Project> {
  await projectsCollection()
    .doc(id)
    .update({
      ...data,
      link: data.link ?? null,
      hidden: data.hidden ?? false,
      updatedAt: FieldValue.serverTimestamp(),
    });
  return (await getProjectById(id))!;
}

export async function deleteProject(id: string): Promise<void> {
  await projectsCollection().doc(id).delete();
}
