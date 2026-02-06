import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

export function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">热门分类-</h2>
          <p className="text-gray-500">Pick Your Favorite</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="group flex flex-col items-center gap-4"
            >
              <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-[2rem] bg-orange-50 group-hover:bg-rose-50 transition-colors duration-300">
                <div className="absolute inset-2 overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="text-sm font-bold text-gray-700 group-hover:text-rose-500 transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
