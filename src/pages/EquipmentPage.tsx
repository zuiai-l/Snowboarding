import { useState } from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { equipment, equipmentCategories } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';

export function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

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
            选择合适的装备是滑雪体验的关键，我们为您提供专业的装备选择指导
          </p>
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