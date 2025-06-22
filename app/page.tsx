"use client";

import {
  Smartphone,
  ChevronRight,
  Zap,
  Shield,
  Clock,
  Target,
  Mail,
  CheckCircle,
  Globe,
  MessageSquare,
  Calendar,
  Music,
  Settings,
  Link as LinkIcon,
  Search,
  BarChart3,
  Sparkles,
  Bot,
  Phone,
  Image as ImageIcon,
  Users,
  Code,
  GraduationCap,
  ShoppingCart,
  ArrowRight,
  Check,
  Star,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { IntegrationCard } from "@/components/IntegrationCard";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessStep } from "@/components/ProcessStep";
import { TargetUserCard } from "@/components/TargetUserCard";
import { QuickFeatureCard } from "@/components/QuickFeatureCard";
import { StatusIndicator } from "@/components/StatusIndicator";
import { WaitlistModal } from "@/components/WaitlistModal";

// Translation object
const translations = {
  en: {
    badge: "AI-Powered Phone Assistant",
    headline1: "Meet Nexlify",
    headline2: "Your AI Phone Manager",
    subtitle1: "Transform your conversations into actions.",
    subtitle2: "Control apps, manage tasks, and streamline your digital life.",
    startNow: "Get Started Free",
    downloadApp: "Download App",
    learnMore: "Learn More",

    // How it works
    howItWorksTitle: "How does Nexlify work?",
    howItWorksSubtitle: "One chat interface to control everything on your phone",
    step1Title: "Chat Naturally",
    step1Desc: "Just tell Nexlify what you need",
    step2Title: "AI Processes",
    step2Desc: "Understands and executes your requests",
    step3Title: "Tasks Complete",
    step3Desc: "Actions performed across all your apps",

    // Process steps
    chatCommandTitle: "Natural Language Commands",
    chatCommandDesc:
      "Simply chat with Nexlify like you would with a personal assistant. No complex commands or technical knowledge required.",
    chatCommandExample: '"Create a task in Linear for the new feature" or "Find me a laptop on eBay under $500"',

    aiProcessTitle: "Intelligent Processing",
    aiProcessDesc:
      "Nexlify understands context and intent, connecting to the right apps and executing complex workflows seamlessly.",
    aiProcessExample: "App integration, task creation, real-time updates, and smart recommendations",

    executionTitle: "Instant Execution",
    executionDesc:
      "Watch as Nexlify completes tasks across multiple platforms, keeping you informed every step of the way.",
    executionExample: "Notion pages created, Linear tasks assigned, messages sent, and more",

    // Features
    whyNexlifyTitle: "Why choose",
    whyNexlifySubtitle: "Everything you need to manage your digital life in one place",

    feature1Title: "Universal App Control",
    feature1Desc: "Connect and control Notion, Linear, Vercel, eBay, and more through simple conversations.",

    feature2Title: "Phone Management",
    feature2Desc: "Send messages, manage calendars, control media, and adjust settings with voice or text commands.",

    feature3Title: "Smart Image Analysis",
    feature3Desc: "Upload photos for instant analysis - from document review to product identification.",

    feature4Title: "Real-time Updates",
    feature4Desc: "Get instant notifications and updates from all your connected apps and services.",

    feature5Title: "Professional Efficiency",
    feature5Desc: "Streamline workflows with concise, action-oriented responses designed for productivity.",

    feature6Title: "Secure & Private",
    feature6Desc: "Your data stays protected with user-authorized access and enterprise-grade security.",

    // Integrations
    integrationsTitle: "Powerful Integrations",
    integrationsSubtitle: "Connect with the tools you already use",

    // Target users
    targetUsersTitle: "Built for Everyone",
    professionals: "Professionals",
    professionalsDesc: "Optimize workflows and manage projects efficiently",
    developers: "Developers",
    developersDesc: "Monitor deployments and manage development tasks",
    students: "Students",
    studentsDesc: "Organize academic tasks and research",
    consumers: "Consumers",
    consumersDesc: "Smart shopping and digital life management",

    // CTA
    readyTitle: "Ready to Transform Your Phone?",
    readySubtitle: "Join thousands who are already working smarter with Nexlify",
    freeForever: "Free to start • No credit card required",
    availableOn: "Available on",

    // Footer
    copyright: "© 2024 Nexlify. All rights reserved.",
    premium: "Premium features available at nexlify.ai",

    // Additional
    rating: "Rating",
    analysisCompleted: "Task Completed",
    tasksCreated: "3 tasks created, 2 messages sent",

    // Demo section
    demoUserMessage: '"Create a new project in Notion for Q1 planning"',
    demoProcessing: 'Creating Notion page "Q1 Planning"...',
    demoCompleted: "✓ Page created with sections for Goals, Timeline, and Resources",
    statusConnected: "Connected",
    statusActive: "Active",
    statusSynced: "Synced",
    statusReady: "Ready",
  },
  pl: {
    badge: "Asystent telefonu z AI",
    headline1: "Poznaj Nexlify",
    headline2: "Twój menedżer telefonu AI",
    subtitle1: "Przekształć rozmowy w działania.",
    subtitle2: "Kontroluj aplikacje, zarządzaj zadaniami i usprawnij swoje cyfrowe życie.",
    startNow: "Zacznij za darmo",
    downloadApp: "Pobierz aplikację",
    learnMore: "Dowiedz się więcej",

    // How it works
    howItWorksTitle: "Jak działa Nexlify ?",
    howItWorksSubtitle: "Jeden interfejs czatu do kontrolowania wszystkiego na telefonie",
    step1Title: "Rozmawiaj naturalnie",
    step1Desc: "Po prostu powiedz Nexlify, czego potrzebujesz",
    step2Title: "AI przetwarza",
    step2Desc: "Rozumie i wykonuje Twoje polecenia",
    step3Title: "Zadania wykonane",
    step3Desc: "Akcje wykonywane we wszystkich aplikacjach",

    // Process steps
    chatCommandTitle: "Polecenia w języku naturalnym",
    chatCommandDesc:
      "Po prostu rozmawiaj z Nexlify jak z osobistym asystentem. Bez skomplikowanych poleceń czy wiedzy technicznej.",
    chatCommandExample: '"Stwórz zadanie w Linear dla nowej funkcji" lub "Znajdź mi laptopa na eBay poniżej 2000 zł"',

    aiProcessTitle: "Inteligentne przetwarzanie",
    aiProcessDesc:
      "Nexlify rozumie kontekst i intencje, łącząc się z odpowiednimi aplikacjami i wykonując złożone przepływy pracy.",
    aiProcessExample:
      "Integracja aplikacji, tworzenie zadań, aktualizacje w czasie rzeczywistym i inteligentne rekomendacje",

    executionTitle: "Natychmiastowe wykonanie",
    executionDesc: "Obserwuj, jak Nexlify wykonuje zadania na wielu platformach, informując Cię o każdym kroku.",
    executionExample: "Strony Notion utworzone, zadania Linear przypisane, wiadomości wysłane i więcej",

    // Features
    whyNexlifyTitle: "Dlaczego wybrać",
    whyNexlifySubtitle: "Wszystko, czego potrzebujesz do zarządzania cyfrowym życiem w jednym miejscu",

    feature1Title: "Uniwersalna kontrola aplikacji",
    feature1Desc: "Połącz i kontroluj Notion, Linear, Vercel, eBay i więcej poprzez proste rozmowy.",

    feature2Title: "Zarządzanie telefonem",
    feature2Desc: "Wysyłaj wiadomości, zarządzaj kalendarzem, kontroluj multimedia i ustawienia głosem lub tekstem.",

    feature3Title: "Inteligentna analiza obrazów",
    feature3Desc: "Prześlij zdjęcia do natychmiastowej analizy - od przeglądu dokumentów po identyfikację produktów.",

    feature4Title: "Aktualizacje w czasie rzeczywistym",
    feature4Desc: "Otrzymuj natychmiastowe powiadomienia i aktualizacje ze wszystkich połączonych aplikacji.",

    feature5Title: "Profesjonalna wydajność",
    feature5Desc: "Usprawnij przepływy pracy dzięki zwięzłym, zorientowanym na działanie odpowiedziom.",

    feature6Title: "Bezpieczny i prywatny",
    feature6Desc: "Twoje dane pozostają chronione dzięki autoryzowanemu dostępowi i bezpieczeństwu klasy enterprise.",

    // Integrations
    integrationsTitle: "Potężne integracje",
    integrationsSubtitle: "Połącz się z narzędziami, których już używasz",

    // Target users
    targetUsersTitle: "Stworzony dla każdego",
    professionals: "Profesjonaliści",
    professionalsDesc: "Optymalizuj przepływy pracy i efektywnie zarządzaj projektami",
    developers: "Programiści",
    developersDesc: "Monitoruj wdrożenia i zarządzaj zadaniami programistycznymi",
    students: "Studenci",
    studentsDesc: "Organizuj zadania akademickie i badania",
    consumers: "Konsumenci",
    consumersDesc: "Inteligentne zakupy i zarządzanie cyfrowym życiem",

    // CTA
    readyTitle: "Gotowy przekształcić swój telefon?",
    readySubtitle: "Dołącz do tysięcy, którzy już pracują mądrzej z Nexlify",
    freeForever: "Darmowy start • Bez karty kredytowej",
    availableOn: "Dostępny na",

    // Footer
    copyright: "© 2024 Nexlify. Wszystkie prawa zastrzeżone.",
    premium: "Funkcje premium dostępne na nexlify.ai",

    // Additional
    rating: "Ocena",
    analysisCompleted: "Zadanie wykonane",
    tasksCreated: "3 zadania utworzone, 2 wiadomości wysłane",

    // Demo section
    demoUserMessage: '"Stwórz nowy projekt w Notion dla planowania Q1"',
    demoProcessing: 'Tworzenie strony Notion "Planowanie Q1"...',
    demoCompleted: "✓ Strona utworzona z sekcjami: Cele, Harmonogram i Zasoby",
    statusConnected: "Połączono",
    statusActive: "Aktywny",
    statusSynced: "Zsynchronizowano",
    statusReady: "Gotowy",
  },
};

