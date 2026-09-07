export type Language = "en" | "si" | "ta";

export const languageNames: Record<Language, string> = {
  en: "English",
  si: "සිංහල",
  ta: "தமிழ்",
};

const translations: Record<Exclude<Language, "en">, Record<string, string>> = {
  si: {
    "common.addressLabel": "අප වෙත පැමිණෙන්න", "common.hoursLabel": "විවෘත වේලාවන්", "common.themeToggle": "තේමාව මාරු කරන්න", "common.openMenu": "මෙනුව විවෘත කරන්න", "common.closeMenu": "මෙනුව වසන්න",
    "nav.Home": "මුල් පිටුව", "nav.Services": "සේවා", "nav.Doctors": "වෛද්‍යවරු", "nav.Gallery": "ගැලරිය", "nav.Contact": "අමතන්න", "nav.Book now": "දැන් වෙන්කරන්න",
    "nav.Rooms & rates": "කාමර සහ මිල", "nav.Experiences": "අත්දැකීම්", "nav.Enquire": "විමසන්න", "nav.Menu": "මෙනුව", "nav.Catering": "ආහාර සැපයීම", "nav.Reserve": "වෙන්කරන්න",
    "clinic.hero.title": "ඔබේ සිනහවට නිසි සැලකිල්ල", "clinic.hero.subtitle": "Negombo පවුල් සඳහා වසර 12ක විශ්වාසදායක දන්ත සත්කාරය. මිනිත්තුවකින් වෙන්කරන්න.",
    "clinic.hero.cta": "හමුවීමක් වෙන්කරන්න", "clinic.labels.servicesTitle": "සේවා සහ පැහැදිලි මිල ගණන්", "clinic.labels.bookingTitle": "හමුවීමක් වෙන්කරන්න",
    "clinic.labels.nameLabel": "සම්පූර්ණ නම", "clinic.labels.phoneLabel": "දුරකථන අංකය", "clinic.labels.serviceLabel": "ප්‍රතිකාරය", "clinic.labels.servicePlaceholder": "ප්‍රතිකාරයක් තෝරන්න", "clinic.labels.doctorLabel": "කැමති දන්ත වෛද්‍යවරයා", "clinic.labels.doctorPlaceholder": "වෛද්‍යවරයෙකු තෝරන්න", "clinic.labels.dateLabel": "කැමති දිනය", "clinic.labels.timeLabel": "කැමති වේලාව", "clinic.labels.submitLabel": "හමුවීමේ ඉල්ලීම තහවුරු කරන්න",
    "clinic.labels.confirmationTitle": "හමුවීමේ ඉල්ලීම ලැබුණි", "clinic.labels.confirmationMessage": "WhatsApp හරහා ඉක්මනින් තහවුරු කරන්නෙමු.", "clinic.labels.bookingDetailsTitle": "ඔබේ හමුවීමේ විස්තර",
    "clinic.labels.doctorsEyebrow": "ඔබේ දන්ත සත්කාර කණ්ඩායම", "clinic.labels.doctorsTitle": "උණුසුම් සහ විශේෂඥ සත්කාරය", "clinic.labels.doctorsDescription": "අපගේ වෛද්‍යවරු සවන් දී, විකල්ප පැහැදිලි කර, සෑම හමුවීමක්ම පහසු කරති.",
    "clinic.labels.galleryEyebrow": "වඩා විශ්වාසදායක සිනහවක්", "clinic.labels.galleryTitle": "සිතාබලා කළ සත්කාරයේ වෙනස බලන්න", "clinic.labels.comparisonBeforeLabel": "පෙර", "clinic.labels.comparisonAfterLabel": "පසු", "clinic.labels.comparisonControlLabel": "ප්‍රතිකාරයට පෙර සහ පසු සසඳන්න",
    "clinic.labels.contactEyebrow": "සායනය සොයාගන්න", "clinic.labels.contactTitle": "Negombo හි පහසු දන්ත සත්කාරය", "clinic.labels.contactWhatsAppLabel": "WhatsApp හරහා කතා කරන්න", "clinic.labels.addressLabel": "අප වෙත පැමිණෙන්න", "clinic.labels.hoursLabel": "විවෘත වේලාවන්",
    "clinic.service.cleaning": "දත් පිරිසිදු කිරීම සහ ඔප දැමීම", "clinic.service.filling": "දත් පිරවීම", "clinic.service.root-canal": "දත් මුල් ඇළ ප්‍රතිකාරය", "clinic.service.extraction": "දත් ඉවත් කිරීම", "clinic.service.whitening": "දත් සුදු කිරීම",
    "hotel.hero.title": "වඩා නිහඬ විවේකයක්.", "hotel.hero.subtitle": "මුහුදට අවදි වී, තටාකය අසල රැඳී, දකුණු ශ්‍රී ලංකාව ඔබේම කරගන්න.", "hotel.hero.cta": "ලබාගත හැකිදැයි බලන්න",
    "hotel.labels.roomsEyebrow": "ඔබේ ආකාරයට නවාතැන්", "hotel.labels.roomsTitle": "සෙමින් ගත කරන උදෑසන සඳහා කාමර", "hotel.labels.availabilityTitle": "ඔබේ නවාතැන සැලසුම් කරන්න", "hotel.labels.directBookingMessage": "සෘජුව වෙන්කරන්න, අමතර කොමිස් වළකින්න.",
    "hotel.labels.checkInLabel": "පැමිණීම", "hotel.labels.checkOutLabel": "පිටවීම", "hotel.labels.guestsLabel": "අමුත්තන්", "hotel.labels.roomLabel": "කාමර තේරීම", "hotel.labels.roomPlaceholder": "කාමරයක් තෝරන්න", "hotel.labels.enquirySubmitLabel": "ලබාගත හැකිදැයි විමසන්න",
    "hotel.room.ocean-suite": "සාගර කට්ටලය", "hotel.room.garden-suite": "උද්‍යාන කට්ටලය", "hotel.room.family-pavilion": "පවුල් නිවස", "hotel.labels.attractionsEyebrow": "විලාට එහා", "hotel.labels.attractionsTitle": "ඔබේ වේගයට දකුණ", "hotel.labels.currencyLabel": "පෙන්වන මුදල්", "hotel.labels.roomsRateSuffix": "රාත්‍රියකට", "hotel.labels.indicativeRateLabel": "ආසන්න පරිවර්තනයකි. අවසන් මිල LKR වලින් තහවුරු කෙරේ.", "hotel.labels.confirmationTitle": "ලබාගත හැකිදැයි විමසීම ලැබුණි", "hotel.labels.confirmationWhatsAppLabel": "WhatsApp හරහා යවන්න", "hotel.labels.printVoucherLabel": "වවුචරය මුද්‍රණය කරන්න", "hotel.labels.enquiryNameLabel": "සම්පූර්ණ නම", "hotel.labels.enquiryPhoneLabel": "දුරකථන අංකය",
    "restaurant.hero.title": "තවත් රසවත් ශ්‍රී ලාංකික ආහාර.", "restaurant.hero.subtitle": "තද දූපත් රස, කාලීන අමුද්‍රව්‍ය සහ මේසය වටා දිගු සන්ධ්‍යා.", "restaurant.hero.cta": "මෙනුව බලන්න",
    "restaurant.labels.menuEyebrow": "මෙනුව", "restaurant.labels.menuTitle": "අදහසක් සහිත රස", "restaurant.labels.menuAllLabel": "සියල්ල", "restaurant.labels.orderTitle": "ඔබේ ඇණවුම", "restaurant.labels.orderEmptyLabel": "ආරම්භ කිරීමට රසවත් දෙයක් එක් කරන්න.", "restaurant.labels.orderTotalLabel": "එකතුව", "restaurant.labels.orderWhatsAppLabel": "WhatsApp හරහා ඇණවුම් කරන්න", "restaurant.labels.cateringTitle": "මතකයේ රැඳෙන උත්සව සඳහා ආහාර සැපයීම", "restaurant.labels.reservationTitle": "මේසයක් වෙන්කරන්න",
  },
  ta: {
    "common.addressLabel": "எங்களைப் பார்வையிடுங்கள்", "common.hoursLabel": "திறந்திருக்கும் நேரம்", "common.themeToggle": "தீம் மாற்று", "common.openMenu": "மெனுவைத் திறக்கவும்", "common.closeMenu": "மெனுவை மூடவும்",
    "nav.Home": "முகப்பு", "nav.Services": "சேவைகள்", "nav.Doctors": "மருத்துவர்கள்", "nav.Gallery": "படத்தொகுப்பு", "nav.Contact": "தொடர்பு", "nav.Book now": "இப்போது பதிவு", "nav.Rooms & rates": "அறைகள் மற்றும் விலைகள்", "nav.Experiences": "அனுபவங்கள்", "nav.Enquire": "விசாரிக்க", "nav.Menu": "மெனு", "nav.Catering": "உணவு வழங்கல்", "nav.Reserve": "முன்பதிவு",
    "clinic.hero.title": "உங்கள் புன்னகையை அக்கறையுடன் கவனிப்போம்", "clinic.hero.subtitle": "Negombo குடும்பங்களுக்கு 12 ஆண்டுகளாக நம்பகமான பல் பராமரிப்பு. ஒரு நிமிடத்தில் பதிவு செய்யுங்கள்.", "clinic.hero.cta": "சந்திப்பை பதிவு செய்யுங்கள்", "clinic.labels.servicesTitle": "சேவைகள் மற்றும் தெளிவான விலைகள்", "clinic.labels.bookingTitle": "சந்திப்பை பதிவு செய்யுங்கள்",
    "clinic.labels.nameLabel": "முழு பெயர்", "clinic.labels.phoneLabel": "தொலைபேசி எண்", "clinic.labels.serviceLabel": "சிகிச்சை", "clinic.labels.servicePlaceholder": "சிகிச்சையைத் தேர்ந்தெடுக்கவும்", "clinic.labels.doctorLabel": "விருப்பமான பல் மருத்துவர்", "clinic.labels.doctorPlaceholder": "மருத்துவரைத் தேர்ந்தெடுக்கவும்", "clinic.labels.dateLabel": "விருப்பமான தேதி", "clinic.labels.timeLabel": "விருப்பமான நேரம்", "clinic.labels.submitLabel": "சந்திப்பு கோரிக்கையை உறுதிப்படுத்தவும்",
    "clinic.labels.confirmationTitle": "சந்திப்பு கோரிக்கை பெறப்பட்டது", "clinic.labels.confirmationMessage": "WhatsApp மூலம் விரைவில் உறுதிப்படுத்துவோம்.", "clinic.labels.bookingDetailsTitle": "உங்கள் சந்திப்பு விவரங்கள்", "clinic.labels.doctorsEyebrow": "உங்கள் பல் பராமரிப்பு குழு", "clinic.labels.doctorsTitle": "அன்பான நிபுணத்துவ பராமரிப்பு", "clinic.labels.galleryEyebrow": "அதிக நம்பிக்கையான புன்னகை", "clinic.labels.galleryTitle": "கவனமான பராமரிப்பின் வித்தியாசத்தைப் பாருங்கள்", "clinic.labels.comparisonBeforeLabel": "முன்", "clinic.labels.comparisonAfterLabel": "பின்", "clinic.labels.comparisonControlLabel": "சிகிச்சைக்கு முன் மற்றும் பின் ஒப்பிடுக", "clinic.labels.contactEyebrow": "மருத்துவமனையைக் கண்டறியுங்கள்", "clinic.labels.contactTitle": "Negombo-வில் வசதியான பராமரிப்பு", "clinic.labels.contactWhatsAppLabel": "WhatsApp-ல் பேசுங்கள்", "clinic.labels.addressLabel": "எங்களைப் பார்வையிடுங்கள்", "clinic.labels.hoursLabel": "திறந்திருக்கும் நேரம்",
    "clinic.service.cleaning": "பற்கள் சுத்தம் மற்றும் மெருகூட்டல்", "clinic.service.filling": "பல் நிரப்புதல்", "clinic.service.root-canal": "வேர் கால்வாய் சிகிச்சை", "clinic.service.extraction": "பல் அகற்றுதல்", "clinic.service.whitening": "பற்கள் வெண்மையாக்குதல்",
    "hotel.hero.title": "அமைதியான ஓய்வு.", "hotel.hero.subtitle": "கடலுடன் விழித்தெழுந்து, குளத்தின் அருகில் ஓய்வெடுத்து, தெற்கு இலங்கையை உங்களுடையதாக்குங்கள்.", "hotel.hero.cta": "கிடைப்பைச் சரிபார்க்கவும்", "hotel.labels.roomsEyebrow": "உங்கள் தங்குமுறை", "hotel.labels.roomsTitle": "மெதுவான காலைகளுக்கான அறைகள்", "hotel.labels.availabilityTitle": "உங்கள் தங்குமுறையைத் திட்டமிடுங்கள்", "hotel.labels.directBookingMessage": "நேரடியாக பதிவு செய்து, கமிஷனைத் தவிர்க்கவும்.", "hotel.labels.checkInLabel": "வருகை", "hotel.labels.checkOutLabel": "புறப்பாடு", "hotel.labels.guestsLabel": "விருந்தினர்கள்", "hotel.labels.roomLabel": "அறை விருப்பம்", "hotel.labels.roomPlaceholder": "அறையைத் தேர்ந்தெடுக்கவும்", "hotel.labels.enquirySubmitLabel": "கிடைப்பைப் பற்றி விசாரிக்கவும்",
    "hotel.room.ocean-suite": "கடல் காட்சி அறை", "hotel.room.garden-suite": "தோட்ட அறை", "hotel.room.family-pavilion": "குடும்ப அறை", "hotel.labels.attractionsEyebrow": "வில்லாவிற்கு அப்பால்", "hotel.labels.attractionsTitle": "உங்கள் வேகத்தில் தெற்கு", "hotel.labels.currencyLabel": "காட்சி நாணயம்", "hotel.labels.roomsRateSuffix": "ஒரு இரவுக்கு", "hotel.labels.indicativeRateLabel": "குறிப்புக்கான மாற்று. இறுதி விலை LKR-ல் உறுதி செய்யப்படும்.", "hotel.labels.confirmationTitle": "கிடைப்புக் கோரிக்கை பெறப்பட்டது", "hotel.labels.confirmationWhatsAppLabel": "WhatsApp மூலம் அனுப்பவும்", "hotel.labels.printVoucherLabel": "வவுச்சரை அச்சிடவும்", "hotel.labels.enquiryNameLabel": "முழு பெயர்", "hotel.labels.enquiryPhoneLabel": "தொலைபேசி எண்",
    "restaurant.hero.title": "இலங்கை உணவு, இன்னும் கொஞ்சம் தீவிரத்துடன்.", "restaurant.hero.subtitle": "தீவு சுவைகள், பருவகால பொருட்கள் மற்றும் மேசையைச் சுற்றிய நீண்ட மாலைகள்.", "restaurant.hero.cta": "மெனுவைப் பாருங்கள்", "restaurant.labels.menuEyebrow": "மெனு", "restaurant.labels.menuTitle": "கருத்துடன் கூடிய சுவை", "restaurant.labels.menuAllLabel": "அனைத்தும்", "restaurant.labels.orderTitle": "உங்கள் ஆர்டர்", "restaurant.labels.orderEmptyLabel": "தொடங்க சுவையான ஒன்றைச் சேர்க்கவும்.", "restaurant.labels.orderTotalLabel": "மொத்தம்", "restaurant.labels.orderWhatsAppLabel": "WhatsApp மூலம் ஆர்டர்", "restaurant.labels.cateringTitle": "நினைவில் நிற்கும் நிகழ்வுகளுக்கான உணவு வழங்கல்", "restaurant.labels.reservationTitle": "மேசையை முன்பதிவு செய்யுங்கள்",
    "restaurant.menu.chicken-kottu": "கோழி கொத்து", "restaurant.menu.jackfruit-curry": "பலாப்பழக் கறி", "restaurant.menu.prawn-curry": "இறால் கறி", "restaurant.menu.egg-hoppers": "முட்டை ஆப்பம்", "restaurant.menu.watalappan": "வத்தலப்பன்", "restaurant.menu.lime-juice": "மசாலா எலுமிச்சை சோடா",
  },
};

