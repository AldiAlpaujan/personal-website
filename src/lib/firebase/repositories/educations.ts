import 'server-only';
import { DocumentSnapshot, FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { dateToTs, tsToDate } from '@/lib/firebase/converters';
import { Education, EducationInput } from '@/types/education';

const educationsCollection = () => adminDb.collection('educations');

function toEducation(doc: DocumentSnapshot): Education {
  const data = doc.data()!;
  return {
    id: doc.id,
    image: data.image,
    univ: data.univ,
    major: data.major,
    link: data.link,
    location: data.location,
    countryCode: data.countryCode,
    endDate: tsToDate(data.endDate) ?? new Date(0),
    order: data.order ?? 0,
    createdAt: data.createdAt?.toDate() ?? new Date(0),
    updatedAt: data.updatedAt?.toDate() ?? new Date(0),
  };
}

export async function getEducations(): Promise<Education[]> {
  const snapshot = await educationsCollection().orderBy('order', 'asc').get();
  return snapshot.docs.map(toEducation);
}

export async function getEducationById(id: string): Promise<Education | null> {
  const doc = await educationsCollection().doc(id).get();
  return doc.exists ? toEducation(doc) : null;
}

export async function createEducation(data: EducationInput): Promise<Education> {
  const ref = await educationsCollection().add({
    ...data,
    endDate: dateToTs(data.endDate),
    order: data.order ?? Date.now(),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
  return (await getEducationById(ref.id))!;
}

export async function updateEducation(id: string, data: EducationInput): Promise<Education> {
  await educationsCollection()
    .doc(id)
    .update({
      ...data,
      endDate: dateToTs(data.endDate),
      updatedAt: FieldValue.serverTimestamp(),
    });
  return (await getEducationById(id))!;
}

export async function deleteEducation(id: string): Promise<void> {
  await educationsCollection().doc(id).delete();
}
