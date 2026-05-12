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
}

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: '滑雪入门基础',
    description: '学习滑雪的基本姿势、安全知识和基本滑行技巧，适合完全没有滑雪经验的初学者。',
    level: 'beginner',
    duration: 15,
    videoUrl: 'https://www.youtube.com/embed/example1',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beginner%20ski%20lesson%20snow%20mountain%20winter&image_size=landscape_16_9'
  },
  {
    id: '2',
    title: '犁式刹车与转弯',
    description: '掌握犁式刹车和转弯技巧，这是滑雪初学者必须掌握的核心技能。',
    level: 'beginner',
    duration: 12,
    videoUrl: 'https://www.youtube.com/embed/example2',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20snowplow%20turn%20winter%20sport&image_size=landscape_16_9'
  },
  {
    id: '3',
    title: '平行式转弯技巧',
    description: '学习平行式转弯技术，提升你的滑雪水平，让滑行更加流畅优雅。',
    level: 'intermediate',
    duration: 20,
    videoUrl: 'https://www.youtube.com/embed/example3',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=parallel%20ski%20turn%20advanced%20technique&image_size=landscape_16_9'
  },
  {
    id: '4',
    title: '陡坡滑行技巧',
    description: '掌握在陡坡上的滑行技巧，提高你的控速和转向能力。',
    level: 'intermediate',
    duration: 18,
    videoUrl: 'https://www.youtube.com/embed/example4',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20steep%20slope%20mountain&image_size=landscape_16_9'
  },
  {
    id: '5',
    title: '高级自由式滑雪',
    description: '学习跳台和道具技巧，成为雪场上的自由式高手。',
    level: 'advanced',
    duration: 25,
    videoUrl: 'https://www.youtube.com/embed/example5',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=freestyle%20skiing%20jump%20snow%20park&image_size=landscape_16_9'
  },
  {
    id: '6',
    title: '粉雪滑雪技巧',
    description: '掌握在深雪中的滑行技巧，体验粉雪带来的极致乐趣。',
    level: 'advanced',
    duration: 22,
    videoUrl: 'https://www.youtube.com/embed/example6',
    thumbnailUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=powder%20skiing%20deep%20snow%20backcountry&image_size=landscape_16_9'
  }
];

export const equipment: Equipment[] = [
  {
    id: '1',
    name: '全能滑雪板',
    category: 'skis',
    brand: 'Atomic',
    price: 2999,
    rating: 4.5,
    description: '适合各种雪况的全能板，软硬适中，适合中高级滑雪者。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20board%20atomic%20winter%20sports%20equipment&image_size=portrait_4_3'
  },
  {
    id: '2',
    name: '滑雪靴',
    category: 'boots',
    brand: 'Salomon',
    price: 1599,
    rating: 4.3,
    description: '舒适贴合的滑雪靴，提供良好的支撑和操控感。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20boots%20salomon%20winter%20sports&image_size=portrait_4_3'
  },
  {
    id: '3',
    name: '滑雪服',
    category: 'apparel',
    brand: 'Columbia',
    price: 899,
    rating: 4.0,
    description: '防水透气滑雪服，保暖性能出色。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20jacket%20columbia%20winter%20outdoor&image_size=portrait_4_3'
  },
  {
    id: '4',
    name: '滑雪手套',
    category: 'accessories',
    brand: 'The North Face',
    price: 299,
    rating: 4.2,
    description: '防风防水手套，保暖舒适。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20gloves%20winter%20sports%20accessories&image_size=portrait_4_3'
  },
  {
    id: '5',
    name: '滑雪头盔',
    category: 'accessories',
    brand: 'Giro',
    price: 699,
    rating: 4.6,
    description: '安全认证头盔，保护你的头部安全。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20helmet%20giro%20safety%20winter&image_size=portrait_4_3'
  },
  {
    id: '6',
    name: '滑雪镜',
    category: 'accessories',
    brand: 'Oakley',
    price: 899,
    rating: 4.4,
    description: '防雾滑雪镜，提供清晰视野。',
    imageUrl: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20goggles%20oakley%20winter%20sports&image_size=portrait_4_3'
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
    description: '亚洲最大的滑雪场之一，拥有丰富的雪道和完善的设施。'
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
    description: '2022北京冬奥会场地，设施先进，雪道多样。'
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
    description: '阿尔卑斯山顶级雪场，拥有壮丽的马特洪峰景观。'
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
    description: '世界著名的粉雪天堂，雪质绝佳。'
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
    description: '北美最大的滑雪场，适合各种水平的滑雪者。'
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
    description: '中国雪都，拥有优质的粉雪资源。'
  }
];

export const equipmentCategories = [
  { id: 'all', name: '全部' },
  { id: 'skis', name: '滑雪板' },
  { id: 'boots', name: '滑雪靴' },
  { id: 'apparel', name: '滑雪服' },
  { id: 'accessories', name: '配件' }
];

export const tutorialLevels = [
  { id: 'all', name: '全部' },
  { id: 'beginner', name: '入门' },
  { id: 'intermediate', name: '进阶' },
  { id: 'advanced', name: '高级' }
];

export const countries = ['全部', '中国', '瑞士', '日本', '加拿大'];