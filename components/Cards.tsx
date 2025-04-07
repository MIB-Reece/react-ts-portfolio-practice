import * as React from "react";
import './Cards.css';

const aboutCardData = [
    { subtitle: "Welcome",
    title: "about me",
    img: "https://avatars.githubusercontent.com/u/79384244?v=4",
    prefix: "Portfolio",
    subject: "Reece Onyeani",
    link: "",
    linkText: "UI/UX Designer",},

    { subtitle: "★",
    title: "i love good design",
    img: "data:image/png;base64,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",
    prefix: "Design Advice",
    subject: "Create a palette",
    link: "https://coolors.co",
    linkText: "Visit Coolors",},

    { subtitle: "★",
    title: "about this page",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    prefix: "Built With:",
    subject: "TypeScript & React",
    link: "https://www.typescriptlang.org/",
    linkText: "Learn TypeScript",}
    ];

export default function CustomCard (){
  return (
    <div >
        <section className="card-list">
                {aboutCardData?.map((data) =>(
                    <article className="card" key={aboutCardData}>
                        <header className="card-header">
                        <p>{data.subtitle}</p>
                        <h2>{data.title}</h2>
                        </header>

                        <div className="card-author">
                        <a className="author-avatar" href="#">
                            <img src={data.img} />
                        </a>
                        <svg className="half-circle" viewBox="0 0 106 57">
                            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                        </svg>

                        <div className="author-name">
                            <div className="author-name-prefix">{data.prefix}</div>
                            {data.subject}
                        </div>
                        </div>
                        <div className="tags">
                        <a href={data.link}>{data.linkText}</a>
                        </div>
                    </article> ))}
        </section>
    </div>)
};