import React from "react";

export default function Skills(){
    return(
        <>
            <section className="skills section" id="skills">
            <div className="container flex-center">
                <h1 className="section-title-01">Skills</h1>
                <h2 className="section-title-02">Skills</h2>
                <div className="content">
                    <div className="skills-description">
                        <h3>Education & Skills</h3>
                        <p>I am inspired by creating great work with people who are as passionate as I am about building something awesome.</p>
                    </div>
                    <div className="skills-info education-all">
                        <div className="education">
                            <h4><label>Education</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className="year">2021-2021</span>
                                    <p><span>Frontend Development</span> - Innopolis University, Innopolis, Russia</p>
                                </li>
                                <li className="item">
                                    <span className="year">2018-2020</span>
                                    <p><span>Civil engineer (MASTER)</span> - Kazan State University of Architecture and Engineering (KSUAE), Kazan, Russia</p>
                                </li>
                                <li className="item">
                                    <span className="year">2012-2016</span>
                                    <p><span>Civil engineer (BACHELOR)</span> - Kazan State University of Architecture and Engineering (KSUAE), Kazan, Russia</p>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h4><label>Skills</label></h4>
                            <ul className="bar">
                            <a href="https://github.com/anuraghazra/github-readme-stats">
                            <img /* align="center" */  height = "190"  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Aleksandr232&langs_count=10&layout=compact" />
                            </a>
                            </ul>
                        </div>
                        <div className="education">
                            <h4><label>Awards</label></h4>
                            <ul className="edu-list">
                                <li className="item">
                                    <span className="year">2020</span>
                                    <p><span>Certificate of honor</span> - from the head of the Department of Education of the city of Kazan</p>
                                </li>
                                <li className="item">
                                    <span className="year">2019</span>
                                    <p><span>Letter of Appreciation</span> - from the Mayor of Kazan</p>
                                </li>
                                <li className="item">
                                    <span className="year">2018</span>
                                    <p><span>Letter of Appreciation</span> - from the Head of the District Administration of Kazan</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="skills-description">
                        <h3>Work & Experience</h3>
                    </div>
                    <div className="skills-info">
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Deputy Head of Program Coordination Department</h3>
                                <h5>Full Time | Office</h5>
                                <span>2020 - 2021</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>Department for the maintenance of social institutions of the city of Kazan</label></h4>
                            <p>Analytics of information on construction, tracking the deadlines for the execution of contracts. Formation of the need for repair work. Participation in the development of new projects and programs, preparation of content for social media.</p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Chief Specialist of the Analytical Department</h3>
                                <h5>Full Time | Office</h5>
                                <span>2019 - 2020</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>Executive Committee of the Municipal Formation of the city of Kazan</label></h4>
                            <p>Preparation and analysis of information on construction and repair work on the territory of the city of Kazan, monitoring terms of execution of contracts and performance of works.</p>
                        </div>
                        <div className="experience-card">
                            <div className="upper">
                                <h3>Chief specialist of the landscaping department</h3>
                                <h5>Full Time | Office</h5>
                                <span>2018 - 2019</span>
                            </div>
                            <div className="hr"></div>
                            <h4><label>Administration of the Sovetsky District of the City of Kazan</label></h4>
                            <p>Work with document flow, large data arrays, formation of tender documentation (contracts, terms of reference, market analysis, scope of work).</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>

        </>
    )
}