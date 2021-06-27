/*
 * Swagger Profile
 *
 * This is a sample server Profile

 */

package swagger

type User struct {

	Id int64 `json:"id,omitempty"`

	Username string `json:"username,omitempty"`

	FirstName string `json:"first_name,omitempty"`

	LastName string `json:"last_name,omitempty"`

	Email string `json:"email,omitempty"`

	Password string `json:"password,omitempty"`

	Phone string `json:"phone,omitempty"`

	// User Status
	Status int32 `json:"status,omitempty"`
}
