import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-es';

export default [
  {
    input: `${__dirname}/src/index.js`,
    output: {
      name: 'paymentFormatter',
      file: `${__dirname}/umd/index.js`,
      format: 'umd'
    },
    plugins: [
      babel({
        presets: [['env', {modules: false}]]
      })
    ]
  },
  {
    input: `${__dirname}/src/index.js`,
    output: {
      name: 'paymentFormatter',
      file: `${__dirname}/umd/index.min.js`,
      format: 'umd'
    },
    plugins: [
      babel({
        presets: [['env', {modules: false}]]
      }),
      uglify({}, minify)
    ]
  }
];
