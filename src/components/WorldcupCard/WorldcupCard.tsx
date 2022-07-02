import { defineComponent, Slots } from "vue";

export default defineComponent({
  setup(props, { slots }) {
    return () => (
      <article class="WorldcupCard">
        <div class="WorldcupCard__Thumbnail"></div>
        <div class="row-bottom">
          <h2 class="WorldcupCard__Title">
            {slots.title ? slots.title() : ""}
          </h2>
          <p class="WorldcupCard__Summary">
            {slots.summary ? slots.summary() : ""}
          </p>
        </div>
      </article>
    );
  },
});
