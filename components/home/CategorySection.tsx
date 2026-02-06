import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

export function CategorySection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.slug}`}
          className="group flex flex-col items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-100"
        >
          <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full bg-slate-100 group-hover:bg-orange-50 transition-colors duration-300 ring-4 ring-white shadow-sm">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <span className="text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
