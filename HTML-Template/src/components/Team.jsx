import TeamMember from "./TeamMember";
   
export default function Team(){
    return (
        <section className="team section-padding" data-scroll-index='3'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>Our Team</h3>
                            <span className="line"></span>
                            <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                        </div>
                        <div className="section-content text-center">
                            <div className="row">
                                <TeamMember/>
                                <TeamMember/>
                                 <TeamMember/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}
