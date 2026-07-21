export interface EducationInput {
  image: string;
  univ: string;
  major: string;
  link: string;
  location: string;
  countryCode: string;
  endDate: Date;
  order?: number;
}

export interface Education extends EducationInput {
  id: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
