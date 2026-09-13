export interface Specialist {
  id: string;
  name: string;
  specialty: string;
  active?: boolean;
}

export interface TreatmentCategory {
  id: string;
  name: string;
  active?: boolean;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  rating: number;
  source: string;
  title: string;
  comment: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer?: string;
  isOpen?: boolean;
}