// Data for quick features
const getQuickFeatures = (t: any) => [
  {
    title: t.step1Title,
    description: t.step1Desc,
    icon: <MessageSquare className="h-4 w-4 sm:h-6 sm:w-6 text-indigo-600" />,
    gradient: "from-indigo-100 to-purple-100",
  },
  {
    title: t.step2Title,
    description: t.step2Desc,
    icon: <Zap className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600" />,
    gradient: "from-purple-100 to-pink-100",
  },
  {
    title: t.step3Title,
    description: t.step3Desc,
    icon: <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-pink-600" />,
    gradient: "from-pink-100 to-indigo-100",
  },
];

// Data for integrations
const integrations = [
  {
    name: "Notion",
    description: "Notes & Databases",
    icon: <Image src="/notion.webp" alt="Notion" width={100} height={100} />,
  },
  {
    name: "Linear",
    description: "Task Management",
    icon: <BarChart3 className="w-full h-full text-indigo-600" />,
  },
  {
    name: "Vercel",
    description: "Deployments",
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M50 20L80 80H20L50 20z" fill="currentColor" className="text-gray-800" />
      </svg>
    ),
  },
  {
    name: "eBay",
    description: "Shopping",
    icon: <ShoppingCart className="w-full h-full text-red-600" />,
  },
  {
    name: "Phone",
    description: "Calls & Messages",
    icon: <Phone className="w-full h-full text-green-600" />,
  },
  {
    name: "Calendar",
    description: "Scheduling",
    icon: <Calendar className="w-full h-full text-blue-600" />,
  },
  {
    name: "Media",
    description: "Music & Podcasts",
    icon: <Music className="w-full h-full text-purple-600" />,
  },
  {
    name: "X & More",
    description: "Social & Apps",
    icon: <LinkIcon className="w-full h-full text-gray-600" />,
  },
];

