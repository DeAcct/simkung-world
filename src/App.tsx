import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import SimkungHeader from "./components/SimkungHeader/SimkungHeader";
import SVGAssets from "./components/SVGAssets/SVGAssets";

export default defineComponent({
  setup() {
    return () => (
      <>
        <SimkungHeader />
        <RouterView />
        <SVGAssets />
      </>
    );
  },
});
