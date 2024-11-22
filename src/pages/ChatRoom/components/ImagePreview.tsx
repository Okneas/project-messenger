import { Box } from "@mui/material";
import { FC } from "react";
import { ClearIconWrapper, ImagePreviewWrapper } from "../style";
import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  img?: Blob | null;
  onDelete: (img: Blob) => void;
}

export const ImagePreview: FC<Props> = ({ img, onDelete }) => {
  if (!img) {
    return <Box>Нет контента</Box>;
  }

  const handleDelete = () => {
    onDelete(img);
  };

  return (
    <ImagePreviewWrapper>
      <ClearIconWrapper onClick={handleDelete}>
        <ClearIcon color="error" />
      </ClearIconWrapper>
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={URL.createObjectURL(img)}
      />
    </ImagePreviewWrapper>
  );
};
