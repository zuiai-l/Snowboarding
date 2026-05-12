import { useNavigate } from 'react-router-dom';
import { Heart, Play, Star, MapPin, Trash2 } from 'lucide-react';
import { tutorials, equipment, resorts } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';

export function FavoritesPage() {
  const navigate = useNavigate();
  const { favorites, removeFavorite, clearAll } = useFavoritesStore();

  const favoriteTutorials = tutorials.filter(t => favorites.tutorials.includes(t.id));
  const favoriteEquipment = equipment.filter(e => favorites.equipment.includes(e.id));
  const favoriteResorts = resorts.filter(r => favorites.resorts.includes(r.id));

  const totalFavorites = favoriteTutorials.length + favoriteEquipment.length + favoriteResorts.length;

  const getLevelLabel = (level: string) => {
    switch(level) {
      case 'beginner': return '入门';
      case 'intermediate': return '进阶';
      case 'advanced': return '高级';
      default: return level;
    }
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">我的收藏</h1>
            <p className="text-gray-600">管理您收藏的教程、装备和雪场</p>
          </div>
          {totalFavorites > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-5 h-5" />
              <span>清空全部</span>
            </button>
          )}
        </div>

        {totalFavorites === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-2">暂无收藏</h2>
            <p className="text-gray-500 mb-6">开始收藏您喜欢的内容吧</p>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              浏览内容
            </button>
          </div>
        ) : (
          <>
            {favoriteTutorials.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Play className="w-6 h-6 text-blue-600" />
                  教程收藏 ({favoriteTutorials.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteTutorials.map((tutorial) => (
                    <div 
                      key={tutorial.id}
                      onClick={() => navigate(`/tutorials/${tutorial.id}`)}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={tutorial.thumbnailUrl} 
                          alt={tutorial.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFavorite('tutorials', tutorial.id);
                          }}
                          className="absolute top-3 right-3 p-2 bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white rounded-full transition-colors"
                        >
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                        <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)} text-white`}>
                          {getLevelLabel(tutorial.level)}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-slate-800 mb-2">{tutorial.title}</h3>
                        <p className="text-gray-500 text-sm">{tutorial.duration}分钟</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {favoriteEquipment.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">装备收藏 ({favoriteEquipment.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteEquipment.map((item) => (
                    <div 
                      key={item.id}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <button
                          onClick={() => removeFavorite('equipment', item.id)}
                          className="absolute top-3 right-3 p-2 bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white rounded-full transition-colors"
                        >
                          <Heart className="w-4 h-4 fill-current" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.brand}</span>
                          <span className="text-blue-600 font-medium">¥{item.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {favoriteResorts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">雪场收藏 ({favoriteResorts.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favoriteResorts.map((resort) => (
                    <div 
                      key={resort.id}
                      onClick={() => navigate(`/resorts/${resort.id}`)}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                    >
                      <div className="flex">
                        <div className="relative w-1/2 h-32 overflow-hidden">
                          <img 
                            src={resort.imageUrl} 
                            alt={resort.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFavorite('resorts', resort.id);
                            }}
                            className="absolute top-2 right-2 p-2 bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white rounded-full transition-colors"
                          >
                            <Heart className="w-4 h-4 fill-current" />
                          </button>
                        </div>
                        <div className="w-1/2 p-4">
                          <h3 className="font-bold text-slate-800 mb-1">{resort.name}</h3>
                          <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                            <MapPin className="w-3 h-3" />
                            <span>{resort.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{resort.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  );
}