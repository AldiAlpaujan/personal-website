import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export function formatDate(val: string | null | undefined, pattern: string): string | null {
  if (!val) {
    return null;
  }

  const date = dayjs(val);
  if (!date.isValid()) {
    return null;
  }

  return date.locale('id').format(pattern);
}

export function getDurationLabel(start: Date, end: Date) {
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();

  let totalMonths = years * 12 + months;

  // Kalau tanggal akhir belum melewati tanggal mulai, kurangi 1 bulan
  if (end.getDate() < start.getDate()) {
    totalMonths -= 1;
  }

  // 🔸 Auto bulatkan ke 1 tahun kalau sudah >= 11 bulan
  if (totalMonths >= 11 && totalMonths < 12) {
    return '1 tahun';
  }

  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;

  if (totalMonths < 12) {
    return `${totalMonths} Month`;
  } else {
    if (m === 0) {
      return `${y} Year`;
    } else {
      return `${y} Year ${m} Month`;
    }
  }
}

export const numeric = (val: unknown): string | null | undefined => {
  if (val === null) return val;
  if (val === undefined) return val;
  if (val === '') return val;

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(val));
};

export function formatNumber(val: number | string | null | undefined): string | null {
  const number = Number(val);
  if (isNaN(Number(number))) {
    return null;
  }

  return Intl.NumberFormat('id-ID').format(number);
}

export function formatCurrency(val: number | string | null | undefined): string | null {
  const number = Number(val);
  if (isNaN(Number(number))) {
    return null;
  }

  // NOTE: Saat ini aplikasi di-set non currency
  return `${Intl.NumberFormat('id-ID').format(number)}`;
}

export function formatProcessingTime(pt: number) {
  if (pt < 1000) {
    // Jika di bawah 1 detik
    return `${pt} ms`;
  } else if (pt < 60 * 1000) {
    // Jika di bawah 1 menit
    const seconds = Math.floor(pt / 1000);
    return `${seconds} s`;
  } else if (pt < 60 * 60 * 1000) {
    // Jika di bawah 1 jam
    const minutes = Math.floor(pt / (60 * 1000));
    return `${minutes} m`;
  }
  // Selanjutnya gunakan format HH:mm:ss.SSS
  const formatted = dayjs.duration(pt).format('HH:mm:ss.SSS');
  return formatted;
}
