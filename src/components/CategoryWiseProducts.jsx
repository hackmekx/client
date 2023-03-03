import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import axios from "axios";

const Container = styled.div`
  flex: 1;
  margin: 15px;
  min-width: 300px;
  height: 325px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;

const Circle = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Image = styled.img`
  height: 70%;
  width: 75%;
  object-fit: cover;
  padding: 10px;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease-in;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Info = styled.div`
  opacity: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in;
  &:hover {
    opacity: 1;
  }
`;

const CategoryWiseProducts = ({ item, id }) => {
  const [open, setOpen] = React.useState(false);
  const [handleOpen, SethandleOpen] = React.useState(false);
  const [name, setName] = React.useState(false);
  const [email, setEmail] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState(false);
  const [enquery, setEnquery] = React.useState(false);

  const handleViewClickOpen = () => {
    SethandleOpen(true);
  };

  const handleViewClose = () => {
    SethandleOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onHandleName = (e) => {
    setName(e.target.value);
  };

  const onHandleEmail = (e) => {
    setEmail(e.target.value);
  };

  const onHandlePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onHandleEnquery = (e) => {
    setEnquery(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await axios
        .post("http://localhost:5000/api/enquery", {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          enquery: enquery,
        })
        .then((res) => {
          alert("successfull");
          return res.status(200).json("news letter uploaded successfully");
        });
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Dialog open={handleOpen} onClose={handleViewClose}>
        <DialogTitle>
          <b>Product Information</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You'll fill the enquery to know more
          </DialogContentText>
          <Image src={item.image} key={id} />
          <h1>Title</h1>
          <br />
          <h3>{item.name}</h3>
          <br />
          <h1>Description</h1>
          <br />
          <h3>{item.description}</h3>
        </DialogContent>
      </Dialog>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <b>Please add the Enquery</b>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            After you add the enquery we'll contact you.
          </DialogContentText>
          <TextField
            id="outlined-password-input"
            label="Name"
            type="text"
            style={{ marginTop: "15px", width: "100%" }}
            onChange={onHandleName}
          />
          <TextField
            id="outlined-password-input"
            label="Email"
            type="text"
            style={{ marginTop: "15px", width: "100%" }}
            onChange={onHandleEmail}
          />
          <TextField
            id="outlined-password-input"
            label="Phone Number"
            type="text"
            style={{ marginTop: "15px", width: "100%" }}
            onChange={onHandlePhone}
          />
          <TextField
            id="outlined-password-input"
            label="Enquery"
            type="text"
            style={{ marginTop: "15px", width: "100%" }}
            onChange={onHandleEnquery}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <Circle />
      <Image src={item.image} key={id} />
      <Info>
        <Button
          variant="contained"
          onClick={handleViewClickOpen}
          style={{
            backgroundColor: "transparent",
            marginRight: "10px",
            border: "2px solid gray",
          }}
        >
          View
        </Button>

        <Button
          variant="contained"
          onClick={handleClickOpen}
          style={{
            backgroundColor: "transparent",
            marginLeft: "10px",
            border: "2px solid gray",
          }}
        >
          Enquery
        </Button>
      </Info>
    </Container>
  );
};

export default CategoryWiseProducts;
