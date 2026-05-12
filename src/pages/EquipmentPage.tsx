import { useState } from 'react';
import { User, Scale, Mountain, Ruler, Footprints, ArrowLeftRight, Layers } from 'lucide-react';
import { ridingStyles } from '../data/mockData';

export function EquipmentPage() {
  const [height, setHeight] = useState<number>(170);
  const [weight, setWeight] = useState<number>(70);
  const [style, setStyle] = useState<string>('allmountain');
  const [shoeSize, setShoeSize] = useState<number>(42);

  const calculateBoardLength = () => {
    let baseLength = height - 15;
    
    if (style === 'freestyle') {
      baseLength -= 3;
    } else if (style === 'powder') {
      baseLength += 5;
    } else if (style === 'carving') {
      baseLength += 3;
    }

    if (weight < 50) baseLength -= 3;
    else if (weight > 90) baseLength += 3;

    return baseLength;
  };

  const calculateBoardWidth = () => {
    if (shoeSize < 42) return { width: '正常', suitable: true };
    if (shoeSize <= 44) return { width: '正常或略宽', suitable: true };
    return { width: 'Wide版', suitable: true };
  };

  const calculateBindingAngle = () => {
    let frontAngle = 15;
    let backAngle = -15;

    if (style === 'freestyle') {
      frontAngle = 12;
      backAngle = -12;
    } else if (style === 'allmountain') {
      frontAngle = 15;
      backAngle = -15;
    } else if (style === 'powder') {
      frontAngle = 18;
      backAngle = -6;
    } else if (style === 'carving') {
      frontAngle = 18;
      backAngle = -6;
    }

    return { frontAngle, backAngle };
  };

  const calculateStanceWidth = () => {
    let baseWidth = Math.round(height * 0.29);
    
    if (style === 'freestyle') {
      baseWidth += 3;
    } else if (style === 'carving') {
      baseWidth -= 2;
    }

    return baseWidth;
  };

  const calculateFlex = () => {
    if (weight < 60) {
      if (style === 'freestyle') return { flex: 2, text: '软 (2-3)' };
      if (style === 'carving') return { flex: 5, text: '中等偏软 (5-6)' };
      return { flex: 4, text: '中软 (4-5)' };
    }
    
    if (weight < 80) {
      if (style === 'freestyle') return { flex: 4, text: '中软 (3-5)' };
      if (style === 'carving') return { flex: 7, text: '中等偏硬 (6-8)' };
      return { flex: 5, text: '中等 (5-6)' };
    }
    
    if (style === 'freestyle') return { flex: 5, text: '中等 (5-6)' };
    if (style === 'carving') return { flex: 8, text: '硬 (7-9)' };
    return { flex: 6, text: '中等偏硬 (6-7)' };
  };

  const calculateSetback = () => {
    if (style === 'powder') return { setback: '后移 2-5cm', reason: '提升粉雪浮力，防止前插' };
    return { setback: '居中', reason: '适合全山滑行' };
  };

  const calculateBoardShape = () => {
    if (style === 'freestyle') return { shape: 'True Twin', desc: '完全对称，适合公园和平花' };
    if (style === 'carving') return { shape: 'Directional', desc: '定向设计，适合刻滑和高速滑行' };
    if (style === 'powder') return { shape: 'Directional / Swallowtail', desc: '宽板头设计，粉雪浮力好' };
    return { shape: 'Twin Directional', desc: '略偏 directional，全能实用' };
  };

  const boardLength = calculateBoardLength();
  const boardWidth = calculateBoardWidth();
  const { frontAngle, backAngle } = calculateBindingAngle();
  const stanceWidth = calculateStanceWidth();
  const { flex, text: flexText } = calculateFlex();
  const { setback, reason } = calculateSetback();
  const { shape, desc } = calculateBoardShape();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-blue-50 pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">单板装备计算器</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            根据您的身体数据和滑行风格，计算最适合您的单板装备配置
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-600" />
            您的身体数据
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                身高
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
              <label className="block text-sm font-medium text-slate-700 mb-2">
                体重
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
              <label className="block text-sm font-medium text-slate-700 mb-2">
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

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                雪鞋尺码 (EU)
              </label>
              <input
                type="range"
                min="36"
                max="48"
                value={shoeSize}
                onChange={(e) => setShoeSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="text-center mt-2 text-lg font-semibold text-blue-600">EU {shoeSize}</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Ruler className="w-6 h-6 text-blue-400" />
            推荐配置
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-sm text-blue-300 mb-2">板长推荐</div>
              <div className="text-3xl font-bold text-white">{boardLength - 2} ~ {boardLength + 2} cm</div>
              <div className="text-xs text-slate-400 mt-2">
                {height}cm - 15cm + 风格调整
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-sm text-blue-300 mb-2">板腰宽度</div>
              <div className="text-3xl font-bold text-white">{boardWidth.width}</div>
              <div className="text-xs text-slate-400 mt-2">
                根据鞋码 EU {shoeSize}
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-sm text-blue-300 mb-2">硬度推荐</div>
              <div className="text-3xl font-bold text-white">{flexText}</div>
              <div className="text-xs text-slate-400 mt-2">
                1=最软, 10=最硬
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-sm text-green-300 mb-2">固定器角度</div>
              <div className="text-3xl font-bold text-white">
                +{frontAngle}° / {backAngle}°
              </div>
              <div className="text-xs text-slate-400 mt-2">
                前脚 / 后脚 (鸭子站)
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-sm text-green-300 mb-2">站距</div>
              <div className="text-3xl font-bold text-white">{stanceWidth - 2} ~ {stanceWidth + 2} cm</div>
              <div className="text-xs text-slate-400 mt-2">
                约等于肩宽
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-sm text-orange-300 mb-2">前后站位</div>
              <div className="text-3xl font-bold text-white">{setback}</div>
              <div className="text-xs text-slate-400 mt-2">
                {reason}
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 md:col-span-2 lg:col-span-3">
              <div className="text-sm text-purple-300 mb-2">推荐板型</div>
              <div className="text-3xl font-bold text-white">{shape}</div>
              <div className="text-sm text-slate-400 mt-2">
                {desc}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Layers className="w-6 h-6 text-blue-600" />
            配置说明
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">板长选择原则</h3>
              <ul className="space-y-1">
                <li>• 优先根据体重选择，保证浮力和支撑</li>
                <li>• 公园/平花：选短 2-5cm，更灵活</li>
                <li>• 刻滑：选长 2-6cm，更稳定</li>
                <li>• 粉雪：选长 + 宽，提升浮力</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">硬度选择原则</h3>
              <ul className="space-y-1">
                <li>• 软板 (1-4)：初学、平花、易压</li>
                <li>• 中板 (5-6)：全能、通用</li>
                <li>• 硬板 (7-10)：高速刻滑、大体重</li>
                <li>• 新手建议从软板开始</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">角度选择原则</h3>
              <ul className="space-y-1">
                <li>• 经典全能：+15° / -15°</li>
                <li>• 公园平花：+12° / -12° 或 +9° / -9°</li>
                <li>• 刻滑粉雪：+18° / -6° 或 +21° / -3°</li>
                <li>• 普通人从鸭子站开始最稳</li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-4">
              <h3 className="font-semibold text-slate-800 mb-2">常见误区</h3>
              <ul className="space-y-1">
                <li>• 板太长：换刃慢，腿累</li>
                <li>• 板太硬：压不动，动作变形</li>
                <li>• 站距太宽：膝盖压力大</li>
                <li>• 不要盲目模仿职业选手角度</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          <p>以上为通用推荐，仅供参考</p>
          <p className="mt-1">实际选择还需考虑力量、柔韧性等因素</p>
        </div>
      </div>
    </div>
  );
}
