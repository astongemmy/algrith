/** @type {import('next').NextConfig} */

const withTwin = require('./with-twin.js');
const withPWA = require('next-pwa');

module.exports = withTwin({
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  reactStrictMode: true,
  ...withPWA({
    disable: process.env.NODE_ENV === 'development',
    skipWaiting: true,
    register: true,
    dest: 'public'
  })
});