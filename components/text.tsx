import Fade from "react-reveal/Fade";
import { useMobile } from "../hooks/useMobile";
import { REST_DELAY } from "./date";

const Text = () => {
  const isMobile = useMobile();

  return (
    <div className="section c-textSec -pt80sm -pt0">
      <Fade delay={REST_DELAY}>
        <p className="-f14">Save the date!</p>
        <hr />
      </Fade>
      <Fade delay={isMobile ? 200 : REST_DELAY}>
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
      </Fade>
    </div>
  );
};

export default Text;
