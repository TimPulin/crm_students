<template>
  <svg width="12" height="12" viewBox="0 1 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
    :class="classObj"
  >
    <g clip-path="url(#clip0_211_4865)">
      <path d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z"/>
    </g>
    <defs>
      <clipPath>
      <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)"/>
    </clipPath>
    </defs>
  </svg>
</template>

<script>
  export default {
    props: ['classObj'],
  };
</script>
