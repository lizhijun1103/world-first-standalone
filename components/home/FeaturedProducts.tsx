import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.slice(0, 8).map((product) => (
        <div key={product.id} className="group bg-white border border-stone-100 rounded-2xl p-3 hover:shadow-xl hover:shadow-stone-200/50 hover:border-amber-200 transition-all duration-300 flex flex-col h-full">
          {/* Image Container */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-50 mb-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* B2B Badge */}
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              <span className="bg-amber-100/90 backdrop-blur-sm text-amber-800 text-[10px] px-2.5 py-1 rounded-full font-bold shadow-sm border border-amber-200">
                MOQ: 10
              </span>
              {(product.tags.includes("Best Seller") || product.tags.includes("Hot")) && (
                <span className="bg-red-500/90 text-white text-[10px] px-2.5 py-1 rounded-full font-bold shadow-sm">
                  Hot Seller
                </span>
              )}
            </div>
            
            {/* Action Overlay */}
            <div className="absolute bottom-3 right-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Button size="icon" className="h-10 w-10 rounded-full bg-slate-900 text-white hover:bg-amber-600 hover:text-white shadow-lg border-0">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-2 pb-2 flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-slate-900 line-clamp-2 min-h-[40px] leading-relaxed group-hover:text-amber-700 transition-colors mb-2">
              <Link href={`/product/${product.id}`}>
                {product.title}
              </Link>
            </h3>
            
            {/* Market Insight - B2B Focus */}
            <div className="mb-3 p-2 bg-blue-50 rounded-lg border border-blue-100 text-xs text-slate-600 relative">
              <span className="font-semibold text-blue-700 block mb-1">Market Insight:</span> 
              Reorder rate &gt; 40%. High margin item for boutique stores.
            </div>

            <div className="mt-auto">
               <div className="flex items-baseline gap-2 mb-1">
                 <span className="text-xs text-slate-400">Wholesale:</span>
                 <span className="text-lg font-extrabold text-amber-700">
                   Login
                 </span>
               </div>
               <div className="flex items-baseline gap-2">
                 <span className="text-xs text-slate-400">MSRP:</span>
                 <span className="text-sm text-slate-600 font-medium">
                   ${product.originalPrice.toFixed(2)}
                 </span>
                 <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded ml-auto">
                   Est. Margin: 50%
                 </span>
               </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
