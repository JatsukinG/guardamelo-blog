'use client'
import { Editor } from '@monaco-editor/react'

interface Props {
  defaultLng?: string
}

const CodeEditor = ({ defaultLng }: Props) => {
  return (
      <Editor
          defaultLanguage={defaultLng || "javascript"}
          defaultValue="// Type your code here"
      />
  )
}

export default CodeEditor