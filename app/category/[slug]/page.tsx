"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/lib/data";
import { useLanguage } from "@/components/LanguageProvider";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { language, t } = useLanguage();
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) => p.categorySlug === params.slug
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 font-sans">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-amber-600 flex items-center gap-1 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              {t("nav.sourcing") || "Home"}
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{category.name[language]}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{category.name[language]}</h1>
          <p className="mt-2 text-gray-500">
            {language === "zh" 
              ? `找到 ${categoryProducts.length} 款产品` 
              : `Found ${categoryProducts.length} products`}
          </p>
        </div>

        {/* Product Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => {
              const currentTags = language === "zh" && product.tags_zh ? product.tags_zh : product.tags;
              
              return (
                <div
                  key={product.id}
                  className="group border border-stone-100 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 hover:border-amber-200 transition-all duration-300 bg-white flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square bg-stone-50 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title[language]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {currentTags && currentTags.length > 0 && (
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {currentTags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-red-500/90 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col">
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-sm font-bold text-slate-900 line-clamp-2 min-h-[40px] leading-relaxed group-hover:text-amber-700 transition-colors mb-2">
                        {product.title[language]}
                      </h3>
                    </Link>

                    {/* Market Insight */}
                    {product.marketInsight && (
                      <div className="mb-3 text-xs text-slate-500 bg-slate-50 p-1.5 rounded border border-slate-100">
                        {product.marketInsight[language]}
                      </div>
                    )}

                    <div className="mt-auto flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 mb-0.5">{language === "zh" ? "批发价" : "Wholesale"}:</span>
                        <span className="text-lg font-extrabold text-amber-700">
                          {t("product.login") || "Login"}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                            -50%
                          </span>
                        </div>
                      </div>
                      <Button size="icon" className="h-9 w-9 rounded-full shrink-0 bg-slate-900 hover:bg-amber-600 transition-colors shadow-lg">
                        <ShoppingCart className="h-4 w-4" />
                        <span className="sr-only">Add to cart</span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              {language === "zh" ? "暂无产品" : "No products found in this category."}
            </p>
            <Link href="/" className="inline-block mt-4 text-amber-600 font-medium hover:underline">
              {language === "zh" ? "返回首页" : "Back to Home"}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
