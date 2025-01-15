import { Configuration } from 'webpack'
import { BuildOptions } from './types/config'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths, isDev } = options

    return {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            filename: '[name].[fullhash:8].js',
            path: paths.build,
            clean: true,
        },
        resolve: buildResolvers(options),
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
