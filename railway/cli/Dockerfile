FROM node:18-bullseye-slim

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

RUN apt-get update && apt-get install -y git wget gnupg --no-install-recommends \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN npm install -g @lhci/cli@0.15.1

RUN groupadd --system lhci && \
    useradd --system --create-home --gid lhci lhci

USER lhci
WORKDIR /home/lhci

COPY --chown=lhci:lhci .lighthouserc.js .

CMD ["lhci", "autorun"]
