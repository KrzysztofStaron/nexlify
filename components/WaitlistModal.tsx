import { useState } from "react";
import { X, Mail, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { addUser } from "@/app/actions/addEmail";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "pl";
}

export function WaitlistModal({ isOpen, onClose, language }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const translations = {
    en: {
      title: "Join the Nexlify Waitlist",
      subtitle: "Be the first to experience the future of AI phone management",
      emailPlaceholder: "Enter your email address",
      submitButton: "Join Waitlist",
      successTitle: "You're on the list!",
      successMessage: "We'll notify you as soon as Nexlify is available.",
      closeButton: "Close",
      errorTitle: "Something went wrong",
      errorMessage: "Please try again later.",
      retryButton: "Try Again",
      benefits: [
        "Early access to Nexlify",
        "Exclusive features and updates",
        "Priority customer support",
        "Special launch pricing",
      ],
    },
    pl: {
      title: "Dołącz do listy oczekujących Nexlify",
      subtitle: "Bądź pierwszym, który doświadczy przyszłości zarządzania telefonem AI",
      emailPlaceholder: "Wprowadź swój adres e-mail",
      submitButton: "Dołącz do listy",
      successTitle: "Jesteś na liście!",
      successMessage: "Powiadomimy Cię, gdy tylko Nexlify będzie dostępny.",
      closeButton: "Zamknij",
      errorTitle: "Coś poszło nie tak",
      errorMessage: "Spróbuj ponownie później.",
      retryButton: "Spróbuj ponownie",
      benefits: [
        "Wczesny dostęp do Nexlify",
        "Ekskluzywne funkcje i aktualizacje",
        "Priorytetowe wsparcie klienta",
        "Specjalne ceny startowe",
      ],
    },
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // Add user to Firebase database
      await addUser(email.trim(), `Waitlist signup from landing page - Language: ${language}`);

      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setEmail("");
        setError(null);
      }, 3000);
    } catch (err) {
      console.error("Error adding user to waitlist:", err);
      setIsSubmitting(false);
      setError("Failed to join waitlist");
    }
  };

  const handleRetry = () => {
    setError(null);
    setIsSuccess(false);
  };

  const handleClose = () => {
    onClose();
    setIsSuccess(false);
    setEmail("");
    setError(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <div className="bg-white/20 p-3 rounded-full w-fit mx-auto mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{t.title}</h2>
            <p className="text-indigo-100 text-sm">{t.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSuccess && !error ? (
            <>
              {/* Benefits */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">What you'll get:</h3>
                <ul className="space-y-2">
                  {t.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !email.trim()}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {language === "en" ? "Joining..." : "Dołączanie..."}
                    </>
                  ) : (
                    t.submitButton
                  )}
                </Button>
              </form>
            </>
          ) : error ? (
            /* Error State */
            <div className="text-center py-8">
              <div className="bg-red-100 p-4 rounded-full w-fit mx-auto mb-4">
                <AlertCircle className="h-12 w-12 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.errorTitle}</h3>
              <p className="text-gray-600 mb-6">{t.errorMessage}</p>
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={handleRetry}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                >
                  {t.retryButton}
                </Button>
                <Button onClick={handleClose} variant="outline" className="px-6 py-2">
                  {t.closeButton}
                </Button>
              </div>
            </div>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.successTitle}</h3>
              <p className="text-gray-600 mb-6">{t.successMessage}</p>
              <Button onClick={handleClose} variant="outline" className="px-6 py-2">
                {t.closeButton}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
