import { ResolveOptions, RuleSetRule } from 'webpack'

export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}
