const show = (id, value) => document.querySelector(id).innerHTML = value

const webGl = document.getElementById("glcanvas").getContext("webgl")

const getUnmaskedInfo = () => {
  const dbgRenderInfo = webGl.getExtension("WEBGL_debug_renderer_info");
  if (dbgRenderInfo) return webGl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL)
  return ''
}

show('#hardwareConcurrency', navigator?.hardwareConcurrency ?? 'not supported')
show('#deviceMemory', navigator?.deviceMemory ?? 'not supported')
show('#totalHeap', performance?.memory?.totalJSHeapSize ?? 'not supported')
show('#webglRenderer', webGl.getParameter(webGl.RENDERER))
show('#webglUnmaskedRenderer', getUnmaskedInfo(webGl))

