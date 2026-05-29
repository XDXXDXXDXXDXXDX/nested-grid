import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  mode: 'production',
  entry: './src/index.ts',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: { type: 'module' },
    module: true,
  },
  experiments: { outputModule: true },
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: { target: 'es2022', jsx: 'automatic' },
        exclude: /node_modules/,
      },
    ],
  },
  externals: /^(react|@nested-grid\/core)/,
  devtool: false,
}
