# go2flow

This is a simple tool that generates [Flow types](http://flowtype.org/), empty
value initializers, and JSON marshalling code from Go types.  This eliminates
some of the drudgery of keeping your frontend code consistent with an API
implemented in Go.

## Installation

```sh
go get -u github.com/shutej/go2flow/...
godep go install github.com/shutej/go2flow/cmd/go2flow
```

## Usage

The tool looks for a list of packages and types to convert from a YAML file, by
default looking for `go2flow.yml` in the current working directory.  For an
example of usage, see [the test](http://github.com/shutej/go2flow_test).

You may consider making a synthetic package so `go generate` will compile your
Flow static assets for you:

```go
//go:generate go2flow --yml go2flow.yml --out gen
```

You may consider making this package type-check your code with `flow`:

```go
//go:generate flow
```

Finally, you might use `webpack` to bundle the generated code directly from
your entrypoint:

```go
//go:generate webpack
```
