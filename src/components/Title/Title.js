import Image from "../../assets/titleImage.8ce5e87f.png";

function Title() {
  return (
    <div className="title">
      <img src={Image} alt="titleImage" />
      <div className="fw-bold">
        Global and Country Wise Cases of Corona Virus
      </div>
      <div className="fst-italic">
        (For a Particular country, select a Country from below)
      </div>
    </div>
  );
}

export default Title;
