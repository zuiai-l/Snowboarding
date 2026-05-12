import { Snowflake, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">滑雪世界</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              您的一站式滑雪信息平台，提供专业的滑雪教程、装备选择指导和全球顶级雪场推荐。
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">首页</a></li>
              <li><a href="/tutorials" className="text-gray-400 hover:text-blue-400 transition-colors">滑雪教程</a></li>
              <li><a href="/equipment" className="text-gray-400 hover:text-blue-400 transition-colors">装备指南</a></li>
              <li><a href="/resorts" className="text-gray-400 hover:text-blue-400 transition-colors">雪场推荐</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-400">
              <li>邮箱: info@skiworld.com</li>
              <li>电话: 400-888-8888</li>
              <li>地址: 北京市朝阳区</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 滑雪世界. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}