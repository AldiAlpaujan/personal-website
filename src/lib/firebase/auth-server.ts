import 'server-only';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { DecodedIdToken } from 'firebase-admin/auth';
import { adminAuth } from '@/lib/firebase/admin';

export const SESSION_COOKIE = '__session';
export const SESSION_EXPIRES_IN_MS = 1000 * 60 * 60 * 24 * 5; // 5 days

export async function getAdminSession(): Promise<DecodedIdToken | null> {
  const cookie = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!cookie) return null;

  try {
    const decoded = await adminAuth.verifySessionCookie(cookie, true);
    if (decoded.uid !== process.env.ADMIN_UID) return null;
    return decoded;
  } catch {
    return null;
  }
}

/** For Server Components: redirects to the login page when not authenticated. */
export async function requireAdminSession(): Promise<DecodedIdToken> {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  return session;
}