export function translate(language: Language, key: string, fallback: string): string {
  return language === "en" ? fallback : translations[language][key] || fallback;
}

Object.assign(translations.si, {
  "common.visitUs": "අප වෙත පැමිණෙන්න", "common.chatWhatsapp": "WhatsApp හරහා කතා කරන්න", "common.add": "එක් කරන්න", "common.submitting": "යවමින්...", "common.printMenu": "මෙනුව මුද්‍රණය කරන්න",
  "hotel.tagline": "ගාල්ලේ පෞද්ගලික වෙරළ විලා එකක්", "hotel.labels.galleryEyebrow": "ළඟින් බලන්න", "hotel.labels.galleryTitle": "වෙරළ අසල නිහඬ දින සඳහා", "hotel.labels.contactEyebrow": "මෙතැනට එන්න", "hotel.labels.contactTitle": "දකුණු වෙරළේ පෞද්ගලික තැනක්",
  "hotel.room.ocean-suite.description": "පෞද්ගලික ටෙරස් සහ අඛණ්ඩ මුහුදු දසුන් සහිත විශාල කාමරයක්.", "hotel.room.garden-suite.description": "නිවර්තන උද්‍යානය, කියවීමේ කොනක් සහ වැසි නාන කාමරයක්.", "hotel.room.family-pavilion.description": "වෙරළ අසල සෙමින් ගත කිරීමට සම්බන්ධ කාමර දෙකක්.",
  "hotel.attraction.0.name": "ගාල්ල කොටුව", "hotel.attraction.0.description": "යටත්විජිත මංපෙත්, කලාගාර සහ හිරු බැස යන පවුරු සොයා යන්න.", "hotel.attraction.1.name": "කොග්ගල වැව", "hotel.attraction.1.description": "කුරුල්ලන් සහ කුරුඳු දූපත් අතර මෘදු බෝට්ටු ගමනක්.", "hotel.attraction.2.name": "වැලිගම බොක්ක", "hotel.attraction.2.description": "පහසු සර්ෆින්, වෙරළ කැෆේ සහ සෙමින් උදෑසනක්.",
  "restaurant.tagline": "ශ්‍රී ලාංකික මුළුතැන්ගෙය · කොළඹ 07", "restaurant.labels.galleryEyebrow": "අපේ මුළුතැන්ගෙයෙන්", "restaurant.labels.galleryTitle": "තද රස, ලස්සන සේවාව", "restaurant.labels.socialEyebrow": "ගින්න අනුගමනය කරන්න", "restaurant.labels.socialTitle": "Cinnamon & Lime මේසයෙන් තවත් දේ", "restaurant.labels.socialDescription": "කාලීන කෑම, මුළුතැන්ගෙයි කතා සහ කොළඹ 07 සිට සජීවී සන්ධ්‍යා.", "restaurant.labels.socialCtaLabel": "Instagram හි අනුගමනය කරන්න", "restaurant.labels.contactEyebrow": "බඩගින්නෙන් එන්න", "restaurant.labels.contactTitle": "කොළඹ 07 හදවතේ අපව සොයන්න", "restaurant.labels.printMenuLabel": "මෙනුව මුද්‍රණය කරන්න", "restaurant.labels.printReservationLabel": "වෙන්කිරීමේ රිසිට්පත මුද්‍රණය කරන්න",
  "restaurant.menuDesc.chicken-kottu": "අතින් කපන ලද රොටි, බැදපු කුකුල් මස්, ලීක්ස් සහ අපේ කරි මිශ්‍රණය.", "restaurant.menuDesc.jackfruit-curry": "පොලොස්, පොල් කිරි, බැදපු කුළුබඩු සහ රතු බත්.", "restaurant.menuDesc.prawn-curry": "තෙම්පරාදු, පොල් සහ කළු ගම්මිරිස් සමග නැවුම් ඉස්සන්.", "restaurant.menuDesc.egg-hoppers": "සීනි සම්බෝල සහ ලුණු මිරිස් සමග හැපෙන ආප්ප තුනක්.", "restaurant.menuDesc.watalappan": "කිතුල් හකුරු කස්ටඩ්, බැදපු කජු සහ ලුණු ස්වල්පයක්.", "restaurant.menuDesc.lime-juice": "නැවුම් දෙහි, ඉඟුරු, කළු ලුණු සහ සෝඩා.",
  "restaurant.labels.cateringEyebrow": "රසවත් එකතුව", "restaurant.labels.perHeadLabel": "පුද්ගලයෙකුට", "restaurant.labels.minimumGuestsLabel": "අවම අමුත්තන්", "restaurant.labels.reservationNameLabel": "සම්පූර්ණ නම", "restaurant.labels.reservationPhoneLabel": "දුරකථන අංකය", "restaurant.labels.reservationDateLabel": "දිනය", "restaurant.labels.reservationTimeLabel": "වේලාව", "restaurant.labels.reservationPartyLabel": "කණ්ඩායම් ප්‍රමාණය", "restaurant.labels.reservationSubmitLabel": "මේසයක් ඉල්ලන්න", "restaurant.labels.reservationConfirmationTitle": "මේස ඉල්ලීම ලැබුණි", "restaurant.labels.reservationConfirmationReference": "ඔබේ වෙන්කිරීමේ අංකය {reference} වේ.",
  "restaurant.catering.0.name": "උද්‍යාන දිවා ආහාරය", "restaurant.catering.0.description": "කරි තුනක්, රතු බත්, සම්බෝල, අතුරුපස සහ සිසිල් බීම.", "restaurant.catering.1.name": "දූපත් මංගල්‍යය", "restaurant.catering.1.description": "මුහුදු ආහාර, ආප්ප සහ සජීවී කොත්තු සමග චෙෆ්ගේ බෙදාගන්නා මෙනුව.",
});

