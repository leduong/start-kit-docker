/**
* Swagger Profile
* This is a sample server Profile
*

*/
package io.swagger.server.apis

import com.google.gson.Gson
import io.ktor.application.call
import io.ktor.auth.UserIdPrincipal
import io.ktor.auth.authentication
import io.ktor.auth.basicAuthentication
import io.ktor.auth.oauth
import io.ktor.auth.OAuthAccessTokenResponse
import io.ktor.auth.OAuthServerSettings
import io.ktor.http.ContentType
import io.ktor.http.HttpStatusCode
import io.ktor.locations.*
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.*

import kotlinx.coroutines.experimental.asCoroutineDispatcher

import io.swagger.server.ApplicationAuthProviders
import io.swagger.server.Paths
import io.swagger.server.ApplicationExecutors
import io.swagger.server.HTTP.client
import io.swagger.server.infrastructure.ApiPrincipal
import io.swagger.server.infrastructure.apiKeyAuth

// ktor 0.9.x is missing io.ktor.locations.DELETE, this adds it.
// see https://github.com/ktorio/ktor/issues/288
import io.swagger.server.delete

import io.swagger.server.models.User

fun Route.UserApi() {
    val gson = Gson()
    val empty = mutableMapOf<String, Any?>()

    route("/user") {
        post {
            call.respond(HttpStatusCode.NotImplemented)
        }
    }
    

    delete<Paths.deleteUser> {  it: Paths.deleteUser ->
        call.respond(HttpStatusCode.NotImplemented)
    }
    

    get<Paths.getUserByName> {  it: Paths.getUserByName ->
        val exampleContentType = "application/xml"
        val exampleContentString = """<Profile>
          <id>123456789</id>
          <username>aeiou</username>
          <first_name>aeiou</first_name>
          <last_name>aeiou</last_name>
          <email>aeiou</email>
          <password>aeiou</password>
          <phone>aeiou</phone>
          <status>123</status>
        </Profile>"""
        
        when(exampleContentType) {
            "application/json" -> call.respond(gson.fromJson(exampleContentString, empty::class.java))
            "application/xml" -> call.respondText(exampleContentString, ContentType.Text.Xml)
            else -> call.respondText(exampleContentString)
        }
    }
    

    route("/user/login") {
        post {
            val exampleContentType = "application/xml"
            val exampleContentString = """aeiou"""
            
            when(exampleContentType) {
                "application/json" -> call.respond(gson.fromJson(exampleContentString, empty::class.java))
                "application/xml" -> call.respondText(exampleContentString, ContentType.Text.Xml)
                else -> call.respondText(exampleContentString)
            }
        }
    }
    

    get<Paths.logoutUser> {  it: Paths.logoutUser ->
        call.respond(HttpStatusCode.NotImplemented)
    }
    

    route("/user/{username}") {
        put {
            call.respond(HttpStatusCode.NotImplemented)
        }
    }
    
}
