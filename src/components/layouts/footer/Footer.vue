<script setup lang="ts">
import GButton from "@/components/base/GButton.vue";
import GInput from "@/components/base/GInput.vue";
</script>
<template>
  <footer class="footer">
    <div class="footer__wrapper grid wide">
      <div class="footer__about-company">
        <div class="footer__about-company-wrapper">
          <div class="footer__about-company-logo"></div>
          <h1 class="footer__about-company-title">MyNFT.com</h1>
        </div>
        <p class="footer__about-company-description">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
      </div>

      <div class="footer__company-detail">
        <div class="footer__company-detail-info">
          <h3 class="footer__company-detail-info-header">Market Place</h3>
          <p class="footer__company-detail-info-body">Explore</p>
          <p class="footer__company-detail-info-body">How it works</p>
          <p class="footer__company-detail-info-body">Jobs</p>
          <p class="footer__company-detail-info-body">Help center</p>
          <p class="footer__company-detail-info-body">Blogs</p>
        </div>
        <div class="footer__company-detail-info">
          <h3 class="footer__company-detail-info-header">Company</h3>
          <p class="footer__company-detail-info-body">About Us</p>
          <p class="footer__company-detail-info-body">Feature</p>
          <p class="footer__company-detail-info-body">Discover</p>
        </div>

        <div class="footer__company-detail-feedback">
          <div class="footer__company-detail-contact-wrapper">
            <h3 class="footer__company-detail-contact-text">
              Get our lastest updates
            </h3>
            <GInput>
              <template #placeholder> Your email </template>
              <template #rightLabelIcon="{ className }">
                <span :class="className">
                  <GButton buttonType="primary" size="small">
                    Subcribe
                  </GButton>
                </span>
              </template>
            </GInput>
          </div>
          <div class="footer__company-detail-community-wrapper">
            <h3 class="footer__company-detail-community-text">
              Join our comunity
            </h3>
            <div class="footer__company-detail-community-icon">
              <div class="footer__company-detail-community-icon-twiter" />
              <div class="footer__company-detail-community-icon-facebook" />
              <div class="footer__company-detail-community-icon-instagram" />
              <div class="footer__company-detail-community-icon-youtube" />
              <div class="footer__company-detail-community-icon-telegram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "../../../assets/mixin";
// FOOTER
.footer {
  padding: 58px 0;
  max-width: 100vw;
  min-height: 30vh;
  background: var(--neutral-1-01);
  &__wrapper {
    display: flex !important;
    justify-content: space-between;
    align-items: flex-start;
  }

  &__about-company {
    flex: 2;
    &-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 16px;
    }

    &-logo {
      margin: auto 0;
      width: 44px;
      height: 44px;
      background: var(--white);
      mask: url(../../../assets/svg/default-logo.svg) no-repeat center / contain;
      -webkit-mask: url(../../../assets/svg/default-logo.svg) no-repeat center /
        contain;
      cursor: pointer;
    }
    &-title {
      margin: 0 10px 0;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.6rem;
      color: var(--white);
    }
    &-description {
      padding-right: 160px;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2.2rem;
      color: var(--neutral-1-05);
    }
  }

  &__company-detail {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex: 3;

    &-info {
      flex: 1;
      &-header {
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--white);
      }
      &-body {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2rem;
        color: var(--neutral-1-05);
      }
    }

    &-feedback {
      display: flex;
      flex-direction: column;
      flex: 1.6;
    }

    &-contact {
      display: flex;
      flex-direction: column;
      flex: 1;
      &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
      }
      &-text {
        @include largeTextOnCard(var(--white));
      }
    }

    &-community {
      &-wrapper {
        margin-top: auto;
      }
      &-text {
        @include largeTextOnCard(var(--white));
      }

      &-icon {
        display: flex;
        align-items: center;

        &-twiter {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          cursor: pointer;
          background: var(--white);
          mask: url(../../../assets/svg/twiter.svg) no-repeat center / contain;
          -webkit-mask: url(../../../assets/svg/twiter.svg) no-repeat center /
            contain;
        }
        &-facebook {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          cursor: pointer;
          background: var(--white);
          mask: url(../../../assets/svg/facebook.svg) no-repeat center / contain;
          -webkit-mask: url(../../../assets/svg/facebook.svg) no-repeat center /
            contain;
        }
        &-instagram {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          cursor: pointer;
          background: var(--white);
          mask: url(../../../assets/svg/instagram.svg) no-repeat center /
            contain;
          -webkit-mask: url(../../../assets/svg/instagram.svg) no-repeat center /
            contain;
        }
        &-youtube {
          width: 20px;
          height: 20px;
          margin-right: 8px;
          cursor: pointer;
          background: var(--white);
          mask: url("../../../assets/svg/youtube\ 2.svg") no-repeat center /
            contain;
          -webkit-mask: url("../../../assets/svg/youtube\ 2.svg") no-repeat
            center / contain;
        }
        &-telegram {
          width: 20px;
          height: 20px;
          cursor: pointer;
          background: var(--white);
          mask: url(../../../assets/svg/telegram.svg) no-repeat center / contain;
          -webkit-mask: url(../../../assets/svg/telegram.svg) no-repeat center /
            contain;
        }
      }
    }
  }
}
</style>
