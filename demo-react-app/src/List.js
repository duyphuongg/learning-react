import { useState, useEffect } from "react";
import { getList } from "./services/list";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getListData = async () => {
      let res = await getList();
      if (res) {
        console.log(res);
        setList(res);
      }
    };
    getListData();
  }, []);

  return list.map((item) => <p key={item.id}>{item.item}</p>);
}

export default List;