Object.assign(translations.ta, {
  "common.visitUs": "எங்களைப் பார்வையிடுங்கள்", "common.chatWhatsapp": "WhatsApp-இல் பேசுங்கள்", "common.add": "சேர்", "common.submitting": "அனுப்பப்படுகிறது...", "common.printMenu": "மெனுவை அச்சிடு",
  "hotel.tagline": "காலியில் உள்ள தனியார் கடற்கரை வில்லா", "hotel.labels.galleryEyebrow": "நெருக்கமாகப் பாருங்கள்", "hotel.labels.galleryTitle": "கடற்கரையோர மெதுவான நாட்களுக்காக", "hotel.labels.contactEyebrow": "இங்கே வருங்கள்", "hotel.labels.contactTitle": "தெற்கு கடற்கரையின் தனிப்பட்ட மூலை",
  "hotel.room.ocean-suite.description": "தனியார் மாடி மற்றும் தடையற்ற கடல் காட்சியுடன் விசாலமான கிங் அறை.", "hotel.room.garden-suite.description": "அமைதியான வெப்பமண்டல காட்சி, வாசிப்பு மூலை மற்றும் மழைக்குளியல்.", "hotel.room.family-pavilion.description": "கடற்கரையோர நிதானமான குடும்ப தங்கலுக்கான இரண்டு இணைந்த படுக்கையறைகள்.",
  "hotel.attraction.0.name": "காலி கோட்டை", "hotel.attraction.0.description": "காலனித்துவ வீதிகள், கலைக்கூடங்கள் மற்றும் சூரிய அஸ்தமன மதில்களைச் சுற்றிப் பாருங்கள்.", "hotel.attraction.1.name": "கொக்கலா ஏரி", "hotel.attraction.1.description": "பறவைகள் மற்றும் இலவங்கப்பட்டை தீவுகளுக்கு இடையே மென்மையான படகு பயணம்.", "hotel.attraction.2.name": "வெலிகமா விரிகுடா", "hotel.attraction.2.description": "எளிய சர்ஃபிங், கடற்கரை கஃபேக்கள் மற்றும் நிதானமான காலை.",
  "restaurant.tagline": "இலங்கை சமையலறை · கொழும்பு 07", "restaurant.labels.galleryEyebrow": "எங்கள் சமையலறையிலிருந்து", "restaurant.labels.galleryTitle": "தைரியமான சுவை, அழகான பரிமாறல்", "restaurant.labels.socialEyebrow": "நெருப்பைப் பின்தொடருங்கள்", "restaurant.labels.socialTitle": "Cinnamon & Lime மேசையிலிருந்து மேலும்", "restaurant.labels.socialDescription": "பருவகால உணவுகள், சமையலறைக் கதைகள் மற்றும் கொழும்பு 07-இன் உயிர்ப்பான மாலைகள்.", "restaurant.labels.socialCtaLabel": "Instagram-இல் பின்தொடருங்கள்", "restaurant.labels.contactEyebrow": "பசியுடன் வாருங்கள்", "restaurant.labels.contactTitle": "கொழும்பு 07 இதயத்தில் எங்களைச் சந்தியுங்கள்", "restaurant.labels.printMenuLabel": "மெனுவை அச்சிடு", "restaurant.labels.printReservationLabel": "முன்பதிவு ரசீதை அச்சிடு",
  "restaurant.menuDesc.chicken-kottu": "கையால் நறுக்கிய ரொட்டி, வறுத்த கோழி, லீக்ஸ் மற்றும் எங்கள் கறி கலவை.", "restaurant.menuDesc.jackfruit-curry": "இளம் பலாப்பழம், தேங்காய்ப்பால், வறுத்த மசாலா மற்றும் சிவப்பு அரிசி.", "restaurant.menuDesc.prawn-curry": "புளி, தேங்காய் மற்றும் கருமிளகுடன் சந்தை இறால்.", "restaurant.menuDesc.egg-hoppers": "சீனி சம்பல் மற்றும் லுனு மிரிஸுடன் மூன்று மொறுமொறுப்பான ஆப்பங்கள்.", "restaurant.menuDesc.watalappan": "கித்துள் வெல்ல கஸ்டர்ட், வறுத்த முந்திரி மற்றும் சிறிது உப்பு.", "restaurant.menuDesc.lime-juice": "புதிய எலுமிச்சை, இஞ்சி, கருப்பு உப்பு மற்றும் சோடா.",
  "restaurant.labels.cateringEyebrow": "சுவைமிக்க கூடுகை", "restaurant.labels.perHeadLabel": "ஒருவருக்கு", "restaurant.labels.minimumGuestsLabel": "குறைந்தபட்ச விருந்தினர்கள்", "restaurant.labels.reservationNameLabel": "முழுப் பெயர்", "restaurant.labels.reservationPhoneLabel": "தொலைபேசி எண்", "restaurant.labels.reservationDateLabel": "தேதி", "restaurant.labels.reservationTimeLabel": "நேரம்", "restaurant.labels.reservationPartyLabel": "குழு அளவு", "restaurant.labels.reservationSubmitLabel": "மேசையைக் கோருங்கள்", "restaurant.labels.reservationConfirmationTitle": "மேசை கோரிக்கை பெறப்பட்டது", "restaurant.labels.reservationConfirmationReference": "உங்கள் முன்பதிவு எண் {reference}.",
  "restaurant.catering.0.name": "தோட்ட மதிய உணவு", "restaurant.catering.0.description": "மூன்று கறிகள், சிவப்பு அரிசி, சம்பல்கள், இனிப்பு மற்றும் குளிர்பானங்கள்.", "restaurant.catering.1.name": "தீவு விருந்து", "restaurant.catering.1.description": "கடல் உணவு, ஆப்பம் மற்றும் நேரடி கொத்து உடன் செஃப் பகிரும் மெனு.",
});

