export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Principle {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface PhotoGallery {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export interface ApplicationForm {
  name: string;
  email: string;
  phone: string;
  familySize: number;
  numberOfChildren: number;
  childrenAges?: string;
  voluntaryismUnderstanding: string;
  healthyLivingPractices: string;
  selfSustainabilityExperience: string;
  whyJoin: string;
  additionalInfo?: string;
}
