import React from "react";
import Accordin from "./Accordin";
import GetStartedForm from "./GetStartedForm";
export default function Section2() {
  return (
    <div className="section section-5 bb-gray section-card">
      <div className="section-inner">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="section-inner">
        <Accordin
          title="What Is Netflix ?"
          para={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`}
        />
        <Accordin
          title="How Much Does Netflix Cost ?"
          para={`Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.
          `}
        />
        <Accordin
          title="Where Can I Watch ?"
          para={`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

          You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
        />
        <Accordin
          title="How Do I Cancel ?"
          para={`Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
          `}
        />
        <Accordin
          title="What Can I Watch On Netflix ?"
          para={`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`}
        />
        <Accordin
          title="Is Netflix Good For Kids ?"
          para={`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

          Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`}
        />
        <h5>
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <GetStartedForm />
      </div>
    </div>
  );
}
