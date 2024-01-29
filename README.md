# Portfolio

Portfolio with React.js

## Environments

- Node.js

## Install yarn

Open command prompt and type the command as follows.

```bash
npm install --global yarn
```

## Run as Development mode

```bash
npm start
```

## Run as Production mode

Install `serve` npm. Please, should use only once. Because it's only for serving built files.

```bash
npm install --global serve
```

And run the below bash.

```bash
cd frontend
rm -fR ./build/
npm run build
serve -s build
```

You can visit and test via http://localhost:3000
