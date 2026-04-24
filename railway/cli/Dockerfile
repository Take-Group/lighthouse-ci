FROM node:18-bookworm-slim

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

RUN apt-get update && apt-get install -y \
    chromium \
    --no-install-recommends \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN npm install -g @lhci/cli@0.15.1

RUN groupadd --system lhci && \
    useradd --system --create-home --gid lhci lhci

USER lhci
WORKDIR /home/lhci

COPY --chown=lhci:lhci .lighthouserc.js .

CMD ["lhci", "autorun"]
