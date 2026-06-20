import type { NextConfig } from 'next';
import { createMDX } from 'fumadocs-mdx/next';

const config: NextConfig = {
  reactStrictMode: true,
};

const withMDX = createMDX({
  // customize the config file path
  // configPath: 'source.config.ts',
});

export default withMDX(config);