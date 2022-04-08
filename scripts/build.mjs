import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

esbuild
  .build({
    entryPoints: ["src/index.ts", "src/utils/float2int.ts", "src/utils/isNumeric.ts"],
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
