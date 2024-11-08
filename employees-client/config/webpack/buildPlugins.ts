import { Configuration, NoEmitOnErrorsPlugin, ProgressPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
import path from 'path'

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const { mode, isDev, paths } = options

    const isProd = mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new NoEmitOnErrorsPlugin(),
    ]

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[fullhash:8].css',
                chunkFilename: 'css/[name].[fullhash:8].css',
            })
        )
    }

    if (isDev) {
        plugins.push(new ProgressPlugin())
    }

    return plugins
}
