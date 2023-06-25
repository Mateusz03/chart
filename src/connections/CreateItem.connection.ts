import axios from "axios";

const CreateItem = async (text: { canal: string; qty: any }) => {
  const url = "http://localhost:8000/api/CreateItem.php";
  let value: string = "";
  await axios
    .post(url, { canal: text.canal, quantity: text.qty })
    .then((data: any) => {
      console.log(data);
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

export default CreateItem;
