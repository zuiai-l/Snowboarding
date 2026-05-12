import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Heart, Mountain, TrendingUp } from 'lucide-react';
import { resorts, countries } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';

export function ResortsPage() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState('全部');
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const filteredResorts = selectedCountry === '全部' 
    ? resorts 
    : resorts.filter(r => r.country === selectedCountry);

  const handleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (isFavorite('resorts', id)) {
      removeFavorite('resorts', id);
    } else {
      addFavorite('resorts', id);
    }
  };

  const getPriceColor = (priceRange: string) => {
    switch(priceRange) {
      case '低': return 'bg-green-100 text-green-700';
      case '中': return 'bg-yellow-100 text-yellow-700';
      case '中高': return 'bg-orange-100 text-orange-700';
      case '高': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">雪场推荐</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            探索全球顶级滑雪胜地，找到适合您的完美雪场
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCountry === country
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResorts.map((resort) => (
            <div 
              key={resort.id}
              onClick={() => navigate(`/resorts/${resort.id}`)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={resort.imageUrl} 
                    alt={resort.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button
                    onClick={(e) => handleFavorite(e, resort.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                      isFavorite('resorts', resort.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite('resorts', resort.id) ? 'fill-current' : ''}`} />
                  </button>
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getPriceColor(resort.priceRange)}`}>
                    {resort.priceRange}档
                  </span>
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl text-slate-800 mb-2">{resort.name}</h3>
                    <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{resort.location}, {resort.country}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resort.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-bold text-lg">{resort.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Mountain className="w-4 h-4" />
                        <span className="text-sm">{resort.trailCount}条雪道</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-blue-600">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">{resort.elevation}m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResorts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">暂无该地区的雪场</p>
          </div>
        )}
      </div>
    </div>
  );
}