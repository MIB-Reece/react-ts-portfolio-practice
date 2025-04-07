import * as React from "react";
import './CryptoCards.css';

const cryptoCardData = [
    { subtitle: "★",
    title: "Avalanche",
    img: "https://crypto-icons-plus.netlify.app/img/avalanche.7c90ba6b.png",
    prefix: "Developer Friendly!",
    subject: "Fast & Affordable",
    link: "https://www.avax.network/",
    linkText: "AVAX",},

    { subtitle: "★",
    title: "Solana",
    img: "https://crypto-icons-plus.netlify.app/img/solana.104ad76b.png",
    prefix: "Big Community!",
    subject: "Ethereum Competitor",
    link: "https://solana.com/",
    linkText: "SOLANA",},

    { subtitle: "★",
    title: "Web3 API Solutions",
    img: "https://crypto-icons-plus.netlify.app/img/the-graph.f4b75280.png",
    prefix: "GraphQL API",
    subject: "Large Reliable Network",
    link: "https://thegraph.com/en/",
    linkText: "GraphQL",}
    ];

export default function CryptoCards (){
  return (
    <div >
        <section className="card-list">
                {cryptoCardData?.map((data) =>(
                    <article className="cryptocard" key={cryptoCardData}>
                        <header className="card-header">
                        <p>{data.subtitle}</p>
                        <h2>{data.title}</h2>
                        </header>

                        <div className="card-author">
                        <a className="author-avatar" href="#">
                            <img src={data.img} />
                        </a>

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