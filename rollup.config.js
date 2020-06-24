import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.js',
  plugins: [resolve(), commonjs(), terser()],
  output: [
    {
      plugins: [
        getBabelOutputPlugin({
          allowAllFormats: true,
          presets: ['@babel/preset-env']
        })
      ],
      file: 'build/bundle.js',
      format: 'iife'
    }
  ]
}

/*export default rollup.rollup({ input: 'src/index.js' })
  .then(bundle => bundle.generate({
    format: 'iife',
    plugins: [
      getBabelOutputPlugin({
        allowAllFormats: true,
        presets: ['@babel/preset-env']
      })
    ]
  }))
*/