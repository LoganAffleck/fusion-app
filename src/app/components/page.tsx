import { Button } from "@fusion/design-system"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@fusion/design-system"
import { Input } from "@fusion/design-system"
import { Textarea } from "@fusion/design-system"
import { Badge } from "@fusion/design-system"
import Link from "next/link"

export default function ComponentsShowcase() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">Component Showcase</h1>
          <p className="text-muted-foreground text-lg">
            All Fusion Design System components available in Builder.io
          </p>
        </div>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>All button variants and sizes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">States</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Cards</CardTitle>
            <CardDescription>Container components with header, content, and footer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Card</CardTitle>
                  <CardDescription>With header and content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This is a basic card with a header and content section.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Full Card</CardTitle>
                  <CardDescription>Header, content, and footer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    This card includes all sections including a footer.
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm">Confirm</Button>
                </CardFooter>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Form input components</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Text Input</label>
                <Input type="text" placeholder="Enter text..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Input</label>
                <Input type="email" placeholder="email@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Password Input</label>
                <Input type="password" placeholder="••••••••" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Disabled Input</label>
                <Input type="text" placeholder="Disabled" disabled />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Textarea */}
        <Card>
          <CardHeader>
            <CardTitle>Textarea</CardTitle>
            <CardDescription>Multi-line text input</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Enter your message here..." rows={4} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Disabled Textarea</label>
              <Textarea placeholder="This is disabled" disabled />
            </div>
          </CardContent>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <CardTitle>Badges</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Variants</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Use Cases</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>New</Badge>
                <Badge variant="secondary">In Progress</Badge>
                <Badge variant="outline">Draft</Badge>
                <Badge variant="destructive">Urgent</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complete Form Example */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Form Example</CardTitle>
            <CardDescription>All components working together</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input type="text" placeholder="John Doe" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Priority <Badge variant="destructive" className="ml-2">Required</Badge>
              </label>
              <div className="flex gap-2">
                <Badge variant="outline">Low</Badge>
                <Badge variant="secondary">Medium</Badge>
                <Badge variant="default">High</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Tell us more..." rows={4} />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Submit</Button>
          </CardFooter>
        </Card>

        {/* Builder.io Info */}
        <Card>
          <CardHeader>
            <CardTitle>🎨 Use in Builder.io</CardTitle>
            <CardDescription>All these components are available in the visual editor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Every component you see on this page is registered with Builder.io and ready to use:
            </p>
            <ul className="text-sm space-y-1 list-disc list-inside text-muted-foreground">
              <li>Drag and drop from the component panel</li>
              <li>Edit props visually (no code required)</li>
              <li>Combine components to create complex layouts</li>
              <li>Preview changes in real-time</li>
              <li>Publish instantly to production</li>
            </ul>
            <div className="pt-2">
              <Button asChild>
                <a href="https://builder.io" target="_blank" rel="noopener noreferrer">
                  Open Builder.io →
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
