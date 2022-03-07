const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild
  .build({
    entryPoints: ["src/index.ts", "src/utils/isNumeric.ts"],
    platform: "neutral",
    mainFields: ["browser", "module", "main"],
    outdir: "dist",
    format:"iife",
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
