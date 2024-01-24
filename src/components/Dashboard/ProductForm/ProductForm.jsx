import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  Textarea,
  NumberInputStepper,
  NumberDecrementStepper,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { uploadService } from "../../../api/uploader-api copy";
import { addProductService } from "../../../api/product-api";

const ProductForm = () => {
  const toast = useToast();

  const initiateInput = {
    name: "",
    description: "",
    stock: 0,
    active: false,
    price: 0,
    oldPrice: 0,
    imageProduct: null,
  };

  const [input, setInput] = useState(initiateInput);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.name !== "active" ? e.target.value : e.target.checked,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // upload file
    let imageId;
    if (input?.imageProduct) {
      console.log("masuk");
      const formData = new FormData();
      formData.append(
        "prod_image",
        input?.imageProduct,
        input?.imageProduct.name
      );
      console.log("before");
      const uploadResponse = await uploadService(formData);
      console.log(uploadResponse);
      imageId = uploadResponse?.id;
    }
    const productParam = {
      name: input?.name,
      description: input?.description,
      active: input?.active,
      stock: parseInt(input?.stock),
      price: parseFloat(input?.price),
      old_price: parseFloat(input?.price),
      image_id: imageId,
    };
    await addProductService(productParam);
    toast({
      title: "New Product Added",
      description: "New product has been added successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          placeholder="enter name"
          name="name"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mt={7} isRequired>
        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Enter description"
          name="description"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mt={7} isRequired>
        <FormLabel>Stock</FormLabel>
        <NumberInput
          defaultValue={0}
          min={0}
          onChange={(e) => setInput({ ...input, stock: e })}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl mt={7} isRequired>
        <FormLabel>Price</FormLabel>
        <NumberInput
          defaultValue={0}
          min={0}
          onChange={(e) => setInput({ ...input, price: e })}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl mt={7}>
        <FormLabel>Old Price</FormLabel>
        <NumberInput
          defaultValue={0}
          min={0}
          onChange={(e) => setInput({ ...input, price: e })}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <FormControl mt={7}>
        <Checkbox size="lg" colorScheme="orange" name="active" defaultChecked>
          Active
        </Checkbox>
      </FormControl>
      <FormControl mt={7}>
        <FormLabel>Image</FormLabel>
        <Input
          type="file"
          placeholder="custom placeholder"
          name="imageProduct"
          onChange={(e) =>
            setInput({
              ...input,
              [e.target.name]: e.target.files[0],
            })
          }
        />
      </FormControl>
      <Button mt={10} colorScheme="teal" leftIcon={<AddIcon />} type="sub">
        Save
      </Button>
    </form>
  );
};

export default ProductForm;
