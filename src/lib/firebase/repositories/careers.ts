import 'server-only';
import { DocumentSnapshot, FieldValue } from 'firebase-admin/firestore';
import { adminDb } from '@/lib/firebase/admin';
import { dateToTs, tsToDate } from '@/lib/firebase/converters';
import { Career, CareerInput } from '@/types/career';

const careersCollection = () => adminDb.collection('careers');

function toCareer(doc: DocumentSnapshot): Career {
  const data = doc.data()!;
  return {
    id: doc.id,
    image: data.image,
    title: data.title,
    linkTitle: data.linkTitle,
    link: data.link,
    company: data.company,
    location: data.location,
    countryCode: data.countryCode,
    startDate: tsToDate(data.startDate) ?? new Date(0),
    endDate: tsToDate(data.endDate),
    workingType: data.workingType,
    workingSchema: data.workingSchema,
    responsibilities: data.responsibilities ?? [],
    order: data.order ?? 0,
    createdAt: data.createdAt?.toDate() ?? new Date(0),
    updatedAt: data.updatedAt?.toDate() ?? new Date(0),
  };
}

export async function getCareers(): Promise<Career[]> {
  const snapshot = await careersCollection().orderBy('order', 'asc').get();
  return snapshot.docs.map(toCareer);
}

export async function getCareerById(id: string): Promise<Career | null> {
  const doc = await careersCollection().doc(id).get();
  return doc.exists ? toCareer(doc) : null;
}

export async function createCareer(data: CareerInput): Promise<Career> {
  const ref = await careersCollection().add({
    ...data,
    startDate: dateToTs(data.startDate),
    endDate: dateToTs(data.endDate),
    order: data.order ?? Date.now(),
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });
  return (await getCareerById(ref.id))!;
}

export async function updateCareer(id: string, data: CareerInput): Promise<Career> {
  await careersCollection()
    .doc(id)
    .update({
      ...data,
      startDate: dateToTs(data.startDate),
      endDate: dateToTs(data.endDate),
      updatedAt: FieldValue.serverTimestamp(),
    });
  return (await getCareerById(id))!;
}

export async function deleteCareer(id: string): Promise<void> {
  await careersCollection().doc(id).delete();
}
