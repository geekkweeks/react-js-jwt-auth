import { useToast } from "@chakra-ui/react";

const Toast = async (title, description) => {
  const toast = useToast();
  return (
    <div>
      {toast({
        title: { title },
        description: { description },
        status: "success",
        duration: 9000,
        isClosable: true,
      })}
    </div>
  );
};

export { Toast };
