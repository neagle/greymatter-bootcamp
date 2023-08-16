// vite.config.ts
import { defineConfig } from "vite";
import path from "path";
import chokidar from "chokidar";
import fs from "fs";

export default defineConfig({
  plugins: [
    {
      name: "watch-external-files",
      configureServer(server) {
        // path to the directory or files you want to watch
        const watchFiles = [
          path.resolve(__dirname, "slides/**/*.md"),
          path.resolve(__dirname, "themes/greymatter/**/*"),
        ];
        // path to the main slides.md file
        const mainSlidesFile = path.resolve(__dirname, "slides.md");

        // Use chokidar to watch for changes
        chokidar.watch(watchFiles).on("change", () => {
          // Trigger a change event on the main slides.md file to re-run the preparser
          const content = fs.readFileSync(mainSlidesFile, "utf-8");
          fs.writeFileSync(mainSlidesFile, content);

          // Notify the server to do a full reload
          server.ws.send({
            type: "full-reload",
          });
        });
      },
    },
  ],
  // ... your other configurations if any
});
