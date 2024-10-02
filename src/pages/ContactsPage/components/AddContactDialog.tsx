import { Dialog, DialogTitle, Grid2 } from "@mui/material";
import { FC, useState } from "react";
import { addNewContact } from "src/api/addNewContact";
import {
  PhoneNumberTextBox,
  RegistrationButton,
} from "src/pages/RegistrationPage/style";

export interface AddContactDialogProps {
  open: boolean;
  selectedValue?: string;
  onClose: () => void;
}

export const AddContactDialog: FC<AddContactDialogProps> = ({
  open,
  onClose,
}) => {
  const [number, setNumber] = useState("");
  const handleClose = () => {
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.currentTarget.value);
  }

  const handleConfirm = () => {
    const localData = localStorage.getItem("user");
    console.log(localData);
    if(localData){
      addNewContact(number, JSON.parse(localData).id);
      handleClose();
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Введите номер телефона</DialogTitle>
      <Grid2
        container
        width="80vw"
        height="20vh"
        bgcolor="white"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <PhoneNumberTextBox onChange={handleChange}/>
        <RegistrationButton
          onClick={handleConfirm}
          sx={{
            backgroundColor: "button.primary",
            borderRadius: "30px",
            marginBottom: 4,
            textTransform: "none",
            minHeight: "52px",
          }}
          variant="contained"
        >
          Подтвердить
        </RegistrationButton>
      </Grid2>
    </Dialog>
  );
};
