import type { RestaurantConfig } from "@/types/site";

export const restaurantConfig = {
  id: "restaurant",
  siteName: "Cinnamon & Lime",
  tagline: "Sri Lankan kitchen · Colombo 07",
  theme: { primary: "#A43320", primaryDark: "#702316", font: "'Noto Sans Sinhala', 'Noto Sans Tamil', Georgia, 'Times New Roman', serif", logoText: "Cinnamon & Lime" },
  hero: { title: "Sri Lankan food, with a little more fire.", subtitle: "Bold island flavours, seasonal produce and long evenings around the table.", cta: "Explore the menu", image: "/images/restaurant/hero.webp" },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Catering", href: "#catering" },
    { label: "Reserve", href: "#reserve" },
  ],
  menu: [
    { id: "chicken-kottu", name: "Chicken kottu", description: "Hand-chopped roti, roasted chicken, leeks and our house curry blend.", priceLKR: 2400, category: "Mains", tags: ["Spicy"] },
    { id: "jackfruit-curry", name: "Young jackfruit curry", description: "Slow-cooked polos, coconut milk, roasted spices and red rice.", priceLKR: 1800, category: "Mains", tags: ["Vegan", "Gluten-free"] },
    { id: "prawn-curry", name: "Coastal prawn curry", description: "Market prawns in tamarind, coconut and black pepper.", priceLKR: 3200, category: "Mains", tags: ["Gluten-free", "Spicy"] },
    { id: "egg-hoppers", name: "Egg hoppers", description: "Three crisp hoppers with seeni sambol and lunu miris.", priceLKR: 1100, category: "Small plates", tags: ["Vegetarian"] },
    { id: "watalappan", name: "Watalappan", description: "Kithul treacle custard, roasted cashew and sea salt.", priceLKR: 850, category: "Dessert", tags: ["Vegetarian", "Gluten-free"] },
    { id: "lime-juice", name: "Spiced lime soda", description: "Fresh lime, ginger, black salt and soda.", priceLKR: 650, category: "Drinks", tags: ["Vegan"] },
  ],
  catering: [
    { name: "Garden lunch", description: "Three curries, red rice, sambols, dessert and soft drinks.", pricePerHeadLKR: 3400, minimumGuests: 20 },
    { name: "Island feast", description: "A chef-led sharing menu with seafood, hoppers and live kottu.", pricePerHeadLKR: 5200, minimumGuests: 30 },
  ],
  contact: { address: "17 Rosmead Place, Colombo 07, Sri Lanka", hours: "Tuesday–Sunday, 12:00 PM–11:00 PM", mapEmbedUrl: "https://www.google.com/maps?q=Colombo%2007%2C%20Sri%20Lanka&output=embed" },
  whatsapp: { number: "94771234567", defaultMessage: "Hello, I would like to order from Cinnamon & Lime.", ariaLabel: "Start a WhatsApp chat with Cinnamon and Lime" },
  labels: {
    themeToggleLabel: "Switch color theme", menuLabel: "Open navigation menu", closeMenuLabel: "Close navigation menu",
    footerHeading: "Cinnamon & Lime", footerDescription: "A contemporary Sri Lankan kitchen in Colombo 07.", addressLabel: "Find us", hoursLabel: "Opening hours", copyright: "Cinnamon & Lime. Demo site.",
    menuEyebrow: "The menu", menuTitle: "Flavour with a point of view", menuAllLabel: "All", orderTitle: "Your order", orderEmptyLabel: "Add something delicious to begin.", orderTotalLabel: "Total", orderWhatsAppLabel: "Order via WhatsApp",
    cateringEyebrow: "Bring the kitchen to you", cateringTitle: "Catering for gatherings worth remembering", perHeadLabel: "per person", minimumGuestsLabel: "minimum guests",
    reservationTitle: "Reserve your table", reservationNameLabel: "Full name", reservationPhoneLabel: "Phone number", reservationDateLabel: "Date", reservationTimeLabel: "Time", reservationPartyLabel: "Party size", reservationSubmitLabel: "Request a table", reservationConfirmationTitle: "Table request received", reservationConfirmationReference: "Your reservation reference is {reference}.",
  },
  reservationReferencePrefix: "CLM",
} satisfies RestaurantConfig;
