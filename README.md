# go2flow

This is a simple tool that generates [Flow types](http://flowtype.org/), empty
value initializers, and JSON marshalling code from Go types.  This eliminates
some of the drudgery of keeping your frontend code consistent with an API
implemented in Go.

## Installation

```sh
go get -u github.com/shutej/go2flow/...
go install github.com/shutej/go2flow/cmd/go2flow
```

## Usage

The tool looks for a list of packages and types to convert from a YAML file, by
default looking for `go2flow.yml` in the current working directory.  This
package [includes an example](example/go2flow.yml) of just such a file.

This package has [example Go types](example/example.go) and
[the corresponding Flow-typed output](example/flow/).  Note, in particular,
[the custom time.Time implementation](example/flow/time_Time.js) which
demonstrates how Javascript can be customized for specific types using Go's
[Marshaler](http://golang.org/pkg/encoding/json/#Marshaler) and
[Unmarshaler](http://golang.org/pkg/encoding/json/#Unmarshaler).

You may consider making a synthetic package so `go generate` will compile your
Flow static assets for you:

```go
//go:generate go2flow --yml go2flow.yml --out out
```

Consider using the [react preset](http://babeljs.io/docs/plugins/preset-react/)
or something like it from your [.babelrc](example/.babelrc).
