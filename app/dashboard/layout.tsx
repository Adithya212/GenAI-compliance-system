"use client"
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Page 1", href: "/dashboard/page1" },
    { label: "Page 2", href: "/dashboard/page2" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-800 p-6 shadow-md flex flex-col border-r border-blue-200">
        {/* Logo / Title */}
        <h2 className="text-2xl font-extrabold mb-8 tracking-tight text-blue-700">
          Dashboard
        </h2>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isActive
                    ? "bg-blue-200 text-blue-900 shadow-sm"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer in sidebar */}
        <div className="mt-auto pt-6 border-t border-blue-200 text-sm text-blue-600">
          © {new Date().getFullYear()} My Company
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
