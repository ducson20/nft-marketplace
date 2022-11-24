<script setup lang="ts">
import GButton from "@/components/base/GButton.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import { useSelectOption } from "@/hooks/useSelectOption";
import SelectOptionEnum from "@/enums/SelectionOptionEnum";
type ISwiper = {
  navigation: any;
};

const swiperProperties: ISwiper = {
  navigation: true,
};

const options = useSelectOption([SelectOptionEnum.ROLE]);

</script>

<template>
  <!-- BODY -->
  <main class="grid wide body__layout">
    <!-- AUCTION -->
    <section class="auction">
      <div class="auction__nav">
        <div class="auction__nav-left-feature">
          <span class="auction__nav-left-feature-title">Hot Auctions</span>
          <GButton buttonType="primary">Ethereum</GButton>
        </div>
        <div class="auction__nav-right-feature">
          <button class="btn btn--light auction__nav-see-all">See all</button>
          <button class="btn btn--light">
            <div class="auction__nav-arrow-left-icon"></div>
          </button>
          <button class="btn btn--light">
            <div class="auction__nav-arrow-right-icon"></div>
          </button>
        </div>
      </div>
      <div class="grid wide auction__body">
        <div class="row auction__cards">
          <div class="col l-3 m-6 c-12 auction__card">
            <div class="auction__card-header">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="auction__card-inner">
              <div class="auction__card-body">
                <div class="auction__card-body-inner-1">
                  <p class="auction__card-body-title">Collection name</p>
                  <h3 class="auction__card-body-detail-name">
                    NFT name Ex Shiba
                  </h3>
                </div>
                <div class="auction__card-body-info">
                  <div class="auction__card-body-info-price">
                    <p class="auction__card-body-info-price-text">
                      Current bid
                    </p>
                    <h3 class="auction__card-body-info-price-coin">300 ETH</h3>
                    <p class="auction__card-body-info-price-dolar">
                      $130,729.12
                    </p>
                  </div>
                  <div class="auction__card-body-info-auction">
                    <p class="auction__card-body-info-auction-text">
                      Auction ending in
                    </p>
                    <h3 class="auction__card-body-info-auction-time">
                      03d : 25h : 05m
                    </h3>
                    <p class="auction__card-body-info-auction-bids">Bids: 25</p>
                  </div>
                </div>
              </div>
              <div class="auction__card-divider"></div>
              <div class="auction__card-footer">
                <div class="auction__card-footer-avatar">
                  <img
                    class="auction__card-footer-avatar-img"
                    src="../../assets/image/avatar.png"
                    alt="avatar"
                  />
                  <span class="auction__card-footer-avatar-major"
                    >Artist name</span
                  >
                </div>
                <div class="auction__card-footer-like">
                  <div class="auction__card-footer-like-icon"></div>
                  <span class="auction__card-footer-like-number">1243</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 auction__card">
            <div class="auction__card-header">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="auction__card-inner">
              <div class="auction__card-body">
                <div class="auction__card-body-inner-1">
                  <p class="auction__card-body-title">Collection name</p>
                  <h3 class="auction__card-body-detail-name">
                    NFT name Ex Shiba
                  </h3>
                </div>
                <div class="auction__card-body-info">
                  <div class="auction__card-body-info-price">
                    <p class="auction__card-body-info-price-text">
                      Current bid
                    </p>
                    <h3 class="auction__card-body-info-price-coin">300 ETH</h3>
                    <p class="auction__card-body-info-price-dolar">
                      $130,729.12
                    </p>
                  </div>
                  <div class="auction__card-body-info-auction">
                    <p class="auction__card-body-info-auction-text">
                      Auction ending in
                    </p>
                    <h3 class="auction__card-body-info-auction-time">
                      03d : 25h : 05m
                    </h3>
                    <p class="auction__card-body-info-auction-bids">Bids: 25</p>
                  </div>
                </div>
              </div>
              <div class="auction__card-divider"></div>
              <div class="auction__card-footer">
                <div class="auction__card-footer-avatar">
                  <img
                    class="auction__card-footer-avatar-img"
                    src="../../assets/image/avatar.png"
                    alt="avatar"
                  />
                  <span class="auction__card-footer-avatar-major"
                    >Artist name</span
                  >
                </div>
                <div class="auction__card-footer-like">
                  <div class="auction__card-footer-like-icon"></div>
                  <span class="auction__card-footer-like-number">1243</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 auction__card">
            <div class="auction__card-header">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="auction__card-inner">
              <div class="auction__card-body">
                <div class="auction__card-body-inner-1">
                  <p class="auction__card-body-title">Collection name</p>
                  <h3 class="auction__card-body-detail-name">
                    NFT name Ex Shiba
                  </h3>
                </div>
                <div class="auction__card-body-info">
                  <div class="auction__card-body-info-price">
                    <p class="auction__card-body-info-price-text">
                      Current bid
                    </p>
                    <h3 class="auction__card-body-info-price-coin">300 ETH</h3>
                    <p class="auction__card-body-info-price-dolar">
                      $130,729.12
                    </p>
                  </div>
                  <div class="auction__card-body-info-auction">
                    <p class="auction__card-body-info-auction-text">
                      Auction ending in
                    </p>
                    <h3 class="auction__card-body-info-auction-time">
                      03d : 25h : 05m
                    </h3>
                    <p class="auction__card-body-info-auction-bids">Bids: 25</p>
                  </div>
                </div>
              </div>
              <div class="auction__card-divider"></div>
              <div class="auction__card-footer">
                <div class="auction__card-footer-avatar">
                  <img
                    class="auction__card-footer-avatar-img"
                    src="../../assets/image/avatar.png"
                    alt="avatar"
                  />
                  <span class="auction__card-footer-avatar-major"
                    >Artist name</span
                  >
                </div>
                <div class="auction__card-footer-like">
                  <div class="auction__card-footer-like-icon"></div>
                  <span class="auction__card-footer-like-number">1243</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 auction__card">
            <div class="auction__card-header">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="auction__card-inner">
              <div class="auction__card-body">
                <div class="auction__card-body-inner-1">
                  <p class="auction__card-body-title">Collection name</p>
                  <h3 class="auction__card-body-detail-name">
                    NFT name Ex Shiba
                  </h3>
                </div>
                <div class="auction__card-body-info">
                  <div class="auction__card-body-info-price">
                    <p class="auction__card-body-info-price-text">
                      Current bid
                    </p>
                    <h3 class="auction__card-body-info-price-coin">300 ETH</h3>
                    <p class="auction__card-body-info-price-dolar">
                      $130,729.12
                    </p>
                  </div>
                  <div class="auction__card-body-info-auction">
                    <p class="auction__card-body-info-auction-text">
                      Auction ending in
                    </p>
                    <h3 class="auction__card-body-info-auction-time">
                      03d : 25h : 05m
                    </h3>
                    <p class="auction__card-body-info-auction-bids">Bids: 25</p>
                  </div>
                </div>
              </div>
              <div class="auction__card-divider"></div>
              <div class="auction__card-footer">
                <div class="auction__card-footer-avatar">
                  <img
                    class="auction__card-footer-avatar-img"
                    src="../../assets/image/avatar.png"
                    alt="avatar"
                  />
                  <span class="auction__card-footer-avatar-major"
                    >Artist name</span
                  >
                </div>
                <div class="auction__card-footer-like">
                  <div class="auction__card-footer-like-icon"></div>
                  <span class="auction__card-footer-like-number">1243</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- COLLECTION -->
    <section class="collection">
      <div class="collection__nav">
        <span class="collection__nav-mobile-title">Popular Collections</span>
        <div class="collection__nav-feature">
          <div class="collection__nav-left-feature">
            <span class="collection__nav-left-feature-title"
              >Popular Collections</span
            >
            <button
              class="btn btn--primary collection__nav-left-feature-ethereum"
            >
              Ethereum
            </button>
            <div class="collection__nav-left-feature-btn-wrapper">
              <button class="btn collection__nav-left-feature-today">
                Today
              </button>
              <button class="btn collection__nav-left-feature-week">
                This week
              </button>
              <button class="btn collection__nav-left-feature-month">
                This month
              </button>
            </div>
          </div>
          <div class="collection__nav-right-feature">
            <button class="btn btn--light collection__nav-see-all">
              See all
            </button>
            <button class="btn btn--light">
              <div class="collection__nav-arrow-left-icon"></div>
            </button>
            <button class="btn btn--light">
              <div class="collection__nav-arrow-right-icon"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="grid wide collection__body">
        <div class="row collection__cards">
          <div class="col l-4 m-6 c-12">
            <div class="collection__card">
              <div class="collection__card-top">
                <img
                  class="collection__card-top-thumbnail"
                  src="../../assets/image/card-1.png"
                  alt=""
                />
                <div class="collection__card-top-right-image">
                  <img
                    class="collection__card-top-right-image-top"
                    src="../../assets/image/card-1.png"
                    alt=""
                  />
                  <div class="collection__card-top-right-image-bottom">
                    <div class="collection__card-top-right-image-bottom-1">
                      <img src="../../assets/image/card-1.png" alt="" />
                    </div>

                    <div class="collection__card-top-right-image-bottom-2">
                      <img src="../../assets/image/card-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="collection__card-bottom">
                <div class="collection__card-bottom-nft-name">
                  <h3 class="collection__card-bottom-nft-name-main">
                    NFT name Ex Shiba Astronaut
                  </h3>
                  <p class="collection__card-bottom-nft-name-sub">
                    Floor: 19 ETH ~ $108.7K
                  </p>
                </div>
                <div class="collection__card-bottom-nft-price">
                  <h3 class="collection__card-bottom-nft-price-main">
                    128 ETH
                  </h3>
                  <p class="collection__card-bottom-nft-price-sub">-29%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col l-4 m-6 c-12">
            <div class="collection__card">
              <div class="collection__card-top">
                <img
                  class="collection__card-top-thumbnail"
                  src="../../assets/image/card-1.png"
                  alt=""
                />
                <div class="collection__card-top-right-image">
                  <img
                    class="collection__card-top-right-image-top"
                    src="../../assets/image/card-1.png"
                    alt=""
                  />
                  <div class="collection__card-top-right-image-bottom">
                    <div class="collection__card-top-right-image-bottom-1">
                      <img src="../../assets/image/card-1.png" alt="" />
                    </div>

                    <div class="collection__card-top-right-image-bottom-2">
                      <img src="../../assets/image/card-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="collection__card-bottom">
                <div class="collection__card-bottom-nft-name">
                  <h3 class="collection__card-bottom-nft-name-main">
                    NFT name Ex Shiba Astronaut
                  </h3>
                  <p class="collection__card-bottom-nft-name-sub">
                    Floor: 19 ETH ~ $108.7K
                  </p>
                </div>
                <div class="collection__card-bottom-nft-price">
                  <h3 class="collection__card-bottom-nft-price-main">
                    128 ETH
                  </h3>
                  <p class="collection__card-bottom-nft-price-sub">-29%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col l-4 m-6 c-12">
            <div class="collection__card">
              <div class="collection__card-top">
                <img
                  class="collection__card-top-thumbnail"
                  src="../../assets/image/card-1.png"
                  alt=""
                />
                <div class="collection__card-top-right-image">
                  <img
                    class="collection__card-top-right-image-top"
                    src="../../assets/image/card-1.png"
                    alt=""
                  />
                  <div class="collection__card-top-right-image-bottom">
                    <div class="collection__card-top-right-image-bottom-1">
                      <img src="../../assets/image/card-1.png" alt="" />
                    </div>

                    <div class="collection__card-top-right-image-bottom-2">
                      <img src="../../assets/image/card-1.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="collection__card-bottom">
                <div class="collection__card-bottom-nft-name">
                  <h3 class="collection__card-bottom-nft-name-main">
                    NFT name Ex Shiba Astronaut
                  </h3>
                  <p class="collection__card-bottom-nft-name-sub">
                    Floor: 19 ETH ~ $108.7K
                  </p>
                </div>
                <div class="collection__card-bottom-nft-price">
                  <h3 class="collection__card-bottom-nft-price-main">
                    128 ETH
                  </h3>
                  <p class="collection__card-bottom-nft-price-sub">-29%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TOP ARTISTS -->
    <section class="top-artists">
      <div class="top-artists__nav">
        <span class="top-artists__nav-mobile-title">Top Artists</span>
        <div class="top-artists__nav-feature">
          <div class="top-artists__nav-left-feature">
            <span class="top-artists__nav-left-feature-title">Top Artists</span>
            <button
              class="btn btn--primary top-artists__nav-left-feature-ethereum"
            >
              Ethereum
            </button>
          </div>
          <div class="top-artists__nav-right-feature">
            <button
              class="btn btn--light top-artists__nav-right-feature-see-all"
            >
              See all
            </button>
          </div>
        </div>
      </div>
      <div class="grid wide top-artists__body">
        <div class="row top-artists__cards">
          <div class="col l-4 m-6 c-12">
            <div class="top-artists__card">
              <span class="top-artists__card-artist-number">1</span>
              <div class="top-artists__card-avatar">
                <img src="../../assets/image/card-1.png" alt="avatar" />
              </div>
              <div class="top-artists__card-info">
                <h3 class="top-artists__card-info-name">Phuong Pham</h3>
                <div class="top-artists__card-info-coin">
                  <div class="top-artists__card-info-coin-icon"></div>
                  <span class="top-artists__card-info-coin-number">2,798</span>
                </div>
              </div>
              <div class="top-artists__card-detail">
                <div class="top-artists__card-detail-nfts">
                  <img
                    class="top-artists__card-detail-nft-1"
                    src="../../assets/svg/gear-nft-4.svg"
                    alt="gear-nft-4"
                  />
                  <img
                    class="top-artists__card-detail-nft-2"
                    src="../../assets/svg/gear-nft-5.svg"
                    alt="gear-nft-5"
                  />
                  <img
                    class="top-artists__card-detail-nft-3"
                    src="../../assets/svg/gear-nft-6.svg"
                    alt="gear-nft-6"
                  />
                </div>
                <p class="top-artists__card-detail-follower">
                  Follow by mikain and 2,129 users
                </p>
              </div>
            </div>
          </div>
          <div class="col l-4 m-6 c-12">
            <div class="top-artists__card">
              <span class="top-artists__card-artist-number">1</span>
              <div class="top-artists__card-avatar">
                <img src="../../assets/image/card-1.png" alt="avatar" />
              </div>
              <div class="top-artists__card-info">
                <h3 class="top-artists__card-info-name">Phuong Pham</h3>
                <div class="top-artists__card-info-coin">
                  <div class="top-artists__card-info-coin-icon"></div>
                  <span class="top-artists__card-info-coin-number">2,798</span>
                </div>
              </div>
              <div class="top-artists__card-detail">
                <div class="top-artists__card-detail-nfts">
                  <img
                    class="top-artists__card-detail-nft-1"
                    src="../../assets/svg/gear-nft-4.svg"
                    alt="gear-nft-4"
                  />
                  <img
                    class="top-artists__card-detail-nft-2"
                    src="../../assets/svg/gear-nft-5.svg"
                    alt="gear-nft-5"
                  />
                  <img
                    class="top-artists__card-detail-nft-3"
                    src="../../assets/svg/gear-nft-6.svg"
                    alt="gear-nft-6"
                  />
                </div>
                <p class="top-artists__card-detail-follower">
                  Follow by mikain and 2,129 users
                </p>
              </div>
            </div>
          </div>
          <div class="col l-4 m-6 c-12">
            <div class="top-artists__card">
              <span class="top-artists__card-artist-number">1</span>
              <div class="top-artists__card-avatar">
                <img src="../../assets/image/card-1.png" alt="avatar" />
              </div>
              <div class="top-artists__card-info">
                <h3 class="top-artists__card-info-name">Phuong Pham</h3>
                <div class="top-artists__card-info-coin">
                  <div class="top-artists__card-info-coin-icon"></div>
                  <span class="top-artists__card-info-coin-number">2,798</span>
                </div>
              </div>
              <div class="top-artists__card-detail">
                <div class="top-artists__card-detail-nfts">
                  <img
                    class="top-artists__card-detail-nft-1"
                    src="../../assets/svg/gear-nft-4.svg"
                    alt="gear-nft-4"
                  />
                  <img
                    class="top-artists__card-detail-nft-2"
                    src="../../assets/svg/gear-nft-5.svg"
                    alt="gear-nft-5"
                  />
                  <img
                    class="top-artists__card-detail-nft-3"
                    src="../../assets/svg/gear-nft-6.svg"
                    alt="gear-nft-6"
                  />
                </div>
                <p class="top-artists__card-detail-follower">
                  Follow by mikain and 2,129 users
                </p>
              </div>
            </div>
          </div>
          <div class="col l-4 m-6 c-12">
            <div class="top-artists__card">
              <span class="top-artists__card-artist-number">1</span>
              <div class="top-artists__card-avatar">
                <img src="../../assets/image/card-1.png" alt="avatar" />
              </div>
              <div class="top-artists__card-info">
                <h3 class="top-artists__card-info-name">Phuong Pham</h3>
                <div class="top-artists__card-info-coin">
                  <div class="top-artists__card-info-coin-icon"></div>
                  <span class="top-artists__card-info-coin-number">2,798</span>
                </div>
              </div>
              <div class="top-artists__card-detail">
                <div class="top-artists__card-detail-nfts">
                  <img
                    class="top-artists__card-detail-nft-1"
                    src="../../assets/svg/gear-nft-4.svg"
                    alt="gear-nft-4"
                  />
                  <img
                    class="top-artists__card-detail-nft-2"
                    src="../../assets/svg/gear-nft-5.svg"
                    alt="gear-nft-5"
                  />
                  <img
                    class="top-artists__card-detail-nft-3"
                    src="../../assets/svg/gear-nft-6.svg"
                    alt="gear-nft-6"
                  />
                </div>
                <p class="top-artists__card-detail-follower">
                  Follow by mikain and 2,129 users
                </p>
              </div>
            </div>
          </div>
          <div class="col l-4 m-6 c-12">
            <div class="top-artists__card">
              <span class="top-artists__card-artist-number">1</span>
              <div class="top-artists__card-avatar">
                <img src="../../assets/image/card-1.png" alt="avatar" />
              </div>
              <div class="top-artists__card-info">
                <h3 class="top-artists__card-info-name">Phuong Pham</h3>
                <div class="top-artists__card-info-coin">
                  <div class="top-artists__card-info-coin-icon"></div>
                  <span class="top-artists__card-info-coin-number">2,798</span>
                </div>
              </div>
              <div class="top-artists__card-detail">
                <div class="top-artists__card-detail-nfts">
                  <img
                    class="top-artists__card-detail-nft-1"
                    src="../../assets/svg/gear-nft-4.svg"
                    alt="gear-nft-4"
                  />
                  <img
                    class="top-artists__card-detail-nft-2"
                    src="../../assets/svg/gear-nft-5.svg"
                    alt="gear-nft-5"
                  />
                  <img
                    class="top-artists__card-detail-nft-3"
                    src="../../assets/svg/gear-nft-6.svg"
                    alt="gear-nft-6"
                  />
                </div>
                <p class="top-artists__card-detail-follower">
                  Follow by mikain and 2,129 users
                </p>
              </div>
            </div>
          </div>
          <div class="col l-4 m-6 c-12">
            <div class="top-artists__card">
              <span class="top-artists__card-artist-number">1</span>
              <div class="top-artists__card-avatar">
                <img src="../../assets/image/card-1.png" alt="avatar" />
              </div>
              <div class="top-artists__card-info">
                <h3 class="top-artists__card-info-name">Phuong Pham</h3>
                <div class="top-artists__card-info-coin">
                  <div class="top-artists__card-info-coin-icon"></div>
                  <span class="top-artists__card-info-coin-number">2,798</span>
                </div>
              </div>
              <div class="top-artists__card-detail">
                <div class="top-artists__card-detail-nfts">
                  <img
                    class="top-artists__card-detail-nft-1"
                    src="../../assets/svg/gear-nft-4.svg"
                    alt="gear-nft-4"
                  />
                  <img
                    class="top-artists__card-detail-nft-2"
                    src="../../assets/svg/gear-nft-5.svg"
                    alt="gear-nft-5"
                  />
                  <img
                    class="top-artists__card-detail-nft-3"
                    src="../../assets/svg/gear-nft-6.svg"
                    alt="gear-nft-6"
                  />
                </div>
                <p class="top-artists__card-detail-follower">
                  Follow by mikain and 2,129 users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TRENDING NFTs -->
    <section class="trending-nft">
      <div class="trending-nft__nav">
        <span class="trending-nft__nav-mobile-title">Trending-nfts</span>
        <div class="trending-nft__nav-feature">
          <div class="trending-nft__nav-left-feature">
            <span class="trending-nft__nav-left-feature-title"
              >Trending-nfts</span
            >
            <button
              class="btn btn--primary trending-nft__nav-left-feature-ethereum"
            >
              Ethereum
            </button>
            <div class="trending-nft__nav-left-feature-btn-wrapper">
              <button class="btn trending-nft__nav-left-feature-today">
                Today
              </button>
              <button class="btn trending-nft__nav-left-feature-week">
                This week
              </button>
              <button class="btn trending-nft__nav-left-feature-month">
                This month
              </button>
            </div>
          </div>
          <div class="trending-nft__nav-right-feature">
            <button class="btn btn--light trending-nft__nav-see-all">
              See all
            </button>
            <button class="btn btn--light">
              <div class="trending-nft__nav-arrow-left-icon"></div>
            </button>
            <button class="btn btn--light">
              <div class="trending-nft__nav-arrow-right-icon"></div>
            </button>
          </div>
        </div>
      </div>
      <swiper
        class="grid wide trending-nft__body mySwiper"
        :slidesPerView="4"
        :loop="true"
        :centerSlide="true"
        :fade="true"
        :grabCursor="true"
        :loopFillGroupWithBlank="true"
        :navigation="swiperProperties.navigation"
        :breakpoints="{
          0: {
            slidesPerView: 1,
          },
          740: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }"
        :modules="[Pagination, Navigation]"
      >
        <swiper-slide >
          <div class="trending-nft__card">
            <div class="trending-nft__card-top">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="trending-nft__card-bottom">
              <div class="trending-nft__card-bottom-header">
                <p class="trending-nft__card-bottom-header-title">
                  Collection name
                </p>
                <h3 class="trending-nft__card-bottom-header-detail-name">
                  NFT
                </h3>
              </div>
              <div class="trending-nft__card-bottom-footer">
                <div class="trending-nft__card-bottom-footer-price-info">
                  <p class="trending-nft__card-bottom-footer-price-text">
                    Price
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-price-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-price-dolar">
                    $130,729.12
                  </p>
                </div>
                <div class="trending-nft__card-bottom-footer-offer-info">
                  <p class="trending-nft__card-bottom-footer-offer-text">
                    Offer
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-offer-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-offer-dolar">
                    4hrs left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="col l-3 m-6 c-12">
          <div class="trending-nft__card">
            <div class="trending-nft__card-top">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="trending-nft__card-bottom">
              <div class="trending-nft__card-bottom-header">
                <p class="trending-nft__card-bottom-header-title">
                  Collection name
                </p>
                <h3 class="trending-nft__card-bottom-header-detail-name">
                  NFT 1
                </h3>
              </div>
              <div class="trending-nft__card-bottom-footer">
                <div class="trending-nft__card-bottom-footer-price-info">
                  <p class="trending-nft__card-bottom-footer-price-text">
                    Price
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-price-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-price-dolar">
                    $130,729.12
                  </p>
                </div>
                <div class="trending-nft__card-bottom-footer-offer-info">
                  <p class="trending-nft__card-bottom-footer-offer-text">
                    Offer
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-offer-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-offer-dolar">
                    4hrs left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="col l-3 m-6 c-12">
          <div class="trending-nft__card">
            <div class="trending-nft__card-top">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="trending-nft__card-bottom">
              <div class="trending-nft__card-bottom-header">
                <p class="trending-nft__card-bottom-header-title">
                  Collection name
                </p>
                <h3 class="trending-nft__card-bottom-header-detail-name">
                  NFT 2
                </h3>
              </div>
              <div class="trending-nft__card-bottom-footer">
                <div class="trending-nft__card-bottom-footer-price-info">
                  <p class="trending-nft__card-bottom-footer-price-text">
                    Price
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-price-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-price-dolar">
                    $130,729.12
                  </p>
                </div>
                <div class="trending-nft__card-bottom-footer-offer-info">
                  <p class="trending-nft__card-bottom-footer-offer-text">
                    Offer
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-offer-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-offer-dolar">
                    4hrs left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="col l-3 m-6 c-12">
          <div class="trending-nft__card">
            <div class="trending-nft__card-top">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="trending-nft__card-bottom">
              <div class="trending-nft__card-bottom-header">
                <p class="trending-nft__card-bottom-header-title">
                  Collection name
                </p>
                <h3 class="trending-nft__card-bottom-header-detail-name">
                  NFT 3
                </h3>
              </div>
              <div class="trending-nft__card-bottom-footer">
                <div class="trending-nft__card-bottom-footer-price-info">
                  <p class="trending-nft__card-bottom-footer-price-text">
                    Price
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-price-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-price-dolar">
                    $130,729.12
                  </p>
                </div>
                <div class="trending-nft__card-bottom-footer-offer-info">
                  <p class="trending-nft__card-bottom-footer-offer-text">
                    Offer
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-offer-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-offer-dolar">
                    4hrs left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="col l-3 m-6 c-12">
          <div class="trending-nft__card">
            <div class="trending-nft__card-top">
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="trending-nft__card-bottom">
              <div class="trending-nft__card-bottom-header">
                <p class="trending-nft__card-bottom-header-title">
                  Collection name
                </p>
                <h3 class="trending-nft__card-bottom-header-detail-name">
                  NFT 4
                </h3>
              </div>
              <div class="trending-nft__card-bottom-footer">
                <div class="trending-nft__card-bottom-footer-price-info">
                  <p class="trending-nft__card-bottom-footer-price-text">
                    Price
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-price-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-price-dolar">
                    $130,729.12
                  </p>
                </div>
                <div class="trending-nft__card-bottom-footer-offer-info">
                  <p class="trending-nft__card-bottom-footer-offer-text">
                    Offer
                  </p>
                  <h3 class="trending-nft__card-bottom-footer-offer-coin">
                    1.0 ETH
                  </h3>
                  <p class="trending-nft__card-bottom-footer-offer-dolar">
                    4hrs left
                  </p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>

    <!-- ADVERTISE -->
    <section class="advertise">
      <div class="advertise__cards">
        <div class="advertise__card">
          <div class="advertise__card-top">
            <img src="../../assets/image/card-1.png" alt="" />
          </div>
          <div class="advertise__card-bottom">
            <h3 class="advertise__card-bottom-title">Awkward Astronauts</h3>
            <p class="advertise__card-bottom-sub-title">Aditional info</p>
          </div>
        </div>
        <div class="advertise__card">
          <div class="advertise__card-top">
            <img src="../../assets/image/card-1.png" alt="" />
          </div>
          <div class="advertise__card-bottom">
            <h3 class="advertise__card-bottom-title">Awkward Astronauts</h3>
            <p class="advertise__card-bottom-sub-title">Aditional info</p>
          </div>
        </div>
      </div>
      <div class="advertise__info">
        <h1 class="advertise__info-title">List your art on MyNFT</h1>
        <p class="advertise__info-sub-title">
          Are you an artist or NFT project creator? Get in touch with us to get
          your content on Nifty Gateway!
        </p>

        <div class="advertise__info-feature">
          <button class="btn btn--danger advertise__info-feature-artist">
            I am an artist
          </button>
          <button class="btn btn--special advertise__info-feature-buyer">
            <span>I am an buyer</span>
          </button>
        </div>
      </div>
    </section>

    <!-- CATEGORY -->
    <section class="category">
      <div class="category__nav">
        <p class="category__nav-title">Browse by category</p>
      </div>
      <div class="category__body grid wide">
        <div class="row category__body-cards">
          <div class="col l-3 m-6 c-12 category__body-card">
            <div class="category__body-card-images">
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="category__body-card-info">
              <h3 class="category__body-card-info-title">ART</h3>
              <p class="category__body-card-info-item">28 items</p>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 category__body-card">
            <div class="category__body-card-images">
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="category__body-card-info">
              <span class="category__body-card-info-title">ART</span>
              <span class="category__body-card-info-item">28 items</span>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 category__body-card">
            <div class="category__body-card-images">
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="category__body-card-info">
              <span class="category__body-card-info-title">ART</span>
              <span class="category__body-card-info-item">28 items</span>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 category__body-card">
            <div class="category__body-card-images">
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
              <img src="../../assets/image/card-1.png" alt="" />
            </div>
            <div class="category__body-card-info">
              <span class="category__body-card-info-title">ART</span>
              <span class="category__body-card-info-item">28 items</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MARKETPLACE -->
    <section class="marketplace">
      <div class="marketplace__info">
        <h1 class="marketplace__info-title">
          The Premier Marketplace for NFTs
        </h1>
        <p class="marketplace__info-sub-title">
          MyNFT is the premier marketplace for item in blockchain, which are
          digital items you can truly own. Digital Items have existed for a long
          time, but never like this.
        </p>

        <div class="marketplace__info-feature">
          <button class="btn btn--light marketplace__info-feature-learn-more">
            Learn more
          </button>
        </div>
      </div>
      <div class="marketplace__cards">
        <div class="marketplace__card-left">
          <img src="../../assets/image/card-1.png" alt="" />
        </div>
        <div class="marketplace__card-right">
          <div class="marketplace__card-right-top">
            <img src="../../assets/image/card-1.png" alt="" />
          </div>
          <div class="marketplace__card-right-bottom">
            <img src="../../assets/image/card-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!-- NFT -->
    <section class="nft">
      <div class="nft__overlay"></div>
      <div class="nft__info">
        <h1 class="nft__info-title">Why MyNFT</h1>
        <p class="nft__info-sub-title">
          Are you an artist or NFT project creator? Get in touch with us to get
          your content on Nifty Gateway!
        </p>
        <div class="nft__info-feature">
          <button class="btn btn--danger nft__info-feature-explore">
            Explore the marketplace
          </button>
        </div>
      </div>
      <div class="nft__card">
        <img src="../../assets/image/youtube.png" alt="" />
      </div>
    </section>

    <!-- SELL NFTs -->
    <section class="sell">
      <div class="sell__nav">
        <p class="sell__nav-title">Create and Sell your NFTs</p>
      </div>
      <div class="grid wide sell__body">
        <div class="row sell__cards">
          <div class="col l-3 m-6 c-12 sell__card">
            <div class="sell__card-top">
              <img src="../../assets/svg/wallet.svg" alt="" />
            </div>
            <div class="sell__card-bottom">
              <div class="sell__card-bottom-header">
                <p class="sell__card-bottom-header-title">Set up your wallet</p>
              </div>
              <div class="sell__card-bottom-footer">
                <p class="sell__card-bottom-footer-title">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. We will help to sell your NFTs!
                </p>
              </div>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 sell__card">
            <div class="sell__card-top">
              <img src="../../assets/svg/wallet.svg" alt="" />
            </div>
            <div class="sell__card-bottom">
              <div class="sell__card-bottom-header">
                <p class="sell__card-bottom-header-title">Set up your wallet</p>
              </div>
              <div class="sell__card-bottom-footer">
                <p class="sell__card-bottom-footer-title">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. We will help to sell your NFTs,
                  fixed-price listings, and declining-price listings!
                </p>
              </div>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 sell__card">
            <div class="sell__card-top">
              <img src="../../assets/svg/wallet.svg" alt="" />
            </div>
            <div class="sell__card-bottom">
              <div class="sell__card-bottom-header">
                <p class="sell__card-bottom-header-title">Set up your wallet</p>
              </div>
              <div class="sell__card-bottom-footer">
                <p class="sell__card-bottom-footer-title">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. We will help to sell your NFTs!
                </p>
              </div>
            </div>
          </div>
          <div class="col l-3 m-6 c-12 sell__card">
            <div class="sell__card-top">
              <img src="../../assets/svg/wallet.svg" alt="" />
            </div>
            <div class="sell__card-bottom">
              <div class="sell__card-bottom-header">
                <p class="sell__card-bottom-header-title">Set up your wallet</p>
              </div>
              <div class="sell__card-bottom-footer">
                <p class="sell__card-bottom-footer-title">
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. We will help to sell your NFTs,
                  fixed-price listings, and declining-price listings!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--APP DOWNLOAD -->
    <section class="app-download">
      <div class="app-download__info">
        <p class="app-download__info-title">
          <b class="app-download__info-title--bold">MDownload MyNFTs app</b>
          to track your NFT portfolio and discover drops
        </p>
        <div class="app-download__info-feature">
          <button
            class="btn btn--primary app-download__info-feature-apple-store"
          >
            Apple store
          </button>
          <button
            class="btn btn--primary app-download__info-feature-google-play"
          >
            Google play
          </button>
        </div>
      </div>
      <div class="app-download__app-install">
        <div class="app-download__mobile-app">
          <img src="../../assets/image/mobile.png" alt="" />
        </div>
        <div class="app-download__qr">
          <div class="app-download__qr-code">
            <img src="../../assets/svg/qr-code.svg" alt="" />
          </div>
          <div class="app-download__qr-info">
            <div class="app-download__qr-info-arrow-left-icon"></div>
            <p class="app-download__qr-info-text">Scan to download MyNFT app</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
