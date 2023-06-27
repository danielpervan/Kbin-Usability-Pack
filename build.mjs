import * as esbuild from "esbuild";

import {inlineScss} from "esbuild-inline-sass";
import start from '@es-exec/esbuild-plugin-start';

const buildOptions = {
    entryPoints: ['src/index.js'],
    bundle: true,
    minify: false,
    plugins: [inlineScss({}),
        start({
            script: "npm run monkey"
        })],
    outfile: 'dist/out.js',
};

if (process.argv.includes("--watch")) {
    let ctx = await esbuild.context(buildOptions);
    await ctx.watch().catch((e) => {
        console.error("⚡ Error", e);
    });
    console.log("⚡ Done");
} else {
    esbuild.build(buildOptions).then(() => {
        console.log("⚡ Done");
    }).catch(() => process.exit(1));
}

