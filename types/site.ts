export interface ThemeConfig {
  primary: string;
  primaryDark: string;
  font: string;
  logoText: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  cta: string;
}

export interface TrustSignal {
  label: string;
  value: string;
}

export interface Service {
  id: string;
  name: string;
  priceLKR: number;
  duration: string;
}

export interface Doctor {
  name: string;
  qualification: string;
  photo?: string;
}

export interface ContactConfig {
  address: string;
  hours: string;
  mapEmbedUrl: string;
}

export interface WhatsAppConfig {
  number: string;
  defaultMessage: string;
  ariaLabel: string;
}

export interface ClinicLabels {
  servicesTitle: string;
  bookingTitle: string;
  nameLabel: string;
  phoneLabel: string;
  serviceLabel: string;
  servicePlaceholder: string;
  dateLabel: string;
  timeLabel: string;
  submitLabel: string;
  confirmationTitle: string;
  confirmationReference: string;
  confirmationMessage: string;
}

export interface ClinicConfig {
  id: "clinic";
  siteName: string;
  tagline: string;
  theme: ThemeConfig;
  hero: HeroConfig;
  trustSignals: TrustSignal[];
  services: Service[];
  doctors: Doctor[];
  contact: ContactConfig;
  whatsapp: WhatsAppConfig;
  labels: ClinicLabels;
  bookingReferencePrefix: string;
}