@import "../../assets/mixin";
// BODY
.body__layout {
  --distant-bottom: 136px;
  z-index: 1;
  // AUCTION
  .auction {
    margin-bottom: var(--distant-bottom);
    &__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: auto 0;
      margin-top: 120px;
      margin-bottom: 32px;

      &-left-feature {
        display: flex;
        align-items: center;
        &-title {
          margin-right: 16px;
          font-size: 3.2rem;
          font-weight: 600;
          line-height: 48px;
          background: var(--primary-1-01);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }

      &-right-feature {
        display: flex;
        button {
          &:nth-child(1) {
            margin-right: 16px;
          }
          &:nth-child(2) {
            margin-right: 8px;
          }
        }
      }

      &-arrow-left-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
      }

      &-arrow-right-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat
          center / contain;
      }
    }

    &__body {
      .col {
        background-clip: content-box;
      }
    }

    &__card {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      background: white;
      border-radius: 24px;
      cursor: pointer;
      opacity: 1;
      transition: all 0.3 linear 0s;
      &:hover {
        opacity: 0.9;
      }

      &-header {
        display: flex;
        justify-content: center;
        flex-shrink: 0;
        padding: 14px 0;
        img {
          width: 90%;
          height: auto;
          border-radius: 16px;
        }
      }

      &-inner {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      &-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 16px 8px;

        &-inner-1 {
          flex: 1;
          flex-direction: column;
        }

        &-title {
          @include smallTextOnCard(var(--neutral-1-04));
        }

        &-detail-name {
          margin-bottom: 16px;
          font-size: 1.8rem;
          font-weight: 600;
          line-height: 2.4rem;
          color: var(--neutral-1-01);
          @include limitTextRow(3);
        }

        &-info {
          margin-top: auto;
          flex-shrink: 0;
          display: flex;
          justify-content: space-between;
          margin-bottom: auto;
          &-price {
            &-text,
            &-dolar {
              @include smallTextOnCard(var(--neutral-1-04));
            }

            &-coin {
              @include largeTextOnCard(var(--neutral-1-01));
            }
          }
          &-auction {
            &-text,
            &-bids {
              @include smallTextOnCard(var(--neutral-1-04));
            }
            &-time {
              @include largeTextOnCard(var(--neutral-1-01));
            }
          }
        }
      }

      &-divider {
        height: 2px;
        position: relative;
        width: 100%;
        background: radial-gradient(
          ellipse farthest-side at top center,
          transparent,
          #0698f9,
          #f906f9,
          transparent
        );
      }

      &-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 16px;
        margin-bottom: 8px;
        margin-top: auto;

        &-avatar {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &-img {
            width: 24px;
            width: 24px;
            margin-right: 8px;
            border-radius: 12px;
          }

          &-major {
            @include smallTextOnCard(var(--neutral-1-04));
          }
        }

        &-like {
          display: flex;
          justify-content: space-between;
          align-items: center;

          &-icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            background: linear-gradient(
              256.8deg,
              #0698f9 13.5%,
              #f906f9 87.25%
            );
            mask: url(../../assets/svg/heart.svg) no-repeat center / contain;
            -webkit-mask: url(../../assets/svg/heart.svg) no-repeat center /
              contain;
            cursor: pointer;
          }

          &-number {
            @include smallTextOnCard(var(--neutral-1-04));
          }
        }
      }
    }
  }
  // COLLECTION
  .collection {
    margin-bottom: var(--distant-bottom);
    &__nav {
      display: block;
      justify-content: space-between;
      align-items: center;
      margin: auto 0;
      margin-top: 80px;
      margin-bottom: 32px;

      &-feature {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-mobile-title {
        display: none;
        margin-right: 16px;
        font-size: 3.2rem;
        font-weight: 600;
        line-height: 48px;
        color: var(--neutral-1-01);
      }

      &-left-feature {
        display: flex;
        align-items: center;
        &-title {
          margin-right: 16px;
          font-size: 3.2rem;
          font-weight: 600;
          line-height: 48px;
          color: var(--neutral-1-01);
        }
        &-ethereum {
          margin-right: 16px;
        }

        &-btn-wrapper {
          display: flex;
          flex-shrink: 0;
          justify-content: space-between;
          align-items: center;
          background: var(--primary-2-01);
          padding: 8px 16px;
          border-radius: 12px;

          button {
            padding: 4px 10px;
            margin-right: 8px;
            font-size: 1.6rem;
            border-radius: 8px;
            color: var(--neutral-1-03);
            background: var(--primary-2-01);

            &:hover {
              background: var(--white);
            }
          }

          button:last-child {
            margin-right: 0;
          }
        }

        &-today {
          background: var(--white) !important;
        }
      }

      &-right-feature {
        display: flex;
        flex-shrink: 0;

        button {
          &:nth-child(1) {
            margin-right: 16px;
          }
          &:nth-child(2) {
            margin-right: 8px;
          }
        }
      }

      &-arrow-left-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
      }

      &-arrow-right-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat
          center / contain;
      }
      &-mobile-see-all {
        display: none;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: var(--primary-2-02);
        opacity: 1;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &__body {
      .col {
        background-clip: content-box;
      }
    }

    &__card {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      padding: 16px;
      background: white;
      border-radius: 24px;
      cursor: pointer;
      opacity: 1;
      transition: all 0.3 linear 0s;
      &:hover {
        opacity: 0.9;
      }

      &-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;

        &-thumbnail {
          flex: 1;
          margin-right: 8px;
          width: 100%;
          height: 184px;
          border-radius: 8px;
        }

        &-right-image {
          flex: 1;
          display: flex;
          justify-content: center;
          flex-direction: column;

          &-top {
            margin-bottom: 8px;
            width: 100%;
            height: 104px;
            border-radius: 8px;
            object-fit: cover;
          }

          &-bottom {
            display: flex;
            justify-content: center;

            &-1 {
              position: relative;
              margin-right: 8px;
              width: 100%;

              img {
                width: 100%;
                height: 72px;
                border-radius: 8px;
                object-fit: cover;
              }
            }

            &-2 {
              position: relative;
              width: 100%;
              img {
                width: 100%;
                height: 72px;
                border-radius: 8px;
                object-fit: cover;
              }

              &::before {
                content: "12+";
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                height: 72px;
                font-size: 2rem;
                line-height: 3rem;
                color: var(--white);
                background: var(--overlay);
                border-radius: 8px;
              }
            }
          }
        }
      }

      &-bottom {
        display: flex;
        justify-content: space-between;
        &-nft-name,
        &-nft-price {
          &-main {
            @include largeTextOnCard(var(--neutral-1-01));
          }
          &-sub {
            @include smallTextOnCard(var(--neutral-2-03));
          }
        }
        &-nft-price {
          &-main,
          &-sub {
            text-align: end;
          }
        }
      }
    }
  }

  // TOP ARTISTS
  .top-artists {
    margin-bottom: var(--distant-bottom);
    &__nav {
      display: block;
      justify-content: space-between;
      align-items: center;
      margin: auto 0;
      margin-top: 80px;
      margin-bottom: 32px;

      &-feature {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-mobile-title {
        display: none;
        margin-right: 16px;
        font-size: 3.2rem;
        font-weight: 600;
        line-height: 48px;
        color: var(--neutral-1-01);
      }

      &-left-feature {
        display: flex;
        align-items: center;
        &-title {
          margin-right: 16px;
          font-size: 3.2rem;
          font-weight: 600;
          line-height: 48px;
          color: var(--neutral-1-01);
        }
        &-ethereum {
          margin-right: 16px;
        }

        &-btn-wrapper {
          display: flex;
          flex-shrink: 0;
          justify-content: space-between;
          align-items: center;
          background: var(--primary-2-01);
          padding: 7px 16px;
          border-radius: 12px;

          button {
            padding: 4px 10px;
            margin-right: 8px;
            font-size: 1.6rem;
            border-radius: 8px;
            color: var(--neutral-1-03);
            background: var(--primary-2-01);

            &:hover {
              background: var(--white);
            }
          }

          button:last-child {
            margin-right: 0;
          }
        }

        &-today {
          background: var(--white) !important;
        }
      }

      &-right-feature {
        display: flex;
        flex-shrink: 0;

        button {
          &:nth-child(1) {
            margin-right: 16px;
          }
          &:nth-child(2) {
          }
        }
      }

      &-arrow-left-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
      }

      &-arrow-right-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat
          center / contain;
      }
      &-mobile-see-all {
        display: none;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: var(--primary-2-02);
        opacity: 1;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &__body {
      .col {
        background-clip: content-box;
      }
    }

    &__card {
      display: flex;
      margin-bottom: 16px;
      padding: 16px;
      border-radius: 24px;
      cursor: pointer;
      opacity: 1;
      transition: all 0.3 linear 0s;
      &:hover {
        opacity: 0.8;
      }

      &-artist-number {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        font-weight: 500;
        font-size: 2rem;
        line-height: 3.2rem;
        color: var(--neutral-1-02);
      }

      &-avatar {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
        flex-shrink: 0;

        &::before {
          content: "";
          position: absolute;
          right: 0;
          bottom: -7px;
          width: 28px;
          height: 28px;
          background: url(../../assets/svg/star.svg) no-repeat;
          z-index: 1;
        }

        &::after {
          content: "";
          position: absolute;
          right: -7px;
          bottom: -14px;
          width: 28px;
          height: 28px;
          background: url(../../assets/svg/checked.svg) no-repeat;
          z-index: 1;
        }

        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          box-shadow: 0 0 0 4px var(--white);
        }
      }

      &-info {
        display: flex;
        justify-content: space-evenly;
        flex: 4;
        flex-direction: column;
        align-items: flex-start;
        &-name {
          font-weight: 500;
          font-size: 1.6rem;
          line-height: 2.4rem;
          color: var(--neutral-2-01);
        }

        &-coin {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &-icon {
            width: 20px;
            height: 20px;
            background: var(--neutral-1-03);
            mask: url(../../assets/svg/eth.svg) no-repeat center / contain;
            -webkit-mask: url(../../assets/svg/eth.svg) no-repeat center /
              contain;
          }

          &-number {
            margin-left: 4px;
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: var(--neutral-1-04);
          }
        }
      }

      &-detail {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        flex: 2.5;
        img:not(:first-child) {
          margin-left: -6px;
        }

        &-nfts {
          display: flex;
          justify-content: flex-end;
          flex: 1;
          align-items: center;
        }

        &-nft-3 {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          box-shadow: 0 0 0 2px var(--white);
        }
        &-follower {
          flex: 1;
          text-align: end;
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.6rem;
          color: var(--neutral-2-03);
        }
      }
    }
  }

  // TRENDING NFTS
  .trending-nft {
    margin-bottom: var(--distant-bottom);
    &__nav {
      display: block;
      justify-content: space-between;
      align-items: center;
      margin: auto 0;
      margin-top: 80px;
      margin-bottom: 32px;

      &-feature {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-mobile-title {
        display: none;
        margin-right: 16px;
        font-size: 3.2rem;
        font-weight: 600;
        line-height: 48px;
        color: var(--neutral-1-01);
      }

      &-left-feature {
        display: flex;
        align-items: center;
        &-title {
          margin-right: 16px;
          font-size: 3.2rem;
          font-weight: 600;
          line-height: 48px;
          color: var(--neutral-1-01);
        }
        &-ethereum {
          margin-right: 16px;
        }

        &-btn-wrapper {
          display: flex;
          flex-shrink: 0;
          justify-content: space-between;
          align-items: center;
          background: var(--primary-2-01);
          padding: 8px 16px;
          border-radius: 12px;

          button {
            padding: 4px 10px;
            margin-right: 8px;
            font-size: 1.6rem;
            border-radius: 8px;
            color: var(--neutral-1-03);
            background: var(--primary-2-01);

            &:hover {
              background: var(--white);
            }
          }

          button:last-child {
            margin-right: 0;
          }
        }

        &-today {
          background: var(--white) !important;
        }
      }

      &-right-feature {
        display: flex;
        flex-shrink: 0;

        button {
          &:nth-child(1) {
            margin-right: 16px;
          }
          &:nth-child(2) {
            margin-right: 8px;
          }
        }
      }

      &-arrow-left-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
          contain;
      }

      &-arrow-right-icon {
        width: 16px;
        height: 16px;
        background-color: var(--primary-2-02);
        mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat center /
          contain;
        -webkit-mask: url(../../assets/svg/arrow-right-icon.svg) no-repeat
          center / contain;
      }
      &-mobile-see-all {
        display: none;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: var(--primary-2-02);
        opacity: 1;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &__body {
      .col {
        background-clip: content-box;
      }
    }

    &__card {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      padding: 16px;
      height: 500px;
      background: white;
      border-radius: 24px;
      cursor: pointer;
      opacity: 1;
      transition: all 0.3 linear 0s;
      &:hover {
        opacity: 0.9;
      }

      &-top {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        width: 100%;
        height: 264px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 16px;
        }
      }

      &-bottom {
        display: flex;
        flex-direction: column;
        flex: 1;
        &-header {
          display: flex;
          flex-direction: column;
          flex: 1;
          &-title {
            @include smallTextOnCard(var(--neutral-1-04));
          }
          &-detail-name {
            margin-bottom: 16px;
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.4rem;
            color: var(--neutral-1-01);
            @include limitTextRow(3);
          }
        }
        &-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding: 12px;
          background: var(--background-7);
          border-radius: 12px;
          &-price,
          &-offer {
            &-text,
            &-dolar {
              @include smallTextOnCard(var(--neutral-1-04));
            }

            &-coin {
              @include largeTextOnCard(var(--neutral-1-01));
            }
          }
        }
      }
    }

    &__swiper {
      &-prev,
      &-next {
        color: rgba(0, 0, 0, 0.6);
        opacity: 1;
        transition: all 0.3 linear 0s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  // ADVERTISE
  .advertise {
    margin-bottom: var(--distant-bottom);
    display: flex;
    align-items: center;

    &__cards {
      display: flex;
      justify-content: space-evenly;
      flex: 1;
      align-items: center;
      margin-right: 46px;
    }

    &__card {
      padding: 16px;
      border-radius: 16px;
      background: var(--white);
      cursor: pointer;
      opacity: 1;
      transition: all 0.3s ease;
      box-shadow: 20px 20px 30px rgba(124, 65, 154, 0.1);

      &:first-child {
        margin-right: 16px;
        transform: translateY(70px);
      }

      &:hover {
        transform: translateY(-15px);
        &:first-child {
          margin-right: 16px;
          transform: translateY(55px);
        }
        opacity: 0.8;
      }

      &-top {
        position: relative;
        margin-bottom: 16px;
        width: 100%;
        height: 252px;
        overflow: hidden;
        transition: all 1s ease-in;
        -webkit-transform: scale(1);
        transform: scale(1);
        img {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          transition: transform 1s;
          &:hover {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
          }
        }
      }

      &-bottom {
        &-title {
          @include largeTextOnCard(var(--neutral-1-01));
        }

        &-sub-title {
          @include smallTextOnCard(var(--neutral-1-04));
        }
      }
    }

    &__info {
      flex: 1;

      &-title {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 4.8rem;
        color: var(--neutral-1-01);
      }

      &-sub-title {
        margin-bottom: 24px;
        padding-right: 72px;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--neutral-1-02);
      }

      &-feature {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-artist {
          margin-right: 16px;
        }

        &-buyer {
        }
      }
    }
  }

  // CATEGORY
  .category {
    margin-bottom: var(--distant-bottom);
    &__nav {
      &-title {
        margin-bottom: 32px;
        text-align: center;
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 4.8rem;
        color: var(--neutral-1-01);
      }
    }

    &__body {
      .col {
        background-clip: content-box;
      }
      &-card {
        position: relative;
        margin-top: 16px;
        cursor: pointer;
        opacity: 1;
        transition: all 0.3 linear 0s;

        &:hover {
          opacity: 0.9;
        }

        &-images {
          position: relative;
          width: 100%;
          height: 220px;
          border-radius: 10px;
          box-shadow: 0 0 0 8px rgba(164, 183, 235, 0.08);
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.05),
              rgba(0, 0, 0, 0.05)
            ),
            linear-gradient(
              292.35deg,
              rgba(20, 161, 255, 0.33) 23.23%,
              rgba(245, 61, 245, 0.33) 67.95%
            );
          overflow: hidden;

          img {
            position: absolute;
            width: 70%;
            height: 70%;
            box-shadow: 0 0 0 8px var(--white);
            border-radius: 8px;

            &:nth-child(1) {
              bottom: -50px;
              left: -110px;
              transform: rotate(28deg);
            }
            &:nth-child(2) {
              top: 54px;
              left: 50px;
              transform: rotate(24deg);
            }
            &:nth-child(3) {
              top: -60px;
              right: -100px;
              transform: rotate(40deg);
            }
          }
        }

        &-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;

          position: absolute;
          inset: 150px 24px 12px 24px;
          border-radius: 12px;
          background: var(--neutral-1-08);

          &-title {
            font-weight: 600;
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: var(--neutral-1-05);
          }
          &-item {
            font-weight: 500;
            font-size: 1.2rem;
            line-height: 1.6rem;
            color: var(--neutral-1-05);
          }
        }
      }
    }
  }

  // MARKETPLACE
  .marketplace {
    margin-bottom: var(--distant-bottom);
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &__cards {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex: 1;
    }

    &__card {
      &-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 2;

        img {
          border-radius: 16px;
          width: 352px;
          height: 358px;
        }
      }
      &-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex: 1;
        img {
          border-radius: 16px;
        }
        &-top {
          transform: translateY(20px);
          img {
            width: 172px;
            height: 160px;
          }
        }

        &-bottom {
          transform: translateY(70px) translateX(-46px);
          img {
            width: 128px;
            height: 120px;
          }
          border-radius: 16px;
        }
      }
    }

    &__info {
      flex: 1;

      &-title {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 4.8rem;
        color: var(--neutral-1-01);
      }

      &-sub-title {
        margin-bottom: 24px;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--neutral-1-02);
      }

      &-feature {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-learn-more {
          margin-right: 16px;
        }
      }
    }
  }

  //NFT
  .nft {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: var(--distant-bottom);
    padding: 90px 50px;
    background: url("https://thumbs.dreamstime.com/b/non-fungible-token-hologram-virtual-screen-nft-network-circuit-numbers-dark-background-concept-crypto-art-217481703.jpg")
      no-repeat;
    background-size: cover;
    border-radius: 32px;

    &__overlay {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      border-radius: 32px;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.4) 75%
      );
    }

    &__info {
      flex: 1;
      z-index: 2;

      &-title {
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 4.8rem;
        color: var(--neutral-1-06);
      }

      &-sub-title {
        margin-bottom: 24px;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--background-4);
        padding-right: 36px;
      }

      &-feature {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-learn-more {
          margin-right: 16px;
        }
      }
    }

    &__card {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex: 1;
      z-index: 2;
    }
  }

  // SELL
  .sell {
    margin-bottom: var(--distant-bottom);
    &__nav {
      &-title {
        margin-bottom: 40px;
        text-align: center;
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 4.8rem;
        color: var(--neutral-1-01);
      }
    }

    &__body {
      .col {
        background-clip: content-box;
      }
    }

    &__card {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      cursor: pointer;
      opacity: 1;
      transition: all 0.3 linear 0s;
      &:hover {
        opacity: 0.9;
      }

      &-top {
        margin-bottom: 24px;

        img {
          padding: 16px;
          background: var(--white);
          border-radius: 16px;
        }
      }

      &-bottom {
        &-header {
          margin-bottom: 16px;
          &-title {
            @include largeTextOnCard(var(--neutral-1-09));
          }
        }
        &-footer {
          &-title {
            @include smallTextOnCard(var(--neutral-1-02));
            @include limitTextRow(4);
          }
        }
      }
    }

    &__swiper {
      &-prev,
      &-next {
        color: rgba(0, 0, 0, 0.6);
        opacity: 1;
        transition: all 0.3 linear 0s;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

  // APP DOWNLOAD
  .app-download {
    margin-bottom: var(--distant-bottom);
    padding: 20px 40px 0 40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: var(--neutral-1-04);
    border-radius: 32px;

    &__info {
      flex: 1;
      margin-right: 16px;
      &-title {
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: var(--white);
      }

      &-title--bold {
        font-weight: bold;
      }

      &-feature {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        &-apple-store {
          margin-right: 16px;
        }
      }
    }

    &__app-install {
      display: flex;
      flex-wrap: wrap;
    }

    &__mobile-app {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex: 1;
      margin-right: 16px;
    }

    &__qr {
      display: flex;
      align-items: center;
      flex: 1;
      &-code {
        display: flex;
        justify-content: center;
        flex: 1;
        margin-right: 16px;

        img {
          padding: 12px;
          background: var(--white);
          border-radius: 16px;
        }
      }
      &-info {
        display: flex;
        flex-direction: column;
        flex: 1;
        &-arrow-left-icon {
          margin-bottom: 16px;
          width: 18px;
          height: 18px;
          background: var(--white);
          mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat center /
            contain;
          -webkit-mask: url(../../assets/svg/arrow-left-icon.svg) no-repeat
            center / contain;
        }
        &-text {
          padding-right: 80px;
          font-weight: 500;
          font-size: 1.4rem;
          line-height: 2rem;
          color: var(--white);
        }
      }
    }
  }
}

// SWIPER

.swiper {
  &-button-prev,
  &-button-next {
    color: var(--overlay);
    opacity: 1;
    transition: all 0.3 linear;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
