FROM node:18-bullseye-slim

ENV PUPPETEER_SKIP_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

RUN apt-get update && apt-get install -y wget gnupg2 --no-install-recommends \
    && wget -qO- https://dl.google.com/linux/linux_signing_key.pub \
       | gpg --dearmor > /usr/share/keyrings/google-chrome.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome.gpg] http://dl.google.com/linux/chrome/deb/ stable main" \
       > /etc/apt/sources.list.d/google-chrome.list \
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
