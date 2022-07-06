/*vscode 오류로 @(src)경로를 찾지 못하고 있음.*/
import { defineComponent, ref } from "vue";
import WorldcupCard from "../../components/WorldcupCard/WorldcupCard";
import ThumbnailLeft from "../../assets/ThumbnailTest1.jpg";
import ThumbnailRight from "../../assets/ThumbnailTest2.jpg";
import "./Home.scss";

export default defineComponent({
  setup() {
    const worldcupArticles = ref([
      {
        title: "캐릭터 월드컵",
        summary: "네 취향 캐릭터를 찾아봐~",
        thumbnail: {
          left: ThumbnailLeft,
          right: ThumbnailRight,
        },
      },
    ]);
    return () => (
      <main class="Home">
        {worldcupArticles.value.map((article) => (
          <WorldcupCard {...article} />
        ))}
      </main>
    );
  },
});
