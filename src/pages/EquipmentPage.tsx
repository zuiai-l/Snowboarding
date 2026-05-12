import { useState } from 'react';
import { Star, ShoppingCart, Heart, User, Scale, Mountain, Snowflake, Ruler } from 'lucide-react';
import { equipment, equipmentCategories, ridingStyles } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';

export function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [style, setStyle] = useState<string>('allmountain');
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const calculateBoardLength = () => {
    let baseLength = 150;
    
    if (weight < 50) baseLength = 140;
    else if (weight < 60) baseLength = 145;
    else if (weight < 70) baseLength = 150;
    else if (weight < 80) baseLength = 155;
    else if (weight < 90) baseLength = 160;
    else if (weight < 100) baseLength = 165;
    else baseLength = 170;

    if (style === 'freestyle') {
      baseLength -= 5;
    } else if (style === 'powder') {
      baseLength += 5;
    } else if (style === 'carving') {
      baseLength += 3;
    }

    return baseLength;
  };

  const calculateBindingAngle = () => {
    let frontAngle = 15;
    let backAngle = 0;

    if (style === 'freestyle') {
      frontAngle = 15;
      backAngle = -12;
    } else if (style === 'allmountain') {
      frontAngle = 18;
      backAngle = -6;
    } else if (style === 'powder') {
      frontAngle = 21;
      backAngle = 0;
    } else if (style === 'carving') {
      frontAngle = 30;
      backAngle = 0;
    }

    return { frontAngle, backAngle };
  };

  const calculateBindingWidth = () => {
    let width = 50;

    if (height < 160) width = 47;
    else if (height < 170) width = 49;
    else if (height < 180) width = 51;
    else if (height < 190) width = 53;
    else width = 55;

    return width;
  };

  const boardLength = calculateBoardLength();
  const { frontAngle, backAngle } = calculateBindingAngle();
  const bindingWidth = calculateBindingWidth();

  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(e => e.category === selectedCategory);

  const handleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (isFavorite('equipment', id)) {
      removeFavorite('equipment', id);
    } else {
      addFavorite('equipment', id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">装备指南</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            选择合适的装备是单板滑雪体验的关键，我们为您提供专业的装备选择指导
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Ruler className="w-6 h-6 text-blue-600" />
            装备计算器
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                身高 (cm)
              </label>
              <input
                type="range"
                min="140"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="text-center mt-2 text-lg font-semibold text-blue-600">{height} cm</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <Scale className="w-4 h-4" />
                体重 (kg)
              </label>
              <input
                type="range"
                min="40"
                max="120"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="text-center mt-2 text-lg font-semibold text-blue-600">{weight} kg</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <Mountain className="w-4 h-4" />
                滑行风格
              </label>
              <select
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {ridingStyles.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div className="text-sm text-slate-600 mb-2">推荐雪板长度</div>
              <div className="text-3xl font-bold text-blue-600">{boardLength} cm</div>
              <div className="text-xs text-slate-500 mt-2">
                ±2cm 为合理范围
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div className="text-sm text-slate-600 mb-2">固定器角度</div>
              <div className="text-3xl font-bold text-green-600">
                {frontAngle}° / {backAngle}°
              </div>
              <div className="text-xs text-slate-500 mt-2">
                前脚 / 后脚
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-sm text-slate-600 mb-2">固定器间距</div>
              <div className="text-3xl font-bold text-orange-600">{bindingWidth} cm</div>
              <div className="text-xs text-slate-500 mt-2">
                肩宽为参考基准
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {equipmentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={(e) => handleFavorite(e, item.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    isFavorite('equipment', item.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite('equipment', item.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg text-slate-800">{item.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.brand}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600">¥{item.price.toLocaleString()}</span>
                </div>
                <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span>查看详情</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">暂无该分类的装备</p>
          </div>
        )}
      </div>
    </div>
  );
}
