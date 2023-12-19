import { useCreateExpenseMutation } from "../../services/expenseAPI";
import { toast } from "react-toastify";

const notitfactionToast=(isLoading,isError,isSuccess)=>{
    
  if (isLoading) {
    toast.info("Request Send ", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "loading1",
      autoClose: 200
    });
  }

  if (isError) {
    toast.error("Something Went Wrong❌", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "error1",
      autoClose: 2000
    });
  }
  if (isSuccess) {
    toast.success("Added 🚀", {
      position: toast.POSITION.TOP_RIGHT,
      toastId: "success1",
      autoClose: 2000
    });
  }
}
export default notitfactionToast;