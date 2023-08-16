import { definePreparserSetup } from "@slidev/types";
import fs from "fs";
import path from "path";

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let insideFrontmatter = false;
        let hasLayout = false;

        processSrc(lines);

        let i = 0;
        while (i < lines.length) {
          const l = lines[i];

          // Allow custom @cover syntax
          // @see https://sli.dev/custom/config-parser.html#use-case-1-compact-syntax-top-level-presentation
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              "---",
              "layout: cover",
              `background: ${l.replace(/^@cover: */i, "")}`,
              "---",
              "",
            );
            continue;
          }

          // Allow custom @src syntax
          // @see https://sli.dev/custom/config-parser.html#use-case-1-compact-syntax-top-level-presentation
          // if (l.match(/^@src:/i)) {
          //   const srcPath = l.replace(/^@src: */i, "").trim();

          //   // Check if the path points to a directory
          //   if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
          //     const files = fs.readdirSync(srcPath)
          //       .filter((file) => file.endsWith(".md"))
          //       .sort() // Sort by filename
          //       .map((file) => `@src: ${path.join(srcPath, file)}`);

          //     // Replace the line with the list of files
          //     lines.splice(i, 1, ...files);
          //     continue;
          //   }

          //   // If it's a file or other input
          //   lines.splice(i, 1, "---", `src: ${srcPath}`, "---", "");
          //   continue;
          // }

          // Make all slides use the theme's default layout, if no layout is specified
          // if (l === "---") {
          //   if (insideFrontmatter) {
          //     // If we are at the end of frontmatter and there's no layout specified, add the default layout
          //     if (!hasLayout) {
          //       lines.splice(i, 0, "layout: default");
          //       i++;
          //     }
          //     insideFrontmatter = false;
          //     hasLayout = false;
          //   } else {
          //     // Start of frontmatter or separator between slides
          //     insideFrontmatter = true;
          //     // Check if the next line is also a separator, meaning no frontmatter
          //     if (lines[i + 1] === "---") {
          //       lines.splice(i + 1, 0, "layout: default");
          //       i += 2; // Skip over the newly added lines
          //       insideFrontmatter = false; // We've just closed the newly created frontmatter
          //       continue;
          //     }
          //   }
          // } else if (insideFrontmatter && l.startsWith("layout:")) {
          //   hasLayout = true;
          // }

          i++;
        }
      },
    },
  ];
});

function processSrc(lines) {
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];

    if (l.match(/^@src:/i)) {
      const srcPath = l.replace(/^@src: */i, "").trim();

      // rest of your code to handle @src

      if (fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory()) {
        const files = fs.readdirSync(srcPath)
          .filter((file) => file.endsWith(".md"))
          .sort() // Sort by filename
          .map((file) => fs.readFileSync(path.join(srcPath, file), "utf8"));

        lines.splice(i, 1, ...files.flatMap((file) => file.split("\n")));
        continue;
      }

      // If it's a file or other input
      const fileContent = fs.readFileSync(srcPath, "utf8").split("\n");
      lines.splice(i, 1, ...fileContent);
      continue;
    }

    i++;
  }
}
