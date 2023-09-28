const result = await Bun.build({
  entrypoints: ["src/index.ts"],
  outdir: "dist/elemend",
  target: "bun",
  format: "esm",
  minify: true,
});
// Hello world