Object.assign(translations.si, {
  "clinic.labels.timePlaceholder": "ලබාගත හැකි වේලාවක් තෝරන්න",
  "restaurant.labels.reservationTimePlaceholder": "ලබාගත හැකි වේලාවක් තෝරන්න",
});

Object.assign(translations.ta, {
  "clinic.labels.timePlaceholder": "கிடைக்கும் நேரத்தைத் தேர்ந்தெடுக்கவும்",
  "restaurant.labels.reservationTimePlaceholder": "கிடைக்கும் நேரத்தைத் தேர்ந்தெடுக்கவும்",
});

Object.assign(translations.si, {
  "hotel.labels.transferTitle": "සැලකිල්ලකින් තොරව පැමිණෙන්න",
  "hotel.labels.transferDescription": "ගුවන් තොටුපළ සහ දුම්රිය ස්ථාන පෞද්ගලික ප්‍රවාහන අපගේ වෙන්කිරීම් කණ්ඩායම මඟින් සකස් කළ හැක. ඔබගේ පැමිණීමේ වේලාව WhatsApp හරහා එවන්න; ගමනට පෙර මාර්ගය සහ මිල තහවුරු කරමු.",
  "hotel.labels.directionsLabel": "මාර්ගය ලබාගන්න",
});

Object.assign(translations.ta, {
  "hotel.labels.transferTitle": "கவலையில்லாமல் வந்தடையுங்கள்",
  "hotel.labels.transferDescription": "தனியார் விமானநிலைய மற்றும் ரயில் நிலைய மாற்றங்களை எங்கள் முன்பதிவு குழு ஏற்பாடு செய்யும். உங்கள் வருகை நேரத்தை WhatsApp-இல் பகிருங்கள்; பயணத்திற்கு முன் வழி மற்றும் விலையை உறுதிப்படுத்துவோம்.",
  "hotel.labels.directionsLabel": "வழிமுறைகளைப் பெறுங்கள்",
});

