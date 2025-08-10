import { useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

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
        <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
          {/* Close button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 group"
          >
            <IoClose className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Yooo, welcome!
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                You just discovered the best AI brief generator on the internet
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-4 sm:mt-6">
              {[
                "Lightning-fast brief generation",
                "Understands your style",
                "Delivers high-quality results",
                "Easy and intuitive to use",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <BiCheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/80 text-xs sm:text-sm">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
