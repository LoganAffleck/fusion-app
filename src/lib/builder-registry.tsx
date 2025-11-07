"use client"

import { Builder } from "@builder.io/react"
import { Button } from "@fusion/design-system"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@fusion/design-system"
import { Input } from "@fusion/design-system"
import { Textarea } from "@fusion/design-system"
import { Badge } from "@fusion/design-system"

// Register Button component
Builder.registerComponent(Button, {
  name: "Fusion Button",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Click me",
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "string",
      enum: ["default", "sm", "lg", "icon"],
      defaultValue: "default",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "type",
      type: "string",
      enum: ["button", "submit", "reset"],
      defaultValue: "button",
    },
  ],
})

// Register Card components
Builder.registerComponent(Card, {
  name: "Fusion Card",
  inputs: [
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
  canHaveChildren: true,
})

Builder.registerComponent(CardHeader, {
  name: "Fusion Card Header",
  inputs: [
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
  canHaveChildren: true,
})

Builder.registerComponent(CardTitle, {
  name: "Fusion Card Title",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Card Title",
    },
  ],
})

Builder.registerComponent(CardDescription, {
  name: "Fusion Card Description",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Card description goes here",
    },
  ],
})

Builder.registerComponent(CardContent, {
  name: "Fusion Card Content",
  inputs: [
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
  canHaveChildren: true,
})

Builder.registerComponent(CardFooter, {
  name: "Fusion Card Footer",
  inputs: [
    {
      name: "children",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
  canHaveChildren: true,
})

// Register Input component
Builder.registerComponent(Input, {
  name: "Fusion Input",
  inputs: [
    {
      name: "type",
      type: "string",
      enum: ["text", "email", "password", "number", "tel", "url"],
      defaultValue: "text",
    },
    {
      name: "placeholder",
      type: "text",
      defaultValue: "Enter text...",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
  ],
})

// Register Textarea component
Builder.registerComponent(Textarea, {
  name: "Fusion Textarea",
  inputs: [
    {
      name: "placeholder",
      type: "text",
      defaultValue: "Enter text...",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "rows",
      type: "number",
      defaultValue: 3,
    },
  ],
})

// Register Badge component
Builder.registerComponent(Badge, {
  name: "Fusion Badge",
  inputs: [
    {
      name: "children",
      type: "text",
      defaultValue: "Badge",
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "secondary", "destructive", "outline"],
      defaultValue: "default",
    },
  ],
})
