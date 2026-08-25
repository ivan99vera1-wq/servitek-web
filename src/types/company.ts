export interface CompanyContact {
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: string;
}

export interface CompanySocial {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface CompanyValue {
  title: string;
  description: string;
}

export interface Company {
  name: string;
  legalName: string;
  slogan: string;
  description: string;
  ruc: string;
  mission: string;
  vision: string;
  values: CompanyValue[];
  contact: CompanyContact;
  social: CompanySocial;
}
