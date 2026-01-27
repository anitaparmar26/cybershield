"use client"

export default function DownloadButton() {
  return (
   <div className="fixed bottom-0 right-0 m-6 z-50">
     <a href="https://anitaparmar26.github.io/cybershield/" target="_blank"
                className="border-2 border-accent bg-transparent rounded-full px-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-10 has-[>svg]:px-4 bg-gradient-to-r from-primary to-accent text-background font-semibold hover:shadow-lg  cursor-pointer"
              >
                Download Now
              </a>
   </div>
  )
}
            