Object.assign(translations.si, {
  "hotel.labels.roomDetailsLabel": "කාමර විස්තර බලන්න",
});

Object.assign(translations.ta, {
  "hotel.labels.roomDetailsLabel": "அறை விவரங்களைப் பார்க்கவும்",
});

Object.assign(translations.si, {
  "restaurant.labels.specialsEyebrow": "අද මේසයේ", "restaurant.labels.specialsTitle": "දිනපතා විශේෂ", "restaurant.labels.deliveryLabel": "බෙදාහැරීමේ ප්‍රදේශය",
  "restaurant.special.market-curry.name": "වෙළඳපොළ කරි දිවා ආහාරය", "restaurant.special.market-curry.description": "කාලීන කරි තුනක්, රතු බත් සහ සම්බෝල වෙනස්වන එකතුවක්.",
  "restaurant.special.hopper-evening.name": "ආප්ප සන්ධ්‍යාව", "restaurant.special.hopper-evening.description": "බිත්තර ආප්ප, පරිප්පු, සීනි සම්බෝල සහ නැවුම් දෙහි සෝඩා.",
  "restaurant.deliveryRadius": "කොළඹ 03, 04, 05, 06, 07 සහ 08 පුරා බෙදාහැරීම. විශාල කොළඹ ප්‍රදේශයේ ඕනෑම තැනකට ආහාර සැපයීම පෙර ඇණවුම් කළ හැක.",
});

Object.assign(translations.ta, {
  "restaurant.labels.specialsEyebrow": "இன்று மேசையில்", "restaurant.labels.specialsTitle": "தினசரி சிறப்புகள்", "restaurant.labels.deliveryLabel": "விநியோகப் பகுதி",
  "restaurant.special.market-curry.name": "சந்தை கறி மதிய உணவு", "restaurant.special.market-curry.description": "பருவகால மூன்று கறிகள், சிவப்பு அரிசி மற்றும் சம்பல்களின் மாறும் தொகுப்பு.",
  "restaurant.special.hopper-evening.name": "அப்பம் மாலை", "restaurant.special.hopper-evening.description": "முட்டை அப்பம், பருப்பு, சீனி சம்பல் மற்றும் புதிய எலுமிச்சை சோடா.",
  "restaurant.deliveryRadius": "கொழும்பு 03, 04, 05, 06, 07 மற்றும் 08 முழுவதும் விநியோகம். பெரும் கொழும்பில் எங்கும் உணவளிப்பை முன்கூட்டியே ஆர்டர் செய்யலாம்.",
});
