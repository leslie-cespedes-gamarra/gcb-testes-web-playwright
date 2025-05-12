// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    timeout: 240000,
    baseURL: 'https://www.casasbahia.com.br',
    headless: false, // Garante que o navegador seja exibido
    launchOptions: {
      slowMo: 500, // Opcional: desacelera as ações para facilitar a visualização
    },
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36', // Simula um navegador comum
    proxy: {
      server: 'http://automacao:ViaVarejo@10.228.5.31:8080', // Substitua pelo endereço do seu proxy
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'desktop chromium',
      use: {
        ...devices['desktop chromium'],
        viewport: { width: 1200, height: 580 },
        deviceScaleFactor: 0.7, // Reduz a escala para 70%
      },
    },

    {
      name: 'desktop firefox',
      use: {
        ...devices['desktop Firefox'],
        viewport: { width: 1040, height: 650 },
        deviceScaleFactor: 0.8, // Reduz a escala para 80%
      },
    },

    {
      name: 'desktop webkit',
      use: {
        ...devices['desktop Safari'],
        viewport: { width: 1440, height: 768 },
        deviceScaleFactor: 0.8, // Reduz a escala para 80%
      },
    },

    /*Mobile browsers */
    {
      name: 'mobile chromium',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 350, height: 550 },
        deviceScaleFactor: 1, // Reduz a escala para 80%
      },
    },

    {
      name: 'mobile firefox',
      use: {
        ...devices['iPhone 12'],
        viewport: { width: 375, height: 567 },
        deviceScaleFactor: 0.8, // Reduz a escala para 80%
      },
    },

    {
      name: 'mobile webkit',
      use: {
        ...devices['mobile Safari'],
        viewport: { width: 375, height: 567 },
        deviceScaleFactor: 0.8, // Reduz a escala para 80%
      },
    },
    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

