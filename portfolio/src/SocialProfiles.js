import React, { Component } from "react";
import SOCIALPROFILES from "./data/socialProfiles";

class SocialProfile extends Component {
    render() {
        const { link, image } = this.props.socialProfile;
        return (
            <span>
                <a href={link}><img src={image} alt="social-profile" style={{ width: 35, height: 35, margin: 10 }} /></a>
            </span>
        )
    }
}

class SocialProfiles extends Component {
    render() {
        return (
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
    }
}

export default SocialProfiles;