// Data for features
const getFeatures = (t: any) => [
  {
    title: t.feature1Title,
    description: t.feature1Desc,
    icon: <LinkIcon className="h-8 w-8 text-indigo-600" />,
    gradient: "from-indigo-100 to-blue-100",
  },
  {
    title: t.feature2Title,
    description: t.feature2Desc,
    icon: <Smartphone className="h-8 w-8 text-purple-600" />,
    gradient: "from-purple-100 to-pink-100",
  },
  {
    title: t.feature3Title,
    description: t.feature3Desc,
    icon: <ImageIcon className="h-8 w-8 text-pink-600" />,
    gradient: "from-pink-100 to-rose-100",
  },
  {
    title: t.feature4Title,
    description: t.feature4Desc,
    icon: <Clock className="h-8 w-8 text-green-600" />,
    gradient: "from-green-100 to-emerald-100",
  },
  {
    title: t.feature5Title,
    description: t.feature5Desc,
    icon: <Target className="h-8 w-8 text-orange-600" />,
    gradient: "from-orange-100 to-amber-100",
  },
  {
    title: t.feature6Title,
    description: t.feature6Desc,
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    gradient: "from-blue-100 to-indigo-100",
  },
];

// Data for process steps
const getProcessSteps = (t: any, language: string) => [
  {
    title: t.chatCommandTitle,
    description: t.chatCommandDesc,
    example: t.chatCommandExample,
    exampleLabel: language === "en" ? "Example" : "Przykład",
    icon: <MessageSquare className="h-6 w-6" />,
    gradient: "from-indigo-100 to-purple-100",
  },
  {
    title: t.aiProcessTitle,
    description: t.aiProcessDesc,
    example: t.aiProcessExample,
    exampleLabel: language === "en" ? "Capabilities" : "Możliwości",
    icon: <Bot className="h-6 w-6" />,
    gradient: "from-purple-100 to-pink-100",
  },
  {
    title: t.executionTitle,
    description: t.executionDesc,
    example: t.executionExample,
    exampleLabel: language === "en" ? "Results" : "Rezultaty",
    icon: <CheckCircle className="h-6 w-6" />,
    gradient: "from-green-100 to-emerald-100",
  },
];

