amis.define('docs/zh-CN/components/tooltip-wrapper.md', function(require, exports, module, define) {

  module.exports = {
    "title": "TooltipWrapper 文字提示容器",
    "description": null,
    "type": 0,
    "group": "⚙ 功能",
    "menuName": "TooltipWrapper",
    "icon": null,
    "order": 59,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" href=\"#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本配置</h2><p>当用户鼠标悬停或者点击元素时，显示文字提示浮层，<code>title</code>可以为浮层添加标题。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"flex\",\n    \"justify\": \"space-around\",\n    \"alignItems\": \"center\",\n    \"direction\": \"row\",\n    \"style\": {\n      \"width\": 350,\n      \"height\": 30\n    },\n    \"items\": [\n      {\n        \"type\": \"tooltip-wrapper\",\n        \"content\": \"提示文字\",\n        \"body\": \"hover 激活文字提示\",\n        \"className\": \"mb-1\"\n      },\n      {\n        \"type\": \"tooltip-wrapper\",\n        \"title\": \"标题\",\n        \"content\": \"提示文字\",\n        \"trigger\": \"click\",\n        \"body\": \"click 激活文字提示\",\n        \"className\": \"mb-1\"\n      }\n    ]\n  }\n]\n</script></div><div class=\"markdown-body\">\n<p><code>body</code>支持传入多个子元素：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"content\": \"删除提示\",\n    \"inline\": true,\n    \"body\": [\n      {\n        \"type\": \"tpl\",\n        \"tpl\": \"删除\"\n      },\n      {\n        \"className\": \"ml-1\",\n        \"type\": \"icon\",\n        \"icon\": \"trash\"\n      }\n    ]\n  }\n]\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%8F%90%E7%A4%BA%E4%BD%8D%E7%BD%AE\" href=\"#%E6%8F%90%E7%A4%BA%E4%BD%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>提示位置</h2><p>提供四种不同方向的展示方式：<code>&#39;top&#39; | &#39;left&#39; | &#39;right&#39; | &#39;bottom&#39;</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"flex\",\n  \"justify\": \"space-around\",\n  \"alignItems\": \"center\",\n  \"direction\": \"column\",\n  \"items\": [\n    {\n      type: \"flex\",\n      \"justify\": \"center\",\n      \"alignItems\": \"center\",\n      \"direction\": \"row\",\n      \"style\": {\n        \"width\": 100,\n        \"height\": 30\n      },\n      \"items\": [\n        {\n          \"type\": \"tooltip-wrapper\",\n          \"content\": \"提示文字\",\n          \"body\": [\n            {\n              \"type\": \"icon\",\n              \"icon\": \"arrow-circle-up\",\n              \"className\": \"mr-1\"\n            },\n            {\n              type: \"tpl\",\n              \"tpl\": \"上\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      type: \"flex\",\n      \"justify\": \"space-around\",\n      \"alignItems\": \"center\",\n      \"direction\": \"row\",\n      \"style\": {\n        \"width\": 200,\n        \"height\": 30\n      },\n      \"items\": [\n        {\n          \"type\": \"tooltip-wrapper\",\n          \"content\": \"提示文字\",\n          \"placement\": \"left\",\n          \"body\": [\n            {\n              \"type\": \"icon\",\n              \"icon\": \"arrow-circle-left\",\n              \"className\": \"mr-1\"\n            },\n            {\n              type: \"tpl\",\n              \"tpl\": \"左\"\n            }\n          ]\n        },\n        {\n          \"type\": \"tooltip-wrapper\",\n          \"content\": \"提示文字\",\n          \"placement\": \"right\",\n          \"body\": [\n            {\n              \"type\": \"icon\",\n              \"icon\": \"arrow-circle-right\",\n              \"className\": \"mr-1\"\n            },\n            {\n              type: \"tpl\",\n              \"tpl\": \"右\"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      type: \"flex\",\n      \"justify\": \"center\",\n      \"alignItems\": \"center\",\n      \"direction\": \"row\",\n      \"style\": {\n        \"width\": 100,\n        \"height\": 30\n      },\n      \"items\": [\n        {\n          \"type\": \"tooltip-wrapper\",\n          \"content\": \"提示文字\",\n          \"placement\": \"bottom\",\n          \"body\": [\n            {\n              \"type\": \"icon\",\n              \"icon\": \"arrow-circle-down\",\n              \"className\": \"mr-1\"\n            },\n            {\n              type: \"tpl\",\n              \"tpl\": \"下\"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%BD%8D%E7%BD%AE%E5%81%8F%E7%A7%BB\" href=\"#%E4%BD%8D%E7%BD%AE%E5%81%8F%E7%A7%BB\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>位置偏移</h2><p>组件提供了关于相对提示位置的垂直、水平位置上的偏移，默认[0, 0]。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"title\": \"标题\",\n    \"content\": \"文案提示位置偏移 [10, -20]\",\n    \"offset\": [10, -20],\n    \"inline\": true,\n    \"className\": \"mr-2\",\n    \"body\": [\n      {\n        \"type\": \"tpl\",\n        \"tpl\": \"向右偏移10px向上偏移20px\"\n      }\n    ]\n  }\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%95%E7%A4%BA%E7%AE%AD%E5%A4%B4\" href=\"#%E5%B1%95%E7%A4%BA%E7%AE%AD%E5%A4%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>展示箭头</h2><p><code>showArrow</code> 为 <code>false</code> 不展示箭头。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"title\": \"标题\",\n    \"content\": \"提示内容\",\n    \"showArrow\": false,\n    \"inline\": true,\n    \"className\": \"mr-2\",\n    \"body\": [\n      {\n        \"type\": \"tpl\",\n        \"tpl\": \"没有箭头\"\n      }\n    ]\n  }\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%BB%E9%A2%98%E8%89%B2\" href=\"#%E4%B8%BB%E9%A2%98%E8%89%B2\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>主题色</h2><p>组件提供了两个不同的主题：<code>dark</code> 和 <code>light</code>，默认使用<code>light</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"title\": \"标题\",\n    \"content\": \"文案提示\",\n    \"inline\": true,\n    \"className\": \"mr-2\",\n    \"body\": [\n      {\n        \"type\": \"tpl\",\n        \"tpl\": \"light主题提示\"\n      }\n    ]\n  },\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"title\": \"标题\",\n    \"content\": \"文案提示\",\n    \"inline\": true,\n    \"tooltipTheme\": \"dark\",\n    \"body\": [\n      {\n        \"type\": \"tpl\",\n        \"tpl\": \"dark主题提示\"\n      }\n    ]\n  }\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%BB%B6%E8%BF%9F%E6%89%93%E5%BC%80-amp-%E5%85%B3%E9%97%AD\" href=\"#%E5%BB%B6%E8%BF%9F%E6%89%93%E5%BC%80-amp-%E5%85%B3%E9%97%AD\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>延迟打开&amp;关闭</h2><p><code>mouseEnterDelay</code> 为延迟展示, <code>mouseLeaveDelay</code> 为延迟隐藏，</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"title\": \"标题\",\n    \"content\": \"提示内容\",\n    \"mouseEnterDelay\": 1000,\n    \"mouseLeaveDelay\": 2000,\n    \"inline\": true,\n    \"className\": \"mr-2\",\n    \"body\": [\n      {\n        \"type\": \"tpl\",\n        \"tpl\": \"延迟1s展示，延迟2s隐藏\"\n      }\n    ]\n  }\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E6%80%81%E6%96%87%E6%A1%88\" href=\"#%E5%8A%A8%E6%80%81%E6%96%87%E6%A1%88\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动态文案</h2><p><code>content</code> 和 <code>title</code> 支持变量映射，可以从上下文中动态获取提示文案。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"data\": {\n    \"text\": \"The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.\"\n  },\n  body: {\n    \"type\": \"tooltip-wrapper\",\n    \"content\": \"${text}\",\n    \"body\": {\n      \"type\": \"html\",\n      \"style\": {\n        \"overflow\": \"hidden\",\n        \"textOverflow\": \"ellipsis\",\n        \"whiteSpace\": \"nowrap\",\n        \"maxWidth\": \"300px\",\n        \"display\": \"inline-block\"\n      },\n      \"html\": \"${text}\"\n    }\n  }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%86%85%E8%81%94%E5%B1%95%E7%A4%BA\" href=\"#%E5%86%85%E8%81%94%E5%B1%95%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>内联展示</h2><p>设置<code>&quot;inline&quot;: true</code>使容器内联展示</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">[\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"content\": \"文字提示\",\n    \"inline\": true,\n    \"className\": \"p-1 mr-3 border-2 border-solid border-indigo-400\",\n    \"body\": \"内联容器1\"\n  },\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"content\": \"文字提示\",\n    \"inline\": true,\n    \"className\": \"p-1 mr-3 border-2 border-solid border-indigo-400\",\n    \"body\": \"内联容器2\"\n  },\n  {\n    \"type\": \"tooltip-wrapper\",\n    \"content\": \"文字提示\",\n    \"className\": \"p-1 mt-3 border-2 border-solid border-green-400\",\n    \"body\": \"非内联容器\"\n  }\n]\n\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义样式</h2><p>使用<code>style</code>控制内容区样式，<code>tooltipStyle</code>控制浮层区样式</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"tooltip-wrapper\",\n  \"content\": \"文字提示(加粗)\",\n  \"inline\": true,\n  \"style\": {\n    fontStyle: \"italic\"\n  },\n  \"tooltipStyle\": {\n    fontWeight: \"bold\"\n  },\n  \"body\": [\n    {\n      \"type\": \"tpl\",\n      \"tpl\": \"一段文案\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8C%85%E8%A3%B9%E6%A0%87%E7%AD%BE\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8C%85%E8%A3%B9%E6%A0%87%E7%AD%BE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义包裹标签</h2><p>使用<code>wrapperComponent</code>修改标签名，可以让容器使用其他标签渲染：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n  \"type\": \"tooltip-wrapper\",\n  \"content\": \"文字提示\",\n  \"wrapperComponent\": \"pre\",\n  \"body\": \"function HelloWorld() {\\n    console.log('Hello World');\\n}\"\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;tooltip-wrapper&quot;</code></td>\n<td>指定为文字提示容器组件</td>\n</tr>\n<tr>\n<td>title</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>文字提示标题</td>\n</tr>\n<tr>\n<td>content</td>\n<td><code>string</code></td>\n<td><code>&quot;&quot;</code></td>\n<td>文字提示内容, 兼容之前的 tooltip 属性</td>\n</tr>\n<tr>\n<td>placement</td>\n<td><code>&quot;top&quot; | &quot;left&quot; | &quot;right&quot; | &quot;bottom&quot; </code></td>\n<td><code>&quot;top&quot;</code></td>\n<td>文字提示浮层出现位置</td>\n</tr>\n<tr>\n<td>tooltipTheme</td>\n<td><code>&quot;light&quot; | &quot;dark&quot;</code></td>\n<td><code>&quot;light&quot;</code></td>\n<td>主题样式， 默认为 light</td>\n</tr>\n<tr>\n<td>offset</td>\n<td><code>[number, number]</code></td>\n<td><code>[0, 0]</code></td>\n<td>文字提示浮层位置相对偏移量，单位 px</td>\n</tr>\n<tr>\n<td>showArrow</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否展示浮层指向箭头</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否禁用浮层提示</td>\n</tr>\n<tr>\n<td>trigger</td>\n<td><code>&quot;hover&quot; | &quot;click&quot; | &quot;focus&quot; | Array&lt;&quot;hover&quot; | &quot;click&quot; | &quot;focus&quot;&gt;</code></td>\n<td><code>&quot;hover&quot;</code></td>\n<td>浮层触发方式，支持数组写法<code>[&quot;hover&quot;, &quot;click&quot;]</code></td>\n</tr>\n<tr>\n<td>mouseEnterDelay</td>\n<td><code>number</code></td>\n<td><code>0</code></td>\n<td>浮层延迟展示时间，单位 ms</td>\n</tr>\n<tr>\n<td>mouseLeaveDelay</td>\n<td><code>number</code></td>\n<td><code>300</code></td>\n<td>浮层延迟隐藏时间，单位 ms</td>\n</tr>\n<tr>\n<td>rootClose</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否点击非内容区域关闭提示</td>\n</tr>\n<tr>\n<td>inline</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>内容区是否内联显示</td>\n</tr>\n<tr>\n<td>wrapperComponent</td>\n<td><code>string</code></td>\n<td><code>&quot;div&quot; | &quot;span&quot;</code></td>\n<td>容器标签名</td>\n</tr>\n<tr>\n<td>body</td>\n<td><a href=\"../../docs/types/schemanode\">SchemaNode</a></td>\n<td>-</td>\n<td>内容容器</td>\n</tr>\n<tr>\n<td>style</td>\n<td><code>Object</code> | <code>string</code></td>\n<td></td>\n<td>内容区自定义样式</td>\n</tr>\n<tr>\n<td>tooltipStyle</td>\n<td><code>Object</code> | <code>string</code></td>\n<td></td>\n<td>浮层自定义样式</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>内容区类名</td>\n</tr>\n<tr>\n<td>tooltipClassName</td>\n<td><code>string</code></td>\n<td></td>\n<td>文字提示浮层类名</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本配置",
          "fragment": "%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "提示位置",
          "fragment": "%E6%8F%90%E7%A4%BA%E4%BD%8D%E7%BD%AE",
          "fullPath": "#%E6%8F%90%E7%A4%BA%E4%BD%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "位置偏移",
          "fragment": "%E4%BD%8D%E7%BD%AE%E5%81%8F%E7%A7%BB",
          "fullPath": "#%E4%BD%8D%E7%BD%AE%E5%81%8F%E7%A7%BB",
          "level": 2
        },
        {
          "label": "展示箭头",
          "fragment": "%E5%B1%95%E7%A4%BA%E7%AE%AD%E5%A4%B4",
          "fullPath": "#%E5%B1%95%E7%A4%BA%E7%AE%AD%E5%A4%B4",
          "level": 2
        },
        {
          "label": "主题色",
          "fragment": "%E4%B8%BB%E9%A2%98%E8%89%B2",
          "fullPath": "#%E4%B8%BB%E9%A2%98%E8%89%B2",
          "level": 2
        },
        {
          "label": "延迟打开&amp;关闭",
          "fragment": "%E5%BB%B6%E8%BF%9F%E6%89%93%E5%BC%80-amp-%E5%85%B3%E9%97%AD",
          "fullPath": "#%E5%BB%B6%E8%BF%9F%E6%89%93%E5%BC%80-amp-%E5%85%B3%E9%97%AD",
          "level": 2
        },
        {
          "label": "动态文案",
          "fragment": "%E5%8A%A8%E6%80%81%E6%96%87%E6%A1%88",
          "fullPath": "#%E5%8A%A8%E6%80%81%E6%96%87%E6%A1%88",
          "level": 2
        },
        {
          "label": "内联展示",
          "fragment": "%E5%86%85%E8%81%94%E5%B1%95%E7%A4%BA",
          "fullPath": "#%E5%86%85%E8%81%94%E5%B1%95%E7%A4%BA",
          "level": 2
        },
        {
          "label": "自定义样式",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F",
          "level": 2
        },
        {
          "label": "自定义包裹标签",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8C%85%E8%A3%B9%E6%A0%87%E7%AD%BE",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8C%85%E8%A3%B9%E6%A0%87%E7%AD%BE",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
