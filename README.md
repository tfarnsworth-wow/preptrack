Pre Reqs to Run dev server
Node.js 20.0+
pnpm (use npm install -g pnpm) (-g installs globally)


Unzip and in terminal of project ropot run pnpm install

run "npm run dev" in terminal

If you access dev server from another machine on your network, allow that host for Next.js dev resources:

PowerShell (example):

$env:ALLOWED_DEV_ORIGINS="10.10.210.47"; npm run dev

Multiple hosts are comma-separated:

$env:ALLOWED_DEV_ORIGINS="10.10.210.47,10.10.210.48"; npm run dev

PrepTrack Features

Keep track of whats been prepped, active jobs, and past jobs. Data is stored by the app server in data/preptrack-store.json, and all clients connected to that server read/write the same store. Import/export JSON is also available as an extra backup/migration option.