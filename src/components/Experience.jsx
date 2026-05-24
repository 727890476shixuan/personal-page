export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">实习经历</h2>

        <div className="bg-white/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
            <h3 className="text-base font-medium text-dark">广东启萌有限公司</h3>
            <span className="text-xs text-dark/40 font-normal whitespace-nowrap">学员成长管理师</span>
            <span className="text-xs text-dark/30 font-light">2022年8月 — 2023年8月</span>
          </div>
          <ul className="space-y-2 text-sm text-dark/50 font-light leading-relaxed">
            <li className="flex gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>收集整理学员训练数据，通过Excel和可视化工具分析技能进展，生成月度成长报告，制定个性化训练方案</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>策划并执行10+场校内篮球比赛与训练营活动，统计分析活动数据，优化场次安排与训练强度</span>
            </li>
            <li className="flex gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>跟踪30+名学员成长轨迹，结合技能增长曲线和体能数据调整训练内容，确保个性化指导精准落地</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
