import { ref } from "vue";

const getTags = (posts: any) => {
  const tags = ref([]);
  const allTags = new Set();
  posts.value.map((item: any) => {
    item.tags.map((item: any) => {
      allTags.add(item);
    });
  });

  tags.value = [...allTags] as any;
  return { tags };
};

export default getTags;
