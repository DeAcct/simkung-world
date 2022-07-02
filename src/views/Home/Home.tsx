/*vscode 오류로 @(src)경로를 찾지 못하고 있음.*/
import WorldcupCard from "../../components/WorldcupCard/WorldcupCard";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const worldcupArticles = ref([
      {
        title: () => "애니 여자 캐릭터 월드컵",
        summary: () => "네 취향 캐릭터를 찾길 바래~",
      },
    ]);
    return () => (
      <>
        {worldcupArticles.value.map((article) => (
          <WorldcupCard v-slots={article} />
        ))}
      </>
    );
  },
});
