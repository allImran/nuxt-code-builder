const metaData = [
	{
		name: '/',
		title: 'Your It Solution | Code Builder',
		description: 'blog, spa, nuxt, vuejs, javascript'
	},{
		name: 'contact',
		title: 'Contact with us | Code Builder',
		description: 'blog, spa, nuxt, vuejs, javascript'
	},{
		name: 'services',
		title: 'The services we provide | Code Builder',
		description: 'blog, spa, nuxt, vuejs, javascript'
	},{
		name: 'blog',
		title: 'Our recent blog | Code Builder',
		description: 'blog, spa, nuxt, vuejs, javascript'
	},

];

function findMetaDat(key){
	return metaData.filter(i => i.name == key)[0];
};

function removeSpecialChar(str){
	return str.replace(/[^a-zA-Z ]/g, " ");
};

export function setMetadata(path){
	if(path == '/'){
		return findMetaDat('/')
	}

	let pathArr = path.split('/');
	let pathLength = pathArr.length;

	if(pathLength == 2){
		return findMetaDat(pathArr[1])
	}
	if(pathLength == 3){
		let data = {};
		data.title = removeSpecialChar(pathArr[2] + ' ' + '| Code Builder')
		return data;
	}
	return [pathArr, pathLength];
}