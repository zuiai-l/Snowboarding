import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Mountain, TrendingUp, Heart, Share2, Clock, Calendar } from 'lucide-react';
import { resorts } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';

export function ResortDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const resort = resorts.find(r => r.id === id);

  if (!resort) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">雪场不存在</h1>
          <button
            onClick={() => navigate('/resorts')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            返回雪场列表
          </button>
        </div>
      </div>
    );
  }

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
        <button
          onClick={() => navigate('/resorts')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>返回雪场列表</span>
        </button>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src={resort.imageUrl} 
              alt={resort.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriceColor(resort.priceRange)}`}>
                  {resort.priceRange}档
                </span>
                <div className="flex items-center gap-1 text-white">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-bold">{resort.rating}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{resort.name}</h1>
              <div className="flex items-center gap-1 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>{resort.location}, {resort.country}</span>
              </div>
            </div>
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <button
                onClick={() => {
                  if (isFavorite('resorts', resort.id)) {
                    removeFavorite('resorts', resort.id);
                  } else {
                    addFavorite('resorts', resort.id);
                  }
                }}
                className={`p-3 rounded-full transition-colors ${
                  isFavorite('resorts', resort.id) 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite('resorts', resort.id) ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <Mountain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-slate-800">{resort.trailCount}</span>
                <p className="text-sm text-gray-500">雪道数量</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-slate-800">{resort.elevation}</span>
                <p className="text-sm text-gray-500">海拔(m)</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-slate-800">{resort.liftCount}</span>
                <p className="text-sm text-gray-500">缆车数量</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 text-center">
                <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <span className="text-2xl font-bold text-slate-800">{resort.rating}</span>
                <p className="text-sm text-gray-500">评分</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">雪场介绍</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{resort.description}</p>

                <h3 className="text-xl font-bold text-slate-800 mb-4">雪道类型</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg text-center">初级道 25%</div>
                  <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-center">中级道 45%</div>
                  <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg text-center">高级道 20%</div>
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg text-center">专家道 10%</div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">设施服务</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    停车场
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    餐饮服务
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    滑雪学校
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    装备租赁
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    酒店住宿
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    儿童乐园
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  开放时间
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">周一至周五</span>
                    <span className="text-slate-800">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">周六至周日</span>
                    <span className="text-slate-800">08:30 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">节假日</span>
                    <span className="text-slate-800">08:00 - 18:30</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-2">门票价格</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">成人单日票</span>
                      <span className="text-blue-600 font-bold">¥{resort.priceRange === '低' ? '200' : resort.priceRange === '中' ? '350' : resort.priceRange === '中高' ? '450' : '600'}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">儿童单日票</span>
                      <span className="text-blue-600 font-bold">¥{resort.priceRange === '低' ? '100' : resort.priceRange === '中' ? '175' : resort.priceRange === '中高' ? '225' : '300'}+</span>
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                  立即预订
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}