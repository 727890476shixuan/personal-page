export default function Campus() {
  return (
    <section className="py-24 px-6 bg-dark/[0.02]">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">在校经历</h2>

        <div className="space-y-6">

          {/* Item 1 */}
          <div className="bg-white/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <h3 className="text-base font-medium text-dark">跨境电子商务本科班</h3>
              <span className="text-xs text-dark/40 font-normal">组织委员</span>
              <span className="text-xs text-dark/30 font-light">2022年9月 — 2025年6月</span>
            </div>
            <ul className="space-y-2 text-sm text-dark/50 font-light leading-relaxed">
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>组织5+场班级学术讲座、实习分享会及职业规划活动，收集分析活动数据并生成报告，提出优化建议</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>建立Excel数据模板，定期整理分析班级出勤、学习成绩、活动参与等数据，为班级管理提供决策支持</span>
              </li>
            </ul>
          </div>

          {/* Item 2 */}
          <div className="bg-white/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <h3 className="text-base font-medium text-dark">体育部</h3>
              <span className="text-xs text-dark/40 font-normal">干事</span>
              <span className="text-xs text-dark/30 font-light">2022年10月 — 2024年1月</span>
            </div>
            <ul className="space-y-2 text-sm text-dark/50 font-light leading-relaxed">
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>协助策划学校运动会、篮球比赛及趣味运动会等5+场大型校园体育活动</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>统筹场地布置、器材准备与人员安排，协调10+位志愿者参与，保障活动顺利开展</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
