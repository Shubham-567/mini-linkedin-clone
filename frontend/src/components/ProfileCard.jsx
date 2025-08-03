function ProfileCard({ user }) {
  return (
    <>
      <div className='card'>
        <div className='user-header'>
          <img src={user.avatar || "/images/profile.jpg"} alt={user.name} />
          <div>
            <h3 className='profile-name'>{user.name}</h3>
            <p className='profile-headline'>Web Developer</p>
            <p className='profile-email'>{user.email}</p>

            <button
              className='primary-btn mt-2'
              onClick={() => alert("Connect is not implement yet")}>
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* bio */}
      <div className='card'>
        <h3 className='heading-1'>Bio</h3>
        <p className='text-text-muted'>
          {user.bio.trim() !== "" ? user.bio : "No bio"}
        </p>
      </div>
    </>
  );
}

export default ProfileCard;
