import React, { Component } from 'react'
import Title from "./Title"
import {FaGithubAlt, FaReact, FaCode, FaRegGem} from "react-icons/fa"

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaRegGem />,
                title: "Rails Backend",
                info: "Actually, that's still true. Ask her how her day was. Dear God, they'll be killed on our doorstep! And there's no trash pickup until January 3rd. Large bet on myself in round one."
            },
            {
                icon:<FaReact />,
                title: "React Frontend",
                info: "You don't know how to do any of those. When the lights go out, it's nobody's business what goes on between two consenting adults. Whoa a real live robot; or is that some kind of cheesy New Year's costume?"
            },
            {
                icon:<FaCode />,
                title: "Crazy Coding",
                info: "Shut up and get to the point! Stop! Don't shoot fire stick in space canoe! Cause explosive decompression! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! Does anybody else feel jealous and aroused and worried?"
            },
            {
                icon:<FaGithubAlt />,
                title: "Push It Good!",
                info: "Hey! I'm a porno-dealing monster, what do I care what you think? Why would a robot need to drink? Enough about your promiscuous mother, Hermes! We have bigger problems. I am the man with no name, Zapp Brannigan!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}