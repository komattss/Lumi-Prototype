"use client";

import { motion } from "framer-motion";
import {
  Map,
  CheckSquare,
  ShoppingBag,
  User,
  ArrowRight,
  Cloud,
  Calculator,
  MessageCircle,
  Sparkles,
  Settings,
  ChevronDown,
  ChevronUp,
  Plus,
  Navigation,
  ListTodo,
  CloudRain,
  Clock,
  TrendingUp,
  Zap,
  Heart,
  CheckCircle2,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleIn,
  collapse,
  rotate,
} from "@/lib/animations";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselSlide } from "@/components/ui/carousel";
import { Footer } from "@/components/common/Footer";

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    title: "Lumi",
    description: "Mini-superapp untuk produktivitas dan lifestyle Anda",
    gradient: "from-purple-600 via-pink-500 to-red-500",
  },
  {
    id: 2,
    title: "Mulai Sekarang",
    description:
      "Navigasi lokasi â€¢ Kelola tugas â€¢ Cek cuaca â€¢ Hitung cepat",
    gradient: "from-blue-600 via-cyan-500 to-teal-500",
  },
  {
    id: 3,
    title: "Tetap Terhubung",
    description: "Chat dengan teman â€¢ Belanja online â€¢ Atur profil Anda",
    gradient: "from-green-600 via-emerald-500 to-lime-500",
  },
];

// Quick Actions - High-frequency daily tasks
const quickActions = [
  {
    label: "Cari Lokasi",
    description: "Temukan tempat terdekat",
    icon: Navigation,
    href: "/maps",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    hoverBg: "hover:bg-blue-500/20",
    textColor: "text-blue-500",
    stateInfo: "5 lokasi tersimpan",
  },
  {
    label: "Tambah Tugas",
    description: "Buat to-do baru",
    icon: Plus,
    href: "/tasks",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    hoverBg: "hover:bg-green-500/20",
    textColor: "text-green-500",
    stateInfo: "3 pending",
  },
  {
    label: "Cek Cuaca",
    description: "Lihat prakiraan hari ini",
    icon: CloudRain,
    href: "/weather",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
    hoverBg: "hover:bg-sky-500/20",
    textColor: "text-sky-500",
    stateInfo: "28Â°C Cerah",
  },
  {
    label: "Kirim Pesan",
    description: "Mulai chat cepat",
    icon: MessageCircle,
    href: "/chat",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    hoverBg: "hover:bg-pink-500/20",
    textColor: "text-pink-500",
    stateInfo: "2 unread",
  },
];

// Personalized sections - simulating user behavior
const recentlyUsed = [
  {
    title: "Weather",
    description: "Terakhir dibuka 5 menit lalu",
    icon: Cloud,
    href: "/weather",
    color: "from-sky-500 to-blue-500",
    timeAgo: "5m",
  },
  {
    title: "Tasks",
    description: "3 tugas menunggu",
    icon: CheckSquare,
    href: "/tasks",
    color: "from-green-500 to-emerald-500",
    timeAgo: "2h",
  },
  {
    title: "Maps",
    description: "Terakhir dicari: Cafe",
    icon: Map,
    href: "/maps",
    color: "from-blue-500 to-cyan-500",
    timeAgo: "1d",
  },
];

const continueActions = [
  {
    title: "Lanjutkan Chat",
    description: "2 pesan belum dibaca dari Alex",
    icon: MessageCircle,
    href: "/chat",
    color: "from-pink-500 to-rose-500",
    badge: "2",
  },
  {
    title: "Selesaikan Tugas",
    description: "Meeting Preparation - 80% selesai",
    icon: CheckSquare,
    href: "/tasks",
    color: "from-green-500 to-emerald-500",
    badge: "80%",
  },
];

