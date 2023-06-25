import React, { useState, useContext } from "react";
import {
  StyledInputText,
  StyledContainer,
  StyledButton,
  StyledTextContainer,
  StyledText,
} from "./CreateCanal.style";
import { DataContext } from "../../contexts/Data.context";
import CreateItem from "../../connections/CreateItem.connection";

interface CreateCanalProps {}

const CreateCanal: React.FC<CreateCanalProps> = () => {
  const { data, setData } = useContext(DataContext);
  const [text, setText] = useState<{ canal: string; qty: any }>({
    canal: "",
    qty: "",
  });

  const handleSubmit = async () => {
    const value: string = await CreateItem(text);
    if (value === "Success") {
      setData([...data, { ...text, qty: parseInt(text.qty) }]);
      setText({ canal: "", qty: "" });
    } else {
      alert("Incorrect data");
    }
  };

  const handleChange = (event: { target: { value: string } }, type: string) => {
    if (type === "canal") setText({ ...text, canal: event.target.value });
    else if (type === "quantity") setText({ ...text, qty: event.target.value });
  };

  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledText>Canal</StyledText>
        <StyledInputText
          value={text.canal}
          onChange={(e) => {
            handleChange(e, "canal");
          }}
        />
      </StyledTextContainer>
      <StyledTextContainer>
        <StyledText>Quantity</StyledText>
        <StyledInputText
          value={text.qty}
          onChange={(e) => {
            handleChange(e, "quantity");
          }}
        />
      </StyledTextContainer>
      <StyledButton
        onClick={async () => {
          await handleSubmit();
        }}
      >
        Add
      </StyledButton>
    </StyledContainer>
  );
};

export default CreateCanal;
