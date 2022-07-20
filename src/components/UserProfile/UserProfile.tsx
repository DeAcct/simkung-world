import { defineComponent, ref, Ref } from "vue";
import { RouterLink } from "vue-router";
import DefaultProfile from "@/assets/DefaultProfile.svg";
import "./UserProfile.scss";

/*헤더에 나타날 사용자 프로필사진 컴포넌트입니다.*/
export default defineComponent({
  setup() {
    const isLoggedIn: Ref<Boolean> = ref(false);
    return () => (
      <RouterLink class="UserProfile" to="/login">
        <span class="UserProfile__Name">
          {isLoggedIn.value ? "" : "게스트"}
        </span>
        <img
          class="UserProfile__Picture"
          src={isLoggedIn.value ? "" : DefaultProfile}
          alt="asdf"
        />
      </RouterLink>
    );
  },
});
