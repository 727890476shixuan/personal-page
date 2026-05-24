import { Mail, Phone, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const iconClass = (name) =>
    `w-10 h-10 p-2 rounded-full transition-all duration-200 cursor-pointer ${
      hoveredIcon === name ? 'text-accent bg-accent/10' : 'text-dark/40 bg-dark/5'
    }`

  return (
    <section id="contact" className="py-24 px-6 bg-dark/[0.02]">
      <div className="max-w-2xl mx-auto text-center reveal">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">联系我</h2>
        <p className="text-sm md:text-base text-dark/50 font-light mb-10 leading-relaxed">
          有任何问题、交流想法或合作意向，欢迎随时联系我
        </p>

        {/* Email */}
        <div className="flex items-center justify-center gap-3 mb-3 text-dark/60">
          <Mail size={16} className="text-accent" />
          <a href="mailto:727890476@qq.com" className="text-sm font-light hover:text-accent transition-colors">
            727890476@qq.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-center gap-3 mb-10 text-dark/60">
          <Phone size={16} className="text-accent" />
          <span className="text-sm font-light">13622449192</span>
        </div>

        {/* Social icons with labels */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {/* WeChat */}
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={iconClass('wechat')}
              onMouseEnter={() => setHoveredIcon('wechat')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <MessageCircle size={18} />
            </div>
            <span className="text-[11px] text-dark/35 font-light">微信：xieshixuan2003</span>
          </div>

          {/* QQ */}
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={iconClass('qq')}
              onMouseEnter={() => setHoveredIcon('qq')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <MessageCircle size={18} />
            </div>
            <span className="text-[11px] text-dark/35 font-light">QQ：727890476</span>
          </div>

          {/* QQ Email */}
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={iconClass('email')}
              onMouseEnter={() => setHoveredIcon('email')}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => window.open('mailto:727890476@qq.com')}
            >
              <Mail size={18} />
            </div>
            <span className="text-[11px] text-dark/35 font-light">QQ邮箱</span>
          </div>
        </div>
      </div>
    </section>
  )
}
