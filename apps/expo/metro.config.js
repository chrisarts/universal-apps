// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

const monorepoPackages = {
 '@universal/ui': path.resolve(workspaceRoot, 'packages/ui')
 // '@acme/components': path.resolve(workspaceRoot, 'packages/components'),
};

const config = getDefaultConfig(projectRoot);
config.resolver.extraNodeModules = monorepoPackages;
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

module.exports = config;
