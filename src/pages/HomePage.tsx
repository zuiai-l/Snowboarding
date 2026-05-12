import { useNavigate } from 'react-router-dom';
import { Play, Star, MapPin, ChevronRight, Snowflake, BookOpen, ShoppingBag, Mountain } from 'lucide-react';
import { tutorials, resorts } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';
import { Heart } from 'lucide-react';

export function HomePage() {
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const handleFavorite = (e: React.MouseEvent, type: 'tutorials' | 'equipment' | 'resorts', id: string) => {
    e.stopPropagation();
    if (isFavorite(type, id)) {
      removeFavorite(type, id);
    } else {
      addFavorite(type, id);
    }
  };

  const featuredTutorials = tutorials.slice(0, 3);
  const popularResorts = resorts.slice(0, 4);

  const quickLinks = [
    { icon: BookOpen, label: '滑雪教程', path: '/tutorials', color: 'bg-blue-500' },
    { icon: ShoppingBag, label: '装备指南', path: '/equipment', color: 'bg-green-500' },
    { icon: Mountain, label: '雪场推荐', path: '/resorts', color: 'bg-orange-500' },
    { icon: Snowflake, label: '滑雪文化', path: '/', color: 'bg-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50">
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ski%20resort%20winter%20mountain%20snow%20landscape%20panoramic&image_size=landscape_16_9")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              探索滑雪的魅力
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              从初学者到高手，我们为您提供专业的滑雪教程、装备选择指导和全球顶级雪场推荐
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/tutorials')}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors"
              >
                开始学习
              </button>
              <button 
                onClick={() => navigate('/resorts')}
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 rounded-lg font-semibold transition-colors"
              >
                探索雪场
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">快速导航</h2>
            <p className="text-gray-600">选择您感兴趣的内容</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.path)}
                className="flex flex-col items-center gap-4 p-6 bg-slate-50 hover:bg-blue-50 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className={`${link.color} p-4 rounded-full`}>
                  <link.icon className="w-8 h-8 text-white" />
                </div>
                <span className="font-medium text-slate-700">{link.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">精选教程</h2>
              <p className="text-gray-600">学习滑雪的最佳起点</p>
            </div>
            <button 
              onClick={() => navigate('/tutorials')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              查看全部 <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTutorials.map((tutorial) => (
              <div 
                key={tutorial.id}
                onClick={() => navigate(`/tutorials/${tutorial.id}`)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tutorial.thumbnailUrl} 
                    alt={tutorial.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button
                    onClick={(e) => handleFavorite(e, 'tutorials', tutorial.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                      isFavorite('tutorials', tutorial.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isFavorite('tutorials', tutorial.id) ? 'fill-current' : ''}`} />
                  </button>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 p-4 rounded-full">
                      <Play className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                    tutorial.level === 'beginner' ? 'bg-green-500 text-white' :
                    tutorial.level === 'intermediate' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {tutorial.level === 'beginner' ? '入门' : tutorial.level === 'intermediate' ? '进阶' : '高级'}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{tutorial.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tutorial.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{tutorial.duration}分钟</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">热门雪场</h2>
              <p className="text-gray-600">全球顶级滑雪胜地</p>
            </div>
            <button 
              onClick={() => navigate('/resorts')}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              查看全部 <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularResorts.map((resort) => (
              <div 
                key={resort.id}
                onClick={() => navigate(`/resorts/${resort.id}`)}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={resort.imageUrl} 
                    alt={resort.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <button
                    onClick={(e) => handleFavorite(e, 'resorts', resort.id)}
                    className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
                      isFavorite('resorts', resort.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite('resorts', resort.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-800 mb-1">{resort.name}</h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{resort.location}, {resort.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{resort.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">{resort.trailCount}条雪道</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">准备好开始您的滑雪之旅了吗？</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            无论您是初学者还是资深滑雪爱好者，我们都能帮助您提升技能，发现新的雪场。
          </p>
          <button 
            onClick={() => navigate('/tutorials')}
            className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-colors"
          >
            立即开始
          </button>
        </div>
      </section>
    </div>
  );
}