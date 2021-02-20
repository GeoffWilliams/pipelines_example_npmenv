# JFrog Pipelines NpmEnv example

## Building Locally

```shell
make
```

The package can be published with:

```shell
make publish
```

Which implies `make`.

## Building in JFrog Pipelines

```shell
git push origin master
```

Will trigger a build, using the same scripts that run locally.