// Data for target users
const getTargetUsers = (t: any) => [
  {
    title: t.professionals,
    description: t.professionalsDesc,
    icon: <Users className="h-12 w-12 text-indigo-600 mx-auto" />,
    gradient: "from-indigo-100/60 to-purple-100/60",
  },
  {
    title: t.developers,
    description: t.developersDesc,
    icon: <Code className="h-12 w-12 text-purple-600 mx-auto" />,
    gradient: "from-purple-100/60 to-pink-100/60",
  },
  {
    title: t.students,
    description: t.studentsDesc,
    icon: <GraduationCap className="h-12 w-12 text-pink-600 mx-auto" />,
    gradient: "from-pink-100/60 to-orange-100/60",
  },
  {
    title: t.consumers,
    description: t.consumersDesc,
    icon: <ShoppingCart className="h-12 w-12 text-orange-600 mx-auto" />,
    gradient: "from-orange-100/60 to-yellow-100/60",
  },
];

// Data for status indicators
const getStatusIndicators = (t: any) => [
  {
    service: "Notion",
    status: "connected" as const,
    color: "green" as const,
    translatedStatusText: t.statusConnected,
  },
  {
    service: "Linear",
    status: "active" as const,
    color: "blue" as const,
    translatedStatusText: t.statusActive,
  },
  {
    service: "Vercel",
    status: "synced" as const,
    color: "purple" as const,
    translatedStatusText: t.statusSynced,
  },
  {
    service: "eBay",
    status: "ready" as const,
    color: "orange" as const,
    translatedStatusText: t.statusReady,
  },
];

