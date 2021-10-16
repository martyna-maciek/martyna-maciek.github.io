import Fade from "react-reveal/Fade";

const BASE_DELAY = 100;
export const REST_DELAY = BASE_DELAY + 1000;

const Date = () => {
  return (
    <div className="section c-dateSec">
      <Fade delay={REST_DELAY}>
        <h1 className="-f18 -mb24">Martyna + Maciek</h1>
      </Fade>
      <div className="c-dateSec_date -pt150 -pb74 -mb24">
        <Fade delay={REST_DELAY}>
          <img src="/images/plant.png" />
        </Fade>
        <Fade delay={BASE_DELAY}>
          <h2 className="-f48 ">
            08
            <br />
            09
            <br />
            2022
          </h2>
        </Fade>
      </div>

      <Fade delay={REST_DELAY}>
        <h2 className="-f24 -mb8">Będzie ślub!</h2>
        <p className="-f14">szczegóły wkrótce</p>

        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&sf=true&output=xml&text=%C5%9Alub%20Martyny%20i%20Ma%C4%87ka&location=Warszawa&details=&dates=20220908/20220909"
          target="_blank"
          rel="noreferrer"
          className="c-btn -mt24"
        >
          <span className="c-btn_label">dodaj do kalendarza</span>
        </a>
      </Fade>
    </div>
  );
};

export default Date;
