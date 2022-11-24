<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import GButton from "@/components/base/GButton.vue";
import { validateMessages } from "@/constants/message/message-validate";
import UserService from "@/services/user";
import { useNotification } from "@/hooks/useNotification";
import { LoadingOutlined } from "@ant-design/icons-vue";
import type { ISignUpRequest } from "@/services/user";
import type { FormInstance } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";

type TFormRegister = {
  fullName: string;
  email: string;
  username: string;
  password: string;
  checkPass: string;
  phoneNumber: String;
};

const router = useRouter();
const { createNotification } = useNotification();
const formRegisterRef = ref<FormInstance | undefined>();

const formRegister = reactive<TFormRegister>({
  fullName: "",
  email: "",
  username: "",
  checkPass: "",
  password: "",
  phoneNumber: "",
});
const policy = ref<boolean>(false);
const loading = ref<boolean>(false);
const hasError = ref<boolean>(false);

const signUp = async (signUpReq: ISignUpRequest) => {
  try {
    loading.value = true;
    hasError.value = false;

    let { message } = await UserService.signUp(signUpReq);
    createNotification("success", message, 3);

    router.push("/sign-in");
  } catch (error) {
    hasError.value = true;
  } finally {
    loading.value = false;
  }
};

let validatePassword = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password");
  } else {
    if (formRegister.checkPass !== "") {
      formRegisterRef.value?.validateFields("checkPass");
    }
    return Promise.resolve();
  }
};
let validateCheckPassword = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password again");
  } else if (value !== formRegister.password) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  password: [
    { required: true, validator: validatePassword, trigger: "change" },
  ],
  checkPass: [
    { required: true, validator: validateCheckPassword, trigger: "change" },
  ],
  fullName: [{ required: true }],
  email: [{ required: true, type: "email" }],
  username: [{ required: true }],
  phoneNumber: [{ required: true }],
};
</script>

<template>
  <section class="register__layout grid wide">
    <div class="register__layout-left">
      <div class="register__layout-left-logo"></div>
      <div class="register__layout-left-description">
        <p class="register__layout-left-description-text--small">by Noah</p>
        <h3 class="register__layout-left-description-text--large">
          NFT name Ex Shiba Astronaut
        </h3>
      </div>
    </div>
    <div class="register__layout-right">
      <h1 class="register__layout-right-title">Sign up with your email</h1>
      <a-form
        name="register-form"
        :ref="formRegisterRef"
        :model="formRegister"
        :rules="rules"
        :label-col="{ span: 24 }"
        :validateMessages="validateMessages"
        autocomplete="off"
        @finish="signUp"
      >
        <a-form-item label="Full Name" name="fullName">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input size="large" v-model:value="formRegister.fullName" />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item label="Email" name="email">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input size="large" v-model:value="formRegister.email" />
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item label="Username" name="username">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input size="large" v-model:value="formRegister.username" />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item
          label="Password"
          name="password"
          :rules="[{ required: true }]"
        >
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input-password
                size="large"
                v-model:value="formRegister.password"
              /> </a-col
          ></a-row>
        </a-form-item>

        <a-form-item has-feedback label="Confirm Password" name="checkPass">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input-password
                size="large"
                v-model:value="formRegister.checkPass"
                autocomplete="off" /></a-col
          ></a-row>
        </a-form-item>
        <a-form-item label="Phone Number" name="phoneNumber">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <a-input size="large" v-model:value="formRegister.phoneNumber" />
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item class="register__policy">
          <a-checkbox v-model:checked="policy"
            >I agree to the Terms of Service and Privacy Policy</a-checkbox
          >
        </a-form-item>
        <a-form-item class="register__btn--sign-up">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
              <GButton buttonType="danger" size="full" :disabled="loading">
                <template v-if="loading" #leftIcon="{ className }">
                  <LoadingOutlined :class="className" />
                </template>
                Sign Up</GButton
              ></a-col
            ></a-row
          >
        </a-form-item>
      </a-form>
      <router-link :to="{ name: 'sign-in' }">
        <div class="register__login">
          <span class="register__login-text"
            >Do you already have an account?</span
          >
          <span class="register__login-sub-text">Login</span>
        </div></router-link
      >
    </div>
  </section>
</template>

<style lang="scss">
@import "../../assets/mixin";
.register {
  &__layout {
    display: flex;

    &-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 auto;
      padding: 20px;
      flex: 1;
      height: 130vh;
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

  &__login {
    display: flex;
    justify-content: flex-start;
    padding: 0 4px;
    margin-bottom: 32px;
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
