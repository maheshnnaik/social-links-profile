import { allProfiles } from "./constants"
import { Profile } from "./Profile"

export const SocialProfile = () => {
	return (
		<div className="container">
			<div className="avatar">
				<img src="./images/avatar.jpeg" alt="Profile" />
			</div>
			<div className="details">
				<h2 id="name">Jessica Randall</h2>
				<p id="address">London, United Kingdom</p>
			</div>
			<p id="role">"Front-end developer at avid reader"</p>
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