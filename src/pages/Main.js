import React from "react";
import profile from "../components/assets/images/profile-pic-small.jpg";
import resume from "../components/assets/images/Resume.pdf"

function Main() {
    return(
        <div>
            <section className="p-3 border">
                <h2 className="mb-3 pb-3">About Me</h2>
                <div className="row">
                    <div className="col-3">
                        <img src={ profile }className="img-fluid" alt="Profile Pic"/>
                    </div>
                    <div className="col-9">
                        <p>
                            I am currently enrolled in the UW Coding Boot Camp, and have learned how to program: 
                        </p> 
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>MySQL</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>MongoDB</li>
                            <li>Handlebars</li>
                            <li>React</li>
                        </ul>
                        <p>
                            While challenging at times, I find great satisfaction in learning new things and producing more and more projects and assignments. I have gained a much deeper appreciation for good website design after seeing how much work goes into it.
                        </p>
                        <p>
                            I enjoy playing video games and arts and crafts, mainly for the progress that you can see by the end of it. It is very fulfilling looking back after spending some time on something and being able to see how much has changed since the start.
                        </p>
                        <br/>
                        <a className="external-link profile" href="https://github.com/lupemls">Link to GitHub Profile</a>
                        <br/>
                        <a className="external-link profile" href="https://www.linkedin.com/in/matthew-shepardson-4a806098/">Link to LinkedIn Profile</a>
                        <br/>
                        <a className="external-link profile" href={ resume }>Link to Resume</a>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main;