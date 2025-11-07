import { Button } from "@fusion/design-system"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@fusion/design-system"
import { Input } from "@fusion/design-system"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Fusion Design System + Builder.io</h1>
          <p className="text-muted-foreground text-lg">
            A modern design system built with React, TypeScript, and Tailwind CSS - now with visual editing!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>🎨 Design System</CardTitle>
              <CardDescription>Pre-built components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                All your Fusion components are ready to use in code or visually in Builder.io.
              </p>
              <div className="flex gap-2">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline" asChild>
                  <Link href="/components">View All Components →</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🚀 Builder.io Integration</CardTitle>
              <CardDescription>Visual editing powered</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Create pages visually by dragging and dropping your Fusion components.
              </p>
              <div className="space-y-2">
                <ol className="text-sm list-decimal list-inside space-y-1 text-muted-foreground">
                  <li>Add your Builder.io API key to .env.local</li>
                  <li>Run the app and open Builder.io</li>
                  <li>Start building with Fusion components</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>📝 Getting Started with Builder.io</CardTitle>
            <CardDescription>Set up your visual editing environment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold mb-2">1. Get your API key</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Sign up at{" "}
                  <a 
                    href="https://builder.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    builder.io
                  </a>{" "}
                  and get your public API key
                </p>
                <Input placeholder="Your API key" disabled />
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">2. Add to environment</h3>
                <p className="text-sm text-muted-foreground">
                  Add <code className="bg-muted px-1 py-0.5 rounded">NEXT_PUBLIC_BUILDER_API_KEY</code> to your .env.local file
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">3. Available Components</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Fusion Button</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Fusion Card</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Fusion Input</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Fusion Textarea</span>
                  <span className="text-xs bg-secondary px-2 py-1 rounded">Fusion Badge</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🔗 Example Routes</CardTitle>
            <CardDescription>Test your Builder.io integration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-3">
                Create pages in Builder.io and they&apos;ll be accessible via catch-all routes:
              </p>
              <div className="flex flex-col gap-2">
                <code className="text-sm bg-muted px-3 py-2 rounded">/about - Your Builder.io page at /about</code>
                <code className="text-sm bg-muted px-3 py-2 rounded">/products - Your Builder.io page at /products</code>
                <code className="text-sm bg-muted px-3 py-2 rounded">/[any-path] - Dynamic Builder.io pages</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
