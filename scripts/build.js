const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    platform: "node",
    outdir: "dist",
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
