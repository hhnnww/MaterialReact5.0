export function getRatio(img_url: string) {
	const img = new Image();
	img.src = img_url;
	return img.width / img.height;
}
