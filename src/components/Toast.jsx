import { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiCopy } from "react-icons/fi";

const ToastContext = createContext({
  showToast: () => {},
});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 2800);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-[120] flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-signal/40 bg-surface/90 backdrop-blur-md shadow-2xl shadow-signal/20 font-mono text-xs text-ink"
          >
            <span className="w-5 h-5 rounded-full bg-signal/20 text-signal flex items-center justify-center shrink-0">
              <FiCheck className="w-3.5 h-3.5" />
            </span>
            <span className="tracking-wide">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
