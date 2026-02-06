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

      <main className="flex-1 bg-[#fdfbf7]">
        {/* Hero Section - B2B Focus */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-b border-stone-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2">
                    <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm">
                      <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                      B2B Wholesale Platform
                    </div>
                    <div className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                      📈 Market Insight: Freeze-dried treats sales up 30% in Q3
                    </div>
                  </div>
                  
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-slate-900">
                    Boost Your Pet Aisle Profits with <span className="text-amber-600">Curated Best-Sellers</span>
                  </h1>
                  <p className="max-w-[600px] text-slate-600 md:text-xl leading-relaxed">
                    Source high-margin pet supplies directly from verified factories. 
                    Low MOQ. 7-day fast shipping to US/EU. We handle the QC and logistics, you handle the sales.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-amber-600 px-8 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition-all hover:bg-amber-700 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    href="#featured"
                  >
                    View Wholesale Catalog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-stone-200 bg-white px-8 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:bg-stone-50 hover:border-stone-300"
                    href="#"
                  >
                    Calculate ROI
                  </Link>
                </div>
                {/* Trust Badges - B2B */}
                <div className="flex items-center gap-6 text-sm text-slate-500 pt-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    <span>Factory Direct Price</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-blue-600" />
                    <span>Fast Global Shipping</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-amber-500" />
                    <span>High Margin Verified</span>
                  </div>
                </div>
              </div>
              
              {/* Visual - B2B Context (Warehouse/Retail Shelf) */}
              <div className="mx-auto lg:mr-0 relative w-full max-w-[500px] aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-stone-200">
                <div className="absolute inset-0 bg-slate-900/5 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1601647998802-9a57b08d0034?auto=format&fit=crop&w=1200&q=80" 
                  alt="Organized pet shop shelf"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Card - Business Metrics */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-stone-100 z-20">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-lg">
                      $
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Retail Partner Success</p>
                      <p className="text-xs text-slate-500">"Average margin increased by 40% after switching to Jim's Paw."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Prop / Process Section - B2B Sourcing */}
        <section id="process" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Sourcing Made Simple & Profitable
              </h2>
              <p className="text-slate-500 text-lg">
                We bridge the gap between Asian factories and Western retailers. No more Alibaba headaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative mb-16">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-stone-100 -z-10"></div>

              {/* Step 1 */}
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow relative">
                <div className="w-14 h-14 bg-stone-50 rounded-xl flex items-center justify-center text-stone-600 mb-6 mx-auto md:mx-0">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">1. Data-Driven Selection</h3>
                <p className="text-slate-500 leading-relaxed">
                  We analyze Amazon & Chewy trends to identify potential best-sellers. We only source products with proven market demand.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 mx-auto md:mx-0">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">2. Rigorous QC</h3>
                <p className="text-slate-500 leading-relaxed">
                  Our local team inspects every batch before shipment. We filter out defects so you don't face customer returns.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 mx-auto md:mx-0">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">3. Door-to-Door Delivery</h3>
                <p className="text-slate-500 leading-relaxed">
                  DDP shipping available. We handle customs and duties. Goods arrive directly at your store or warehouse.
                </p>
              </div>
            </div>

            {/* Quality Control Report (formerly Rejected List) */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-100 max-w-4xl mx-auto">
               <div className="flex flex-col md:flex-row items-center gap-6">
                 <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">
                   QC
                 </div>
                 <div className="flex-1 text-center md:text-left">
                   <h3 className="text-lg font-bold text-slate-900 mb-1">Strict Filter Policy</h3>
                   <p className="text-slate-600 text-sm">
                     For every product you see, we rejected <span className="font-bold text-red-500">20+</span> alternatives.
                     Last month, we disqualified 15 factories due to inconsistent packaging or delayed lead times.
                   </p>
                 </div>
                 <Link href="#" className="text-sm font-bold text-slate-900 hover:text-amber-600 underline underline-offset-4">
                   Read QC Standards
                 </Link>
               </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-20 bg-[#fdfbf7]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Trending Categories</h2>
                <p className="text-slate-500 mt-2">High-turnover categories for Q4</p>
              </div>
              <Link href="#" className="text-amber-600 font-medium hover:underline flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <CategorySection />
          </div>
        </section>

        {/* Featured Products - B2B */}
        <section id="featured" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-semibold tracking-wider text-sm uppercase">Wholesale Picks</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">Best Sellers for Small Retailers</h2>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* CTA / Newsletter - Wholesale Application */}
        <section className="w-full py-20 bg-[#1a1f2c] text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to stock your shelves?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
              Join 2,000+ independent retailers. Get access to our full catalog with wholesale pricing and MOQ details.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your business email" 
                  className="h-12 w-full sm:w-80 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button className="h-12 px-8 rounded-lg bg-amber-600 text-white font-bold hover:bg-amber-700 transition-colors">
                Apply for Account
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Questions? WhatsApp us: <span className="text-amber-400">+1 (555) 123-4567</span>
            </p>
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