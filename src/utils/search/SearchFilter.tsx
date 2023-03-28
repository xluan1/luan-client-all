import { ChangeEvent, useState } from "react";
import { BaseFilter } from "service-sdk/lib/types/BaseType";

const SearchFilter = <T extends BaseFilter>(init: T) => {
  const [filter, setFilter] = useState<T>(init);

  const changePageFilter = (page: number) => {
    filter.offset = page;
    setFilter({ ...filter });
  };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    filter.offset = 0;
    setFilter((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return { filter, changePageFilter, handleFilter };
};

export default SearchFilter;
