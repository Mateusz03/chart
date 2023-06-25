import axios from "axios";

const UpdateItem = async (oldValues: any, newValues: any) => {
  const url = "http://localhost:8000/api/UpdateItem.php";
  let value: string = "";
  await axios
    .post(url, {
      oldCanal: oldValues.canal,
      newCanal: newValues.canal,
      newQty: newValues.qty,
    })
    .then((data) => {
      if (data.data === 1) {
        value = "Success";
      } else {
        value = "Fail";
      }
    })
    .catch((err) => {
      throw err;
    });
  return value;
};

export default UpdateItem;
