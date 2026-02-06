import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/lib/data";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) => p.categorySlug === params.slug
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-primary">
              首页
            </Link>
            <span>/</span>
            <span className="text-gray-900">{category.name}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          <p className="mt-2 text-gray-500">
            共找到 {categoryProducts.length} 件商品
          </p>
        </div>

        {/* Product Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="group border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px] hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                  </Link>

                  <div className="mt-3 flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-red-600">
                        ¥{product.price.toFixed(2)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-gray-400 line-through">
                          ¥{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button size="icon" className="h-8 w-8 rounded-full shrink-0">
                      <ShoppingCart className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed">
            <p className="text-gray-500">该分类下暂无商品</p>
            <Link href="/">
              <Button variant="outline" className="mt-4">
                返回首页
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
