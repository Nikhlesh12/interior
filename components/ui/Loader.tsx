"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => { setShow(false); onComplete(); }, 1550); return () => clearTimeout(t); }, [onComplete]);
  if (!show) return null;
  return <motion.div className="fixed inset-0 z-[200] grid place-items-center bg-[#11110f] text-[#eee9df]" exit={{ y: "-100%" }}>
    <div className="text-center">
      <svg className="mx-auto h-20 w-20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <motion.path d="M12 66L40 10L68 66M23 45H57" stroke="#b79067" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.1 }} />
        <motion.rect x="8" y="8" width="64" height="64" stroke="rgba(255,255,255,.25)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: .15 }} />
      </svg>
      <motion.p className="mt-5 text-[10px] uppercase tracking-[.38em]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>Atelier Arka</motion.p>
    </div>
  </motion.div>;
}
