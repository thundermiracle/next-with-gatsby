# next-with-gatsby

## Install

As GatsbyJS is not working well with pnpm workspace, projects are separated by folder only.

```shell
cd blog && pnpm i
cd ../homepage && pnpm i
```

## Start

```shell
cd blog && pnpm build:sub && pnpm serve:sub
```

```shell
cd homepage && pnpm dev
```

## Access

[http://localhost:3000](http://localhost:3000) to access `homepage` project.

[http://localhost:3000/blog](http://localhost:3000/blog) to access `blog` project.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
