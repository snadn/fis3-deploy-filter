# fis3-deploy-filter

通过配置 include 和 exclude 参数，对要部署的文件进行过滤

```
fis.match('*', {
	deploy: [
		fis.plugin('filter', { exclude: ['/map.js']}),
		fis.plugin('local-deliver', {
			to: 'output'
		})
	]
});
```
