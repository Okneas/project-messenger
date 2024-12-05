import { Box, Grid2, Grow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProfileImg } from "src/api/getProfileImg";
import { getUserById } from "src/api/getUserById";
import doRequest from "src/hooks/doRequest";
import { IUser } from "src/interfaces/interfaces";
import { ProfilePageWrapper } from "./style";
import { ReturnIcon } from "src/svg/ReturnIcon";
import { ProfileIcon } from "src/svg/ProfileIcon";

export const ProfilePage = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState<IUser | null>();
  const [profileImgLocalURL, setProfileImgLocalURL] = useState<string>("");
  const [isFetching, setIsFetching] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const result = (await doRequest<IUser | null>(getUserById, userId)).data;
      if (result) {
        setUserData(result);
      }
    })();
  }, [userId]);
  useEffect(() => {
    if (userData?.avatarImg !== undefined) {
      (async () => {
        const result = (
          await doRequest<Blob | null>(getProfileImg, userData?.avatarImg)
        ).data;
        if (result) {
          setProfileImgLocalURL(URL.createObjectURL(result));
          setIsFetching(false);
        }
      })();
    }
  }, [userData]);
  const handleClick = () => {
    nav("/contacts");
  };
  return (
    <ProfilePageWrapper>
        <Box
        component="header"
        pt={5}
        pb={1}
        display="flex"
        flexDirection="row"
      >
        <Box width="24px" height="24px" ml={2} mt={2} onClick={handleClick}>
            <ReturnIcon />
        </Box>
        <Typography mt="13px" ml={4} variant="SubHeading1">
          Профиль
        </Typography>
      </Box>
      <Grow in={!isFetching}>
        <Grid2 container alignItems="center" flexDirection="column">
            <Box component="img" src={profileImgLocalURL} borderRadius="100%" mt={2} maxWidth="120px"/>
            <Grid2 container mt={3} pl={4} style={{ width: '100%' }} alignItems="center">
                <ProfileIcon />
                <Box display="flex" flexDirection="column" ml={4}>
                    <Typography variant="SubHeading1" color="textPrimary">{`${userData?.name} ${userData?.lastname}`}</Typography>
                    <Typography variant="SubHeading2" color="textSecondary">Никнейм</Typography>
                </Box>
            </Grid2>
            <Grid2 container mt={3} pl={4} style={{ width: '100%' }} alignItems="center">
                <ProfileIcon />
                <Box display="flex" flexDirection="column" ml={4}>
                    <Typography variant="SubHeading1" color="textPrimary">{userData?.phone}</Typography>
                    <Typography variant="SubHeading2" color="textSecondary">Телефон</Typography>
                </Box>
            </Grid2>
        </Grid2>
      </Grow>
    </ProfilePageWrapper>
  );
};
