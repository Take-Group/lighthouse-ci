module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        'https://kamgranit.pl',
        'https://lemor.pl',
        'https://san-lorenzo.pl',
        'https://silesianplace.pl',
        'https://cofashion.pl',
        'https://zoofishing.pl',
        'https://zalukaj.io',
        'https://takelink.com',
      ],
      settings: {
        chromeFlags: '--no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage --disable-accelerated-2d-canvas --no-first-run --no-zygote --disable-gpu',
        chromePath: '/usr/bin/chromium',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
      token: process.env.LHCI_TOKEN,
    },
  },
};
