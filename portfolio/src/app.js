import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profiles.jpeg';
import Title from './title';

class App extends Component {
    state = { displayBio: false };
    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className="profile" />
                <h1>Hello!</h1>
                <p>My name is Mehul Mandviya.</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects.</p>

                {this.state.displayBio ? (<div>
                    <p>
                        I Live in San Francisco, and code every day.
            </p>
                    <p>
                        My favourite language is JavaScript, and i think React.js is awesome
            </p>
                    <p>Besides coding I love hiking and watching Netflix.</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />

            </div>
        )


    }
}

export default App;