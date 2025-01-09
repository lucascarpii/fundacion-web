import { motion } from "motion/react"

export function VideoSection() {
  return (
    <section className=" py-12 px-6" id="video">
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            className="w-full aspect-video"
            src="30aniversario.mp4"
            title="Video Fundación Neuquén Oeste"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}