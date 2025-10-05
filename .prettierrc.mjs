/**
 * @type {import("prettier").Config}
 * @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig}
 * */

const config = {
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  tailwindStylesheet: 'src/index.css',
  importOrder: [
    'dayjs',
    '^react$',
    '^next$',
    '^next/.*$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '^@lib/shadcn/ui/(.*)$',
    '^@lib/shadcn/utils/(.*)$',
    '^@lib/shadcn/hooks/(.*)$',
    '^@docs/(.*)$',
    '^@/.*$',
    '^../(?!.*.css$).*$',
    '^./(?!.*.css$).*$',
    '\\.css$',
    '.*styles.css$',
  ],
  overrides: [
    {
      files: '*.mdx',
      options: {
        printWidth: 70,
      },
    },
  ],
};

export default config;
