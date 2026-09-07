import type { RestaurantConfig } from "@/types/site";

export const restaurantConfig = {
  id: "restaurant",
  siteName: "Cinnamon & Lime",
  tagline: "Sri Lankan kitchen · Colombo 07",
  theme: { primary: "#A43320", primaryDark: "#702316", font: "'Noto Sans Sinhala', 'Noto Sans Tamil', Georgia, 'Times New Roman', serif", logoText: "Cinnamon & Lime", logoImage: "/images/logos/cinnamon-lime-logo.png" },
  hero: { title: "Sri Lankan food, with a little more fire.", subtitle: "Bold island flavours, seasonal produce and long evenings around the table.", cta: "Explore the menu", image: "/images/restaurant/hero.webp" },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Catering", href: "#catering" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reserve", href: "#reserve" },
    { label: "Contact", href: "#contact" },
  ],
  menu: [
    { id: "chicken-kottu", name: "Chicken kottu", description: "Hand-chopped roti, roasted chicken, leeks and our house curry blend.", priceLKR: 2400, category: "Mains", tags: ["Spicy"], image: "/images/restaurant/menu/chicken-kottu.png" },
    { id: "jackfruit-curry", name: "Young jackfruit curry", description: "Slow-cooked polos, coconut milk, roasted spices and red rice.", priceLKR: 1800, category: "Mains", tags: ["Vegan", "Gluten-free"], image: "/images/restaurant/menu/chicken-kottu.png" },
    { id: "prawn-curry", name: "Coastal prawn curry", description: "Market prawns in tamarind, coconut and black pepper.", priceLKR: 3200, category: "Mains", tags: ["Gluten-free", "Spicy"], image: "/images/restaurant/menu/chicken-kottu.png" },
    { id: "egg-hoppers", name: "Egg hoppers", description: "Three crisp hoppers with seeni sambol and lunu miris.", priceLKR: 1100, category: "Small plates", tags: ["Vegetarian"], image: "/images/restaurant/menu/egg-hoppers.png" },
    { id: "watalappan", name: "Watalappan", description: "Kithul treacle custard, roasted cashew and sea salt.", priceLKR: 850, category: "Dessert", tags: ["Vegetarian", "Gluten-free"], image: "/images/restaurant/menu/watalappan.png" },
    { id: "lime-juice", name: "Spiced lime soda", description: "Fresh lime, ginger, black salt and soda.", priceLKR: 650, category: "Drinks", tags: ["Vegan"], image: "/images/restaurant/menu/lime-soda.png" },
  ],
  dailySpecials: [
    { id: "market-curry", name: "Market curry lunch", description: "A changing trio of seasonal curries, red rice and sambols.", priceLKR: 1950 },
    { id: "hopper-evening", name: "Hopper evening", description: "Egg hoppers, dhal, seeni sambol and a fresh lime soda.", priceLKR: 1650 },
  ],
  gallery: [
    { src: "/images/restaurant/hero.webp", alt: "Sri Lankan dishes prepared at Cinnamon and Lime" },
    { src: "/images/restaurant/menu/chicken-kottu.png", alt: "Chicken kottu at Cinnamon and Lime" },
    { src: "/images/restaurant/menu/egg-hoppers.png", alt: "Egg hoppers at Cinnamon and Lime" },
    { src: "/images/restaurant/menu/watalappan.png", alt: "Watalappan dessert at Cinnamon and Lime" },
  ],
  instagramUrl: "https://www.instagram.com/",
  deliveryRadius: "Delivery across Colombo 03, 04, 05, 06, 07 and 08. Pre-order catering anywhere in Greater Colombo.",
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
    cateringEyebrow: "Bring the kitchen to you", cateringTitle: "Catering for gatherings worth remembering", perHeadLabel: "per person", minimumGuestsLabel: "minimum guests", quoteTitle: "Build a catering quote", quotePackageLabel: "Package", quoteGuestsLabel: "Guests", quoteEstimatedTotalLabel: "Estimated total", quotePrintLabel: "Print quote", quoteWhatsAppLabel: "Send quote on WhatsApp",
    reservationTitle: "Reserve your table", reservationNameLabel: "Full name", reservationPhoneLabel: "Phone number", reservationDateLabel: "Date", reservationTimeLabel: "Time", reservationTimePlaceholder: "Select an available time", reservationPartyLabel: "Party size", reservationSubmitLabel: "Request a table", reservationConfirmationTitle: "Table request received", reservationConfirmationReference: "Your reservation reference is {reference}.",
    galleryEyebrow: "From our kitchen", galleryTitle: "Bold flavour, served beautifully", socialEyebrow: "Follow the fire", socialTitle: "More from the Cinnamon & Lime table", socialDescription: "Seasonal dishes, kitchen stories and lively evenings from Colombo 07.", socialCtaLabel: "Follow on Instagram", specialsEyebrow: "Today at the table", specialsTitle: "Daily specials", deliveryLabel: "Delivery area", contactEyebrow: "Come hungry", contactTitle: "Find us in the heart of Colombo 07", mapTitle: "Map showing Cinnamon and Lime in Colombo 07", printMenuLabel: "Print menu", printReservationLabel: "Print reservation receipt",
  },
  reservationSlots: ["12:00", "13:00", "18:00", "19:00", "20:00", "21:00"],
  reservationReferencePrefix: "CLM",
} satisfies RestaurantConfig;
