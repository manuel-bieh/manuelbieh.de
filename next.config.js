// next.config.js
const fs = require('node:fs');
const path = require('node:path');
const i18nConfig = require('./next-i18next.config.js');

function realPkgDir(pkg) {
    const pkgJson = require.resolve(`${pkg}/package.json`, { paths: [process.cwd()] });
    return path.dirname(fs.realpathSync(pkgJson));
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: i18nConfig.i18n,
    reactStrictMode: true,
    experimental: { externalDir: true },
    transpilePackages: ['@manuel-bieh/cv', '@manuel-bieh/design-system'], // harmless for JSON

    webpack: (config, { dev }) => {
        const cvPath = realPkgDir('@manuel-bieh/cv');

        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            react: path.resolve('node_modules/react'),
            'react-dom': path.resolve('node_modules/react-dom'),
            '@manuel-bieh/cv': cvPath, // follow the symlink
        };

        if (dev) {
            config.watchOptions = {
                ...(config.watchOptions || {}),
                ignored: ['**/node_modules/**', '!**/node_modules/@manuel-bieh/**'],
            };
        }

        config.cache = {
            type: 'filesystem',
            buildDependencies: {
                config: [__filename],
                // Force cache invalidation when any file in the CV package changes
                cv: [path.join(cvPath, '**/*')],
            },
        };

        return config;
    },
};

module.exports = nextConfig;
