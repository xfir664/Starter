import path from "path";
import { fileURLToPath } from 'url';
import TerserPlugin from "terser-webpack-plugin"; 
import * as glob from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Получаем все файлы .js в src/scripts
const entryFiles = glob.sync('./src/scripts/**/*.js');

// Добавляем dynamicLoader.js в качестве точки входа
entryFiles.push('./src/scripts/dynamicLoader.js');

export const webpackConfig = {
    entry: entryFiles,
    output: {
        filename: 'main.min.js',
        path: path.resolve(__dirname, 'dist/scripts'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/, 
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        preferRelative: true,
    },
};