const suggestedForYou = [
  {
    title: "Cek Cuaca Sore",
    description: "Biasanya Anda cek cuaca jam ini",
    icon: Cloud,
    href: "/weather",
    color: "from-sky-500 to-blue-500",
    reason: "Kebiasaan harian",
  },
  {
    title: "Belanja Kebutuhan",
    description: "Promo spesial minggu ini",
    icon: ShoppingBag,
    href: "/store",
    color: "from-purple-500 to-pink-500",
    reason: "Rekomendasi",
  },
];

// Primary modules - 4 core features
const primaryModules = [
  {
    title: "Maps",
    description: "Explore interactive maps and discover locations",
    icon: Map,
    href: "/maps",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:border-blue-500/50",
    textColor: "group-hover:text-blue-500",
    buttonColor: "text-blue-500",
    buttonText: "Jelajahi Peta",
  },
  {
    title: "Tasks",
    description: "Manage your to-do list and stay productive",
    icon: CheckSquare,
    href: "/tasks",
    color: "from-green-500 to-emerald-500",
    hoverColor: "hover:border-green-500/50",
    textColor: "group-hover:text-green-500",
    buttonColor: "text-green-500",
    buttonText: "Kelola Tugas",
  },
  {
    title: "Weather",
    description: "Real-time weather updates for any location",
    icon: Cloud,
    href: "/weather",
    color: "from-sky-500 to-blue-500",
    hoverColor: "hover:border-sky-500/50",
    textColor: "group-hover:text-sky-500",
    buttonColor: "text-sky-500",
    buttonText: "Lihat Cuaca",
  },
  {
    title: "Chat",
    description: "Connect and chat with friends instantly",
    icon: MessageCircle,
    href: "/chat",
    color: "from-pink-500 to-rose-500",
    hoverColor: "hover:border-pink-500/50",
    textColor: "group-hover:text-pink-500",
    buttonColor: "text-pink-500",
    buttonText: "Mulai Chat",
  },
];

// Secondary modules - less frequently used
const secondaryModules = [
  {
    title: "Calculator",
    description: "Advanced calculator with history",
    icon: Calculator,
    href: "/calculator",
    color: "from-violet-500 to-purple-500",
    hoverColor: "hover:border-violet-500/50",
    textColor: "group-hover:text-violet-500",
    buttonColor: "text-violet-500",
    buttonText: "Hitung",
  },
  {
    title: "Store",
    description: "Browse products and shop with ease",
    icon: ShoppingBag,
    href: "/store",
    color: "from-purple-500 to-pink-500",
    hoverColor: "hover:border-purple-500/50",
    textColor: "group-hover:text-purple-500",
    buttonColor: "text-purple-500",
    buttonText: "Belanja",
  },
  {
    title: "Profile",
    description: "View and manage your personal information",
    icon: User,
    href: "/profile",
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:border-orange-500/50",
    textColor: "group-hover:text-orange-500",
    buttonColor: "text-orange-500",
    buttonText: "Lihat Profil",
  },
  {
    title: "Settings",
    description: "Customize your experience and preferences",
    icon: Settings,
    href: "/settings",
    color: "from-gray-500 to-slate-500",
    hoverColor: "hover:border-gray-500/50",
    textColor: "group-hover:text-gray-500",
    buttonColor: "text-gray-500",
    buttonText: "Atur Preferensi",
  },
];

