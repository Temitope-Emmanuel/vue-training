import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
  try {
    error.value = null;
    await projectAuth.signOut();
    error.value = null;
  } catch (err) {
    error.value = err.message;
  }
};

const useLogout = () => ({ error, logout });

export default useLogout;
