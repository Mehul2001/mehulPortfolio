import React from "react";
import SOCIALPROFILES from "../data/socialProfiles";

const SocialProfile = props => {
    const { link, image } = props.socialProfile;
    return (
        <span>
            <a href={link}><img src={image} alt="social-profile" style={{ width: 35, height: 35, margin: 10 }} /></a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Connect with me!</h2>
        <div>
            {
                SOCIALPROFILES.map(SOCIALPROFILE => {
                    return (
                        <SocialProfile key={SOCIALPROFILE.id} socialProfile={SOCIALPROFILE} />
                    )
                })
            }
        </div>
    </div>
)

export default SocialProfiles;