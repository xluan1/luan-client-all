import { ChangeEvent, useState } from "react";

const CheckBoxHandler = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleCheckSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      const filterList = checkedList.filter((data) => data !== value);
      setCheckedList(filterList);
    }
  };
  return { checkedList, handleCheckSelect };
};

export default CheckBoxHandler;
