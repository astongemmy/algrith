/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = {
  ...withPWA({
    disable: process.env.NODE_ENV === 'development',
    skipWaiting: true,
    register: true,
    dest: 'public',
  })
};