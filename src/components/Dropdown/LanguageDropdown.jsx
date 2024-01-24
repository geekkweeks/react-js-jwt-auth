import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

const LanguageDropdown = ({ language }) => {
  const handleDropdownChange = (e) => {
    language(e.target.value);
  };
  return (
    <FormControl>
      <FormLabel>Country</FormLabel>

      <Select
        name="country"
        aria-placeholder="Select country"
        onChange={handleDropdownChange}
      >
        <option value="UEA">United Arab Emirates</option>
        <option value="NIG">Nigeria</option>
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
