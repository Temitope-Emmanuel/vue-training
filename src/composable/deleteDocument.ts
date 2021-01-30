import { projectAuth, projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

interface ArgType {
  collection: string;
  docId: string;
}

const removeDocument = async (arg: ArgType) => {
  error.value = null;
  try {
    await projectFirestore
      .collection(arg.collection)
      .doc(arg.docId)
      .delete();
    error.value = null;
  } catch (err) {
    error.value = err.message;
  }
};

const useRemoveDocument = () => ({ error, removeDocument });

export default useRemoveDocument;
