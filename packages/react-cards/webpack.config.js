import path from 'node:path'
import { fileURLToPath } from 'node:url'
import CopyPlugin from 'copy-webpack-plugin'

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
  plugins: [new CopyPlugin({ patterns: [{ from: 'src/styles.css', to: 'styles.css' }] })],
  externals: /^(react|@nested-grid\/core|@nested-grid\/react)/,
  devtool: false,
}
