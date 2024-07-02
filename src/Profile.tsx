export const Profile = (props: any) => {
	const { profile } = props;
	return (
		<div className="profile">
			<a href={profile.url} target="_blank" rel="noreferrer">{profile.name}</a>
		</div>
	)
}