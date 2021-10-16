import FadeIn from "react-fade-in";

const Text = () => {
  return (
    <div className="section c-textSec -pt80sm -pt0">
      <FadeIn delay={200} transitionDuration={600}>
        <p className="-f14">Save the date!</p>
        <hr />
        <p className="-f14 -mb16">
          Prosimy zarezerwujcie datę <br /> 8 września 2022 roku (czwartek).
        </p>
        <p className="-f14 -mb16">
          Tego dnia powiemy sobie <br /> sakramentalne TAK!
        </p>
        <p className="-f14 ">Martyna i Maciek</p>
        <hr />
        <p className="-f14">
          Szczegółowe informacje przekażemy <br /> w późniejszym terminie.
        </p>
      </FadeIn>
    </div>
  );
};

export default Text;