export default function Home() {
  const [language, setLanguage] = useState<"en" | "pl">("en");
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    if (lang === "pl") {
      setLanguage("pl");
    } else {
      setLanguage("en");
    }
  }, []);

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-gray-200">
          <Globe className="h-4 w-4 text-gray-600" />
          <Button
            variant={language === "en" ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage("en")}
            className="h-8 px-3 text-xs rounded-full text-gray-900"
          >
            EN
          </Button>
          <Button
            variant={language === "pl" ? "default" : "ghost"}
            size="sm"
            onClick={() => setLanguage("pl")}
            className="h-8 px-3 text-xs rounded-full text-gray-900"
          >
            PL
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]"></div>

        {/* Floating elements */}
        <div className="opacity-70">
          <div className="absolute top-20 left-10 animate-pulse">
            <div className="bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full p-4">
              <MessageSquare className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-pulse delay-300">
            <div className="bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full p-4">
              <Calendar className="h-8 w-8 text-purple-600" />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 animate-pulse delay-500">
            <div className="bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-full p-4">
              <Settings className="h-8 w-8 text-pink-600" />
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-indigo-200">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-gray-900">{t.headline1}</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
                {t.headline2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              {t.subtitle1}
              <br className="hidden md:block" />
              <span className="font-semibold text-gray-900">{t.subtitle2}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                onClick={openWaitlistModal}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto group"
              >
                <Bot className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t.startNow}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  className="px-8 sm:px-10 py-3 sm:py-4 text-base font-medium rounded-xl border-2 hover:bg-gray-50 text-black"
                >
                  {t.learnMore}
                </Button>
              </Link>
            </div>

            {/* Platform availability */}
            <div className="flex items-center justify-center gap-6 text-gray-500">
              <span className="text-sm">{t.availableOn}</span>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">iOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {getQuickFeatures(t).map((feature, index) => (
              <QuickFeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Detail Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.howItWorksTitle.split(" ").map((word, index) => {
                if (word === "Nexlify") {
                  return (
                    <span key={index} className="text-indigo-600">
                      {word + " "}
                    </span>
                  );
                }
                return <span key={index}>{word + " "}</span>;
              })}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.howItWorksSubtitle}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Process Steps */}
              <div className="space-y-8">
                {getProcessSteps(t, language).map((step, index) => (
                  <ProcessStep key={index} {...step} />
                ))}
              </div>

              {/* Right Side - Visual Demo */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
                  {/* Chat interface mockup */}
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-indigo-600 p-2 rounded-full">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-black">Nexlify</span>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-700">{t.demoUserMessage}</p>
                      </div>
                      <div className="bg-indigo-100 p-3 rounded-lg ml-8">
                        <p className="text-sm text-indigo-900">{t.demoProcessing}</p>
                      </div>
                      <div className="bg-indigo-100 p-3 rounded-lg ml-8">
                        <p className="text-sm text-indigo-900">{t.demoCompleted}</p>
                      </div>
                    </div>
                  </div>

                  {/* Status indicators */}
                  <div className="grid grid-cols-2 gap-3">
                    {getStatusIndicators(t).map(indicator => (
                      <StatusIndicator
                        key={indicator.service}
                        service={indicator.service}
                        status={indicator.status}
                        color={indicator.color}
                        translatedStatusText={indicator.translatedStatusText}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-2xl transform rotate-6"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.integrationsTitle}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.integrationsSubtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map(integration => (
                <IntegrationCard key={integration.name} {...integration} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.whyNexlifyTitle} <span className="text-indigo-600">Nexlify?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.whyNexlifySubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {getFeatures(t).map(feature => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.targetUsersTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {getTargetUsers(t).map(user => (
              <TargetUserCard key={user.title} {...user} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Star className="h-4 w-4" />
              <span className="text-sm font-medium">{t.freeForever}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.readyTitle}</h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">{t.readySubtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={openWaitlistModal}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 sm:px-12 lg:px-16 py-3 sm:py-4 lg:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto group"
              >
                <Bot className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t.startNow}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg mr-3">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Nexlify</span>
            </div>
            <div className="text-gray-400 text-sm">{t.copyright}</div>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} language={language} />

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
