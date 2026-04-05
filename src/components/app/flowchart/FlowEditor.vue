<script setup lang="ts">
import { ref } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { ControlButton, Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
import { LucideRefreshCcw, LucideSun, LucideMoon, LucideTerminal, LucideScanSearch } from "lucide-vue-next";
import { useModelStore } from "@/stores/modelStore";
import LayerNode from "./LayerNode.vue";
import AddLayerNode from "./AddLayerNode.vue";
import ValidateDialog from "./validate/ValidateDialog.vue";

/**
 * `useVueFlow` provides:
 * 1. a set of methods to interact with the VueFlow instance (like `fitView`, `setViewport`, `addEdges`, etc)
 * 2. a set of event-hooks to listen to VueFlow events (like `onInit`, `onNodeDragStop`, `onConnect`, etc)
 * 3. the internal state of the VueFlow instance (like `nodes`, `edges`, `viewport`, etc)
 */
const { onInit, onNodeDragStop, onConnect, addEdges, setViewport, toObject, nodesDraggable } = useVueFlow();

const modelStore = useModelStore();

// our dark mode toggle flag
const dark = ref(false);

nodesDraggable.value = false;

/**
 * This is a Vue Flow event-hook which can be listened to from anywhere you call the composable, instead of only on the main component
 * Any event that is available as `@event-name` on the VueFlow component is also available as `onEventName` on the composable and vice versa
 *
 * onInit is called when the VueFlow viewport is initialized
 */
onInit((vueFlowInstance) => {
  // instance is the same as the return of `useVueFlow`
  vueFlowInstance.fitView();
});

/**
 * onNodeDragStop is called when a node is done being dragged
 *
 * Node drag events provide you with:
 * 1. the event object
 * 2. the nodes array (if multiple nodes are dragged)
 * 3. the node that initiated the drag
 * 4. any intersections with other nodes
 */
onNodeDragStop(({ event, nodes, node }) => {
  console.log("Node Drag Stop", { event, nodes, node });
});

/**
 * onConnect is called when a new connection is created.
 *
 * You can add additional properties to your new edge (like a type or label) or block the creation altogether by not calling `addEdges`
 */
onConnect((connection) => {
  addEdges(connection);
});

/**
 * To update a node or multiple nodes, you can
 * 1. Mutate the node objects *if* you"re using `v-model`
 * 2. Use the `updateNode` method (from `useVueFlow`) to update the node(s)
 * 3. Create a new array of nodes and pass it to the `nodes` ref
 */

/**
 * toObject transforms your current graph data to an easily persist-able object
 */
function logToObject() {
  console.log(toObject());
}

/**
 * Resets the current viewport transformation (zoom & pan)
 */
function resetTransform() {
  setViewport({ x: 0, y: 0, zoom: 1 });
}

function toggleDarkMode() {
  dark.value = !dark.value;
}
</script>

<template>
  <VueFlow :nodes="modelStore.modelNodes" :edges="[]" :class="{ dark }" class="basic-flow grow" :default-viewport="{ zoom: 1.5 }" :min-zoom="0.2" :max-zoom="4" fit-view-on-init>
    <Background pattern-color="#aaa" :gap="16" />

    <template #node-layer="props">
      <LayerNode v-if="modelStore.layers.find((layer) => layer.id === props.id)" :id="props.id" :layer="modelStore.layers.find((layer) => layer.id === props.id)!" />
    </template>

    <template #node-add-layer="props">
      <AddLayerNode :id="props.id" />
    </template>

    <MiniMap />

    <Controls position="top-left">
      <ControlButton title="Reset Transform" @click="resetTransform">
        <LucideRefreshCcw class="h-4 w-4" />
      </ControlButton>

      <ControlButton title="Toggle Dark Mode" @click="toggleDarkMode">
        <LucideSun v-if="!dark" class="h-4 w-4" />
        <LucideMoon v-else class="h-4 w-4" />
      </ControlButton>

      <ControlButton title="Log `toObject`" @click="logToObject">
        <LucideTerminal class="h-4 w-4" />
      </ControlButton>
    </Controls>
    <ValidateDialog>
      <Controls class="bg-mint-700 p-4 rounded-xl" position="bottom-left" @click="modelStore.validateModel">
        <LucideScanSearch class="h-5 w-5 stroke-accent" />
      </Controls>
    </ValidateDialog>
  </VueFlow>
</template>
<style scoped>
.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.basic-flow.dark {
  background: #2d3748;
  color: #fffffb;
}

.basic-flow.dark .vue-flow__node {
  background: #4a5568;
  color: #fffffb;
}

.basic-flow.dark .vue-flow__node.selected {
  background: #333;
  box-shadow: 0 0 0 2px #2563eb;
}

.basic-flow .vue-flow__controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.basic-flow.dark .vue-flow__controls {
  border: 1px solid #fffffb;
}

.basic-flow .vue-flow__controls .vue-flow__controls-button {
  border: none;
  border-right: 1px solid #eee;
}

.basic-flow .vue-flow__controls .vue-flow__controls-button svg {
  height: 100%;
  width: 100%;
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button {
  background: #333;
  fill: #fffffb;
  border: none;
}

.basic-flow.dark .vue-flow__controls .vue-flow__controls-button:hover {
  background: #4d4d4d;
}

.basic-flow.dark .vue-flow__edge-textbg {
  fill: #292524;
}

.basic-flow.dark .vue-flow__edge-text {
  fill: #fffffb;
}
</style>
