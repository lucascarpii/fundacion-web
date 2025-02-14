export function Videos() {
  return (
    <section class="grid md:grid-cols-2 max-w-screen-xl mx-auto px-4 gap-4 pb-4">
      <iframe
        className="rounded-xl aspect-video"
        width="100%"
        src="https://www.youtube.com/embed/ha5W5iJ-XH8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""></iframe>
      <iframe
        className="rounded-xl aspect-video"
        width="100%"
        src="https://www.youtube.com/embed/IkjUBuq48F8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""></iframe>
    </section>
  )
}