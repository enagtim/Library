import stylename from "./NavigationPage.module.css";
import cn from "classnames";
function NavigationPage({ isPage, src, text, alt }) {
  return (
    <div className={stylename["wrapper"]}>
      <img src={src} alt={alt} />
      <div
        className={cn([
          stylename["text"],
          {
            [stylename["text_bold"]]: isPage,
          },
        ])}
      >
        {text}
      </div>
    </div>
  );
}

export default NavigationPage;
