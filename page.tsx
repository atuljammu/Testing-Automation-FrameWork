"use client";

import { useEffect } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useTelemetry } from "@/context/TelemetryContext";
import { Plus } from "lucide-react";

export default function Home() {
  const { addToCart } = useCart();
  const { trackAction } = useTelemetry();

  useEffect(() => {
    // trackAction("VIEW_PAGE", "Home", { page: "Product Listing" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl mb-4">
          Featured Collection
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Discover our curated selection of premium products designed to elevate your everyday life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              {/* Note: In a real app we'd use next/image with configured domains. Using standard img here for external mockup URLs without configuring next.config.js */}
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-slate-800 shadow-sm uppercase">
                {product.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-1">{product.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => {
                    addToCart(product);
                    trackAction('ADD_TO_CART', 'ProductListing', { productId: product.id, productName: product.name, price: product.price });
                  }}
                  className="bg-slate-900 text-white rounded-full p-3 hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 flex items-center justify-center transform active:scale-95 group-hover:-translate-y-1"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
