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
  resolve: { extensions: ['.ts', '.js'] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: { target: 'es2022' },
        exclude: /node_modules/,
      },
    ],
  },
  externals: [],
  devtool: 'source-map',
}
