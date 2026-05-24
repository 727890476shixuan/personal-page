export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-dark/[0.02]">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">教育经历</h2>

        <div className="relative border-l border-dark/15 pl-8 space-y-12">

          {/* Item 1 */}
          <div className="relative group">
            <div className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-cream transition-transform group-hover:scale-125" />
            <div className="space-y-1.5">
              <span className="text-xs text-accent font-normal tracking-wide">2026年9月 — 至今（预计）</span>
              <h3 className="text-base font-medium text-dark">
                广东外语外贸大学 <span className="text-dark/40 font-light">|</span> 经贸学院 <span className="text-dark/40 font-light">|</span> 产业经济学硕士
              </h3>
              <p className="text-sm text-dark/50 font-light">研究方向：区域产业发展</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative group">
            <div className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full bg-dark/20 ring-4 ring-cream transition-transform group-hover:scale-125" />
            <div className="space-y-1.5">
              <span className="text-xs text-dark/40 font-normal tracking-wide">2022年9月 — 2026年6月</span>
              <h3 className="text-base font-medium text-dark">
                广州航海学院 <span className="text-dark/40 font-light">|</span> 数字经贸学院 <span className="text-dark/40 font-light">|</span> 跨境电子商务本科
              </h3>
              <p className="text-sm text-dark/50 font-light">专业排名：前10%</p>
              <p className="text-sm text-dark/50 font-light">
                主修课程：经济学、管理学、统计学、数学、电子商务、管理信息系统、SPSS统计分析与应用
              </p>
              <p className="text-sm text-dark/50 font-light">
                荣誉奖项：第三届全国供应链管理师赛项省赛三等奖；外教社英语比赛校赛二等奖
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
