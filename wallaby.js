module.exports = function (wallaby) {
    return {
        files: [
            { pattern: 'src/**/*.ts' },
            { pattern: 'src/**/*spec.ts', ignore: true }
        ],
        tests: [
            { pattern: 'src/**/*spec.ts' }
        ],
        env: { type: 'node' },
        testFramework: 'jasmine'
    };
};