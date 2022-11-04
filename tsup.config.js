import { defineConfig } from "tsup";
import { globbySync } from "globby";

export default defineConfig({
  entryPoints: globbySync(["src/**/*.+(js|ts)", "!src/types"]),
  format: ["esm", "cjs"],
  target: "node10",
  treeshake: true,
  bundle: false,
  sourcemap: true,
  dts: true,
  clean: true,
});
