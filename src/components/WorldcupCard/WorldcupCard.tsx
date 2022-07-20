import { defineComponent, PropType } from "vue";
import Thumbnail from "@/src/types/Thumbnail";
import SplitThumbnail from "../SplitThumbnail/SplitThumbnail";
import "./WorldcupCard.scss";
import { RouterLink } from "vue-router";

export default defineComponent({
  props: {
    title: {
      type: Function as PropType<() => string>,
      required: true,
    },
    summary: {
      type: Function as PropType<() => string>,
      required: true,
    },
    thumbnail: {
      type: Function as PropType<() => Thumbnail>,
      required: true,
    },
    isMoe: {
      type: Function as PropType<() => boolean>,
      required: true,
    },
    tags: {
      type: Function as PropType<() => string[]>,
      required: true,
    },
    link: {
      type: Function as PropType<() => string>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <article class="WorldcupCard">
        <a href={props.link()}>
          <SplitThumbnail thumbnail={props.thumbnail()} title={props.title()} />
        </a>
        <div class="text">
          <h2 class="WorldcupCard__Title">
            <a href={props.link()}>{props.title()}</a>
          </h2>
          <p class="WorldcupCard__Summary">{props.summary()}</p>
        </div>
        <ul class="tags">
          {props.tags().map((tag) => (
            <li class="tag">
              <RouterLink to={`/tag-search/${tag}`}>#{tag}</RouterLink>
            </li>
          ))}
        </ul>
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
