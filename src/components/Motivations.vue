<template>
    <div class="relative w-full pb-[75%]">
        <div class="absolute inset-0 grid grid-cols-2 grid-rows-2 bg-white px-4">
            <div class="border-b border-r border-indigo-600"></div>
            <div class="border-b border-l border-indigo-600"></div>
            <div class="border-r border-indigo-600"></div>
            <div class="border-l border-indigo-600"></div>
            <div class="absolute bg-pink-500 w-4 h-4 rounded-full z-10"
                :style="`top: ${100 - audienceSegmentY}%; left: ${audienceSegmentX}%; transform: translate(-50%, -50%);`"
                aria-describedby="AudienceTip"
                >
            </div>
            <div role="tooltip" id="AudienceTip"
            :style="`top: ${95 - audienceSegmentY}%; left: ${audienceSegmentX}%; transform: translate(-50%, -50%);`">
                    <p>Audience</p>
                </div>
            <div class="absolute bg-purple-500 w-4 h-4 rounded-full z-10"
                :style="`top: ${100 - brandY}%; left: ${brandX}%; transform: translate(-50%, -50%);`"
                aria-describedby="BrandTip"
                >
            </div>
            <div role="tooltip" id="BrandTip"
                :style="`top: ${95 - brandY}%; left: ${brandX}%; transform: translate(-50%, -50%);`">
                    <p>Brand</p>
                </div>
        </div>
        <div class="absolute inset-0 flex flex-col justify-between items-center">
            <div class="mb-2 bg-white p-1">Stability / Control</div>
            <div class="mt-2 bg-white p-1">Mastery / Risk</div>
        </div>
        <div class="absolute inset-0 flex flex-row justify-between items-center">
            <div class="mr-2 bg-white p-2">Belonging</div>
            <div class="ml-2 bg-white p-2">Independence</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MotivationalTheoryDiagram',
    props: {
        audienceSegmentX: {
            type: Number,
            required: true
        },
        audienceSegmentY: {
            type: Number,
            required: true
        },
        brandX: {
            type: Number,
            required: true
        },
        brandY: {
            type: Number,
            required: true
        }
    },
}
</script>
  
<style scoped>


[role="tooltip"],
.hidetooltip + [role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 2rem;
  left: 2rem;
  /* background: black;
  color: white; */
  z-index:10;
  background: var(--bg-body);
  padding: 0 4px;
  font-size: .9rem;
}
[aria-describedby]:hover,
[aria-describedby]:focus {
  /* position: relative; */
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"] {
  visibility: visible;
}

</style>
  