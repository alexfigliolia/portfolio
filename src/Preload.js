const imgsSmall = [
	'../../img/wordClouds-small.png',
	'../../img/skedge-small.jpg',
	'../../img/react-small.jpg',
	'../../img/sv-small.jpg',
	'../../img/gnocchi-small.jpg',
	'../../img/republic-small.jpg',
	'../../img/dog-small.jpg',
	'../../img/cityweb-small.jpg',
	'../../img/nightsky-small.jpg',
	'../../img/winter3.jpg',
	'../../img/tree-small.jpg',
];

const imgsLarge = [
	'../../img/wordClouds.png',
	'../../img/skedge-desktop2.jpg',
	'../../img/react-desktop2.jpg',
	'../../img/sv-large.jpg',
	'../../img/gnocchi.jpg',
	'../../img/republic-large.jpg',
	'../../img/dog.jpg',
	'../../img/cityweb.jpg',
	'../../img/nightsky.jpg',
	'../../img/winter1.jpg',
	'../../img/tree.jpg',
];

export default width => {
	const loaded = [];
	const imgs = width >= 670 ? imgsLarge : imgsSmall;
	for(let i = 0; i < imgs.length; i++) {
		const img = new Image();
    img.src = imgs[i];
    loaded[i] = img;
  }
}