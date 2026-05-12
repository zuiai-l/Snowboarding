import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Clock, Heart } from 'lucide-react';
import { tutorials, tutorialLevels } from '../data/mockData';
import { useFavoritesStore } from '../store/favoritesStore';

export function TutorialsPage() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('all');
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();

  const filteredTutorials = selectedLevel === 'all' 
    ? tutorials 
    : tutorials.filter(t => t.level === selectedLevel);

  const handleFavorite = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (isFavorite('tutorials', id)) {
      removeFavorite('tutorials', id);
    } else {
      addFavorite('tutorials', id);
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

  const getLevelLabel = (level: string) => {
    switch(level) {
      case 'beginner': return '入门';
      case 'intermediate': return '进阶';
      case 'advanced': return '高级';
      default: return level;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">滑雪教程</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从入门到高级，我们为您准备了全面的滑雪教程，帮助您掌握各项滑雪技能
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tutorialLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedLevel === level.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-blue-50'
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <div 
              key={tutorial.id}
              onClick={() => navigate(`/tutorials/${tutorial.id}`)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={tutorial.thumbnailUrl} 
                  alt={tutorial.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={(e) => handleFavorite(e, tutorial.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                    isFavorite('tutorials', tutorial.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite('tutorials', tutorial.id) ? 'fill-current' : ''}`} />
                </button>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white/90 p-5 rounded-full">
                    <Play className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(tutorial.level)} text-white`}>
                  {getLevelLabel(tutorial.level)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-800 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tutorial.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tutorial.duration}分钟
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">暂无该等级的教程</p>
          </div>
        )}
      </div>
    </div>
  );
}