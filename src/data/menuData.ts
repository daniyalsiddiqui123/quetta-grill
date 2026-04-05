export interface MenuItem {
  id: number;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  price: string;
  image: string;
  isPopular?: boolean;
}

export const menuData: Record<string, MenuItem[]> = {
  appetizers: [
    {
      id: 1,
      name: { en: 'Hummus with Grilled Lamb', ar: 'حمص مع لحم مشوي' },
      description: { en: 'Creamy hummus topped with tender grilled lamb and pine nuts', ar: 'حمص كريمي مغطى بلحم ضأن مشوي طري وصنوبر' },
      price: '28 SAR',
      image: '🥙',
      isPopular: true,
    },
    {
      id: 2,
      name: { en: 'Grilled Halloumi Salad', ar: 'سلطة حلوم مشوية' },
      description: { en: 'Fresh greens with grilled halloumi, tomatoes, and pomegranate dressing', ar: 'خضروات طازجة مع حلوم مشوية وطماطم وصلصة الرمان' },
      price: '32 SAR',
      image: '🥗',
    },
    {
      id: 3,
      name: { en: 'Chicken Shawara Bites', ar: 'لقمات الشاورما' },
      description: { en: 'Crispy shawara rolls with garlic sauce and pickles', ar: 'لفائف شاورما مقرمشة مع صلصة الثوم والمخللات' },
      price: '24 SAR',
      image: '🌯',
    },
    {
      id: 4,
      name: { en: 'Falafel Platter', ar: 'طبق الفلافل' },
      description: { en: 'Golden falafel with tahini, fresh vegetables, and warm pita', ar: 'فلافل ذهبية مع طحينة وخضروات طازجة وخبز بيتا دافئ' },
      price: '22 SAR',
      image: '🧆',
    },
  ],
  mains: [
    {
      id: 5,
      name: { en: 'Signature Lamb Chops', ar: 'قطع لحم الضأن المميزة' },
      description: { en: 'Premium lamb chops marinated in our secret spice blend, grilled to perfection', ar: 'قطع لحم ضأن ممتازة متبلة بخلطتنا السرية من التوابل، مشوية بإتقان' },
      price: '89 SAR',
      image: '🍖',
      isPopular: true,
    },
    {
      id: 6,
      name: { en: 'Mixed Grill Platter', ar: 'طبق مشوي مشكل' },
      description: { en: 'A generous selection of grilled chicken, lamb, and kofta with rice and salads', ar: 'تشكيلة سخية من الدجاج والضأن والكفتة المشوية مع الأرز والسلطات' },
      price: '125 SAR',
      image: '🍽️',
      isPopular: true,
    },
    {
      id: 7,
      name: { en: 'Grilled Chicken Kebab', ar: 'كباب دجاج مشوي' },
      description: { en: 'Juicy chicken kebabs with saffron rice and grilled vegetables', ar: 'كباب دجاج عصيري مع أرز بالزعفران وخضروات مشوية' },
      price: '65 SAR',
      image: '🍗',
    },
    {
      id: 8,
      name: { en: 'Fish Sayadieh', ar: 'صيادية السمك' },
      description: { en: 'Traditional grilled fish spiced rice with caramelized onions and tahini', ar: 'أرز متبل تقليدي مع سمك مشوي وبصل مكرمل وطحينة' },
      price: '78 SAR',
      image: '🐟',
    },
  ],
  drinks: [
    {
      id: 9,
      name: { en: 'Arabic Coffee', ar: 'قهوة عربية' },
      description: { en: 'Traditional cardamom-infused Arabic coffee served with dates', ar: 'قهوة عربية تقليدية بالهيل تقدم مع التمور' },
      price: '15 SAR',
      image: '☕',
    },
    {
      id: 10,
      name: { en: 'Fresh Mango Juice', ar: 'عصير مانجو طازج' },
      description: { en: 'Freshly squeezed tropical mango juice', ar: 'عصير مانجو استوائي طازج' },
      price: '18 SAR',
      image: '🥭',
    },
    {
      id: 11,
      name: { en: 'Mint Lemonade', ar: 'ليمون بالنعناع' },
      description: { en: 'Refreshing blend of fresh lemons and mint leaves', ar: 'مزيج منعش من الليمون الطازج وأوراق النعناع' },
      price: '16 SAR',
      image: '🍋',
      isPopular: true,
    },
    {
      id: 12,
      name: { en: 'Karak Tea', ar: 'شاي كرك' },
      description: { en: 'Rich and creamy spiced tea, a Gulf favorite', ar: 'شاي متبل غني وكريمي، مفضل في الخليج' },
      price: '10 SAR',
      image: '🍵',
    },
  ],
  desserts: [
    {
      id: 13,
      name: { en: 'Kunafa', ar: 'كنافة' },
      description: { en: 'Warm, crispy kunafa with sweet cheese and rose water syrup', ar: 'كنافة دافئة ومقرمشة مع جبنة حلوة وشراب ماء الورد' },
      price: '28 SAR',
      image: '🍮',
      isPopular: true,
    },
    {
      id: 14,
      name: { en: 'Baklava Selection', ar: 'تشكيلة بقلاوة' },
      description: { en: 'Assorted baklava with pistachios, walnuts, and honey syrup', ar: 'بقلاوة مشكلة مع فستق وجوز وشراب العسل' },
      price: '32 SAR',
      image: '🍯',
    },
    {
      id: 15,
      name: { en: 'Saffron Ice Cream', ar: 'آيس كريم بالزعفران' },
      description: { en: 'Creamy Arabic ice cream infused with premium saffron', ar: 'آيس كريم عربي كريمي منكه بالزعفران الفاخر' },
      price: '22 SAR',
      image: '🍨',
    },
    {
      id: 16,
      name: { en: 'Dates with Tahini', ar: 'تمور بالطحينة' },
      description: { en: 'Premium Medjool dates served with smooth tahini drizzle', ar: 'تمور مجدول فاخرة تقدم مع رشة طحينة ناعمة' },
      price: '25 SAR',
      image: '🌴',
    },
  ],
};
