import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.slice(0, 8).map((product) => (
        <div key={product.id} className="group bg-slate-50 border border-slate-100 rounded-2xl p-3 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-300">
          {/* Image Container */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-white mb-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {product.tags.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-slate-900/90 backdrop-blur-sm text-white text-[10px] px-2.5 py-1 rounded-full font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Add Button Overlay */}
            <div className="absolute bottom-3 right-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Button size="icon" className="h-10 w-10 rounded-full bg-slate-900 text-white hover:bg-orange-500 hover:text-white shadow-lg border-0">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Content */}
          <div className="px-2 pb-2 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 line-clamp-2 min-h-[40px] leading-relaxed group-hover:text-orange-600 transition-colors">
              <Link href={`/product/${product.id}`}>
                {product.title}
              </Link>
            </h3>
            
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold text-orange-600">
                ¥{product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-slate-400 line-through font-medium">
                  ¥{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
