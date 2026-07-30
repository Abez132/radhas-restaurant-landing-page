"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "am";

/** Contact facts that don't change between languages. */
export const business = {
  name: "Radha's Indian Restaurant and Bar",
  address: "Bole Japan, Bole Road, Addis Ababa, Ethiopia",
  phone: "+251 97 433 4455",
  phoneHref: "tel:+251974334455",
  email: "radhasindianrestaurantandbar@gmail.com",
  instagram: "@radhasres2025",
  instagramHref: "https://instagram.com/radhasres2025",
  rating: 4.9,
  reviewCount: 18,
  reviewSource: "Tripadvisor",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Radha%27s+Indian+Restaurant+and+Bar,+Bole+Japan,+Addis+Ababa&output=embed",
};

/**
 * All translatable copy lives here, keyed en/am, so the language toggle is
 * just a matter of switching which key components read. The Amharic text
 * below has been written and checked for meaning by the assistant, but per
 * the program's own workflow guide it should still get a native-speaker
 * read-through on the live page before this goes out as a pitch.
 */
export const content = {
  en: {
    nav: { about: "About", menu: "Menu", whyUs: "Why Us", reviews: "Reviews", gallery: "Gallery", visit: "Visit", reserve: "Reserve a Table" },
    hero: {
      eyebrow: "Welcome to Radha's",
      headline: "Authentic Indian Flavors in the Heart of Addis Ababa",
      sub: "Tandoor-fired classics, hand-ground spice, and a full-service bar — hosted with the same warmth Radha's guests have known since day one.",
      cta1: "Reserve Your Table",
      cta2: "View Our Menu",
      ratingLine: `${business.rating} on ${business.reviewSource} · #32 of 392 Addis Ababa restaurants`,
    },
    about: {
      eyebrow: "Our Story",
      title: "A Taste of India, Hosted with Ethiopian Warmth",
      p1: "Radha's brings authentic Indian chefs and recipes carried from home kitchens across India to Bole Japan — hand-ground spice, tandoor-fired classics, and curries made the way they should be, without shortcuts.",
      p2: "Guests describe it as the only true Indian fine-dine experience in Addis Ababa — a favorite of the diplomatic community, business travelers, and families alike, with private rooms for when an occasion calls for one.",
      statRatingValue: `${business.rating}★`,
      statRatingLabel: `${business.reviewCount} ${business.reviewSource} Reviews`,
      statHoursValue: "9AM–11PM",
      statHoursLabel: "Open Every Day",
      quote: "\u201cAmazing ambiance, great atmosphere and lovely food.\u201d",
      quoteSource: `— a ${business.reviewSource} guest`,
    },
    insider: {
      label: "Insider tips from real guests",
      items: [
        "International board-game night every Monday",
        "Live jazz bar with big-screen sports evenings",
        "Regulars recommend the Tawa Paneer & Dal Khichdi",
        "Free valet & off-street parking on site",
      ],
    },
    dishes: {
      eyebrow: "Signature Dishes",
      title: "Flavors Worth the Table",
      footnote: "Prices as posted on our menu. Ask your server about today's chef specials.",
      items: [
        {
          title: "Tandoori Specialties",
          tag: "Chef's Pride",
          description: "Marinated overnight and finished in a charcoal tandoor for that unmistakable smoky char.",
          price: "From 1,599 Birr",
        },
        {
          title: "Chicken Biryani",
          tag: "Best Seller",
          description: "Long-grain basmati layered and dum-cooked with saffron and slow-fried onions.",
          price: "849 Birr",
        },
        {
          title: "Vegetarian Favorites",
          tag: "Guest Favorite",
          description: "Chhole bhature, tawa paneer, and dal khichdi — full care given to the veg menu, not an afterthought.",
          price: "From 399 Birr",
        },
        {
          title: "From the Bar",
          tag: "Full Bar",
          description: "Handcrafted cocktails, mocktails, and a house Mango Lassi — with live jazz most evenings.",
          price: "Mango Lassi 399 Birr",
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Choose Us",
      title: "Hospitality First, Always",
      items: [
        { title: "Authentic Indian Chefs", description: "Recipes carried from home kitchens across India, not adapted for anyone." },
        { title: "Equal Care, Both Menus", description: "A full vegetarian and vegan menu that gets the same attention as the rest." },
        { title: "Full Bar & Jazz Nights", description: "Cocktails, live music, and big-screen sports evenings at the bar." },
        { title: "Private Dining Rooms", description: "Intimate spaces for celebrations, diplomatic dinners, and business meetings." },
        { title: "Free Parking & Valet", description: "Off-street, street, and valet parking — arriving is never the hard part." },
        { title: "Wheelchair Accessible & Dog Friendly", description: "A dining room that welcomes everyone, four-legged guests included." },
        { title: "Free Wifi, Delivery & Takeout", description: "Built for the business-lunch crowd as much as the sit-down dinner." },
        { title: "Trusted by the Diplomatic Community", description: "A known favorite among Addis Ababa's diplomats and expatriates." },
      ],
    },
    reviews: {
      eyebrow: "In Our Guests' Words",
      title: "What Addis Ababa Is Saying",
      subtitle: `${business.rating} average from ${business.reviewCount} ${business.reviewSource} reviews`,
      items: [
        { quote: "The only Indian fine-dine restaurant in Ethiopia — and it shows in every dish.", author: "Ravi K.", stars: 5 },
        { quote: "Amazing ambiance, great atmosphere and lovely food.", author: "Kajal D.", stars: 5 },
        { quote: "Best place for a business lunch or dinner — mouth-watering, generous portions.", author: "Sandeep M.", stars: 5 },
        { quote: "A personal dining room, dim light, and wine — dinner here feels special.", author: "Sifen N.", stars: 5 },
        { quote: "Very good place for a family get-together, start to finish.", author: "Makbel D.", stars: 5 },
        { quote: "Laid-back, with Indian music playing and a Monday game night for the international crowd.", author: "Roger the Bard", stars: 4 },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "A Glimpse Inside Radha's",
      items: [
        { label: "Food", caption: "Tandoori grills, biryani, and curries plated table-side" },
        { label: "Interior", caption: "Warm lighting and considered Indian-inspired decor" },
        { label: "Bar & Jazz Nights", caption: "Cocktails, live music, and big-screen sports evenings" },
        { label: "Private Dining", caption: "Intimate rooms for family and business occasions" },
      ],
    },
    cta: {
      title: "Your Table Is Waiting",
      sub: "For business lunches, family dinners, or a private room for your next celebration — we'll take care of the rest.",
      call: `Call ${business.phone}`,
      directions: "Get Directions",
    },
    visit: {
      eyebrow: "Visit Us",
      title: "Find Us in Bole Japan",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Hours",
      hoursValue: "Daily · 9:00 AM – 11:00 PM",
      reserve: "Reserve a Table",
    },
    footer: {
      thanks: "Thank you for dining with us",
      navigate: "Navigate",
      contact: "Contact",
      services: "Services",
      serviceList: ["Private Dining", "Full Bar & Jazz Nights", "Business Lunches", "Delivery & Takeout"],
      rights: "All rights reserved.",
    },
    langToggle: "አማርኛ",
  },
  am: {
    nav: { about: "ስለ እኛ", menu: "ምናሌ", whyUs: "ለምን እኛን", reviews: "አስተያየቶች", gallery: "ማዕከለ-ስዕላት", visit: "ይጎብኙን", reserve: "ጠረጴዛ ያስይዙ" },
    hero: {
      eyebrow: "ወደ ራድሃስ እንኳን በደህና መጡ",
      headline: "ኦሪጅናል የህንድ ጣዕም በአዲስ አበባ ልብ ውስጥ",
      sub: "በታንዱር የተጠበሱ ልዩ ምግቦች፣ በእጅ የተፈጩ ቅመሞች እና ሙሉ አገልግሎት ያለው ባር — ራድሃስ ደንበኞቿን ከጅምሩ በለመደችው ሙቀት ታስተናግዳለች።",
      cta1: "ጠረጴዛ ያስይዙ",
      cta2: "ምናሌያችንን ይመልከቱ",
      ratingLine: `${business.rating} በ${business.reviewSource} · ከ392 የአዲስ አበባ ምግብ ቤቶች መካከል #32`,
    },
    about: {
      eyebrow: "የእኛ ታሪክ",
      title: "የህንድ ጣዕም በኢትዮጵያዊ እንግዳ አቀባበል",
      p1: "ራድሃስ ከህንድ የቤት ኩሽናዎች የተገኙ ኦሪጅናል የህንድ ሼፎችን እና የምግብ አዘገጃጀቶችን ወደ ቦሌ ጃፓን አምጥታለች — በእጅ የተፈጩ ቅመማ ቅመሮች፣ በታንዱር የተጠበሱ ልዩ ምግቦች፣ እና ያለ አቋራጭ በአግባቡ የተዘጋጁ ወጦች።",
      p2: "እንግዶች ይህንን በአዲስ አበባ ብቸኛ እውነተኛ የህንድ ምግብ ቤት ተሞክሮ አድርገው ይገልጹታል — በዲፕሎማት ማህበረሰብ፣ በንግድ ጎብኚዎች እና በቤተሰቦች ዘንድ ተወዳጅ ስትሆን፣ ለልዩ አጋጣሚዎች የግል ማዕድ ቤቶችም አሏት።",
      statRatingValue: `${business.rating}★`,
      statRatingLabel: `${business.reviewCount} የ${business.reviewSource} አስተያየቶች`,
      statHoursValue: "9:00 ጠዋት–11:00 ማታ",
      statHoursLabel: "በየቀኑ ክፍት",
      quote: "«አስደናቂ ድባብ፣ ግሩም ሁኔታ እና ጣፋጭ ምግብ።»",
      quoteSource: `— የ${business.reviewSource} እንግዳ`,
    },
    insider: {
      label: "ከእውነተኛ እንግዶች የተገኙ ምክሮች",
      items: [
        "በየሰኞው ዓለም አቀፍ የቦርድ ጨዋታ ምሽት",
        "ቀጥታ የጃዝ ባር ከትልቅ ስክሪን ስፖርት ምሽቶች ጋር",
        "ደንበኞች ታዋ ፓኒር እና ዳል ኪችዲን ይመክራሉ",
        "ነጻ ቫሌት እና የመኪና ማቆሚያ አገልግሎት",
      ],
    },
    dishes: {
      eyebrow: "ልዩ ምግቦቻችን",
      title: "ጠረጴዛው የሚገባው ጣዕም",
      footnote: "ዋጋዎቹ በምናሌያችን ላይ እንደተጠቀሱት ናቸው። ስለ ዕለቱ ልዩ ምግቦች አስተናጋጅዎን ይጠይቁ።",
      items: [
        {
          title: "የታንዱር ልዩ ምግቦች",
          tag: "የሼፍ ኩራት",
          description: "በሌሊት ተቀምመው በከሰል ታንዱር ውስጥ የተጠበሱ፣ ልዩ የጭስ ጣዕም ያላቸው።",
          price: "ከ1,599 ብር ጀምሮ",
        },
        {
          title: "የዶሮ ቢርያኒ",
          tag: "ተመራጭ",
          description: "ባስማቲ ሩዝ ከሳፍሮን እና በዝግታ ከተጠበሰ ሽንኩርት ጋር ተደራርቦ የሚዘጋጅ።",
          price: "849 ብር",
        },
        {
          title: "የአትክልት ልዩ ምግቦች",
          tag: "የደንበኞች ምርጫ",
          description: "ቾሌ ባቱሬ፣ ታዋ ፓኒር እና ዳል ኪችዲ — ልክ እንደ ስጋ ምግቦቹ ተመሳሳይ እንክብካቤ ያገኛሉ።",
          price: "ከ399 ብር ጀምሮ",
        },
        {
          title: "ከባሩ",
          tag: "ሙሉ ባር",
          description: "በእጅ የተዘጋጁ ኮክቴሎች፣ ሞክቴሎች እና የቤት ማንጎ ላሲ — ከቀጥታ ጃዝ ሙዚቃ ጋር።",
          price: "ማንጎ ላሲ 399 ብር",
        },
      ],
    },
    whyUs: {
      eyebrow: "ለምን እኛን ይምረጡ",
      title: "እንግዳ አቀባበል ሁልጊዜ ቅድሚያ",
      items: [
        { title: "ኦሪጅናል የህንድ ሼፎች", description: "ከህንድ የቤት ኩሽናዎች የመጡ የምግብ አዘገጃጀቶች፣ ላልተለወጠ ጣዕም።" },
        { title: "እኩል እንክብካቤ ለሁለቱም ምናሌዎች", description: "ሙሉ የአትክልትና የቬጋን ምናሌ ልክ እንደ ሌላው ትኩረት ያገኛል።" },
        { title: "ሙሉ ባር እና የጃዝ ምሽቶች", description: "ኮክቴሎች፣ ቀጥታ ሙዚቃ እና በትልቅ ስክሪን የስፖርት ምሽቶች።" },
        { title: "የግል ማዕድ ቤቶች", description: "ለበዓላት፣ ለዲፕሎማሲያዊ እራት እና ለንግድ ስብሰባዎች የተመቻቹ ቦታዎች።" },
        { title: "ነጻ የመኪና ማቆሚያ እና ቫሌት", description: "የውጪ፣ የመንገድ ዳር እና የቫሌት ማቆሚያ — መድረስ አስቸጋሪ አይደለም።" },
        { title: "ተሽከርካሪ ወንበር ምቹ እና ውሻ ተቀባይ", description: "ሁሉንም እንግዳ የሚቀበል ምግብ ቤት፣ የቤት እንስሳትን ጨምሮ።" },
        { title: "ነጻ ዋይፋይ፣ ማድረስ እና ውሰድ", description: "ለንግድ ምሳ ሰዓት እንደ እራት ራሱ ተስማሚ።" },
        { title: "በዲፕሎማሲያዊ ማህበረሰብ የታመነ", description: "በአዲስ አበባ ዲፕሎማቶች እና የውጪ ዜጎች ዘንድ የታወቀ ተመራጭ።" },
      ],
    },
    reviews: {
      eyebrow: "በእንግዶቻችን ቃል",
      title: "አዲስ አበባ ምን ትላለች",
      subtitle: `${business.rating} አማካይ ከ${business.reviewCount} የ${business.reviewSource} አስተያየቶች`,
      items: [
        { quote: "በኢትዮጵያ ብቸኛው እውነተኛ የህንድ ምግብ ቤት — ይህም በእያንዳንዱ ምግብ ውስጥ ይታያል።", author: "ራቪ ኬ.", stars: 5 },
        { quote: "አስደናቂ ድባብ፣ ግሩም ሁኔታ እና ጣፋጭ ምግብ።", author: "ካጃል ዲ.", stars: 5 },
        { quote: "ለንግድ ምሳ ወይም እራት ምርጥ ቦታ — ጣፋጭ እና በቂ መጠን ያለው ምግብ።", author: "ሳንዲፕ ኤም.", stars: 5 },
        { quote: "የግል ማዕድ ቤት፣ ደብዛዛ ብርሃን እና ወይን — እራቱ ልዩ ስሜት ይሰጣል።", author: "ሲፈን ኤን.", stars: 5 },
        { quote: "ለቤተሰብ መሰባሰቢያ በጣም ጥሩ ቦታ ነው።", author: "መቅበል ዲ.", stars: 5 },
        { quote: "ዘና ያለ ድባብ፣ የህንድ ሙዚቃ እና ለዓለም አቀፍ ጎብኚዎች የሰኞ ጨዋታ ምሽት።", author: "ሮጀር ዘ ባርድ", stars: 4 },
      ],
    },
    gallery: {
      eyebrow: "ማዕከለ-ስዕላት",
      title: "የራድሃስ ውስጣዊ እይታ",
      items: [
        { label: "ምግብ", caption: "በጠረጴዛ አጠገብ የሚቀርቡ የታንዱር ጥብስ፣ ቢርያኒ እና ወጦች" },
        { label: "የውስጥ ክፍል", caption: "ሙቅ ብርሃን እና የህንድ ተነሳሽነት ያለው ማስዋቢያ" },
        { label: "ባር እና የጃዝ ምሽቶች", caption: "ኮክቴሎች፣ ቀጥታ ሙዚቃ እና የስፖርት ምሽቶች" },
        { label: "የግል ማዕድ ቤት", caption: "ለቤተሰብ እና ለንግድ አጋጣሚዎች የተመቻቹ ክፍሎች" },
      ],
    },
    cta: {
      title: "ጠረጴዛዎ በመጠባበቅ ላይ ነው",
      sub: "ለንግድ ምሳ፣ ለቤተሰብ እራት ወይም ለሚቀጥለው በዓልዎ የግል ክፍል — ቀሪውን እኛ እንይዘዋለን።",
      call: `ይደውሉ ${business.phone}`,
      directions: "አቅጣጫ ያግኙ",
    },
    visit: {
      eyebrow: "ይጎብኙን",
      title: "በቦሌ ጃፓን ያግኙን",
      addressLabel: "አድራሻ",
      phoneLabel: "ስልክ",
      emailLabel: "ኢሜይል",
      hoursLabel: "የስራ ሰዓት",
      hoursValue: "በየቀኑ · 9:00 ጠዋት – 11:00 ማታ",
      reserve: "ጠረጴዛ ያስይዙ",
    },
    footer: {
      thanks: "ከእኛ ጋር ስለበሉ እናመሰግናለን",
      navigate: "ማውጫ",
      contact: "አድራሻ",
      services: "አገልግሎቶች",
      serviceList: ["የግል ማዕድ ቤት", "ሙሉ ባር እና የጃዝ ምሽቶች", "የንግድ ምሳ", "ማድረስ እና ውሰድ"],
      rights: "መብቱ በህግ የተጠበቀ ነው።",
    },
    langToggle: "English",
  },
} as const;

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  t: (typeof content)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((prev) => (prev === "en" ? "am" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
