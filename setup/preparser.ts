import { definePreparserSetup } from '@slidev/types'
import fs from 'fs'
import path from 'path'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(i, 1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              '')
            continue
          }
          if (l.match(/^@src:/i)) {
            const srcPath = l.replace(/^@src: */i, '').trim()

            // Check if the path points to a directory
            if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
              const files = fs.readdirSync(srcPath)
                .filter(file => file.endsWith('.md'))
                .sort()  // Sort by filename
                .map(file => `@src: ${path.join(srcPath, file)}`)

              // Replace the line with the list of files
              lines.splice(i, 1, ...files)
              continue
            }

            // If it's a file or other input
            lines.splice(i, 1,
              '---',
              `src: ${srcPath}`,
              '---',
              '')
            continue
          }
          i++
        }
      }
    },
  ]
})
