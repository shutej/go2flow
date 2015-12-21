package main

import (
	"flag"
	"net/http"
	"reflect"

	"github.com/gin-gonic/contrib/gzip"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/shutej/go2flow/example"
)

var (
	listen = flag.String("listen", ":80", "port to listen on")
)

func roundtrip(router *gin.Engine, name string, expected interface{}) {
	get := func(ctx *gin.Context) {
		ctx.JSON(200, expected)
	}

	post := func(ctx *gin.Context) {
		actual := reflect.New(reflect.TypeOf(expected).Elem()).Interface()

		if err := ctx.BindJSON(actual); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"status": err.Error()})
			return
		}

		if reflect.DeepEqual(expected, actual) {
			ctx.JSON(200, gin.H{"status": "OK"})
		} else {
			ctx.JSON(http.StatusInternalServerError, gin.H{"status": "FAIL"})
		}
	}

	router.GET(name, get)
	router.POST(name, post)
}

func main() {
	flag.Parse()

	router := gin.Default()

	router.Use(gzip.Gzip(gzip.DefaultCompression))
	router.Use(static.Serve("/", static.LocalFile("static", true)))

	roundtrip(router, "test1_empty", &example.Test1{})
	roundtrip(router, "test1_full", &example.Test1{
		AString: "a string",
		AInt:    1,
		AFloat:  1.2,
		ABool:   true,
		AByte:   65,
	})

	roundtrip(router, "test2_empty", &example.Test2{})
	stringPtr := "a string"
	intPtr := 1
	floatPtr := 1.2
	boolPtr := true
	bytePtr := byte(65)
	roundtrip(router, "test2_full", &example.Test2{
		AStringPtr: &stringPtr,
		AIntPtr:    &intPtr,
		AFloatPtr:  &floatPtr,
		ABoolPtr:   &boolPtr,
		ABytePtr:   &bytePtr,
	})

	roundtrip(router, "test3_empty", &example.Test3{})
	roundtrip(router, "test3_full", &example.Test3{
		AStringSlice: []string{"a string"},
		AIntSlice:    []int{1},
		AFloatSlice:  []float64{1.2},
		ABoolSlice:   []bool{true},
		AByteSlice:   []byte{65},
	})

	router.Run(*listen)
}
