export interface Tutorial {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  description: string;
  imageUrl: string;
}

export interface Resort {
  id: string;
  name: string;
  location: string;
  country: string;
  elevation: number;
  trailCount: number;
  liftCount: number;
  rating: number;
  priceRange: string;
  imageUrl: string;
  description: string;
  priceHistory: { year: number; adultPrice: number; childPrice: number }[];
}

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: '单板入门基础',
    description: '学习单板滑雪的基本姿势、安全知识和推坡技巧，适合完全没有滑雪经验的初学者。',
    level: 'beginner',
    duration: 18,
    videoUrl: 'https://www.youtube.com/embed/example1',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20beginner%20lesson%20snow%20mountain%20winter&image_size=landscape_16_9'
  },
  {
    id: '2',
    title: '落叶飘与转弯',
    description: '掌握落叶飘和基础转弯技巧，这是单板初学者必须掌握的核心技能。',
    level: 'beginner',
    duration: 15,
    videoUrl: 'https://www.youtube.com/embed/example2',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20falling%20leaf%20turn%20winter%20sport&image_size=landscape_16_9'
  },
  {
    id: '3',
    title: '换刃技巧',
    description: '学习前后刃切换技术，提升你的单板水平，让滑行更加流畅自如。',
    level: 'intermediate',
    duration: 22,
    videoUrl: 'https://www.youtube.com/embed/example3',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20edge%20transition%20carving%20technique&image_size=landscape_16_9'
  },
  {
    id: '4',
    title: '刻滑入门',
    description: '掌握刻滑技巧，在雪道上画出完美的弧线，体验速度与控制的平衡。',
    level: 'intermediate',
    duration: 20,
    videoUrl: 'https://www.youtube.com/embed/example4',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20carving%20turn%20mountain&image_size=landscape_16_9'
  },
  {
    id: '5',
    title: '跳台与平花',
    description: '学习基础跳台动作和平花技巧，成为雪场上的自由式高手。',
    level: 'advanced',
    duration: 28,
    videoUrl: 'https://www.youtube.com/embed/example5',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20jump%20trick%20park%20style&image_size=landscape_16_9'
  },
  {
    id: '6',
    title: '粉雪滑行',
    description: '掌握在深雪中的滑行技巧，体验粉雪带来的极致浮力与乐趣。',
    level: 'advanced',
    duration: 25,
    videoUrl: 'https://www.youtube.com/embed/example6',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20powder%20deep%20snow%20backcountry&image_size=landscape_16_9'
  }
];

export const equipment: Equipment[] = [
  {
    id: '1',
    name: '全能单板',
    category: 'snowboard',
    brand: 'Burton',
    price: 3999,
    rating: 4.6,
    description: '适合各种雪况的全能板，软硬适中，适合初中级滑手。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20burton%20all%20mountain%20winter%20sports%20equipment&image_size=portrait_4_3'
  },
  {
    id: '2',
    name: '公园板',
    category: 'snowboard',
    brand: 'Capita',
    price: 3599,
    rating: 4.5,
    description: '专为公园和道具设计，弹性出色，适合平花和跳台。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20capita%20park%20terrain%20trick%20board&image_size=portrait_4_3'
  },
  {
    id: '3',
    name: '粉雪板',
    category: 'snowboard',
    brand: 'Jones',
    price: 4599,
    rating: 4.8,
    description: '宽板头设计，浮力出色，粉雪滑行的最佳选择。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20jones%20powder%20wide%20nose%20backcountry&image_size=portrait_4_3'
  },
  {
    id: '4',
    name: '单板鞋',
    category: 'boots',
    brand: 'ThirtyTwo',
    price: 1899,
    rating: 4.4,
    description: '舒适贴合的单板鞋，提供良好的支撑和反馈。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20boots%20thirtytwo%20winter%20sports&image_size=portrait_4_3'
  },
  {
    id: '5',
    name: '固定器',
    category: 'bindings',
    brand: 'Union',
    price: 1599,
    rating: 4.5,
    description: '轻量化设计，响应迅速，适合各种滑行风格。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20bindings%20union%20equipment&image_size=portrait_4_3'
  },
  {
    id: '6',
    name: '滑雪服',
    category: 'apparel',
    brand: 'Volcom',
    price: 1299,
    rating: 4.3,
    description: '防水透气滑雪服，保暖性能出色，款式时尚。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20jacket%20volcom%20winter%20outdoor&image_size=portrait_4_3'
  },
  {
    id: '7',
    name: '滑雪头盔',
    category: 'accessories',
    brand: 'Bern',
    price: 799,
    rating: 4.6,
    description: '安全认证头盔，保护你的头部安全，通风舒适。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20helmet%20bern%20safety%20winter&image_size=portrait_4_3'
  },
  {
    id: '8',
    name: '滑雪镜',
    category: 'accessories',
    brand: 'Dragon',
    price: 999,
    rating: 4.4,
    description: '防雾滑雪镜，提供清晰视野，兼容头盔。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=snowboard%20goggles%20dragon%20winter%20sports&image_size=portrait_4_3'
  }
];

