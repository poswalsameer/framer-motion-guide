"use client"

import { motion } from "motion/react"

export default function MotionButton() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <motion.button
          // whileHover={{ opacity: 0.5 }}
          initial={{ borderBottomWidth: "4px", borderBottomColor: "#aaaaaa" }}
          whileTap={{ borderBottomWidth: "0px", borderBottomColor: "#aaaaaa", y: 4 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="px-8 py-4 bg-zinc-800 rounded-xl">
          Click Me
        </motion.button>
      </div>
    </div>
  )
}