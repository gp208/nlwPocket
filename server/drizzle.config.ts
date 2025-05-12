import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'postgresql',
  schema: './src/schema.ts',
  out: './.migrations',
  dbCredentials: {
    url: 'postgresql://docker:docker@localhost:5432/inorbit'
  }
});