/**
* Swagger Profile
* This is a sample server Profile
*

*/
package io.swagger.server.models


/**
 * 
 * @param id 
 * @param username 
 * @param first_name 
 * @param last_name 
 * @param email 
 * @param password 
 * @param phone 
 * @param status User Status
 */
data class User (
    val id: kotlin.Long? = null,
    val username: kotlin.String? = null,
    val first_name: kotlin.String? = null,
    val last_name: kotlin.String? = null,
    val email: kotlin.String? = null,
    val password: kotlin.String? = null,
    val phone: kotlin.String? = null,
    /* User Status */
    val status: kotlin.Int? = null
) {

}

