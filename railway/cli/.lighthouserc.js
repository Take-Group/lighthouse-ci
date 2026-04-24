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
        'https://zalukacj.io',
        'https://takelink.com',
      ],
      settings: {
        chromeFlags: '--headless --no-sandbox --disable-dev-shm-usage',
      },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
      token: process.env.LHCI_TOKEN,
    },
  },
};
