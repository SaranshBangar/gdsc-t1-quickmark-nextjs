'use client'
import {  EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'

const MenuBar = ({setContent} : { setContent : any}) => {
    const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-row justify-evenly items-center flex-wrap m-2 p-2 text-lg gap-2'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={`hover:bg-sky-700 hover:text-white transition-all ease-in-out transition-250 ${editor.isActive('bold') ? 'is-active' : ''}`}>
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={`hover:bg-sky-700 hover:text-white transition-all ease-in-out transition-250 ${editor.isActive('italic') ? 'is-active' : ''}`}>
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={`w-[140px] hover:bg-sky-700 hover:text-white transition-all ease-in-out transition-250 ${editor.isActive('strike') ? 'is-active' : ''}`}>
        Strikethrough
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={`hover:bg-sky-700 hover:text-white transition-all ease-in-out transition-250 ${editor.isActive('code') ? 'is-active' : ''}`}>
        Code
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className='w-[150px] hover:bg-sky-700 hover:text-white transition-all ease-in-out transition-250'>
        Horizontal Rule
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
        className='hover:bg-sky-700 hover:text-white transition-all ease-in-out transition-250'>
        Undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
        className='hover:bg-sky-700 hover:text-white transition-all ease-in-out transition-250'>
        Redo
      </button>
      <button onClick={setContent(editor.getHTML())} className='hidden'>export to html</button>
    </div>
  )
}

const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
  ]

const content = `
<h2>
  Hello guys, hope you like my project :)
</h2>
`

export default function Tiptap ({setContent}:{setContent : any})  {
  
    
  return (
    <div className='text-xl border-2 border-dotted border-sky-700 flex flex-col justify-center p-2 mb-4'>
        <EditorProvider  slotBefore={<MenuBar setContent={setContent} />} extensions={extensions} content={content} children={undefined} />
    </div>
  )
}