import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase/admin';
import { SESSION_COOKIE, SESSION_EXPIRES_IN_MS } from '@/lib/firebase/auth-server';

export async function POST(req: Request) {
  try {
    const { idToken }: { idToken: string } = await req.json();
    if (!idToken) {
      return NextResponse.json({ error: 'Missing idToken' }, { status: 400 });
    }

    const decoded = await adminAuth.verifyIdToken(idToken, true);
    if (decoded.uid !== process.env.ADMIN_UID) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn: SESSION_EXPIRES_IN_MS,
    });

    (await cookies()).set(SESSION_COOKIE, sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: SESSION_EXPIRES_IN_MS / 1000,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Session create error:', error);
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
}

export async function DELETE() {
  const store = await cookies();
  const sessionCookie = store.get(SESSION_COOKIE)?.value;

  if (sessionCookie) {
    try {
      const decoded = await adminAuth.verifySessionCookie(sessionCookie);
      await adminAuth.revokeRefreshTokens(decoded.sub);
    } catch (error) {
      console.error('Session revoke error:', error);
    }
  }

  store.delete(SESSION_COOKIE);
  return NextResponse.json({ success: true }, { status: 200 });
}
