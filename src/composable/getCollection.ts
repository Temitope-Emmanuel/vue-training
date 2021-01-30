import { projectFirestore } from "@/firebase/config";
import { ref, watchEffect } from "vue";

const getCollection = (collection: string) => {
  const document = ref(null);
  const error = ref<string | null>(null);

  const collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const snapListener = collectionRef.onSnapshot(
    snap => {
      const results: any = [];
      snap.docs.map(doc => {
        // must wait for the server to create the timestamp & send it back
        // we don't want to edit data until it has done this
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      document.value = results as any;
      error.value = null;
    },
    err => {
      document.value = null;
      error.value = "Something went wrong, could not fetch data";
    }
  );
  watchEffect(onInvalidate => {
    onInvalidate(() => {
      snapListener();
    });
  });

  return { error, document };
};

export default getCollection;
