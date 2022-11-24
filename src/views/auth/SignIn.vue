<script setup lang="ts">
import { reactive, ref, inject } from "vue";
import { useRouter } from "vue-router";
import GButton from "@/components/base/GButton.vue";
import { validateMessages } from "@/constants/message/message-validate";
import { useUserStoreWithOut } from "@/store/modules/user";

import { LoadingOutlined } from "@ant-design/icons-vue";

import type { ISignInRequest } from "@/services/user";
import type { FormInstance } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";

const useStore = useUserStoreWithOut();
const router = useRouter();
const formLoginRef = ref<FormInstance | undefined>();

const formLogin = reactive<ISignInRequest>({
  username: "",
  password: "",
});

const remember = ref<boolean>(false);

const btnLoading = ref<boolean>(false);

const hasError = ref<boolean>(false);

const setIsLoading = inject<any>("setIsLoading")!;

const signIn = async (signInReq: ISignInRequest) => {
  try {
    btnLoading.value = true;
    hasError.value = false;
    setIsLoading(true);

    await useStore.signIn(signInReq);

    const path = (router.currentRoute.value.query.path || "/").toString();

    router.replace(path);
  } catch (error) {
    hasError.value = true;
  } finally {
    btnLoading.value = false;
    setIsLoading(false);
  }
};

const rules: Record<string, Rule[]> = {
  username: [{ required: true }],
  password: [{ required: true }],
};
</script>

<template>
  <section class="login__layout grid wide">
    <div class="login__layout-left">
      <div class="login__layout-left-logo"></div>
      <div class="login__layout-left-description">
        <p class="login__layout-left-description-text--small">by Noah</p>
        <h3 class="login__layout-left-description-text--large">
          NFT name Ex Shiba Astronaut
        </h3>
      </div>
    </div>
    <div class="login__layout-right">
      <h1 class="login__layout-right-title">Sign In</h1>

      <a-form
        name="login-form"
        :ref="formLoginRef"
        :model="formLogin"
        :label-col="{ span: 24 }"
        :rules="rules"
        :validateMessages="validateMessages"
        autocomplete="off"
        @finish="signIn"
      >
        <a-form-item label="Username" name="username">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input size="large" v-model:value="formLogin.username" />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item label="Password" name="password">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input-password
                size="large"
                v-model:value="formLogin.password"
              /> </a-col
          ></a-row>
        </a-form-item>

        <a-form-item
          class="login__remember"
          name="remember"
          :wrapper-col="{ span: 16 }"
        >
          <a-checkbox v-model:checked="remember">Remember me</a-checkbox>
        </a-form-item>
        <a-form-item class="login__btn--sign-in">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <GButton buttonType="danger" size="full" :disabled="btnLoading">
                <template v-if="btnLoading" #leftIcon="{ className }">
                  <LoadingOutlined :class="className" />
                </template>
                Sign In</GButton
              ></a-col
            ></a-row
          >
        </a-form-item>
      </a-form>
      <router-link :to="{ name: 'sign-up' }">
        <div class="login__register">
          <span class="login__register-text">Not registered yet?</span>
          <span class="login__register-sub-text">Create an Account</span>
        </div></router-link
      >
    </div>
  </section>
</template>

<style lang="scss">
@import "../../assets/mixin";
.login {
  &__layout {
    display: flex;

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      padding: 20px;
      flex: 1;
      height: 100vh;
      background: url(../../assets/image/card-1.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      &-logo {
        width: 44px;
        height: 44px;
        background: var(--white);
        mask: url(../../assets/svg/default-logo.svg) no-repeat center / contain;
        -webkit-mask: url(../../assets/svg/default-logo.svg) no-repeat center /
          contain;
        cursor: pointer;
      }
      &-description {
        &-text {
          &--small {
            @include smallTextOnCard(var(--primary-2-01));
          }
          &--large {
            @include largeTextOnCard(var(--neutral-2-05));
          }
        }
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      padding: 0 40px;
      &-title {
        font-weight: 600;
        font-size: 3.8rem;
        line-height: 4.8rem;
        color: var(--neutral-1-02);
      }
    }
  }

  &__remember {
    padding-left: 4px;
  }

  &__btn--sign-in {
    margin-top: 32px;
  }

  &__register {
    display: flex;
    justify-content: flex-start;
    padding: 0 4px;
    cursor: pointer;
    opacity: 1;
    transition: all 0.3s linear;

    &:hover {
      opacity: 0.8;
    }

    &-text {
      margin-right: 4px;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: var(--neutral-1-02);
    }

    &-sub-text {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: var(--neutral-1-02);
    }
  }
}

@import "../../assets/responsive.scss";
</style>
