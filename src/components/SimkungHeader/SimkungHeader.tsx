import { defineComponent, onMounted, ref } from "vue";
import type { Ref } from "vue";
import { RouterLink } from "vue-router";
import logoURL from "@/assets/logo.svg";
import "./SimkungHeader.scss";
import UserProfile from "../UserProfile/UserProfile";
import classNames from "classnames";

export default defineComponent({
  setup() {
    const isScrolled: Ref<boolean> = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", () => {
        isScrolled.value = 0 < Math.round(window.scrollY);
      });
    });
    return () => (
      <header
        class={classNames("SimkungHeader", "inner", {
          "SimkungHeader--scrolled": isScrolled.value,
        })}
      >
        <h1 class="SimkungHeader__logo">
          <RouterLink to="/">
            <img src={logoURL} role="presentation" />
            <span class="text">심쿵월드</span>
          </RouterLink>
        </h1>
        <UserProfile />
      </header>
    );
  },
});
