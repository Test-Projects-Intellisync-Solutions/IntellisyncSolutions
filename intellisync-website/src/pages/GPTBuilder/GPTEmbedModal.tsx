import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMBED_SNIPPET = `<!-- Intellisync GPT Builder – Example Embed -->\n<script\n  src=\"https://example.intellisync.ai/chatbot-embed.js\"\n  data-intellisync-id=\"abc123XYZ789\"\n  defer\n  type=\"module\">\n</script>`;

interface GPTEmbedModalProps {
  open: boolean;
  onClose: () => void;
}

export const GPTEmbedModal: React.FC<GPTEmbedModalProps> = ({ open, onClose }) => {
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#232946] via-[#1a1a2e] to-accent1 p-8 rounded-3xl shadow-2xl max-w-lg w-full border border-accent1"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-accent1 bg-[#232946] hover:bg-accent1/20 rounded-full p-2 transition-colors duration-200"
              onClick={onClose}
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <h2 className="text-2xl font-bold text-accent1 mb-4 text-center">Embed GPT Builder</h2>
            <p className="text-base text-white/80 mb-4 text-center">Copy and paste our pre-generated script code into your website to embed your custom GPT chat widget.</p>
            <div className="relative bg-[#16161a] border border-accent1/30 rounded-xl p-4 mb-6 overflow-x-auto">
  <pre className="text-accent1 text-sm font-mono whitespace-pre-wrap break-all select-all text-left">
    <code className="text-left">{EMBED_SNIPPET}</code>
  </pre>
</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
