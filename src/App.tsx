import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import SimkungHeader from "./components/SimkungHeader/SimkungHeader";

export default defineComponent({
  render() {
    return (
      <>
        <SimkungHeader />
        <RouterView />
      </>
    );
  },
});
