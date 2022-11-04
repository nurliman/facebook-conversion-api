import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: "node10",
  treeshake: true,
  bundle: true,
  sourcemap: true,
  dts: true,
  clean: true,
});