const modules = [
  {
    title: "Maps",
    description: "Explore interactive maps and discover locations",
    icon: Map,
    href: "/maps",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:border-blue-500/50",
    textColor: "group-hover:text-blue-500",
    buttonColor: "text-blue-500",
  },
  {
    title: "Tasks",
    description: "Manage your to-do list and stay productive",
    icon: CheckSquare,
    href: "/tasks",
    color: "from-green-500 to-emerald-500",
    hoverColor: "hover:border-green-500/50",
    textColor: "group-hover:text-green-500",
    buttonColor: "text-green-500",
  },
  {
    title: "Weather",
    description: "Real-time weather updates for any location",
    icon: Cloud,
    href: "/weather",
    color: "from-sky-500 to-blue-500",
    hoverColor: "hover:border-sky-500/50",
    textColor: "group-hover:text-sky-500",
    buttonColor: "text-sky-500",
  },
  {
    title: "Calculator",
    description: "Advanced calculator with history",
    icon: Calculator,
    href: "/calculator",
    color: "from-violet-500 to-purple-500",
    hoverColor: "hover:border-violet-500/50",
    textColor: "group-hover:text-violet-500",
    buttonColor: "text-violet-500",
  },
  {
    title: "Chat",
    description: "Connect and chat with friends instantly",
    icon: MessageCircle,
    href: "/chat",
    color: "from-pink-500 to-rose-500",
    hoverColor: "hover:border-pink-500/50",
    textColor: "group-hover:text-pink-500",
    buttonColor: "text-pink-500",
  },
  {
    title: "Store",
    description: "Browse products and shop with ease",
    icon: ShoppingBag,
    href: "/store",
    color: "from-purple-500 to-pink-500",
    hoverColor: "hover:border-purple-500/50",
    textColor: "group-hover:text-purple-500",
    buttonColor: "text-purple-500",
  },
  {
    title: "Profile",
    description: "View and manage your personal information",
    icon: User,
    href: "/profile",
    color: "from-orange-500 to-red-500",
    hoverColor: "hover:border-orange-500/50",
    textColor: "group-hover:text-orange-500",
    buttonColor: "text-orange-500",
  },
  {
    title: "Settings",
    description: "Customize your experience and preferences",
    icon: Settings,
    href: "/settings",
    color: "from-gray-500 to-slate-500",
    hoverColor: "hover:border-gray-500/50",
    textColor: "group-hover:text-gray-500",
    buttonColor: "text-gray-500",
  },
];

