import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

let external = [...Object.keys(pkg.dependencies || {})];

console.log(pkg)
console.log(external)

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    external: external,
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
    ],
}