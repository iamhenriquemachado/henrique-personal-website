import { Laptop, Code, Smartphone, Headphones } from "lucide-react"

export default function UsesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Uses</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Here's a list of hardware, software, and tools I use on a daily basis.
        </p>

        <div className="grid gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Laptop className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Hardware</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">MacBook Pro 16" (2021)</h3>
                <p className="text-muted-foreground">M1 Max, 64GB RAM, 2TB SSD</p>
              </li>
              <li>
                <h3 className="font-semibold">Dell UltraSharp 32" 4K Monitor</h3>
                <p className="text-muted-foreground">U3219Q</p>
              </li>
              <li>
                <h3 className="font-semibold">Keychron K3 Keyboard</h3>
                <p className="text-muted-foreground">Low profile mechanical keyboard with Gateron Brown switches</p>
              </li>
              <li>
                <h3 className="font-semibold">Logitech MX Master 3 Mouse</h3>
                <p className="text-muted-foreground">Wireless mouse with customizable buttons</p>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Development</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Visual Studio Code</h3>
                <p className="text-muted-foreground">Primary code editor with GitHub Dark theme</p>
              </li>
              <li>
                <h3 className="font-semibold">iTerm2 with Oh My Zsh</h3>
                <p className="text-muted-foreground">Terminal emulator with custom configuration</p>
              </li>
              <li>
                <h3 className="font-semibold">Docker</h3>
                <p className="text-muted-foreground">For containerized development environments</p>
              </li>
              <li>
                <h3 className="font-semibold">GitHub Copilot</h3>
                <p className="text-muted-foreground">AI pair programmer</p>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Mobile</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">iPhone 14 Pro</h3>
                <p className="text-muted-foreground">256GB, Midnight</p>
              </li>
              <li>
                <h3 className="font-semibold">iPad Pro 12.9" (2021)</h3>
                <p className="text-muted-foreground">M1, 512GB with Apple Pencil</p>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Audio</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <h3 className="font-semibold">Sony WH-1000XM4</h3>
                <p className="text-muted-foreground">Noise-cancelling headphones for focus work</p>
              </li>
              <li>
                <h3 className="font-semibold">Shure SM7B Microphone</h3>
                <p className="text-muted-foreground">For podcasts and video calls</p>
              </li>
              <li>
                <h3 className="font-semibold">Focusrite Scarlett 2i2</h3>
                <p className="text-muted-foreground">Audio interface</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

