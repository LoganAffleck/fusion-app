import { builder, hasBuilderKey } from "@/lib/builder"
import { BuilderPage } from "@/components/builder-page"
import "@/lib/builder-registry"

interface PageProps {
  params: {
    page: string[]
  }
}

export default async function Page({ params }: PageProps) {
  if (!hasBuilderKey) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold mb-2">Builder.io Not Configured</h1>
          <p className="text-muted-foreground">
            Please add your Builder.io API key to <code className="bg-muted px-1 rounded">.env.local</code>
          </p>
        </div>
      </div>
    )
  }

  const urlPath = "/" + (params?.page?.join("/") || "")
  
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise()

  return <BuilderPage content={content} />
}

export async function generateStaticParams() {
  // Skip static generation if Builder key is not configured
  if (!hasBuilderKey) {
    return []
  }

  const pages = await builder.getAll("page", {
    options: { noTargeting: true },
    omit: "data.blocks",
  })

  return pages.map((page) => ({
    page: page.data?.url?.split("/").filter(Boolean) || [],
  }))
}
