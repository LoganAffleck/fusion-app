import { builder } from "@builder.io/sdk"

// Initialize Builder.io with your API key
const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY

if (apiKey) {
  builder.init(apiKey)
}

export { builder }
export const hasBuilderKey = !!apiKey
