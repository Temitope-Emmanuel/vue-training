import { projectAuth, projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection: string) => {
  const error = ref(null);

  const addDocs = async (doc: any) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc);
      error.value = null;
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };
  return { error, addDocs };
};

export default useCollection;
