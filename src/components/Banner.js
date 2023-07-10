export function Banner({ image, text, textStyle }) {
  return (
    <div className="banner">
      <div className="banner__content">
        <p className={textStyle}>{text}</p>
        <img src={image} alt=""></img>
      </div>
    </div>
  );
}
