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
  image: string;
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
  specialty: string;
  bio: string;
  photo: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface BeforeAfterConfig {
  beforeImage: string;
  afterImage: string;
  disclaimer: string;
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

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ShellLabels {
  themeToggleLabel: string;
  menuLabel: string;
  closeMenuLabel: string;
  footerHeading: string;
  footerDescription: string;
  addressLabel: string;
  hoursLabel: string;
  copyright: string;
}

export interface SiteShellConfig {
  siteName: string;
  theme: ThemeConfig;
  contact: ContactConfig;
  navigation: NavigationItem[];
  labels: ShellLabels;
}

export interface ClinicLabels extends ShellLabels {
  servicesTitle: string;
  bookingTitle: string;
  nameLabel: string;
  phoneLabel: string;
  serviceLabel: string;
  servicePlaceholder: string;
  doctorLabel: string;
  doctorPlaceholder: string;
  dateLabel: string;
  timeLabel: string;
  submitLabel: string;
  confirmationTitle: string;
  confirmationReference: string;
  confirmationMessage: string;
  doctorsEyebrow: string;
  doctorsTitle: string;
  doctorsDescription: string;
  contactEyebrow: string;
  contactTitle: string;
  mapTitle: string;
  contactWhatsAppLabel: string;
  galleryEyebrow: string;
  galleryTitle: string;
  comparisonBeforeLabel: string;
  comparisonAfterLabel: string;
  comparisonControlLabel: string;
  printConfirmationLabel: string;
  confirmationWhatsAppLabel: string;
  bookingDetailsTitle: string;
  requestedDateLabel: string;
  requestedTimeLabel: string;
  confirmationWhatsAppMessage: string;
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
  gallery: GalleryImage[];
  beforeAfter: BeforeAfterConfig;
  contact: ContactConfig;
  whatsapp: WhatsAppConfig;
  navigation: NavigationItem[];
  labels: ClinicLabels;
  bookingReferencePrefix: string;
}

export interface HotelRoom {
  id: string;
  name: string;
  description: string;
  guests: string;
  rateLKR: number;
  amenities: string[];
  image: string;
}

export interface Attraction {
  name: string;
  distance: string;
  description: string;
}

export interface HotelLabels extends ShellLabels {
  roomsEyebrow: string;
  roomsTitle: string;
  roomsRateSuffix: string;
  availabilityTitle: string;
  checkInLabel: string;
  checkOutLabel: string;
  guestsLabel: string;
  roomLabel: string;
  roomPlaceholder: string;
  enquiryNameLabel: string;
  enquiryPhoneLabel: string;
  enquirySubmitLabel: string;
  directBookingMessage: string;
  attractionsEyebrow: string;
  attractionsTitle: string;
  confirmationTitle: string;
  confirmationReference: string;
  confirmationWhatsAppLabel: string;
  printVoucherLabel: string;
  currencyLabel: string;
  indicativeRateLabel: string;
}

export interface HotelConfig extends SiteShellConfig {
  id: "hotel";
  tagline: string;
  hero: HeroConfig;
  rooms: HotelRoom[];
  attractions: Attraction[];
  exchangeRates: Record<"LKR" | "USD" | "EUR" | "GBP", number>;
  whatsapp: WhatsAppConfig;
  labels: HotelLabels;
  bookingReferencePrefix: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  priceLKR: number;
  category: string;
  tags: string[];
}

export interface CateringPackage {
  name: string;
  description: string;
  pricePerHeadLKR: number;
  minimumGuests: number;
}

export interface RestaurantLabels extends ShellLabels {
  menuEyebrow: string;
  menuTitle: string;
  menuAllLabel: string;
  orderTitle: string;
  orderEmptyLabel: string;
  orderTotalLabel: string;
  orderWhatsAppLabel: string;
  cateringEyebrow: string;
  cateringTitle: string;
  perHeadLabel: string;
  minimumGuestsLabel: string;
  reservationTitle: string;
  reservationNameLabel: string;
  reservationPhoneLabel: string;
  reservationDateLabel: string;
  reservationTimeLabel: string;
  reservationPartyLabel: string;
  reservationSubmitLabel: string;
  reservationConfirmationTitle: string;
  reservationConfirmationReference: string;
}

export interface RestaurantConfig extends SiteShellConfig {
  id: "restaurant";
  tagline: string;
  hero: HeroConfig;
  menu: MenuItem[];
  catering: CateringPackage[];
  whatsapp: WhatsAppConfig;
  labels: RestaurantLabels;
  reservationReferencePrefix: string;
}
