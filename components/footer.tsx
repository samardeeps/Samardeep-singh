export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Samardeep Singh. All rights reserved.</p>
          <p className="mt-2">Built with Flutter mindset, crafted with Next.js</p>
        </div>
      </div>
    </footer>
  )
}
