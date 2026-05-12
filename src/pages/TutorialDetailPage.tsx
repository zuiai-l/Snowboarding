import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Heart, Share2 } from 'lucide-react';
import { tutorials } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';

export function TutorialDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const tutorial = tutorials.find(t => t.id === id);

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">教程不存在</h1>
          <button
            onClick={() => navigate('/tutorials')}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            返回教程列表
          </button>
        </div>
      </div>
    );
  }

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
        <button
          onClick={() => navigate('/tutorials')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>返回教程列表</span>
        </button>

        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src={tutorial.thumbnailUrl} 
              alt={tutorial.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(tutorial.level)} text-white`}>
                  {getLevelLabel(tutorial.level)}
                </span>
                <span className="flex items-center gap-1 text-white/80">
                  <Clock className="w-4 h-4" />
                  {tutorial.duration}分钟
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{tutorial.title}</h1>
              <p className="text-white/80">{tutorial.description}</p>
            </div>
            <div className="absolute top-6 right-6 flex items-center gap-3">
              <button
                onClick={() => {
                  if (isFavorite('tutorials', tutorial.id)) {
                    removeFavorite('tutorials', tutorial.id);
                  } else {
                    addFavorite('tutorials', tutorial.id);
                  }
                }}
                className={`p-3 rounded-full transition-colors ${
                  isFavorite('tutorials', tutorial.id) 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite('tutorials', tutorial.id) ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">教程内容</h2>
            
            <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden mb-8">
              <iframe
                width="100%"
                height="100%"
                src={tutorial.videoUrl}
                title={tutorial.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-slate-800 mb-4">学习目标</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>掌握滑雪的基本姿势和安全知识</li>
                <li>学会正确的滑行技巧</li>
                <li>了解滑雪装备的使用方法</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-4">步骤说明</h3>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li><strong>准备工作：</strong>穿戴好滑雪装备，检查装备是否合适。</li>
                <li><strong>基本姿势：</strong>双脚与肩同宽，膝盖微屈，重心向前。</li>
                <li><strong>练习滑行：</strong>从缓坡开始练习，感受雪板与雪面的接触。</li>
                <li><strong>刹车技巧：</strong>学习使用犁式刹车控制速度。</li>
                <li><strong>转弯练习：</strong>练习左右转弯，掌握平衡技巧。</li>
              </ol>

              <h3 className="text-xl font-bold text-slate-800 mb-4">注意事项</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>滑雪前做好热身运动，避免受伤</li>
                <li>遵守雪场规则，注意安全</li>
                <li>根据自己的水平选择合适的雪道</li>
                <li>天气不好时避免滑雪</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}