/**
 * Swagger Profile
 * This is a sample server Profile
 *
 */

package io.swagger.client.model
import play.api.libs.json._

case class User (
                  id: Option[Long],
                  username: Option[String],
                  firstName: Option[String],
                  lastName: Option[String],
                  email: Option[String],
                  password: Option[String],
                  phone: Option[String],
            /* User Status */
                  status: Option[Int]
)

object User {
implicit val format: Format[User] = Json.format
}

