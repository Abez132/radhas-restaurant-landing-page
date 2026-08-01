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
      footnote: "A sample of what's on the table. Confirmed starting prices: Tandoori specialties from 1,599 Birr · Chicken Biryani 849 Birr · Mango Lassi 399 Birr — ask your server for the full menu.",
      items: [
        {
          title: "Fish Curry, Masala & Tikka",
          tag: "Chef's Trio",
          description: "Three ways with fish — a fiery curry, a smoky masala, and char-grilled tikka, all on one table.",
          image: "/images/dishes/fish-curry-masala-tikka.jpg",
        },
        {
          title: "Mutton Rogan Josh",
          tag: "Best Seller",
          description: "Slow-braised mutton in a rich, aromatic Kashmiri red curry.",
          image: "/images/dishes/mutton-rogan-josh.jpg",
        },
        {
          title: "Paneer Bhurji",
          tag: "Vegetarian",
          description: "Scrambled paneer with onions, tomatoes, and warm spice — comfort food, done right.",
          image: "/images/dishes/paneer-bhurji.jpg",
        },
        {
          title: "Chicken Lollypop",
          tag: "Starter Favorite",
          description: "Frenched chicken drumettes, marinated and wok-fried Indo-Chinese style.",
          image: "/images/dishes/chicken-lollypop.jpg",
        },
        {
          title: "Samosa Chaat",
          tag: "Guest Favorite",
          description: "Crisp samosas steamed and topped with chutneys, yogurt, and pomegranate.",
          image: "/images/dishes/samosa-chaat.jpg",
        },
        {
          title: "Chicken Manchow Soup",
          tag: "Indo-Chinese",
          description: "Spiced chicken broth topped with crispy fried noodles.",
          image: "/images/dishes/chicken-manchow-soup.jpg",
        },
        {
          title: "Chicken Hot & Sour Soup",
          tag: "Indo-Chinese",
          description: "A warming broth of chicken, mushroom, and fresh chili — built for Addis evenings.",
          image: "/images/dishes/chicken-hot-sour-soup.jpg",
        },
        {
          title: "Bowl of Happiness",
          tag: "House Special",
          description: "Our own name for it — tender kofta in a silky, cream-swirled tomato gravy.",
          image: "/images/dishes/bowl-of-happiness.jpg",
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
      eyebrow: "From Our Table",
      title: "As Seen on Instagram",
      subtitle: `Real posts from ${business.instagram} — follow along for daily specials.`,
      cta: "Follow @radhasres2025",
      items: [
        { label: "Fish Curry, Masala & Tikka", image: "/images/dishes/fish-curry-masala-tikka.jpg" },
        { label: "Mutton Rogan Josh", image: "/images/dishes/mutton-rogan-josh.jpg" },
        { label: "Paneer Bhurji", image: "/images/dishes/paneer-bhurji.jpg" },
        { label: "Chicken Lollypop", image: "/images/dishes/chicken-lollypop.jpg" },
        { label: "Samosa Chaat", image: "/images/dishes/samosa-chaat.jpg" },
        { label: "Chicken Manchow Soup", image: "/images/dishes/chicken-manchow-soup.jpg" },
        { label: "Chicken Hot & Sour Soup", image: "/images/dishes/chicken-hot-sour-soup.jpg" },
        { label: "Bowl of Happiness", image: "/images/dishes/bowl-of-happiness.jpg" },
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
      footnote: "ከምናሌያችን ናሙና። የተረጋገጡ መነሻ ዋጋዎች፦ የታንዱር ልዩ ምግቦች ከ1,599 ብር · የዶሮ ቢርያኒ 849 ብር · ማንጎ ላሲ 399 ብር — ሙሉ ምናሌውን ከአስተናጋጅዎ ይጠይቁ።",
      items: [
        {
          title: "የዓሳ ወጥ፣ ማሳላ እና ቲካ",
          tag: "የሼፍ ሶስትዮሽ",
          description: "በሶስት መንገድ የተዘጋጀ ዓሳ — ትኩስ ወጥ፣ ጭስ ጣዕም ያለው ማሳላ እና በእሳት የተጠበሰ ቲካ በአንድ ጠረጴዛ ላይ።",
          image: "/images/dishes/fish-curry-masala-tikka.jpg",
        },
        {
          title: "የበግ ሮገን ጆሽ",
          tag: "ተመራጭ",
          description: "በዝግታ የበሰለ የበግ ስጋ በበለጸገ ጣዕም ባለው የካሽሚር ቀይ ወጥ ውስጥ።",
          image: "/images/dishes/mutton-rogan-josh.jpg",
        },
        {
          title: "ፓኒር ቡርጂ",
          tag: "የአትክልት ምግብ",
          description: "የተፈጨ ፓኒር ከሽንኩርት፣ ከቲማቲም እና ከቅመማ ቅመም ጋር — ትክክለኛ የምቾት ምግብ።",
          image: "/images/dishes/paneer-bhurji.jpg",
        },
        {
          title: "ቺኪን ሎሊፖፕ",
          tag: "የመክፈቻ ምርጫ",
          description: "የተቀመመ እና በህንድ-ቻይናዊ ስልት የተጠበሰ የዶሮ ክንፍ።",
          image: "/images/dishes/chicken-lollypop.jpg",
        },
        {
          title: "ሳሞሳ ቻት",
          tag: "የደንበኞች ምርጫ",
          description: "በእንፋሎት የተጋገሩ ሳሞሳዎች በቺትኒ፣ በእርጎ እና በሮማን የተጨመሩ።",
          image: "/images/dishes/samosa-chaat.jpg",
        },
        {
          title: "የቺኪን ማንቾው ሾርባ",
          tag: "ህንድ-ቻይናዊ",
          description: "የተቀመመ የዶሮ ሾርባ በተጠበሰ ኑድል የተሞላ።",
          image: "/images/dishes/chicken-manchow-soup.jpg",
        },
        {
          title: "ቺኪን ሆት እና ሳወር ሾርባ",
          tag: "ህንድ-ቻይናዊ",
          description: "ዶሮ፣ እንጉዳይ እና ትኩስ በርበሬ ያለው ሙቅ ሾርባ — ለአዲስ አበባ ምሽቶች ተስማሚ።",
          image: "/images/dishes/chicken-hot-sour-soup.jpg",
        },
        {
          title: "የደስታ ጎድጓዳ ሳህን",
          tag: "የቤት ልዩ ምግብ",
          description: "የራሳችን ስያሜ — ለስላሳ ኮፍታ በክሬም በተሞላ የቲማቲም ወጥ ውስጥ።",
          image: "/images/dishes/bowl-of-happiness.jpg",
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
      eyebrow: "ከጠረጴዛችን",
      title: "በኢንስታግራም እንደታየው",
      subtitle: `ትክክለኛ ልጥፎች ከ${business.instagram} — ለዕለታዊ ልዩ ምግቦች ይከተሉን።`,
      cta: "@radhasres2025ን ይከተሉ",
      items: [
        { label: "የዓሳ ወጥ፣ ማሳላ እና ቲካ", image: "/images/dishes/fish-curry-masala-tikka.jpg" },
        { label: "የበግ ሮገን ጆሽ", image: "/images/dishes/mutton-rogan-josh.jpg" },
        { label: "ፓኒር ቡርጂ", image: "/images/dishes/paneer-bhurji.jpg" },
        { label: "ቺኪን ሎሊፖፕ", image: "/images/dishes/chicken-lollypop.jpg" },
        { label: "ሳሞሳ ቻት", image: "/images/dishes/samosa-chaat.jpg" },
        { label: "የቺኪን ማንቾው ሾርባ", image: "/images/dishes/chicken-manchow-soup.jpg" },
        { label: "ቺኪን ሆት እና ሳወር ሾርባ", image: "/images/dishes/chicken-hot-sour-soup.jpg" },
        { label: "የደስታ ጎድጓዳ ሳህን", image: "/images/dishes/bowl-of-happiness.jpg" },
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
