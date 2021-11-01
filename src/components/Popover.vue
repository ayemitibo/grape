<template>
  <div
    v-show="!!$slots.activator"
    class="base-modal__activator"
    @click.stop="show"
  >
    <slot name="activator" :show="() => show()" />

    <div
      ref="container"
      class="base-modal"
      :class="{
        light,
        shown,
      }"
    >
      <div
        class="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-if="shown"
      >
        <div
          class="
            flex
            items-end
            justify-center
            min-h-screen
            pt-4
            px-4
            pb-20
            text-center
            sm:block sm:p-0
          "
        >
          <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            @click="onClickOutside"
          ></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >

          <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
            "
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import KeyboardEvents from "~/mixins/KeyboardEvents";

export default {
  name: "Modal",
  //   mixins: [KeyboardEvents],
  model: {
    prop: "active",
    event: "active-change",
  },
  props: {
    active: Boolean,
    disabled: Boolean,
    persistent: Boolean,
    hideOverlay: Boolean,
    noAnimate: Boolean,
    light: Boolean,
    loading: Boolean,
    extraHeaderActionIcon: { type: String, default: null },
    dismissible: { type: Boolean, default: true },
    height: { type: [String, Number], default: null },
  },
  data() {
    return {
      shown: !!this.active,
      parentModal: null,
    };
  },
  computed: {
    isMobileView() {
      return ["mobile"].includes(this.$mq);
    },
    hasOverlay() {
      return !this.isMobileView && !this.hideOverlay && !this.parentModal;
    },
  },
  watch: {
    active(active) {
      this.shown = !!active;
    },
  },
  mounted() {
    this.$refs.container && document.body.appendChild(this.$refs.container);

    // this.$once(
    //   "hook:beforeDestroy",
    //   this.$router.beforeEach((to, from, next) => {
    //     this.hide();
    //     next();
    //   })
    // );
  },
  beforeUnmount() {
    try {
      document.body.removeChild(this.$refs.container);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("Modal error", e);
    }
    this.resetParentModal();
  },
  methods: {
    show() {
      if (this.shown) {
        return;
      }

      this.hideParentModal();

      this.shown = true;

      this.$nextTick(() => {
        this.$emit("shown");
      });
    },
    hideParentModal() {
      // Modal has background with opacity so to avoid seeing many modals
      // stakcing on each other. This is to hide all other modals if any
      this.parentModal = document.querySelector(
        ".base-modal.shown .base-modal__content:not([invisible])"
      );
      if (this.parentModal) {
        this.parentModal.setAttribute("invisible", "");
      }
    },
    hide(cb) {
      this.shown = false;

      this.resetParentModal();

      setTimeout(
        () => {
          typeof cb === "function" && cb();
          this.$emit("hidden");
          this.$emit("active-change", false);
        },
        this.parentModal ? 0 : this.activeDelay * 2
      );
    },
    resetParentModal() {
      if (this.parentModal) {
        this.parentModal.removeAttribute("invisible");
        this.parentModal = null;
      }
    },
    escPress() {
      if (this.$refs.content && this.dismissible) {
        const $modals = document.querySelectorAll(".base-modal__content");
        if (
          $modals.length &&
          $modals[$modals.length - 1] === this.$refs.content
        ) {
          this.exit();
        }
      }
    },

    exit() {
      this.hide();
    },

    onClickOutside() {
      !this.persistent && this.exit();
    },
  },
};
</script>
