import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    font-weight: 500;
`

const Annoucements = () => {
  return (
    <div>
        <Container>
            Super Deal! Free Shipping on Order Above ₹500
        </Container>
    </div>
  )
}

export default Annoucements