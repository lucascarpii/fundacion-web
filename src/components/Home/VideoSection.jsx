import { motion } from "motion/react"

export function VideoSection() {
  return (
    <section className="overflow-hidden py-16" id="feature3">
      <div className="relative">
        <div className="w-full mx-auto -z-10 absolute aspect-square max-w-4xl rounded-full -translate-y-1/2 left-0 top-0 -translate-x-2/3 bg-blue-600/30 blur-[100px] opacity-100" aria-hidden="true">
        </div>
        <div className="w-full mx-auto -z-10 absolute aspect-square max-w-4xl rounded-full bg-blue-600/30 blur-[100px] bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-100" aria-hidden="true">
        </div>
        <div className="mx-auto max-w-screen-xl">
          <div className="mx-auto text-center max-w-lg">
            <div className="flex justify-center">
              <p className="text-indigo-500 ">Data driven insights</p>
            </div>
            <h2 className="text-4xl mt-8">Understand your data</h2>
            <p className="mt-6 text-lg text-gray-500">Data is the key to success in the modern business world. Our app provides an easy to use interface to all of it.</p>
          </div>
          <div className="mx-auto max-w-4xl mt-6">
            <div className="relative rounded-2xl h-full bg-gradient-to-br from-blue-400 after:absolute after:bg-gray-100/30 after:inset-[1px] after:rounded-[calc(1rem-1px)]  via-gray-300/70   to-blue-400 via-40%">
              <iframe
                className="w-full relative aspect-video rounded-2xl z-10 p-2"
                src="/30aniversario.mp4"
                title="Video Fundación Neuquén Oeste"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

{/* 
<section className=" py-12 px-6" id="video">
  <div className="max-w-screen-xl mx-auto text-center">
  
  </div>
</section> */}