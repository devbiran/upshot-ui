# upshot-ui

The official design system used in Upshot.

### Install dependencies

```bash
yarn
```

### Start storybook server

```bash
yarn start
```

### Fix code formatting

```bash
yarn lint
```

### Export module

```bash
yarn build
```

### Link with Upshot UIs

In development, you will likely want to link this repo with the one containing the Upshot UIs (Analytics, Answer, etc.) Follow the latest guide in the [upshot-web repo](https://github.com/upshot-tech/upshot-web/blob/staging/README.md).

### Publish on NPM

1. Always delete the `dist` folder

2.

```bash
yarn && yarn build
```

3.

```bash
npm publish
```

### Shortcuts

Update the current branch and start development

```bash
yarn pulld
```

Checkout to the main branch of the repo, update, and start development

```bash
yarn maind
```

### Routing

To enable client-side routing from Next.js, use `<Link>` (@UI/Link) in place of `<a>` with a `linkComponent` prop to receive the next/link router.
