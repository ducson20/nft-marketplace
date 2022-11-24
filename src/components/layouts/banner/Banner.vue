<script setup lang="ts">
import { inject } from "vue";
import type { IUserInfoResponse } from "@/services/user";

const userInfo: IUserInfoResponse | any = inject("userInfo");
</script>
<template>
  <header class="header">
    <div class="banner grid wide">
      <div class="banner__decorate-1">
        <img src="../../../assets/svg/gear-nft-1.svg" alt="gear-nft-1" />
      </div>
      <div class="banner__decorate-2">
        <img src="../../../assets/svg/gear-nft-2.svg" alt="gear-nft-2" />
      </div>
      <div class="banner__decorate-3">
        <img src="../../../assets/svg/gear-nft-3.svg" alt="gear-nft-3" />
      </div>
      <div class="banner__info">
        <h1 class="banner__title">
          Discover, collect, and sell extraordinary NFTs
        </h1>
        <p class="banner__description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <router-link :to="{ name: !userInfo?.userID ? 'sign-in' : 'home' }">
          <button class="btn btn--danger banner__explore">
            {{ userInfo?.userID ? "Explore Now" : "Sign In" }}
          </button></router-link
        >
      </div>
      <div class="banner__card">
        <div class="banner__card-top">
          <img src="../../../assets/image/nft-1.png" alt="nft-1" />
          <div class="banner__card-body">
            <p class="banner__card-body-title">Collection name</p>
            <h3 class="banner__card-body-detail-name">
              NFT name Ex Shiba Astronaut
            </h3>
            <div class="banner__card-footer">
              <div class="banner__card-footer-price-info">
                <p class="banner__card-footer-price-text">Price</p>
                <h3 class="banner__card-footer-price-coin">1.0 ETH</h3>
                <p class="banner__card-footer-price-dolar">$130,729.12</p>
              </div>
              <div class="banner__card-footer-offer-info">
                <p class="banner__card-footer-offer-text">Offer</p>
                <h3 class="banner__card-footer-offer-coin">1.0 ETH</h3>
                <p class="banner__card-footer-offer-dolar">$130,729.12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "../../../assets/mixin";
// HEADER
.header {
  min-height: 60vh;
  background: var(--neutral-1-01);

  // BANNER
  .banner {
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 180px;
    z-index: 0;

    &__info {
      flex: 1;
    }

    &__title {
      padding-right: 82px;
      margin-bottom: 20px;
      font-size: 4rem;
      font-weight: 700;
      line-height: 48px;
      color: var(--white);
      @include limitTextRow(2);
    }

    &__description {
      padding-right: 120px;
      margin-bottom: 52px;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 22px;
      color: var(--neutral-1-05);
      @include limitTextRow(3);
    }

    &__card {
      position: relative;
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: flex-end;
      @include rotate();
      //   @include animateCardBanner(3s);

      &-top {
        padding: 20px 30px 0px 20px;
        width: 62%;
        height: var(--card-size-height);
        background: linear-gradient(
          50deg,
          rgba(20, 161, 255, 0.9) 5.69%,
          rgba(245, 61, 245, 0.9) 89.2%
        );
        backdrop-filter: blur(2px);
        border-radius: 16px;
        transform: translateZ(1px);
        z-index: 0;
        box-shadow: 6px 6px 60px 6px rgb(245 61 245 / 20%);

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 98%;
          height: calc(var(--card-size-height) - 4px);
          background: linear-gradient(
            270deg,
            rgba(20, 161, 255, 0.9) 5.69%,
            rgba(245, 61, 245, 0.9) 89.2%
          );
          box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(2px);
          border-radius: 16px;
          z-index: -2;
        }
        img {
          width: 100%;
          height: 54%;
          border-radius: 12px;
          object-fit: cover;
        }
      }

      &-body {
        position: absolute;
        top: 230px;
        left: var(--card-footer-position);
        width: 100%;
        &-title {
          margin-bottom: 6px;
          font-weight: 400;
          font-size: 1.2rem;
          line-height: 18px;
          color: var(--neutral-2-06);
          text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);

          &::after {
            content: "Collection name";
            position: absolute;
            top: 38px;
            left: 60px;
            filter: blur(2px);
            color: var(--neutral-2-07);
          }
        }

        &-detail-name {
          margin-bottom: 12px;
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 24px;
          color: var(--white);
          text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);

          &::after {
            content: "NFT name Ex Shiba Astronaut";
            position: absolute;
            top: 54px;
            left: 60px;
            filter: blur(2px);
            font-weight: 200;
            color: var(--neutral-2-07);
          }
        }
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: var(--card-size-width);
        padding: 10px 12px;
        background: rgba(23, 23, 25, 0.15);
        border-radius: 12px;
        z-index: 0;

        &::after {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 0;
          right: 0;
          width: calc(var(--card-size-width) - 1%);
          height: 94px;
          border-radius: 12px;
          background: linear-gradient(
            275.6deg,
            rgba(20, 161, 255, 0.5) 13.18%,
            rgba(245, 61, 245, 0.5) 93.73%
          );
          z-index: -1;
        }

        &-price-text,
        &-price-dolar,
        &-offer-text,
        &-offer-dolar {
          @include smallTextOnCard(var(--neutral-2-06));
        }
        &-price-coin,
        &-offer-coin {
          @include smallTextOnCard(var(--white));
        }
      }
    }

    &__decorate-1,
    &__decorate-2,
    &__decorate-3 {
      position: absolute;
    }

    &__decorate-1 {
      top: 70px;
      right: 44%;

      &::after {
        content: "";
        position: absolute;
        top: 90px;
        left: 36px;
        bottom: 0;
        width: 100px;
        height: 46px;
        border-radius: 50%;
        background: linear-gradient(
          270deg,
          rgba(20, 161, 255, 0.3) 5.69%,
          rgba(245, 61, 245, 0.3) 89.2%
        );
        filter: blur(12px);
        transform: rotate(-32.63deg);
      }
    }
    &__decorate-2 {
      top: 70px;
      right: 0;

      &::after {
        content: "";
        position: absolute;
        top: 90px;
        left: 36px;
        bottom: 0;
        width: 100px;
        height: 46px;
        border-radius: 50%;
        background: linear-gradient(
          270deg,
          rgba(20, 161, 255, 0.3) 5.69%,
          rgba(245, 61, 245, 0.3) 89.2%
        );
        filter: blur(12px);
        transform: rotate(146.68deg);
      }
    }
    &__decorate-3 {
      right: 30px;
      bottom: -80px;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 20px;
        width: 100px;
        height: 46px;
        border-radius: 50%;
        background: linear-gradient(
          270deg,
          rgba(20, 161, 255, 0.34) 5.69%,
          rgba(245, 61, 245, 0.34) 89.2%
        );
        filter: blur(12px);
        transform: rotate(12.98deg);
      }
    }
  }
}
</style>
