import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'

const plugins = [
  buble({
    transforms: {
      dangerousForOf: true
    }
  }),
  terser()
]

export default {
  input: 'lib/index.js',
  plugins,
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'VueRedux',
      sourcemap: true,
      sourcemapExcludeSources: true
    },
    {
      file: 'dist/index.js',
      format: 'esm',
      sourcemap: true,
      sourcemapExcludeSources: true
    }
  ]
}
