import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
interface SignUpArg {
  email: string;
  password: string;
}

const login = async (arg: SignUpArg) => {
  error.value = null;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      arg.email,
      arg.password
    );
  } catch (err) {
    error.value = err.message;
  }
};

const useLogin = () => ({ error, login });

export default useLogin;
