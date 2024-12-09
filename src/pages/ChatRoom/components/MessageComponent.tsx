import { FC, useEffect, useState } from "react";
import { MessageWrapper } from "../style";
import { Box, Dialog, Typography } from "@mui/material";
import doRequest from "src/hooks/doRequest";
import { getImages } from "src/api/getImages";
import { IImageStat } from "src/interfaces/interfaces";
import { getImageStat } from "src/api/getImageStat";
import { ShimmerDiv } from "shimmer-effects-react";
import ImageSliderDialog from "./ImageSliderDialog";

interface IMessageProps {
  text?: string;
  my: boolean;
  resources?: string[];
  blob?: Blob;
}

export const MessageComponent: FC<IMessageProps> = ({
  text,
  my,
  resources,
  blob,
}) => {
  const [files, setFiles] = useState<string[] | null>(null);
  const [filesStats, setFilesStats] = useState<IImageStat[] | null>(null);
  const [isLoadingFilesStats, setIsLoadingFilesStats] = useState(true);
  const [isLoadingFiles, setIsLoadingFiles] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedImgId, setSelectedImgId] = useState(0);

  const resizeImage = (
    imageStat: IImageStat,
    maxWidth: number,
    maxHeight: number
  ): IImageStat => {
    const newImageStat: IImageStat = { width: 0, heigth: 0 };

    const widthRatio = maxWidth / imageStat.width;
    const heightRatio = maxHeight / imageStat.heigth;

    const scaleRatio = Math.min(widthRatio, heightRatio);

    const newWidth = Math.floor(imageStat.width * scaleRatio);
    const newHeight = Math.floor(imageStat.heigth * scaleRatio);

    newImageStat.heigth = newHeight;
    newImageStat.width = newWidth;

    console.log(newImageStat);

    return newImageStat;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (ind: number) => {
    setSelectedImgId(ind);
    setOpen(true);
  };

  useEffect(() => {
    console.log(filesStats);
    console.log(blob);
    const temp: string[] = [];
    if (blob) {
      temp.push(URL.createObjectURL(blob));
      const FS: IImageStat = { width: 250, heigth: 400 };
      setFilesStats((Fs) => {
        Fs?.push(FS);
        return Fs;
      });
      setFiles(temp);
    }
  }, [blob, filesStats])

  useEffect(() => {
    const fetchImages = async () => {
      const temp: string[] = [];

      if (resources) {
        const promises = resources.map(async (item) => {
          const result = await doRequest<Blob | null>(getImages, item);
          if (result.data) {
            temp.push(URL.createObjectURL(result.data));
          }
        });

        await Promise.all(promises);
      }

      setFiles(temp);
    };

    fetchImages();
  }, [blob, resources]);

  useEffect(() => {
    if (files !== null && files.length !== 0) {
      setIsLoadingFiles(false);
    }
    if (filesStats !== null) {
      setIsLoadingFilesStats(false);
    }
  }, [files, filesStats]);

  useEffect(() => {
    const fetchImagesStats = async () => {
      const temp: IImageStat[] = [];

      if (resources) {
        const promises = resources.map(async (item) => {
          const result = await doRequest<IImageStat | null>(getImageStat, item);
          if (result.data) {
            temp.push(resizeImage(result.data, 250, 400));
          }
        });

        await Promise.all(promises);
      }

      setFilesStats(temp);
    };

    fetchImagesStats();
  }, []);
  return (
    <>
      <MessageWrapper
        sx={{
          bgcolor: my ? "#002DE3" : "#FFFFFF",
          color: my ? "#FFFFFF" : "#0F1828",
          borderRadius: my ? "16px 16px 0px 16px" : "16px 16px 16px 0px",
          marginLeft: my ? "auto" : 2,
          marginRight: my ? 2 : "auto",
          boxShadow: "1px 1px 3px 0px rgba(0,0,0,0.4)",
        }}
        onClick={() => console.log(filesStats)}
      >
        {!isLoadingFilesStats ? (
          <Box
            display="flex"
            flexDirection="row"
            gap="8px"
            width="100%"
            height="100%"
            flexWrap="wrap"
          >
            {" "}
            <Dialog onClose={handleClose} fullScreen open={open}>
              <ImageSliderDialog
                onClose={handleClose}
                imgs={files}
                selectedImgInd={selectedImgId}
              />
            </Dialog>
            {filesStats?.map((item, ind) => {
              return (
                <>
                  <ShimmerDiv
                    key={ind}
                    mode="dark"
                    width={item.width}
                    height={item.heigth}
                    loading={isLoadingFiles}
                    rounded={1}
                  >
                    <img
                      onClick={() => handleClick(ind)}
                      src={files ? files[ind] : ""}
                      alt=""
                      width={item.width}
                      height={item.heigth}
                      style={{
                        objectFit: "contain",
                        borderRadius: "20px",
                      }}
                    />
                  </ShimmerDiv>
                </>
              );
            })}{" "}
          </Box>
        ) : null}
        <Typography
          variant="BodyText2"
          maxWidth="300px"
          sx={{ overflowWrap: "anywhere" }}
        >
          {text}
        </Typography>
      </MessageWrapper>
    </>
  );
};
