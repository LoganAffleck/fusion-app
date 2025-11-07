"use client"

import { BuilderComponent, useIsPreviewing } from "@builder.io/react"
import "@/lib/builder-registry"

interface BuilderPageProps {
  content: any
}

export function BuilderPage({ content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing()

  if (!content && !isPreviewing) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Page not found</h1>
          <p className="text-muted-foreground">
            This page does not exist in Builder.io
          </p>
        </div>
      </div>
    )
  }

  return (
    <BuilderComponent
      model="page"
      content={content}
    />
  )
}
