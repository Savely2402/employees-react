export type BuildMode = 'production' | 'development'

export interface EnvVariables {
    mode: BuildMode
    port: number
}

export interface BuildPaths {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    port: number
    isDev: boolean
}
