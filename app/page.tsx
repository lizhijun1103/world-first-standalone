import Link from "next/link"
import { ShoppingBag, CheckCircle, Search, Truck, ShieldCheck, Star, Package, ArrowRight } from "lucide-react"
import { CategorySection } from "@/components/home/CategorySection"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
          <Link className="flex items-center gap-2" href="#">
            <div className="bg-slate-900 text-white p-1.5 rounded-lg">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Jim's Paw</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#process">
              选品流程
            </Link>
            <Link className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#featured">
              严选推荐
            </Link>
            <Link className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
              养宠指南
            </Link>
            <Link className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
              关于 Jims
            </Link>
          </nav>
          <div className="flex items-center gap-4">
             <Link className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900" href="#">
              登录
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
              href="#"
            >
              联系店主
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Professional & Trustworthy */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 border-b border-slate-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                    jimspaw.com 官方独立站
                  </div>
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900">
                    不只是卖货，<br />
                    更是您爱宠的 <span className="text-orange-500">专属买手</span>
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl leading-relaxed">
                    Jim's Paw 拒绝盲目铺货。每一件商品都经过“成分分析、实物亲测、长期试用”三道严选工序。我们帮您避坑，只留最好的。
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-orange-500 px-8 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    href="#featured"
                  >
                    浏览严选清单
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300"
                    href="#"
                  >
                    查看选品标准
                  </Link>
                </div>
                {/* Trust Badges */}
                <div className="flex items-center gap-6 text-sm text-slate-500 pt-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-500" />
                    <span>100% 正品溯源</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-orange-400" />
                    <span>店主亲测推荐</span>
                  </div>
                </div>
              </div>
              
              {/* Visual - High Quality Placeholder/Image */}
              <div className="mx-auto lg:mr-0 relative w-full max-w-[500px] aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
                {/* Fallback color block / Image */}
                <div className="absolute inset-0 bg-slate-900/5 z-10"></div>
                {/* Using a high quality Unsplash image for Pet Owner/Curator vibe */}
                <img 
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80" 
                  alt="Jim playing with a dog"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 z-20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                      J
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Jim's Selection</p>
                      <p className="text-xs text-slate-500">本月已亲测 23 款新品，仅上架 4 款</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop / Process Section - Inspired by JingSourcing "How it works" */}
        <section id="process" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                为什么选择 Jim's Paw?
              </h2>
              <p className="text-slate-500 text-lg">
                不同于普通宠物店，我们采用“买手制”运营模式。没有海量铺货，只有经过验证的精品。
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 mx-auto md:mx-0">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. 全球搜寻</h3>
                <p className="text-slate-500 leading-relaxed">
                  深入供应链源头，从原材料到生产工艺严格考察。我们不看品牌广告，只看产品配方表和检测报告。
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 mx-auto md:mx-0">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. 亲身试用</h3>
                <p className="text-slate-500 leading-relaxed">
                  所有上架商品，必须经过 Jim 自家宠物至少 2 周的试用。适口性、耐用度、安全性，一项不达标直接淘汰。
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 mx-auto md:mx-0">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. 严选交付</h3>
                <p className="text-slate-500 leading-relaxed">
                  精细化打包，附赠详细的使用建议卡片。不仅是收到一个包裹，更是收到一份专业的养宠方案。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section - Clean Blocks */}
        <section className="w-full py-20 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">核心品类</h2>
                <p className="text-slate-500 mt-2">精简分类，快速找到所需</p>
              </div>
              <Link href="#" className="text-orange-600 font-medium hover:underline flex items-center gap-1">
                查看全部 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <CategorySection />
          </div>
        </section>

        {/* Featured Products */}
        <section id="featured" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <span className="text-orange-600 font-semibold tracking-wider text-sm uppercase">Curated Collection</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">本月店主推荐</h2>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* CTA / Newsletter */}
        <section className="w-full py-20 bg-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">不确定买什么适合自家毛孩子？</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
              添加 Jim 的个人微信，根据您宠物的年龄、品种和健康状况，提供一对一的选品建议。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="h-12 px-8 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors">
                获取选品建议
              </button>
              <button className="h-12 px-8 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                阅读养宠博客
              </button>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
                <ShoppingBag className="h-5 w-5" />
                Jim's Paw
              </div>
              <p className="text-sm text-slate-500">
                jimspaw.com - 您的私人宠物选品顾问。<br/>
                用心选好物，陪伴毛孩子健康成长。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">购物指南</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-slate-900">如何订购</Link></li>
                <li><Link href="#" className="hover:text-slate-900">配送政策</Link></li>
                <li><Link href="#" className="hover:text-slate-900">退换货说明</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">关于我们</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-slate-900">品牌故事</Link></li>
                <li><Link href="#" className="hover:text-slate-900">选品标准</Link></li>
                <li><Link href="#" className="hover:text-slate-900">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">关注我们</h4>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="container px-4 md:px-6 mx-auto mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
            © 2024 Jim's Paw. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}