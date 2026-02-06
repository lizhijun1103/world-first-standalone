"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck, Truck, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { language, t } = useLanguage();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const currentTags = language === "zh" && product.tags_zh ? product.tags_zh : product.tags;

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link 
            href={`/category/${product.categorySlug}`} 
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {language === "zh" ? "返回分类" : "Back to Category"}
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 p-6 md:p-10">
            {/* Image Section */}
            <div className="relative aspect-square bg-stone-50 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.title[language]}
                fill
                className="object-cover"
                priority
              />
              {currentTags && currentTags.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {currentTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-red-500/90 text-white text-xs px-3 py-1 rounded-full font-bold shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  {product.title[language]}
                </h1>
                
                {/* Market Insight */}
                {product.marketInsight && (
                  <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100 mb-4">
                    <span className="font-bold mr-1">
                      {t("product.marketInsight") || (language === "zh" ? "市场洞察" : "Market Insight")}:
                    </span>
                    {product.marketInsight[language]}
                  </div>
                )}

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-sm text-slate-500 font-medium">
                    {language === "zh" ? "建议零售价" : "MSRP"}:
                  </span>
                  <span className="text-lg text-slate-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded font-bold">
                    {language === "zh" ? "高利润" : "High Margin"}
                  </span>
                </div>
                
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-slate-500 font-medium">
                    {language === "zh" ? "批发价" : "Wholesale Price"}:
                  </span>
                  <span className="text-4xl font-extrabold text-amber-600">
                    {t("product.login") || "Login to View"}
                  </span>
                </div>
              </div>

              {/* B2B Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm text-emerald-600">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{t("hero.trust.price")}</div>
                    <div className="text-slate-500">{language === "zh" ? "源头工厂认证" : "Verified Factory"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg border border-stone-100">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600">
                    <Truck className="h-4 w-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">{t("hero.trust.shipping")}</div>
                    <div className="text-slate-500">{language === "zh" ? "7天送达欧美" : "7-Day Delivery"}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-auto space-y-4">
                <Button className="w-full h-12 text-lg bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-slate-200">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {language === "zh" ? "加入采购单" : "Add to Purchase Order"}
                </Button>
                <p className="text-center text-xs text-slate-400">
                  {t("product.moq")}: 10 {language === "zh" ? "件起订" : "Units"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
