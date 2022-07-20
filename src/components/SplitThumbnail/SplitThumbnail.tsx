import Thumbnail from "@/src/types/Thumbnail";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    thumbnail: {
      type: Object as PropType<Thumbnail>,
    },
  },
  setup(props) {
    return () => (
      <figure class="SplitThumbnail">
        <svg class="SplitThumbnail__Image" viewBox="0 0 1080 720">
          <clipPath id="CardThumbLeft">
            <path d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H604.74C613.323 0 617.614 0 620.51 1.78556C623.047 3.34987 624.912 5.80237 625.74 8.66556C626.685 11.9337 625.536 16.0687 623.239 24.3388L433.906 705.939C432.507 710.976 431.807 713.495 430.352 715.366C429.068 717.017 427.375 718.304 425.441 719.099C423.249 720 420.635 720 415.406 720H19.2C12.4794 720 9.11905 720 6.55211 718.692C4.29417 717.542 2.4584 715.706 1.30792 713.448C0 710.881 0 707.521 0 700.8V19.2Z" />
          </clipPath>
          <clipPath id="CardThumbRight">
            <path d="M1080 700.8C1080 707.521 1080 710.881 1078.69 713.448C1077.54 715.706 1075.71 717.542 1073.45 718.692C1070.88 720 1067.52 720 1060.8 720H475.26C466.677 720 462.386 720 459.49 718.214C456.953 716.65 455.088 714.198 454.26 711.334C453.315 708.066 454.464 703.931 456.761 695.661L646.094 14.0612C647.493 9.02367 648.193 6.50489 649.648 4.63405C650.932 2.9829 652.625 1.69598 654.559 0.900885C656.751 0 659.365 0 664.594 0H1060.8C1067.52 0 1070.88 0 1073.45 1.30792C1075.71 2.4584 1077.54 4.29417 1078.69 6.55211C1080 9.11905 1080 12.4794 1080 19.2V700.8Z" />
          </clipPath>
          <image
            width="100%"
            x="-30%"
            clip-path="url(#CardThumbLeft)"
            href={props.thumbnail ? props.thumbnail.left : ""}
          />
          <image
            width="100%"
            clip-path="url(#CardThumbRight)"
            href={props.thumbnail ? props.thumbnail.right : ""}
          />
        </svg>
        <figcaption class="blind">
          {props.title ? `${props.title} 썸네일` : ""}
        </figcaption>
      </figure>
    );
  },
});
