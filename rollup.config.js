export default {
	entry: './index.js',
	external: ['@emmetio/stream-reader'],
	targets: [
		{format: 'cjs', dest: 'dist/implicit-tag.cjs.js'},
		{format: 'es',  dest: 'dist/implicit-tag.es.js'}
	]
};
