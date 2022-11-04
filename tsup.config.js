import { defineConfig } from "tsup";
import { globbySync } from "globby";

export default defineConfig({
  entryPoints: globbySync(["src/**/*.+(js|ts)", "!src/types"]),
  format: ["esm"],
  target: "node10",
  treeshake: true,
  bundle: false,
  sourcemap: true,
  dts: true,
  clean: true,
});
