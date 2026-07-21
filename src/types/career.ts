export interface CareerInput {
  image: string;
  title: string;
  linkTitle: string;
  link: string;
  company: string;
  location: string;
  countryCode: string;
  startDate: Date;
  endDate: Date | null;
  workingType: string;
  workingSchema: 'Onsite' | 'hybrid' | 'Remote';
  responsibilities: string[];
  order?: number;
}

export interface Career extends CareerInput {
  id: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
