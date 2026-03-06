import React, { useState } from 'react';
import { Mail, Phone, BookOpen, Briefcase, GraduationCap, User, Code, FileText, MonitorPlay, TrendingUp, Sparkles, PenTool, ChevronRight } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { category: "视频与视觉创作", items: "Premiere Pro, After Effects, Photoshop" },
    { category: "AI 效率与开发工具", items: "GPT-SoVITS, UVR5, MSST, Gemini, DeepSeek" },
    { category: "商业与数据分析", items: "数据分析 (杜邦分析, VaR模型), 市场营销, 消费者行为学" },
    { category: "基础素质", items: "CET-4, Office 高级应用, 强检索与跨领域自学能力" }
  ];

  const projects = [
    {
      id: 1, type: "media", title: "B站频道独立运营与AI漫剧创作", role: "独立UP主 / 策划 / 后期", icon: <MonitorPlay className="w-5 h-5 text-blue-500" />,
      desc: "独立运营B站账号，运用数据思维优化内容方向，探索AI辅助创作流。",
      highlights: [
        "在游戏区单条深度评价视频最高达到 10,000+ 播放量。",
        "核心互动率（点赞/评论/收藏）稳定在 10% 左右，系统掌握新媒体视频制作全流程。",
        "独立策划《京吹十二集，让人失望的一集！》等深度解析视频，并熟练使用 GPT-SoVITS 进行 AI 配音。",
        "前沿实践：结合个人连载网文小说《可以复生的我依然是个渣渣》，运用多项 AI 工具全流程独立跑通并生成了 AI 漫剧 Demo。"
      ], link: "https://space.bilibili.com/404609516/lists/5268017?type=season"
    },
    {
      id: 2, type: "finance", title: "阿里巴巴股票数据分析与财务建模", role: "数据分析项目核心", icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      desc: "独立开展上市企业财务分析与风险评估项目，展现扎实的经管专业功底。",
      highlights: [
        "独立收集并清洗阿里巴巴股票数据，构建 Z 评分模型，量化得出其处于低风险区间的评估结论。",
        "基于历史模拟法独立进行股票 VaR 实验，完成复杂数据处理并验证了模型的可行性。",
        "使用新杜邦分析法拆解正泰电器盈利趋势，深入分析 ROE (净资产收益率) 与经营差异率的核心动因。"
      ]
    },
    {
      id: 3, type: "content", title: "起点中文网长篇小说连载", role: "签约网文作者", icon: <PenTool className="w-5 h-5 text-purple-500" />,
      desc: "独立构建世界观与故事大纲，完成长篇连载，展现强文案能力。",
      highlights: [
        "连载原创小说《可以复生的我依然是个渣渣》，累计撰写超 70,000 字。",
        "通过长期高强度的文字创作，深度挖掘并满足受众心理需求，磨练了扎实的文笔与剧情编排、产品策划能力。"
      ], link: "/worldview.html"
    },
    {
      id: 4, type: "campus", title: "英语合作配音与百人动漫社管理", role: "项目统筹 / 组长", icon: <Briefcase className="w-5 h-5 text-orange-500" />,
      desc: "在校期间多次主导团队协作项目，具备出色的沟通协调与落地执行力。",
      highlights: [
        "策划《外卖的诱惑》等英语合作短剧，包揽字幕组、故事文案编写与视频剪辑工作，带领团队在8个大组中斩获第一名。",
        "担任动漫社后勤组组长，全流程统筹大型招新活动，高效协调各部门需求，精准落实物资预算与后勤保障工作。"
      ]
    }
  ];

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.type === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200 relative pb-24">

      {/* Hero Section */}
      <header className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20 relative z-10 md:flex md:items-center md:justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="shrink-0 relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-slate-300 shadow-sm bg-slate-100 flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Howard Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'/%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Actively looking for opportunities
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                黄通浩 <span className="text-slate-400 font-light text-3xl">Howard</span>
              </h1>
              <p className="mt-4 text-xl text-slate-600 font-medium">复合型创作者 | 视频剪辑 | 产品运营 | 金融学子</p>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-600">
                <a href="mailto:zuisakura@foxmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" /> zuisakura@foxmail.com
                </a>
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 17816837809
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> 三亚学院 · 本科
                </span>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 transition-all duration-200">
              查看作品集
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-indigo-600 shadow-md hover:shadow-lg transition-all duration-200">
              联系邀约
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* About Section */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
              <User className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">关于我 <span className="text-slate-400 text-lg font-normal ml-1">About Me</span></h2>
          </div>

          <div className="relative z-10">
            <p className="text-slate-600 leading-relaxed text-lg">
              我是一名拥有经管背景且极具网感的跨界应届生。既能用 <strong>PR/AE</strong> 创作出上万播放量的深度解析视频，也能用 <strong>数据分析模型</strong> 拆解复杂的财务报表。
              对 <strong>AI 效率工具（GPT-SoVITS、Gemini等）</strong> 有深入的实操经验，近期更结合个人连载小说全流程生成了 <strong>AI 漫剧 Demo</strong>。具备极强的自主学习能力与内容敏感度。无论是新媒体运营、产品策划还是内容后期，我都能快速上手并以结果为导向交付价值。
            </p>
          </div>
        </section>

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">教育背景</h2>
            </div>
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-indigo-100">
              <div className="absolute left-[-5px] top-2 w-3 h-3 bg-indigo-500 rounded-full ring-4 ring-white"></div>
              <h3 className="text-xl font-bold text-slate-800">三亚学院</h3>
              <div className="flex items-center gap-3 mt-1">
                <p className="text-indigo-600 font-semibold">经济与金融 · 本科</p>
                <span className="text-sm px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md">2022.09 - 2026.06</span>
              </div>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                <strong>核心课程：</strong>宏微观经济学、管理信息系统、统计学、财务管理、市场营销、消费者行为学等。
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <Code className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">能力图谱</h2>
            </div>
            <div className="space-y-5">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {skill.category}
                  </h4>
                  <p className="text-slate-600 text-sm pl-3.5 leading-relaxed group-hover:text-slate-900 transition-colors">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <section id="projects">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">项目经历与作品</h2>
            </div>

            {/* 现代化分段控制器 */}
            <div className="flex bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/50 backdrop-blur-sm self-start md:self-auto overflow-x-auto no-scrollbar">
              {[
                { id: 'all', label: '全部项目' },
                { id: 'media', label: '视频/运营' },
                { id: 'finance', label: '金融/数据' },
                { id: 'content', label: '文案/策划' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200/50'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {filteredProjects.map(project => (
              <div key={project.id} className="group bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="sm:flex justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-3 mb-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md">
                        {project.role}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">{project.desc}</p>
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all shrink-0">
                      查看作品 <ChevronRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-50">
                  <ul className="space-y-3">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="text-blue-400 mt-1 shrink-0"><ChevronRight className="w-4 h-4" /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 pt-16 pb-12 text-center mt-12">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4">期待与您的团队创造价值</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">我正在寻找 2026 届相关的产品运营、新媒体编导或 AI 衍生相关的实习与全职机会。</p>
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6 text-slate-300">
            <a href="mailto:zuisakura@foxmail.com" className="flex items-center gap-2 bg-slate-800/80 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-medium">
              <Mail className="w-5 h-5" /> zuisakura@foxmail.com
            </a>
            <span className="flex items-center gap-2 bg-slate-800/80 px-6 py-3 rounded-full font-medium">
              <Phone className="w-5 h-5" /> 17816837809
            </span>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-800/50 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Howard (黄通浩). All rights reserved.</p>
            <p className="mt-1 flex justify-center items-center gap-1">Built with React & Tailwind CSS <Sparkles className="w-3 h-3 text-yellow-500" /></p>
          </div>
        </div>
      </footer>
    </div >
  );
};

export default App;
