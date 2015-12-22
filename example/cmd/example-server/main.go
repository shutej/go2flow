package main

import (
	"flag"
	"log"
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

func integrationTest(router *gin.Engine, name string, expected interface{}, eq func(a, b interface{}) bool) {
	get := func(ctx *gin.Context) {
		ctx.JSON(200, expected)
	}

	post := func(ctx *gin.Context) {
		actual := reflect.New(reflect.TypeOf(expected).Elem()).Interface()

		if err := ctx.BindJSON(actual); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"status": err.Error()})
			return
		}

		if eq(expected, actual) {
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

	integrationTest(router, "test1_empty", &example.Test1{}, reflect.DeepEqual)

	integrationTest(router, "test1_full", &example.Test1{
		AString: "a string",
		AInt:    1,
		AFloat:  1.2,
		ABool:   true,
		AByte:   65,
	}, reflect.DeepEqual)

	integrationTest(router, "test2_empty", &example.Test2{}, reflect.DeepEqual)

	{
		stringPtr := "a string"
		intPtr := 1
		floatPtr := 1.2
		boolPtr := true
		bytePtr := byte(65)
		integrationTest(router, "test2_full", &example.Test2{
			AStringPtr: &stringPtr,
			AIntPtr:    &intPtr,
			AFloatPtr:  &floatPtr,
			ABoolPtr:   &boolPtr,
			ABytePtr:   &bytePtr,
		}, reflect.DeepEqual)
	}

	{
		nilify := func(a *example.Test3) *example.Test3 {
			b := &example.Test3{}
			*b = *a
			if len(b.AStringSlice) == 0 {
				b.AStringSlice = nil
			}
			if len(b.AIntSlice) == 0 {
				b.AIntSlice = nil
			}
			if len(b.AFloatSlice) == 0 {
				b.AFloatSlice = nil
			}
			if len(b.ABoolSlice) == 0 {
				b.ABoolSlice = nil
			}
			if len(b.AByteSlice) == 0 {
				b.AByteSlice = nil
			}
			return b
		}

		eq := func(a, b interface{}) bool {
			an := nilify(a.(*example.Test3))
			bn := nilify(b.(*example.Test3))
			log.Printf("FAIL: %#v != %#v", an, bn)
			return reflect.DeepEqual(an, bn)
		}

		integrationTest(router, "test3_empty", &example.Test3{}, eq)

		integrationTest(router, "test3_full", &example.Test3{
			AStringSlice: []string{"a string"},
			AIntSlice:    []int{1},
			AFloatSlice:  []float64{1.2},
			ABoolSlice:   []bool{true},
			AByteSlice:   []byte{65},
		}, eq)
	}

	integrationTest(router, "test4_empty", &example.Test4{}, reflect.DeepEqual)

	integrationTest(router, "test4_full", &example.Test4{
		AStringObject: struct{ X string }{"a string"},
		AIntObject:    struct{ X int }{1},
		AFloatObject:  struct{ X float64 }{1.2},
		ABoolObject:   struct{ X bool }{true},
		AByteObject:   struct{ X byte }{65},
	}, reflect.DeepEqual)

	{
		nilify := func(a *example.Test5) *example.Test5 {
			b := &example.Test5{}
			*b = *a
			if len(b.AStringMap) == 0 {
				b.AStringMap = nil
			}
			if len(b.AIntMap) == 0 {
				b.AIntMap = nil
			}
			if len(b.AFloatMap) == 0 {
				b.AFloatMap = nil
			}
			if len(b.ABoolMap) == 0 {
				b.ABoolMap = nil
			}
			if len(b.AByteMap) == 0 {
				b.AByteMap = nil
			}
			return b
		}

		eq := func(a, b interface{}) bool {
			an := nilify(a.(*example.Test5))
			bn := nilify(b.(*example.Test5))
			log.Printf("FAIL: %#v != %#v", an, bn)
			return reflect.DeepEqual(an, bn)
		}

		integrationTest(router, "test5_empty", &example.Test5{}, eq)

		integrationTest(router, "test5_full", &example.Test5{
			AStringMap: map[string]string{"x": "a string"},
			AIntMap:    map[string]int{"x": 1},
			AFloatMap:  map[string]float64{"x": 1.2},
			ABoolMap:   map[string]bool{"x": true},
			AByteMap:   map[string]byte{"x": 65},
		}, eq)
	}

	router.Run(*listen)
}
