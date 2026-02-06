import Link from "next/link"
import { ShoppingBag, TrendingUp, ShieldCheck, Star } from "lucide-react"
import { CategorySection } from "@/components/home/CategorySection"
import { FeaturedProducts } from "@/components/home/FeaturedProducts"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-md fixed w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <ShoppingBag className="h-6 w-6 text-black" />
          <span className="ml-2 text-lg font-bold tracking-tighter">MiniCat Standalone</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            新品
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            热销
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            关于我们
          </Link>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl -mr-20" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl -ml-20" />
          
          <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
            <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-rose-100 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-rose-500"></span>
                <span className="text-sm font-medium text-rose-600">New Collection 2024</span>
              </div>
              
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-gray-900">
                给郑老板 <span className="text-rose-500">最温暖</span> 的陪伴
              </h1>
              
              <p className="max-w-[600px] text-gray-500 md:text-xl leading-relaxed">
                精选全球优质宠粮与用品，让每一次互动都充满爱意。
                <br className="hidden md:inline" />
                科学养宠，从这里开始。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4">
                <Link
                  className="inline-flex h-14 items-center justify-center rounded-full bg-rose-500 px-10 text-base font-semibold text-white shadow-lg shadow-rose-200 transition-all hover:bg-rose-600 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2"
                  href="#featured"
                >
                  立即选购
                </Link>
                <Link
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white px-10 text-base font-semibold text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950"
                  href="/category/dry-food"
                >
                  浏览分类
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <CategorySection />

        {/* Featured Products Section */}
        <div id="featured">
          <FeaturedProducts />
        </div>

        {/* Features Section */}
        <section className="w-full py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择我们？</h2>
              <div className="w-16 h-1.5 bg-rose-500 rounded-full mx-auto" />
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="group p-8 bg-orange-50/50 rounded-3xl hover:bg-orange-50 transition-colors duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-orange-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">严选品质</h3>
                <p className="text-gray-500 leading-relaxed">
                  坚持每件商品亲测，只为给毛孩子提供最安全、健康的成长环境。
                </p>
              </div>
              <div className="group p-8 bg-blue-50/50 rounded-3xl hover:bg-blue-50 transition-colors duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-blue-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">正品保障</h3>
                <p className="text-gray-500 leading-relaxed">
                  官方授权渠道，全链路溯源，假一赔十，让您购物无忧。
                </p>
              </div>
              <div className="group p-8 bg-rose-50/50 rounded-3xl hover:bg-rose-50 transition-colors duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-rose-500 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">贴心服务</h3>
                <p className="text-gray-500 leading-relaxed">
                  7x24小时专业客服在线，养宠难题随时解答，做您身边的养宠顾问。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 MiniCat Standalone. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
