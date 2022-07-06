import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import SimkungHeader from "./components/SimkungHeader/SimkungHeader";

export default defineComponent({
  setup() {
    return () => (
      <>
        <SimkungHeader />
        <RouterView />
      </>
    );
  },
});
