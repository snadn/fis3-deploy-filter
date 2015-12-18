'use strict';

module.exports = function (options, modified, total, next) {
	modified.reduceRight(function (_, file, index) {
		if (!fis.util.filter(file.subpath, options.include, options.exclude)) {
			modified.splice(index, 1)
		}
	}, null);
	next();
};
