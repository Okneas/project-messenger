import { Box, Container, Divider, Grow, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfileImg } from "src/api/getProfileImg";
import { getUserById } from "src/api/getUserById";
import doRequest from "src/hooks/doRequest";
import { IUser } from "src/interfaces/interfaces";

interface IContactProps {
    contactId: number;
}

export const Contact: FC<IContactProps> = ({ contactId }) => {
  const nav = useNavigate();
  const [contactData, setContactData] = useState<IUser | null>(null);
  const [isFetching, setIsFetching] = useState(true);
  const [contactImgLocalURL, setContactImgLocalURL] = useState<string>("");
  const handleClick = () => {
    nav(`/profile/${contactId}`);
  };
  useEffect(() => {
    if(contactData?.avatarImg) {
      (async () => {
        const result = (await doRequest<Blob | null>(getProfileImg, contactData?.avatarImg))
          .data;
        if (result) {
          setContactImgLocalURL(URL.createObjectURL(result));
          setIsFetching(false);
        }
      })();
    }
  }, [contactData]);
  useEffect(() => {
    (async () => {
        const result = (
          await doRequest<IUser | null>(getUserById, contactId)
        ).data;
        if (result) {
            setContactData(result);
        }
      })();
  }, [contactId]);
  return (
    <Grow in={!isFetching}>
        <Box
        onClick={handleClick}
        sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            height: "68px",
            width: "90%",
            marginTop: 2,
        }}
        >
        <Container sx={{ display: "flex", flexDirection: "row" }}>
            <Box
            component="img"
            src={contactImgLocalURL}
            sx={{
                width: "48px",
                height: "48px",
                minWidth: "48px",
                borderRadius: "16px",
                backgroundColor: "gray",
            }}
            ></Box>
                <Container sx={{ display: "flex", flexDirection: "Column" }}>
                <Typography variant="BodyText1">{`${contactData?.name} ${contactData?.lastname}`}</Typography>
                <Typography>{contactData?.phone}</Typography>
                </Container>
        </Container>
        <Divider
            variant="middle"
            component="div"
            sx={{ width: "90%", marginTop: "auto" }}
        />
        </Box>
    </Grow>
  );
};
