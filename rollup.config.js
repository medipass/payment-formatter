import babel from 'rollup-plugin-babel';

export default {
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
};
