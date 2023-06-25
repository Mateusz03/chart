import React, { useContext } from "react";
import {
  StyledCanals,
  StyledContainer,
  StyledDeleteButton,
  StyledQty,
  StyledUpdateButton,
  StyledColumn,
} from "./CanalsTable.style";
import { DataContext } from "../../contexts/Data.context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UpdateItem from "../../connections/UpdateItem.connection";
import DeleteItem from "../../connections/DeleteItem.connection";

const MySwal = withReactContent(Swal);

const CanalsTable = () => {
  const { data, setData } = useContext(DataContext);

  const handleUpdate = async (i: number) => {
    await MySwal.fire({
      title: `Update Canal (${data[i].canal})`,
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Update",
      preConfirm: async (canal) => {
        await MySwal.fire({
          title: `Update Qty (${data[i].qty})`,
          input: "number",
          showCancelButton: true,
          confirmButtonText: "Update",
          preConfirm: async (qty) => {
            const update = await UpdateItem(
              { canal: data[i].canal },
              { canal: canal, qty: qty },
            );

            if (update === "Success") {
              let updatedData = [...data];
              updatedData[i].canal = canal;
              updatedData[i].qty = parseInt(qty);
              setData(updatedData);
            } else {
              alert("Fail");
            }
          },
        });
      },
    });
  };

  const handleDelete = async (i: number) => {
    const delete_item = await DeleteItem(data[i].canal);

    if (delete_item === "Success") {
      setData(data.filter((e: any) => e !== data[i]));
      data.splice(i, 1);
    } else {
      alert("Fail");
    }
  };

  return (
    <StyledContainer>
      <StyledColumn>
        <StyledCanals>Canals</StyledCanals>
        <StyledQty>Qty</StyledQty>
        <StyledUpdateButton></StyledUpdateButton>
        <StyledDeleteButton></StyledDeleteButton>
      </StyledColumn>
      {data.map((e: any, i: number) => {
        if (i !== 0) {
          return (
            <StyledColumn color={i % 2 === 1 ? "pink" : "blue"}>
              <StyledCanals>{e.canal}</StyledCanals>
              <StyledQty>{e.qty}</StyledQty>
              <StyledUpdateButton
                onClick={async () => {
                  await handleUpdate(i);
                }}
              >
                Update
              </StyledUpdateButton>
              <StyledDeleteButton
                onClick={async () => {
                  await handleDelete(i);
                }}
              >
                Delete
              </StyledDeleteButton>
            </StyledColumn>
          );
        }
        return <></>;
      })}
    </StyledContainer>
  );
};
export default CanalsTable;
