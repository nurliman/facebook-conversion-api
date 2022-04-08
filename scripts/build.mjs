import esbuild from "esbuild";
import hasFlag from "has-flag";
import { nodeExternalsPlugin } from "esbuild-node-externals";
import { globbySync } from "globby";

const isMinify = hasFlag("--minify");

esbuild
  .build({
    entryPoints: globbySync(["src/**/*.+(js|ts)", "!src/types"]),
    platform: "node",
    target: "node10",
    outdir: "dist",
    format: "cjs",
    bundle: false,
    sourcemap: true,
    minify: isMinify,
    plugins: [nodeExternalsPlugin()],
  })
  .then(({ errors, warnings }) => {
    console.log("start Building");
    console.log("warnings : ", warnings);
    console.log("errors : ", errors);
  })
  .catch(console.error);
