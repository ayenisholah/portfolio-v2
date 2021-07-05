import React from "react";
import Image from "next/image";
import topQuote from "../assets/top-quote.svg";
import bottomQuote from "../assets/bottom-quote.svg";

export default function About() {
  return (
    <div className="About" id="about">
      <div className="heading">
        <h2>About me</h2>
        <div className="border"></div>
      </div>
      <div className="quotes top">
        <Image src={topQuote} alt="Top Quote" height={84.47} width={100} />
      </div>
      <div className="bio">
        <p>
          My name is Shola Ayeni. I am a software developer with over five years
          experiance. i I build very efficient, scaleable and maintainable
          single page applications and server- side application.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam soluta
          fuga totam magnam expedita? Corporis laudantium, laboriosam numquam
          alias sit natus totam, dolor eius perferendis ipsum quis. Illo
          necessitatibus in harum dolorum facilis esse libero excepturi
          perferendis. Repellat mollitia fuga architecto repellendus esse
          voluptatibus, sunt non aspernatur neque dolor sit earum? Culpa
          obcaecati impedit magnam sed distinctio quam laudantium,
          exercitationem eligendi consequuntur nemo porro deserunt provident
          deleniti tempore cumque nisi perspiciatis tempora, aliquam iste
          mollitia esse. Distinctio id deleniti beatae quia autem impedit,
          libero dolorum accusamus debitis, earum quibusdam cum assumenda ut hic
          voluptatibus obcaecati. Velit sit tenetur nobis itaque.
        </p>
      </div>
      <div className="quotes bottom">
        <Image
          src={bottomQuote}
          alt="Bottom Quote"
          height={84.47}
          width={100}
        />
      </div>
      <div className="buttons">
        <button className="btn download">Download Resume</button>
        <button className="btn view">View Resume</button>
      </div>
    </div>
  );
}
