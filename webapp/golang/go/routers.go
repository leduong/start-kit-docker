/*
 * Swagger Profile
 *
 * This is a sample server Profile

 */

package swagger

import (
	"fmt"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

func NewRouter() *mux.Router {
	router := mux.NewRouter().StrictSlash(true)
	for _, route := range routes {
		var handler http.Handler
		handler = route.HandlerFunc
		handler = Logger(handler, route.Name)

		router.
			Methods(route.Method).
			Path(route.Pattern).
			Name(route.Name).
			Handler(handler)
	}

	return router
}

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World!")
}

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/v2/",
		Index,
	},

	Route{
		"CreateUser",
		strings.ToUpper("Post"),
		"/v2/user",
		CreateUser,
	},

	Route{
		"DeleteUser",
		strings.ToUpper("Delete"),
		"/v2/user/{username}",
		DeleteUser,
	},

	Route{
		"GetUserByName",
		strings.ToUpper("Get"),
		"/v2/user/{username}",
		GetUserByName,
	},

	Route{
		"LoginUser",
		strings.ToUpper("Post"),
		"/v2/user/login",
		LoginUser,
	},

	Route{
		"LogoutUser",
		strings.ToUpper("Get"),
		"/v2/user/logout",
		LogoutUser,
	},

	Route{
		"UpdateUser",
		strings.ToUpper("Put"),
		"/v2/user/{username}",
		UpdateUser,
	},
}
