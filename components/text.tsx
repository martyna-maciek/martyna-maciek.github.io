import Fade from "react-reveal/Fade";
import { useMobile } from "../hooks/useMobile";
import { REST_DELAY } from "./date";

const texts = {
  pl: {
    first: "Prosimy zarezerwujcie datę\n 8 września 2022 roku (czwartek).",
    second: "Tego dnia powiemy sobie\n sakramentalne TAK!",
    third: "Martyna i Maciek",
    fourth: "Szczegółowe informacje przekażemy\n w późniejszym terminie.",
  },
  en: {
    first: "Please reserve the date for\n September 8, 2022 (Thursday).",
    second: "On this day, we will say\n to each other I DO!",
    third: "Martyna and Maciek",
    fourth: "We'll provide detailed\n information at a later date.",
  },
} as const;

type Props = {
  lang: keyof typeof texts;
};

const Text = ({ lang }: Props) => {
  const isMobile = useMobile();

  return (
    <div className="section c-textSec -pt80sm -pt0">
      <Fade delay={REST_DELAY}>
        <p className="-f14">Save the date!</p>
        <hr />
      </Fade>
      <Fade delay={isMobile ? 200 : REST_DELAY}>
        <p className="-f14 -mb16 -break">{texts[lang].first}</p>
        <p className="-f14 -mb16 -break">{texts[lang].second}</p>
        <p className="-f14">{texts[lang].third}</p>
        <hr />
        <p className="-f14 -break">{texts[lang].fourth}</p>
      </Fade>
    </div>
  );
};

export default Text;
