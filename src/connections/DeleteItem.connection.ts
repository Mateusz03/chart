import axios from "axios";

const DeleteItem = async (canal: string) => {
  const url = "http://localhost:8000/api/DeleteItem.php";
  let value: string = "";
  await axios
    .post(url, { canal: canal })
    .then((data) => {
      if (data.data === 1) {
        value = "Success";
      } else {
        value = "Fail";
      }
    })
    .catch((error) => {
      throw error;
    });
  return value;
};

export default DeleteItem;
