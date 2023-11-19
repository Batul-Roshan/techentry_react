import photo from "../mylogo-min.jpg"
export default function Profileinfo(props) {



    return (

        <div className="profileinfo">
            <div className="profile-header">
                <div className="profile-pic">

                    <img src={photo} alt="Profile Pic" />

                </div>
                <h3 className="profile-name">{props.name}</h3>
            </div>
            <hr className="profile-divider" />
            <ul className="profiledata">
                <li>{props.following} following</li>
                <li>{props.tweets} tweets</li>
                <li>{props.followers} followers</li>
            </ul>
        </div>


    );
}