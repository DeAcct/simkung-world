import { defineComponent, PropType } from "vue";
import SplitThumbnail from "../SplitThumbnail/SplitThumbnail";
import "./WorldcupCard.scss";

interface ThumbnailSrc {
  left: string;
  right: string;
}
export default defineComponent({
  props: {
    title: {
      type: String,
    },
    summary: {
      type: String,
    },
    thumbnail: {
      type: Object as PropType<ThumbnailSrc>,
    },
  },
  setup(props) {
    return () => (
      <article class="WorldcupCard">
        <SplitThumbnail {...props.thumbnail}>{props.title}</SplitThumbnail>
        <div class="text">
          <h2 class="WorldcupCard__Title">
            <a href="#">{props.title}</a>
          </h2>
          <a href="#" class="WorldcupCard__Summary">
            {props.summary}
          </a>
        </div>
        <div class="actions">
          <button class="WorldcupCard__ActionBtn">
            <span class="blind">좋아요</span>
          </button>
          <button class="WorldcupCard__ActionBtn">
            <span class="blind">공유하기</span>
          </button>
        </div>
      </article>
    );
  },
});
