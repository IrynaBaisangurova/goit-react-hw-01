import css from "./Profile.module.css";



const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.card}>
      <div>
        <img className={css.avatar} src={avatar} alt="User avatar" />
        <h2 className={css.username}>{username}</h2>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>

        <li className={css.item}>
          <span>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


export default Profile;

