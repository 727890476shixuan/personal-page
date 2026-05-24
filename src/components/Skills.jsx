export default function Skills() {
  const certs = ['大学英语六级', '大学英语四级', '计算机二级']

  const skills = [
    '精通Excel、Word、PPT等办公软件',
    '熟练使用SPSS统计分析工具，能够完成数据整理、可视化分析及报告撰写',
    '掌握经济学与管理学知识，能够结合数据进行业务分析和市场趋势研判',
    '具备基础金融数据处理和商业分析能力',
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-center mb-12">技能与证书</h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Certs */}
          <div>
            <h3 className="text-sm font-medium text-dark/60 uppercase tracking-widest mb-4">资格证书</h3>
            <div className="flex flex-wrap gap-2">
              {certs.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 text-xs font-light text-dark/60 bg-white/60 border border-dark/10 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Professional skills */}
          <div>
            <h3 className="text-sm font-medium text-dark/60 uppercase tracking-widest mb-4">专业技能</h3>
            <ul className="space-y-2 text-sm text-dark/50 font-light leading-relaxed">
              {skills.map((skill, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-accent mt-0.5 shrink-0 text-xs">—</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
