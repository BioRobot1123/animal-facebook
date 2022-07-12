function Fieldsets({ user }) {
  return (
    <>
      <div className="user-info">
        <fieldset>
          <legend>Info</legend>
          <div className="user-description">
            <p>
              <strong>
                {user?.prefix}&nbsp;{user?.name}&nbsp;{user?.lastName}
              </strong>
            </p>
            <p>{user?.title}</p>
          </div>
          <div className="user-details">
            <p>
              <u>Email</u>: {user?.email}
            </p>
            <p>
              <u>Ip Address</u>: {user?.ip}
            </p>
            <p>
              <u>Ip Address</u>: {user?.ip}
            </p>
            <p>
              <u>Job Area</u>: {user?.jobArea}
            </p>
            <p>
              <u>Job Type</u>: {user?.jobType}
            </p>
          </div>
        </fieldset>
      </div>

      <div className="user-address">
        <fieldset>
          <legend>Address</legend>
          <div className="company">
            <p>
              <strong>
                {user.company?.name}&nbsp;{user.company?.suffix}
              </strong>
            </p>
            <p>
              <u>City</u>: {user.address?.city}
            </p>
            <p>
              <u>Country</u>: {user.address?.country}
            </p>
            <p>
              <u>State</u>: {user.address?.state}
            </p>
            <p>
              <u>Street Address</u>: {user.address?.streetAddress}
            </p>
            <p>
              <u>ZIP</u>: {user.address?.zipCode}
            </p>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default Fieldsets;
