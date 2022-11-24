<script setup lang="ts">
import { inject } from "vue";
import { useUserStoreWithOut } from "@/store/modules/user";
import type { IUserInfoResponse } from "@/services/user";

const userInfo: IUserInfoResponse | any = inject("userInfo");

const userStore = useUserStoreWithOut();

const handleLogout = async () => {
  await userStore.logout();
};
</script>
<template>
  <nav class="navbar">
    <div class="navbar__mobile-wrapper">
      <label for="close-input" class="navbar__icon"></label>
      <div class="navbar__mobile-logo"></div>
    </div>
    <input type="checkbox" class="navbar__close" id="close-input" />
    <label for="close-input" class="navbar__overlay"></label>
    <div class="navbar__mobile">
      <label for="close-input" class="navbar__mobile-close">
        <img src="../../../assets/svg/close-icon.svg" alt="" />
      </label>
      <div class="navbar__mobile-profile">
        <img
          src="https://scontent.fdad5-1.fna.fbcdn.net/v/t1.6435-1/103846733_2606870369580275_4039306812862273688_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=XAT7z3qf7CEAX-qXZli&tn=IHd4LNJo1nC0LAJR&_nc_ht=scontent.fdad5-1.fna&oh=00_AT-GZ-suceD9p4UpXKxUYda04B3NYQFZQkq-hFslaZBSrg&oe=636A4669"
          alt="avatar image profile"
          class="navbar__mobile-profile-avatar"
        />
        <h2 class="navbar__mobile-profile-fullname">Duc Son</h2>
      </div>
      <ul class="navbar__mobile-list">
        <li class="navbar__mobile-item">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="navbar__mobile-item">
          <router-link :to="{ name: 'home' }">Marketplace</router-link>
        </li>
        <li class="navbar__mobile-item">
          <router-link :to="{ name: 'home' }">All NFTs</router-link>
        </li>
        <li class="navbar__mobile-item">
          <router-link :to="{ name: 'home' }">Activities</router-link>
        </li>
      </ul>
      <button class="btn btn--danger navbar__mobile-connect-wallet">
        Connect wallet
      </button>
    </div>
    <div class="navbar__logo"></div>
    <div class="navbar__wrapper">
      <ul class="navbar__list">
        <li class="navbar__item">
          <router-link :to="{ name: 'home' }">Home</router-link>
        </li>
        <li class="navbar__item">
          <router-link :to="{ name: 'home' }">Marketplace</router-link>
        </li>
        <li class="navbar__item">
          <router-link :to="{ name: 'home' }">All NFTs</router-link>
        </li>

        <li class="navbar__item">
          <router-link :to="{ name: 'home' }">Activities</router-link>
        </li>
      </ul>

      <div class="navbar__tool">
        <div class="navbar__sub">
          <button class="btn btn--secondary-navbar">
            <div class="navbar__hidden-item"></div>
          </button>
          <button class="btn btn--secondary-navbar">
            <div class="navbar__search"></div>
          </button>
        </div>
        <template v-if="userInfo?.fullName">
          <span class="navbar__user-info">{{
            `Hi! ${userInfo?.fullName}`
          }}</span>
          <button
            class="btn btn--secondary navbar__connect-wallet"
            @click="handleLogout"
          >
            Logout
          </button>
        </template>

        <template v-else>
          <router-link :to="{ name: 'sign-in' }"
            ><button class="btn btn--secondary navbar__connect-wallet">
              Sign In
            </button>
          </router-link>
          <router-link :to="{ name: 'sign-up' }"
            ><button class="btn btn--secondary navbar__connect-wallet">
              Sign Up
            </button>
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import "../../../assets/mixin";
//NAVBAR
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px calc(calc(100vw - 1200px) / 2);

  background: var(--neutral-1-01);
  border-bottom: 2px solid;
  border-image-slice: 1;
  border-image-source: radial-gradient(
    ellipse at top center,
    transparent,
    transparent,
    rgb(196 184 184 / 20%),
    transparent,
    transparent
  );
  z-index: 100;

  &__mobile-wrapper {
    display: none;
  }

  &__mobile-logo {
    width: 32px;
    height: 32px;
    background: var(--white);
    mask: url(../../../../assets/svg/default-logo.svg) no-repeat center /
      contain;
    -webkit-mask: url(../../../assets/svg/default-logo.svg) no-repeat center /
      contain;
    cursor: pointer;
  }

  &__logo {
    margin: auto 0;
    width: 44px;
    height: 44px;
    background: var(--white);
    mask: url(../../../assets/svg/default-logo.svg) no-repeat center / contain;
    -webkit-mask: url(../../../assets/svg/default-logo.svg) no-repeat center /
      contain;
    cursor: pointer;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  &__item {
    padding: 12px 16px;
    margin-right: 28px;
    font-size: 1.6rem;
    color: var(--neutral-1-05);
    border-radius: 12px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2 linear 0s;

    &:hover {
      background: var(--neutral-1-07);
      border: 1px solid var(--neutral-1-07);
    }

    a {
      color: var(--neutral-1-05);
    }
  }

  &__tool {
    display: flex;
    align-items: center;

    button {
      &:first-child {
        margin-right: 16px;
      }
    }
  }

  &__sub {
    display: flex;
    margin: auto 0;

    button {
      &:first-child {
        margin-right: 16px;
      }

      &:last-child {
        margin-right: 44px;
      }
    }
  }

  &__hidden-item {
    width: 24px;
    height: 24px;
    background-color: var(--neutral-1-05);
    mask: url(../../../assets/svg/flatten.svg) no-repeat center / contain;
    -webkit-mask: url(../../../assets/svg/flatten.svg) no-repeat center /
      contain;
  }

  &__search {
    width: 24px;
    height: 24px;
    background-color: var(--neutral-1-05);
    mask: url(../../../assets/svg/search.svg) no-repeat center / contain;
    -webkit-mask: url(../../../assets/svg/search.svg) no-repeat center / contain;
  }

  &__icon {
    display: none;
    width: 24px;
    height: 24px;
    background-color: var(--neutral-1-05);
    mask: url(../../../assets/svg/bars-solid.svg) no-repeat center / contain;
    -webkit-mask: url(../../../assets/svg/bars-solid.svg) no-repeat center /
      contain;
  }

  &__close {
    display: none;
  }

  &__mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    max-width: 100%;
    height: 100%;
    max-height: auto;
    background: var(--white);
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.3s linear 0s;

    &-profile {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 16px 0 32px 20px;

      &-avatar {
        height: 96px;
        width: 96px;
        border-radius: 50%;
        cursor: pointer;
        opacity: 1;

        &:hover {
          opacity: 0.8;
        }
      }

      &-fullname {
        margin-left: 16px;
        font-size: 2.4rem;
        line-height: 2.8rem;
        color: var(--neutral-1-02);
      }
    }

    &-list {
      margin-bottom: 24px;
      padding: 0 16px;
    }

    &-item {
      margin-top: 8px;
      padding: 20px 0 20px 20px;
      font-size: 1.6rem;
      line-height: 2rem;
      color: var(--neutral-1-02);
      border-radius: 8px;

      &:hover {
        background: var(--background-6);
      }
    }

    &-connect-wallet {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 98%;
    }
  }

  &__overlay {
    display: none;
  }

  .nft-landing-page-link {
    font-weight: 600;
  }

  &__user-info {
    margin-right: 16px;
    @include largeTextOnCard(var(--neutral-1-05));
  }
}
</style>
