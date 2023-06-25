import axios from "axios";
import { DataInterface } from "../contexts/Data.context";

const ReadItem = async () => {
  const url = "http://localhost:8000/api/ReadItem.php";

  let values: DataInterface[] = [];

  await axios
    .post(url)
    .then((data: any) => {
      let items = data.data.split("#");
      items.pop();
      for (let i = 0; i < items.length; i++) {
        values.push(JSON.parse(items[i]));
      }
    })
    .catch((err) => {
      throw err;
    });
  return values;
};

export default ReadItem;
