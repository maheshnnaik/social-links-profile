import { ADDRESS, allProfiles, NAME, ROLE } from "./constants"
import { Profile } from "./Profile"

export const SocialProfile = () => {
	return (
		<div className="container">
			<div className="avatar">
				<img src="./images/avatar.jpeg" alt="Profile" />
			</div>
			<div className="details">
				<h2 id="name">{NAME}</h2>
				<p id="address">{ADDRESS}</p>
			</div>
			<p id="role">{ROLE}</p>
			<div className="profiles">
				{
					allProfiles.map((profile, index) => {
						return (
							<Profile profile={profile}/>
						)
					})
				}
			</div>
		</div>
	)
}