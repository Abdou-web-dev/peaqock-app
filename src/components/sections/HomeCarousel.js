import { Button, Carousel } from "antd";
import { useEffect } from "react";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

//delete thois componenet

export const HomeCarousel = (setcarouselText, setCarouselBtnText) => {
  const onChange = (currentSlide) => {
    // alert(currentSlide);
    if (currentSlide === 1) {
      setcarouselText("djdjjd");
    }
  };
  useEffect(() => {
    onChange();
  }, []);

  return (
    <div>
      <Carousel
        currentSlide={null}
        // afterChange={() => {
        //   onChange(currentSlide);
        // }}
        afterChange={(currentSlide, e) => {
          if (currentSlide === 1) {
            setcarouselText("djdjjd");
          }
        }}
        // arrows={true}
        // prevArrow={PrevBtn}
        // nextArrow={<RightArrow />}
      >
        <div>
          <h3 style={contentStyle}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              fugit!
            </span>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div>
        <Button></Button>
        {/* //next and prev btns here */}
      </div>
    </div>
  );
};
