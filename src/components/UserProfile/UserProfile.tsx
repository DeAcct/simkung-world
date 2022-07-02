import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  setup() {
    return () => (
      /*헤더에 나타날 사용자 프로필사진 컴포넌트입니다.*/
      <RouterLink class="UserProfile" to="/login">
        <img src="" alt="asdf" />
        로그인
      </RouterLink>
    );
  },
});
