import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import { globbySync } from "globby";

esbuild
  .build({
    entryPoints: globbySync(["src/**/*.+(js|ts)", "!src/types"]),
    platform: "node",
    target: "node10",
    outdir: "dist",
    format: "cjs",
    bundle: false,
    sourcemap: true,
    minify: true,
    plugins: [nodeExternalsPlugin()],
  })
  .then(({ errors, warnings }) => {
    console.log("start Building");
    console.log("warnings : ", warnings);
    console.log("errors : ", errors);
  })
  .catch(console.error);
