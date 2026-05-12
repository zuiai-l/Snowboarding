import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Snowflake, Heart } from 'lucide-react';
import { useFavoritesStore } from '../store/favoritesStore';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const favorites = useFavoritesStore((state) => state.favorites);

  const navItems = [
    { id: 'home', label: '首页', path: '/' },
    { id: 'tutorials', label: '滑雪教程', path: '/tutorials' },
    { id: 'equipment', label: '装备指南', path: '/equipment' },
    { id: 'resorts', label: '雪场推荐', path: '/resorts' },
  ];

  const totalFavorites = 
    favorites.tutorials.length + favorites.equipment.length + favorites.resorts.length;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <Snowflake className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">滑雪世界</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === item.path ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate('/favorites')}
              className="relative flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span>我的收藏</span>
              {totalFavorites > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalFavorites}
                </span>
              )}
            </button>
          </nav>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                navigate('/favorites');
                setIsMenuOpen(false);
              }}
              className="relative w-full text-left px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                我的收藏
                {totalFavorites > 0 && (
                  <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {totalFavorites}
                  </span>
                )}
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}