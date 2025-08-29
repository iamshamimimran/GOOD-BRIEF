import { useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FaMagic, FaRocket } from "react-icons/fa";
import { FaAccusoft } from "react-icons/fa6";

export default function NotificationModal() {
  const [show, setShow] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [show]);

  // Show on first visit
  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");
    if (!visited) {
      setShow(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />

      {/* Modal */}
      <div className="fixed inset-0 z-60 flex items-center justify-center px-4 sm:px-6">
        <div className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900/95 via-purple-900/30 to-gray-900/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
          {/* Close button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
          >
            <IoClose className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Animated Magic Icon */}
            <div className="relative mx-auto w-16 h-16 mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <FaAccusoft className="relative w-16 h-16 text-purple-400  mx-auto" />
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h2 className="text-md sm:text-sm bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                HOLY SH*T! NEW FEATURE ALERT!
              </h2>
              <p className="text-white/90 leading-relaxed">
                We just dropped something{" "}
                <span className="text-yellow-400">INSANE </span>
                that'll blow your freaking mind!
              </p>
            </div>

            {/* New Feature Highlight */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-4 sm:p-6 space-y-3">
              <div className="flex items-center justify-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  AI PROMPT IMPROVER
                </h3>
              </div>
              <p className="text-purple-200 text-xs">
                Type your messy, broken, spelling-mistake-filled prompts and
                watch our AI
                <span className="text-yellow-300">
                  {" "}
                  magically transform them
                </span>{" "}
                into professional masterpieces!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mt-2">
              {[
                { text: "Fixes ALL your spelling mistakes", icon: "🔥" },
                { text: "Makes you sound like a pro", icon: "🎯" },
                { text: "Lightning-fast brief generation", icon: "🚀" },
                { text: "Delivers mind-blowing results", icon: "🤩" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-800/30 rounded-lg p-2 hover:bg-gray-700/30 transition-colors"
                >
                  <span className="text-xs">{item.icon}</span>
                  <span className="text-white/80 text-xs">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Crazy Call-to-Action */}
            <div className="space-y-4 pt-2">
              <p className="text-xs text-gray-300">
                Example: Turn
                <span className="text-red-400 italic">
                  {" "}
                  "write me articel about ai with mistaks"
                </span>{" "}
                into
                <span className="text-green-400 font-medium">
                  {" "}
                  "Create a comprehensive article about artificial intelligence
                  with detailed explanations"
                </span>
              </p>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-3">
                <p className="text-yellow-200 text-xs">
                  LIMITED TIME: This feature is FREE and ready to use RIGHT NOW!
                </p>
              </div>

              <button
                onClick={() => setShow(false)}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-2 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25"
              >
                LET'S F*CKING GO! TRY IT NOW!
              </button>
            </div>

            {/* Bottom text */}
            <p className="text-xs text-gray-400 pt-2">
              Trust us, your future self will thank you for trying this sh*t!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
