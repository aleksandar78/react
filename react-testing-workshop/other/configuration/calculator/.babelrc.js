const isTest = String(process.env.NODE_ENV) === 'test'
const presets = [['env', {modules: isTest ? 'commonjs' : false}], 'react']

const plugins = [
  'syntax-dynamic-import',
  'transform-class-properties',
  'transform-object-rest-spread',
  isTest ? 'dynamic-import-node' : null
].filter(Boolean)

module.exports = {presets, plugins}
/*
Solution snippets below
































































const isTest = String(process.env.NODE_ENV) === 'test'


for the env plugin modules config:
isTest ? 'commonjs' : false

For dynamic import config in plugins
isTest ? 'dynamic-import-node' : null
 */
