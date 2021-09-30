<template>
  <div class="image-viewer-wrap">
    <img :class="className" :src="src" alt="">
  </div>
</template>

<script>
import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

export default {
  props: ['src', 'zoomTo', 'className'],
  data() {
    return {
      imageViewer: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.imageViewer = new Viewer(document.querySelector(`.${this.className}`), {
        className: 'image-viewer',
        title: false,
        toggleOnDblclick: false,
      });
    });
  },
  beforeDestroy() {
    if (this.imageViewer) this.imageViewer.destory();
  }
}
</script>

<style lang="stylus">
.image-viewer-wrap
  width 100%

</style>