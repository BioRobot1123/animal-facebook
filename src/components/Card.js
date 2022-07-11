function Card({ user, lastElementRef }) {
  return (
    <div ref={lastElementRef} className="card">
      <img src={`${user.imageUrl}?v=${user.id + 1}`} alt="lady" />
      <span>
        <strong>
          {user.prefix}&nbsp;{user.name}&nbsp;{user.lastName}
        </strong>
      </span>
      <span>{user.title}</span>
    </div>
  );
}

export default Card;
