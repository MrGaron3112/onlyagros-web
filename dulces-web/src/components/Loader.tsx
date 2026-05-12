import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#f8f3ed] flex items-center justify-center z-[9999]">

      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: 'linear'
        }}
        className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full"
      />

    </div>
  )
}