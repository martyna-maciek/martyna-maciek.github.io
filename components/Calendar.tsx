import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import { useMobile } from "../hooks/useMobile";
import { REST_DELAY } from "./Date";

const texts = {
  pl: {
    title: "Wrzesień 2022",
    monday: "P",
    tuesday: "W",
    wednesday: "Ś",
    thursday: "C",
    friday: "P",
    saturday: "S",
    sunday: "N",
  },
  en: {
    title: "September 2022",
    monday: "M",
    tuesday: "T",
    wednesday: "W",
    thursday: "T",
    friday: "F",
    saturday: "S",
    sunday: "S",
  },
} as const;

type Props = {
  lang: keyof typeof texts;
};

const CLICKS_TRIGGER_COUNT = 8;

const Calendar = ({ lang }: Props) => {
  const [isMemeVisible, setIsMemeVisible] = useState(false);
  const clicksCount = useRef(0);

  const isMobile = useMobile();

  return (
    <div className="section c-calendarSec -pt80">
      <div className={`meme-wrapper ${isMemeVisible ? "-visible" : ""}`}>
        <Fade when={isMemeVisible} duration={200}>
          <Tada when={isMemeVisible} delay={200}>
            <div className="img-wrapper">
              <img
                src="/images/meme.png"
                onClick={() => {
                  setIsMemeVisible(false);
                }}
              />
            </div>
          </Tada>
        </Fade>
      </div>

      <Fade delay={isMobile ? 300 : REST_DELAY}>
        <p className="-f14 -mb16">{texts[lang].title}</p>
        <table>
          <tbody>
            <tr>
              <th>{texts[lang].monday}</th>
              <th>{texts[lang].tuesday}</th>
              <th>{texts[lang].wednesday}</th>
              <th>{texts[lang].thursday}</th>
              <th>{texts[lang].friday}</th>
              <th>{texts[lang].saturday}</th>
              <th>{texts[lang].sunday}</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>
                <div
                  className="c-wedding"
                  onClick={() => {
                    clicksCount.current += 1;
                    if (clicksCount.current === CLICKS_TRIGGER_COUNT) {
                      setIsMemeVisible(true);
                      clicksCount.current = 0;
                    }
                  }}
                >
                  <img src="/images/rings.png" />
                </div>
              </td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
            </tr>
            <tr>
              <td>19</td>
              <td>20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
            </tr>
            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Fade>
    </div>
  );
};

export default Calendar;
