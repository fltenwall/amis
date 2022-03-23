amis.define('docs/zh-CN/components/status.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Status 状态",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Status",
    "icon": null,
    "order": 65,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"status\",\n    \"value\": 1\n}\n</script></div><div class=\"markdown-body\">\n<p>它最适合的用法是放在 crud 的列中，用来表示状态</p>\n<h2><a class=\"anchor\" name=\"%E9%BB%98%E8%AE%A4%E7%8A%B6%E6%80%81%E5%88%97%E8%A1%A8\" href=\"#%E9%BB%98%E8%AE%A4%E7%8A%B6%E6%80%81%E5%88%97%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>默认状态列表</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"status\",\n      \"value\": 0\n    },\n    {\n      \"type\": \"status\",\n      \"value\": 1\n    },\n    {\n      \"type\": \"status\",\n      \"value\": \"success\"\n    },\n    {\n      \"type\": \"status\",\n      \"value\": \"pending\"\n    },\n    {\n      \"type\": \"status\",\n      \"value\": \"fail\"\n    },\n    {\n      \"type\": \"status\",\n      \"value\": \"fail\"\n    },\n    {\n      \"type\": \"status\",\n      \"value\": \"queue\"\n    },\n    {\n      \"type\": \"status\",\n      \"value\": \"schedule\"\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E7%8A%B6%E6%80%81%E5%9B%BE%E6%A0%87%E5%92%8C%E6%96%87%E6%9C%AC\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%8A%B6%E6%80%81%E5%9B%BE%E6%A0%87%E5%92%8C%E6%96%87%E6%9C%AC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义状态图标和文本</h2><p>通过 <code>map</code> 和 <code>mapLabel</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n  \"type\": \"page\",\n  \"body\": [\n    {\n      \"type\": \"status\",\n      \"map\": {\n        \"0\": \"fa fa-check-circle\",\n        \"1\": \"fa fa-times-circle\"\n      },\n      \"labelMap\": {\n        \"0\": \"正常\",\n        \"1\": \"异常\"\n      },\n      \"value\": 0\n    },\n    {\n      \"type\": \"status\",\n      \"map\": {\n        \"0\": \"fas fa-check-circle\",\n        \"1\": \"fas fa-times-circle\"\n      },\n      \"labelMap\": {\n        \"0\": \"正常\",\n        \"1\": \"异常\"\n      },\n      \"value\": 1\n    }\n  ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td></td>\n<td><code>&quot;status&quot;</code> 指定为 Status 渲染器</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>外层 Dom 的类名</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td><code>string</code></td>\n<td><code>-</code></td>\n<td>占位文本</td>\n</tr>\n<tr>\n<td>map</td>\n<td><code>object</code></td>\n<td></td>\n<td>映射图标</td>\n</tr>\n<tr>\n<td>labelMap</td>\n<td><code>object</code></td>\n<td></td>\n<td>映射文本</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "默认状态列表",
          "fragment": "%E9%BB%98%E8%AE%A4%E7%8A%B6%E6%80%81%E5%88%97%E8%A1%A8",
          "fullPath": "#%E9%BB%98%E8%AE%A4%E7%8A%B6%E6%80%81%E5%88%97%E8%A1%A8",
          "level": 2
        },
        {
          "label": "自定义状态图标和文本",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E7%8A%B6%E6%80%81%E5%9B%BE%E6%A0%87%E5%92%8C%E6%96%87%E6%9C%AC",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%8A%B6%E6%80%81%E5%9B%BE%E6%A0%87%E5%92%8C%E6%96%87%E6%9C%AC",
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
