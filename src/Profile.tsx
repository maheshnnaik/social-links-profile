export const Profile = (props: any) => {
	const { profile } = props;
	return (
		<div className="profile">
			<a href={profile.url} target="_blank">{profile.name}</a>
		</div>
	)
}