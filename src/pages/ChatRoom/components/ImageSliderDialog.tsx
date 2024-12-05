import { Box, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ReturnIcon } from "src/svg/ReturnIcon";
import Carousel from "react-material-ui-carousel";

interface Props {
  imgs: string[] | null;
  onClose: () => void;
  selectedImgInd: number;
}

const ImageSliderDialog: FC<Props> = ({ imgs, onClose, selectedImgInd }) => {
  const [currentImgInd, setCurrentImgInd] = useState(selectedImgInd);
  const handleClose = () => {
    setCurrentImgInd(0);
    onClose();
  } 
  const handleChange = (now: number | undefined) => {
    if (now !== undefined) {
      setCurrentImgInd(now);
    }
  };
  useEffect(() => {
    console.log(currentImgInd); 
  }, []);
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Box
        width="100%"
        height="7%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
      >
        <Box onClick={handleClose}>
          <ReturnIcon />
        </Box>
        <Typography>
          {currentImgInd + 1} из {imgs ? imgs.length : 0}
        </Typography>
      </Box>
      <Carousel
        sx={{ width: "100%", height: "100%" }}
        autoPlay={false}
        onChange={handleChange}
        animation="slide"
        indicators={false}
        height="100%"
        navButtonsAlwaysInvisible={true}
        index={currentImgInd}
      >
        {imgs?.map((item, ind) => {
          return (
            <img
              key={ind}
              src={item}
              alt=""
              width={"100%"}
              height={"100%"}
              style={{
                objectFit: "contain",
              }}
            />
          );
        })}
      </Carousel>
    </Box>
  );
};

export default ImageSliderDialog;
