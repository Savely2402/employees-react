import path from 'path'
import webpack from 'webpack'
import 'webpack-dev-server'
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { EnvVariables, type BuildPaths } from './config/webpack/types/config'

export default function (env: EnvVariables) {
    const mode = env.mode || 'development'
    const port = env.port || 3000

    const isDev = mode === 'development'

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'app', 'appEntry.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const config = buildWebpackConfig({
        mode: env.mode,
        isDev,
        paths,
        port,
    })

    return config
}