export const resorts: Resort[] = [
  {
    id: '1',
    name: '长白山万达滑雪场',
    location: '吉林白山',
    country: '中国',
    elevation: 2180,
    trailCount: 37,
    liftCount: 7,
    rating: 4.6,
    priceRange: '中高',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=changbaishan%20ski%20resort%20china%20winter%20snow&image_size=landscape_16_9',
    description: '亚洲最大的滑雪场之一，拥有丰富的雪道和完善的设施，适合单板滑行。',
    priceHistory: [
      { year: 2020, adultPrice: 380, childPrice: 190 },
      { year: 2021, adultPrice: 400, childPrice: 200 },
      { year: 2022, adultPrice: 420, childPrice: 210 },
      { year: 2023, adultPrice: 440, childPrice: 220 },
      { year: 2024, adultPrice: 450, childPrice: 225 }
    ]
  },
  {
    id: '2',
    name: '崇礼云顶滑雪场',
    location: '河北张家口',
    country: '中国',
    elevation: 2100,
    trailCount: 41,
    liftCount: 6,
    rating: 4.5,
    priceRange: '中高',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chongli%20cloud%20top%20ski%20resort%20winter%20olympics&image_size=landscape_16_9',
    description: '2022北京冬奥会场地，设施先进，拥有出色的单板公园。',
    priceHistory: [
      { year: 2020, adultPrice: 360, childPrice: 180 },
      { year: 2021, adultPrice: 390, childPrice: 195 },
      { year: 2022, adultPrice: 450, childPrice: 225 },
      { year: 2023, adultPrice: 460, childPrice: 230 },
      { year: 2024, adultPrice: 480, childPrice: 240 }
    ]
  },
  {
    id: '3',
    name: '瑞士采尔马特',
    location: '采尔马特',
    country: '瑞士',
    elevation: 2400,
    trailCount: 360,
    liftCount: 34,
    rating: 4.9,
    priceRange: '高',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zermatt%20switzerland%20ski%20resort%20matterhorn%20alps&image_size=landscape_16_9',
    description: '阿尔卑斯山顶级雪场，拥有壮丽的马特洪峰景观，雪道丰富。',
    priceHistory: [
      { year: 2020, adultPrice: 520, childPrice: 260 },
      { year: 2021, adultPrice: 540, childPrice: 270 },
      { year: 2022, adultPrice: 560, childPrice: 280 },
      { year: 2023, adultPrice: 580, childPrice: 290 },
      { year: 2024, adultPrice: 600, childPrice: 300 }
    ]
  },
  {
    id: '4',
    name: '日本二世古',
    location: '北海道',
    country: '日本',
    elevation: 1088,
    trailCount: 37,
    liftCount: 18,
    rating: 4.7,
    priceRange: '中高',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=niseko%20japan%20ski%20resort%20powder%20snow&image_size=landscape_16_9',
    description: '世界著名的粉雪天堂，雪质绝佳，单板滑手的圣地。',
    priceHistory: [
      { year: 2020, adultPrice: 400, childPrice: 200 },
      { year: 2021, adultPrice: 410, childPrice: 205 },
      { year: 2022, adultPrice: 430, childPrice: 215 },
      { year: 2023, adultPrice: 440, childPrice: 220 },
      { year: 2024, adultPrice: 460, childPrice: 230 }
    ]
  },
  {
    id: '5',
    name: '加拿大惠斯勒',
    location: '不列颠哥伦比亚',
    country: '加拿大',
    elevation: 2182,
    trailCount: 200,
    liftCount: 37,
    rating: 4.8,
    priceRange: '高',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=whistler%20canada%20ski%20resort%20mountain&image_size=landscape_16_9',
    description: '北美最大的滑雪场，拥有世界顶级的单板公园。',
    priceHistory: [
      { year: 2020, adultPrice: 550, childPrice: 275 },
      { year: 2021, adultPrice: 560, childPrice: 280 },
      { year: 2022, adultPrice: 580, childPrice: 290 },
      { year: 2023, adultPrice: 590, childPrice: 295 },
      { year: 2024, adultPrice: 620, childPrice: 310 }
    ]
  },
  {
    id: '6',
    name: '新疆阿勒泰滑雪场',
    location: '新疆阿勒泰',
    country: '中国',
    elevation: 1000,
    trailCount: 28,
    liftCount: 4,
    rating: 4.4,
    priceRange: '中',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=altay%20xinjiang%20ski%20resort%20china%20winter&image_size=landscape_16_9',
    description: '中国雪都，拥有优质的粉雪资源，适合单板滑行。',
    priceHistory: [
      { year: 2020, adultPrice: 280, childPrice: 140 },
      { year: 2021, adultPrice: 300, childPrice: 150 },
      { year: 2022, adultPrice: 320, childPrice: 160 },
      { year: 2023, adultPrice: 340, childPrice: 170 },
      { year: 2024, adultPrice: 350, childPrice: 175 }
    ]
  }
];

export const equipmentCategories = [
  { id: 'all', name: '全部' },
  { id: 'snowboard', name: '单板' },
  { id: 'bindings', name: '固定器' },
  { id: 'boots', name: '雪鞋' },
  { id: 'apparel', name: '服装' },
  { id: 'accessories', name: '配件' }
];

export const tutorialLevels = [
  { id: 'all', name: '全部' },
  { id: 'beginner', name: '入门' },
  { id: 'intermediate', name: '进阶' },
  { id: 'advanced', name: '高级' }
];

export const countries = ['全部', '中国', '瑞士', '日本', '加拿大'];

export const ridingStyles = [
  { id: 'freestyle', name: '自由式/公园' },
  { id: 'allmountain', name: '全山' },
  { id: 'powder', name: '粉雪' },
  { id: 'carving', name: '刻滑' }
];
