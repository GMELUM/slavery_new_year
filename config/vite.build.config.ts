import path from "node:path";

import { defineConfig } from "vite";
import { OutputOptions } from "rollup";

import { version } from "../package.json";
import { compilerOptions } from "./tsconfig.json";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import randomKeyGenerator from "./libs/classGenerator";

import copy from "rollup-plugin-copy";
// import reactSvgPlugin from "vite-plugin-react-svg";
import { svgPlugin } from "vite-plugin-fast-react-svg";

import { viteSingleFile } from "vite-plugin-singlefile"

const generator = randomKeyGenerator();

const v = version || "0.0.0";
const dir = compilerOptions.outDir;

const output: OutputOptions | OutputOptions[] = {
  chunkFileNames: "js/[hash].js",
  entryFileNames: "js/[hash].js",
  assetFileNames: ({ name }) => {
    const [[, ext]] = Array
      .from((name || "")
        .matchAll(/.([0-9-a-z]+)$/g));
    return `${ext}/[hash].${ext}`;
  }
}

export default defineConfig({
  publicDir: "public",
  base: "./",
  worker: {
    rollupOptions: {
      output: output
    }
  },
  build: {
    target: "esnext",
    outDir: path.join(dir, v),
    minify: "terser",
    rollupOptions: {
      output: output
    }
  },
  css: {
    modules: {
      generateScopedName: (name) => {
        if (name.startsWith("_")) { return name };
        return generator.next().value;
      }
    }
  },
  server: {
    port: 18300,
    host: "0.0.0.0"
  },
  plugins: [
    svgPlugin(),
    tsconfigPaths(),
    react(),
    copy({
      targets: [
        { src: "CNAME", dest: "builds" },
      ]
    }),
    viteSingleFile()
  ]
})