/**
* Swagger Profile
* This is a sample server Profile
*

*/
package io.swagger.server

import io.ktor.application.ApplicationCall
import io.ktor.http.HttpMethod
import io.ktor.locations.*
import io.ktor.pipeline.PipelineContext
import io.ktor.routing.Route
import io.ktor.routing.method
import io.swagger.server.models.*


// NOTE: ktor-location@0.9.0 is missing extension for Route.delete. This includes it.
inline fun <reified T : Any> Route.delete(noinline body: suspend PipelineContext<Unit, ApplicationCall>.(T) -> Unit): Route {
    return location(T::class) {
        method(HttpMethod.Delete) {
            handle(body)
        }
    }
}

object Paths {
    /**
     * Delete user
     * This can only be done by the logged in user.
     * @param username The name that needs to be deleted 
     */
    @Location("/user/{username}") class deleteUser(val username: kotlin.String)

    /**
     * Get user by user name
     * 
     * @param username The name that needs to be fetched. Use user1 for testing.  
     */
    @Location("/user/{username}") class getUserByName(val username: kotlin.String)

    /**
     * Logs out current logged in user session
     * 
     */
    @Location("/user/logout") class logoutUser()

}
