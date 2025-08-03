function ProfileCard({ user }) {
  return (
    <>
      <div className='card'>
        <div className='user-header'>
          <img
            src={user.avatar || "https://placehold.co/48x48"}
            alt={user.name}
          />
          <div>
            <h3 className='profile-name'>{user.name}</h3>
            <p className='profile-bio'>{user.bio}</p>
            <p className='profile-email'>{user.email}</p>

            <button className='primary-btn mt-2'>Connect</button>
          </div>
        </div>
      </div>

      {/* about */}
      <div className='card'>
        <h3 className='heading-1'>About</h3>

        <p className='text-text-muted'>
          Experienced software engineer with a strong background in developing
          and maintaining web applications. Skilled in Java, Python, and
          JavaScript. Committed to continuous learning and contributing to
          innovative projects.
        </p>
      </div>
    </>
  );
}

export default ProfileCard;
