import { defineComponent, ref } from "vue";
import WorldcupCard from "../../components/WorldcupCard/WorldcupCard";
import ThumbnailLeft from "@/assets/ThumbnailTest1.jpg";
import ThumbnailRight from "@/assets/ThumbnailTest2.jpg";
import "./Home.scss";

export default defineComponent({
  setup() {
    const worldcupArticles = ref([
      {
        title: () => "애니메이션 캐릭터 월드컵 2022",
        summary: () => "네 취향 캐릭터를 찾아봐~",
        thumbnail: () => ({
          left: ThumbnailLeft,
          right: ThumbnailRight,
        }),
        isMoe: () => true, //서브컬쳐 요소가 포함된 월드컵인가
        tags: () => ["애니", "캐릭터", "남자 캐릭터", "여자 캐릭터", "최애캐"],
        link: () => "#none",
      },
    ]);
    return () => (
      <main class="Home">
        <div class="Worldcups">
          {worldcupArticles.value.map((article) => (
            <WorldcupCard {...article} />
          ))}
        </div>
      </main>
    );
  },
});
