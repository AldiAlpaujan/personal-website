import { config } from 'dotenv';
import { FieldValue } from 'firebase-admin/firestore';

// Load env BEFORE importing anything that reads process.env at module-init time
// (admin.ts calls cert() on import, so it must run after this).
config({ path: '.env.local' });

async function seed() {
  const { adminDb } = await import('../src/lib/firebase/admin');
  const { careers, educations, projects } = await import('../src/lib/shadcn/variable');

  const batch = adminDb.batch();

  projects.forEach((project, index) => {
    const ref = adminDb.collection('projects').doc();
    batch.set(ref, {
      ...project,
      link: project.link || null,
      hidden: project.hidden ?? false,
      order: index,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  });

  careers.forEach((career, index) => {
    const ref = adminDb.collection('careers').doc();
    // The "Self Employed" entry (index 0) uses `endDate: new Date()` in variable.ts
    // as a "currently working here" placeholder — map it to a real null endDate.
    const isCurrent = index === 0;
    batch.set(ref, {
      ...career,
      link: career.link || null,
      endDate: isCurrent ? null : career.endDate,
      order: index,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  });

  educations.forEach((education, index) => {
    const ref = adminDb.collection('educations').doc();
    batch.set(ref, {
      ...education,
      link: education.link || null,
      order: index,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });
  });

  await batch.commit();
  console.log(
    `Seeded ${projects.length} projects, ${careers.length} careers, ${educations.length} educations.`
  );
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
