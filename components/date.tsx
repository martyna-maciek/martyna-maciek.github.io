const Date = () => {
  return (
    <div className="section c-dateSec">
      <h1 className="-f18 -mb24">Martyna + Maciek</h1>

      <div className="c-dateSec_date -pt150 -pb74 -mb24">
        <img src="/images/plant.png" />
        <h2 className="-f48 ">
          08
          <br />
          09
          <br />
          2022
        </h2>
      </div>

      <h2 className="-f24 -mb8">Będzie ślub!</h2>
      <p className="-f14">szczegóły wkrótce</p>

      <button className="c-btn -mt24">
        <span className="c-btn_label">dodaj do kalendarza</span>
      </button>
    </div>
  );
};

export default Date;
