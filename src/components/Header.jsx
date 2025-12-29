"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  User,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
          >
            ShopSphere
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link
              href="/"
              className="hover:text-indigo-600  transition"
            >
              Home
            </Link>
            <Link href="/shop" className="hover:text-indigo-600 transition ">
              Shop
            </Link>
            <Link href="/categories" className="hover:text-indigo-600 transition">
              Categories
            </Link>
            <Link href="/new" className="hover:text-indigo-600 transition">
              New Arrivals
            </Link>
            <Link href="/sale" className="hover:text-pink-600 transition">
              Sale
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-9 pr-3 py-2 rounded-full border text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            {/* Cart */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 hover:text-indigo-600 transition" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* User */}
            <Link
              href="/account"
              className="hidden sm:flex items-center gap-2 hover:text-indigo-600 transition"
            >
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Account</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-5 py-4 space-y-4">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-full border text-sm"
            />

            <Link href="/" className="block font-semibold text-indigo-600">
              Home
            </Link>
            <Link href="/shop" className="block font-medium">
              Shop
            </Link>
            <Link href="/categories" className="block font-medium">
              Categories
            </Link>
            <Link href="/new" className="block font-medium">
              New Arrivals
            </Link>
            <Link href="/sale" className="block font-medium text-pink-600">
              Sale
            </Link>
            <Link href="/account" className="block font-medium">
              Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
