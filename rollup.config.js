import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'

const plugins = [
  buble({
    transforms: {
      dangerousForOf: true
    }
  }),
  terser()
]

function createBuild ({ input, esmOutput, umdOutput }) {
  return {
    input,
    plugins,
    output: [
      {
        file: umdOutput,
        format: 'umd',
        name: 'VueRedux',
        sourcemap: true,
        sourcemapExcludeSources: true
      },
      {
        file: esmOutput,
        format: 'esm',
        sourcemap: true,
        sourcemapExcludeSources: true
      }
    ]
  }
}

export default [
  createBuild({
    input: 'lib/index.js',
    umdOutput: 'dist/index.umd.js',
    esmOutput: 'dist/index.js'
  }),
  createBuild({
    input: 'lib/compat.js',
    umdOutput: 'dist/compat.umd.js',
    esmOutput: 'dist/compat.js'
  })
]
