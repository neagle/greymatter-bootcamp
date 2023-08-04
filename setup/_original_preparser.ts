import { definePreparserSetup } from '@slidev/types'

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
            lines.splice(i, 1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
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