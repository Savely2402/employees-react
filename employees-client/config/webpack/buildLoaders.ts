import { ModuleOptions } from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const { isDev } = options

    const styleLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader

    const cssLoaderWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                namedExport: false,
                localIdentName: isDev
                    ? '[path][name]__[local]'
                    : '[hash:base64:8]',
            },
        },
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [styleLoader, cssLoaderWithModules, 'sass-loader'],
    }

    const cssLoader = {
        test: /\.css$/i,
        use: [styleLoader, 'css-loader'],
    }

    const tsLoader = {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [cssLoader, sassLoader, tsLoader]
}
