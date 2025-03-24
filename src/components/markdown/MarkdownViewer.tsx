'use client'
import type { FC } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'
import './styles.css'

interface Props {
  content: string
}

const MarkdownViewer: FC<Props> = ({ content }) => {
  return (
      <MarkdownPreview
          source={content}
          className="rounded-lg p-4"
      />
  )
}

export default MarkdownViewer