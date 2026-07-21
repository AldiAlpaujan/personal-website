import 'server-only';
import { Timestamp } from 'firebase-admin/firestore';

export function tsToDate(value: Timestamp | null | undefined): Date | null {
  return value ? value.toDate() : null;
}

export function dateToTs(value: Date | null | undefined): Timestamp | null {
  return value ? Timestamp.fromDate(value) : null;
}