export default function HomePage() {
  const [showMoreTools, setShowMoreTools] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-3 py-4 md:px-4 md:py-8">
        {/* Hero - Brief Introduction */}
        <motion.div {...fadeInUp} className="mb-6 md:mb-10">
          <div className="h-[180px] md:h-[280px] relative">
            <Carousel
              slides={carouselSlides}
              autoPlay
              autoPlayInterval={5000}
            />
          </div>
        </motion.div>

        {/* Today at a Glance */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.08 }}
          className="mb-6 md:mb-10"
        >
          <div className="max-w-5xl mx-auto">
            <Card className="border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
              <CardContent className="p-4 md:p-5">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm md:text-base font-semibold text-foreground">
                        Today at a Glance
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {new Date().toLocaleDateString("id-ID", {
                          weekday: "long",
                          day: "numeric",
                          month: "short",
                        })}
                      </span>
                    </div>
                    <div className="space-y-1 text-xs md:text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
                        <span>
                          <strong className="text-foreground font-medium">
                            3 tugas
                          </strong>{" "}
                          menunggu penyelesaian
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
                        <span>
                          <strong className="text-foreground font-medium">
                            2 pesan baru
                          </strong>{" "}
                          dari Alex dan team
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-1 text-xs text-primary/70">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="font-medium">Aktif</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Quick Actions - High-Frequency Tasks */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.16 }}
          className="mb-8 md:mb-12 pb-6 md:pb-8 border-b border-border/50"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-4 md:mb-5">
              <h3 className="text-base md:text-xl font-semibold">Aksi Cepat</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Tugas yang sering Anda lakukan
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <motion.div
                    key={action.label}
                    {...scaleIn}
                    transition={{
                      ...scaleIn.transition,
                      delay: 0.16 + index * 0.08,
                    }}
                  >
                    <Link href={action.href}>
                      <div
                        className={`group ${action.bgColor} rounded-xl md:rounded-2xl p-4 md:p-5 transition-all duration-300 cursor-pointer min-h-[110px] md:min-h-0 hover:scale-[1.02] active:scale-[0.98]`}
                        style={{
                          boxShadow: "none",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          const color = action.color
                            .split(" ")[1]
                            .replace("to-", "");
                          e.currentTarget.style.boxShadow = `0 8px 20px -4px ${color.replace(
                            "500",
                            "500"
                          )}20`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div className="flex flex-col items-center text-center gap-2 md:gap-3">
                          <div
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-sm`}
                          >
                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm md:text-base text-foreground leading-tight">
                              {action.label}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                              {action.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Personalized & Contextual Content */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.24 }}
          className="mb-6 md:mb-10 pb-5 md:pb-6 border-b border-border/50"
        >
          <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
            {/* Recently Used */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-base md:text-lg font-semibold">
                  Baru Saja Digunakan
                </h3>
              </div>
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 rounded-xl bg-muted"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-muted rounded w-3/4"></div>
                            <div className="h-3 bg-muted rounded w-full"></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : recentlyUsed.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Belum ada aktivitas terbaru
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      Mulai gunakan Lumi untuk melihat riwayat
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  {recentlyUsed.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        {...fadeInUp}
                        transition={{
                          ...fadeInUp.transition,
                          delay: 0.24 + index * 0.08,
                        }}
                      >
                        <Link href={item.href}>
                          <Card className="group cursor-pointer transition-all duration-300 hover:border-primary/40 active:scale-[0.98]">
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <div
                                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                                >
                                  <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold text-sm mb-1">
                                    {item.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </p>
                                  <div className="flex items-center gap-1 mt-2">
                                    <span className="text-xs text-primary font-medium">
                                      {item.timeAgo}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Continue Where You Left Off */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-orange-500" />
                <h3 className="text-base md:text-lg font-semibold">
                  Lanjutkan Aktivitas
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {continueActions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      {...fadeInUp}
                      transition={{
                        ...fadeInUp.transition,
                        delay: 0.4 + index * 0.08,
                      }}
                    >
                      <Link href={item.href}>
                        <Card className="group cursor-pointer transition-all duration-300 hover:border-orange-500/40 active:scale-[0.98] bg-gradient-to-br from-card to-orange-500/5">
                          <CardContent className="p-4 md:p-5">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-start gap-3 flex-1">
                                <div
                                  className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                                >
                                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-semibold text-sm md:text-base mb-1">
                                    {item.title}
                                  </p>
                                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                              {item.badge && (
                                <div className="text-xs text-muted-foreground px-2.5 py-1 rounded bg-background/80 font-medium border border-border/40">
                                  {item.badge}
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Suggested For You */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <h3 className="text-base md:text-lg font-semibold">
                  Disarankan untuk Anda
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {suggestedForYou.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      {...scaleIn}
                      transition={{
                        ...scaleIn.transition,
                        delay: 0.56 + index * 0.08,
                      }}
                    >
                      <Link href={item.href}>
                        <Card className="group cursor-pointer transition-all duration-300 hover:border-purple-500/40 active:scale-[0.98] bg-gradient-to-br from-card to-purple-500/5">
                          <CardContent className="p-4 md:p-5">
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                              >
                                <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-1 gap-2">
                                  <p className="font-semibold text-sm md:text-base">
                                    {item.title}
                                  </p>
                                  <span className="text-[10px] text-muted-foreground/70 px-2 py-0.5 rounded bg-background/60 whitespace-nowrap font-medium">
                                    {item.reason}
                                  </span>
                                </div>
                                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Explore Features - Main Capabilities */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.32 }}
          className="mb-8 md:mb-12 pb-6 md:pb-8 border-b border-border/50"
        >
          <div className="max-w-5xl mx-auto">
            <div className="mb-5 md:mb-6">
              <h3 className="text-base md:text-xl font-bold mb-1">
                Jelajahi Fitur
              </h3>
              <p className="text-sm text-muted-foreground">
                Semua kemampuan utama Lumi
              </p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              {primaryModules.map((module) => {
                const Icon = module.icon;

                return (
                  <motion.div key={module.title} variants={staggerItem}>
                    <Link href={module.href}>
                      <Card
                        className={`group cursor-pointer overflow-hidden border transition-all duration-300 hover:border-primary/30 active:scale-[0.98] h-full`}
                      >
                        <CardHeader className="pb-3 p-4 md:p-5">
                          <div
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-2 md:mb-3`}
                          >
                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                          </div>
                          <CardTitle
                            className={`text-base md:text-lg transition-colors leading-tight`}
                          >
                            {module.title}
                          </CardTitle>
                          <CardDescription className="text-xs md:text-sm line-clamp-2 leading-relaxed">
                            {module.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0 pb-4 px-4 md:px-5">
                          <div
                            className={`flex items-center ${module.buttonColor} font-medium text-xs md:text-sm transition-transform duration-300 group-hover:translate-x-1`}
                          >
                            {module.buttonText}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Secondary Tools - Less Frequent Features */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
          className="mb-8 md:mb-12"
        >
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setShowMoreTools(!showMoreTools)}
              className="w-full flex items-center justify-between p-4 rounded-xl border border-muted hover:border-primary/40 transition-all duration-300 bg-card/50 backdrop-blur-sm mb-4 active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-500 to-slate-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-sm md:text-base">
                    Alat Tambahan
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {secondaryModules.length} fitur lainnya tersedia
                  </p>
                </div>
              </div>
              <motion.div
                animate={showMoreTools ? "expanded" : "collapsed"}
                variants={rotate}
              >
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </button>

            {/* Secondary Features - Compact Grid */}
            <motion.div
              initial={false}
              animate={showMoreTools ? "show" : "hidden"}
              variants={collapse}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-2">
                {secondaryModules.map((module, index) => {
                  const Icon = module.icon;

                  return (
                    <motion.div
                      key={module.title}
                      {...fadeInUp}
                      animate={
                        showMoreTools ? fadeInUp.animate : fadeInUp.initial
                      }
                      transition={{
                        ...fadeInUp.transition,
                        delay: index * 0.08,
                      }}
                    >
                      <Link href={module.href}>
                        <Card
                          className={`group cursor-pointer overflow-hidden border transition-all duration-300 hover:border-primary/30 active:scale-[0.98] h-full bg-card`}
                        >
                          <CardHeader className="p-4">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-2`}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle
                              className={`text-sm md:text-base transition-colors`}
                            >
                              {module.title}
                            </CardTitle>
                            <CardDescription className="text-xs line-clamp-2">
                              {module.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Optional Info - About Lumi */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...fadeInUp.transition }}
          className="mt-6 mb-10 md:mt-8 md:mb-12 pt-6 md:pt-8 border-t border-border/30"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-5">
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                Kenapa Lumi?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
                Semua yang Anda butuhkan dalam satu aplikasi modern
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              <Card className="text-center p-5 border transition-all duration-300 hover:border-primary/40">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-sm md:text-base mb-2">
                  Cepat & Efisien
                </h3>
                <p className="text-xs text-muted-foreground">
                  Performa maksimal untuk produktivitas harian Anda
                </p>
              </Card>
              <Card className="text-center p-5 border transition-all duration-300 hover:border-purple-500/40">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold text-sm md:text-base mb-2">
                  Semua dalam Satu
                </h3>
                <p className="text-xs text-muted-foreground">
                  8+ fitur terintegrasi tanpa perlu ganti aplikasi
                </p>
              </Card>
              <Card className="text-center p-5 border transition-all duration-300 hover:border-pink-500/40">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-sm md:text-base mb-2">
                  Akses Dimana Saja
                </h3>
                <p className="text-xs text-muted-foreground">
                  Responsive design untuk semua perangkat Anda
                </p>
              </Card>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                Pelajari lebih lanjut tentang Lumi
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Soft Closing Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...fadeInUp.transition }}
          className="mt-6 mb-10 md:mt-8 md:mb-12"
        >
          <div className="max-w-3xl mx-auto text-center px-4">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2">
              Anda sudah siap!
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Semua fitur Lumi ada di sini untuk Anda. Gunakan kapan saja Anda
              butuhkan.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2 text-muted-foreground/60">
              <Heart className="w-4 h-4" />
              <span className="text-xs md:text-sm">
                Dibuat dengan perhatian untuk Anda
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
