<template>
  <div class="cover__outer">
    <div class="info__outer">
      <div class="about_me">
        <img src="../assets/img/Avatar.jpg" alt="Avatar" class="avatar" />
        <h1>守望者旃檀</h1>
        <span>喷人非血口</span>
        <span>八道岂胡说</span>
        <span>一二文字</span>
        <span>点滴生活</span>
      </div>
    </div>
    <div class="next__outer">
      <svg
        id="next_top_1"
        t="1652280926375"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="982"
        width="200"
        height="200"
      >
        <path d="M511.609097 961.619254" p-id="983"></path>
        <path
          d="M846.620104 753.070474 511.629563 406.696676 172.304298 757.600651l0-0.017396c-11.521404 11.462053-27.132964 18.532075-44.375673 18.532075-35.320437 0-63.923892-29.600155-63.923892-66.109674 0-17.817808 6.831592-33.986045 17.917068-45.886073l0 0 383.580189-396.650879 0 0c11.643178-12.456706 27.930119-20.2236 46.006823-20.2236l0.12075 0 0.156566 0c18.076704 0 34.406624 7.766894 46.006823 20.2236l0.038886 0 383.54642 396.650879-0.160659 0.160659c11.042497 11.877515 17.796318 27.969005 17.796318 45.725414 0 36.509519-28.605501 66.109674-63.923892 66.109674C875.700419 776.11533 858.342076 767.175727 846.620104 753.070474L846.620104 753.070474zM846.620104 753.070474"
          p-id="984"
        ></path>
      </svg>
      <svg
        id="next_top_2"
        t="1652280926375"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="982"
        width="200"
        height="200"
      >
        <path d="M511.609097 961.619254" p-id="983"></path>
        <path
          d="M846.620104 753.070474 511.629563 406.696676 172.304298 757.600651l0-0.017396c-11.521404 11.462053-27.132964 18.532075-44.375673 18.532075-35.320437 0-63.923892-29.600155-63.923892-66.109674 0-17.817808 6.831592-33.986045 17.917068-45.886073l0 0 383.580189-396.650879 0 0c11.643178-12.456706 27.930119-20.2236 46.006823-20.2236l0.12075 0 0.156566 0c18.076704 0 34.406624 7.766894 46.006823 20.2236l0.038886 0 383.54642 396.650879-0.160659 0.160659c11.042497 11.877515 17.796318 27.969005 17.796318 45.725414 0 36.509519-28.605501 66.109674-63.923892 66.109674C875.700419 776.11533 858.342076 767.175727 846.620104 753.070474L846.620104 753.070474zM846.620104 753.070474"
          p-id="984"
        ></path>
      </svg>
      <svg
        id="next_top_3"
        t="1652280926375"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="982"
        width="200"
        height="200"
      >
        <path d="M511.609097 961.619254" p-id="983"></path>
        <path
          d="M846.620104 753.070474 511.629563 406.696676 172.304298 757.600651l0-0.017396c-11.521404 11.462053-27.132964 18.532075-44.375673 18.532075-35.320437 0-63.923892-29.600155-63.923892-66.109674 0-17.817808 6.831592-33.986045 17.917068-45.886073l0 0 383.580189-396.650879 0 0c11.643178-12.456706 27.930119-20.2236 46.006823-20.2236l0.12075 0 0.156566 0c18.076704 0 34.406624 7.766894 46.006823 20.2236l0.038886 0 383.54642 396.650879-0.160659 0.160659c11.042497 11.877515 17.796318 27.969005 17.796318 45.725414 0 36.509519-28.605501 66.109674-63.923892 66.109674C875.700419 776.11533 858.342076 767.175727 846.620104 753.070474L846.620104 753.070474zM846.620104 753.070474"
          p-id="984"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "appBackground",
  setup() {},
});
</script>
<style lang="less" scoped>
.cover__outer {
  height: 100vh;
  width: 100vw;
  max-width: 1280px;
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #efdddf;
  background-size: cover;
  background-image: url('../assets/img/cover_background.jpg');
}

.next__outer {
  margin-top: 25vh;
}

.about_me {
  h1 {
    margin-bottom: 3vh;
  }
  span {
    display: block;
    font-family: fzxk, "Courier New", Courier, monospace;
    font-size: 20px;
    margin-top: 2px;
  }
}

.avatar {
  margin-top: 25vh;
  border-radius: 50%;
  width: 66px;
  height: 66px;
}

.next__outer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36px;
  height: 100px;
  margin: auto;
  cursor: pointer;
  svg {
    height: 33px;
    width: 33px;
    fill: rgba(220, 220, 220, 0.8);
    // animation: next-top 1s linear infinite;
  }
}
#next_top_1 {
  animation: 1.8s next-top-1 linear infinite 0.9s;
}
#next_top_2 {
  animation: 1.8s next-top-2 linear infinite 0.6s;
}
#next_top_3 {
  animation: 1.8s next-top-3 linear infinite 0.3s;
}

@keyframes next-top-1 {
  to {
    opacity: 0;
    transform: translateY(-22px);
  }
}
@keyframes next-top-2 {
  to {
    opacity: 0;
    transform: translateY(-18px);
  }
}
@keyframes next-top-3 {
  to {
    opacity: 0;
    transform: translateY(-16px);
  }
}
</style>